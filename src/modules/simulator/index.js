/**
 * PUBLIC BARREL — src/modules/simulator/index.js
 * Feature Module: Official CPA ANBIMA Exam Simulator (50Q 2h30 & 20Q 1h00 Sprint)
 * Following `frontend-architecture` §2.1:
 * Only cross-module entry point for the `simulator` feature.
 *
 * Conceptual ES Module contract:
 * export { SIMULATOR_MODULE_ID, OFFICIAL_EXAM_DISTRIBUTION, computeSimulationBreakdown }
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(root);
  } else {
    root.CPA_MODULES = root.CPA_MODULES || {};
    root.CPA_MODULES.simulator = factory(root);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this, function (root) {
  "use strict";

  const SIMULATOR_MODULE_ID = "simulator";

  const OFFICIAL_EXAM_DISTRIBUTION = {
    1: 0.20, // 10 de 50 questões
    2: 0.40, // 20 de 50 questões
    3: 0.30, // 15 de 50 questões
    4: 0.10  // 5 de 50 questões
  };

  function computeSimulationBreakdown(simAnswers) {
    const answers = Array.isArray(simAnswers) ? simAnswers : [];
    const total = answers.length;
    const hits = answers.filter((a) => a.correct).length;
    const pct = total ? Math.round((hits / total) * 100) : 0;
    const passed = pct >= 70;

    const byModule = [1, 2, 3, 4].map((mId) => {
      const mAns = answers.filter((a) => a.question && a.question.moduloId === mId);
      const mHits = mAns.filter((a) => a.correct).length;
      const mPct = mAns.length ? Math.round((mHits / mAns.length) * 100) : 0;
      return { mId, total: mAns.length, hits: mHits, pct: mPct };
    });

    return {
      total,
      hits,
      pct,
      passed,
      byModule,
      wrongAnswers: answers.filter((a) => !a.correct)
    };
  }

  return {
    SIMULATOR_MODULE_ID,
    OFFICIAL_EXAM_DISTRIBUTION,
    computeSimulationBreakdown
  };
});
