# 🏛️ TASK BOARD CORPORATIVO — ANBIMA CPA PRO MASTERY 2026
**Direção de Produto:** Executive Private Banking & Financial Terminal  
**Repositório Oficial:** `https://github.com/JeffersonDallalibera/CPA-Ambima.git`  
**Banco de Dados:** PostgreSQL `localhost:5432` • Database: `cpa-ambima`  

---

## 📋 Visão Geral & Governança de Arquivos (Zero-Conflict Matrix)

| Agente | Papel Especialista | Arquivos Exclusivos (Write Ownership) | Skills Aplicadas | Status |
| :--- | :--- | :--- | :--- | :--- |
| **`@ux-designer`** | UX Designer & Especialista em Design System Financeiro Corporativo | `TASK_BOARD.md`<br>`DESIGN_SYSTEM.md`<br>`style.css` | `frontend-design`<br>`frontend-ui-engineering`<br>`fixing-motion-performance` | ✅ Concluído |
| **`@backend-db-engineer`** | Engenheiro de Backend, Banco de Dados PostgreSQL e Performance | `backend/app.py`<br>`database/schema.sql`<br>`database/setup_db.py` | `backend-architect`<br>`postgres-best-practices`<br>`api-design-principles` | ✅ Concluído |
| **`@content-specialist`** | Especialista em Materiais Concretos & Engenharia Pedagógica CPA | `data/materiais_estudo_profundos.js`<br>`GUIA_DEFINITIVO_CPA_2026.md` | `arquitetura-pedagogica-ti`<br>`ponytail` | ✅ Concluído |
| **`@frontend-architect`** | Especialista em Arquitetura Frontend Modular & Terminal Executivo | `src/**`<br>`index.html`<br>`app.js` | `frontend-architecture`<br>`frontend-ui-engineering`<br>`frontend-api-integration-patterns` | ✅ Concluído |
| **`@qa-verifier`** | Agente Autônomo de Testes, QA, UX e Validação Contínua | `tests/test_db.py`<br>`tests/test_backend.py`<br>`tests/test_e2e.py` | `ponytail-review`<br>`fixing-motion-performance`<br>`frontend-ui-engineering` | ✅ Concluído |

---

## 🎯 Detalhamento de Tasks & Critérios de Aceite (DoD — Definition of Done)

### 1. `@ux-designer` — Design System & Interface Corporativa Financeira
- **Objetivo:** Estabelecer a identidade estética **"Executive Private Banking & Financial Terminal"** e reestruturar `style.css` com suporte simultâneo à Sidebar Executiva Lateral e à Topbar Corporativa.
- **Entregáveis:**
  - [x] `TASK_BOARD.md` com matriz de responsabilidades e critérios de aceite de toda a squad.
  - [x] `DESIGN_SYSTEM.md` documentando DFII Score (`15/19 — Excellent`), paleta semântica (`#050811` Obsidian, `#0B1120` Slate Surface, `#10B981` Institutional Emerald, `#F59E0B`/`#D4AF37` Executive Gold, `#06B6D4` Terminal Cyan, `#EF4444` Crimson), tipografia (`Plus Jakarta Sans` + `JetBrains Mono`), contraste WCAG 2.1 AA e animações 60fps restritas a `transform` e `opacity`.
  - [x] `style.css` completo com:
    - Layout de Terminal Executivo (`.app-shell`, `.app-sidebar`, `.sidebar-brand`, `.sidebar-nav`, `.sidebar-nav-btn`, `.app-main`, `.topbar-command`, `.readiness-banner`, `.readiness-gauge`).
    - Compatibilidade 100% preservada com seletores legados e E2E (`.app-header`, `.header-inner`, `.nav-bar-wrap`, `.nav-tabs`, `.tab-btn`, `.kpi-strip`, `.kpi-card`, `.card`, `.topic-card`, `.question-layout`, `.option-btn`, `.chat-stream`, `.flashcard-3d`, `.hp12c-chassis`, `.hp12c-modal-backdrop`).
    - Novos componentes para Materiais Concretos & Apostilas Completas (`.fin-table`, `.fin-table-wrap`, `.exec-card`, `.exec-card-gold`, `.exec-card-emerald`, `.hp12c-recipe-card`, `.key-step-badge`, `.markdown-reader`, `.sub-tabs`, `.sub-tab-btn`).
    - Responsividade validada para `320px`, `768px`, `1024px` e `1440px` + `@media (prefers-reduced-motion: reduce)`.

---

