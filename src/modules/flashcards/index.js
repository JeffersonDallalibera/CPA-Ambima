/**
 * PUBLIC BARREL — src/modules/flashcards/index.js
 * Feature Module: 3D Active Recall Flashcards (78 Official Concept Cards)
 * Following `frontend-architecture` §2.1:
 * Only cross-module entry point for the `flashcards` feature.
 *
 * Conceptual ES Module contract:
 * export { FLASHCARDS_MODULE_ID, buildFlashcardsForModule }
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(root);
  } else {
    root.CPA_MODULES = root.CPA_MODULES || {};
    root.CPA_MODULES.flashcards = factory(root);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this, function (root) {
  "use strict";

  const FLASHCARDS_MODULE_ID = "flashcards";

  function buildFlashcardsForModule(modules, modFilter = "all") {
    const list = [];
    (modules || []).forEach((m) => {
      if (modFilter !== "all" && String(m.id) !== String(modFilter)) return;
      (m.flashcards || []).forEach((f) => {
        list.push({ ...f, moduloId: m.id, moduloTitulo: m.titulo });
      });
    });
    return list;
  }

  return {
    FLASHCARDS_MODULE_ID,
    buildFlashcardsForModule
  };
});
