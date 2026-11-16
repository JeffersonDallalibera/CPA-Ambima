# Shared Store & State Architecture (`src/shared/store`)

## State Split by Origin (`frontend-architecture` §4)
1. **Server State (`serverStateStore` + `cpaQueryKeys`)**:
   - Holds authoritative remote state synchronized with PostgreSQL `cpa-ambima` (`/api/bootstrap`, `/api/analytics`, `/api/study-materials`).
   - Reconciles optimistic mutations with `localStorage` fallback when offline.
2. **Client / UI State (`uiStateStore` — `ICpaUiState`)**:
   - Holds ephemeral UI state (`activeTab`, `theme`, `studySubView`, `selectedModuleId`, `selectedApostilaDoc`, `hp12cModalOpen`, `qFilters`).
   - Never duplicates raw server entities.
