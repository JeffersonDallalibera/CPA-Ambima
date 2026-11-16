/**
 * PUBLIC BARREL — src/modules/dashboard/index.js
 * Feature Module: Executive Financial Terminal Dashboard & Sprint Pareto 70/30
 * Following `frontend-architecture` §2.1:
 * Only cross-module entry point for the `dashboard` feature.
 *
 * Conceptual ES Module contract:
 * export { DASHBOARD_MODULE_ID, calculateExecutiveTelemetry, formatReadinessBadge, DashboardModule }
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(root);
  } else {
    root.CPA_MODULES = root.CPA_MODULES || {};
    root.CPA_MODULES.dashboard = factory(root);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this, function (root) {
  "use strict";

  const DASHBOARD_MODULE_ID = "dashboard";

  const ANBIMA_WEIGHTS = {
    1: { weightPct: 20, examQuestions: 10, label: "SFN, Economia & Matemática Financeira" },
    2: { weightPct: 40, examQuestions: 20, label: "Produtos do Mercado & Resolução CVM 175" },
    3: { weightPct: 30, examQuestions: 15, label: "Relacionamento, Finanças Pessoais, Ética & Ilícitos" },
    4: { weightPct: 10, examQuestions: 5, label: "Inovação Financeira: ESG, DeFi, Open Finance & IA" }
  };

  function calculateExecutiveTelemetry(modules, state, serverAnalytics) {
    const mods = Array.isArray(modules) ? modules : [];
    const masteredTopics = (state && state.masteredTopics) || {};
    const answeredQuestions = (state && state.answeredQuestions) || {};

    let totalQ = 0;
    let answeredCount = 0;
    let hitCount = 0;
    let totalTopics = 0;
    let doneTopics = 0;
    let weightedAccuracySum = 0;
    let weightedReadinessSum = 0;

    const moduleMetrics = mods.map((m) => {
      const mId = Number(m.id);
      const wInfo = ANBIMA_WEIGHTS[mId] || { weightPct: parseInt(m.peso, 10) || 25, examQuestions: m.questoesProva || 10 };
      const weight = wInfo.weightPct / 100;
      const topicos = m.topicos || [];
      const questoes = m.questoes || [];
      const mDoneTopics = topicos.filter((t) => masteredTopics[mId + "_" + t.codigo] || masteredTopics[t.key]).length;
      const mAnswered = questoes.filter((q) => answeredQuestions[q.id]);
      const mHits = mAnswered.filter((q) => answeredQuestions[q.id].correct).length;

      totalTopics += topicos.length;
      doneTopics += mDoneTopics;
      totalQ += questoes.length;
      answeredCount += mAnswered.length;
      hitCount += mHits;

      const pctHit = mAnswered.length ? Math.round((mHits / mAnswered.length) * 100) : 0;
      const pctTopic = topicos.length ? Math.round((mDoneTopics / topicos.length) * 100) : 0;
      const modReadiness = Math.round(pctHit * 0.7 + pctTopic * 0.3);

      weightedAccuracySum += pctHit * weight;
      weightedReadinessSum += modReadiness * weight;

      return {
        id: mId,
        titulo: m.titulo,
        peso: m.peso || `${wInfo.weightPct}%`,
        weightPct: wInfo.weightPct,
        questoesProva: m.questoesProva || wInfo.examQuestions,
        totalQuestions: questoes.length,
        officialQuestions: questoes.filter((q) => q.oficial).length,
        answeredCount: mAnswered.length,
        hitCount: mHits,
        pctHit,
        totalTopics: topicos.length,
        doneTopics: mDoneTopics,
        pctTopic,
        modReadiness
      };
    });

    const remoteReadiness =
      serverAnalytics &&
      (serverAnalytics.readinessScore ??
        serverAnalytics.readiness_score ??
        (serverAnalytics.summary && serverAnalytics.summary.readiness_score));

    const readinessScore =
      typeof remoteReadiness === "number" && !Number.isNaN(remoteReadiness)
        ? Math.round(remoteReadiness)
        : Math.round(weightedReadinessSum);

    return {
      totalQ,
      answeredCount,
      hitCount,
      overallAccuracyPct: answeredCount ? Math.round((hitCount / answeredCount) * 100) : 0,
      weightedAccuracyPct: Math.round(weightedAccuracySum),
      readinessScore,
      totalTopics,
      doneTopics,
      topicMasteryPct: totalTopics ? Math.round((doneTopics / totalTopics) * 100) : 0,
      moduleMetrics
    };
  }

  function formatReadinessBadge(score) {
    if (score >= 70) {
      return { cls: "badge-green", label: "APTO PARA EXAME (≥70%)", color: "#10b981" };
    }
    if (score >= 50) {
      return { cls: "badge-amber", label: "ZONA DE TRANSIÇÃO (50–69%)", color: "#f59e0b" };
    }
    return { cls: "badge-blue", label: "FASE DE ACUMULAÇÃO (<50%)", color: "#06b6d4" };
  }

  return {
    DASHBOARD_MODULE_ID,
    ANBIMA_WEIGHTS,
    calculateExecutiveTelemetry,
    formatReadinessBadge
  };
});
