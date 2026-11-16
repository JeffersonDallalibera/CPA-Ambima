# 🏛️ DESIGN SYSTEM — EXECUTIVE PRIVATE BANKING & FINANCIAL TERMINAL
**Produto:** ANBIMA CPA Pro Mastery 2026  
**Direção Estética:** *Executive Private Banking & Financial Terminal* (Inspiração Conceitual: Bloomberg Terminal + UBS/BTG Private Wealth + Chassi Metálico HP 12C Gold)  
**Skills de Referência:** `frontend-design`, `frontend-ui-engineering`, `fixing-motion-performance`

---

## 1. Design Direction Summary & DFII Score

### 1.1 Posicionamento Estético
Evitamos integralmente o visual genérico de "AI UI" (gradientes roxos/indigo difusos, cantos exageradamente arredondados sem hierarquia ou sombras pesadas sem propósito). Adotamos uma direção **Luxury Utilitarian / Financial Terminal**:
- **Propósito:** Permitir que o candidato à certificação ANBIMA CPA opere sob alta densidade informacional (148 questões comentadas alternativa por alternativa, 38 tópicos técnicos, 10 Mapas de Decisão ramificados, 6 matrizes regulatórias/tributárias e calculadora financeira RPN HP 12C) com fadiga visual zero e leitura escaneável instantânea.
- **Âncora de Diferenciação Visual (*Differentiation Anchor*):** A combinação de superfícies **Obsidian/Slate de precisão milimétrica** com **filetes metálicos Executive Gold (`#D4AF37`)**, **telemetria numérica tabular em `JetBrains Mono`** (Readiness Score 20/40/30/10 e visor LCD RPN) e **indicadores institucionais Emerald (`#10B981`)**. Mesmo sem logotipo, qualquer captura de tela identifica imediatamente um terminal executivo de certificação bancária e mercado de capitais.

### 1.2 Design Feasibility & Impact Index (DFII)

| Dimensão | Nota (1–5) | Justificativa Técnica |
| :--- | :---: | :--- |
| **Aesthetic Impact** | **5** | Contraste dramático entre fundo Obsidian (`#050811`), acentos institucionais Emerald (`#10B981`) e detalhes metálicos Executive Gold (`#D4AF37`). |
| **Context Fit** | **5** | Alinhado diretamente ao universo de Private Banking, Asset Management, Tesouraria e à calculadora oficial HP 12C exigida na prova ANBIMA. |
| **Implementation Feasibility** | **4** | Implementado 100% em CSS nativo moderno (Custom Properties, CSS Grid/Flexbox, `tabular-nums`), sem dependências pesadas de runtime. |
| **Performance Safety** | **5** | Animações restritas estritamente ao compositor (`transform` e `opacity` a 60fps), sem layout thrashing ou blur contínuo em grandes superfícies. |
| **Consistency Risk** | **2** | Baixo risco: sistema de tokens semânticos centralizado em `:root` e `body.light-theme`, preservando 100% de retrocompatibilidade com o DOM existente. |

$$\text{DFII} = (5 + 5 + 4 + 5) - 2 = \mathbf{17 / 19} \quad (\text{Classificação: Excellent})$$

---

## 2. Paleta de Cores & Tokens Semânticos (WCAG 2.1 AA)

Todos os tokens são declarados em variáveis CSS (`:root`) com suporte completo a modo claro executivo (`body.light-theme`).

### 2.1 Superfícies & Fundos (Dark Terminal — Padrão)
| Token CSS | Valor Hex / RGBA | Papel Semântico | Contraste c/ Texto Principal |
| :--- | :--- | :--- | :---: |
| `--obsidian` / `--bg` | `#050811` | Fundo primário profundo de terminal financeiro | **19.1 : 1** (AAA) |
| `--slate-surface` / `--surface-solid` | `#0B1120` | Superfície sólida de cards, sidebar, tabelas e painéis | **17.4 : 1** (AAA) |
| `--surface` | `rgba(11, 17, 32, 0.92)` | Superfície translúcida controlada para headers e containers | **16.8 : 1** (AAA) |
| `--surface-2` / `--slate-elevated` | `#131C31` | Superfície secundária (inputs, badges, cabeçalhos de tabela, pills) | **14.9 : 1** (AAA) |
| `--surface-3` | `#1E293B` | Hover states e elementos interativos destacados | **12.2 : 1** (AAA) |

