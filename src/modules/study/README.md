# Study Module (`src/modules/study`)

## Ownership
- **Views**: `#view-estudo` & `#view-materiais`
- **Capabilities**:
  - 38 Interactive ANBIMA Syllabus Topics (with exam triggers & classic traps)
  - 📊 Comparative Financial Tables (`window.CPA_MATERIAIS_PROFUNDOS.tabelasComparativas`)
  - 🧮 Practical HP 12C Recipes Guide (`window.CPA_MATERIAIS_PROFUNDOS.guiaHP12C`)
  - 📖 Complete Markdown Apostilas Reader (`GET /api/study-materials` + `resumosModulos`)
- **Data Dependencies**:
  - `GET /api/study-materials`
  - `POST /api/topics/toggle`
  - `window.CPA_MATERIAIS_PROFUNDOS`