### 2. `@backend-db-engineer` — PostgreSQL Pool, Analytics & Study Materials API
- **Objetivo:** Elevar o backend Flask e a camada de dados PostgreSQL (`cpa-ambima`) para padrão de produção com pool de conexões thread-safe e endpoints analíticos executivos.
- **Entregáveis & Critérios de Aceite:**
  - [x] `psycopg2.pool.ThreadedConnectionPool` configurado para `localhost:5432`, banco `cpa-ambima`, user `postgres`, password `postgres`.
  - [x] Compatibilidade 100% mantida com `/api/health`, `/api/bootstrap`, `/api/modules`, `/api/maps`, `/api/topics/toggle`, `/api/questions/answer`, `/api/questions/favorite`, `/api/maps/complete`, `/api/sprint/toggle`, `/api/simulations`.
  - [x] Novo endpoint `GET /api/analytics`: retorna diagnóstico executivo por módulo, taxa de acerto %, tópicos dominados, **Readiness Score Ponderado ANBIMA (20% / 40% / 30% / 10%)** e lista de tópicos prioritários para revisão.
  - [x] Novo endpoint `GET /api/study-materials`: retorna o conteúdo integral das apostilas Markdown (`modulos/modulo1_sfn_economia.md`, `modulos/modulo2_produtos.md`, `modulos/modulo3_relacionamento_etica.md`, `modulos/modulo4_inovacao.md`, `PLANO_SPRINT_TERCA.md`) estruturado em JSON.
  - [x] Servir estáticos de `/src/<path:filename>`, `/data/<path:filename>` e `/modulos/<path:filename>`.
  - [x] Execução limpa de `python database/setup_db.py`.

---

### 3. `@content-specialist` — Materiais Concretos, Tabelas Comparativas & Guia HP 12C
- **Objetivo:** Fornecer dados concretos de estudo corporativo (tabelas comparativas tributárias/regulatórias, receitas passo a passo da HP 12C e sínteses das 116 fichas oficiais da Cesgranrio).
- **Entregáveis & Critérios de Aceite:**
  - [x] `data/materiais_estudo_profundos.js` exportando `window.CPA_MATERIAIS_PROFUNDOS` (validado via `node -c`):
    - `tabelasComparativas`: 6 matrizes comparativas completas (1. Tributação Completa RF/RV/CVM 175/FIIs/PGBL/VGBL; 2. Cobertura FGC vs. Não Cobertos; 3. Arquitetura do SFN CMN/CNSP/CNPC vs. Bacen/CVM/SUSEP/PREVIC; 4. Resolução CVM 175 Classes/Subclasses/Art. 101; 5. Ilícitos de Mercado CVM 62 Spoofing/Layering/Churning/Front Running/Insider/Money Pass; 6. SAC vs. Price vs. Desconto Bancário).
    - `guiaHP12C`: 8 receitas práticas com `titulo`, `contextoProva`, `formula`, `teclasHP12C`, `resultadoEsperado` e `interpretacao` (Fisher, BDR Item 000234, Juros Compostos FV, Price PMT, CET/Limite 20% Renda Q29, VPL `f NPV` e TIR `f IRR`, Marcação a Mercado/Duration, Equivalência `y^x`).
    - `resumosModulos`: sínteses densas mapeando as 116 fichas técnicas da Cesgranrio.
  - [x] `GUIA_DEFINITIVO_CPA_2026.md` consolidado para revisão executiva.

---

### 4. `@frontend-architect` — Arquitetura Frontend Modular & Terminal Financeiro
- **Objetivo:** Estruturar `src/shared/` e `src/modules/` seguindo `frontend-architecture` e atualizar `index.html` + `app.js` integrando o novo Design System Executivo, o Readiness Score ANBIMA, as Tabelas Comparativas/Guia HP 12C e o Leitor de Apostilas Completas.
- **Entregáveis & Critérios de Aceite:**
  - [x] Módulos estruturados em `src/shared/api-client/index.js`, `src/shared/store/index.js` e `src/modules/{dashboard,study,questions,decision-maps,flashcards,simulator}/index.js`.
  - [x] Inclusão de `<script src="data/materiais_estudo_profundos.js"></script>` e `<script src="hp12c.js"></script>` em `index.html`.
  - [x] Seção/aba dedicada ou integrada para **📊 Tabelas Comparativas & Guia Prático HP 12C** (`window.CPA_MATERIAIS_PROFUNDOS`) + **📖 Leitor de Apostilas Completas** em Estudo por Módulo.
  - [x] Painel Executivo exibindo **Readiness Score Ponderado ANBIMA (20/40/30/10)** e telemetria ao vivo do banco `PostgreSQL: cpa-ambima`.
  - [x] Preservação de 100% dos IDs de DOM exigidos por `app.js` e `tests/test_e2e.py`.
  - [x] Validação sintática `node -c app.js` aprovada sem erros.

---

### 5. `@qa-verifier` — Qualidade Assegurada, Testes Automatizados & Deploy Git
- **Objetivo:** Auditar continuamente banco, backend, frontend, UX e calculadora HP 12C, reportar falhas aos donos dos arquivos e, após 100% de aprovação, realizar commit e push para `origin main`.
- **Entregáveis & Critérios de Aceite:**
  - [x] `python tests/test_db.py` aprovando 4 módulos, 38 tópicos, 148 questões (121 oficiais + 27 inéditas), 10 mapas de decisão, 78 flashcards, 16 blocos sprint e 10 cola cards no PostgreSQL `cpa-ambima`.
  - [x] `python tests/test_backend.py` aprovando `/api/health`, `/api/bootstrap`, `/api/modules`, `/api/maps`, `/api/analytics`, `/api/study-materials` e rotas `POST`.
  - [x] `python tests/test_e2e.py` aprovando sintaxe JS (`app.js`, `hp12c.js`, `data/materiais_estudo_profundos.js`), 100% de alinhamento de IDs DOM, módulos em `src/modules/` e cálculos da `HP12CEngine`.
  - [x] Atualização final deste `TASK_BOARD.md` e `git push origin main` concluído.