### 2.2 Cores de Alto Impacto Financeiro & Semântica de Estado
| Token CSS | Valor Hex | Significado no Domínio Financeiro CPA | Contraste em `#0B1120` |
| :--- | :--- | :--- | :---: |
| `--primary` / `--emerald` | `#10B981` | **Institutional Emerald:** Aprovação (≥70%), Trilha A (+1 pt), Gabarito Oficial, Cobertura FGC Ativa | **8.4 : 1** (AAA) |
| `--emerald-bright` | `#34D399` | Texto de destaque positivo e badges de conformidade | **10.6 : 1** (AAA) |
| `--gold` / `--warning` | `#F59E0B` | **Executive Gold (Alerta/Destaque):** Pesos prioritários, tecla `f` da HP 12C, atenção tributária | **9.8 : 1** (AAA) |
| `--gold-metallic` | `#D4AF37` | **Private Banking Gold:** Bordas de destaque executivo (`.exec-card-gold`) e chassi HP 12C | **8.9 : 1** (AAA) |
| `--cyan` / `--accent` | `#06B6D4` | **Terminal Cyan:** Telemetria analítica, filtros ativos, links técnicos, tecla `g` da HP 12C | **9.1 : 1** (AAA) |
| `--danger` / `--crimson` | `#EF4444` | **Market Crimson:** Erro de questão, Pegadinha de Prova (`.trap-box`), Vedação CVM / Sem FGC | **5.6 : 1** (AA) |
| `--crimson-light` | `#F87171` | Texto de alerta/erro sobre fundos escuros | **7.8 : 1** (AAA) |
| `--text` | `#F8FAFC` | Texto principal de leitura longa | **17.4 : 1** (AAA) |
| `--text-secondary` | `#CBD5E1` | Texto analítico, enunciados contextualizados e explicações | **11.8 : 1** (AAA) |
| `--muted` | `#94A3B8` | Rótulos secundários, metadados e legendas de telemetria | **6.4 : 1** (AA) |

---

## 3. Tipografia & Hierarquia Estrutural

1. **Fonte Estrutural & Editorial (`--font-sans`):** `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
   - Escala modular clara com `letter-spacing: -0.02em` em títulos executivos (`h1`, `h2`, `.card-title`) e `line-height: 1.65` para leitura confortável de casos clínicos e apostilas completas.
2. **Fonte Quantitativa & Telemetria (`--font-mono`):** `'JetBrains Mono', monospace`
   - Aplicada obrigatoriamente em KPIs (`.kpi-val`), cronômetros (`.pomodoro-time`, `#sim-timer`), códigos de item Cesgranrio, tabelas de alíquotas IR/IOF, fórmulas financeiras e no visor/registradores da HP 12C.
   - Usa `font-variant-numeric: tabular-nums` para evitar jitter horizontal durante contagem de cronômetro ou atualização de métricas.

---

## 4. Filosofia de Movimento & Performance 60fps (`fixing-motion-performance`)

Seguindo rigorosamente as diretrizes críticas da skill `fixing-motion-performance`:
- **Regra #1 (Compositor Only):** Todas as transições de entrada e micro-interações animam exclusivamente `transform` e `opacity`.
- **Proibição de Layout Thrashing:** Nenhuma animação contínua altera `width`, `height`, `top`, `left`, `margin` ou `padding`. A barra de progresso (`.progress-fill`) usa `transform: scaleX(...)` com `transform-origin: left` ou transição pontual isolada.
- **Eliminação de Paint/Box-Shadow Contínuo:** Substituímos o antigo `@keyframes pulseSoft` (que animava `box-shadow` continuamente, causando repaint a cada frame) por `@keyframes pulseOpacity` baseado exclusivamente em `opacity` e `transform: scale3d(...)`.
- **Blur Controlado:** `backdrop-filter: blur(12px)` é utilizado apenas em cabeçalhos fixos estáticos, nunca animado continuamente.
- **Respeito a Acessibilidade (`prefers-reduced-motion`):** Quando o sistema operacional solicita redução de movimento, todas as animações e rotações 3D são instantâneas (`transition-duration: 0.01ms !important`).

