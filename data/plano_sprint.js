/**
 * PLANO SPRINT INTENSIVO CPA ANBIMA (DOMINGO NOITE A TERÇA-FEIRA)
 * Microagente Estrategista Pedagógico de Aprovação Intensiva
 */
window.CPA_SPRINT = {
  regrasProva: {
    exame: "CPA - Certificação Profissional ANBIMA (Nova Arquitetura)",
    totalQuestoes: 50,
    questoesMultiplaEscolha: 40,
    questoesInterativas: 10,
    formatoInterativas: "Árvore de Decisão e Cases Sequenciais de Clientes",
    duracaoMinutos: 150,
    duracaoFormatada: "2h30 (150 minutos)",
    tempoMedioPorQuestao: "3 minutos por questão",
    minimoAprovacaoPercentual: 70,
    minimoAprovacaoAcertos: 35,
    metaSprintAcertos: 41,
    metaSprintPercentual: 82,
    regraCriticaNavegacao: {
      titulo: "BLOQUEIO DEFINITIVO DE NAVEGAÇÃO",
      descricao: "Na prova eletrônica da CPA, questões visualizadas (respondidas ou deixadas em branco) ficam bloqueadas definitivamente ao avançar. Não é permitido retornar para revisar ou responder questões anteriores.",
      taticaObrigatoria: [
        "1. Ler PRIMEIRO o comando final (última frase) antes do texto contextualizado (15s).",
        "2. Escaneamento cirúrgico: identificar Prazo, Tipo de Cliente (PF vs PJ) e Objetivo/Perfil (45s).",
        "3. Eliminação Binária: descartar imediatamente as 2 alternativas absurdas (45s).",
        "4. Confrontar as 2 finalistas e NUNCA avançar sem marcar uma resposta (máx. 3 min por questão)."
      ]
    },
    pesosModulos: [
      {
        modulo: "Módulo 2",
        nome: "Produtos do Mercado Financeiro",
        pesoPercentual: 40,
        questoesEstimadas: 20,
        metaAcertos: 17,
        prioridade: "CRÍTICA (Base Pareto #1)"
      },
      {
        modulo: "Módulo 3",
        nome: "Relacionamento com o Cliente, Finanças Pessoais, Ética e Ilícitos",
        pesoPercentual: 30,
        questoesEstimadas: 15,
        metaAcertos: 13,
        prioridade: "CRÍTICA (Base Pareto #2)"
      },
      {
        modulo: "Módulo 1",
        nome: "Estrutura e Dinâmica do SFN, Economia e Matemática Financeira",
        pesoPercentual: 20,
        questoesEstimadas: 10,
        metaAcertos: 7,
        prioridade: "ALTA (Blindagem Técnica)"
      },
      {
        modulo: "Módulo 4",
        nome: "Inovação: ESG, DeFi, Open Finance e IA",
        pesoPercentual: 10,
        questoesEstimadas: 5,
        metaAcertos: 4,
        prioridade: "ALTA EFICIÊNCIA (Pontos Rápidos)"
      }
    ],
    estrategiaPareto: {
      titulo: "Estratégia Pareto 70/30 (Núcleo M2 + M3 Primeiro)",
      resumo: "Dominar primeiro o Módulo 2 (40%) e o Módulo 3 (30%), que juntos somam 70% da prova (35 questões) e concentram quase todas as 10 questões interativas de Árvore de Decisão. Em seguida, usar o Módulo 4 (10%) e o Módulo 1 (20%) para blindar a aprovação com folga acima de 40 acertos."
    }
  },

  blocosEstudo: [
    {
      id: "dom-noite-1",
      dia: "Domingo Noite",
      horario: "21h45 - 22h35",
      titulo: "Matriz Tributária (IR/IOF) e Regras de Cobertura do FGC",
      moduloFoco: "Módulo 2",
      pesoFoco: "40%",
      tarefas: [
        "Memorizar a Tabela Regressiva de IR Renda Fixa (22,5% até 180d; 20% 181-360d; 17,5% 361-720d; 15% >720d) e a precedência do IOF regressivo (1 a 29 dias).",
        "Dominar a lista de produtos ISENTOS de IR para Pessoa Física: Poupança, LCI, LCA, LCD, CRI, CRA e Debêntures Incentivadas (Lei 12.431) — atenção: PJ paga IR!",
        "Fixar as regras do FGC: R$ 250 mil por CPF/CNPJ por conglomerado, teto global de R$ 1 milhão a cada 4 anos, e divisão do limite em contas conjuntas."
      ],
      metaQuestoes: 10
    },
    {
      id: "dom-noite-2",
      dia: "Domingo Noite",
      horario: "22h45 - 23h35",
      titulo: "Títulos Públicos Federais (Tesouro Direto) e Crédito Privado Bancário/Corporativo",
      moduloFoco: "Módulo 2",
      pesoFoco: "40%",
      tarefas: [
        "Diferenciar Tesouro Selic (LFT - pós-fixado, baixa volatilidade, Reserva de Emergência), Tesouro Prefixado (LTN/NTN-F) e Tesouro IPCA+ (NTN-B Principal vs NTN-B com cupom).",
        "Comparar CDB e RDB (com FGC) vs Letra Financeira (prazo mín. 24 meses, sem FGC) vs Debêntures, CRI, CRA e Notas Comerciais (sem FGC).",
        "Identificar quando recomendar títulos indexados ao IPCA (proteção de poder de compra no longo prazo) vs CDI/Selic (liquidez e conservação de capital)."
      ],
      metaQuestoes: 10
    },
    {
      id: "dom-noite-3",
      dia: "Domingo Noite",
      horario: "23h40 - 00h15",
      titulo: "Revisão Flash de Erros e Consolidação Noturna",
      moduloFoco: "Módulo 2",
      pesoFoco: "40%",
      tarefas: [
        "Revisar os comentários das questões erradas nos blocos D1 e D2.",
        "Ler o cartão de alíquotas e garantias antes de dormir para consolidação da memória de longo prazo."
      ],
      metaQuestoes: 5
    },
    {
      id: "seg-manha-1",
      dia: "Segunda Manhã",
      horario: "08h00 - 08h50",
      titulo: "Fundos de Investimento sob a Resolução CVM 175",
      moduloFoco: "Módulo 2",
      pesoFoco: "40%",
      tarefas: [
        "Dominar a estrutura CVM 175: Fundo -> Classes de Cotas (patrimônio segregado) -> Subclasses (diferenciadas por público-alvo, prazos e taxas).",
        "Distinguir os Prestadores de Serviços Essenciais (Administrador Fiduciário + Gestor de Recursos) e a regra de Responsabilidade Limitada do cotista.",
        "Dominar a tributação de Fundos: Come-Cotas em Maio e Novembro (15% Longo Prazo / 20% Curto Prazo) vs Fundos de Ações (mín. 67% em ações, 15% só no resgate, sem come-cotas e sem IOF)."
      ],
      metaQuestoes: 12
    },
    {
      id: "seg-manha-2",
      dia: "Segunda Manhã",
      horario: "09h00 - 09h50",
      titulo: "Previdência Complementar Aberta: PGBL vs VGBL e Tabelas de IR",
      moduloFoco: "Módulo 2",
      pesoFoco: "40%",
      tarefas: [
        "Aplicar a árvore de decisão PGBL (Declaração Completa + contribui para INSS/RPPS + dedução até 12% da renda bruta tributável; IR sobre o TOTAL) vs VGBL (Simplificada ou excedente a 12%; IR apenas sobre RENDIMENTOS).",
        "Comparar Tabela Regressiva (35% até 10% após 10 anos, tributação definitiva na fonte) vs Tabela Progressiva (15% na fonte no resgate com ajuste até 27,5% na DAA).",
        "Fixar a regra da Lei 14.803/2024: o participante pode escolher entre o regime progressivo e o regressivo até o momento do primeiro resgate ou obtenção do benefício."
      ],
      metaQuestoes: 12
    },
    {
      id: "seg-manha-3",
      dia: "Segunda Manhã",
      horario: "10h00 - 10h50",
      titulo: "Renda Variável (Ações, FIIs, ETFs, BDRs) e Derivativos",
      moduloFoco: "Módulo 2",
      pesoFoco: "40%",
      tarefas: [
        "Comparar Ações ON (direito a voto, Tag Along mín. 80%) vs PN (prioridade em dividendos) e regras de IR: isenção PF em ações à vista para vendas mensais até R$ 20 mil no Swing Trade (acima: 15%); Day Trade = 20% sem isenção.",
        "Atenção às pegadinhas: ETFs de Ações e BDRs NÃO possuem isenção de R$ 20 mil (15% swing / 20% day trade); FIIs têm dividendos isentos para PF, mas ganho de capital na venda da cota paga 20%.",
        "Diferenciar operações nos Derivativos (Termo, Futuro com ajuste diário, Swap e Opções Call/Put para Titular vs Lançador) e finalidades (Hedge, Especulação e Arbitragem)."
      ],
      metaQuestoes: 12
    },
    {
      id: "seg-manha-4",
      dia: "Segunda Manhã",
      horario: "11h00 - 12h15",
      titulo: "Bateria Integrada Módulo 2 (Fechamento dos 40% da Prova)",
      moduloFoco: "Módulo 2",
      pesoFoco: "40%",
      tarefas: [
        "Resolver bateria cronometrada de 20 questões mistas de Produtos de Investimento sem consulta.",
        "Mapear divergências entre perfil do cliente, liquidez, tributação e cobertura do FGC."
      ],
      metaQuestoes: 20
    },
    {
      id: "seg-tarde-1",
      dia: "Segunda Tarde",
      horario: "13h30 - 14h20",
      titulo: "Suitability (API), Relacionamento e Finanças Comportamentais",
      moduloFoco: "Módulo 3",
      pesoFoco: "30%",
      tarefas: [
        "Dominar as regras de Suitability (Resolução CVM 30 / Código ANBIMA): validade do API (24 meses), vedação de recomendação sem perfil e procedimento para aplicação desenquadrada por iniciativa do cliente.",
        "Diagnosticar imediatamente os Vieses Comportamentais nos enunciados: Ancoragem, Aversão à Perda (efeito disposição), Representatividade, Disponibilidade, Excesso de Confiança, Status Quo e Enquadramento (Framing).",
        "Praticar 3 questões interativas (Árvore de Decisão) de diagnóstico comportamental no atendimento."
      ],
      metaQuestoes: 15
    },
    {
      id: "seg-tarde-2",
      dia: "Segunda Tarde",
      horario: "14h30 - 15h20",
      titulo: "Finanças Pessoais, Orçamento Familiar, Dívidas e Reserva de Emergência",
      moduloFoco: "Módulo 3",
      pesoFoco: "30%",
      tarefas: [
        "Calcular Patrimônio Líquido Pessoal (Ativos - Passivos) e classificar Receitas e Despesas no Fluxo de Caixa Familiar.",
        "Aplicar a hierarquia financeira da ANBIMA: 1º Quitar/trocar dívidas de alto CET (cartão/cheque especial); 2º Constituir Reserva de Emergência (3 a 12 meses de despesas em liquidez diária e baixo risco de mercado); 3º Investir para objetivos.",
        "Resolver 3 Árvores de Decisão sobre reestruturação financeira familiar."
      ],
      metaQuestoes: 13
    },
    {
      id: "seg-tarde-3",
      dia: "Segunda Tarde",
      horario: "15h30 - 16h20",
      titulo: "Ética, PLD/FTP (Lavagem de Dinheiro) e Ilícitos CVM 62",
      moduloFoco: "Módulo 3",
      pesoFoco: "30%",
      tarefas: [
        "Dominar as 3 fases da Lavagem de Dinheiro (COI: Colocação, Ocultação e Integração), pena de 3 a 10 anos de reclusão + multa, e comunicação ao COAF em até 24h (dia útil seguinte) sem ciência ao cliente.",
        "Diferenciar os ilícitos de mercado da Resolução CVM 62: Insider Trading (informação relevante não divulgada), Front Running (passar ordem própria na frente da ordem do cliente) e Manipulação de Preços / Spoofing.",
        "Fixar prazos de guarda de documentos cadastrais e registros de operações (10 anos BCB / 5 anos CVM)."
      ],
      metaQuestoes: 12
    },
    {
      id: "seg-tarde-4",
      dia: "Segunda Tarde",
      horario: "16h30 - 17h20",
      titulo: "Inovação Completa: ESG, Open Finance, DeFi, Drex e IA",
      moduloFoco: "Módulo 4",
      pesoFoco: "10%",
      tarefas: [
        "Dominar as dimensões ESG (Ambiental, Social e Governança), o conceito de Greenwashing e a diferença entre Fundos IS (Investimento Sustentável) e fundos que integram riscos ASG.",
        "Fixar os princípios do Open Finance: titularidade dos dados é do cliente, compartilhamento exige consentimento prévio, expresso e revogável a qualquer momento.",
        "Compreender Blockchain, Contratos Inteligentes (Smart Contracts), DeFi, Tokenização, Criptoativos, Drex (Real Digital emitido e regulado pelo BCB) e riscos éticos de IA Generativa (alucinação e viés)."
      ],
      metaQuestoes: 12
    },
    {
      id: "seg-tarde-5",
      dia: "Segunda Tarde",
      horario: "17h30 - 18h20",
      titulo: "Laboratório das 10 Questões Interativas (Árvore de Decisão / Cases)",
      moduloFoco: "Módulo 2 + Módulo 3",
      pesoFoco: "70%",
      tarefas: [
        "Executar 5 casos completos de Árvore de Decisão integrando Perfil do Cliente + Finanças Pessoais + Alocação de Produtos + Tributação.",
        "Treinar a tomada de decisão sequencial em menos de 3 minutos por case sem possibilidade de retorno."
      ],
      metaQuestoes: 10
    },
    {
      id: "seg-noite-1",
      dia: "Segunda Noite",
      horario: "19h30 - 20h20",
      titulo: "Estrutura do SFN (CMN, BCB, CVM, SUSEP, PREVIC) e Economia",
      moduloFoco: "Módulo 1",
      pesoFoco: "20%",
      tarefas: [
        "Separar órgãos Normativos (CMN, CNSP, CNPC — começam com 'C' de Conselho e não executam) dos Supervisores (BCB, CVM, SUSEP, PREVIC).",
        "Dominar Política Monetária (COPOM, Selic Meta vs Selic Over, Compulsório, Redesconto, Open Market) e Indicadores (PIB = C + I + G + NX, IPCA oficial do IBGE vs IGP-M da FGV, Taxa DI, TR e PTAX)."
      ],
      metaQuestoes: 12
    },
    {
      id: "seg-noite-2",
      dia: "Segunda Noite",
      horario: "20h30 - 21h20",
      titulo: "Matemática Financeira Conceitual, Taxa Real (Fisher) e Riscos",
      moduloFoco: "Módulo 1",
      pesoFoco: "20%",
      tarefas: [
        "Dominar a Fórmula de Fisher para Taxa Real: [(1 + Nominal) / (1 + Inflação)] - 1 (a Taxa Real é sempre ligeiramente menor que Nominal - Inflação).",
        "Compreender Juros Simples vs Compostos, Valor Presente/Futuro e a relação inversa entre Taxa de Juros de Mercado e Preço Unitário (PU) de títulos prefixados (Marcação a Mercado e Duration).",
        "Distinguir Risco de Mercado (volatilidade/preço), Risco de Crédito (inadimplência do emissor) e Risco de Liquidez (dificuldade de converter em caixa pelo preço justo)."
      ],
      metaQuestoes: 10
    },
    {
      id: "seg-noite-3",
      dia: "Segunda Noite",
      horario: "21h30 - 23h15",
      titulo: "Simulado Oficial de Guerra (50 Questões no Modo Bloqueio de Navegação)",
      moduloFoco: "Todos (M1 a M4)",
      pesoFoco: "100%",
      tarefas: [
        "Realizar 1 Simulado Completo de 50 questões (40 múltipla escolha + 10 interativas) em 120 minutos sem voltar a nenhuma questão anterior.",
        "Corrigir imediatamente cada erro e anotar as 5 regras que mais geraram dúvida para revisão na manhã de terça."
      ],
      metaQuestoes: 50
    },
    {
      id: "ter-preprova-1",
      dia: "Terça Pré-Prova",
      horario: "07h30 - 08h30",
      titulo: "Revisão Cirúrgica de Erros do Simulado + Folha de 15 Minutos",
      moduloFoco: "Todos (Foco Pareto M2 + M3)",
      pesoFoco: "100%",
      tarefas: [
        "Reler apenas as questões erradas no Simulado Oficial de segunda à noite.",
        "Passar os olhos na Folha de Revisão de 15 Minutos (Tabela de IR, Limites do FGC, CVM 175, CVM 62 e Órgãos do SFN) antes de entrar no Centro de Testes.",
        "Ativar o Protocolo de Navegação Bloqueada: ler a última frase primeiro, eliminar 2 absurdas e nunca avançar em branco."
      ],
      metaQuestoes: 10
    }
  ],

  colaDeProva: [
    {
      id: "cola-ir-rf",
      categoria: "Tributação",
      titulo: "Tabela Regressiva de IR (Renda Fixa e Fundos LP)",
      resumo: "Até 180 dias: 22,5% | 181 a 360 dias: 20,0% | 361 a 720 dias: 17,5% | Acima de 720 dias: 15,0%",
      pegadinhaFatal: "Em Fundos de Curto Prazo (carteira <= 365 dias), a menor alíquota é 20% (acima de 180 dias) e o come-cotas é de 20%! O IOF regressivo (1 a 29 dias) incide ANTES do IR sobre o rendimento."
    },
    {
      id: "cola-isentos-pf",
      categoria: "Tributação",
      titulo: "Ativos Isentos de IR para Pessoa Física (PF)",
      resumo: "Poupança, LCI, LCA, LCD, CRI, CRA, Debêntures Incentivadas (Lei 12.431), Dividendos de Ações e Rendimentos mensais de FIIs.",
      pegadinhaFatal: "Pessoa Jurídica (PJ) NÃO tem isenção em LCI, LCA, CRI, CRA ou Debêntures Incentivadas (na Debênture Incentivada, PJ paga 15% exclusivo na fonte)."
    },
    {
      id: "cola-fgc",
      categoria: "Garantias",
      titulo: "FGC — Limites, Cobertura e Conta Conjunta",
      resumo: "Até R$ 250 mil por CPF/CNPJ por instituição/conglomerado, com teto global de R$ 1 milhão renovável a cada 4 anos. Cobre: Depósitos à vista, Poupança, CDB, RDB, LCI, LCA, LCD, LC e LH.",
      pegadinhaFatal: "NÃO têm FGC: Fundos de Investimento, Letra Financeira (LF), Debêntures, CRI, CRA, Tesouro Direto (risco soberano) e Previdência. Em CONTA CONJUNTA, o limite de R$ 250 mil é por conta, dividido entre os titulares!"
    },
    {
      id: "cola-cvm175",
      categoria: "Fundos (CVM 175)",
      titulo: "Resolução CVM 175 — Estrutura e Come-Cotas",
      resumo: "Estrutura: Fundo -> Classes (patrimônio segregado por classe) -> Subclasses (diferem por taxas, prazos e público-alvo). Prestadores Essenciais: Administrador Fiduciário + Gestor de Recursos.",
      pegadinhaFatal: "A responsabilidade do cotista pode ser LIMITADA ao valor de suas cotas (sem aportar dinheiro extra em PL negativo). Come-cotas ocorre no último dia útil de MAIO e NOVEMBRO (15% LP / 20% CP). Fundo de Ações (FIA) NÃO tem come-cotas nem IOF (alíquota única de 15% no resgate)."
    },
    {
      id: "cola-previdencia",
      categoria: "Previdência",
      titulo: "PGBL vs VGBL e Regimes Progressivo vs Regressivo",
      resumo: "PGBL: Declaração Completa + contribuinte do INSS/RPPS + dedução até 12% da renda bruta tributável (IR incide sobre o TOTAL resgatado). VGBL: Declaração Simplificada ou acima de 12% (IR incide só sobre os RENDIMENTOS).",
      pegadinhaFatal: "Tabela Regressiva: começa em 35% (até 2 anos) e cai 5% a cada 2 anos até chegar a 10% (acima de 10 anos). Pela Lei 14.803/2024, a escolha entre Progressiva e Regressiva pode ser feita até o momento do primeiro resgate ou benefício!"
    },
    {
      id: "cola-rv-ir",
      categoria: "Renda Variável",
      titulo: "Tributação em Ações, ETFs, BDRs e FIIs",
      resumo: "Ações à vista (PF): vendas no mês até R$ 20.000 em Swing Trade são ISENTAS de IR; acima de R$ 20 mil paga 15%. Day Trade em ações paga 20% (sem isenção).",
      pegadinhaFatal: "ETFs de Renda Variável e BDRs NÃO têm isenção de R$ 20 mil (pagam 15% no swing trade e 20% no day trade). Em FIIs, os dividendos são isentos para PF, mas o lucro na venda da cota paga 20% de IR!"
    },
    {
      id: "cola-fisher",
      categoria: "Matemática Financeira",
      titulo: "Taxa Real de Juros (Fórmula de Fisher) e Marcação a Mercado",
      resumo: "Taxa Real = [(1 + Taxa Nominal) / (1 + Inflação)] - 1. Regra de Ouro: A Taxa Real é SEMPRE um pouco MENOR que a conta simples (Nominal - Inflação).",
      pegadinhaFatal: "Na Marcação a Mercado de títulos prefixados (LTN/NTN-F) e IPCA+ (NTN-B): quando a taxa de juros de mercado SOBE, o Preço Unitário (PU) do título CAI. Quanto maior a Duration, maior a queda/oscilação."
    },
    {
      id: "cola-comportamental",
      categoria: "Módulo 3 (Comportamental)",
      titulo: "Gatilhos de Finanças Comportamentais na Prova",
      resumo: "Ancoragem = preso a um preço passado/cotação antiga. Aversão à Perda = vende rápido o que dá lucro e segura o que dá prejuízo para 'não realizar a perda'. Disponibilidade = decide pelo noticiário recente/acidente aéreo. Representatividade = julga que rentabilidade passada recente vai se repetir.",
      pegadinhaFatal: "Não confunda Disponibilidade (lembrança fácil na memória por mídia/evento recente) com Representatividade (estereótipo ou achar que o fundo campeão do ano passado continuará sendo o melhor)."
    },
    {
      id: "cola-pld-ilicitos",
      categoria: "Ética, PLD e CVM 62",
      titulo: "Lavagem de Dinheiro (COI) e Ilícitos do Mercado (CVM 62)",
      resumo: "Fases PLD: 1. Colocação (depósitos/entrada no SFN) -> 2. Ocultação (camadas/transferências para disfarçar origem) -> 3. Integração (volta com aparência lícita). Pena: 3 a 10 anos de reclusão + multa. Comunicar ao COAF em 24h (dia útil seguinte).",
      pegadinhaFatal: "Insider Trading = usar informação relevante NÃO pública. Front Running = operador executa ordem própria ANTES da ordem grande do cliente. Spoofing = lançar ordens artificiais e cancelar antes da execução para manipular preço."
    },
    {
      id: "cola-sfn-inovacao",
      categoria: "SFN e Inovação (M1 + M4)",
      titulo: "Órgãos do SFN, ESG, Open Finance e Drex",
      resumo: "Conselhos (CMN, CNSP, CNPC) apenas NORMATIZAM. Supervisores (BCB, CVM, SUSEP, PREVIC) fiscalizam e executam. Open Finance exige consentimento expresso e revogável do cliente.",
      pegadinhaFatal: "O Drex (Real Digital) é uma CBDC emitida e regulada pelo Banco Central na plataforma de registros distribuídos (DLT permissionada) — NÃO é uma criptomoeda descentralizada como o Bitcoin! Fundo IS (Investimento Sustentável) tem sustentabilidade como objetivo central; se apenas considera riscos ASG na análise, não pode usar o sufixo IS."
    }
  ]
};
