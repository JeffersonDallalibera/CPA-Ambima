/**
 * PUBLIC BARREL — src/modules/questions/index.js
 * Feature Module: Validated Question Bank (148 Questions: 121 Official Cesgranrio + 27 Inéditas)
 * Following `frontend-architecture` §2.1:
 * Only cross-module entry point for the `questions` feature.
 *
 * Conceptual ES Module contract:
 * export { QUESTIONS_MODULE_ID, filterQuestionPool, getQuestionStats }
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(root);
  } else {
    root.CPA_MODULES = root.CPA_MODULES || {};
    root.CPA_MODULES.questions = factory(root);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this, function (root) {
  "use strict";

  const QUESTIONS_MODULE_ID = "questions";

  function filterQuestionPool(modules, filters, state) {
    const {
      modFilter = "all",
      originFilter = "all",
      diffFilter = "all",
      searchQ = ""
    } = filters || {};
    const answeredQuestions = (state && state.answeredQuestions) || {};
    const favoriteQuestions = (state && state.favoriteQuestions) || {};
    const qLower = (searchQ || "").trim().toLowerCase();

    let pool = [];
    (modules || []).forEach((m) => {
      if (modFilter !== "all" && String(m.id) !== String(modFilter)) return;
      (m.questoes || []).forEach((q) => {
        pool.push({ ...q, moduloId: m.id, moduloTitulo: m.titulo });
      });
    });

    if (originFilter === "oficial") pool = pool.filter((q) => q.oficial);
    if (originFilter === "inedita") pool = pool.filter((q) => !q.oficial);
    if (originFilter === "wrong") {
      pool = pool.filter((q) => answeredQuestions[q.id] && !answeredQuestions[q.id].correct);
    }
    if (originFilter === "fav") {
      pool = pool.filter((q) => favoriteQuestions[q.id]);
    }
    if (diffFilter !== "all") {
      pool = pool.filter((q) =>
        (q.dificuldade || "").toLowerCase().startsWith(diffFilter.slice(0, 3).toLowerCase())
      );
    }
    if (qLower) {
      pool = pool.filter((q) => {
        const hay = `${q.id} ${q.codigoItem || ""} ${q.codigoPD || ""} ${q.topicoPD || ""} ${q.contexto || ""} ${q.enunciado || ""}`.toLowerCase();
        return hay.includes(qLower);
      });
    }

    return pool;
  }

  function getQuestionStats(pool, answeredQuestions) {
    const ansMap = answeredQuestions || {};
    let answered = 0;
    let hits = 0;
    (pool || []).forEach((q) => {
      if (ansMap[q.id]) {
        answered++;
        if (ansMap[q.id].correct) hits++;
      }
    });
    return {
      total: (pool || []).length,
      answered,
      hits,
      misses: answered - hits,
      accuracyPct: answered ? Math.round((hits / answered) * 100) : 0
    };
  }

  return {
    QUESTIONS_MODULE_ID,
    filterQuestionPool,
    getQuestionStats
  };
});