---

## 5. Arquitetura Espacial & Componentes Corporativos

### 5.1 Shell Executivo Híbrido (`.app-shell`, `.app-sidebar`, `.app-main`, `.topbar-command`)
O `style.css` suporta nativamente dois modos de estruturação de página para garantir compatibilidade total com `index.html` e `tests/test_e2e.py`:
1. **Modo Terminal com Sidebar Lateral (`.app-shell`):** Grid de duas colunas (`272px 1fr` em desktop `≥1024px`) com `.app-sidebar` fixa à esquerda, `.topbar-command` no topo da área principal e `.app-main` fluido.
2. **Modo Header + Command Bar (`.app-header` + `.container`):** Mantém todos os seletores originais (`.header-inner`, `.nav-bar-wrap`, `.nav-tabs`, `.tab-btn`) estilizados com acabamento *Executive Private Banking*.

### 5.2 Novos Componentes para Estudo Concreto & Telemetria
- **Cards Executivos (`.exec-card`, `.exec-card-gold`, `.exec-card-emerald`, `.exec-card-cyan`):** Painéis com filete superior ou lateral metálico, cabeçalho de telemetria e indicadores de prontidão ANBIMA (Readiness Score 20/40/30/10).
- **Tabelas Financeiras Comparativas (`.fin-table-wrap`, `.fin-table`):** Tabelas corporativas de alta densidade para comparativos de Tributação, Cobertura FGC, Arquitetura do SFN, Resolução CVM 175, Ilícitos CVM 62 e SAC vs. Price, com cabeçalho fixo (`sticky`), células numéricas monoespaçadas e badges semânticos (`.cell-positive`, `.cell-negative`, `.cell-neutral`, `.cell-code`).
- **Receitas Práticas da HP 12C (`.hp12c-guide-grid`, `.hp12c-recipe-card`, `.key-sequence`, `.key-badge`):** Cards passo a passo que reproduzem visualmente as teclas físicas da HP 12C (`key-f` dourada, `key-g` azul ciano, `key-tvm` preta/borda dourada, `key-enter` dupla) com fórmula matemática, resultado esperado no visor e interpretação de prova.
- **Leitor de Apostilas Completas (`.markdown-reader`, `.study-subnav`, `.sub-tab-btn`):** Tipografia editorial otimizada para leitura dos 4 módulos Markdown e do Guia Definitivo CPA 2026, com tabelas, blockquotes regulatórios, callouts de prova e blocos de código formatados.

---

## 6. Matriz de Responsividade & Acessibilidade

| Breakpoint | Largura Alvo | Comportamento do Layout |
| :--- | :---: | :--- |
| **Large Desktop / Terminal** | `≥ 1440px` | Container expandido (`1440px`), grids de 4 colunas completas, tabela comparativa integral e layout de questões lado a lado (`1fr 290px`). |
| **Desktop / Laptop** | `1024px – 1439px` | Sidebar compacta (`250px`), grids adaptativos de 2 e 4 colunas, calculadora HP 12C lado a lado com rascunho no simulado. |
| **Tablet / Split View** | `768px – 1023px` | `.app-shell` colapsa sidebar para barra superior horizontal; `.question-layout` e `.simulado-tools` empilham em 1 coluna; tabelas ativam scroll horizontal suave com sombra indicativa. |
| **Mobile Viewport** | `320px – 767px` | Padding compacto (`12px`), abas de navegação com scroll horizontal touch-friendly (`overflow-x: auto`), botões com área mínima de toque de `40px`, chassi da HP 12C escalonado proporcionalmente para caber em `320px` sem overflow horizontal. |
