(function () {
  "use strict";

  const STORAGE_KEY = "cpa_pro_mastery_2026_v2";
  const apiClient = window.CPA_API_CLIENT || null;
  const storeModule = window.CPA_STORE || null;

  let state = loadState();
  let analyticsData = null;
  let studyMaterialsData = null;
  let activeStudySubTab = "topicos"; // 'topicos' | 'apostila' | 'tabelas' | 'hp12c'

  // Fallback concreto caso window.CPA_MATERIAIS_PROFUNDOS ainda não tenha sido carregado
  const FALLBACK_MATERIAIS_PROFUNDOS = {
    tabelasComparativas: [
      {
        id: "tab-tributacao",
        titulo: "1. Matriz Completa de Tributação — Renda Fixa, Ações, Fundos CVM 175, FIIs e Previdência (PGBL/VGBL)",
        modulo: "Módulo 2 (40%)",
        resumo: "Comparativo definitivo de alíquotas IR, IOF, Come-Cotas, isenções PF e base de cálculo na Previdência.",
        colunas: ["Produto / Ativo", "Tabela IR / Alíquota", "Come-Cotas", "Isenção PF / Regra de Ouro ANBIMA"],
        linhas: [
          ["CDB, Debêntures Comuns, Tesouro, Fundos RF/Multimercado LP", "Regressiva: 22,5% (≤180d) | 20% (181-360d) | 17,5% (361-720d) | 15% (>720d)", "Sim nos Fundos (Maio/Nov: 15% LP | 20% CP)", "IOF regressivo nos primeiros 29 dias (isento a partir do 30º dia)."],
          ["LCI, LCA, CRI, CRA, LCD, LIG e Debêntures Incentivadas (Lei 12.431)", "ISENTO de IR para Pessoa Física (PF)", "Não há", "PJ paga IR normalmente. CRI/CRA/Debêntures NÃO têm FGC."],
          ["Ações (Mercado à Vista)", "15% (Swing Trade) | 20% (Day Trade) via DARF até último dia útil do mês seguinte", "Não há", "Isenção PF para vendas totais de ações até R$ 20.000/mês (apenas Swing Trade)."],
          ["FII (Fundos Imobiliários) & Fiagro", "Rendimentos: Isentos PF (mín. 100 cotistas, bolsa, <10% cotas) | Ganho de Capital: 20%", "Não há", "Ganho de capital na venda da cota de FII é SEMPRE 20% (sem isenção de R$ 20 mil)."],
          ["PGBL (Plano Gerador de Benefício Livre)", "Progressiva (até 27,5%) ou Regressiva (35% até 2a → 10% após 10a)", "Não há", "Deduz até 12% da renda bruta anual (exige Declaração Completa + INSS). IR incide sobre o TOTAL."],
          ["VGBL (Vida Gerador de Benefício Livre)", "Progressiva (até 27,5%) ou Regressiva (35% até 2a → 10% após 10a)", "Não há", "Indicado para Declaração Simplificada ou acima de 12%. IR incide APENAS sobre os RENDIMENTOS."]
        ]
      },
      {
        id: "tab-fgc",
        titulo: "2. Cobertura do FGC (Fundo Garantidor de Créditos) — O que Cobre vs. O que NÃO Cobre",
        modulo: "Módulo 2 (40%)",
        resumo: "Teto de R$ 250 mil por CPF/CNPJ por conglomerado financeiro (limite global de R$ 1 milhão a cada 4 anos).",
        colunas: ["Categoria", "Ativos Financeiros", "Limite / Regra de Prova Cesgranrio"],
        linhas: [
          ["✅ COBERTOS PELO FGC", "Depósito à Vista, Poupança, CDB, RDB, LCI, LCA, LCD, Letra de Câmbio (LC), Letra Hipotecária (LH)", "Até R$ 250.000 por CPF/conglomerado + teto global R$ 1 milhão renovável a cada 4 anos. Conta conjunta: divide o limite de R$ 250 mil entre os titulares."],
          ["❌ NÃO COBERTOS (Bancários / Estruturados)", "Letra Financeira (LF), LIG (Letra Imobiliária Garantida), COE, Operações Compromissadas (lastro títulos públicos)", "LF exige mínimo de R$ 50 mil (ou R$ 300 mil subordinada) e prazo mín. 24 meses sem FGC. LIG tem carteira de ativos própria segregada."],
          ["❌ NÃO COBERTOS (Valores Mobiliários / Fundos)", "CRI, CRA, Debêntures, Notas Comerciais, Fundos de Investimento (FIF/FII/FIDC), Ações, Tesouro Direto", "Fundos contam com segregação patrimonial (CNPJ próprio / CVM 175), nunca FGC."]
        ]
      },
      {
        id: "tab-sfn",
        titulo: "3. Arquitetura do SFN — Órgãos Normativos vs. Supervisores (CMN, CNSP, CNPC / Bacen, CVM, SUSEP, PREVIC)",
        modulo: "Módulo 1 (20%)",
        resumo: "Normativos determinam as diretrizes (não executam); Supervisores fiscalizam e executam.",
        colunas: ["Subsistema do SFN", "Órgão Normativo (Fixa Diretrizes)", "Órgão Supervisor / Executor", "Escopo Principal na Prova CPA"],
        linhas: [
          ["Moeda, Crédito, Capitais e Câmbio", "CMN (Conselho Monetário Nacional — 3 membros: Min. Fazenda, Min. Planejamento, Pres. Bacen)", "BACEN (Banco Central) e CVM (Comissão de Valores Mobiliários)", "CMN define meta de inflação; Bacen executa política monetária (COPOM/Selic); CVM supervisiona valores mobiliários, fundos e bolsa."],
          ["Seguros Privados, Capitalização e Previdência Aberta", "CNSP (Conselho Nacional de Seguros Privados)", "SUSEP (Superintendência de Seguros Privados)", "Fiscaliza seguradoras, resseguradores, capitalização e planos abertos PGBL/VGBL."],
          ["Previdência Complementar Fechada (Fundos de Pensão)", "CNPC (Conselho Nacional de Previdência Complementar)", "PREVIC (Superintendência Nacional de Previdência Complementar)", "Supervisiona as EFPC (Entidades Fechadas de Previdência Complementar / Fundos de Pensão patrocinados)."]
        ]
      },
      {
        id: "tab-cvm175",
        titulo: "4. Resolução CVM 175 — Estrutura Fundo/Classes/Subclasses, Responsabilidade Limitada e Art. 101",
        modulo: "Módulo 2 (40%)",
        resumo: "Marco regulatório dos Fundos de Investimento: segregação patrimonial por classe e vedações do Gestor.",
        colunas: ["Dimensão CVM 175", "Regra Oficial Vigente", "Pegadinha Clássica Cesgranrio"],
        linhas: [
          ["Arquitetura Jurídica", "Fundo (casca) → Classes de Cotas (patrimônios segregados) → Subclasses (diferenciam taxas, prazos e público-alvo)", "Subclasses NÃO possuem patrimônio separado entre si; a segregação patrimonial ocorre entre as CLASSES."],
          ["Prestadores Essenciais", "Administrador Fiduciário (legal/custódia/controladoria) + Gestor de Recursos (compra e venda de ativos da carteira)", "O contrato é firmado em conjunto pelos dois prestadores essenciais."],
          ["Patrimônio Líquido Negativo", "Regra geral: Responsabilidade LIMITADA ao valor das cotas (sufixo 'Responsabilidade Limitada'). Insolvência da classe não contamina outra classe.", "Antes o cotista sempre aportava; hoje a insolvência pode levar à liquidação judicial da classe isolada."],
          ["Vedações do Gestor (Art. 101)", "Proibido receber remuneração/rebate de emissores que prejudique a independência ou prometer rentabilidade predeterminada.", "Rebate só é admitido em fundos exclusivos/restritos com reversão integral ao patrimônio da classe ou anuência expressa conforme norma."]
        ]
      },
      {
        id: "tab-ilicitos",
        titulo: "5. Ilícitos de Mercado (Resolução CVM 62) & PLD/FT (Lei 9.613 e CVM 50)",
        modulo: "Módulo 3 (30%)",
        resumo: "Diferenciação cirúrgica das práticas abusivas de manipulação de preços, condições artificiais e lavagem de dinheiro.",
        colunas: ["Ilícito / Conduta", "Mecânica Operacional (Como cai no enunciado)", "Classificação CVM 62 / PLD"],
        linhas: [
          ["Spoofing", "Inserir ordens grandes de compra/venda no livro de ofertas SEM intenção de executar, cancelando-as em milissegundos apenas para atrair robôs/investidores.", "Manipulação de Preços / Demanda Artificial"],
          ["Layering", "Empilhar múltiplas ordens falsas em várias faixas de preço de um lado do book para forçar o preço na direção oposta onde executa a ordem real.", "Manipulação de Preços em Camadas"],
          ["Churning (Giro Excessivo)", "Gestor ou assessor gira excessivamente a carteira do cliente apenas para gerar corretagem, rebates e comissões, sem fundamento econômico.", "Prática Não Equitativa / Fraude Fiduciária"],
          ["Front Running", "Intermediário toma ciência de uma grande ordem de cliente e opera antes na própria conta para lucrar com o deslocamento de preço.", "Prática Não Equitativa"],
          ["Insider Trading", "Usar informação relevante ainda NÃO divulgada ao mercado (Fato Relevante sigiloso) para obter vantagem na negociação de valores mobiliários.", "Uso Indevido de Informação Privilegiada"],
          ["Money Pass", "Operações pré-combinadas (vencedor e perdedor definidos previamente) no mercado futuro/bolsa para transferir recursos disfarçadamente.", "Condições Artificiais / Lavagem de Dinheiro (COAF 24h)"]
        ]
      },
      {
        id: "tab-sac-price",
        titulo: "6. Matemática Financeira Aplicada — SAC vs. Tabela Price vs. Desconto Bancário",
        modulo: "Módulo 1 (20%) & Módulo 3 (30%)",
        resumo: "Comportamento de amortização, juros, parcelas e limite de comprometimento de renda (20%).",
        colunas: ["Sistema / Operação", "Amortização (A)", "Juros (J) e Prestação (PMT = A + J)", "Impacto para o Tomador na Prova CPA"],
        linhas: [
          ["SAC (Sistema de Amortização Constante)", "CONSTANTE em todos os períodos (A = PV / n)", "Juros decrescentes e Prestação DECRESCENTE ao longo do tempo", "Saldo devedor cai mais rápido; soma nominal total de juros pagos é MENOR que na Tabela Price."],
          ["Tabela Price (Sistema Francês)", "CRESCENTE exponencialmente ao longo do tempo", "Juros decrescentes e Prestação CONSTANTE (calculada pela tecla PMT da HP 12C)", "Parcela inicial é menor que no SAC, mas amortiza mais devagar no início (maior custo total nominal de juros)."],
          ["Orçamento Pessoal (Regra Cesgranrio)", "Reserva de Emergência: mín. 3x a 6x gastos mensais em liquidez diária", "Comprometimento máximo recomendado com parcelas de dívida: até 20% da renda líquida", "Sempre comparar financiamentos pelo CET (Custo Efetivo Total), que inclui juros + taxas + seguros + IOF."]
        ]
      }
    ],
    guiaHP12C: [
      {
        id: "hp-fisher",
        titulo: "1. Taxa Real de Juros (Fórmula Exata de Fisher)",
        contextoProva: "Nominal = 12% a.a. e Inflação (IPCA) = 4,5% a.a. Qual a taxa real exata? (Nunca subtraia direto!)",
        formula: "1 + r_real = (1 + i_nominal) / (1 + inflacao)  =>  (1,12 / 1,045 - 1) × 100",
        teclasHP12C: ["f", "CLx", "1", ".", "1", "2", "ENTER", "1", ".", "0", "4", "5", "/", "1", "-", "1", "0", "0", "*"],
        resultadoEsperado: "7,18% a.a.",
        interpretacao: "A taxa real descontada a inflação de 4,5% é 7,18% a.a. (sempre menor que a subtração simples 12 - 4,5 = 7,50%)."
      },
      {
        id: "hp-bdr",
        titulo: "2. Preço Justo e Paridade de BDR (Item Oficial 000234)",
        contextoProva: "Ação nos EUA custa US$ 480,00, câmbio PTAX = R$ 5,41 e paridade do programa BDR = 1 : 24.",
        formula: "Preço BDR (R$) = (Cotação Ação USD × Taxa de Câmbio) / Paridade",
        teclasHP12C: ["f", "CLx", "4", "8", "0", "ENTER", "5", ".", "4", "1", "*", "2", "4", "/"],
        resultadoEsperado: "108,20 (R$ 108,20 por BDR)",
        interpretacao: "Multiplica o preço em dólar pelo câmbio (R$ 2.596,80) e divide pela proporção de BDRs por ação (24)."
      },
      {
        id: "hp-fv",
        titulo: "3. Juros Compostos — Valor Futuro (TVM FV)",
        contextoProva: "Aplicação única de R$ 1.000,00 por 12 meses à taxa composta de 1% a.m.",
        formula: "FV = PV × (1 + i)^n",
        teclasHP12C: ["f", "CLx", "1", "0", "0", "0", "CHS", "PV", "1", "i", "1", "2", "n", "FV"],
        resultadoEsperado: "1.126,83 (R$ 1.126,83)",
        interpretacao: "Informe o desembolso inicial com sinal negativo (CHS PV) para obter o montante acumulado positivo em FV."
      },
      {
        id: "hp-pmt",
        titulo: "4. Prestação Fixa na Tabela Price (TVM PMT)",
        contextoProva: "Financiamento de R$ 10.000,00 em 12 parcelas mensais iguais postecipadas (END) a 2% a.m.",
        formula: "PMT = PV × [ i × (1+i)^n ] / [ (1+i)^n - 1 ]",
        teclasHP12C: ["f", "CLx", "g", "8", "1", "0", "0", "0", "0", "PV", "2", "i", "1", "2", "n", "PMT"],
        resultadoEsperado: "-945,60 (Parcela mensal de R$ 945,60)",
        interpretacao: "Certifique-se de que a calculadora está no modo END (g 8) para parcelas sem entrada no ato."
      },
      {
        id: "hp-npv",
        titulo: "5. Valor Presente Líquido — VPL (f NPV)",
        contextoProva: "Investimento inicial CF0 = -R$ 1.000; retornos CF1 = R$ 400, CF2 = R$ 500, CF3 = R$ 600; TMA = 10% a.a.",
        formula: "VPL = CF0 + Σ [ CFt / (1 + TMA)^t ]",
        teclasHP12C: ["f", "CLx", "1", "0", "0", "0", "CHS", "g", "PV", "4", "0", "0", "g", "PMT", "5", "0", "0", "g", "PMT", "6", "0", "0", "g", "PMT", "1", "0", "i", "f", "PV"],
        resultadoEsperado: "227,65 (VPL = +R$ 227,65)",
        interpretacao: "Como VPL > 0, o projeto remunera acima do custo de oportunidade (10%) e agrega riqueza ao investidor."
      },
      {
        id: "hp-irr",
        titulo: "6. Taxa Interna de Retorno — TIR (f IRR)",
        contextoProva: "Sobre o mesmo fluxo de caixa acima (CF0=-1000, CF1=400, CF2=500, CF3=600), qual a TIR?",
        formula: "Taxa TIR que torna VPL = 0",
        teclasHP12C: ["f", "CLx", "1", "0", "0", "0", "CHS", "g", "PV", "4", "0", "0", "g", "PMT", "5", "0", "0", "g", "PMT", "6", "0", "0", "g", "PMT", "f", "FV"],
        resultadoEsperado: "21,65% a.a.",
        interpretacao: "Como TIR (21,65%) > TMA (10%), confirma-se que o projeto é economicamente viável."
      },
      {
        id: "hp-equiv",
        titulo: "7. Equivalência de Taxas Compostas (Mensal → Anual com y^x)",
        contextoProva: "Converter uma taxa efetiva de 1% ao mês para a taxa efetiva equivalente ao ano (12 meses).",
        formula: "i_anual = [ (1 + i_mensal)^12 - 1 ] × 100",
        teclasHP12C: ["f", "CLx", "1", ".", "0", "1", "ENTER", "1", "2", "y^x", "1", "-", "1", "0", "0", "*"],
        resultadoEsperado: "12,68% a.a.",
        interpretacao: "Em capitalização composta, 1% a.m. equivale a 12,68% a.a. (juros sobre juros)."
      },
      {
        id: "hp-renda20",
        titulo: "8. Limite de Endividamento (20% da Renda) & Reserva (3x Gastos)",
        contextoProva: "Família com renda líquida de R$ 10.600,00 e gastos mensais de R$ 8.500,00 (Questão Oficial 29).",
        formula: "Parcela Máx = Renda × 20%  |  Reserva Mínima = Gastos × 3",
        teclasHP12C: ["f", "CLx", "1", "0", "6", "0", "0", "ENTER", "2", "0", "%"],
        resultadoEsperado: "2.120,00 (Parcela máx R$ 2.120 | Reserva mín R$ 25.500)",
        interpretacao: "Escolha o financiamento de menor CET cuja parcela caiba no limite de R$ 2.120,00 após recompor a reserva de 3x os gastos."
      }
    ],
    resumosModulos: {
      1: {
        titulo: "Módulo 1 — SFN, Economia e Matemática Financeira (Peso 20% • 10 Questões)",
        sintese: "Domine a tríade Normativo vs. Supervisor (CMN/Bacen/CVM, CNSP/SUSEP, CNPC/PREVIC), Política Monetária (COPOM, Selic Meta vs. Over, Compulsório,Redesconto e Open Market), Fórmula de Fisher e TVM/VPL/TIR na HP 12C."
      },
      2: {
        titulo: "Módulo 2 — Produtos do Mercado Financeiro & CVM 175 (Peso 40% • 20 Questões • PRIORIDADE #1)",
        sintese: "Coração da prova (40%): Renda Fixa (FGC vs. Sem FGC, Isentos PF LCI/LCA/CRI/CRA/Deb. Incentivadas), Resolução CVM 175 (Classes segregadas, Responsabilidade Limitada, Vedações Art. 101), Previdência (PGBL vs. VGBL e Regressiva vs. Progressiva), Derivativos (Hedge/Swap/Opções) e BDRs."
      },
      3: {
        titulo: "Módulo 3 — Relacionamento, Finanças Pessoais, Ética e Ilícitos (Peso 30% • 15 Questões • PRIORIDADE #2)",
        sintese: "Junto com o Módulo 2 garante 70% da prova: API/Suitability (validade 24 meses e regras de desenquadramento), Finanças Pessoais (Reserva 3x gastos, limite de 20% da renda para dívidas, CET), Finanças Comportamentais (Ancoragem, Aversão à Perda, Excesso de Confiança), PLD/FT (3 fases + COAF 24h sem avisar o cliente) e Ilícitos CVM 62 (Spoofing, Layering, Churning, Front Running, Insider Trading)."
      },
      4: {
        titulo: "Módulo 4 — Inovação: ESG, DeFi, Open Finance, Drex e IA (Peso 10% • 5 Questões)",
        sintese: "Pontos rápidos: Índices B3 ASG (ISE, ICO2, IDIVERSA, IGPTW), Greenwashing, Open Finance (consentimento ativo do cliente, máx. 12 meses renováveis), Drex (Real Digital — moeda de atacado/wCBDC emitida pelo Bacen vs. Criptoativos descentralizados) e Riscos de IA Generativa (Alucinação e Viés)."
      }
    }
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        parsed.simulations = parsed.simulations || [];
        return parsed;
      }
    } catch (_) {}
    return {
      theme: "dark",
      sprintDone: {},
      masteredTopics: {},
      answeredQuestions: {},
      favoriteQuestions: {},
      completedCases: {},
      simulations: []
    };
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function getModules() {
    return [
      window.CPA_MODULO_1,
      window.CPA_MODULO_2,
      window.CPA_MODULO_3,
      window.CPA_MODULO_4
    ].filter(Boolean);
  }

  function getMateriaisProfundos() {
    const ext = window.CPA_MATERIAIS_PROFUNDOS || {};
    return {
      tabelasComparativas:
        Array.isArray(ext.tabelasComparativas) && ext.tabelasComparativas.length
          ? ext.tabelasComparativas
          : FALLBACK_MATERIAIS_PROFUNDOS.tabelasComparativas,
      guiaHP12C:
        Array.isArray(ext.guiaHP12C) && ext.guiaHP12C.length
          ? ext.guiaHP12C
          : FALLBACK_MATERIAIS_PROFUNDOS.guiaHP12C,
      resumosModulos:
        ext.resumosModulos && Object.keys(ext.resumosModulos).length
          ? ext.resumosModulos
          : FALLBACK_MATERIAIS_PROFUNDOS.resumosModulos
    };
  }

  function shuffle(arr) {
    const copy = (arr || []).slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // --- TEMA CLARO / ESCURO ---
  if (state.theme === "light") document.body.classList.add("light-theme");
  document.getElementById("btn-theme-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    state.theme = document.body.classList.contains("light-theme") ? "light" : "dark";
    saveState();
  });

  // --- TIMER POMODORO 50/10 ---
  let pomoSeconds = 50 * 60;
  let pomoRunning = false;
  let pomoInterval = null;

  function updatePomoUI() {
    const m = String(Math.floor(pomoSeconds / 60)).padStart(2, "0");
    const s = String(pomoSeconds % 60).padStart(2, "0");
    const el = document.getElementById("pomo-display");
    if (el) el.textContent = `${m}:${s}`;
  }

  document.getElementById("btn-pomo-toggle")?.addEventListener("click", (e) => {
    pomoRunning = !pomoRunning;
    e.currentTarget.textContent = pomoRunning ? "⏸" : "▶";
    if (pomoRunning) {
      pomoInterval = setInterval(() => {
        if (pomoSeconds > 0) {
          pomoSeconds--;
          updatePomoUI();
        } else {
          clearInterval(pomoInterval);
          pomoRunning = false;
          pomoSeconds = 10 * 60;
          updatePomoUI();
        }
      }, 1000);
    } else if (pomoInterval) {
      clearInterval(pomoInterval);
    }
  });

  document.getElementById("btn-pomo-reset")?.addEventListener("click", () => {
    if (pomoInterval) clearInterval(pomoInterval);
    pomoRunning = false;
    pomoSeconds = 50 * 60;
    const btn = document.getElementById("btn-pomo-toggle");
    if (btn) btn.textContent = "▶";
    updatePomoUI();
  });

  // --- NAVEGAÇÃO DE ABAS (TOPBAR + SIDEBAR EXECUTIVA) ---
  function switchTab(tabName) {
    document.querySelectorAll(".tab-btn, .sidebar-nav-btn[data-tab]").forEach((b) => {
      b.classList.toggle("active", b.dataset.tab === tabName);
    });
    document.querySelectorAll(".view-section").forEach((s) => {
      s.classList.toggle("active", s.id === "view-" + tabName);
    });
    if (storeModule && storeModule.uiStateStore) {
      storeModule.uiStateStore.setState({ activeTab: tabName });
    }
    renderGlobalKPIs();
    if (tabName === "dashboard") renderDashboard();
    if (tabName === "estudo") renderStudyView();
    if (tabName === "materiais") renderMateriaisView();
    if (tabName === "questoes") renderPracticeQuestion();
    if (tabName === "cases") renderCaseView();
    if (tabName === "flashcards") renderFlashcard();
    if (tabName === "simulado") renderSimuladoHistory();
  }

  document.querySelectorAll(".tab-btn, .sidebar-nav-btn[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.getElementById("btn-sidebar-open-apostilas")?.addEventListener("click", () => {
    switchTab("materiais");
    const filterSel = document.getElementById("mat-view-filter");
    if (filterSel) filterSel.value = "apostilas";
    renderMateriaisView();
  });

  document.getElementById("btn-sidebar-open-hp12c")?.addEventListener("click", () => {
    document.getElementById("hp12c-floating-modal")?.classList.toggle("open");
  });

  document.getElementById("btn-goto-deep-materials")?.addEventListener("click", () => {
    switchTab("materiais");
  });

  // --- CÁLCULO DO READINESS SCORE PONDERADO (ANBIMA 20/40/30/10) ---
  function computeTelemetry() {
    const mods = getModules();
    const weights = { 1: 0.20, 2: 0.40, 3: 0.30, 4: 0.10 };
    let totalQ = 0;
    let answeredCount = 0;
    let hitCount = 0;
    let totalTopics = 0;
    let doneTopics = 0;
    let weightedReadiness = 0;
    let weightedAcc = 0;
    const priorityList = [];

    mods.forEach((m) => {
      const mId = Number(m.id);
      const w = weights[mId] || 0.25;
      const topicos = m.topicos || [];
      const questoes = m.questoes || [];
      let mDoneT = 0;
      let mAns = 0;
      let mHit = 0;

      topicos.forEach((t) => {
        totalTopics++;
        const k = mId + "_" + t.codigo;
        if (state.masteredTopics[k] || state.masteredTopics[t.key]) {
          doneTopics++;
          mDoneT++;
        } else {
          priorityList.push({
            key: k,
            moduleId: mId,
            codigo: t.codigo,
            titulo: t.titulo,
            prioridade: t.prioridade || (mId === 2 || mId === 3 ? "Alta" : "Média"),
            peso: m.peso || `${Math.round(w * 100)}%`
          });
        }
      });

      questoes.forEach((q) => {
        totalQ++;
        if (state.answeredQuestions[q.id]) {
          answeredCount++;
          mAns++;
          if (state.answeredQuestions[q.id].correct) {
            hitCount++;
            mHit++;
          }
        }
      });

      const mAccPct = mAns ? Math.round((mHit / mAns) * 100) : 0;
      const mTopPct = topicos.length ? Math.round((mDoneT / topicos.length) * 100) : 0;
      const mReadiness = Math.round(mAccPct * 0.7 + mTopPct * 0.3);

      weightedReadiness += mReadiness * w;
      weightedAcc += mAccPct * w;
    });

    const remoteScore =
      analyticsData &&
      (analyticsData.readinessScore ??
        analyticsData.readiness_score ??
        (analyticsData.summary && analyticsData.summary.readiness_score));

    const finalReadiness =
      typeof remoteScore === "number" && !Number.isNaN(remoteScore) && remoteScore > 0
        ? Math.round(remoteScore)
        : Math.round(weightedReadiness);

    const remotePriority =
      analyticsData && (analyticsData.priorityTopics || analyticsData.topicosPrioritarios);

    return {
      totalQ,
      answeredCount,
      hitCount,
      accPct: answeredCount ? Math.round((hitCount / answeredCount) * 100) : 0,
      weightedAccPct: Math.round(weightedAcc),
      readinessScore: finalReadiness,
      totalTopics,
      doneTopics,
      priorityTopics:
        Array.isArray(remotePriority) && remotePriority.length
          ? remotePriority.slice(0, 8)
          : priorityList
              .sort((a, b) => (parseInt(b.peso, 10) || 0) - (parseInt(a.peso, 10) || 0))
              .slice(0, 8)
    };
  }

  // --- GLOBAL KPI STRIP & SIDEBAR / HEADER TELEMETRY ---
  function renderGlobalKPIs() {
    const strip = document.getElementById("global-kpi-strip");
    const tel = computeTelemetry();
    const mapsTotal = (window.CPA_MAPAS_OFICIAIS || []).length;
    const mapsDone = Object.keys(state.completedCases || {}).length;

    const sideReadiness = document.getElementById("sidebar-readiness-val");
    if (sideReadiness) {
      sideReadiness.textContent = `${tel.readinessScore}%`;
      sideReadiness.style.color =
        tel.readinessScore >= 70 ? "#10b981" : tel.readinessScore >= 50 ? "#f59e0b" : "var(--gold-metallic)";
    }

    const headerPill = document.getElementById("readiness-header-pill");
    if (headerPill) {
      headerPill.textContent = `Prontidão ANBIMA: ${tel.readinessScore}%`;
    }

    if (!strip) return;

    strip.innerHTML = `
      <div class="kpi-card">
        <div class="kpi-icon" style="background:rgba(212,175,55,0.16); border-color:rgba(212,175,55,0.35);">🏆</div>
        <div>
          <div class="kpi-val" style="color:${tel.readinessScore >= 70 ? "#10b981" : "#d4af37"};">
            ${tel.readinessScore}% <span style="font-size:0.75rem; font-weight:600; color:var(--muted);">(Pesos 20/40/30/10)</span>
          </div>
          <div class="kpi-lbl">Índice de Prontidão Ponderado ANBIMA</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon">🎯</div>
        <div>
          <div class="kpi-val" style="color:${tel.accPct >= 70 ? "#10b981" : tel.accPct > 0 ? "#fbbf24" : "var(--text)"};">
            ${tel.accPct}% <span style="font-size:0.75rem; font-weight:600; color:var(--muted);">(Meta: 70%+)</span>
          </div>
          <div class="kpi-lbl">Taxa de Acerto (${tel.hitCount}/${tel.answeredCount} de ${tel.totalQ}Q)</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon" style="background:rgba(6,182,212,0.15);">📚</div>
        <div>
          <div class="kpi-val">${tel.doneTopics} / ${tel.totalTopics}</div>
          <div class="kpi-lbl">Tópicos do Edital Dominados</div>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon" style="background:rgba(245,158,11,0.15);">💬</div>
        <div>
          <div class="kpi-val">${mapsDone} / ${mapsTotal}</div>
          <div class="kpi-lbl">Mapas de Decisão Concluídos</div>
        </div>
      </div>
    `;
  }

  // --- ABA 1: DASHBOARD EXECUTIVO & PLANO SPRINT ---
  document.getElementById("cola-search")?.addEventListener("input", renderDashboard);

  function renderDashboard() {
    renderGlobalKPIs();
    const tel = computeTelemetry();
    const mods = getModules();

    const readinessBannerEl = document.getElementById("executive-readiness-banner");
    if (readinessBannerEl) {
      const statusText =
        tel.readinessScore >= 70
          ? "✅ ZONA DE APROVAÇÃO ANBIMA (≥70%)"
          : tel.readinessScore >= 50
          ? "⚡ ZONA COMPETITIVA — INTENSIFICAR MÓDULO 2 (40%) E MÓDULO 3 (30%)"
          : "🎯 FASE DE CONSTRUÇÃO — PRIORIZE O PARETO 70/30 ABAIXO";

      readinessBannerEl.innerHTML = `
        <div class="readiness-banner">
          <div class="readiness-score-box">
            <div class="readiness-val">${tel.readinessScore}%</div>
            <div class="readiness-lbl">Readiness Score</div>
          </div>
          <div>
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:6px;">
              <span class="badge badge-exec">PESOS OFICIAIS: M1 20% • M2 40% • M3 30% • M4 10%</span>
              <span class="badge ${tel.readinessScore >= 70 ? "badge-green" : "badge-amber"}">${statusText}</span>
            </div>
            <div style="font-size:0.92rem; color:var(--text-secondary);">
              O <b>Índice de Prontidão Ponderado</b> combina sua precisão nas questões comentadas (70%) e domínio dos 38 tópicos do edital (30%), ponderados pela matriz oficial da prova de 50 questões da ANBIMA.
            </div>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; min-width:190px;">
            <button type="button" class="btn btn-gold btn-sm" id="btn-banner-open-materiais">📊 Tabelas &amp; Guia HP 12C</button>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-banner-open-apostilas">📖 Ler Apostilas Completas</button>
          </div>
        </div>
      `;

      document.getElementById("btn-banner-open-materiais")?.addEventListener("click", () => {
        switchTab("materiais");
      });
      document.getElementById("btn-banner-open-apostilas")?.addEventListener("click", () => {
        switchTab("estudo");
        setStudySubTab("apostila");
      });
    }

    const statsEl = document.getElementById("dashboard-stats");
    if (statsEl) {
      statsEl.innerHTML = mods
        .slice()
        .sort((a, b) => parseInt(b.peso, 10) - parseInt(a.peso, 10))
        .map((m) => {
          const totalTopics = (m.topicos || []).length;
          const doneTopics = (m.topicos || []).filter((t) => state.masteredTopics[m.id + "_" + t.codigo]).length;
          const qs = m.questoes || [];
          const oficiaisCount = qs.filter((q) => q.oficial).length;
          const answered = qs.filter((q) => state.answeredQuestions[q.id]);
          const hits = answered.filter((q) => state.answeredQuestions[q.id].correct).length;
          const pctHit = answered.length ? Math.round((hits / answered.length) * 100) : 0;
          const pctTopic = totalTopics ? Math.round((doneTopics / totalTopics) * 100) : 0;
          const isPriority = m.id === 2 || m.id === 3;
          const badgeClass = isPriority ? "badge-green" : "badge-blue";
          const execCardCls = m.id === 2 ? "exec-card exec-card-gold" : m.id === 3 ? "exec-card exec-card-emerald" : "card";

          return `
            <div class="${execCardCls} card-interactive">
              <div class="card-header">
                <span class="card-title">Módulo ${m.id}</span>
                <span class="badge ${badgeClass}">Peso ${m.peso} (~${m.questoesProva}Q na prova)</span>
              </div>
              <p style="font-size:0.84rem; color:var(--muted); min-height:40px; margin-bottom:8px;">${m.titulo}</p>
              <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
                <span style="font-size:1.65rem; font-weight:800; font-family:var(--font-mono); color:${pctHit >= 70 ? "#10b981" : "var(--text)"};">${pctHit}%</span>
                <span style="font-size:0.78rem; color:var(--muted);">${hits}/${answered.length} acertos • ${qs.length}Q (${oficiaisCount} oficiais)</span>
              </div>
              <div style="font-size:0.78rem; color:var(--muted);">Tópicos dominados: ${doneTopics}/${totalTopics} (${pctTopic}%)</div>
              <div class="progress-bar"><div class="progress-fill" style="width:${pctTopic}%"></div></div>
              <div style="display:flex; gap:8px; margin-top:14px;">
                <button type="button" class="btn btn-secondary btn-sm" style="flex:1;" data-goto-study="${m.id}">📖 Estudar</button>
                <button type="button" class="btn btn-sm" style="flex:1;" data-goto-q="${m.id}">🎯 Treinar (${qs.length}Q)</button>
              </div>
            </div>
          `;
        })
        .join("");

      statsEl.querySelectorAll("[data-goto-study]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const sel = document.getElementById("study-mod-select");
          if (sel) sel.value = btn.dataset.gotoStudy;
          switchTab("estudo");
        });
      });

      statsEl.querySelectorAll("[data-goto-q]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const sel = document.getElementById("q-mod-filter");
          if (sel) sel.value = btn.dataset.gotoQ;
          buildQuestionPool();
          switchTab("questoes");
        });
      });
    }

    // Radar de Tópicos Prioritários
    const prioEl = document.getElementById("priority-topics-list");
    if (prioEl) {
      const items = tel.priorityTopics || [];
      if (!items.length) {
        prioEl.innerHTML = `<div class="card" style="grid-column:1/-1; color:#10b981; font-weight:700;">🏆 Todos os 38 tópicos do edital já foram marcados como dominados!</div>`;
      } else {
        prioEl.innerHTML = items
          .slice(0, 4)
          .map((pt) => {
            const mId = pt.moduleId || pt.module_id || 2;
            const cod = pt.codigo || pt.key || "";
            const tit = pt.titulo || "";
            const peso = pt.peso || pt.pesoModulo || `${mId === 2 ? "40%" : mId === 3 ? "30%" : "20%"}`;
            return `
              <div class="card" style="padding:14px; background:var(--obsidian);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                  <span class="badge badge-gold">Módulo ${mId} (${peso})</span>
                  <span class="badge badge-blue">${cod}</span>
                </div>
                <div style="font-weight:700; font-size:0.88rem; margin-bottom:10px; min-height:38px;">${tit}</div>
                <button type="button" class="btn btn-secondary btn-sm" style="width:100%;" data-prio-mod="${mId}">Ir ao Tópico ▶</button>
              </div>
            `;
          })
          .join("");

        prioEl.querySelectorAll("[data-prio-mod]").forEach((b) => {
          b.addEventListener("click", () => {
            const sel = document.getElementById("study-mod-select");
            if (sel) sel.value = b.dataset.prioMod;
            switchTab("estudo");
            setStudySubTab("topicos");
          });
        });
      }
    }

    // Cronograma Sprint
    const sprintData = window.CPA_SPRINT || { blocosEstudo: [], colaDeProva: [] };
    const blocos = sprintData.blocosEstudo || [];
    const doneBlocks = blocos.filter((b) => state.sprintDone[b.id]).length;
    const pctSprint = blocos.length ? Math.round((doneBlocks / blocos.length) * 100) : 0;
    const badgeEl = document.getElementById("sprint-progress-badge");
    if (badgeEl) badgeEl.textContent = `${pctSprint}% concluído (${doneBlocks}/${blocos.length})`;

    const scheduleEl = document.getElementById("sprint-schedule-list");
    if (scheduleEl) {
      scheduleEl.innerHTML = blocos
        .map((b) => {
          const checked = state.sprintDone[b.id] ? "checked" : "";
          const doneClass = state.sprintDone[b.id] ? "done" : "";
          return `
            <div class="sprint-item ${doneClass}">
              <input type="checkbox" class="sprint-check" data-sprint-id="${b.id}" ${checked}>
              <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; gap:8px; flex-wrap:wrap;">
                  <strong>${b.dia || ""} • ${b.horario || ""} — ${b.titulo || ""}</strong>
                  <span class="badge badge-purple">${b.moduloFoco || ""} (${b.pesoFoco || ""})</span>
                </div>
                <ul style="padding-left:18px; margin-top:6px; font-size:0.85rem; color:var(--text-secondary);">
                  ${(b.tarefas || []).map((t) => `<li>${t}</li>`).join("")}
                </ul>
                ${b.metaQuestoes ? `<div style="margin-top:5px; font-size:0.8rem; color:#10b981; font-weight:700;">🎯 Meta: ${b.metaQuestoes}</div>` : ""}
              </div>
            </div>
          `;
        })
        .join("");

      scheduleEl.querySelectorAll(".sprint-check").forEach((chk) => {
        chk.addEventListener("change", () => {
          const blockId = chk.dataset.sprintId;
          const concluido = chk.checked;
          state.sprintDone[blockId] = concluido;
          saveState();
          renderDashboard();
          if (apiClient) {
            apiClient.toggleSprintBlock(blockId, concluido).catch(() => {});
          } else {
            fetch("/api/sprint/toggle", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ blockId: blockId, concluido: concluido })
            }).catch(() => {});
          }
        });
      });
    }

    // Cola de Prova com filtro
    const colaQuery = (document.getElementById("cola-search")?.value || "").trim().toLowerCase();
    const colaEl = document.getElementById("cola-prova-list");
    if (colaEl) {
      const filteredCola = (sprintData.colaDeProva || []).filter((c) => {
        if (!colaQuery) return true;
        const txt = `${c.titulo || ""} ${c.tema || ""} ${c.modulo || ""} ${c.conteudo || ""} ${c.resumo || ""}`.toLowerCase();
        return txt.includes(colaQuery);
      });

      colaEl.innerHTML = filteredCola
        .map(
          (c) => `
          <div style="padding:14px; border-bottom:1px solid var(--border);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <strong style="color:#10b981; font-size:0.95rem;">${c.titulo || c.tema || ""}</strong>
              ${c.modulo ? `<span class="badge badge-blue">${c.modulo}</span>` : ""}
            </div>
            <div style="font-size:0.88rem; color:var(--text-secondary);">${c.conteudo || c.resumo || c.regra || ""}</div>
          </div>
        `
        )
        .join("");
    }
  }

  // --- RENDERIZADORES DE TABELAS COMPARATIVAS, GUIA HP 12C & APOSTILAS ---
  function renderComparativeTableItem(tb) {
    const title = tb.titulo || tb.title || "Tabela Comparativa ANBIMA";
    const modBadge = tb.modulo || tb.categoria || "ANBIMA CPA";
    const desc = tb.resumoExecutivo || tb.resumo || tb.descricao || tb.subtitulo || "";
    const tip = tb.maceteProva || tb.dicaProva || tb.pegadinha || "";

    if (tb.html || tb.tabelaHtml || tb.conteudoHtml) {
      return `
        <div class="exec-card exec-card-gold" style="margin-bottom:18px;">
          <div class="card-header" style="flex-wrap:wrap;">
            <div>
              <h3 class="card-title">${title}</h3>
              ${desc ? `<p style="font-size:0.83rem; color:var(--muted); margin-top:4px;">${desc}</p>` : ""}
            </div>
            <span class="badge badge-exec">${modBadge}</span>
          </div>
          ${tb.html || tb.tabelaHtml || tb.conteudoHtml}
          ${tip ? `<div class="trigger-box"><strong>🎯 Macete de Prova:</strong> ${tip}</div>` : ""}
        </div>
      `;
    }

    const cols = tb.colunas || tb.headers || [];
    const rows = tb.linhas || tb.rows || tb.dados || [];

    const theadHtml = cols.length
      ? `<thead><tr>${cols.map((c) => `<th>${c}</th>`).join("")}</tr></thead>`
      : "";

    const tbodyHtml = rows
      .map((row) => {
        if (Array.isArray(row)) {
          return `<tr>${row
            .map((cell) => {
              const s = String(cell ?? "");
              const cls = s.startsWith("✅") || s.includes("ISENTO")
                ? "cell-positive"
                : s.startsWith("❌") || s.includes("NÃO COBERT")
                ? "cell-negative"
                : "";
              return `<td class="${cls}">${s}</td>`;
            })
            .join("")}</tr>`;
        }
        if (row && typeof row === "object") {
          const vals = cols.length ? cols.map((k) => row[k] ?? "") : Object.values(row);
          return `<tr>${vals.map((v) => `<td>${v ?? ""}</td>`).join("")}</tr>`;
        }
        return "";
      })
      .join("");

    return `
      <div class="exec-card exec-card-gold" style="margin-bottom:18px;">
        <div class="card-header" style="flex-wrap:wrap;">
          <div>
            <h3 class="card-title">${title}</h3>
            ${desc ? `<p style="font-size:0.83rem; color:var(--muted); margin-top:4px;">${desc}</p>` : ""}
          </div>
          <span class="badge badge-exec">${modBadge}</span>
        </div>
        <div class="fin-table-wrap">
          <table class="fin-table">
            ${theadHtml}
            <tbody>${tbodyHtml}</tbody>
          </table>
        </div>
        ${tb.dicaProva || tb.pegadinha ? `<div class="trigger-box"><strong>🎯 Ponto de Prova:</strong> ${tb.dicaProva || tb.pegadinha}</div>` : ""}
      </div>
    `;
  }

  function renderHP12CRecipeCard(rec, idx) {
    const title = rec.titulo || rec.title || `Receita HP 12C #${idx + 1}`;
    const ctx = rec.contextoProva || rec.contexto || rec.enunciado || "";
    const formula = rec.formula || "";
    const rawKeys = rec.teclasHP12C || rec.passos || rec.teclas || [];
    const expected = rec.resultadoEsperado || rec.visor || rec.resultado || "";
    const interp = rec.interpretacao || rec.explicacao || "";

    const keysHtml = (Array.isArray(rawKeys) ? rawKeys : [String(rawKeys)])
      .map((step) => {
        const s = typeof step === "object" ? step.tecla || step.passo || JSON.stringify(step) : String(step);
        const cls =
          s === "f" || s.startsWith("f ")
            ? "key-badge key-badge-f"
            : s === "g" || s.startsWith("g ")
            ? "key-badge key-badge-g"
            : ["n", "i", "PV", "PMT", "FV", "NPV", "IRR"].includes(s)
            ? "key-badge key-badge-tvm"
            : "key-badge";
        return `<span class="${cls}">${s}</span>`;
      })
      .join("");

    return `
      <div class="hp12c-recipe-card">
        <div class="card-header" style="margin-bottom:4px;">
          <strong style="font-size:0.98rem; color:var(--text);">${title}</strong>
          <span class="badge badge-gold">HP 12C RPN</span>
        </div>
        ${ctx ? `<p style="font-size:0.85rem; color:var(--text-secondary);"><b>Cenário de Prova:</b> ${ctx}</p>` : ""}
        ${formula ? `<div class="recipe-formula">${formula}</div>` : ""}
        <div>
          <div style="font-size:0.74rem; font-weight:800; text-transform:uppercase; color:var(--muted); margin-bottom:6px;">
            Sequência Exata de Teclas na HP 12C:
          </div>
          <div class="key-sequence">${keysHtml}</div>
        </div>
        ${
          expected
            ? `<div class="recipe-result">
                 <span>📟 Visor Esperado: <b>${expected}</b></span>
                 <button type="button" class="btn btn-gold btn-sm" data-open-hp12c-recipe="${idx}">🧮 Abrir HP 12C</button>
               </div>`
            : ""
        }
        ${interp ? `<div style="font-size:0.83rem; color:var(--text-secondary); border-top:1px solid var(--border); padding-top:8px;">💡 <b>Interpretação:</b> ${interp}</div>` : ""}
      </div>
    `;
  }

  function getApostilaContentForKey(docKey) {
    if (studyMaterialsData) {
      const byId = studyMaterialsData.byId || {};
      const item =
        byId[docKey] ||
        byId[String(docKey).replace("modulo", "")] ||
        (Array.isArray(studyMaterialsData.materials)
          ? studyMaterialsData.materials.find((m) => m.id === docKey || String(m.moduleId) === String(docKey).replace("modulo", ""))
          : null);
      if (item && (item.content || item.markdown)) {
        return {
          title: item.title || item.titulo || docKey,
          wordCount: item.wordCount || 0,
          readingTime: item.readingTimeMinutes || 10,
          markdown: item.content || item.markdown
        };
      }
    }

    // Fallback para resumo executivo + tópicos do módulo
    const modNum = parseInt(String(docKey).replace(/\D/g, ""), 10) || 2;
    const mod = getModules().find((m) => m.id === modNum) || getModules()[0];
    const deep = getMateriaisProfundos();
    const resMod =
      (deep.resumosModulos && (deep.resumosModulos[modNum] || deep.resumosModulos[`modulo${modNum}`])) || {};

    let md = `# Módulo ${mod ? mod.id : modNum}: ${mod ? mod.titulo : ""}\n\n`;
    if (resMod.sintese || resMod.resumo || (mod && mod.resumoExecutivo)) {
      md += `> ${resMod.sintese || resMod.resumo || mod.resumoExecutivo}\n\n`;
    }
    if (mod && Array.isArray(mod.topicos)) {
      mod.topicos.forEach((t) => {
        md += `## ${t.codigo} — ${t.titulo}\n\n`;
        md += `${(t.explicacao || "").replace(/<[^>]+>/g, " ")}\n\n`;
        if ((t.gatilhosProva || []).length) {
          md += `### Gatilhos de Prova Cesgranrio\n`;
          t.gatilhosProva.forEach((g) => {
            md += `- ${g}\n`;
          });
          md += `\n`;
        }
      });
    }
    return {
      title: mod ? `Módulo ${mod.id} — ${mod.titulo}` : "Apostila Completa CPA",
      wordCount: md.split(/\s+/).length,
      readingTime: 8,
      markdown: md
    };
  }

  function renderMarkdownString(md) {
    if (window.CPA_MODULES && window.CPA_MODULES.study && typeof window.CPA_MODULES.study.formatMarkdownToHtml === "function") {
      return window.CPA_MODULES.study.formatMarkdownToHtml(md);
    }
    return `<div style="white-space:pre-wrap;">${md}</div>`;
  }

  // --- ABA 3 (NOVA): CENTRAL DE MATERIAIS CONCRETOS (TABELAS + GUIA HP 12C + APOSTILAS) ---
  document.getElementById("mat-view-filter")?.addEventListener("change", renderMateriaisView);
  document.getElementById("mat-search-input")?.addEventListener("input", renderMateriaisView);
  document.getElementById("apostila-doc-select")?.addEventListener("change", renderMateriaisView);
  document.getElementById("btn-mat-open-hp12c")?.addEventListener("click", () => {
    document.getElementById("hp12c-floating-modal")?.classList.add("open");
  });

  function renderMateriaisView() {
    const viewFilter = document.getElementById("mat-view-filter")?.value || "all";
    const query = (document.getElementById("mat-search-input")?.value || "").trim().toLowerCase();
    const deep = getMateriaisProfundos();

    const tabSec = document.getElementById("materiais-tabelas-section");
    const hpSec = document.getElementById("materiais-hp12c-section");
    const apoSec = document.getElementById("materiais-apostilas-section");

    if (tabSec) tabSec.style.display = viewFilter === "all" || viewFilter === "tabelas" ? "block" : "none";
    if (hpSec) hpSec.style.display = viewFilter === "all" || viewFilter === "hp12c" ? "block" : "none";
    if (apoSec) apoSec.style.display = viewFilter === "all" || viewFilter === "apostilas" ? "block" : "none";

    const tabContainer = document.getElementById("materiais-tabelas-container");
    if (tabContainer) {
      const filteredTables = (deep.tabelasComparativas || []).filter((tb) => {
        if (!query) return true;
        return JSON.stringify(tb).toLowerCase().includes(query);
      });
      tabContainer.innerHTML = filteredTables.length
        ? filteredTables.map(renderComparativeTableItem).join("")
        : `<div class="card">Nenhuma tabela encontrada para o filtro "${query}".</div>`;
    }

    const hpContainer = document.getElementById("materiais-hp12c-container");
    if (hpContainer) {
      const filteredRecipes = (deep.guiaHP12C || []).filter((r) => {
        if (!query) return true;
        return JSON.stringify(r).toLowerCase().includes(query);
      });
      hpContainer.innerHTML = filteredRecipes.length
        ? filteredRecipes.map((r, i) => renderHP12CRecipeCard(r, i)).join("")
        : `<div class="card">Nenhuma receita HP 12C encontrada para "${query}".</div>`;

      hpContainer.querySelectorAll("[data-open-hp12c-recipe]").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.getElementById("hp12c-floating-modal")?.classList.add("open");
        });
      });
    }

    // Resumos Executivos dos Módulos + Leitor de Apostila Completa
    const resContainer = document.getElementById("materiais-resumos-container");
    if (resContainer) {
      const resumos = deep.resumosModulos || {};
      const entries = Array.isArray(resumos)
        ? resumos
        : Object.keys(resumos).map((k) => ({ key: k, ...(typeof resumos[k] === "object" ? resumos[k] : { sintese: String(resumos[k]) }) }));

      if (entries.length) {
        resContainer.innerHTML = `
          <div class="grid-2" style="margin-bottom:14px;">
            ${entries
              .slice(0, 4)
              .map((rm, idx) => {
                const title = rm.titulo || rm.title || `Síntese Executiva — Módulo ${idx + 1}`;
                const body = rm.visaoExecutiva || rm.sintese || rm.resumo || rm.conteudo || rm.descricao || "";
                const rawList = rm.pilaresCriticos || rm.pontosChave || rm.topicos || rm.fichas;
                const pontos = Array.isArray(rawList)
                  ? `<ul style="padding-left:18px; margin-top:6px; font-size:0.82rem; color:var(--text-secondary);">
                       ${rawList
                         .slice(0, 4)
                         .map((p) => `<li>${typeof p === "string" ? p : p.titulo || p.regra || JSON.stringify(p)}</li>`)
                         .join("")}
                     </ul>`
                  : "";
                return `
                  <div class="card" style="background:var(--obsidian); padding:14px;">
                    <strong style="color:var(--gold-metallic); font-size:0.9rem;">${title}</strong>
                    <p style="font-size:0.83rem; color:var(--text-secondary); margin-top:6px;">${body}</p>
                    ${pontos}
                  </div>
                `;
              })
              .join("")}
          </div>
        `;
      }
    }

    const docSelect = document.getElementById("apostila-doc-select");
    const docKey = docSelect ? docSelect.value : "modulo2";
    const docData = getApostilaContentForKey(docKey);
    const metaBadge = document.getElementById("apostila-meta-badge");
    if (metaBadge && docData) {
      metaBadge.textContent = `⏱️ ~${docData.readingTime} min • ${docData.wordCount} palavras`;
    }
    const readerEl = document.getElementById("apostila-reader-container");
    if (readerEl && docData) {
      readerEl.innerHTML = renderMarkdownString(docData.markdown);
    }
  }

  // --- ABA 2: ESTUDO GUIADO POR MÓDULO (TÓPICOS + APOSTILA COMPLETA + TABELAS/HP12C) ---
  const studyModSelect = document.getElementById("study-mod-select");
  const studySearch = document.getElementById("study-search");
  studyModSelect?.addEventListener("change", renderStudyView);
  studySearch?.addEventListener("input", renderStudyView);

  function setStudySubTab(subTab) {
    activeStudySubTab = subTab;
    document.querySelectorAll("#study-subnav .sub-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.studySub === subTab);
    });
    renderStudyView();
  }

  document.querySelectorAll("#study-subnav .sub-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setStudySubTab(btn.dataset.studySub || "topicos");
    });
  });

  function renderStudyView() {
    const modId = parseInt(studyModSelect ? studyModSelect.value : "2", 10);
    const query = (studySearch ? studySearch.value : "").trim().toLowerCase();
    const mod = getModules().find((m) => m.id === modId);
    if (!mod) return;

    const headerEl = document.getElementById("study-module-header");
    const containerEl = document.getElementById("study-topics-container");
    const apostilaPanelEl = document.getElementById("study-apostila-panel");
    const inlineMatEl = document.getElementById("study-materials-inline");
    const countEl = document.getElementById("study-mastered-count");

    const allTopics = mod.topicos || [];
    const doneCount = allTopics.filter((t) => state.masteredTopics[mod.id + "_" + t.codigo]).length;
    if (countEl) countEl.textContent = `${doneCount}/${allTopics.length} tópicos dominados`;

    if (headerEl) {
      headerEl.innerHTML = `
        <div class="card-header" style="flex-wrap:wrap;">
          <div>
            <h2 class="card-title">Módulo ${mod.id}: ${mod.titulo}</h2>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:6px;">${mod.resumoExecutivo || ""}</p>
          </div>
          <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span class="badge badge-green">Peso na Prova: ${mod.peso} (~${mod.questoesProva} questões)</span>
          </div>
        </div>
      `;
    }

    // Controle de visibilidade conforme sub-aba de estudo
    if (apostilaPanelEl) {
      if (activeStudySubTab === "apostila") {
        const docData = getApostilaContentForKey(`modulo${mod.id}`);
        apostilaPanelEl.style.display = "block";
        apostilaPanelEl.innerHTML = `
          <div class="exec-card exec-card-gold">
            <div class="card-header" style="flex-wrap:wrap;">
              <h3 class="card-title">📖 Apostila Completa — Módulo ${mod.id} (${docData.wordCount} palavras)</h3>
              <span class="badge badge-exec">Leitura Integral Markdown</span>
            </div>
            <div class="markdown-reader">${renderMarkdownString(docData.markdown)}</div>
          </div>
        `;
      } else {
        apostilaPanelEl.style.display = "none";
      }
    }

    if (inlineMatEl) {
      const deep = getMateriaisProfundos();
      if (activeStudySubTab === "tabelas") {
        inlineMatEl.style.display = "block";
        inlineMatEl.innerHTML = (deep.tabelasComparativas || []).map(renderComparativeTableItem).join("");
      } else if (activeStudySubTab === "hp12c") {
        inlineMatEl.style.display = "block";
        inlineMatEl.innerHTML = `<div class="hp12c-guide-grid">${(deep.guiaHP12C || [])
          .map((r, i) => renderHP12CRecipeCard(r, i))
          .join("")}</div>`;
        inlineMatEl.querySelectorAll("[data-open-hp12c-recipe]").forEach((btn) => {
          btn.addEventListener("click", () => {
            document.getElementById("hp12c-floating-modal")?.classList.add("open");
          });
        });
      } else {
        inlineMatEl.style.display = "none";
      }
    }

    const filtered = allTopics.filter((t) => {
      if (!query) return true;
      const hay = `${t.codigo} ${t.titulo} ${t.explicacao} ${(t.gatilhosProva || []).join(" ")} ${(t.pegadinhas || []).join(" ")}`.toLowerCase();
      return hay.includes(query);
    });

    if (containerEl) {
      containerEl.style.display = activeStudySubTab === "topicos" ? "block" : "none";
      containerEl.innerHTML = filtered
        .map((t) => {
          const key = mod.id + "_" + t.codigo;
          const isMastered = !!state.masteredTopics[key];
          return `
            <div class="card topic-card ${isMastered ? "mastered" : ""}">
              <div class="card-header" style="flex-wrap:wrap;">
                <div>
                  <span class="badge badge-blue">${t.codigo}</span>
                  <strong style="font-size:1.05rem; margin-left:8px;">${t.titulo}</strong>
                  ${t.prioridade ? `<span class="badge ${t.prioridade === "Alta" ? "badge-amber" : "badge-purple"}" style="margin-left:6px;">Prioridade ${t.prioridade}</span>` : ""}
                </div>
                <button type="button" class="btn ${isMastered ? "btn-secondary" : ""} btn-sm" data-master-key="${key}">
                  ${isMastered ? "✅ Tópico Dominado" : "Marcar como Dominado"}
                </button>
              </div>
              <div class="topic-body">${t.explicacao || ""}</div>
              ${
                (t.gatilhosProva || []).length
                  ? `<div class="trigger-box"><strong>🎯 Gatilhos de Prova (Como a Cesgranrio/ANBIMA cobra):</strong><ul style="padding-left:18px; margin-top:4px;">${t.gatilhosProva.map((g) => `<li>${g}</li>`).join("")}</ul></div>`
                  : ""
              }
              ${
                (t.pegadinhas || []).length
                  ? `<div class="trap-box"><strong>⚠️ Pegadinhas Clássicas da Banca:</strong><ul style="padding-left:18px; margin-top:4px;">${t.pegadinhas.map((p) => `<li>${p}</li>`).join("")}</ul></div>`
                  : ""
              }
            </div>
          `;
        })
        .join("");

      containerEl.querySelectorAll("[data-master-key]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const k = btn.dataset.masterKey;
          const mastered = !state.masteredTopics[k];
          state.masteredTopics[k] = mastered;
          saveState();
          renderStudyView();
          renderGlobalKPIs();
          if (apiClient) {
            apiClient.toggleTopic(k, mastered).catch(() => {});
          } else {
            fetch("/api/topics/toggle", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ key: k, mastered: mastered })
            }).catch(() => {});
          }
        });
      });
    }
  }

  // --- ABA 4: BANCO DE QUESTÕES (148 QUESTÕES + MAPA NAVEGADOR + JUSTIFICATIVAS POR ALTERNATIVA) ---
  let currentQuestionList = [];
  let currentQuestionIndex = 0;

  function buildQuestionPool() {
    const modFilter = document.getElementById("q-mod-filter")?.value || "all";
    const originFilter = document.getElementById("q-origin-filter")?.value || "all";
    const diffFilter = document.getElementById("q-diff-filter")?.value || "all";
    const searchQ = (document.getElementById("q-search-input")?.value || "").trim().toLowerCase();

    let pool = [];
    getModules().forEach((m) => {
      if (modFilter !== "all" && String(m.id) !== modFilter) return;
      (m.questoes || []).forEach((q) => {
        pool.push({ ...q, moduloId: m.id, moduloTitulo: m.titulo });
      });
    });

    if (originFilter === "oficial") pool = pool.filter((q) => q.oficial);
    if (originFilter === "inedita") pool = pool.filter((q) => !q.oficial);
    if (originFilter === "wrong") {
      pool = pool.filter((q) => state.answeredQuestions[q.id] && !state.answeredQuestions[q.id].correct);
    }
    if (originFilter === "fav") {
      pool = pool.filter((q) => state.favoriteQuestions && state.favoriteQuestions[q.id]);
    }
    if (diffFilter !== "all") {
      pool = pool.filter((q) => (q.dificuldade || "").toLowerCase().startsWith(diffFilter.slice(0, 3).toLowerCase()));
    }
    if (searchQ) {
      pool = pool.filter((q) => {
        const hay = `${q.id} ${q.codigoItem || ""} ${q.codigoPD || ""} ${q.topicoPD || ""} ${q.contexto || ""} ${q.enunciado || ""}`.toLowerCase();
        return hay.includes(searchQ);
      });
    }

    currentQuestionList = pool;
    currentQuestionIndex = 0;
  }

  ["q-mod-filter", "q-origin-filter", "q-diff-filter"].forEach((id) => {
    document.getElementById(id)?.addEventListener("change", () => {
      buildQuestionPool();
      renderPracticeQuestion();
    });
  });
  document.getElementById("q-search-input")?.addEventListener("input", () => {
    buildQuestionPool();
    renderPracticeQuestion();
  });

  document.getElementById("btn-prev-q")?.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderPracticeQuestion();
    }
  });
  document.getElementById("btn-next-q")?.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuestionList.length - 1) {
      currentQuestionIndex++;
      renderPracticeQuestion();
    }
  });

  function renderQuestionNavGrid() {
    const grid = document.getElementById("q-nav-grid");
    if (!grid) return;
    grid.innerHTML = currentQuestionList
      .map((q, idx) => {
        const ans = state.answeredQuestions[q.id];
        const statusCls = ans ? (ans.correct ? "hit" : "miss") : "";
        const currCls = idx === currentQuestionIndex ? "current" : "";
        return `<button type="button" class="q-nav-dot ${statusCls} ${currCls}" data-qjump="${idx}" title="${q.codigoItem ? "Item " + q.codigoItem : q.id}">${idx + 1}</button>`;
      })
      .join("");

    grid.querySelectorAll("[data-qjump]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentQuestionIndex = parseInt(btn.dataset.qjump, 10);
        renderPracticeQuestion();
      });
    });
  }

  function renderPracticeQuestion() {
    if (!currentQuestionList.length) buildQuestionPool();
    const container = document.getElementById("practice-question-container");
    const badge = document.getElementById("q-counter-badge");
    if (!container) return;

    renderQuestionNavGrid();

    if (!currentQuestionList.length) {
      if (badge) badge.textContent = "0 questões";
      container.innerHTML = `<div class="card">Nenhuma questão encontrada para este filtro. Tente limpar a busca ou trocar o filtro acima.</div>`;
      return;
    }

    const q = currentQuestionList[currentQuestionIndex];
    if (badge) badge.textContent = `${currentQuestionIndex + 1} / ${currentQuestionList.length}`;

    if (!q._shuffledOptions) {
      q._shuffledOptions = shuffle(q.alternativas || []);
    }
    const letters = ["A", "B", "C", "D"];
    const isFav = !!(state.favoriteQuestions && state.favoriteQuestions[q.id]);

    container.innerHTML = `
      <div class="card">
        <div class="card-header" style="flex-wrap:wrap;">
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <span class="badge badge-blue">Módulo ${q.moduloId}</span>
            <span class="badge ${q.oficial ? "badge-green" : "badge-purple"}">
              ${q.oficial ? `🏛️ Oficial Cesgranrio ${q.codigoItem ? "• Item " + q.codigoItem : q.numeroOficial ? "#" + q.numeroOficial : ""}` : "✨ Inédita Padrão CPA"}
            </span>
            <span class="badge badge-amber">PD ${q.codigoPD || ""}</span>
            <span class="badge badge-blue">${q.dificuldade || "Médio"}</span>
          </div>
          <div style="display:flex; gap:6px;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-fav-q" title="Favoritar para revisão">${isFav ? "⭐ Favorita" : "☆ Favoritar"}</button>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-reshuffle-q" title="Reembaralhar alternativas">🔀</button>
          </div>
        </div>

        ${q.topicoPD ? `<div style="font-size:0.8rem; color:var(--muted); margin-bottom:10px;">📌 <b>Tópico do Programa Detalhado:</b> ${q.topicoPD}</div>` : ""}

        <div class="context-block">${(q.contexto || "").replace(/\n/g, "<br>")}</div>
        <div class="enunciado-block">${q.enunciado || ""}</div>

        <div class="options-list" id="q-options-list">
          ${q._shuffledOptions
            .map(
              (opt, idx) => `
              <div class="option-row">
                <button type="button" class="option-btn" data-opt-idx="${idx}">
                  <div class="option-main">
                    <span class="opt-letter">${letters[idx]}</span>
                    <span style="flex:1;">${opt.texto}</span>
                  </div>
                  ${
                    opt.justificativa
                      ? `<div class="opt-justificativa">
                           <strong style="color:${opt.correta ? "#10b981" : "#f87171"};">
                             ${opt.correta ? "✅ Gabarito Oficial:" : "❌ Por que está incorreta:"}
                           </strong>
                           ${opt.justificativa}
                         </div>`
                      : ""
                  }
                </button>
                <button type="button" class="elim-btn" data-elim-idx="${idx}" title="Riscar / Eliminar alternativa">✂️</button>
              </div>
            `
            )
            .join("")}
        </div>

        <div id="q-feedback-area"></div>
      </div>
    `;

    document.getElementById("btn-fav-q")?.addEventListener("click", () => {
      state.favoriteQuestions = state.favoriteQuestions || {};
      const favorita = !state.favoriteQuestions[q.id];
      state.favoriteQuestions[q.id] = favorita;
      saveState();
      renderPracticeQuestion();
      if (apiClient) {
        apiClient.favoriteQuestion(q.id, favorita).catch(() => {});
      } else {
        fetch("/api/questions/favorite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ questionId: q.id, favorita: favorita })
        }).catch(() => {});
      }
    });

    document.getElementById("btn-reshuffle-q")?.addEventListener("click", () => {
      q._shuffledOptions = shuffle(q.alternativas || []);
      renderPracticeQuestion();
    });

    container.querySelectorAll("[data-elim-idx]").forEach((ebtn) => {
      ebtn.addEventListener("click", () => {
        const idx = ebtn.dataset.elimIdx;
        const optBtn = container.querySelector(`.option-btn[data-opt-idx="${idx}"]`);
        optBtn?.classList.toggle("eliminated");
      });
    });

    const optBtns = container.querySelectorAll(".option-btn");
    optBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.optIdx, 10);
        const chosen = q._shuffledOptions[idx];
        const isCorrect = !!chosen.correta;

        state.answeredQuestions[q.id] = { correct: isCorrect, chosenText: chosen.texto || "" };
        saveState();
        renderGlobalKPIs();
        renderQuestionNavGrid();

        if (apiClient) {
          apiClient.answerQuestion(q.id, isCorrect, chosen.texto || "").catch(() => {});
        } else {
          fetch("/api/questions/answer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              questionId: q.id,
              correct: isCorrect,
              chosenText: chosen.texto || ""
            })
          }).catch(() => {});
        }

        optBtns.forEach((b, i) => {
          b.disabled = true;
          b.classList.add("show-just");
          if (q._shuffledOptions[i].correta) b.classList.add("correct");
          else if (i === idx) b.classList.add("wrong");
        });

        const fb = document.getElementById("q-feedback-area");
        if (fb) {
          fb.innerHTML = `
            <div class="feedback-panel ${isCorrect ? "ok" : "err"}">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                <strong style="font-size:1rem;">${isCorrect ? "✅ Excelente! Resposta Correta!" : "❌ Resposta Incorreta — Analise as justificativas oficiais acima!"}</strong>
                ${
                  currentQuestionIndex < currentQuestionList.length - 1
                    ? `<button type="button" class="btn btn-sm" id="btn-inline-next-q">Ir para Próxima Questão ▶</button>`
                    : ""
                }
              </div>
              <p style="margin-top:8px;"><b>Síntese do Conceito Avaliado:</b> ${q.gabaritoComentado || ""}</p>
            </div>
          `;
          document.getElementById("btn-inline-next-q")?.addEventListener("click", () => {
            currentQuestionIndex++;
            renderPracticeQuestion();
          });
        }
      });
    });
  }

  // --- ABA 5: MAPAS DE DECISÃO OFICIAIS (CESGRANRIO / ANBIMA EDU) ---
  let currentCaseIdx = 0;
  let currentNodeKey = "1";
  let currentMapScore = 0;
  let currentMapHistory = [];

  function getMapasPool() {
    if (window.CPA_MAPAS_OFICIAIS && window.CPA_MAPAS_OFICIAIS.length) {
      return window.CPA_MAPAS_OFICIAIS;
    }
    return window.CPA_CASES || [];
  }

  function resetCurrentMap() {
    currentNodeKey = "1";
    currentMapScore = 0;
    currentMapHistory = [];
  }

  function initCasesDropdown() {
    const sel = document.getElementById("case-select");
    const cases = getMapasPool();
    if (!sel || !cases.length) return;
    sel.innerHTML = cases
      .map((c, idx) => {
        const isOficial = ["000140", "000158", "000314", "000344", "000147"].includes(c.codigoItem);
        const tag = isOficial ? `🏛️ [Oficial Cesgranrio ${c.codigoItem}]` : `✨ [Mapa CPA #${idx + 1}]`;
        return `<option value="${idx}">${idx + 1}. ${tag} ${c.titulo || c.topicoPD || ""} (${c.modulo || ""})</option>`;
      })
      .join("");
    sel.addEventListener("change", () => {
      currentCaseIdx = parseInt(sel.value, 10);
      resetCurrentMap();
      renderCaseView();
    });
  }

  document.getElementById("btn-reset-case")?.addEventListener("click", () => {
    resetCurrentMap();
    renderCaseView();
  });

  function renderCaseView() {
    const cases = getMapasPool();
    const sel = document.getElementById("case-select");
    if (sel && !sel.options.length) initCasesDropdown();
    const container = document.getElementById("case-stage-container");
    const scoreBadge = document.getElementById("case-score-badge");
    if (!container || !cases.length) return;

    const c = cases[currentCaseIdx] || cases[0];
    const limite = c.limite || 5;
    if (scoreBadge) scoreBadge.textContent = `Pontuação no Diálogo: ${currentMapScore} / ${limite}`;

    if (c.etapas && !Array.isArray(c.etapas)) {
      const node = c.etapas[currentNodeKey];
      const isEnd = !node || currentNodeKey === "END" || !node.opcoes || !node.opcoes.length;

      const visitedSteps = currentMapHistory.map(
        (h) => `<span class="step-node ${h.peso > 0 ? "done-a" : "done-b"}">Etapa ${h.etapa} (${h.peso > 0 ? "+1" : "0"})</span><span>→</span>`
      );
      visitedSteps.push(`<span class="step-node active">${isEnd ? "🏁 FIM" : "Etapa " + currentNodeKey}</span>`);

      const chatHtml = currentMapHistory.length
        ? `<div class="chat-stream" id="map-chat-stream">
             ${currentMapHistory
               .map(
                 (h) => `
                 <div class="chat-bubble chat-client">
                   <div style="font-size:0.74rem; color:var(--muted); font-weight:700; margin-bottom:2px;">👤 Cliente (Etapa ${h.etapa})</div>
                   "${h.falaCliente}"
                 </div>
                 <div class="chat-bubble ${h.peso > 0 ? "chat-advisor-good" : "chat-advisor-bad"}">
                   <div style="font-size:0.74rem; font-weight:700; margin-bottom:2px;">
                     🧑‍💼 Você (${h.peso > 0 ? "✅ +1 pt • Trilha A" : "⚠️ 0 pt • Trilha B"} → Etapa ${h.proximo})
                   </div>
                   "${h.resposta}"
                 </div>
               `
               )
               .join("")}
           </div>`
        : "";

      if (!isEnd) {
        if (!node._shuffled) node._shuffled = shuffle(node.opcoes || []);
        const letters = ["A", "B", "C", "D"];

        container.innerHTML = `
          <div class="card">
            <div class="card-header" style="flex-wrap:wrap;">
              <div>
                <span class="badge badge-green">Item ${c.codigoItem || c.id}</span>
                <span class="badge badge-blue" style="margin-left:6px;">${c.modulo || ""}</span>
                <strong style="font-size:1.05rem; margin-left:8px;">${c.titulo || c.topicoPD || ""}</strong>
              </div>
              <span class="badge badge-amber">Etapa Atual: ${currentNodeKey}</span>
            </div>

            <div class="node-stepper">${visitedSteps.join("")}</div>

            ${chatHtml}

            <div class="context-block" style="border-left-color:var(--primary);">
              <div style="font-size:0.78rem; text-transform:uppercase; color:var(--primary); font-weight:800; margin-bottom:4px;">
                💬 Fala Atual do Cliente (Etapa ${currentNodeKey}):
              </div>
              "${node.falaCliente || ""}"
            </div>

            <div class="enunciado-block">Selecione a resposta que melhor concilia precisão técnica e atendimento adequado:</div>

            <div class="options-list">
              ${node._shuffled
                .map(
                  (op, i) => `
                  <button type="button" class="option-btn" data-map-opt="${i}">
                    <div class="option-main">
                      <span class="opt-letter">${letters[i]}</span>
                      <span style="flex:1;">${op.texto}</span>
                    </div>
                  </button>
                `
                )
                .join("")}
            </div>
            <div id="map-step-feedback"></div>
          </div>
        `;

        const streamEl = document.getElementById("map-chat-stream");
        if (streamEl) streamEl.scrollTop = streamEl.scrollHeight;

        const btns = container.querySelectorAll("[data-map-opt]");
        btns.forEach((btn) => {
          btn.addEventListener("click", () => {
            const idx = parseInt(btn.dataset.mapOpt, 10);
            const chosen = node._shuffled[idx];
            const peso = Number(chosen.peso || 0);
            currentMapScore += peso;
            if (scoreBadge) scoreBadge.textContent = `Pontuação no Diálogo: ${currentMapScore} / ${limite}`;

            btns.forEach((b, i) => {
              b.disabled = true;
              if (Number(node._shuffled[i].peso) > 0) b.classList.add("correct");
              else if (i === idx) b.classList.add("wrong");
            });

            const fb = document.getElementById("map-step-feedback");
            if (fb) {
              fb.innerHTML = `
                <div class="feedback-panel ${peso > 0 ? "ok" : "err"}">
                  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                    <strong>${
                      peso > 0
                        ? `✅ Decisão de Peso 1 (+1 ponto)! O cliente avança pela Trilha ${chosen.proximo}.`
                        : `⚠️ Decisão de Peso 0 (0 ponto). O cliente segue pela Trilha ${chosen.proximo}.`
                    }</strong>
                    <button type="button" class="btn btn-sm" id="btn-advance-map">Avançar para Etapa ${chosen.proximo} ▶</button>
                  </div>
                </div>
              `;
              document.getElementById("btn-advance-map")?.addEventListener("click", () => {
                currentMapHistory.push({
                  etapa: currentNodeKey,
                  falaCliente: node.falaCliente,
                  resposta: chosen.texto,
                  peso: peso,
                  proximo: chosen.proximo
                });
                currentNodeKey = chosen.proximo || "END";
                renderCaseView();
              });
            }
          });
        });
        return;
      }

      // Desfecho do Mapa + 2 Questões Objetivas Acopladas
      const endMsg = (c.etapas["END"] && c.etapas["END"].falaCliente) || (node && node.falaCliente) || "[Fim do diálogo]";
      const qObjs = c.questoesObjetivas || [];

      const mapKey = c.id || c.codigoItem;
      if (mapKey) {
        const prevBest =
          state.completedCases[mapKey] && typeof state.completedCases[mapKey] === "object"
            ? state.completedCases[mapKey].bestScore || 0
            : 0;
        state.completedCases[mapKey] = {
          completed: true,
          bestScore: Math.max(prevBest, currentMapScore)
        };
        saveState();
        renderGlobalKPIs();
        fetch("/api/maps/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mapId: mapKey, score: currentMapScore })
        })
          .then((r) => (r.ok ? r.json() : null))
          .then((res) => {
            if (res && res.mapId) {
              if (res.mapId !== mapKey) delete state.completedCases[mapKey];
              state.completedCases[res.mapId] = {
                completed: true,
                bestScore: res.bestScore ?? currentMapScore
              };
              saveState();
              renderGlobalKPIs();
            }
          })
          .catch(() => {});
      }

      container.innerHTML = `
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">🏁 Diálogo Finalizado — Pontuação: ${currentMapScore} / ${limite}</h3>
            <span class="badge ${currentMapScore >= 4 ? "badge-green" : "badge-amber"}">
              ${currentMapScore >= 4 ? "Atendimento de Excelência" : "Reveja as escolhas de Peso 0"}
            </span>
          </div>
          <div class="node-stepper">${visitedSteps.join("")}</div>
          ${chatHtml}
          <div class="context-block"><b>Desfecho do Atendimento:</b> ${endMsg}</div>

          ${
            qObjs.length
              ? `<h3 style="margin:20px 0 12px; color:#10b981;">📝 Questões Objetivas Acopladas a este Mapa de Decisão:</h3>
                 ${qObjs
                   .map((qo, qIdx) => {
                     if (!qo._shuffled) qo._shuffled = shuffle(qo.alternativas || []);
                     const letters = ["A", "B", "C", "D"];
                     return `
                       <div class="card" style="margin-bottom:14px; background:var(--bg);">
                         <div class="enunciado-block">${qIdx + 1}. ${qo.enunciado}</div>
                         <div class="options-list">
                           ${qo._shuffled
                             .map(
                               (alt, aIdx) => `
                               <button type="button" class="option-btn" data-qobj="${qIdx}" data-aidx="${aIdx}">
                                 <div class="option-main">
                                   <span class="opt-letter">${letters[aIdx]}</span>
                                   <span style="flex:1;">${alt.texto}</span>
                                 </div>
                                 ${
                                   alt.justificativa
                                     ? `<div class="opt-justificativa">
                                          <strong style="color:${alt.correta ? "#10b981" : "#f87171"};">
                                            ${alt.correta ? "✅ Gabarito:" : "❌ Justificativa:"}
                                          </strong> ${alt.justificativa}
                                        </div>`
                                     : ""
                                 }
                               </button>
                             `
                             )
                             .join("")}
                         </div>
                         <div id="qobj-fb-${qIdx}"></div>
                       </div>
                     `;
                   })
                   .join("")}`
              : ""
          }

          <div style="display:flex; gap:10px; margin-top:16px;">
            <button type="button" class="btn btn-secondary" id="btn-replay-map">🔄 Refazer este Mapa</button>
            <button type="button" class="btn" id="btn-next-map">Próximo Mapa de Decisão ▶</button>
          </div>
        </div>
      `;

      container.querySelectorAll("[data-qobj]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const qIdx = parseInt(btn.dataset.qobj, 10);
          const aIdx = parseInt(btn.dataset.aidx, 10);
          const qo = qObjs[qIdx];
          const chosen = qo._shuffled[aIdx];
          const groupBtns = container.querySelectorAll(`[data-qobj="${qIdx}"]`);
          groupBtns.forEach((b, i) => {
            b.disabled = true;
            b.classList.add("show-just");
            if (qo._shuffled[i].correta) b.classList.add("correct");
            else if (i === aIdx) b.classList.add("wrong");
          });
          const fb = document.getElementById(`qobj-fb-${qIdx}`);
          if (fb) {
            fb.innerHTML = `
              <div class="feedback-panel ${chosen.correta ? "ok" : "err"}">
                <strong>${chosen.correta ? "✅ Resposta Correta!" : "❌ Resposta Incorreta."}</strong>
                <p style="margin-top:4px;">${qo.gabaritoComentado || ""}</p>
              </div>
            `;
          }
        });
      });

      document.getElementById("btn-replay-map")?.addEventListener("click", () => {
        resetCurrentMap();
        renderCaseView();
      });
      document.getElementById("btn-next-map")?.addEventListener("click", () => {
        const mId = c.id || c.codigoItem;
        if (mId) {
          state.completedCases[mId] = { completed: true, bestScore: currentMapScore };
          saveState();
          renderGlobalKPIs();
          fetch("/api/maps/complete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mapId: mId, score: currentMapScore })
          }).catch(() => {});
        }
        currentCaseIdx = (currentCaseIdx + 1) % cases.length;
        resetCurrentMap();
        if (sel) sel.value = String(currentCaseIdx);
        renderCaseView();
      });
    }
  }

  // --- ABA 6: FLASHCARDS 3D ---
  let fcPool = [];
  let fcIndex = 0;
  let fcFlipped = false;

  function buildFlashcardPool() {
    const modFilter = document.getElementById("fc-mod-filter")?.value || "all";
    let list = [];
    getModules().forEach((m) => {
      if (modFilter !== "all" && String(m.id) !== modFilter) return;
      (m.flashcards || []).forEach((f) => {
        list.push({ ...f, moduloId: m.id });
      });
    });
    fcPool = list;
    fcIndex = 0;
    fcFlipped = false;
  }

  document.getElementById("fc-mod-filter")?.addEventListener("change", () => {
    buildFlashcardPool();
    renderFlashcard();
  });
  document.getElementById("btn-shuffle-fc")?.addEventListener("click", () => {
    fcPool = shuffle(fcPool);
    fcIndex = 0;
    fcFlipped = false;
    renderFlashcard();
  });
  document.getElementById("btn-fc-flip")?.addEventListener("click", () => {
    fcFlipped = !fcFlipped;
    renderFlashcard();
  });
  document.getElementById("flashcard-card")?.addEventListener("click", () => {
    fcFlipped = !fcFlipped;
    renderFlashcard();
  });
  document.getElementById("btn-fc-prev")?.addEventListener("click", () => {
    if (fcIndex > 0) {
      fcIndex--;
      fcFlipped = false;
      renderFlashcard();
    }
  });
  document.getElementById("btn-fc-next")?.addEventListener("click", () => {
    if (fcIndex < fcPool.length - 1) {
      fcIndex++;
      fcFlipped = false;
      renderFlashcard();
    }
  });

  window.addEventListener("keydown", (e) => {
    const fcView = document.getElementById("view-flashcards");
    if (!fcView || !fcView.classList.contains("active")) return;
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.code === "Space") {
      e.preventDefault();
      fcFlipped = !fcFlipped;
      renderFlashcard();
    } else if (e.code === "ArrowRight" && fcIndex < fcPool.length - 1) {
      fcIndex++;
      fcFlipped = false;
      renderFlashcard();
    } else if (e.code === "ArrowLeft" && fcIndex > 0) {
      fcIndex--;
      fcFlipped = false;
      renderFlashcard();
    }
  });

  function renderFlashcard() {
    if (!fcPool.length) buildFlashcardPool();
    const card3d = document.getElementById("flashcard-card");
    const frontLbl = document.getElementById("fc-front-label");
    const frontTxt = document.getElementById("fc-front-text");
    const backLbl = document.getElementById("fc-back-label");
    const backTxt = document.getElementById("fc-back-text");
    const counter = document.getElementById("fc-counter");
    if (!fcPool.length || !card3d) return;

    const item = fcPool[fcIndex];
    card3d.classList.toggle("is-flipped", fcFlipped);
    if (counter) counter.textContent = `Cartão ${fcIndex + 1} de ${fcPool.length} • Módulo ${item.moduloId}`;
    if (frontLbl) frontLbl.textContent = `PERGUNTA • MÓDULO ${item.moduloId} (Clique ou Espaço para virar)`;
    if (frontTxt) frontTxt.innerHTML = item.frente;
    if (backLbl) backLbl.textContent = `RESPOSTA OFICIAL • MÓDULO ${item.moduloId}`;
    if (backTxt) backTxt.innerHTML = item.verso;
  }

  // --- ABA 7: SIMULADO REAL (50Q ou 20Q + BLOQUEIO DE NAVEGAÇÃO) ---
  let simQuestions = [];
  let simIdx = 0;
  let simAnswers = [];
  let simTimerId = null;
  let simSecondsLeft = 150 * 60;
  let simInitialSeconds = 150 * 60;

  function renderSimuladoHistory() {
    const historyEl = document.getElementById("simulado-history-card");
    if (!historyEl) return;
    const sims = state.simulations || [];
    const activeEl = document.getElementById("simulado-active");
    const isSimRunning = activeEl && activeEl.style.display === "block";

    if (isSimRunning || !sims.length) {
      historyEl.style.display = "none";
      return;
    }

    historyEl.style.display = "block";
    historyEl.innerHTML = `
      <div class="card-header">
        <h3 class="card-title" style="font-size:1.05rem;">🗄️ Histórico de Simulados Salvos (PostgreSQL: cpa-ambima)</h3>
        <span class="badge badge-blue">${sims.length} ${sims.length === 1 ? "simulado registrado" : "simulados registrados"}</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${sims
          .slice(0, 10)
          .map((s, idx) => {
            const totalQ = s.totalQuestions ?? s.total_questions ?? 50;
            const rightQ = s.correctAnswers ?? s.correct_answers ?? 0;
            const pct = s.scorePct ?? s.score_pct ?? 0;
            const passed = s.passed ?? pct >= 70;
            const durSec = s.durationSeconds ?? s.duration_seconds ?? 0;
            const durMin = Math.max(1, Math.round(durSec / 60));
            const dateStr =
              s.createdAt || s.created_at
                ? new Date(s.createdAt || s.created_at).toLocaleString("pt-BR")
                : `Tentativa #${sims.length - idx}`;
            return `
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; padding:10px 14px; background:var(--bg); border:1px solid var(--border); border-radius:10px;">
                <div>
                  <strong>Modo ${s.mode || totalQ + "Q"}</strong>
                  <span style="font-size:0.8rem; color:var(--muted); margin-left:8px;">${dateStr} • ⏱️ ${durMin} min</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-weight:700; font-size:0.9rem;">${rightQ}/${totalQ} acertos (${pct}%)</span>
                  <span class="badge ${passed ? "badge-green" : "badge-red"}">${passed ? "✅ Aprovado (≥70%)" : "⚠️ Revisar (<70%)"}</span>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function buildSimulado(totalCount) {
    const ratio = totalCount / 50;
    const m1 = shuffle((window.CPA_MODULO_1?.questoes || []).map((q) => ({ ...q, moduloId: 1 })));
    const m2 = shuffle((window.CPA_MODULO_2?.questoes || []).map((q) => ({ ...q, moduloId: 2 })));
    const m3 = shuffle((window.CPA_MODULO_3?.questoes || []).map((q) => ({ ...q, moduloId: 3 })));
    const m4 = shuffle((window.CPA_MODULO_4?.questoes || []).map((q) => ({ ...q, moduloId: 4 })));

    const c1 = Math.round(10 * ratio);
    const c2 = Math.round(20 * ratio);
    const c3 = Math.round(15 * ratio);
    const c4 = totalCount - (c1 + c2 + c3);

    const selected = [
      ...m1.slice(0, c1),
      ...m2.slice(0, c2),
      ...m3.slice(0, c3),
      ...m4.slice(0, c4)
    ];

    return shuffle(selected).map((q) => ({
      ...q,
      _opts: shuffle(q.alternativas || [])
    }));
  }

  function startSimulado(totalCount, minutes) {
    simQuestions = buildSimulado(totalCount);
    simIdx = 0;
    simAnswers = [];
    simInitialSeconds = minutes * 60;
    simSecondsLeft = minutes * 60;

    document.getElementById("simulado-intro").style.display = "none";
    document.getElementById("simulado-result").style.display = "none";
    const histCard = document.getElementById("simulado-history-card");
    if (histCard) histCard.style.display = "none";
    document.getElementById("simulado-active").style.display = "block";

    if (simTimerId) clearInterval(simTimerId);
    simTimerId = setInterval(() => {
      simSecondsLeft--;
      const h = String(Math.floor(simSecondsLeft / 3600)).padStart(2, "0");
      const m = String(Math.floor((simSecondsLeft % 3600) / 60)).padStart(2, "0");
      const s = String(simSecondsLeft % 60).padStart(2, "0");
      const tEl = document.getElementById("sim-timer");
      if (tEl) tEl.textContent = `${h}:${m}:${s}`;
      if (simSecondsLeft <= 0) finishSimulado();
    }, 1000);

    renderSimuladoStep();
  }

  document.getElementById("btn-start-simulado-50")?.addEventListener("click", () => startSimulado(50, 150));
  document.getElementById("btn-start-simulado-20")?.addEventListener("click", () => startSimulado(20, 60));
  document.getElementById("btn-finish-simulado-early")?.addEventListener("click", finishSimulado);

  function renderSimuladoStep() {
    const q = simQuestions[simIdx];
    if (!q) {
      finishSimulado();
      return;
    }

    document.getElementById("sim-q-progress").textContent = `Questão ${simIdx + 1} de ${simQuestions.length}`;
    document.getElementById("sim-q-mod").textContent = `Módulo ${q.moduloId} ${q.codigoItem ? "• Item " + q.codigoItem : ""}`;

    const area = document.getElementById("simulado-question-area");
    const letters = ["A", "B", "C", "D"];
    let selectedOptIdx = null;

    area.innerHTML = `
      <div class="context-block">${(q.contexto || "").replace(/\n/g, "<br>")}</div>
      <div class="enunciado-block">${q.enunciado || ""}</div>
      <div class="options-list" id="sim-opts">
        ${q._opts
          .map(
            (o, idx) => `
            <button type="button" class="option-btn" data-sim-opt="${idx}">
              <div class="option-main">
                <span class="opt-letter">${letters[idx]}</span>
                <span style="flex:1;">${o.texto}</span>
              </div>
            </button>
          `
          )
          .join("")}
      </div>
      <div style="margin-top:18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <span style="font-size:0.82rem; color:var(--muted);">⚠️ Regra Oficial ANBIMA: Ao confirmar e avançar, você não poderá retornar a esta questão.</span>
        <button type="button" class="btn" id="btn-confirm-sim-q" disabled>Confirmar Resposta e Avançar 🔒 ▶</button>
      </div>
    `;

    const optBtns = area.querySelectorAll("[data-sim-opt]");
    const confirmBtn = document.getElementById("btn-confirm-sim-q");

    optBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedOptIdx = parseInt(btn.dataset.simOpt, 10);
        optBtns.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        confirmBtn.disabled = false;
      });
    });

    confirmBtn.addEventListener("click", () => {
      if (selectedOptIdx === null) return;
      const chosen = q._opts[selectedOptIdx];
      const isOk = !!chosen.correta;
      state.answeredQuestions[q.id] = { correct: isOk, chosenText: chosen.texto || "" };
      simAnswers.push({
        question: q,
        chosenOpt: chosen,
        correct: isOk
      });
      saveState();
      fetch("/api/questions/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: q.id,
          correct: isOk,
          chosenText: chosen.texto || ""
        })
      }).catch(() => {});
      simIdx++;
      renderSimuladoStep();
    });
  }

  function finishSimulado() {
    if (simTimerId) clearInterval(simTimerId);
    renderGlobalKPIs();
    document.getElementById("simulado-active").style.display = "none";
    const resEl = document.getElementById("simulado-result");
    resEl.style.display = "block";

    const total = simAnswers.length || simQuestions.length;
    const hits = simAnswers.filter((a) => a.correct).length;
    const pct = total ? Math.round((hits / total) * 100) : 0;
    const passed = pct >= 70;
    const durationSeconds = Math.max(0, simInitialSeconds - simSecondsLeft);
    const modeLabel = `${simQuestions.length || total}Q`;
    const simDetails = simAnswers.map((a) => ({
      questionId: a.question.id,
      moduloId: a.question.moduloId,
      correct: a.correct
    }));

    const localSimEntry = {
      id: Date.now(),
      mode: modeLabel,
      totalQuestions: total,
      correctAnswers: hits,
      scorePct: pct,
      passed: passed,
      durationSeconds: durationSeconds,
      details: simDetails,
      createdAt: new Date().toISOString()
    };
    state.simulations = [localSimEntry, ...(state.simulations || [])];
    saveState();
    renderSimuladoHistory();

    fetch("/api/simulations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: modeLabel,
        totalQuestions: total,
        correctAnswers: hits,
        scorePct: pct,
        passed: passed,
        durationSeconds: durationSeconds,
        details: simDetails
      })
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((savedSim) => {
        if (savedSim && savedSim.id) {
          state.simulations = [
            savedSim,
            ...(state.simulations || []).filter((s) => s.id !== localSimEntry.id && s.id !== savedSim.id)
          ];
          saveState();
          renderSimuladoHistory();
        }
      })
      .catch(() => {});

    const modBreakdown = [1, 2, 3, 4].map((mId) => {
      const mAns = simAnswers.filter((a) => a.question.moduloId === mId);
      const mHits = mAns.filter((a) => a.correct).length;
      const mPct = mAns.length ? Math.round((mHits / mAns.length) * 100) : 0;
      return { mId, total: mAns.length, hits: mHits, pct: mPct };
    });

    const wrongList = simAnswers.filter((a) => !a.correct);

    resEl.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title" style="font-size:1.3rem;">
            ${passed ? "🏆 APROVADO NO SIMULADO CPA ANBIMA!" : "⚠️ Aproveitamento Abaixo de 70% — Veja o Diagnóstico"}
          </h2>
          <span class="badge ${passed ? "badge-green" : "badge-red"}" style="font-size:0.95rem; padding:6px 14px;">
            ${hits} / ${total} acertos (${pct}%)
          </span>
        </div>
        <div class="grid-4" style="margin-top:14px;">
          ${modBreakdown
            .map(
              (mb) => `
              <div class="card" style="padding:12px; background:var(--bg);">
                <div style="font-weight:700; font-size:0.88rem;">Módulo ${mb.mId}</div>
                <div style="font-size:1.4rem; font-weight:800; color:${mb.pct >= 70 ? "#10b981" : "#fbbf24"};">${mb.pct}%</div>
                <div style="font-size:0.78rem; color:var(--muted);">${mb.hits}/${mb.total} acertos</div>
              </div>
            `
            )
            .join("")}
        </div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button type="button" class="btn" id="btn-restart-simulado">🔄 Novo Simulado</button>
          ${
            wrongList.length
              ? `<button type="button" class="btn btn-secondary" id="btn-goto-wrong-bank">❌ Praticar Caderno de Erros</button>`
              : ""
          }
        </div>
      </div>

      ${
        wrongList.length
          ? `<h3 style="margin:22px 0 12px;">🔍 Correção Comentada das Questões Erradas (${wrongList.length}):</h3>` +
            wrongList
              .map((item, idx) => {
                const rightOpt = item.question._opts.find((o) => o.correta) || {};
                return `
                  <div class="card" style="margin-bottom:14px; border-left:4px solid var(--danger);">
                    <div class="card-header">
                      <strong>Questão Revisão #${idx + 1} (Módulo ${item.question.moduloId} ${item.question.codigoItem ? "• Item " + item.question.codigoItem : ""})</strong>
                      <span class="badge badge-amber">PD ${item.question.codigoPD || ""}</span>
                    </div>
                    <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:10px;">${item.question.enunciado}</p>
                    <p style="font-size:0.88rem; color:#f87171;">❌ <b>Sua resposta:</b> ${item.chosenOpt.texto}</p>
                    ${item.chosenOpt.justificativa ? `<p style="font-size:0.82rem; color:var(--muted); margin:4px 0 8px 20px;">↳ <i>Por que está incorreta:</i> ${item.chosenOpt.justificativa}</p>` : ""}
                    <p style="font-size:0.88rem; color:#10b981; margin-top:6px;">✅ <b>Alternativa Correta:</b> ${rightOpt.texto || ""}</p>
                    <div class="feedback-panel ok" style="margin-top:10px;">
                      <strong>Gabarito Oficial Comentado:</strong> ${item.question.gabaritoComentado || rightOpt.justificativa || ""}
                    </div>
                  </div>
                `;
              })
              .join("")
          : ""
      }
    `;

    document.getElementById("btn-restart-simulado")?.addEventListener("click", () => {
      document.getElementById("simulado-result").style.display = "none";
      document.getElementById("simulado-intro").style.display = "block";
      renderSimuladoHistory();
    });
    document.getElementById("btn-goto-wrong-bank")?.addEventListener("click", () => {
      const originSel = document.getElementById("q-origin-filter");
      if (originSel) originSel.value = "wrong";
      buildQuestionPool();
      switchTab("questoes");
    });
  }

  // --- INICIALIZAÇÃO & SINCRONIZAÇÃO COM POSTGRESQL (cpa-ambima) ---
  window.addEventListener("DOMContentLoaded", () => {
    if (typeof window.createHP12CWidget === "function") {
      window.createHP12CWidget(document.getElementById("sim-hp12c-mount"));
      window.createHP12CWidget(document.getElementById("hp12c-floating-mount"));
    }

    document.getElementById("btn-toggle-hp12c-modal")?.addEventListener("click", () => {
      document.getElementById("hp12c-floating-modal")?.classList.toggle("open");
    });

    document.getElementById("hp12c-floating-modal")?.addEventListener("click", (e) => {
      if (e.target && e.target.id === "hp12c-floating-modal") {
        e.target.classList.remove("open");
      }
    });

    renderGlobalKPIs();
    renderDashboard();
    renderStudyView();
    renderMateriaisView();
    buildQuestionPool();
    renderPracticeQuestion();
    initCasesDropdown();
    renderCaseView();
    buildFlashcardPool();
    renderFlashcard();
    renderSimuladoHistory();

    // 1. Bootstrap inicial de progresso salvo no PostgreSQL
    fetch("/api/bootstrap")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("Bootstrap failed"))))
      .then((data) => {
        const badge = document.getElementById("db-status-badge");
        if (badge) {
          badge.textContent = "🟢 PostgreSQL: cpa-ambima (Ativo)";
        }
        const sideDb = document.getElementById("sidebar-db-status");
        if (sideDb) {
          sideDb.innerHTML = `<span>🟢</span><span>PostgreSQL: cpa-ambima (Online)</span>`;
        }
        if (data.masteredTopics) state.masteredTopics = data.masteredTopics;
        if (data.answeredQuestions) state.answeredQuestions = data.answeredQuestions;
        if (data.favoriteQuestions) state.favoriteQuestions = data.favoriteQuestions;
        if (data.completedCases) state.completedCases = data.completedCases;
        if (data.sprintDone) state.sprintDone = data.sprintDone;
        if (Array.isArray(data.simulations)) state.simulations = data.simulations;
        if (storeModule && storeModule.serverStateStore) {
          storeModule.serverStateStore.hydrateFromBootstrap(data);
        }
        saveState();

        renderGlobalKPIs();
        renderDashboard();
        renderStudyView();
        buildQuestionPool();
        renderPracticeQuestion();
        renderCaseView();
        renderFlashcard();
        renderSimuladoHistory();
      })
      .catch(() => {});

    // 2. Diagnóstico Analítico Executivo (/api/analytics)
    fetch("/api/analytics")
      .then((res) => (res.ok ? res.json() : null))
      .then((analytics) => {
        if (analytics) {
          analyticsData = analytics;
          if (storeModule && storeModule.serverStateStore) {
            storeModule.serverStateStore.setAnalytics(analytics);
          }
          renderGlobalKPIs();
          renderDashboard();
        }
      })
      .catch(() => {});

    // 3. Apostilas Completas Markdown (/api/study-materials)
    fetch("/api/study-materials")
      .then((res) => (res.ok ? res.json() : null))
      .then((materials) => {
        if (materials) {
          studyMaterialsData = materials;
          if (storeModule && storeModule.serverStateStore) {
            storeModule.serverStateStore.setStudyMaterials(materials);
          }
          renderMateriaisView();
          if (activeStudySubTab === "apostila") renderStudyView();
        }
      })
      .catch(() => {});
  });
})();
