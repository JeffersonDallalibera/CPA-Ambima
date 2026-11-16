# 🏆 CPA Pro Mastery 2026 — Plataforma Full-Stack ANBIMA CPA (Python + PostgreSQL + HP 12C)

Plataforma comercial completa de preparação intensiva e individualizada para a nova certificação **CPA (Certificado Profissional ANBIMA — Vigência 2026)**, desenvolvida por uma arquitetura de **Microagentes Autônomos (Desenvolvedores ↔ Validadores QA)**.

---

## 🚀 Destaques da Plataforma

- **🏛️ 100% do Banco Oficial ANBIMA Edu / Cesgranrio Integrado:**
  - **148 Questões Comentadas Validadas:** Inclui **todas as 121 questões objetivas oficiais** extraídas da plataforma Cesgranrio/ANBIMA Edu (com justificativa oficial individual em cada alternativa **A, B, C e D**) + **27 questões inéditas complementares** cobrindo 100% do Programa Detalhado.
  - **💬 10 Mapas de Decisão Ramificados (`10.240` rotas testadas):** Simulador idêntico ao exame oficial (`Etapa 1 → 2A/2B → 3A/3B → 4A/4B → 5A/5B → END`, pontuação `Peso 1` vs. `Peso 0` até o limite de 5 pontos + **2 Questões Objetivas acopladas** ao final de cada diálogo).
- **🧮 Calculadora Financeira HP 12C Obrigatória (`hp12c.js`):**
  - **Modo 1 (Nativo RPN + TVM + Fluxo de Caixa Offline):** Pilha RPN autêntica (`X, Y, Z, T`), registradores financeiros TVM (`n, i, PV, PMT, FV`), Fluxo de Caixa (`CFo, CFj, Nj, f NPV, f IRR`), teclas `f` (dourada) e `g` (azul) e receitas rápidas para Fórmula de Fisher, Paridade de BDR e Tabela Price.
  - **Modo 2 (Emulador Estácio Integrado):** Alternância em 1 clique para o emulador `https://simulado.estacio.br/img/Hp/`.
  - Disponível tanto acoplada na tela do **Simulado Oficial (50Q)** quanto no botão flutuante global **`🧮 HP 12C`** no topo de qualquer aba.
- **⏱️ Simulado Real Modo Centro de Testes (50 Questões | 2h30 | Bloqueio Estrito):**
  - Sorteio ponderado respeitando os pesos oficiais da ANBIMA (**Módulo 1: 20% | Módulo 2: 40% | Módulo 3: 30% | Módulo 4: 10%**).
  - **🔒 Bloqueio definitivo de navegação:** igual à prova eletrônica oficial, não permite retornar às questões anteriores após avançar.
  - Bloco de rascunho digital + Calculadora HP 12C + Relatório diagnóstico por módulo.
- **🗄️ Persistência Real em PostgreSQL (`cpa-ambima`) + API Python (Flask):**
  - Todas as respostas, questões favoritas, tópicos dominados, mapas concluídos, blocos do cronograma sprint e histórico de simulados ficam gravados em tempo real no banco PostgreSQL `cpa-ambima` (com *fallback* automático para `localStorage` caso aberto offline).

---

## 🛠️ Arquitetura Técnica

```text
CPA-Ambima/
├── backend/
│   └── app.py                  # API RESTful em Python (Flask + psycopg2) conectada ao PostgreSQL
├── database/
│   ├── schema.sql              # DDL PostgreSQL (9 tabelas + índices e constraints)
│   └── setup_db.py             # Criação automática e seed do database 'cpa-ambima'
├── data/
│   ├── modulo1_data.js         # Módulo 1 (20%): 10 tópicos, 18 flashcards, 28 questões (22 oficiais)
│   ├── modulo2_data.js         # Módulo 2 (40%): 12 tópicos, 25 flashcards, 60 questões (52 oficiais)
│   ├── modulo3_data.js         # Módulo 3 (30%): 9 tópicos, 18 flashcards, 46 questões (40 oficiais)
│   ├── modulo4_data.js         # Módulo 4 (10%): 7 tópicos, 17 flashcards, 14 questões (7 oficiais)
│   ├── mapas_decisao_oficiais.js # 10 Mapas de Decisão ramificados + 20 questões acopladas
│   ├── plano_sprint.js         # 16 blocos de estudo hora-a-hora + 10 cartões de Cola de Prova
│   └── cesgranrio_116_full.json # Backup integral das 116 fichas técnicas oficiais Cesgranrio
├── modulos/                    # Apostilas completas em Markdown para os Módulos 1, 2, 3 e 4
├── tests/
│   ├── test_db.py              # Suíte QA do Agente Validador PostgreSQL
│   ├── test_backend.py         # Suíte QA do Agente Validador Backend Python
│   └── test_e2e.py             # Suíte QA End-to-End (DOM + HP 12C + Flask + PostgreSQL)
├── index.html                  # Interface Principal SaaS (Dark/Light + Pomodoro + HP 12C)
├── style.css                   # Design System Glassmorphism + Chassi HP 12C + Animações 3D
├── hp12c.js                    # Motor RPN/TVM/NPV/IRR da HP 12C + Iframe Estácio
├── app.js                      # Lógica Frontend + Sincronização em tempo real com PostgreSQL
├── run_server.py               # Entrypoint do servidor Python Flask (http://localhost:5000)
└── requirements.txt            # Dependências Python
```

---

## ⚙️ Como Executar (PostgreSQL + Python)

1. **Instale as dependências Python:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Crie e popule o banco de dados PostgreSQL (`localhost:5432`, database `cpa-ambima`):**
   ```bash
   python database/setup_db.py
   ```

3. **Inicie o servidor Python Flask:**
   ```bash
   python run_server.py
   ```
   Acesse no navegador: **`http://localhost:5000`**

4. **Execute a suíte automatizada de testes (Agentes QA):**
   ```bash
   python tests/test_e2e.py
   ```
