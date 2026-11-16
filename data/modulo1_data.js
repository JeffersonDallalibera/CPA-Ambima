window.CPA_MODULO_1 = {
  "id": 1,
  "titulo": "Estrutura e Dinâmica do Sistema Financeiro Nacional",
  "peso": "20%",
  "questoesProva": 10,
  "resumoExecutivo": "Aborda a arquitetura do Sistema Financeiro Nacional (órgãos normativos, supervisores e operadores), a transmissão das Políticas Fiscal, Monetária e Cambial sobre os juros, a inflação e a marcação a mercado dos títulos, os fundamentos de Matemática Financeira (Fisher, VPL, TIR, Duration, SAC e Price) e a regulação e infraestrutura de mercado (IMFs, Basileia, CVM 30 e Código ANBIMA).",
  "topicos": [
    {
      "codigo": "1.1.1 e 1.1.2",
      "titulo": "Arquitetura do SFN: Órgãos Normativos vs. Entidades Supervisoras",
      "prioridade": "Alta",
      "explicacao": "O Sistema Financeiro Nacional (SFN) divide-se em três degraus: <b>Normativos</b> (criam diretrizes gerais e nunca executam), <b>Supervisores</b> (fiscalizam, autorizam e punem) e <b>Operadores</b> (intermediam recursos na ponta).<ul><li><b>Moeda, Crédito, Capitais e Câmbio:</b> Normatizado pelo <b>CMN</b> (Ministro da Fazenda [Presidente], Ministro do Planejamento e Orçamento e Presidente do Bacen) e supervisionado pelo <b>Bacen</b> (bancos, crédito, câmbio, SPB/PIX) e pela <b>CVM</b> (valores mobiliários: ações, debêntures, fundos, derivativos).</li><li><b>Seguros, Capitalização e Previdência Aberta (EAPC - PGBL/VGBL):</b> Normatizado pelo <b>CNSP</b> e supervisionado pela <b>SUSEP</b>.</li><li><b>Previdência Complementar Fechada (EFPC - Fundos de Pensão):</b> Normatizado pelo <b>CNPC</b> e supervisionado pela <b>PREVIC</b>.</li></ul>",
      "gatilhosProva": [
        "Começou com 'Conselho' (CMN, CNSP, CNPC) -> Órgão 100% Normativo (define metas e diretrizes, NÃO fiscaliza e NÃO executa).",
        "Começou com 'Banco Central', 'Comissão' (CVM) ou 'Superintendência' (SUSEP, PREVIC) -> Entidade Supervisora (braço executivo e fiscalizador).",
        "Meta de Inflação: o CMN DEFINE a meta; o Bacen (via Copom) EXECUTA a política monetária para cumpri-la."
      ],
      "pegadinhas": [
        "Afirmar que o CMN fiscaliza bancos ou aplica penalidades (quem faz isso é o Bacen).",
        "Confundir a supervisão de Consórcios: Administradoras de Consórcio são fiscalizadas pelo BACEN, e não pela SUSEP.",
        "Trocar SUSEP (fiscaliza previdência aberta - EAPC, com fins lucrativos) por PREVIC (fiscaliza fundos de pensão - EFPC, sem fins lucrativos)."
      ]
    },
    {
      "codigo": "1.1.3 e 1.1.4",
      "titulo": "Operadores do SFN: Bancos, Cooperativas vs. Banco Cooperativo, EAPC/EFPC e FGC",
      "prioridade": "Alta",
      "explicacao": "Os operadores atuam diretamente com o público ou dão suporte operacional:<ul><li><b>Cooperativa de Crédito Singular vs. Banco Cooperativo (Questão 1 Oficial):</b> A <b>cooperativa singular</b> atende diretamente o cooperado na ponta (capta depósitos, concede crédito, oferece cartões e PIX). Já o <b>banco cooperativo</b> funciona como a 'espinha dorsal' do sistema, provendo infraestrutura de liquidez, compensação de operações e acesso em escala aos mercados financeiros.</li><li><b>Bancos Comerciais vs. Investimento vs. Múltiplos:</b> Comerciais captam depósitos à vista (conta-corrente) e focam no curto/médio prazo. Bancos de Investimento focam no médio/longo prazo, <i>underwriting</i> (IPO/debêntures) e NÃO possuem conta-corrente. Bancos Múltiplos têm CNPJ único e ao menos 2 carteiras (obrigatoriamente Comercial ou de Investimento).</li><li><b>Fintechs (SCD e SEP) e IPs:</b> A <b>SCD</b> empresta exclusivamente com capital próprio em plataforma digital; a <b>SEP</b> faz empréstimo <i>peer-to-peer</i> (P2P, limite de R$ 15 mil por credor não qualificado por devedor). As <b>Instituições de Pagamento (IPs)</b> gerem contas de pagamento e cartões, mas não podem conceder empréstimos com recursos próprios.</li><li><b>FGC e FGCCoop:</b> Garantem até <b>R$ 250 mil por CPF/CNPJ</b> por instituição/conglomerado (com teto global de R$ 1 milhão a cada 4 anos no FGC) para depósito à vista, poupança, CDB, RDB/RDC, LCI, LCA, LCD, LC e LH. Fundos, debêntures e CRI/CRA NÃO têm FGC.</li></ul>",
      "gatilhosProva": [
        "Falou em 'interagir na ponta com o cooperado' vs. 'espinha dorsal de liquidez e acesso a mercados' -> Cooperativa Singular vs. Banco Cooperativo.",
        "Falou em PGBL oferecido por instituição aberta (EAPC) -> Vantajoso para quem tem renda tributável, contribui ao INSS/RPPS e declara IR no modelo completo (abatimento de até 12% da renda bruta tributável anual, tributando o total no resgate - Questão 2 Oficial)."
      ],
      "pegadinhas": [
        "Dizer que o Banco Cooperativo atende pessoas físicas na ponta enquanto a cooperativa singular atende apenas pessoas jurídicas.",
        "Afirmar que Instituições de Pagamento (IPs) ou Bancos de Investimento podem captar depósitos à vista tradicionais.",
        "Incluir Fundos de Investimento ou Debêntures na cobertura do FGC."
      ]
    },
    {
      "codigo": "1.2.1 e 1.2.2",
      "titulo": "Fluxo Circular da Renda e as 4 Subdivisões do Mercado Financeiro",
      "prioridade": "Alta",
      "explicacao": "O fluxo circular da renda conecta <b>Famílias</b> (fornecem trabalho/capital e consomem/poupam), <b>Empresas</b> (produzem e investem), <b>Governo</b> (arrecada impostos e realiza gastos públicos) e o <b>Mercado Financeiro</b>, que se subdivide em 4 segmentos:<ul><li><b>1. Mercado Monetário (Questão 3 Oficial):</b> Operações de curtíssimo prazo voltadas a <b>ajustar a quantidade de moeda no sistema, modulando a liquidez e orientando as taxas de juros de curto prazo</b> (Selic, CDI, compromissadas).</li><li><b>2. Mercado de Crédito:</b> Intermediação bancária de curto e médio prazo para consumo e capital de giro (CDC, consignado, capital de giro).</li><li><b>3. Mercado de Capitais:</b> Financiamento direto (desintermediação) de médio, longo ou prazo indeterminado para projetos produtivos das empresas (ações, debêntures, notas comerciais, CRI, CRA).</li><li><b>4. Mercado Cambial:</b> Troca de moeda nacional por moedas estrangeiras à vista ou a termo.</li></ul>",
      "gatilhosProva": [
        "Perguntou o objetivo das medidas do Banco Central no Mercado Monetário -> Ajustar a quantidade de moeda, modular a liquidez e orientar os juros de curto prazo (Questão 3 Oficial).",
        "Empresa captando diretamente junto aos investidores para expandir fábrica sem intermediação bancária -> Mercado de Capitais."
      ],
      "pegadinhas": [
        "Afirmar que o Banco Central atua no mercado monetário para fixar juros de longo prazo por intervenção direta nos contratos privados.",
        "Confundir Mercado Monetário (controle de liquidez agregada no curtíssimo prazo) com Mercado de Crédito (empréstimos bancários a famílias e empresas)."
      ]
    },
    {
      "codigo": "1.2.3",
      "titulo": "Política Fiscal, LRF, Novo Arcabouço Fiscal e Marcação a Mercado",
      "prioridade": "Alta",
      "explicacao": "Tema recordista do Caderno Oficial (Questões 4, 5, 6 e 7):<ul><li><b>Resultado Primário vs. Nominal:</b> O resultado primário é a diferença entre receitas e despesas não financeiras (<b>exclui os juros da dívida</b>). O nominal inclui a conta de juros.</li><li><b>Desequilíbrio Fiscal e Juros (Questões 4 e 6):</b> Gastos públicos crescentes sem ajuste fiscal elevam a dívida pública e o <b>risco-país</b>, deterioram as expectativas de inflação e <b>pressionam as taxas de juros para cima</b>, reduzindo o investimento produtivo privado. O equilíbrio fiscal produz o efeito oposto (reduz risco, juros e inflação).</li><li><b>Efeito na Carteira - Marcação a Mercado (Questão 5):</b> Quando a percepção de risco fiscal faz os juros futuros subirem, o <b>preço dos títulos de renda fixa já emitidos (prefixados e IPCA+) CAI</b>, gerando desvalorização nas cotas de fundos de renda fixa e multimercados.</li><li><b>LRF e Novo Arcabouço Fiscal (Questão 7):</b> A Lei de Responsabilidade Fiscal (limites de dívida, gastos com pessoal e Regra de Ouro) combinada ao Novo Arcabouço Fiscal (que limita o crescimento real das despesas primárias a uma proporção do crescimento das receitas, entre 0,6% e 2,5% a.a.) busca <b>equilibrar as contas públicas ao unir contenção de despesas, limites de dívida e controle da expansão dos gastos primários</b>.</li></ul>",
      "gatilhosProva": [
        "Governo desistiu de ajuste fiscal / aumentou gastos primários -> Eleva risco-país, pressiona inflação e juros para cima e DESVALORIZA títulos de renda fixa já emitidos (Questões 4 e 5).",
        "LRF + Novo Arcabouço Fiscal -> Equilibrar contas públicas unindo contenção de despesas, limites de dívida e controle de gastos primários (Questão 7)."
      ],
      "pegadinhas": [
        "Achar que a alta dos juros provocada pelo risco fiscal valoriza imediatamente os títulos prefixados já emitidos na carteira do cliente (pela marcação a mercado, quando a taxa sobe, o PU cai!).",
        "Dizer que o déficit fiscal é neutro sobre a inflação ou que é automaticamente compensado sem impacto no crédito privado."
      ]
    },
    {
      "codigo": "1.2.4",
      "titulo": "Política Monetária: Open Market, Compulsório, Redesconto, Copom, Selic e CDI",
      "prioridade": "Alta",
      "explicacao": "O Banco Central utiliza três instrumentos clássicos para controlar a liquidez e manter a inflação (IPCA) na meta:<ul><li><b>1. Open Market (Mercado Aberto - Questão 8 Oficial):</b> Instrumento mais ágil do BC. Para <b>reduzir a moeda em circulação (política contracionista)</b>, o BC realiza uma <b>compromissada de venda</b> (vende títulos públicos hoje com compromisso de recompra em data e preço pré-pactuados, enxugando liquidez). Para injetar moeda (expansionista), compra títulos.</li><li><b>2. Depósito Compulsório (Questão 23 Oficial):</b> Retenção obrigatória de parte dos depósitos bancários no BC. Elevar o compulsório retira dinheiro de circulação e encolhe a oferta de crédito bancário.</li><li><b>3. Redesconto:</b> Empréstimo de liquidez do BC aos bancos. Elevar a taxa de redesconto contrai a liquidez.</li><li><b>Copom, Selic e CDI:</b> O Copom (Presidente + 8 Diretores do BC) define a <b>Meta Selic</b>. A <b>Selic Over (Efetiva)</b> é a taxa média das operações compromissadas de 1 dia lastreadas em <b>títulos públicos federais</b> no sistema Selic. O <b>CDI (Taxa DI)</b> é a taxa média dos empréstimos interbancários de 1 dia lastreados em títulos privados registrados na B3.</li></ul>",
      "gatilhosProva": [
        "BC quer reduzir moeda em circulação via operação compromissada -> Venda de títulos públicos com compromisso de recompra em data e preço pré-pactuados (Questão 8 Oficial).",
        "BC elevou o compulsório sobre depósitos à vista -> Retira dinheiro de circulação e restringe a oferta de crédito (Questão 23 Oficial)."
      ],
      "pegadinhas": [
        "Trocar 'compromissada de venda com compromisso de recompra' por 'opção de compra' ou 'empréstimo de títulos'.",
        "Confundir Selic Meta (definida pelo Copom) com Selic Over (apurada no mercado interbancário com lastro em títulos públicos)."
      ]
    },
    {
      "codigo": "1.2.5, 1.2.6 e 1.2.7",
      "titulo": "Política Cambial (PTAX, Cupom e Swap), Indicadores (PIB, IPCA, IGP-M, TR) e Riscos",
      "prioridade": "Média",
      "explicacao": "<ul><li><b>Política Cambial:</b> O Brasil adota o câmbio <b>Flutuante Sujo (<i>Dirty Floating</i>)</b> — o mercado define a taxa, mas o BC intervém pontualmente. A <b>PTAX</b> é a média aritmética de 4 janelas diárias de cotações apurada pelo BC. O <b>Cupom Cambial</b> é a taxa de juros em dólar no Brasil: <code>(1 + Juros Internos) = (1 + Variação Cambial) * (1 + Cupom Cambial)</code>. No <b>Swap Cambial Tradicional</b>, o BC paga variação do dólar + cupom e recebe Selic (oferta proteção cambial para conter a alta do dólar).</li><li><b>PIB:</b> Soma dos bens e serviços <b>finais</b> produzidos no país: <code>PIB = C + I + G + (X - M)</code>.</li><li><b>IPCA vs. IGP-M vs. TR:</b> O <b>IPCA</b> (IBGE) mede a inflação oficial de varejo (1 a 40 salários mínimos). O <b>IGP-M</b> (FGV) é composto por <b>60% IPA (atacado) + 30% IPC (varejo) + 10% INCC (construção)</b>, sofrendo forte impacto do dólar. A <b>TR</b> deriva das taxas das LTNs (TBF) com aplicação de um redutor.</li><li><b>Tríade de Riscos:</b> <b>Mercado</b> (oscilação de preços/taxas), <b>Crédito</b> (calote/inadimplência do emissor) e <b>Liquidez</b> (dificuldade de vender rápido pelo preço justo).</li></ul>",
      "gatilhosProva": [
        "Dólar subiu forte e encareceu produtos agrícolas/industriais no atacado -> Impacta mais o IGP-M (60% IPA) do que o IPCA.",
        "Investidor estrangeiro avaliando retorno em dólar no Brasil -> Olha para o Cupom Cambial comparado aos juros dos EUA."
      ],
      "pegadinhas": [
        "Incluir bens intermediários (insumos) no cálculo do PIB (gera dupla contagem; o PIB considera apenas bens e serviços FINAIS).",
        "Afirmar que a PTAX é calculada pela B3 (quem calcula e divulga a PTAX é o Banco Central)."
      ]
    },
    {
      "codigo": "1.3.1, 1.3.2 e 1.3.4",
      "titulo": "Matemática Financeira: Taxa Nominal vs. Real (Fórmula de Fisher) e Juros Simples vs. Compostos",
      "prioridade": "Alta",
      "explicacao": "<ul><li><b>Fórmula de Fisher (Taxa Real):</b> Relaciona a taxa nominal (<code>i</code>), a taxa real (<code>r</code>) e a inflação (<code>I</code>): <code>(1 + i) = (1 + r) * (1 + I)</code>, logo <code>r = [(1 + i) / (1 + I)] - 1</code>. A taxa real exata é sempre ligeiramente <b>menor</b> que a subtração simples <code>(i - I)</code> quando há inflação positiva.</li><li><b>Capitalização Simples vs. Composta:</b> Nos <b>juros simples</b>, os juros incidem apenas sobre o capital inicial (crescimento linear: <code>FV = PV * (1 + i*n)</code>) e as taxas são <b>proporcionais</b> (<code>1% a.m. = 12% a.a.</code>). Nos <b>juros compostos</b>, incidem sobre o montante acumulado (crescimento exponencial: <code>FV = PV * (1 + i)^n</code>) e as taxas são <b>equivalentes</b> (<code>1% a.m. = 1,01^12 - 1 = 12,68% a.a.</code>).</li><li><b>Taxa Bruta vs. Líquida:</b> O imposto de renda (IR) incide sobre os <b>rendimentos nominais</b> (antes de descontar a inflação), reduzindo a rentabilidade líquida efetiva do investidor.</li></ul>",
      "gatilhosProva": [
        "Pediu a Taxa Real dados ganho nominal e inflação -> Divida (1 + nominal) por (1 + inflação) e subtraia 1. Nunca subtraia direto!",
        "Planejamento de longo prazo / reserva-alvo de aposentadoria (Questão 27 Oficial) -> Deve-se usar a TAXA REAL e o horizonte de tempo para evitar ilusão monetária."
      ],
      "pegadinhas": [
        "Marcar a alternativa que apenas subtrai a inflação da taxa nominal (ex.: 15% - 5% = 10%, quando pela fórmula de Fisher 1,15 / 1,05 - 1 = 9,52%).",
        "Usar divisão linear para encontrar taxa equivalente em regime de capitalização composta."
      ]
    },
    {
      "codigo": "1.3.3, 1.3.6, 1.3.7 e 1.3.8",
      "titulo": "VPL, TIR, Duration, CMPC, Sistemas SAC vs. Price e Desconto Bancário",
      "prioridade": "Alta",
      "explicacao": "<ul><li><b>VPL e TIR:</b> O <b>VPL</b> traz os fluxos futuros a valor presente descontados pelo Custo de Oportunidade / TMA (ou CMPC/WACC da empresa) e subtrai o investimento inicial. A <b>TIR</b> é a taxa que zera o VPL (<code>VPL = 0</code>). Se <code>TIR > TMA</code>, então <code>VPL > 0</code> e o projeto é economicamente viável.</li><li><b>Duration vs. Prazo:</b> A <i>Duration</i> de Macaulay é o prazo médio ponderado dos fluxos de caixa descontados. Em títulos sem cupom (Zero Cupom, como a LTN), <code>Duration = Prazo</code>. Em títulos com cupons intermediários, <code>Duration < Prazo</code>. Quanto <b>maior a Duration</b>, maior a sensibilidade (risco de mercado) do preço do título a variações nos juros.</li><li><b>SAC vs. Tabela Price:</b> No <b>SAC</b>, a amortização é constante, os juros são decrescentes e a <b>prestação é decrescente</b> (menor gasto total com juros). Na <b>Price</b>, a <b>prestação é constante (fixa)</b>, a amortização é crescente e os juros são decrescentes.</li><li><b>Desconto Bancário Simples ('Por Fora'):</b> Aplicado sobre o valor futuro/nominal do recebível: <code>D = N * d * n</code>. A taxa efetiva da operação é sempre superior à taxa de desconto comercial anunciada.</li></ul>",
      "gatilhosProva": [
        "Comparou dois títulos prefixados e perguntou qual sofre maior queda de preço se a Selic subir -> O título de MAIOR Duration.",
        "Cliente quer prestações decrescentes e pagar menos juros no total do financiamento imobiliário -> Sistema SAC."
      ],
      "pegadinhas": [
        "Afirmar que na Tabela Price a parcela de amortização é constante (na Price, a PRESTAÇÃO é constante e a amortização é CRESCENTE).",
        "Dizer que um projeto com VPL igual a zero deu prejuízo contábil (VPL = 0 significa que o projeto rendeu exatamente a TMA / custo de oportunidade exigido)."
      ]
    },
    {
      "codigo": "1.4.1 a 1.4.9",
      "titulo": "Infraestruturas do Mercado Financeiro (IMFs), Estabilidade Sistêmica (Bacen) e Basileia",
      "prioridade": "Alta",
      "explicacao": "<ul><li><b>IMFs:</b> O <b>SPB</b> (via STR) e o <b>SPI</b> (PIX) liquidam pagamentos em tempo real. O <b>SELIC</b> custodia e liquida <b>Títulos Públicos Federais</b>. A <b>B3</b> atua nos ativos privados e ações com 3 funções distintas: <b>Contraparte Central / Clearing House</b> (interpõe-se entre comprador e vendedor, mitigando o risco de contraparte/liquidação), <b>Depositária Central</b> (guarda/custódia efetiva, titularidade e portabilidade) e <b>Registradora</b> (apenas registro informacional sem custódia).</li><li><b>Estabilidade Financeira e Bacen (Questão 10 Oficial):</b> O Bacen <b>adota normas prudenciais, regula a liquidez (Compulsório, LLI e LLT), promove medidas de estabilidade sistêmica (via Comef) e sustenta a confiança no sistema</b>.</li><li><b>Índice de Basileia (I, II e III):</b> Limita a alavancagem bancária exigindo Patrimônio de Referência (PR) frente aos Ativos Ponderados pelo Risco (RWA). <b>Basileia I</b> focava em risco de crédito; <b>Basileia II</b> incluiu risco de mercado e operacional; <b>Basileia III</b> reforçou o capital principal, criou colchões de capital e introduziu índices de liquidez de curto prazo (<b>LCR</b> - 30 dias) e longo prazo (<b>NSFR</b> - 1 ano).</li><li><b>BSM Supervisão de Mercados:</b> Fiscaliza participantes da B3 e gere o <b>MRP</b> (ressarcimento de até R$ 200 mil por erro operacional/liquidação de corretora).</li></ul>",
      "gatilhosProva": [
        "Perguntou o papel do Bacen diante de receio de crise bancária internacional -> Adota normas prudenciais, regula a liquidez, promove estabilidade sistêmica e sustenta a confiança (Questão 10 Oficial).",
        "Quem garante que o vendedor receba o dinheiro e o comprador receba o ativo mesmo se a outra ponta falhar? -> Contraparte Central (CCP / Clearing House)."
      ],
      "pegadinhas": [
        "Confundir Entidade Registradora (apenas armazena dados da operação) com Depositário Central (detém a guarda e controla a titularidade efetiva do ativo).",
        "Afirmar que títulos públicos federais (LTN, LFT, NTN-B) são custodiados e liquidados na B3 no atacado (eles são liquidados e custodiados no SELIC!)."
      ]
    },
    {
      "codigo": "1.4.10, 1.4.11 e 1.4.12",
      "titulo": "Classificação de Investidores (Res. CVM 30) e Código ANBIMA de Distribuição",
      "prioridade": "Alta",
      "explicacao": "<ul><li><b>Resolução CVM 30:</b> <b>Investidor Qualificado (IQ)</b> é quem possui <b>R$ 1 milhão ou mais</b> em investimentos financeiros + termo escrito (ou possui certificação técnica aceita pela CVM, como CEA/CFP/CGA/CNPI/ANCORD, aplicando seus próprios recursos). <b>Investidor Profissional (IP)</b> é quem possui <b>R$ 10 milhões ou mais</b> em investimentos financeiros + termo escrito (além de instituições financeiras, seguradoras, fundos de investimento, EFPC/EAPC e investidores não residentes).</li><li><b>Código ANBIMA de Distribuição (Questão 9 Oficial):</b> Complementa a regulação oficial ao <b>definir parâmetros de conduta que asseguram concorrência leal, padronização de procedimentos e maior qualidade das informações prestadas sobre fundos e produtos de investimento</b>. Exige <b>KYC</b> (Conheça seu Cliente), <b>Suitability (API)</b> atualizado a cada 24 meses (avaliando objetivo, situação financeira e conhecimento), transparência na remuneração do distribuidor e regras rígidas de publicidade (histórico mínimo de 6 meses para divulgar rentabilidade).</li><li><b>Private Banking ANBIMA:</b> Exige capacidade de investimento individual ou familiar mínima de <b>R$ 5 milhões</b>.</li></ul>",
      "gatilhosProva": [
        "Perguntou a finalidade do Código de Regulação e Melhores Práticas da ANBIMA -> Concorrência leal, padronização de procedimentos e maior qualidade/transparência das informações (Questão 9 Oficial).",
        "Investidor com R$ 1,5 milhão em imóveis e R$ 400 mil em CDB -> É investidor de VAREJO (imóvel físico não entra na conta da CVM 30!)."
      ],
      "pegadinhas": [
        "Confundir o piso do Private Banking da ANBIMA (R$ 5 milhões) com o requisito de Investidor Profissional da CVM 30 (R$ 10 milhões).",
        "Incluir Caderneta de Poupança e EFPC na obrigatoriedade de Suitability do Código ANBIMA de Distribuição (ambos são dispensados pelo Código)."
      ]
    }
  ],
  "flashcards": [
    {
      "frente": "Qual a diferença entre Órgãos Normativos e Entidades Supervisoras no SFN?",
      "verso": "Órgãos Normativos (CMN, CNSP, CNPC) apenas criam regras e diretrizes gerais (não executam nem fiscalizam). Entidades Supervisoras (Bacen, CVM, SUSEP, PREVIC) fiscalizam, autorizam e punem os operadores."
    },
    {
      "frente": "Quem compõe o Conselho Monetário Nacional (CMN) e quem o preside?",
      "verso": "3 membros: Ministro da Fazenda (Presidente do CMN), Ministro do Planejamento e Orçamento, e Presidente do Banco Central do Brasil."
    },
    {
      "frente": "Qual a diferença fundamental entre Cooperativa de Crédito Singular e Banco Cooperativo (Questão 1 Oficial)?",
      "verso": "A Cooperativa Singular atende o cooperado diretamente na ponta (capta e empresta). O Banco Cooperativo é a 'espinha dorsal' que provê infraestrutura, liquidez, compensação e acesso em escala aos mercados."
    },
    {
      "frente": "Quando o PGBL (oferecido pelas EAPCs) é mais vantajoso que o VGBL (Questão 2 Oficial)?",
      "verso": "Quando o cliente possui renda tributável, contribui para o regime oficial (INSS ou RPPS) e faz a declaração completa de IR, permitindo diferir até 12% da renda bruta anual (com tributação sobre o total no resgate)."
    },
    {
      "frente": "Qual é o objetivo central das medidas do Banco Central no Mercado Monetário (Questão 3 Oficial)?",
      "verso": "Ajustar a quantidade de moeda no sistema, modulando a liquidez e orientando as taxas de juros de curto prazo."
    },
    {
      "frente": "Qual a diferença entre Resultado Fiscal Primário e Resultado Nominal?",
      "verso": "O Resultado Primário considera apenas receitas e despesas não financeiras (exclui os juros da dívida pública). O Resultado Nominal inclui as despesas com juros da dívida."
    },
    {
      "frente": "Qual o impacto do desequilíbrio fiscal sobre o risco-país, os juros e os títulos de renda fixa já emitidos (Questões 4 e 5 Oficiais)?",
      "verso": "Eleva o risco-país, deteriora as expectativas de inflação e pressiona os juros para cima. Com a alta dos juros, os títulos de renda fixa prefixados e IPCA+ já emitidos sofrem DESVALORIZAÇÃO (queda de preço na marcação a mercado)."
    },
    {
      "frente": "Qual o efeito combinado da Lei de Responsabilidade Fiscal (LRF) com o Novo Arcabouço Fiscal (Questão 7 Oficial)?",
      "verso": "Equilibrar as contas públicas ao unir contenção de despesas, limites de dívida e controle da expansão dos gastos primários."
    },
    {
      "frente": "O que o Banco Central faz no Open Market quando quer REDUZIR a moeda em circulação (Questão 8 Oficial)?",
      "verso": "Realiza uma operação compromissada de VENDA: vende títulos públicos hoje com compromisso de recompra em data e preço pré-pactuados, enxugando a liquidez do sistema."
    },
    {
      "frente": "Qual a diferença entre Meta Selic, Selic Over e CDI?",
      "verso": "Meta Selic: taxa-alvo definida pelo Copom a cada 45 dias. Selic Over: taxa efetiva das operações interbancárias de 1 dia lastreadas em títulos públicos federais. CDI: taxa interbancária de 1 dia lastreada em títulos privados (B3)."
    },
    {
      "frente": "O que são a Taxa PTAX e o Cupom Cambial?",
      "verso": "PTAX: média aritmética das cotações do dólar apurada pelo Bacen em 4 janelas diárias. Cupom Cambial: taxa de juros em dólar paga a quem investe no Brasil protegido da variação cambial."
    },
    {
      "frente": "Como se calcula a Taxa Real de juros pela Fórmula de Fisher?",
      "verso": "(1 + Taxa Real) = (1 + Taxa Nominal) / (1 + Inflação). Nunca se deve apenas subtrair a inflação da taxa nominal!"
    },
    {
      "frente": "Qual a diferença entre o Sistema SAC e a Tabela Price?",
      "verso": "No SAC, a amortização é constante e as prestações são decrescentes (paga-se menos juros no total). Na Tabela Price, a prestação é constante (fixa) e a amortização é crescente."
    },
    {
      "frente": "Qual a relação entre VPL, TIR e TMA (Custo de Oportunidade)?",
      "verso": "A TIR é a taxa que zera o VPL (VPL = 0). Se a TIR for maior que a TMA, o VPL é positivo (VPL > 0) e o projeto é economicamente viável."
    },
    {
      "frente": "O que é a Duration de um título e como ela se relaciona com o risco de mercado?",
      "verso": "É o prazo médio ponderado de recebimento dos fluxos de caixa descontados. Quanto maior a Duration, maior a sensibilidade (volatilidade) do preço do título diante de oscilações nas taxas de juros."
    },
    {
      "frente": "Qual a diferença entre Contraparte Central (CCP), Depositário Central e Registradora?",
      "verso": "A CCP (Clearing) assume o risco de liquidação interpondo-se entre comprador e vendedor; o Depositário Central faz a guarda/custódia efetiva e controle de titularidade do ativo; a Registradora apenas armazena informações das operações."
    },
    {
      "frente": "Quais os critérios patrimoniais para Investidor Qualificado, Investidor Profissional (CVM 30) e Private Banking (ANBIMA)?",
      "verso": "Investidor Qualificado (CVM): >= R$ 1 milhão + termo (ou certificação). Investidor Profissional (CVM): >= R$ 10 milhões + termo. Private Banking (ANBIMA): >= R$ 5 milhões."
    },
    {
      "frente": "Qual é o objetivo central do Código ANBIMA de Distribuição (Questão 9 Oficial)?",
      "verso": "Definir parâmetros de conduta que asseguram concorrência leal, padronização de procedimentos e maior qualidade e transparência das informações prestadas aos investidores."
    }
  ],
  "questoes": [
    {
      "id": "CESG_000084",
      "oficial": true,
      "codigoItem": "000084",
      "topicoPD": "Autorreguladores e demais participantes do mercado.",
      "codigoPD": "1.1.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Durante um atendimento, um cliente mostra a Marcos, profissional CPA,  um informe publicitário de um fundo administrado por uma instituição aderente aos Códigos da ANBIMA. A publicação omite alertas de risco e usa rentabilidade passada como promessa de ganho. O cliente pergunta se a ANBIMA pode mandar tirar do ar ou  punir a instituição como a CVM.",
      "enunciado": "Marcos esclarece que a Associação",
      "alternativas": [
        {
          "texto": "pode exigir adequação com base no Código de Autorregulação ou sancionar internamente o aderente e não substituir a atuação da CVM.",
          "correta": true,
          "justificativa": "A ANBIMA é autorreguladora privada: define códigos (incluindo regras de publicidade), fiscaliza apenas os aderentes e pode exigir ajuste de peças, além de aplicar sanções internas (advertência, multa, suspensão de selo, descredenciamento). Não substitui CVM/Bacen."
        },
        {
          "texto": "deve remeter o caso à CVM, pois não possui regras próprias sobre comunicação e não pode determinar ajustes em material de instituições aderentes.",
          "correta": false,
          "justificativa": "A ANBIMA não “apenas remete” à CVM. Seus códigos de divulgação vinculam os aderentes e permitem determinar correções e sancionar internamente. Encaminhar à CVM pode ocorrer em paralelo, mas não elimina a competência autorregulatória sobre publicidade."
        },
        {
          "texto": "exerce autoridade pública delegada, podendo suspender a captação do fundo e aplicar sanções estatais, equiparadas às da CVM.",
          "correta": false,
          "justificativa": "A ANBIMA não detém poder de polícia nem “autoridade pública delegada” para suspender captação ou impor sanções estatais. Essas medidas pertencem à CVM/Bacen. A ANBIMA limita-se a sanções privadas no âmbito da adesão aos seus códigos."
        },
        {
          "texto": "atua por orientação voluntária, recomenda ajustes à peça e não dispõe de mecanismos sancionatórios quando o aderente descumpre o Código.",
          "correta": false,
          "justificativa": "Reduz a ANBIMA a orientação voluntária sem sanção. Na prática, a entidade pode recomendar ajustes e aplicar sanções internas quando o aderente descumpre o Código (ex.: advertência, multa, suspensão de selo). Portanto, há mecanismos coercitivos privados."
        }
      ],
      "gabaritoComentado": "A ANBIMA é autorreguladora privada: define códigos (incluindo regras de publicidade), fiscaliza apenas os aderentes e pode exigir ajuste de peças, além de aplicar sanções internas (advertência, multa, suspensão de selo, descredenciamento). Não substitui CVM/Bacen."
    },
    {
      "id": "CESG_000085",
      "oficial": true,
      "codigoItem": "000085",
      "topicoPD": "Entidades Abertas de Previdência Complementar (EAPC).",
      "codigoPD": "1.1.3.1.14",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante o planejamento financeiro de longo prazo, o casal Marina e Rogério pediu esclarecimentos a Patrícia, profissional CPA, sobre o plano de previdência que contrataram com uma seguradora. Marina acredita que ambos funcionam como “fundos de pensão” das empresas, enquanto Rogério acha que se trata de uma forma pública de aposentadoria, semelhante ao INSS.",
      "enunciado": "Patrícia esclareceu que o plano do casal  foi oferecido por uma entidade",
      "alternativas": [
        {
          "texto": "aberta de previdência complementar, voltada ao público em geral, com fins lucrativos e objetivo de renda complementar.",
          "correta": true,
          "justificativa": "Corresponde às Entidades Abertas de Previdência Complementar (EAPC), normalmente seguradoras autorizadas pela Susep, que operam com fins lucrativos, ofertadas ao público em geral (independentemente de vínculo empregador–empregado) e voltadas à complementação de renda previdenciária."
        },
        {
          "texto": "fechada de previdência, sem fins lucrativos, voltada a empregados ou associados de determinada empresa ou classe.",
          "correta": false,
          "justificativa": "Define as Entidades Fechadas de Previdência Complementar (EFPC), os “fundos de pensão”, que são sem fins lucrativos e restritos a empregados/associados de patrocinadores ou categorias. Não se aplica ao caso, pois o casal contratou plano em seguradora, característica de EAPC."
        },
        {
          "texto": "ligada um regime público de aposentadoria, com benefícios garantidos pelo Estado, substituindo o INSS.",
          "correta": false,
          "justificativa": "Descreve regime público de previdência (como o INSS), de natureza estatal e obrigatória, com benefícios definidos em lei e financiamento por contribuições sociais. Não é o produto do caso, que é previdência complementar privada, contratada em mercado e não substitui o INSS."
        },
        {
          "texto": "administradora de previdência complementar aberta sem fins lucrativos, priorizando benefícios definidos em convênios.",
          "correta": false,
          "justificativa": "Mistura traços de entidades abertas com elementos típicos das fechadas (governança paritária e sem fins lucrativos, benefícios por convênios). EAPC são, em regra, com fins lucrativos e abertas ao público; já a governança paritária é característica de EFPC, logo, a afirmação é inconsistente."
        }
      ],
      "gabaritoComentado": "Corresponde às Entidades Abertas de Previdência Complementar (EAPC), normalmente seguradoras autorizadas pela Susep, que operam com fins lucrativos, ofertadas ao público em geral (independentemente de vínculo empregador–empregado) e voltadas à complementação de renda previdenciária."
    },
    {
      "id": "CESG_000086",
      "oficial": true,
      "codigoItem": "000086",
      "topicoPD": "Entidades Abertas de Previdência Complementar (EAPC).",
      "codigoPD": "1.1.3.1.14",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante o atendimento financeiro, Tereza, servidora pública, comenta que está avaliando participar de um plano de previdência complementar com benefício fiscal. Ela ouviu falar de uma modalidade oferecida por instituições abertas, o PGBL e pede para a profissional CPA Renata explicar como funciona esse tipo de plano no sistema de previdência complementar.",
      "enunciado": "Renata explica à cliente que esta modalidade é mais vantajosa quando a pessoa",
      "alternativas": [
        {
          "texto": "tem renda tributável e contribui ao regime oficial (INSS/RPPS), usando o plano para diferir até 12% da renda, via declaração completa de IR, e tributar o total no resgate/benefício.",
          "correta": true,
          "justificativa": "O PGBL permite diferir IR ao abater até 12% da renda bruta tributável do ano, desde que o cliente contribua para o INSS/RPPS. A tributação ocorre sobre o total resgatado/benefício no futuro. Para quem tem renda tributável e contribui ao regime oficial, o ganho de fluxo de caixa é efetivo."
        },
        {
          "texto": "deseja que a tributação ocorra sobre os rendimentos no resgate, buscando aproveitar o aporte sem que a base seja o valor total acumulado.",
          "correta": false,
          "justificativa": "A alternativa descreve a lógica do VGBL: a tributação recai apenas sobre os rendimentos, não sobre o montante total. O VGBL não oferece dedução anual de até 12% da renda. Logo, não traduz a vantagem fiscal típica do PGBL, que é diferimento com base na renda tributável do participante."
        },
        {
          "texto": "não possui renda tributável no ano e pretende usar o plano para reduzir imposto futuro, independentemente de contribuir para o regime oficial.",
          "correta": false,
          "justificativa": "Sem renda tributável no ano, não há o que abater; portanto, o PGBL não confere seu principal benefício fiscal. Além disso, a exigência de vínculo ao regime oficial (INSS/RPPS) é condição para a dedução anual. Nesse perfil, o PGBL tende a ser ineficiente como ferramenta de economia de imposto."
        },
        {
          "texto": "atua como autônoma sem contribuição ao regime oficial e pretende usar o plano para organizar a poupança previdenciária, visando benefício fiscal.",
          "correta": false,
          "justificativa": "Autônomos sem contribuição ao INSS/RPPS não atendem ao requisito para deduzir até 12% via PGBL. Assim, fica apenas a poupança previdenciária, sem vantagem fiscal relevante. Nesse caso, produtos sem exigência de vínculo e sem tributação sobre o principal (ex.: VGBL) costumam ser mais aderentes."
        }
      ],
      "gabaritoComentado": "O PGBL permite diferir IR ao abater até 12% da renda bruta tributável do ano, desde que o cliente contribua para o INSS/RPPS. A tributação ocorre sobre o total resgatado/benefício no futuro. Para quem tem renda tributável e contribui ao regime oficial, o ganho de fluxo de caixa é efetivo."
    },
    {
      "id": "CESG_000087",
      "oficial": true,
      "codigoItem": "000087",
      "topicoPD": "Entidades Abertas de Previdência Complementar (EAPC).",
      "codigoPD": "1.1.3.1.14",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Fábio, engenheiro autônomo, contribui ao INSS como contribuinte individual e declara o IR no modelo simplificado. Ele pede explicações a Paulo, profissional CPA, pois recebeu duas sugestões de previdência complementar: PGBL e VGBL. Ouviu que “ambos os planos têm vantagens tributárias”, mas gostaria de saber qual se adequa melhor ao seu caso e como será a tributação no resgate.",
      "enunciado": "Paulo esclareceu que, para o caso de Fábio, a alternativa mais aderente é o plano",
      "alternativas": [
        {
          "texto": "VGBL, que incide imposto no resgate sobre os ganhos e não prevê abatimento anual dos aportes, mantendo a tributação focada no rendimento acumulado.",
          "correta": true,
          "justificativa": "No VGBL, o IR incide apenas sobre os rendimentos no resgate/benefício, sem dedução anual dos aportes. É o arranjo mais aderente para quem usa modelo simplificado (ou não aproveita deduções), pois evita “trocar” um abatimento inexistente hoje por base de tributação ampliada no futuro."
        },
        {
          "texto": "PGBL, que incide imposto no resgate sobre aportes e ganhos e prevê abatimento anual dos aportes na base de cálculo, condicionando o benefício ao uso de deduções.",
          "correta": false,
          "justificativa": "O PGBL permite deduzir até 12% da renda tributável no ano, porém no resgate o IR incide sobre principal + rendimentos. Para quem não utiliza deduções (ex.: modelo simplificado), esse desenho é desvantajoso, pois não captura o benefício presente e enfrenta base de IR maior no futuro."
        },
        {
          "texto": "PGBL, que adota tributação no resgate do montante total investido e oferece benefício anual por dedução de contribuições, com regra de cálculo por despesas dedutíveis.",
          "correta": false,
          "justificativa": "Novamente descreve lógica do PGBL: vantagem fiscal anual por dedução e tributação sobre o montante total no resgate. O contexto do cliente (sem uso de deduções) não se beneficia desse mecanismo e ainda incorre em tributação mais ampla ao final."
        },
        {
          "texto": "VGBL, que aplica imposto no resgate sobre o principal e o rendimento, e não concede abatimento recorrente dos aportes, sendo a tributação integral no resgate.",
          "correta": false,
          "justificativa": "Conecta a elegibilidade ao PGBL (comprovação e vínculo contributivo ao regime oficial) e mantém IR sobre aportes e ganhos no resgate. Embora isso seja correto para o PGBL, não endereça o perfil do cliente que não pretende usar dedução; por isso, VGBL é o alinhamento adequado no caso."
        }
      ],
      "gabaritoComentado": "No VGBL, o IR incide apenas sobre os rendimentos no resgate/benefício, sem dedução anual dos aportes. É o arranjo mais aderente para quem usa modelo simplificado (ou não aproveita deduções), pois evita “trocar” um abatimento inexistente hoje por base de tributação ampliada no futuro."
    },
    {
      "id": "CESG_000088",
      "oficial": true,
      "codigoItem": "000088",
      "topicoPD": "Operadores e participantes do sistema.",
      "codigoPD": "1.1.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Jorge, estagiário em uma cooperativa de crédito, consulta Paulo, profissional CPA, para entender a diferença entre uma cooperativa de crédito e um banco cooperativo. Paulo explica que os papéis de ambas são bastante distintos, ainda que as cooperativas ofereçam serviços como cartões, TED/Pix e fundos de investimento. Ele salienta que a relação conceitual entre quem atende o cooperado na ponta e quem habilita a operação em escala no sistema cooperativo distingue esses dois tipos de instituição.",
      "enunciado": "Para deixar mais explícita esta diferenciação, Paulo poderia explicar que a cooperativa",
      "alternativas": [
        {
          "texto": "atende o cooperado (capta/empresta) e o banco cooperativo provê infraestrutura, liquidez e acesso a mercados.",
          "correta": true,
          "justificativa": "A cooperativa singular é quem interage com o cooperado na ponta, concedendo crédito, captando recursos e ofertando serviços diretamente. Já o banco cooperativo funciona como a “espinha dorsal” do sistema, garantindo a infraestrutura de liquidez, a compensação de operações, o acesso a mercados financeiros."
        },
        {
          "texto": "atua como representante do banco cooperativo e este realiza a captação e a concessão de crédito.",
          "correta": false,
          "justificativa": "Parece verossímil, mas está incorreto: a relação contratual de captação e crédito ocorre na cooperativa singular, que atende o cooperado na ponta. O banco cooperativo não substitui a cooperativa na originação; ele oferece suporte sistêmico (liquidez, compensação, acesso a mercados), sem contratar diretamente com o associado."
        },
        {
          "texto": "concentra serviços financeiros para pessoas jurídicas e o banco cooperativo atua com pessoas físicas.",
          "correta": false,
          "justificativa": "O contexto não menciona nenhuma restrição a pessoas físicas ou jurídicas. Dizer que o banco só atende PF e a cooperativa, só PJ, não faz sentido e não encontra apoio no texto fornecido."
        },
        {
          "texto": "realiza operações de crédito e o banco cooperativo atua como intermediário direto no mercado financeiro.",
          "correta": false,
          "justificativa": "O banco cooperativo é elo sistêmico e provedor de infraestrutura, mas não intermediário direto das operações de crédito com o cooperado. A originação e a relação contratual ocorrem na cooperativa; o banco oferece suporte (escala, liquidez, mercado) ao conjunto das cooperativas."
        }
      ],
      "gabaritoComentado": "A cooperativa singular é quem interage com o cooperado na ponta, concedendo crédito, captando recursos e ofertando serviços diretamente. Já o banco cooperativo funciona como a “espinha dorsal” do sistema, garantindo a infraestrutura de liquidez, a compensação de operações, o acesso a mercados financeiros."
    },
    {
      "id": "CESG_000089",
      "oficial": true,
      "codigoItem": "000089",
      "topicoPD": "Operadores e participantes do sistema.",
      "codigoPD": "1.1.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Em um encontro de orientação financeira, Helena, profissional certificada Anbima, foi questionada por um pequeno grupo de investidores que gostaria de investir na Bolsa de Valores. Helena esclareceu que, quando um investidor decide negociar títulos como ações, fundos de investimento ou derivativos, a transação não ocorre de forma direta entre o cliente e a bolsa. Comentou ainda que existe uma instituição especializada que atua como intermediária, conectando o investidor ao ambiente de negociação da B3 e garantindo que a ordem seja registrada, validada e liquidada. Essa instituição tem também a função de administração e custódia de ativos e a oferta de serviços de consultoria financeira.",
      "enunciado": "Helena esclareceu que a instituição responsável é",
      "alternativas": [
        {
          "texto": "a corretora de valores.",
          "correta": true,
          "justificativa": "Corretoras de valores são as instituições autorizadas a intermediar ordens de compra e venda na bolsa. Elas registram operações, transmitem informações e asseguram a execução correta das negociações, conectando investidores ao mercado regulado da B3."
        },
        {
          "texto": "o banco de investimentos.",
          "correta": false,
          "justificativa": "Bancos de investimento têm foco em estruturação de operações de captação, como emissões de ações e debêntures, mas não intermediam diretamente ordens de negociação em bolsa, papel exclusivo das corretoras."
        },
        {
          "texto": "a sociedade de crédito.",
          "correta": false,
          "justificativa": "Sociedades de crédito financiam operações de curto prazo, mas não possuem autorização para atuar em negociações de ações, fundos ou derivativos no ambiente de bolsa."
        },
        {
          "texto": "a Caixa Econômica.",
          "correta": false,
          "justificativa": "A Caixa Econômica desempenha papel relevante em crédito direcionado e programas sociais, mas não exerce a intermediação direta de operações de mercado de capitais."
        }
      ],
      "gabaritoComentado": "Corretoras de valores são as instituições autorizadas a intermediar ordens de compra e venda na bolsa. Elas registram operações, transmitem informações e asseguram a execução correta das negociações, conectando investidores ao mercado regulado da B3."
    },
    {
      "id": "CESG_000090",
      "oficial": true,
      "codigoItem": "000090",
      "topicoPD": "Política Econômica.",
      "codigoPD": "1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante uma palestra de educação financeira para ingressantes no curso de graduação em Ciências Econômicas, Marina, profissional CPA convidada pela instituição, foi questionada sobre notícias envolvendo decisões do Banco Central e mudanças nas condições de crédito. Alguns alunos demonstraram dúvida sobre como essas ações afetam o funcionamento do sistema financeiro no curto prazo, especialmente em momentos de maior incerteza econômica. Eles queriam entender, de forma simples, qual é o objetivo dessas medidas adotadas pelo Banco Central no mercado monetário.",
      "enunciado": "Diante dessa dúvida, Marina explicou que essas medidas têm como objetivo",
      "alternativas": [
        {
          "texto": "ajustar a quantidade de moeda no sistema, modulando a liquidez e orientando as taxas de juros de curto prazo.",
          "correta": true,
          "justificativa": "A política monetária atua sobre a liquidez e os juros de curto prazo por meio de instrumentos como operações de mercado aberto, compulsórios e redesconto. O objetivo é condicionar as condições financeiras à estabilização dos preços e ao funcionamento regular do mercado."
        },
        {
          "texto": "fixar os juros de longo prazo e os preços do crédito, adotando intervenção direta nos contratos privados.",
          "correta": false,
          "justificativa": "A autoridade monetária influencia a curva a termo, mas não “tabela” os preços de crédito de longo prazo. As taxas decorrem de expectativas, risco e do mercado; o BC usa a Selic e operações para sinalizar condições, não para definir preços contratuais setoriais."
        },
        {
          "texto": "assegurar a expansão contínua do crédito por metas de volume, a fim de garantir crescimento econômico.",
          "correta": false,
          "justificativa": "Os instrumentos não visam à expansão permanente do crédito nem garantem crescimento do PIB. A política monetária busca a estabilidade de preços, suavizando o ciclo; estímulos ou contrações dependem do equilíbrio entre riscos e do mandato de estabilidade."
        },
        {
          "texto": "eliminar a volatilidade diária dos mercados financeiros por operações que neutralizam choques, sem alterar os juros.",
          "correta": false,
          "justificativa": "A gestão de liquidez não elimina a volatilidade nem neutraliza integralmente os choques. O BC permite que as taxas flutuem em torno da meta, por meio de leilões e facilidades, para ancorar o curto prazo, sem fixar níveis rígidos de liquidez diários."
        }
      ],
      "gabaritoComentado": "A política monetária atua sobre a liquidez e os juros de curto prazo por meio de instrumentos como operações de mercado aberto, compulsórios e redesconto. O objetivo é condicionar as condições financeiras à estabilização dos preços e ao funcionamento regular do mercado."
    },
    {
      "id": "CESG_000091",
      "oficial": true,
      "codigoItem": "000091",
      "topicoPD": "Política Econômica.",
      "codigoPD": "1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Paula é importadora de equipamentos eletrônicos e realiza compras frequentes de fornecedores nos Estados Unidos. Ao acompanhar as notícias, ela percebeu que o dólar comercial subiu em relação ao real nas últimas semanas. Preocupada, procura Roberto, seu assessor financeiro, para entender como isso pode afetar seu negócio.\nRoberto explica que a maior demanda por moeda estrangeira – quando importadores antecipam compras, investidores buscam dólar como refúgio e empresas com dívida externa procuram hedge – eleva a taxa de câmbio.",
      "enunciado": "Roberto explica a Paula que o impacto direto para a sua empresa é",
      "alternativas": [
        {
          "texto": "O aumento dos custos de importação, pois será necessário mais reais para comprar a mesma quantidade de dólares.",
          "correta": true,
          "justificativa": "A valorização do dólar frente ao real significa que será necessário mais reais para comprar dólares, encarecendo as importações."
        },
        {
          "texto": "O aumento dos custos de importação, pois a valorização do real encarece os pagamentos aos fornecedores estrangeiros.",
          "correta": false,
          "justificativa": "A frase contém contradição, pois se o real se valoriza, pagamentos externos tenderiam a ficar mais baratos, e não mais caros. Além disso, no enunciado o cenário é de valorização do dólar, não do real."
        },
        {
          "texto": "A redução dos custos de importação, pois a alta do dólar aumenta a competitividade dos produtos importados.",
          "correta": false,
          "justificativa": "A alta do dólar encarece os produtos importados, não aumenta sua competitividade no mercado interno. Esse raciocínio só faria sentido para exportações, que se tornam mais competitivas quando a moeda local se desvaloriza."
        },
        {
          "texto": "a redução dos custos de importação, pois o dólar mais caro aumenta o poder de compra em reais.",
          "correta": false,
          "justificativa": "Um dólar mais caro reduz, e não aumenta, o poder de compra do real; portanto, não reduz custos de importação."
        }
      ],
      "gabaritoComentado": "A valorização do dólar frente ao real significa que será necessário mais reais para comprar dólares, encarecendo as importações."
    },
    {
      "id": "CESG_000092",
      "oficial": true,
      "codigoItem": "000092",
      "topicoPD": "Política Econômica.",
      "codigoPD": "1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "André, profissional CPA, atende Ana, dona de uma pequena confecção. Em picos de demanda, ela utiliza capital de giro para comprar insumos e percebe que o custo do financiamento varia ao longo do tempo. Ela pede ajuda a André para entender o motivo dessas oscilações.",
      "enunciado": "André esclarece que tais oscilações observadas decorrem das",
      "alternativas": [
        {
          "texto": "expectativas das instituições, influenciadas pela liquidez do sistema, política monetária e percepção de risco no mercado de crédito e do risco individual dos tomadores.",
          "correta": true,
          "justificativa": "Relaciona diretamente a variação das taxas às expectativas sobre o custo de captação, influenciadas pela liquidez, política monetária e risco sistêmico, fatores que determinam a precificação do crédito no mercado, além de mudanças do próprio risco do tomador. Explica corretamente o comportamento observado por Ana nas linhas de capital de giro."
        },
        {
          "texto": "mudanças no risco individual do tomador e nas garantias oferecidas, sendo pouco sensíveis às condições macro e de liquidez gerais.",
          "correta": false,
          "justificativa": "Aponta fatores reais (risco e garantias), mas restringe-se ao nível micro, sem considerar as condições sistêmicas de liquidez e política monetária, que são determinantes para a oscilação geral das taxas."
        },
        {
          "texto": "alterações na demanda e oferta de títulos no mercado, refletindo preferências dos investidores, com papel secundário para a política monetária.",
          "correta": false,
          "justificativa": "Descreve bem a dinâmica do mercado de capitais, onde o custo varia conforme oferta e demanda por títulos. Entretanto, não se aplica ao crédito bancário, que é o contexto da confecção de Ana."
        },
        {
          "texto": "expectativas diárias das taxas interbancárias, transmitidas de forma imediata e integral às taxas cobradas ao cliente final.",
          "correta": false,
          "justificativa": "Reconhece que o mercado interbancário influencia a liquidez, mas erra ao afirmar que a transmissão das taxas é imediata e integral. A relação é indireta e depende de outros fatores, como custos administrativos e risco de crédito."
        }
      ],
      "gabaritoComentado": "Relaciona diretamente a variação das taxas às expectativas sobre o custo de captação, influenciadas pela liquidez, política monetária e risco sistêmico, fatores que determinam a precificação do crédito no mercado, além de mudanças do próprio risco do tomador. Explica corretamente o comportamento observado por Ana nas linhas de capital de giro."
    },
    {
      "id": "CESG_000093",
      "oficial": true,
      "codigoItem": "000093",
      "topicoPD": "Política Econômica.",
      "codigoPD": "1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante a divulgação de novas projeções fiscais, analistas destacaram o aumento das despesas primárias e reacenderam o debate sobre a sustentabilidade das contas públicas. Parte do mercado passou a monitorar os possíveis impactos no endividamento, na confiança dos agentes econômicos e no comportamento das taxas de juros. Nesse ambiente de maior sensibilidade, o profissional CPA acompanha as análises de mercado e busca compreender como as políticas fiscais influenciam as expectativas de inflação e o comportamento das taxas de juros.",
      "enunciado": "Nesse cenário, o profissional CPA deve entender que a relação central entre as variáveis apresentadas é que",
      "alternativas": [
        {
          "texto": "o desequilíbrio fiscal eleva o risco-país, deteriora as expectativas de inflação e pressiona as taxas de juros, que tendem a crescer.",
          "correta": true,
          "justificativa": "O desequilíbrio fiscal eleva o risco-país e pressiona os juros e a inflação para cima, reduzindo o espaço para investimentos produtivos e desacelerando o crescimento de forma sustentável."
        },
        {
          "texto": "o aumento das despesas públicas estimula permanentemente a atividade econômica, independentemente da origem do financiamento.",
          "correta": false,
          "justificativa": "O gasto público pode estimular a economia por um período curto, mas sem ajuste fiscal perde eficiência e pressiona o orçamento do próprio Estado."
        },
        {
          "texto": "o déficit fiscal é compensado automaticamente pela política monetária, mantendo neutros os efeitos sobre inflação e juros.",
          "correta": false,
          "justificativa": "A política monetária atua sobre os juros e a liquidez, mas não substitui o ajuste fiscal. Déficits persistentes elevam o risco-país e encarecem o financiamento."
        },
        {
          "texto": "a expansão do gasto público gera, por si só, equilíbrio entre arrecadação e consumo agregado no longo prazo.",
          "correta": false,
          "justificativa": "O equilíbrio das contas depende de uma gestão responsável e de um uso eficiente dos recursos. O aumento do consumo, isoladamente, não garante estabilidade duradoura."
        }
      ],
      "gabaritoComentado": "O desequilíbrio fiscal eleva o risco-país e pressiona os juros e a inflação para cima, reduzindo o espaço para investimentos produtivos e desacelerando o crescimento de forma sustentável."
    },
    {
      "id": "CESG_000094",
      "oficial": true,
      "codigoItem": "000094",
      "topicoPD": "Política fiscal.",
      "codigoPD": "1.2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Marcelo, profissional certificado CPA, foi procurado por um cliente com perfil conservador a moderado que mantém parte relevante de sua carteira em Tesouro Direto, fundos de renda fixa e fundos multimercado. Após notícias de que o governo decidiu não promover ajuste fiscal no curto prazo, em função de frustração de receitas e aumento de despesas, o cliente perguntou ao profissional quais as consequências esperadas desse novo cenário fiscal.",
      "enunciado": "Diante desse contexto, Marcelo deve explicar que essa decisão do governo tende a",
      "alternativas": [
        {
          "texto": "elevar a percepção de risco, pressionar inflação e juros e provocar desvalorização dos títulos de renda fixa já emitidos, afetando negativamente o desempenho de parte da carteira.",
          "correta": true,
          "justificativa": "Quando há percepção de descontrole fiscal, investidores exigem prêmios de risco maiores, o que pressiona as taxas de juros. Com juros mais altos, o preço dos títulos já emitidos tende a cair, afetando negativamente fundos de renda fixa e parte dos multimercados, além de aumentar a inflação esperada e o custo do crédito."
        },
        {
          "texto": "estimular o crescimento econômico sem impacto relevante sobre inflação e juros, favorecendo o desempenho de títulos públicos, de crédito privado e de fundos multimercado.",
          "correta": false,
          "justificativa": "A alternativa pressupõe crescimento sem efeitos colaterais sobre inflação e juros, o que é incompatível com cenários de desequilíbrio fiscal. Historicamente, deterioração das contas públicas aumenta o risco percebido e pressiona os juros."
        },
        {
          "texto": "reduzir a necessidade de financiamento do governo, aumentar a confiança dos investidores pelo aumento dos juros e contribuir para a valorização dos títulos públicos já emitidos.",
          "correta": false,
          "justificativa": "O desequilíbrio fiscal tende a aumentar, e não reduzir, a necessidade de financiamento do governo. Isso implica maior emissão de dívida pública e maior pressão sobre taxas de juros, o que prejudica a valorização dos títulos existentes."
        },
        {
          "texto": "produzir efeitos restritos às contas públicas, sem influência relevante sobre taxas de juros ou sobre os preços de ativos financeiros, com impacto baixo sobre decisões de investimento.",
          "correta": false,
          "justificativa": "A política fiscal afeta expectativas, juros, inflação e preços dos ativos. Não se trata de um fenômeno restrito ao setor público: o comportamento dos mercados financeiros e das carteiras dos clientes é diretamente impactado."
        }
      ],
      "gabaritoComentado": "Quando há percepção de descontrole fiscal, investidores exigem prêmios de risco maiores, o que pressiona as taxas de juros. Com juros mais altos, o preço dos títulos já emitidos tende a cair, afetando negativamente fundos de renda fixa e parte dos multimercados, além de aumentar a inflação esperada e o custo do crédito."
    },
    {
      "id": "CESG_000095",
      "oficial": true,
      "codigoItem": "000095",
      "topicoPD": "Política fiscal.",
      "codigoPD": "1.2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante uma ação de educação financeira promovida pela instituição, Luís, profissional CPA, foi convidado a esclarecer conceitos gerais de economia aos clientes interessados em investimentos. Ao comentar notícias recentes sobre endividamento público, alguns participantes perguntaram como esse tema costuma se relacionar com o comportamento dos juros e da inflação no país.",
      "enunciado": "Diante desse questionamento, Luís explicou de forma objetiva que",
      "alternativas": [
        {
          "texto": "o equilíbrio fiscal reduz o risco e as pressões sobre juros e inflação, criando um ambiente mais favorável ao investimento produtivo.",
          "correta": true,
          "justificativa": "O equilíbrio fiscal reduz o risco-país, estabiliza juros e inflação e amplia a confiança do mercado, favorecendo investimentos produtivos e crescimento sustentável. É a essência da responsabilidade fiscal."
        },
        {
          "texto": "o controle do endividamento público tende a preservar a confiança dos investidores, embora sem efeito direto sobre as condições de crédito privado.",
          "correta": false,
          "justificativa": "Preservar a confiança é importante, mas o impacto não é indireto: a disciplina fiscal atua diretamente sobre juros e risco, influenciando o crédito e o custo de capital."
        },
        {
          "texto": "o aumento das despesas públicas pode estimular a economia no curto prazo, ainda que eleve os riscos fiscais no médio e longo prazo.",
          "correta": false,
          "justificativa": "O estímulo fiscal pode gerar expansão no curto prazo, mas aumenta a dívida e o risco no futuro, exigindo ajustes posteriores. Não representa o princípio de sustentabilidade fiscal."
        },
        {
          "texto": "a ampliação do gasto governamental reduz momentaneamente o desemprego, mas compromete a estabilidade macroeconômica futura.",
          "correta": false,
          "justificativa": "Embora o gasto público possa reduzir o desemprego temporariamente, o foco da questão é o equilíbrio fiscal, que visa estabilidade macroeconômica de forma contínua, e não ações conjunturais."
        }
      ],
      "gabaritoComentado": "O equilíbrio fiscal reduz o risco-país, estabiliza juros e inflação e amplia a confiança do mercado, favorecendo investimentos produtivos e crescimento sustentável. É a essência da responsabilidade fiscal."
    },
    {
      "id": "CESG_000096",
      "oficial": true,
      "codigoItem": "000096",
      "topicoPD": "Política fiscal.",
      "codigoPD": "1.2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Carolina, profissional certificada CPA, foi convidada para uma reunião de orientação a jovens empreendedores que se preocupam com o ambiente macroeconômico. Um dos presentes afirmou que o governo pode sempre aumentar despesas para estimular a economia, sem maiores limites. Outro lembrou que, quando isso acontece de forma recorrente, a dívida pública cresce e a confiança de investidores pode diminuir. Carolina explicou que, no Brasil, existem regras para conter riscos fiscais. Mencionou que a Lei de Responsabilidade Fiscal (LRF) estabelece princípios de gestão responsável, como limites para endividamento e exigência de equilíbrio nas contas. Em seguida, citou que o teto de gastos limita o crescimento real da despesa primária, vinculando-a à inflação passada. O grupo, então, pediu que Carolina resumisse de forma prática o efeito mais provável dessas medidas sobre as contas públicas.",
      "enunciado": "No resumo de Carolina o efeito é",
      "alternativas": [
        {
          "texto": "equilibrar contas públicas ao unir contenção de despesas, limites de dívida e controle da expansão dos gastos primários.",
          "correta": true,
          "justificativa": "Resume a lógica combinada: LRF (limites de dívida e responsabilidade) + teto de gastos (contenção da despesa primária), compondo o arcabouço mais abrangente de sustentabilidade fiscal."
        },
        {
          "texto": "manter disciplina fiscal ao limitar o avanço real das despesas, alinhando gastos à inflação.",
          "correta": false,
          "justificativa": "Destaca a função do teto de gastos, importante para disciplinar despesas, mas não aborda de forma integrada os demais elementos de equilíbrio fiscal."
        },
        {
          "texto": "garantir previsibilidade ao exigir limites de endividamento e maior transparência na execução orçamentária.",
          "correta": false,
          "justificativa": "Refere-se aos pilares da LRF, com foco em limites de endividamento e transparência, mas isoladamente não sintetiza o arcabouço completo."
        },
        {
          "texto": "sustentar confiança ao reforçar regras de alocação de recursos e parâmetros de crescimento compatíveis com arrecadação.",
          "correta": false,
          "justificativa": "A confiança é consequência importante, mas a alternativa não explicita de forma clara os instrumentos normativos que sustentam esse resultado."
        }
      ],
      "gabaritoComentado": "Resume a lógica combinada: LRF (limites de dívida e responsabilidade) + teto de gastos (contenção da despesa primária), compondo o arcabouço mais abrangente de sustentabilidade fiscal."
    },
    {
      "id": "CESG_000097",
      "oficial": true,
      "codigoItem": "000097",
      "topicoPD": "Política fiscal.",
      "codigoPD": "1.2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Ricardo, profissional CPA, atende um jovem que começa a organizar sua vida financeira. Durante a conversa, o cliente relata:\n“No último ano, minha renda não aumentou, alguns serviços ficaram mais caros e ouvi no noticiário que o governo ampliou gastos, elevou impostos e passou a se endividar mais.”\nO cliente pede que Ricardo explique como esse conjunto de medidas pode afetar sua vida financeira neste início de carreira.",
      "enunciado": "Ao analisar a situação, Ricardo deve esclarecer que esse cenário fiscal pode resultar em",
      "alternativas": [
        {
          "texto": "menor renda disponível no curto prazo, aumento de preços e juros, e cautela na escolha de investimentos, especialmente para quem está começando a poupar.",
          "correta": true,
          "justificativa": "O cliente descreve renda estagnada e aumento de preços, compatíveis com um ambiente de maior carga tributária e pressão fiscal. Esse cenário pode reduzir renda disponível, afetar o custo do crédito e exigir mais prudência nas decisões de consumo e investimento, especialmente para quem ainda forma reserva financeira."
        },
        {
          "texto": "aumento do poder de compra no curto prazo, pois a ampliação dos gastos públicos tende a compensar quase automaticamente a elevação de impostos pagos pelo cliente.",
          "correta": false,
          "justificativa": "Embora gastos públicos possam estimular a economia em alguns contextos, não há compensação automática para o indivíduo quando os impostos sobem. Para o cliente, o efeito imediato tende a ser a redução da renda real, não o aumento do poder de compra."
        },
        {
          "texto": "efeitos restritos ao orçamento do governo, sem impacto relevante sobre o custo de vida do cliente ou sobre as decisões de quem está iniciando seus investimentos.",
          "correta": false,
          "justificativa": "A alternativa ignora justamente os efeitos percebidos pelo cliente no contexto de preços mais altos e de renda pressionada, decorrentes da política fiscal e que impactam diretamente suas decisões financeiras."
        },
        {
          "texto": "melhoria das condições de consumo no curto prazo e investimento de clientes em início da carreira, pois a economia é favorecida pelo aumento do dinheiro em circulação.",
          "correta": false,
          "justificativa": "Ampliação de gastos públicos não implica melhoria imediata das condições individuais. Pelo contrário, pode aumentar as incertezas fiscais e pressionar os juros e a inflação, afetando negativamente jovens em início de carreira."
        }
      ],
      "gabaritoComentado": "O cliente descreve renda estagnada e aumento de preços, compatíveis com um ambiente de maior carga tributária e pressão fiscal. Esse cenário pode reduzir renda disponível, afetar o custo do crédito e exigir mais prudência nas decisões de consumo e investimento, especialmente para quem ainda forma reserva financeira."
    },
    {
      "id": "CESG_000156",
      "oficial": true,
      "codigoItem": "000156",
      "topicoPD": "Principais indicadores econômicos e de mercado.",
      "codigoPD": "1.2.6",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Difícil",
      "contexto": "Em um atendimento financeiro, Daniela, profissional certificada pela ANBIMA, conversa com Sílvia, proprietária de uma pequena empresa de eventos. Ela pretende reajustar contratos de prestação de serviços com duração anual. Sílvia ouviu falar sobre IPCA, IGP-M e INPC e percebeu que cada indicador apresentou variações distintas nos últimos anos. Seu objetivo é preservar o equilíbrio entre manter sua competitividade e evitar perda de valor real ao longo do contrato, sem repassar reajustes excessivos aos clientes.",
      "enunciado": "Ao esclarecer a dúvida de Sílvia, Daniela explicou que a escolha do índice deve considerar que",
      "alternativas": [
        {
          "texto": "o IPCA alinha o reajuste ao custo de vida do público que contrata o serviço e tende a equilibrar preço e percepção do cliente em contratos anuais.",
          "correta": true,
          "justificativa": "No caso descrito, a prestadora atende consumidores e busca preservar o poder de compra sem repasses excessivos. O IPCA é a referência do custo de vida ao consumidor, proporcionando coerência entre o reajuste anual, a percepção de preço e o objetivo de estabilidade do contrato."
        },
        {
          "texto": "o IGP-M está mais alinhado a serviços, pois incorpora variações no preço de commodities, captando pressões de insumos e repasses mais rápidos.",
          "correta": false,
          "justificativa": "O IGP-M é sensível a preços no atacado e em commodities. Pode ser adequado quando o contrato reflete custos de insumos industriais. No contexto, a prioridade é o cliente final e o equilíbrio de repasse; assim, o IGP-M pode gerar descolagem entre o reajuste e a percepção do consumidor."
        },
        {
          "texto": "o INPC aproxima o reajuste ao orçamento de famílias de alta renda, adequado quando a clientela tem esse perfil.",
          "correta": false,
          "justificativa": "O INPC mede a inflação de famílias de menor renda e pode ser pertinente se a base de clientes tiver esse perfil. O caso não indica essa característica; escolher o INPC sem evidência desse público pode distorcer o reajuste em relação à cesta de consumo do segmento atendido pela empresa."
        },
        {
          "texto": "a combinação de índices com teto e piso, ou a média entre IPCA e IGP-M, favorece previsibilidade de caixa e a neutralidade intertemporal do ajuste contratual.",
          "correta": false,
          "justificativa": "Cláusulas híbridas (média, teto/piso) elevam a previsibilidade, mas a decisão central do caso é qual índice ancora o reajuste à percepção do cliente. A solução de engenharia contratual não substitui o critério de aderência ao consumo do público-alvo, foco prioritário para Sílvia."
        }
      ],
      "gabaritoComentado": "No caso descrito, a prestadora atende consumidores e busca preservar o poder de compra sem repasses excessivos. O IPCA é a referência do custo de vida ao consumidor, proporcionando coerência entre o reajuste anual, a percepção de preço e o objetivo de estabilidade do contrato."
    },
    {
      "id": "CESG_000157",
      "oficial": true,
      "codigoItem": "000157",
      "topicoPD": "Regulação e infraestrutura de mercado.",
      "codigoPD": "1.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Henrique, profissional certificado ANBIMA, atende uma empresa que mantém relações com vários bancos. Em uma reunião, o diretor financeiro comentou ter acompanhado um caso internacional em que a falência de uma instituição financeira gerou desconfiança generalizada, provocando corridas bancárias, alta nos spreads de crédito e até paralisação temporária no sistema de pagamentos. Preocupado, ele perguntou se algo semelhante poderia acontecer no Brasil e como o Banco Central atuaria para evitar que uma crise localizada se alastrasse para todo o mercado. Henrique explicou que esse tipo de situação está associado a um risco em que problemas isolados podem se propagar devido às interconexões entre bancos, cooperativas e sistemas de liquidação, comprometendo a estabilidade financeira. Nesse cenário, o Banco Central utilizaria medidas prudenciais e de liquidez para conter o contágio.",
      "enunciado": "A explicação descrita por Henrique corresponderia ao risco",
      "alternativas": [
        {
          "texto": "sistêmico.",
          "correta": true,
          "justificativa": "O risco sistêmico ocorre quando a falência ou crise de uma instituição se espalha para outras, afetando liquidez, crédito, pagamentos e a confiança no sistema como um todo. Foi exatamente o fenômeno descrito por Henrique."
        },
        {
          "texto": "de crédito.",
          "correta": false,
          "justificativa": "Incorreto. O risco de crédito está ligado à incapacidade de um tomador de honrar dívidas com seu credor. Pode gerar perdas localizadas, mas não desencadeia, por si só, um colapso de liquidez em todo o sistema."
        },
        {
          "texto": "de mercado.",
          "correta": false,
          "justificativa": "Incorreto. O risco de mercado decorre de choques em preços de ativos (juros, câmbio, ações), que podem provocar volatilidade e chamadas de margem. Entretanto, as infraestruturas seguem operando, sem ameaça imediata à estabilidade do sistema financeiro."
        },
        {
          "texto": "operacional.",
          "correta": false,
          "justificativa": "Incorreto. O risco operacional envolve falhas em sistemas, processos ou pessoas, como a paralisação temporária de TEDs ou Pix em um banco específico. Afeta clientes daquela instituição, mas não compromete o funcionamento do SPB ou do Selic em todo o mercado."
        }
      ],
      "gabaritoComentado": "O risco sistêmico ocorre quando a falência ou crise de uma instituição se espalha para outras, afetando liquidez, crédito, pagamentos e a confiança no sistema como um todo. Foi exatamente o fenômeno descrito por Henrique."
    },
    {
      "id": "CESG_000231",
      "oficial": true,
      "codigoItem": "000231",
      "topicoPD": "Política fiscal.",
      "codigoPD": "1.2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Fernando, profissional CPA, participa de uma oficina de educação financeira em que o tema central é a política fiscal e seus impactos no dia a dia das famílias. Um participante observou que o aumento da dívida pública não teria grandes consequências, já que o governo sempre consegue se financiar. Outro fez um contraponto de que déficits recorrentes podem pressionar a inflação e os juros. Um terceiro disse não ter clareza sobre as relações entre política fiscal, dívida pública, inflação, taxa de juros e investimentos. Os participantes pediram, então, uma síntese sobre o papel da política fiscal, considerando esses elementos.",
      "enunciado": "Fernando explicou que o papel da política fiscal é",
      "alternativas": [
        {
          "texto": "reduzir a percepção de risco por meio do equilíbrio fiscal, favorecendo juros mais baixos e estimulando investimentos produtivos.",
          "correta": true,
          "justificativa": "Reflete de maneira sintética a lógica apresentada: equilíbrio fiscal → menor risco → juros mais baixos → estímulo ao investimento. É a formulação mais abrangente e coerente com o contexto."
        },
        {
          "texto": "contribuir para conter a inflação, diminuir prêmios de risco e criar um ambiente mais favorável ao investimento privado.",
          "correta": false,
          "justificativa": "Correta em parte, pois dívida alta eleva risco e juros, mas a resposta está incompleta ao não mencionar os efeitos sobre inflação e equilíbrio fiscal."
        },
        {
          "texto": "recompor a arrecadação via ajustes tributários, no contexto da trajetória de dívida ascendente, estabilizando os juros e a credibilidade.",
          "correta": false,
          "justificativa": "Falha de causalidade: elevar tributos sem ajuste do gasto não garante queda de prêmios de risco nem de juros se a trajetória da dívida permanecer piorando; depende de expectativas, composição do ajuste e credibilidade."
        },
        {
          "texto": "expandir os índices de financiamento público para impulsionar a demanda e o crescimento do investimento privado.",
          "correta": false,
          "justificativa": "Generalização indevida: gasto financiado por dívida pode até “aquecer” a demanda, mas tende a elevar prêmio de risco e pressionar juros (crowding-out), não os reduzir; o “crowding-in” não é regra e requer condições específicas."
        }
      ],
      "gabaritoComentado": "Reflete de maneira sintética a lógica apresentada: equilíbrio fiscal → menor risco → juros mais baixos → estímulo ao investimento. É a formulação mais abrangente e coerente com o contexto."
    },
    {
      "id": "CESG_000232",
      "oficial": true,
      "codigoItem": "000232",
      "topicoPD": "Regulação e infraestrutura de mercado.",
      "codigoPD": "1.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante um atendimento, um cliente pessoa física informou ao profissional CPA que pretende investir em ações de empresas recém-listadas na bolsa. Ele comentou ter visto que algumas companhias optam por listar suas ações no Novo Mercado da B3, e perguntou se isso traz alguma diferença prática para quem compra ações dessas empresas, especialmente no que diz respeito aos seus direitos como acionista.",
      "enunciado": "Diante da dúvida apresentada pelo cliente, o profissional CPA deve esclarecer que empresas listadas no Novo Mercado se comprometem a",
      "alternativas": [
        {
          "texto": "manter capital composto exclusivamente por ações ordinárias, assegurando direitos de voto iguais e maior proteção aos acionistas minoritários.",
          "correta": true,
          "justificativa": "No Novo Mercado, as empresas devem ter somente ações ordinárias, o que garante igualdade de direitos políticos entre os acionistas e fortalece a proteção aos minoritários, aspecto relevante para o investidor pessoa física."
        },
        {
          "texto": "emitir ações preferenciais para ampliar a atratividade dos dividendos para os acionistas minoritários, preservando o controle acionário dos sócios fundadores.",
          "correta": false,
          "justificativa": "A emissão de ações preferenciais não é permitida no Novo Mercado, pois esse segmento exige estrutura acionária baseada exclusivamente em ações ordinárias."
        },
        {
          "texto": "adotar apenas as regras gerais da bolsa, sem exigências adicionais relacionadas à estrutura acionária ou aos direitos societários.",
          "correta": false,
          "justificativa": "O Novo Mercado impõe compromissos adicionais de governança em relação às regras gerais da B3, incluindo exigências sobre estrutura acionária e direitos dos investidores."
        },
        {
          "texto": "priorizar ajustes na divulgação de informações financeiras, sem alterações relevantes nos direitos políticos dos acionistas minoritários.",
          "correta": false,
          "justificativa": "As exigências do Novo Mercado vão além da divulgação de informações financeiras e impactam diretamente os direitos societários e a estrutura de capital."
        }
      ],
      "gabaritoComentado": "No Novo Mercado, as empresas devem ter somente ações ordinárias, o que garante igualdade de direitos políticos entre os acionistas e fortalece a proteção aos minoritários, aspecto relevante para o investidor pessoa física."
    },
    {
      "id": "CESG_000233",
      "oficial": true,
      "codigoItem": "000233",
      "topicoPD": "Capitalização simples versus capitalização composta: conceito, desconto, equivalência e proporcionalidade.",
      "codigoPD": "1.3.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Numa reunião de educação financeira para empresários, Marina, profissional CPA, foi convidada a esclarecer dúvidas sobre empréstimos e mútuos. Um participante relatou que sua empresa contratou um empréstimo a ser pago em 12 meses, com juros compostos. Outro perguntou se o impacto maior sobre o valor final vinha da taxa de juros ou do tempo de alocação. Marina explicou que sistemas como Price ou SAC alteram a forma como amortização e juros são distribuídos ao longo do prazo, afetando a previsibilidade de caixa e o custo total.",
      "enunciado": "Para facilitar o entendimento dos empresários, Marina esclareceu que",
      "alternativas": [
        {
          "texto": "a capitalização composta amplia o efeito do tempo sobre os juros, e que o fluxo define como o custo é distribuído nas parcelas.",
          "correta": true,
          "justificativa": "No regime composto, há juros sobre juros, o que amplifica o efeito do tempo. O fluxo de pagamentos (p. ex., Price vs. SAC) redistribui amortização e juros nas parcelas, alterando o saldo médio devedor, a trajetória do custo e a previsibilidade do caixa. A assertiva capta a interação taxa × tempo × fluxo."
        },
        {
          "texto": "a taxa de juros define o custo da operação, sendo o tempo e o fluxo fatores sem impacto relevante no financiamento.",
          "correta": false,
          "justificativa": "Afirmar que a taxa sozinha define o custo ignora que, em composição, tempo e frequência de capitalização elevam o montante. Além disso, o fluxo modifica o saldo médio sobre o qual os juros incidem (Price amortiza menos no início; SAC, mais). Logo, tempo e fluxo não são secundários: afetam custo e perfil da dívida."
        },
        {
          "texto": "o tempo não altera o valor total da dívida, que depende da taxa de juros e do regime de capitalização adotado.",
          "correta": false,
          "justificativa": "Dizer que o tempo não altera o valor total contraria a capitalização composta: PV·(1+i)^n mostra que n (duração) é determinante; alongar prazo eleva juros acumulados. Mesmo com mesma taxa, prazos maiores aumentam o custo. Só em juros simples o efeito é linear e limitado, o que não é o caso típico de empréstimos."
        },
        {
          "texto": "a capitalização composta intensifica o efeito da taxa, enquanto o tempo e o fluxo de pagamentos mantêm o custo total, mas redistribuem as parcelas.",
          "correta": false,
          "justificativa": "A ideia de que tempo e fluxo “apenas redistribuem” sem afetar o custo total é falsa. O fluxo altera o saldo devedor ao longo do tempo: em Price, amortização inicial menor → mais juros; em SAC, amortização maior no início → menos juros no total. Assim, tempo e fluxo impactam custo e trajetória da dívida."
        }
      ],
      "gabaritoComentado": "No regime composto, há juros sobre juros, o que amplifica o efeito do tempo. O fluxo de pagamentos (p. ex., Price vs. SAC) redistribui amortização e juros nas parcelas, alterando o saldo médio devedor, a trajetória do custo e a previsibilidade do caixa. A assertiva capta a interação taxa × tempo × fluxo."
    },
    {
      "id": "CESG_000289",
      "oficial": true,
      "codigoItem": "000289",
      "topicoPD": "Política monetária.",
      "codigoPD": "1.2.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Juliana é uma profissional certificada Anbima e costuma explicar a seus clientes como as decisões do Banco Central podem impactar as taxas de juros e o mercado financeiro. Em uma reunião, um cliente pessoa jurídica comenta que ouviu no noticiário que o Banco Central realizou uma operação compromissada. O motivo da atuação da autoridade monetária foi reduzir a quantidade de moeda em circulação, com o objetivo de conter pressões sobre a taxa de juros de curto prazo. Juliana explica aos clientes que essas intervenções do Banco Central fazem parte das operações de mercado aberto, um dos instrumentos de política monetária utilizado para regular a liquidez do sistema financeiro.",
      "enunciado": "No caso citado, Juliana informou ao cliente que a operação realizada pelo Banco Central seria",
      "alternativas": [
        {
          "texto": "uma venda de títulos públicos com compromisso de recompra, em data e preço pré-pactuados.",
          "correta": true,
          "justificativa": "É a compromissada de venda: o agente (ex.: BC ou banco) vende títulos hoje e se compromete a recomprar depois. Retira reservas do sistema (enxuga liquidez). Remuneração vem da diferença de preços; há transferência de propriedade, haircut e ajuste diário."
        },
        {
          "texto": "uma compra de títulos públicos com compromisso de revenda, em data e preço pré-pactuados.",
          "correta": false,
          "justificativa": "Define a compromissada de compra, que injeta liquidez (a contraparte recebe reservas hoje). Embora seja um repo válido, não é a modalidade usada para drenar liquidez; é a operação simétrica, de suprimento."
        },
        {
          "texto": "um empréstimo de títulos públicos com compromisso de pagamento de juros, em data e preço pré-pactuados.",
          "correta": false,
          "justificativa": "Isso descreve securities lending (aluguel de títulos), não repo. No empréstimo, há taxa de aluguel e, em geral, não há compra e venda com recompra a preço pactuado. Na compromissada, há operações de compra/venda e diferença de preços como remuneração."
        },
        {
          "texto": "uma venda de títulos públicos com opção compra, em data e preço pré-pactuados.",
          "correta": false,
          "justificativa": "Uma opção confere direito, não obrigação de recomprar. A compromissada exige compromisso firme de recompra/revenda (contrato a termo, não opcionalidade). Inserir uma opção altera o perfil de risco e não caracteriza operação compromissada."
        }
      ],
      "gabaritoComentado": "É a compromissada de venda: o agente (ex.: BC ou banco) vende títulos hoje e se compromete a recomprar depois. Retira reservas do sistema (enxuga liquidez). Remuneração vem da diferença de preços; há transferência de propriedade, haircut e ajuste diário."
    },
    {
      "id": "CESG_000290",
      "oficial": true,
      "codigoItem": "000290",
      "topicoPD": "Regulação e infraestrutura de mercado.",
      "codigoPD": "1.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante um atendimento, o profissional CPA Roberto percebeu que seu cliente José estava preocupado. José contou que tinha acabado de ler uma reportagem sobre os prejuízos sofridos por investidores de um fundo gerido por uma instituição financeira que entrou em liquidação extrajudicial. José pediu para Roberto explicar qual seria a melhor forma de avaliar a transparência das informações dos fundos de investimento e também gostaria de saber como analisar a conduta das instituições que distribuem esses fundos. Roberto disse que um bom começo é procurar saber se a instituição é filiada à ANBIMA e se adota o Código de Regulação e Melhores Práticas da ANBIMA, que é obrigatório para instituições filiadas ou que aderirem formalmente.",
      "enunciado": "Roberto explicou que, além da regulação oficial, há normas de autorregulação que impactam diretamente a confiança e a clareza no relacionamento com investidores. E que um exemplo de norma presente no Código é",
      "alternativas": [
        {
          "texto": "definir parâmetros de conduta que asseguram concorrência leal, padronização de procedimentos e maior qualidade das informações prestadas sobre fundos de investimento.",
          "correta": true,
          "justificativa": "O Código da ANBIMA visa complementar a regulação oficial, estabelecendo padrões de conduta e transparência que promovem concorrência leal, padronização de processos e melhor qualidade das informações, fortalecendo a confiança de pessoas físicas e jurídicas no mercado."
        },
        {
          "texto": "reforçar principalmente os padrões fiduciários e a ética dos gestores, deixando a padronização de informações e a publicidade a critério de cada instituição.",
          "correta": false,
          "justificativa": "O código da ANBIMA é amplo e estabelece, sim, regras para padronização de informações e publicidade, não deixando esses pontos a critério de cada instituição. A alternativa erra ao limitar seu escopo."
        },
        {
          "texto": "orientar governança e compliance para elevar a integridade, sem abranger concorrência leal, padronização de procedimentos e qualidade das informações ao investidor.",
          "correta": false,
          "justificativa": "Governança/compliance são partes relevantes, mas não esgotam o objetivo principal, que inclui também concorrência leal, padronização e qualidade/disponibilidade de informações."
        },
        {
          "texto": "padronizar comunicação e divulgação para dar clareza ao investidor, sem cobrir conduta de mercado, concorrência leal e procedimentos operacionais previstos no Código.",
          "correta": false,
          "justificativa": "Reduz o escopo a comunicação/divulgação. O objetivo principal do Código é mais amplo: inclui conduta, concorrência leal e padronização operacional — não apenas linguagem e formatos."
        }
      ],
      "gabaritoComentado": "O Código da ANBIMA visa complementar a regulação oficial, estabelecendo padrões de conduta e transparência que promovem concorrência leal, padronização de processos e melhor qualidade das informações, fortalecendo a confiança de pessoas físicas e jurídicas no mercado."
    },
    {
      "id": "CESG_000291",
      "oficial": true,
      "codigoItem": "000291",
      "topicoPD": "Regulação e infraestrutura de mercado.",
      "codigoPD": "1.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante uma reunião com clientes, surgem dúvidas sobre os riscos recentes no mercado internacional e a segurança das instituições financeiras no Brasil. Alguns participantes manifestam preocupação com a possibilidade de instabilidade no crédito e no funcionamento dos bancos.",
      "enunciado": "Nesse atendimento, o profissional certificado ANBIMA deve explicar aos participantes da reunião que o Bacen",
      "alternativas": [
        {
          "texto": "adota normas prudenciais, regula a liquidez, promove medidas de estabilidade sistêmica e sustenta a confiança no sistema.",
          "correta": true,
          "justificativa": "No atendimento ao cliente, o profissional deve explicar que o BACEN atua com normas prudenciais, regulação da liquidez e medidas de estabilidade sistêmica, reforçando que sua função é preservar a confiança e a solidez do Sistema Financeiro Nacional em momentos de crise."
        },
        {
          "texto": "conduz políticas de crédito setoriais, definindo volumes e condições de financiamento de acordo com objetivos do governo.",
          "correta": false,
          "justificativa": "A condução de políticas de crédito setoriais é papel do governo federal, e não do BACEN. Por isso, o profissional não poderia dar essa resposta, pois estaria transmitindo informação incorreta ao cliente."
        },
        {
          "texto": "padroniza a remuneração de ativos, estabelecendo retornos equivalentes para títulos negociados no mercado secundário.",
          "correta": false,
          "justificativa": "O BACEN não padroniza remuneração de ativos no mercado secundário; sua atuação se dá por instrumentos de política monetária e de liquidez. Responder isso ao cliente significaria distorcer a função da autoridade monetária."
        },
        {
          "texto": "centraliza a intermediação financeira, assumindo a concessão de crédito e investimentos de longo prazo no lugar dos bancos comerciais.",
          "correta": false,
          "justificativa": "O BACEN não substitui os bancos comerciais na concessão de crédito. Caso o profissional afirmasse isso, induziria o cliente ao erro, já que a função do Banco Central é regulatória e supervisora, não de intermediação direta."
        }
      ],
      "gabaritoComentado": "No atendimento ao cliente, o profissional deve explicar que o BACEN atua com normas prudenciais, regulação da liquidez e medidas de estabilidade sistêmica, reforçando que sua função é preservar a confiança e a solidez do Sistema Financeiro Nacional em momentos de crise."
    },
    {
      "id": "M1_Q11",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "1.1.1 e 1.1.2",
      "nivelCognitivo": "Compreensão",
      "dificuldade": "Médio",
      "contexto": "Em um programa de integração para novos profissionais certificados CPA de um conglomerado financeiro, o instrutor apresenta quatro demandas regulatórias do dia a dia: (I) definição da meta anual de inflação do país; (II) fiscalização de uma oferta pública de debêntures e de fundos de investimento; (III) supervisão de uma Entidade Aberta de Previdência Complementar (EAPC) que comercializa planos PGBL e VGBL; e (IV) fiscalização de um fundo de pensão (EFPC) patrocinado por uma empresa estatal.",
      "enunciado": "Assinale a alternativa que relaciona corretamente e na respectiva ordem (I, II, III e IV) os órgãos do Sistema Financeiro Nacional responsáveis por cada atribuição:",
      "alternativas": [
        {
          "texto": "CMN, CVM, SUSEP e PREVIC.",
          "correta": true
        },
        {
          "texto": "Bacen, CVM, CNSP e CNPC.",
          "correta": false
        },
        {
          "texto": "CMN, Bacen, PREVIC e SUSEP.",
          "correta": false
        },
        {
          "texto": "Copom, CVM, SUSEP e CNPC.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Gabarito (A): (I) Quem DEFINE a meta de inflação é o Conselho Monetário Nacional (CMN), órgão normativo máximo (o Bacen/Copom executa a política monetária para cumpri-la); (II) debêntures e cotas de fundos são valores mobiliários fiscalizados pela CVM; (III) previdência complementar aberta (EAPC) é supervisionada pela SUSEP (e normatizada pelo CNSP); (IV) previdência complementar fechada (EFPC / fundos de pensão) é supervisionada pela PREVIC (e normatizada pelo CNPC)."
    },
    {
      "id": "M1_Q12",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "1.3.4.1",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Eduardo investiu R$ 100.000,00 em um título de renda fixa que apresentou rentabilidade nominal líquida de 15,5% ao final de 12 meses. Nesse mesmo período, a inflação oficial medida pelo IPCA foi de 5,0%. Durante a reunião de revisão anual da carteira, Eduardo afirmou ao seu gerente CPA que seu ganho real de poder de compra foi de exatamente 10,5% no ano.",
      "enunciado": "Utilizando a Fórmula de Fisher, o profissional CPA deve esclarecer a Eduardo que a taxa real de juros obtida na aplicação foi, na verdade, de:",
      "alternativas": [
        {
          "texto": "10,00%, pois a taxa real é obtida dividindo-se o fator de capitalização nominal (1,155) pelo fator de inflação (1,05), e não pela subtração direta.",
          "correta": true
        },
        {
          "texto": "10,50%, confirmando o cálculo do cliente, uma vez que em períodos de 1 ano a taxa real equivale à diferença linear entre taxa nominal e inflação.",
          "correta": false
        },
        {
          "texto": "11,02%, pois o efeito composto da inflação amplia o ganho real quando a taxa nominal supera dois dígitos anuais.",
          "correta": false
        },
        {
          "texto": "9,52%, pois deve-se descontar a inflação diretamente sobre o capital inicial antes de aplicar a taxa nominal contratada.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Gabarito (A): Pela Fórmula de Fisher, (1 + i_nominal) = (1 + r_real) * (1 + inflação). Logo, (1 + r) = 1,155 / 1,05 = 1,10 -> r = 1,10 - 1 = 0,10 = 10,00%. A subtração simples (15,5% - 5,0% = 10,5%) é apenas uma aproximação grosseira e constitui a pegadinha clássica das provas da ANBIMA."
    },
    {
      "id": "M1_Q13",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "1.3.7",
      "nivelCognitivo": "Análise",
      "dificuldade": "Médio",
      "contexto": "Mariana pretende contratar um financiamento imobiliário de R$ 400.000,00 pelo prazo de 240 meses e recebeu simulações do banco com a mesma taxa de juros efetiva em dois sistemas de amortização: Sistema de Amortização Constante (SAC) e Sistema Francês de Amortização (Tabela Price). Ela possui folga no orçamento atual, mas planeja reduzir sua carga de trabalho nos próximos anos e deseja pagar o menor montante total de juros ao longo do contrato.",
      "enunciado": "Diante dos objetivos de Mariana, o profissional CPA deve explicar que a opção mais adequada é o sistema:",
      "alternativas": [
        {
          "texto": "SAC, no qual a cota de amortização é constante, o saldo devedor cai mais rapidamente e as prestações são decrescentes ao longo do tempo, resultando em menor pagamento total de juros.",
          "correta": true
        },
        {
          "texto": "Price, no qual a amortização é constante e as prestações são fixas do início ao fim, reduzindo o custo efetivo total da operação.",
          "correta": false
        },
        {
          "texto": "SAC, no qual as prestações são fixas durante todo o prazo e a parcela de juros cresce mensalmente para compensar a inflação.",
          "correta": false
        },
        {
          "texto": "Price, no qual as prestações começam mais altas e decrescem ao longo do tempo, proporcionando maior abatimento do saldo devedor nas primeiras parcelas.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Gabarito (A): No Sistema SAC, a amortização do principal é constante em todas as parcelas (R$ 400 mil / 240). Como o saldo devedor diminui mais rápido desde o primeiro mês, os juros (que incidem sobre o saldo devedor) são decrescentes, fazendo com que a prestação (Amortização + Juros) comece mais alta e seja decrescente ao longo do tempo, gerando menor desembolso total de juros que na Tabela Price (onde a prestação é constante e a amortização é crescente)."
    },
    {
      "id": "M1_Q14",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "1.3.3.5",
      "nivelCognitivo": "Análise",
      "dificuldade": "Difícil",
      "contexto": "Um gestor analisa dois projetos corporativos e dois títulos de renda fixa para compor a reserva financeira de uma empresa cujo Custo Médio Ponderado de Capital (CMPC / TMA) é de 12% ao ano. O Projeto Alfa apresenta Taxa Interna de Retorno (TIR) de 15% a.a., enquanto o Projeto Beta apresenta TIR de 9% a.a. Já para a carteira de títulos prefixados, o Título X possui Duration de Macaulay de 1,8 ano e o Título Y possui Duration de 4,5 anos.",
      "enunciado": "Com base nos fundamentos de matemática financeira, conclui-se corretamente que:",
      "alternativas": [
        {
          "texto": "o Projeto Alfa possui Valor Presente Líquido (VPL) positivo a 12% a.a., e o Título Y sofrerá maior oscilação de preço que o Título X caso ocorra uma mudança inesperada na curva de juros.",
          "correta": true
        },
        {
          "texto": "o Projeto Beta possui VPL positivo por ter TIR inferior ao CMPC, e o Título X é mais sensível ao risco de mercado por ter menor Duration.",
          "correta": false
        },
        {
          "texto": "ambos os projetos possuem VPL igual a zero quando descontados a 12% a.a., e a Duration mede exclusivamente o risco de crédito do emissor.",
          "correta": false
        },
        {
          "texto": "o Projeto Alfa deve ser rejeitado por apresentar TIR superior ao custo de oportunidade, e o Título Y tem menor volatilidade de marcação a mercado.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Gabarito (A): Sempre que a TIR (15% a.a.) é maior que a TMA/CMPC (12% a.a.), o Valor Presente Líquido (VPL) é positivo (VPL > 0), tornando o Projeto Alfa viável (enquanto o Projeto Beta tem VPL < 0). Além disso, a Duration mede a sensibilidade (elasticidade) do preço de um título de renda fixa às variações nas taxas de juros: quanto maior a Duration (Título Y = 4,5 anos vs. Título X = 1,8 ano), maior o impacto da marcação a mercado."
    },
    {
      "id": "M1_Q15",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "1.4.10.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante a análise cadastral na corretora, o profissional CPA atende três clientes pessoas físicas que assinaram os respectivos termos de declaração exigidos pelo regulador: (1) Carlos possui R$ 4 milhões em imóveis alugados e R$ 600 mil aplicados em CDB e fundos, sem certificações financeiras; (2) Fernanda possui R$ 1,5 milhão aplicados em títulos públicos e fundos de investimento; e (3) Roberto possui R$ 12 milhões aplicados em carteira diversificada de valores mobiliários.",
      "enunciado": "Segundo os critérios da Resolução CVM 30, Carlos, Fernanda e Roberto são classificados, respectivamente, como investidores:",
      "alternativas": [
        {
          "texto": "Varejo (não qualificado), Investidora Qualificada e Investidor Profissional.",
          "correta": true
        },
        {
          "texto": "Investidor Qualificado, Investidora Qualificada e Investidor Profissional.",
          "correta": false
        },
        {
          "texto": "Varejo (não qualificado), Investidora Profissional e Investidor Qualificado.",
          "correta": false
        },
        {
          "texto": "Investidor Profissional, Investidora Qualificada e Investidor Profissional.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Gabarito (A): Pela Resolução CVM 30, o enquadramento patrimonial considera apenas INVESTIMENTOS FINANCEIROS (bens imóveis físicos não entram no cômputo). Portanto: (1) Carlos tem apenas R$ 600 mil em aplicações financeiras e não possui certificação técnica, sendo investidor de Varejo (geral); (2) Fernanda possui >= R$ 1 milhão em investimentos financeiros + termo assinado, sendo Investidora Qualificada; e (3) Roberto possui >= R$ 10 milhões em investimentos financeiros + termo, sendo Investidor Profissional."
    },
    {
      "id": "M1_Q16",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "1.4.3.2 e 1.4.4",
      "nivelCognitivo": "Compreensão",
      "dificuldade": "Difícil",
      "contexto": "Em um seminário sobre prevenção ao risco sistêmico e estabilidade da infraestrutura do mercado financeiro brasileiro, dois mecanismos foram destacados: (I) a atuação das Câmaras de Compensação e Liquidação (Clearing Houses) que operam como Contrapartes Centrais (CCP) na B3; e (II) as exigências regulatórias do Acordo de Basileia III impostas pelo Banco Central aos bancos.",
      "enunciado": "Sobre o funcionamento desses dois pilares de segurança do mercado, é correto afirmar que:",
      "alternativas": [
        {
          "texto": "a Contraparte Central interpõe-se entre comprador e vendedor para mitigar o risco de liquidação (contraparte), enquanto Basileia III exige capital mínimo ponderado pelo risco (RWA) e indicadores de liquidez (LCR e NSFR) para conter a alavancagem bancária.",
          "correta": true
        },
        {
          "texto": "a Contraparte Central garante a rentabilidade positiva das ações negociadas em bolsa, enquanto Basileia III elimina o risco de mercado ao fixar a alavancagem dos bancos em 100% do depósito compulsório.",
          "correta": false
        },
        {
          "texto": "a Contraparte Central atua apenas como entidade registradora informacional sem assumir risco de liquidação, enquanto Basileia III restringe-se ao cálculo do risco operacional das corretoras.",
          "correta": false
        },
        {
          "texto": "a Contraparte Central custodia exclusivamente títulos públicos federais do Tesouro Direto, enquanto Basileia III substitui a cobertura do Fundo Garantidor de Créditos (FGC) em bancos múltiplos.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Gabarito (A): As Clearing Houses com função de Contraparte Central (CCP, como a Câmara B3) tornam-se a 'compradora para todo vendedor e vendedora para todo comprador', exigindo margens de garantia e mitigando o risco de contraparte/liquidação. Já o Acordo de Basileia III aperfeiçoou a solvência bancária ao exigir Patrimônio de Referência compatível com os riscos de crédito, mercado e operacional (RWA), colchões adicionais de capital e os índices de liquidez de curto prazo (LCR - 30 dias) e longo prazo (NSFR - 1 ano)."
    }
  ]
};
