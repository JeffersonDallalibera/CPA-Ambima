/**
 * PUBLIC BARREL — src/shared/store/index.js
 * Following `frontend-architecture` §4 (State split by origin):
 * 1. `cpaQueryKeys` — Hierarchical query key factory for Server State invalidation
 * 2. `serverStateStore` (IServerStateCache) — Authoritative remote state from PostgreSQL `cpa-ambima`
 *    with optimistic updates and offline localStorage cache reconciliation
 * 3. `uiStateStore` (ICpaUiState) — Client/UI state only (tabs, filters, modals, theme, active study mode)
 *
 * Conceptual ES Module contract:
 * export { cpaQueryKeys, serverStateStore, uiStateStore, computeWeightedReadiness }
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(root);
  } else {
    root.CPA_STORE = factory(root);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this, function (root) {
  "use strict";

  const STORAGE_KEY = "cpa_pro_mastery_2026_v2";

  /**
   * Hierarchical Query Keys Factory (`frontend-architecture` §4.3)
   */
  const cpaQueryKeys = {
    all: ["cpa-ambima"],
    bootstrap: () => [...cpaQueryKeys.all, "bootstrap"],
    analytics: () => [...cpaQueryKeys.all, "analytics"],
    studyMaterials: () => [...cpaQueryKeys.all, "study-materials"],
    modules: () => [...cpaQueryKeys.all, "modules"],
    moduleDetail: (id) => [...cpaQueryKeys.modules(), String(id)],
    maps: () => [...cpaQueryKeys.all, "maps"]
  };

  const OFFICIAL_WEIGHTS = {
    1: 0.20, // Módulo 1: 20% (10 questões na prova)
    2: 0.40, // Módulo 2: 40% (20 questões na prova)
    3: 0.30, // Módulo 3: 30% (15 questões na prova)
    4: 0.10  // Módulo 4: 10% (5 questões na prova)
  };

  function loadPersistedSnapshot() {
    try {
      if (typeof localStorage !== "undefined") {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          parsed.simulations = Array.isArray(parsed.simulations) ? parsed.simulations : [];
          return parsed;
        }
      }
    } catch (_) {}
    return {
      theme: "dark",
      sprintDone: {},
      masteredTopics: {},
      answeredQuestions: {},
      favoriteQuestions: {},
      completedCases: {},
      simulations: []
    };
  }

  function savePersistedSnapshot(snapshot) {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
      }
    } catch (_) {}
  }

  /**
   * Compute ANBIMA CPA Weighted Readiness Score (20% / 40% / 30% / 10%)
   * Combines question accuracy (70% weight) + topic mastery (30% weight) per module,
   * weighted by official ANBIMA exam distribution (M1=20%, M2=40%, M3=30%, M4=10%).
   */
  function computeWeightedReadiness(modulesList, serverData) {
    const mods = Array.isArray(modulesList) ? modulesList : [];
    const masteredTopics = (serverData && serverData.masteredTopics) || {};
    const answeredQuestions = (serverData && serverData.answeredQuestions) || {};

    let weightedScoreSum = 0;
    let weightedAccuracySum = 0;
    const byModule = [];
    const priorityTopics = [];

    mods.forEach((m) => {
      const mId = Number(m.id);
      const weight = OFFICIAL_WEIGHTS[mId] || (parseInt(m.peso, 10) || 25) / 100;
      const topics = m.topicos || [];
      const questions = m.questoes || [];
      const officialCount = questions.filter((q) => q.oficial).length;

      const masteredCount = topics.filter((t) => masteredTopics[mId + "_" + t.codigo] || masteredTopics[t.key]).length;
      const topicPct = topics.length ? Math.round((masteredCount / topics.length) * 100) : 0;

      let answeredCount = 0;
      let hitCount = 0;
      questions.forEach((q) => {
        const ans = answeredQuestions[q.id];
        if (ans) {
          answeredCount++;
          if (ans.correct) hitCount++;
        }
      });

      const accuracyPct = answeredCount ? Math.round((hitCount / answeredCount) * 100) : 0;
      // Module readiness blends accuracy (70%) and coverage/mastery (30%)
      const coverageFactor = questions.length ? Math.min(1, answeredCount / Math.max(5, Math.round(questions.length * 0.35))) : 0;
      const effectiveAcc = answeredCount ? accuracyPct * (0.5 + 0.5 * coverageFactor) : 0;
      const moduleReadiness = Math.round(effectiveAcc * 0.7 + topicPct * 0.3);

      weightedScoreSum += moduleReadiness * weight;
      weightedAccuracySum += accuracyPct * weight;

      topics.forEach((t) => {
        const k = mId + "_" + t.codigo;
        if (!masteredTopics[k] && !masteredTopics[t.key]) {
          priorityTopics.push({
            key: k,
            moduleId: mId,
            codigo: t.codigo,
            titulo: t.titulo,
            prioridade: t.prioridade || (mId === 2 || mId === 3 ? "Alta" : "Média"),
            pesoModulo: m.peso || `${Math.round(weight * 100)}%`
          });
        }
      });

      byModule.push({
        moduleId: mId,
        id: mId,
        titulo: m.titulo,
        peso: m.peso || `${Math.round(weight * 100)}%`,
        weightPct: Math.round(weight * 100),
        questoesProva: m.questoesProva || m.questoes_prova || Math.round(weight * 50),
        totalQuestions: questions.length,
        officialQuestions: officialCount,
        answeredQuestions: answeredCount,
        correctAnswers: hitCount,
        accuracyPct,
        totalTopics: topics.length,
        masteredTopics: masteredCount,
        topicMasteryPct: topicPct,
        readinessScore: moduleReadiness
      });
    });

    const readinessScore = Math.round(weightedScoreSum);
    const weightedAccuracy = Math.round(weightedAccuracySum);

    return {
      readinessScore,
      weightedAccuracy,
      passingThreshold: 70,
      statusLabel:
        readinessScore >= 75
          ? "PRONTO PARA APROVAÇÃO (ZONA DE SEGURANÇA)"
          : readinessScore >= 60
          ? "COMPETITIVO — INTENSIFICAR MÓDULOS 2 E 3"
          : "EM CONSTRUÇÃO — PRIORIZAR PARETO 70/30 (M2 + M3)",
      byModule,
      priorityTopics: priorityTopics.slice(0, 8)
    };
  }

  // --- 1. SERVER STATE CACHE (Authoritative PostgreSQL `cpa-ambima` layer) ---
  const initialSnap = loadPersistedSnapshot();
  const serverCache = {
    dbConnected: false,
    databaseName: "cpa-ambima",
    lastSyncAt: null,
    masteredTopics: initialSnap.masteredTopics || {},
    answeredQuestions: initialSnap.answeredQuestions || {},
    favoriteQuestions: initialSnap.favoriteQuestions || {},
    completedCases: initialSnap.completedCases || {},
    sprintDone: initialSnap.sprintDone || {},
    simulations: initialSnap.simulations || [],
    analytics: null,
    studyMaterials: null,
    counts: null
  };

  const serverListeners = new Set();

  const serverStateStore = {
    getSnapshot() {
      return serverCache;
    },

    subscribe(listener) {
      serverListeners.add(listener);
      return () => serverListeners.delete(listener);
    },

    notify() {
      serverListeners.forEach((fn) => {
        try {
          fn(serverCache);
        } catch (_) {}
      });
    },

    hydrateFromBootstrap(data) {
      if (!data || typeof data !== "object") return;
      serverCache.dbConnected = true;
      serverCache.lastSyncAt = new Date().toISOString();
      if (data.masteredTopics) serverCache.masteredTopics = data.masteredTopics;
      if (data.answeredQuestions) serverCache.answeredQuestions = data.answeredQuestions;
      if (data.favoriteQuestions) serverCache.favoriteQuestions = data.favoriteQuestions;
      if (data.completedCases) serverCache.completedCases = data.completedCases;
      if (data.sprintDone) serverCache.sprintDone = data.sprintDone;
      if (Array.isArray(data.simulations)) serverCache.simulations = data.simulations;
      if (data.counts) serverCache.counts = data.counts;
      this.persistOfflineCache();
      this.notify();
    },

    setAnalytics(analyticsPayload) {
      serverCache.analytics = analyticsPayload;
      this.notify();
    },

    setStudyMaterials(materialsPayload) {
      serverCache.studyMaterials = materialsPayload;
      this.notify();
    },

    persistOfflineCache(themeOverride) {
      savePersistedSnapshot({
        theme: themeOverride || uiState.theme || "dark",
        sprintDone: serverCache.sprintDone,
        masteredTopics: serverCache.masteredTopics,
        answeredQuestions: serverCache.answeredQuestions,
        favoriteQuestions: serverCache.favoriteQuestions,
        completedCases: serverCache.completedCases,
        simulations: serverCache.simulations
      });
    }
  };

  // --- 2. UI / CLIENT STATE STORE (Pure UI state — never duplicates raw DB entities) ---
  const INITIAL_UI_STATE = {
    activeTab: "dashboard",
    theme: initialSnap.theme || "dark",
    studySubView: "topicos", // 'topicos' | 'tabelas' | 'hp12c-guia' | 'apostilas'
    selectedModuleId: 2,
    selectedApostilaDoc: "modulo2",
    hp12cModalOpen: false,
    qFilters: {
      moduleId: "all",
      origin: "all",
      difficulty: "all",
      search: ""
    },
    fcFilterModuleId: "all"
  };

  let uiState = { ...INITIAL_UI_STATE, qFilters: { ...INITIAL_UI_STATE.qFilters } };
  const uiListeners = new Set();

  const uiStateStore = {
    getState() {
      return uiState;
    },

    setState(partial) {
      const next = typeof partial === "function" ? partial(uiState) : partial;
      uiState = { ...uiState, ...next };
      if (next && next.theme) {
        serverStateStore.persistOfflineCache(next.theme);
      }
      uiListeners.forEach((fn) => {
        try {
          fn(uiState);
        } catch (_) {}
      });
    },

    subscribe(listener) {
      uiListeners.add(listener);
      return () => uiListeners.delete(listener);
    },

    reset() {
      uiState = { ...INITIAL_UI_STATE, qFilters: { ...INITIAL_UI_STATE.qFilters } };
      uiListeners.forEach((fn) => {
        try {
          fn(uiState);
        } catch (_) {}
      });
    }
  };

  return {
    STORAGE_KEY,
    OFFICIAL_WEIGHTS,
    cpaQueryKeys,
    computeWeightedReadiness,
    serverStateStore,
    uiStateStore
  };
});
