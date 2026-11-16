/**
 * PUBLIC BARREL — src/modules/decision-maps/index.js
 * Feature Module: Official Cesgranrio / ANBIMA Edu Decision Maps (10 Interactive Dialogues)
 * Following `frontend-architecture` §2.1:
 * Only cross-module entry point for the `decision-maps` feature.
 *
 * Conceptual ES Module contract:
 * export { DECISION_MAPS_MODULE_ID, getDecisionMapsPool, evaluateMapStage }
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(root);
  } else {
    root.CPA_MODULES = root.CPA_MODULES || {};
    root.CPA_MODULES.decisionMaps = factory(root);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this, function (root) {
  "use strict";

  const DECISION_MAPS_MODULE_ID = "decision-maps";

  function getDecisionMapsPool() {
    if (root && Array.isArray(root.CPA_MAPAS_OFICIAIS) && root.CPA_MAPAS_OFICIAIS.length) {
      return root.CPA_MAPAS_OFICIAIS;
    }
    return (root && root.CPA_CASES) || [];
  }

  function evaluateMapStage(chosenOption, currentScore, maxLimit = 5) {
    const peso = Number((chosenOption && chosenOption.peso) || 0);
    const nextScore = Math.min(maxLimit, currentScore + peso);
    const nextNode = (chosenOption && chosenOption.proximo) || "END";
    return {
      peso,
      nextScore,
      nextNode,
      isOptimalTrack: peso > 0
    };
  }

  return {
    DECISION_MAPS_MODULE_ID,
    getDecisionMapsPool,
    evaluateMapStage
  };
});
