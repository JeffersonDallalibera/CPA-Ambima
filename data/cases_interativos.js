// ============================================================================
// ANBIMA CPA — QUESTÕES INTERATIVAS (ÁRVORES DE DECISÃO / CASES DE ATENDIMENTO)
// ============================================================================
// Na nova prova da CPA (50 questões), 10 questões (20% do exame) são baseadas
// em árvores de decisão e condução de atendimento consultivo passo a passo.
// Cada case possui 3 etapas encadeadas com feedback técnico e regulatório.
// ============================================================================

window.CPA_CASES = [
  // ==========================================================================
  // CASE 1 (Módulo 2 + 3): Planejamento de Aposentadoria, PGBL vs VGBL e Tributação
  // ==========================================================================
  {
    id: "CASE_1",
    titulo: "Planejamento de Aposentadoria do Casal: PGBL vs. VGBL e Regime Tributário",
    modulo: "Módulos 2 e 3",
    personagem: "Dra. Helena (42 anos, médica CLT e plantonista) e Marcos (44 anos, arquiteto autônomo)",
    cenarioInicial:
      "A Dra. Helena e seu marido Marcos procuram você na agência para estruturar o planejamento de aposentadoria do casal para um horizonte de 18 anos. Helena possui renda bruta anual tributável de R$ 320.000, contribui regularmente para o INSS pelo teto e entrega a Declaração de Ajuste Anual do IRPF pelo modelo Completo. Marcos tem renda anual variável em torno de R$ 140.000, não contribui para o INSS nem para regime próprio de previdência, e utiliza o modelo Simplificado do IRPF por ter poucas despesas dedutíveis.",
    etapas: [
      {
        ordem: 1,
        falaCliente:
          "Queremos começar a aportar todo mês em previdência privada, aproveitando ao máximo o benefício fiscal de deduzir até 12% da renda no Imposto de Renda. Podemos contratar um PGBL para cada um de nós?",
        pergunta: "Qual deve ser a sua primeira orientação técnica como profissional CPA?",
        opcoes: [
          {
            texto:
              "Recomendar o PGBL (até o limite de 12% da renda bruta tributável anual) apenas para a Dra. Helena, pois ela contribui para o INSS e faz declaração completa; para Marcos, indicar o VGBL (ou explicar que para usar PGBL ele precisaria passar a contribuir ao INSS e avaliar se a declaração completa compensa).",
            correta: true,
            feedback:
              "Perfeito! O benefício fiscal de diferimento até 12% da renda bruta tributável no PGBL exige cumulativamente: (1) declaração pelo formulário completo e (2) contribuição para o regime oficial de previdência (INSS ou RPPS). Sem esses requisitos, o PGBL gera bitributação punitiva sobre o capital aportado no resgate, sendo o VGBL o veículo adequado para quem declara no simplificado."
          },
          {
            texto:
              "Confirmar a contratação de dois planos PGBL, pois ambos possuem renda tributável comprovada e o benefício de dedução de 12% independe do modelo de declaração de Imposto de Renda escolhido.",
            correta: false,
            feedback:
              "Incorreto. Contratar PGBL para quem utiliza a declaração simplificada (desconto padrão de 20%) e não contribui ao INSS impede o abatimento na base de cálculo anual e faz com que o cliente pague IR sobre todo o montante (principal + rendimentos) no momento do resgate."
          },
          {
            texto:
              "Sugerir que ambos contratem apenas o VGBL, argumentando que o PGBL cobra imposto sobre o patrimônio total e, portanto, é sempre financeiramente desvantajoso no longo prazo.",
            correta: false,
            feedback:
              "Incorreto. Para a Dra. Helena, que está na alíquota marginal de 27,5% do IR, declara no modelo completo e contribui ao INSS, o PGBL permite diferir o imposto hoje e reinvestir a restituição ao longo de 18 anos, sendo altamente vantajoso quando combinado à tabela regressiva."
          }
        ]
      },
      {
        ordem: 2,
        falaCliente:
          "Entendemos a diferença entre PGBL e VGBL! Agora estamos em dúvida sobre a tabela de tributação: nosso horizonte é de 18 anos para a aposentadoria, mas Marcos quer deixar uma pequena parcela separada em um plano com liquidez para talvez trocar de carro daqui a 3 anos.",
        pergunta: "Como você deve orientar a escolha entre o Regime Progressivo (Compensável) e o Regime Regressivo (Definitivo)?",
        opcoes: [
          {
            texto:
              "Recomendar o Regime Regressivo para ambos os objetivos, pois a alíquota cai automaticamente para 10% após 3 anos de acumulação.",
            correta: false,
            feedback:
              "Incorreto. Na tabela regressiva (critério PEPS), o prazo de até 2 anos é tributado em 35% e de 2 a 4 anos em 30% (exclusivo na fonte). A alíquota mínima de 10% só é atingida após 10 anos de permanência de cada aporte."
          },
          {
            texto:
              "Para a reserva de aposentadoria (18 anos), indicar o Regime Regressivo (alíquota cai até 10% após 10 anos, definitivo na fonte); já para o objetivo de curto prazo (3 anos), alertar que a previdência no regime regressivo cobraria 30% de IR, sendo mais adequado usar outro veículo de renda fixa ou, se em previdência, o Regime Progressivo.",
            correta: true,
            feedback:
              "Correto! Pela Lei 14.803/2024, inclusive, o participante pode optar pelo regime tributário até o momento do primeiro resgate ou concessão do benefício. Para horizontes acima de 10 anos, o regime regressivo atinge a alíquota exclusiva de 10% (muito inferior aos 27,5% da tabela progressiva). Já para resgates em 3 anos, a regressiva penaliza com 30%."
          },
          {
            texto:
              "Indicar o Regime Progressivo para o horizonte de 18 anos da Dra. Helena, pois no resgate total ela pagará apenas 15% de imposto definitivo na fonte.",
            correta: false,
            feedback:
              "Incorreto. No regime progressivo, a retenção de 15% no resgate é apenas uma antecipação na fonte; na Declaração Anual de Ajuste, o valor se soma às demais rendas tributáveis da médica e sofrerá ajuste até a alíquota de 27,5%."
          }
        ]
      },
      {
        ordem: 3,
        falaCliente:
          "Excelente! Uma última dúvida: se a Dra. Helena decidir aportar 18% da renda bruta anual dela na previdência privada este ano, como devemos alocar esse percentual?",
        pergunta: "Qual é a recomendação técnica ótima para alocar os 18% de poupança previdenciária da Dra. Helena?",
        opcoes: [
          {
            texto:
              "Alocar até 12% da renda bruta tributável anual no PGBL (teto legal de dedução fiscal) e direcionar os 6% excedentes para um plano VGBL (ou outro ativo de acumulação), evitando que o excedente sofra tributação sobre o principal sem ter gerado abatimento no IR.",
            correta: true,
            feedback:
              "Conduta exemplar! Tudo o que ultrapassa o limite de 12% da renda bruta anual tributável aportado em PGBL perde o benefício de dedução na declaração anual, mas continua sofrendo incidência de IR sobre o valor total (principal + juros) na saída. Por isso, o excedente aos 12% deve ir para o VGBL."
          },
          {
            texto:
              "Colocar os 18% integralmente no PGBL, pois os 6% excedentes podem ser transportados para abater o Imposto de Renda do exercício fiscal seguinte.",
            correta: false,
            feedback:
              "Incorreto. A legislação tributária brasileira não permite carregar (carry-forward) contribuições excedentes a 12% da renda bruta de um ano-calendário para deduzir no ano seguinte."
          },
          {
            texto:
              "Dividir igualmente 9% no PGBL da Dra. Helena e 9% em um PGBL em nome de Marcos como dependente, dobrando o teto de dedução do casal para 24%.",
            correta: false,
            feedback:
              "Incorreto. O limite de dedução do PGBL (12%) é calculado sobre a renda bruta tributável anual do declarante. Além disso, para abater PGBL de dependente maior de 16 anos, este também precisa ser contribuinte do INSS/RPPS."
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CASE 2 (Módulo 3): Reorganização de Dívidas, Orçamento e Reserva de Emergência
  // ==========================================================================
  {
    id: "CASE_2",
    titulo: "Diagnóstico de Endividamento Crítico e Reestruturação do Orçamento Familiar",
    modulo: "Módulo 3",
    personagem: "Roberto (36 anos, analista administrativo CLT com renda líquida de R$ 6.500/mês)",
    cenarioInicial:
      "Roberto procura seu atendimento bastante ansioso. Ele acumulou R$ 18.000 de dívida somando o rotativo do cartão de crédito (CET de 14% ao mês) e o limite do cheque especial (juros de 8% ao mês, teto regulatório). Ao mesmo tempo, ele mantém R$ 15.000 aplicados em uma Caderneta de Poupança (rendendo cerca de 0,6% ao mês), que ele chama de 'dinheiro sagrado que não pode mexer', e quer sua ajuda para aplicar R$ 500 por mês em um fundo multimercado para 'ganhar dos juros da dívida'.",
    etapas: [
      {
        ordem: 1,
        falaCliente:
          "Não quero tocar nos meus R$ 15.000 da poupança porque me dá segurança psicológica ver esse saldo lá. Minha ideia é investir R$ 500 por mês em um fundo arrojado para fazer o dinheiro crescer rápido e depois pagar o cartão. O que acha?",
        pergunta: "Diante desse viés comportamental (Contabilidade Mental) e do custo das dívidas, qual é a orientação correta?",
        opcoes: [
          {
            texto:
              "Acolher o sentimento de segurança do cliente, mas demonstrar matematicamente que ele está sofrendo o viés de Contabilidade Mental: manter recursos rendendo 0,6% a.m. enquanto paga 8% a 14% a.m. destrói seu patrimônio líquido. A recomendação técnica prioritária é usar grande parte desse saldo para abater imediatamente as dívidas mais caras.",
            correta: true,
            feedback:
              "Exato! Na metodologia de planejamento financeiro e finanças comportamentais, separar o 'bolso da poupança' do 'bolso da dívida rotativa' é um clássico viés de Contabilidade Mental (Richard Thaler). Nenhum investimento lícito supera de forma consistente o CET do rotativo do cartão e cheque especial."
          },
          {
            texto:
              "Respeitar integralmente o pedido do cliente e aplicar os R$ 500 mensais em um Fundo Multimercado alavancado, já que o foco comercial deve ser a captação líquida de recursos.",
            correta: false,
            feedback:
              "Incorreto e antiético. Recomendar produtos de risco para um cliente superendividado no rotativo fere o dever de fidúcia, o código de Suitability da ANBIMA e agrava a insolvência financeira da família."
          },
          {
            texto:
              "Orientar que ele mantenha a poupança intacta e pare de pagar o cartão de crédito por 5 anos até a dívida caducar sem juros.",
            correta: false,
            feedback:
              "Totalmente inadequado. Incentivar o inadimplemento deliberado causa restrição cadastral (SPC/Serasa/Registrato), risco de execução judicial e viola os princípios de educação financeira e ética."
          }
        ]
      },
      {
        ordem: 2,
        falaCliente:
          "Você abriu meus olhos! Se eu usar R$ 12.000 da poupança para quitar todo o cartão de crédito e manter R$ 3.000 para emergências imediatas, ainda vão restar R$ 6.000 no cheque especial. Como sou CLT há 5 anos na mesma empresa privada, qual é a melhor estratégia para eliminar esses R$ 6.000 restantes?",
        pergunta: "Qual solução de gestão de passivos você deve propor para os R$ 6.000 restantes no cheque especial?",
        opcoes: [
          {
            texto:
              "Parcelar o cheque especial no próprio cartão de crédito em 24 vezes, aproveitando o limite que acabou de ser liberado.",
            correta: false,
            feedback:
              "Incorreto. O parcelamento de fatura ou saque no cartão de crédito possui Custo Efetivo Total (CET) muito elevado, mantendo o cliente preso a juros compostos abusivos."
          },
          {
            texto:
              "Substituir a dívida cara (cheque especial a 8% a.m.) por uma linha de crédito de custo muito inferior e parcelas fixas compatíveis com o orçamento — como o Crédito Consignado Privado (desconto em folha) —, trocando um passivo explosivo de curto prazo por uma dívida barata e previsível.",
            correta: true,
            feedback:
              "Perfeito! O alongamento e substituição de passivos caros (rotativo/cheque especial) por linhas com garantia de folha (crédito consignado) reduz drasticamente o CET (Custo Efetivo Total), estanca o efeito bola de neve e encaixa a prestação dentro do fluxo de caixa familiar."
          },
          {
            texto:
              "Tomar um empréstimo pessoal sem garantia em três financeiras diferentes para diluir o risco de crédito.",
            correta: false,
            feedback:
              "Incorreto. Empréstimos pessoais sem garantia em financeiras possuem taxas elevadas e pulverizar dívidas dificulta o controle orçamentário."
          }
        ]
      },
      {
        ordem: 3,
        falaCliente:
          "Dívida reestruturada e orçamento no azul! Agora que sobram R$ 800 todo mês no meu fluxo de caixa, quero reconstruir minha Reserva de Emergência (equivalente a 6 meses das minhas despesas essenciais). Onde devo alocar esse recurso?",
        pergunta: "Quais são os pilares técnicos obrigatórios para os ativos que compõem a Reserva de Emergência?",
        opcoes: [
          {
            texto:
              "Segurança (baixo risco de crédito), Liquidez diária (D+0 ou D+1) e Baixíssima volatilidade (ausência de marcação a mercado negativa relevante) — como Tesouro Selic (LFT), CDB de liquidez diária de banco de primeira linha (100% do CDI com FGC) ou Fundo DI Simples taxa zero.",
            correta: true,
            feedback:
              "Excelente! A Reserva de Emergência tem como objetivo proteger o indivíduo contra imprevistos (desemprego, saúde, sinistros). Por isso, exige a tríade: Liquidez imediata, Segurança de crédito e Estabilidade de cota/preço (pós-fixado atrelado à Selic/CDI)."
          },
          {
            texto:
              "Rentabilidade máxima real acima da inflação — aplicando 100% no Tesouro IPCA+ 2045, pois é garantido pelo Tesouro Nacional e tem liquidez diária.",
            correta: false,
            feedback:
              "Incorreto. Embora o Tesouro IPCA+ 2045 tenha liquidez diária e baixo risco de crédito soberano, ele possui altíssimo risco de mercado (Duration longa): se a curva de juros subir no momento da emergência, o cliente resgatará com forte deságio na marcação a mercado."
          },
          {
            texto:
              "Isenção fiscal absoluta — aplicando em LCI e LCA com carência de 9 meses ou Debêntures Incentivadas de infraestrutura.",
            correta: false,
            feedback:
              "Incorreto. LCI/LCA com carência travam o resgate (falta de liquidez imediata para emergências), e debêntures incentivadas possuem risco de crédito privado e marcação a mercado."
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CASE 3 (Módulo 2): Alocação em Renda Fixa, Marcação a Mercado e FGC
  // ==========================================================================
  {
    id: "CASE_3",
    titulo: "Renda Fixa, Marcação a Mercado na Curva de Juros e Limites do FGC",
    modulo: "Módulo 2",
    personagem: "Sr. Eduardo (58 anos, engenheiro, perfil Moderado, patrimônio financeiro de R$ 600.000)",
    cenarioInicial:
      "O Sr. Eduardo acompanha o noticiário econômico e viu que o mercado está projetando elevação da taxa Selic e abertura da curva de juros futuros devido a incertezas fiscais. Ele possui na carteira Tesouro IPCA+ 2035 comprado há seis meses e ficou assustado ao abrir o aplicativo da corretora e ver que o saldo desse título caiu 7% no último mês.",
    etapas: [
      {
        ordem: 1,
        falaCliente:
          "Como assim eu estou perdendo 7% na Renda Fixa?! O Tesouro IPCA+ não garante a inflação mais uma taxa fixa? Vou resgatar tudo hoje mesmo para parar de perder dinheiro!",
        pergunta: "Como você deve explicar tecnicamente o fenômeno ocorrido e orientar o cliente?",
        opcoes: [
          {
            texto:
              "Explicar que o título sofreu Marcação a Mercado (MaM): como as taxas de juros futuras do mercado subiram, o Preço Unitário (PU) do título caiu para se ajustar à nova taxa exigida. Porém, se ele mantiver o título até a data de vencimento (2035), receberá exatamente a rentabilidade contratada na compra (IPCA + cupom pactuado), sem perda.",
            correta: true,
            feedback:
              "Perfeito! Na renda fixa prefixada ou híbrida (NTN-B / Tesouro IPCA+), a relação entre a taxa de juros de mercado e o Preço Unitário (PU) é inversa. A queda no extrato reflete apenas o valor de venda antecipada hoje (Marcação a Mercado). Resgatar agora realizaria o prejuízo desnecessariamente se o cliente puder levar ao vencimento."
          },
          {
            texto:
              "Concordar que houve um erro de precificação do Tesouro Direto e recomendar o resgate imediato, já que a inflação oficial (IPCA) deve ter sido negativa no período.",
            correta: false,
            feedback:
              "Incorreto. A desvalorização de 7% em um título longo decorre do aumento da taxa real de desconto (abertura da curva de juros futuros multiplicada pela Duration do papel), e não de erro operacional."
          },
          {
            texto:
              "Informar que o Tesouro Nacional aumentou o risco de calote (risco de crédito soberano) e que o FGC cobrirá essa perda de 7% se ele pedir o resgate.",
            correta: false,
            feedback:
              "Duplamente incorreto! Títulos Públicos Federais NÃO contam com cobertura do FGC (são garantidos diretamente pelo Tesouro Nacional, risco soberano) e o FGC jamais cobre perdas de marcação a mercado (risco de mercado)."
          }
        ]
      },
      {
        ordem: 2,
        falaCliente:
          "Agora ficou claro, não vou vender no prejuízo! Mas tenho R$ 350.000 novos que vieram da venda de um terreno e quero aproveitar esse ciclo de alta da taxa Selic nos próximos 12 meses sem correr risco de oscilação negativa no extrato.",
        pergunta: "Qual título público federal é o mais indicado para capturar a alta da Selic com baixíssima volatilidade de preço?",
        opcoes: [
          {
            texto:
              "Tesouro Prefixado (LTN) com vencimento em 3 anos, pois trava uma taxa nominal fixa antes que o Copom se reúna.",
            correta: false,
            feedback:
              "Incorreto. Em um ciclo em que a Selic e a curva de juros continuam subindo acima do esperado, o título prefixado (LTN) perde valor na marcação a mercado e deixa de acompanhar as novas altas da taxa básica."
          },
          {
            texto:
              "Tesouro Selic (LFT - Letra Financeira do Tesouro), pois é um título pós-fixado cuja remuneração acompanha diariamente a taxa Selic efetiva, apresentando duration próxima de zero e baixíssimo risco de mercado.",
            correta: true,
            feedback:
              "Exato! A LFT (Tesouro Selic) corrige seu valor diariamente pela taxa Selic Over. Quando o Copom eleva a Selic, o rendimento diário do investidor sobe imediatamente sem provocar deságio no Preço Unitário (salvo raras oscilações marginais de ágio/deságio de liquidez)."
          },
          {
            texto:
              "Tesouro Renda+ (NTN-B1) com conversão em 2060, pois é isento de marcação a mercado.",
            correta: false,
            feedback:
              "Incorreto. O Tesouro Renda+ (NTN-B1) tem duration longuíssima e sofre fortíssima marcação a mercado quando as taxas reais de juros sobem."
          }
        ]
      },
      {
        ordem: 3,
        falaCliente:
          "E se eu quiser colocar esses R$ 350.000 em uma LCI (Letra de Crédito Imobiliário) de um único banco médio que paga 96% do CDI isento de Imposto de Renda? Estou 100% protegido pelo FGC se esse banco quebrar?",
        pergunta: "Qual é a orientação técnica precisa sobre a cobertura do FGC e a regra de isenção/carência da LCI?",
        opcoes: [
          {
            texto:
              "Alertar que o limite ordinário do FGC é de R$ 250.000 por CPF e por instituição (ou conglomerado financeiro), respeitado o teto global de R$ 1 milhão a cada 4 anos. Portanto, aplicando R$ 350.000 em um único emissor, R$ 100.000 (mais os juros) ficarão descobertos; o ideal é dividir entre pelo menos dois conglomerados diferentes.",
            correta: true,
            feedback:
              "Corretíssimo! O FGC garante até R$ 250 mil por CPF/CNPJ por instituição ou conglomerado financeiro (limitado ao teto global de R$ 1 milhão renovável a cada 4 anos). Ao pulverizar os R$ 350 mil em duas instituições de conglomerados distintos (ex: R$ 200 mil em cada), todo o principal mais os rendimentos futuros ficam dentro do limite de proteção."
          },
          {
            texto:
              "Confirmar que os R$ 350.000 estão 100% protegidos em um único banco, pois o limite do FGC subiu para R$ 1 milhão por instituição financeira.",
            correta: false,
            feedback:
              "Incorreto. R$ 1 milhão é o teto global a cada período de 4 anos para a soma de todas as instituições, mas o limite individual por conglomerado permanece em R$ 250.000 por CPF."
          },
          {
            texto:
              "Informar que a LCI perdeu a isenção de Imposto de Renda para Pessoa Física e não possui mais garantia do FGC.",
            correta: false,
            feedback:
              "Incorreto. A LCI e a LCA continuam isentas de IR para Pessoa Física e cobertas pelo FGC (tendo o CMN apenas ajustado os prazos mínimos de vencimento/carência de emissão)."
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CASE 4 (Módulo 2): Fundos de Investimento sob a Resolução CVM 175
  // ==========================================================================
  {
    id: "CASE_4",
    titulo: "Fundos de Investimento na Resolução CVM 175: Classes, Segregação e Risco de Crédito",
    modulo: "Módulo 2",
    personagem: "Camila (39 anos, empresária, perfil Moderado-Arrojado)",
    cenarioInicial:
      "Camila investe em fundos de investimento e ouviu falar das mudanças trazidas pela Resolução CVM 175 (Marco Regulatório dos Fundos). Ela está avaliando aplicar em um Fundo de Renda Fixa Crédito Privado, mas tem receio de dois pontos: primeiro, ser chamada a colocar dinheiro do próprio bolso se o fundo quebrar; segundo, que problemas em outra classe do mesmo fundo contaminem o dinheiro dela.",
    etapas: [
      {
        ordem: 1,
        falaCliente:
          "Li no jornal que no passado alguns cotistas tiveram que aportar dinheiro extra quando um fundo ficou com Patrimônio Líquido (PL) negativo. Com a Resolução CVM 175, como eu sei se corro esse risco?",
        pergunta: "O que estabelece a Resolução CVM 175 sobre a responsabilidade dos cotistas e o PL negativo?",
        opcoes: [
          {
            texto:
              "Pela Resolução CVM 175, o regulamento pode estabelecer a 'Responsabilidade Limitada' dos cotistas ao valor de suas cotas subscritas (caso em que o fundo/classe usa o sufixo ou aviso correspondente e, se houver PL negativo, ocorre o regime de insolvência civil da classe sem chamada de capital extra). Caso não seja limitada, o cotista assina termo de ciência de responsabilidade ilimitada.",
            correta: true,
            feedback:
              "Exato! Uma das maiores inovações da Resolução CVM 175 (apoiada na Lei da Liberdade Econômica) é a possibilidade de limitar a responsabilidade do cotista ao valor de suas cotas. Na maioria dos fundos de varejo (FIF), a responsabilidade é limitada; caso uma classe fique com PL negativo, o administrador fecha a classe e elabora um plano de resolução/insolvência, sem cobrar recursos adicionais do cotista."
          },
          {
            texto:
              "Na CVM 175, o gestor e o administrador são obrigados por lei a cobrir qualquer prejuízo de mercado ou calote de debêntures com o patrimônio pessoal deles.",
            correta: false,
            feedback:
              "Incorreto. Administrador e Gestor respondem apenas por atos de dolo, má-fé ou violação da lei/regulamento (responsabilidade subjetiva e individualizada, sem solidariedade automática), não garantindo rentabilidade nem cobrindo riscos normais de mercado ou crédito."
          },
          {
            texto:
              "O FGC passa a cobrir até R$ 250 mil para qualquer fundo de investimento regulado pela CVM 175.",
            correta: false,
            feedback:
              "Erro clássico de prova! Fundos de Investimento NUNCA contam com garantia do FGC, nem mesmo os Fundos Renda Fixa Simples ou Crédito Privado."
          }
        ]
      },
      {
        ordem: 2,
        falaCliente:
          "Muito mais seguro! Vi também que esse fundo possui a 'Classe A' (Renda Fixa Pós-Fixada Conservadora) e a 'Classe B' (High Yield com derivativos), além de Subclasses A1 e A2. Se a Classe B der um rombo gigante, ela pode consumir os ativos da minha Classe A?",
        pergunta: "Qual é a regra da CVM 175 sobre a arquitetura de Classes e Subclasses de cotas?",
        opcoes: [
          {
            texto:
              "Sim, porque todas as classes compartilham o mesmo CNPJ do fundo principal e respondem solidariamente pelas dívidas umas das outras.",
            correta: false,
            feedback:
              "Incorreto. A CVM 175 instituiu justamente a segregação patrimonial entre diferentes Classes de cotas."
          },
          {
            texto:
              "Não! Na Resolução CVM 175, cada Classe de cotas possui patrimônio segregado (direitos e obrigações distintos), contabilidade própria e CNPJ específico, não havendo contaminação patrimonial entre a Classe A e a Classe B. Já as Subclasses (A1 e A2) compartilham o mesmo patrimônio da Classe A, diferenciando-se apenas por taxas, prazos ou público-alvo.",
            correta: true,
            feedback:
              "Perfeito! Na CVM 175: Classes diferentes = patrimônios segregados (blindagem patrimonial entre classes). Subclasses dentro de uma mesma classe = compartilham a mesma carteira de ativos daquela classe, variando apenas em condições comerciais (taxa de administração/gestão, aplicação mínima, público-alvo)."
          },
          {
            texto:
              "As Subclasses A1 e A2 possuem carteiras de ativos totalmente diferentes entre si, enquanto as Classes A e B têm exatamente a mesma carteira.",
            correta: false,
            feedback:
              "Incorreto. Você inverteu os conceitos: quem possui carteira de ativos separada e segregação patrimonial é a Classe; a Subclasse é apenas uma divisão comercial dentro da mesma Classe."
          }
        ]
      },
      {
        ordem: 3,
        falaCliente:
          "Para finalizar: a classe em que quero entrar tem o sufixo 'Crédito Privado' no nome. O que exatamente obriga um fundo a usar esse alerta e qual o meu principal cuidado?",
        pergunta: "Qual é a regra regulatória para a denominação 'Crédito Privado' em Fundos de Investimento?",
        opcoes: [
          {
            texto:
              "A classe de fundo que aplicar mais de 50% do seu Patrimônio Líquido em ativos de crédito privado (como debêntures, CRI, CRA, CDBs, FIDC) deve obrigatoriamente incluir a expressão 'Crédito Privado' na sua denominação e exigir assinatura de Termo de Ciência de Risco de Crédito.",
            correta: true,
            feedback:
              "Exato! Quando a exposição a emissores privados (financeiros e não financeiros) supera 50% do PL da classe, o fundo recebe o rótulo 'Crédito Privado' para alertar o investidor de que há risco relevante de inadimplemento (default) dos emissores dos papéis da carteira."
          },
          {
            texto:
              "Qualquer fundo que compre pelo menos 1% em CDB de banco privado já é obrigado a se chamar 'Crédito Privado' e é restrito a Investidores Profissionais.",
            correta: false,
            feedback:
              "Incorreto. Até 50% do PL em crédito privado, um fundo de renda fixa não precisa carregar o sufixo 'Crédito Privado', e fundos Crédito Privado podem ser destinados ao público em geral (varejo), desde que cumpridas as regras de limite por emissor."
          },
          {
            texto:
              "O termo 'Crédito Privado' significa que o fundo concede empréstimos consignados diretamente para pessoas físicas na agência bancária.",
            correta: false,
            feedback:
              "Incorreto. Fundos FIF adquirem títulos e valores mobiliários de dívida privada no mercado de capitais (debêntures, notas comerciais, letras financeiras, CDBs), não atuando como instituição bancária de varejo."
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CASE 5 (Módulo 3): Ética, Metas Comerciais e Conflito de Interesses
  // ==========================================================================
  {
    id: "CASE_5",
    titulo: "Dilema Ético: Pressão por Metas Comerciais, Venda Casada e Conflito de Interesses",
    modulo: "Módulo 3",
    personagem: "Lucas (Profissional certificado CPA em um banco de varejo) e sua gerente regional",
    cenarioInicial:
      "Faltam dois dias para o fechamento do trimestre comercial. Sua gerente regional reúne a equipe e exige que cada gerente venda uma cota de um Fundo Multimercado de alta taxa de administração para clientes aposentados com perfil Conservador (API vencido ou incompatível). Além disso, no mesmo dia, seu irmão procura você na agência querendo comprar ações de uma empresa na qual você mesmo detém posição relevante na sua carteira pessoal.",
    etapas: [
      {
        ordem: 1,
        falaCliente:
          "Gerente Regional diz a você: 'Lucas, faltam R$ 200 mil para você bater a meta do fundo Multimercado XPTO. Ligue para a Dona Margarida (78 anos, perfil Conservador) e diga que é igualzinho a um CDB turbinado. Se ela assinar o termo de desenquadramento por telefone sem ler, nossa meta está garantida!'",
        pergunta: "Qual deve ser a sua postura ética e regulatória diante da ordem da gerente regional?",
        opcoes: [
          {
            texto:
              "Recusar a recomendação inadequada (misselling), pois induzir um cliente Conservador a assinar termo de desenquadramento ou omitir riscos para bater meta fere o dever de Suitability (Resolução CVM 30 e Código ANBIMA), o princípio da integridade e a boa-fé objetiva.",
            correta: true,
            feedback:
              "Conduta ética irrepreensível! Pelas regras de Suitability (CVM 30 e ANBIMA), é expressamente proibido recomendar produtos fora do perfil do cliente. O Termo de Ciência de Desenquadramento só é válido quando a iniciativa parte espontaneamente do próprio cliente (ordem não solicitada), jamais podendo ser induzido pelo profissional para cumprir metas."
          },
          {
            texto:
              "Cumprir a ordem da gerente regional, pois a responsabilidade administrativa perante a CVM e a ANBIMA recai exclusivamente sobre quem deu a ordem hierárquica.",
            correta: false,
            feedback:
              "Incorreto! O profissional certificado tem responsabilidade ética individual e intransferível pelos seus atos. A pressão hierárquica não isenta o profissional de sanções éticas ou regulatórias por venda inadequada (misselling)."
          },
          {
            texto:
              "Alterar manualmente as respostas do questionário API da Dona Margarida no sistema para mudá-la para o perfil Arrojado antes de efetivar a aplicação.",
            correta: false,
            feedback:
              "Gravíssimo! Fraudar ou manipular o questionário de Análise de Perfil do Investidor (API) para forçar o enquadramento de um produto configura infração grave, sujeita a perda da certificação e processo sancionador."
          }
        ]
      },
      {
        ordem: 2,
        falaCliente:
          "A gerente regional então muda a abordagem: 'Tudo bem, Lucas. Então, para liberar aquele financiamento imobiliário com taxa reduzida que o cliente Sr. Paulo pediu, exija que ele contrate hoje um título de capitalização e um seguro de vida da nossa seguradora.'",
        pergunta: "Como a regulação do Banco Central, o Código de Defesa do Consumidor e a ANBIMA classificam essa exigência?",
        opcoes: [
          {
            texto:
              "Trata-se de uma estratégia legítima de Cross-Selling (venda cruzada) com reciprocidade obrigatória.",
            correta: false,
            feedback:
              "Incorreto. Cross-selling legítimo ocorre quando há oferta opcional de produtos complementares com transparência de custos (ex: pacote de relacionamento opcional), sem condicionar a concessão de um produto à contratação forçada de outro."
          },
          {
            texto:
              "Configura prática ilegal de Venda Casada (condicionar o fornecimento de produto ou serviço ao fornecimento de outro sem justa causa), expressamente vedada pelo Código de Defesa do Consumidor (Art. 39, I) e pelas normas do CMN/BACEN. Você deve liberar o crédito sem impor produtos indesejados.",
            correta: true,
            feedback:
              "Perfeito! Condicionar a aprovação ou liberação de crédito à compra compulsória de título de capitalização, previdência ou seguro de instituição específica (sem liberdade de escolha de seguradora nos seguros obrigatórios por lei, como MIP/DFI) é Venda Casada, infração ética e legal."
          },
          {
            texto:
              "É permitido desde que o valor do título de capitalização não ultrapasse 5% do valor financiado.",
            correta: false,
            feedback:
              "Incorreto. A vedação à venda casada é absoluta, independentemente do valor ou percentual do produto empurrado ao cliente."
          }
        ]
      },
      {
        ordem: 3,
        falaCliente:
          "À tarde, seu irmão (que é cliente da corretora do banco) liga para você: 'Lucas, quero que você execute uma ordem de compra pesada de ações da empresa Alfa S.A. na minha conta e também quero saber o que você acha dela.' Você possui uma posição grande de ações da Alfa S.A. na sua própria carteira pessoal.",
        pergunta: "Qual é a conduta exigida diante desse potencial Conflito de Interesses?",
        opcoes: [
          {
            texto:
              "Revelar de forma clara e transparente (Disclosure) ao cliente e à área de Compliance da instituição o seu vínculo familiar e a sua posição pessoal no ativo, abstendo-se de emitir recomendação enviesada ou transferindo o atendimento caso as políticas internas de investimentos pessoais da instituição assim determinem.",
            correta: true,
            feedback:
              "Exato! Na gestão de Conflito de Interesses, a regra de ouro é: (1) Evitar o conflito sempre que possível; (2) Quando inevitável, dar total transparência (Disclosure) prévia ao cliente e ao Compliance da instituição, garantindo que o interesse do cliente venha sempre acima do interesse pessoal do profissional."
          },
          {
            texto:
              "Incentivar o irmão a comprar o máximo possível da ação sem contar que você a possui, para ajudar a valorizar a cotação do papel na Bolsa.",
            correta: false,
            feedback:
              "Incorreto. Omitir posição pessoal relevante ao recomendar um ativo configura conflito de interesses não revelado e viola o dever de lealdade."
          },
          {
            texto:
              "Vender as suas próprias ações da Alfa S.A. minutos antes de executar a ordem de venda grande de um cliente institucional (Front Running).",
            correta: false,
            feedback:
              "Crime/Infração gravíssima! Utilizar informação de ordens de clientes para operar na frente em benefício próprio ou de parentes caracteriza Front Running."
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CASE 6 (Módulo 3): Detecção de Ilícitos de Mercado e PLDFT em Corretora
  // ==========================================================================
  {
    id: "CASE_6",
    titulo: "Vigilância de Mercado e PLDFT: Churning, Spoofing e Comunicação ao COAF",
    modulo: "Módulo 3",
    personagem: "Marina (Analista de Compliance e Supervisão de Mercado com certificação CPA)",
    cenarioInicial:
      "Marina trabalha na área de controles internos e atendimento de uma corretora de valores. Em uma revisão de rotina das operações da semana, três alertas acenderam no sistema de monitoramento: (1) giro excessivo na carteira de uma cliente idosa; (2) ordens gigantes de compra e cancelamento em milissegundos no livro de ofertas; e (3) aportes fracionados em espécie seguidos de pedido de transferência internacional.",
    etapas: [
      {
        ordem: 1,
        falaCliente:
          "Alerta 1: O assessor João realizou 85 operações de compra e venda de ações e futuros na conta da cliente Sra. Clara em apenas um mês. O patrimônio da cliente caiu 12%, mas as taxas de corretagem geradas para João bateram recorde, sem que houvesse mudança relevante na tese de investimentos.",
        pergunta: "Qual prática ilícita esse padrão de giro excessivo de carteira caracteriza?",
        opcoes: [
          {
            texto:
              "Churning (giro excessivo e injustificado da carteira do cliente com o objetivo principal de gerar comissões e corretagem para o intermediário/assessor), configurando fraude/infração grave segundo a CVM.",
            correta: true,
            feedback:
              "Perfeito! O Churning (overtrading) ocorre quando o profissional abusa da confiança ou do mandato do cliente para girar a carteira de forma excessiva, incompatível com o perfil e os objetivos do investidor, visando apenas auferir receitas de corretagem/rebate. A CVM monitora essa prática por indicadores como o Turnover Ratio e o Cost-to-Equity Ratio."
          },
          {
            texto:
              "Insider Trading, pois o assessor operou utilizando informações privilegiadas ainda não divulgadas ao mercado.",
            correta: false,
            feedback:
              "Incorreto. Insider Trading é o uso de informação relevante ainda não pública para obter vantagem na negociação de valores mobiliários. O giro excessivo para gerar corretagem chama-se Churning."
          },
          {
            texto:
              "Rebalanceamento Dinâmico de Markovitz, uma técnica recomendada para clientes conservadores.",
            correta: false,
            feedback:
              "Incorreto. Realizar 85 giros mensais que corroem 12% do patrimônio em custos transacionais não é rebalanceamento técnico, e sim prática abusiva de Churning."
          }
        ]
      },
      {
        ordem: 2,
        falaCliente:
          "Alerta 2: Um operador day-trader enviou repetidas ordens enormes de compra de uma ação no book de ofertas (criando uma falsa impressão de forte demanda para atrair outros compradores), e assim que a cotação subiu alguns centavos e ele vendeu seu lote na ponta contrária, cancelou todas as ordens de compra em menos de 1 segundo via robô.",
        pergunta: "Como é classificada essa modalidade de manipulação artificial de preços no mercado de capitais?",
        opcoes: [
          {
            texto:
              "Hedge Cambial Sistemático, permitido pela B3 para provedores de liquidez.",
            correta: false,
            feedback:
              "Incorreto. Provedores de liquidez atuam dentro de regras transparentes de spread e permanência de ofertas, sem intenção de induzir terceiros a erro."
          },
          {
            texto:
              "Spoofing (ou Layering, quando em múltiplas camadas de preço): manipulação de mercado que consiste em inserir ofertas artificiais sem intenção real de executá-las, apenas para criar falsa liquidez/pressão de preço e cancelar após executar a ponta oposta.",
            correta: true,
            feedback:
              "Exato! O Spoofing e o Layering são práticas ilícitas de Manipulação de Preços / Criação de Condições Artificiais de Demanda, Oferta ou Preço (vedadas pela Resolução CVM 62 e tipificadas como crime contra o mercado de capitais na Lei 6.385/76)."
          },
          {
            texto:
              "Arbitragem Estatística de Índice, uma operação perfeitamente lícita que corrige distorções entre o mercado à vista e o futuro.",
            correta: false,
            feedback:
              "Incorreto. Na arbitragem legítima, as ordens são enviadas para serem efetivamente executadas nas duas pontas; inserir ordens falsas apenas para blefar no book e cancelá-las em seguida é Spoofing."
          }
        ]
      },
      {
        ordem: 3,
        falaCliente:
          "Alerta 3 (PLDFT): Um cliente recém-cadastrado com renda declarada de R$ 4.000/mês recebeu 12 transferências de R$ 9.500 em dias seguidos de empresas sem relação aparente com sua atividade (estruturação/smurfing) e solicitou o resgate imediato para conta de terceiros. Ele liga perguntando por que a operação está em análise.",
        pergunta: "Qual deve ser o procedimento obrigatório de Prevenção à Lavagem de Dinheiro (Circular BACEN 3.978 / Resolução CVM 50)?",
        opcoes: [
          {
            texto:
              "Analisar a atipicidade e comunicar a operação suspeita ao COAF (Conselho de Controle de Atividades Financeiras) no prazo legal (até o dia útil seguinte à conclusão da análise que caracterizou a suspeita), mantendo absoluto sigilo (vedação ao 'tipping off' — não avisar o cliente nem terceiros sobre a comunicação ao COAF).",
            correta: true,
            feedback:
              "Corretíssimo! O fracionamento de valores para tentar burlar limites de monitoramento (smurfing/estruturação) e a incompatibilidade com a capacidade financeira declarada são fortes indícios de Lavagem de Dinheiro (etapas de Colocação/Ocultação). A comunicação ao COAF é confidencial: jamais se deve informar ao cliente que ele foi reportado."
          },
          {
            texto:
              "Ligar para o cliente e avisá-lo formalmente por e-mail que o CPF dele está sendo denunciado ao COAF para que ele apresente defesa prévia em 15 dias.",
            correta: false,
            feedback:
              "Erro gravíssimo! A Lei 9.613/98 e as normas do BACEN/CVM determinam que as comunicações de boa-fé ao COAF NÃO podem ser reveladas ao cliente nem a terceiros (proibição de tipping off), sob pena de frustrar investigações."
          },
          {
            texto:
              "Ignorar o alerta, pois cada transferência individual foi de R$ 9.500, valor abaixo de R$ 10.000.",
            correta: false,
            feedback:
              "Incorreto. Comunicações de operações suspeitas (COS) independem de valor mínimo quando há indícios de estruturação (smurfing), incompatibilidade econômico-financeira ou falta de fundamento econômico."
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CASE 7 (Módulo 1): Cenário Macroeconômico, Copom, Compulsório e PTAX
  // ==========================================================================
  {
    id: "CASE_7",
    titulo: "Cenário Macroeconômico: Política Monetária Contracionista, Compulsório e Câmbio",
    modulo: "Módulo 1",
    personagem: "Sr. Henrique (Diretor Financeiro de uma indústria importadora de máquinas e exportadora de alimentos)",
    cenarioInicial:
      "O IPCA acumulado em 12 meses ultrapassou o teto da meta de inflação definida pelo Conselho Monetário Nacional (CMN). Em resposta, o Banco Central do Brasil (BACEN) iniciou um aperto monetário. O Sr. Henrique procura você para entender como as ferramentas do BACEN (Selic, Depósito Compulsório e Operações Compromissadas) e a taxa PTAX afetam o caixa e os financiamentos da empresa dele.",
    etapas: [
      {
        ordem: 1,
        falaCliente:
          "Vi que o CMN define a meta de inflação, mas quem subiu a Selic Meta ontem foi o Copom. Além de subir a Selic, o Banco Central anunciou que vai aumentar a alíquota do Depósito Compulsório sobre os depósitos à vista e a prazo dos bancos. Qual é o efeito prático disso na economia e no crédito para minha empresa?",
        pergunta: "Como você explica a combinação de elevação da Selic e aumento do Depósito Compulsório?",
        opcoes: [
          {
            texto:
              "Trata-se de uma Política Monetária Contracionista: ao elevar o Depósito Compulsório, o BACEN retém uma parcela maior dos recursos captados pelos bancos, reduzindo o multiplicador bancário e a liquidez disponível na economia. Somado à Selic mais alta, o crédito fica mais escasso e mais caro, desacelerando a demanda agregada para conter a inflação (IPCA).",
            correta: true,
            feedback:
              "Explicação impecável! O CMN (órgão normativo máximo) fixa a meta de inflação, e o BACEN (órgão supervisor/executor), por meio do Copom, persegue essa meta. O aumento do compulsório enxuga a moeda em circulação (reduz o efeito multiplicador da moeda escritural), encarecendo o custo do crédito bancário."
          },
          {
            texto:
              "É uma Política Fiscal Expansionista que aumenta o dinheiro disponível nos bancos comerciais para baratear o capital de giro das empresas.",
            correta: false,
            feedback:
              "Incorreto. Subir juros e elevar compulsório são instrumentos de Política Monetária (conduzida pelo BACEN, não fiscal) e têm caráter Contracionista (reduzem a liquidez e encarecem o crédito)."
          },
          {
            texto:
              "O aumento do compulsório serve para financiar diretamente as obras públicas do Governo Federal sem precisar emitir títulos do Tesouro.",
            correta: false,
            feedback:
              "Incorreto. O BACEN é proibido pela Constituição Federal de financiar direta ou indiretamente o Tesouro Nacional; o depósito compulsório é estritamente um instrumento de controle de liquidez monetária e estabilidade financeira."
          }
        ]
      },
      {
        ordem: 2,
        falaCliente:
          "Muito claro! E no dia a dia, quando sobra ou falta dinheiro no sistema bancário, como o Banco Central faz para manter a taxa Selic Efetiva (Selic Over) colada na Selic Meta definida pelo Copom?",
        pergunta: "Qual instrumento de mercado aberto (Open Market) o BACEN utiliza diariamente para controlar a liquidez e a Selic Over?",
        opcoes: [
          {
            texto:
              "Através da cobrança de IOF sobre o cheque especial das pessoas físicas.",
            correta: false,
            feedback:
              "Incorreto. O IOF é um imposto federal de caráter regulatório/fiscal, não sendo o instrumento diário da mesa de operações do BACEN para calibrar a Selic Over."
          },
          {
            texto:
              "Por meio de Operações Compromissadas (compra e venda de Títulos Públicos Federais com compromisso de revenda/recompra) no SELIC: quando há excesso de liquidez no sistema bancário (que faria a taxa cair abaixo da meta), o BACEN vende títulos com compromisso de recompra para enxugar reais e manter a Selic Over próxima da Selic Meta.",
            correta: true,
            feedback:
              "Perfeito! O Open Market (Mercado Aberto via Operações Compromissadas) é o instrumento mais ágil e cotidiano de política monetária do BACEN. Ao doar ou tomar títulos públicos em troca de reservas bancárias por 1 dia (overnight), o Desk do BACEN mantém a Selic Over (taxa média ponderada das operações lastreadas em títulos públicos no SELIC) aderente à Selic Meta."
          },
          {
            texto:
              "Por meio da emissão de Debêntures Conversíveis na B3.",
            correta: false,
            feedback:
              "Incorreto. Debêntures são títulos de dívida corporativa emitidos por Sociedades Anônimas não financeiras; o BACEN opera no mercado aberto exclusivamente com Títulos Públicos Federais."
          }
        ]
      },
      {
        ordem: 3,
        falaCliente:
          "Por fim, minha empresa tem um contrato de dívida e derivativos cambiais liquidado pela taxa PTAX. Como essa taxa PTAX é formada e como a alta dos juros no Brasil costuma impactar o câmbio no curto prazo (mantido todo o resto constante)?",
        pergunta: "Qual é a definição correta da taxa PTAX e a dinâmica do diferencial de juros no câmbio?",
        opcoes: [
          {
            texto:
              "A PTAX é uma taxa de câmbio calculada e divulgada diariamente pelo Banco Central com base na média aritmética de quatro janelas de consultas (boletins) junto aos dealers de câmbio no mercado interbancário. Mantido o risco-país constante, a elevação da Selic aumenta o diferencial de juros interno vs. externo, atraindo capital estrangeiro (carry trade) e tendendo a apreciar o Real (queda da cotação do dólar).",
            correta: true,
            feedback:
              "Exato! A PTAX não é uma taxa tabelada pelo governo, mas sim uma taxa de referência apurada pelo BACEN a partir das operações efetivas do mercado interbancário em 4 janelas ao longo do dia. Juros domésticos mais altos aumentam a atratividade da renda fixa brasileira em relação aos juros internacionais, favorecendo a entrada de dólares e a valorização cambial do Real (ceteris paribus)."
          },
          {
            texto:
              "A PTAX é uma taxa fixa decretada toda segunda-feira pelo Ministério da Fazenda para proteger os importadores.",
            correta: false,
            feedback:
              "Incorreto. O Brasil adota o regime de Câmbio Flutuante Sujo (Dirty Float), onde o preço da moeda estrangeira varia livremente conforme oferta e demanda, e a PTAX apenas reflete a média das cotações praticadas no dia."
          },
          {
            texto:
              "A PTAX é a média das taxas de câmbio turismo cobradas nas casas de câmbio de aeroportos, acrescida de IOF.",
            correta: false,
            feedback:
              "Incorreto. A PTAX reflete o mercado interbancário (câmbio comercial à vista entre instituições autorizadas/dealers), e não o câmbio turismo em espécie."
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CASE 8 (Módulo 2): Renda Variável, Eventos Corporativos e FIIs
  // ==========================================================================
  {
    id: "CASE_8",
    titulo: "Renda Variável na Prática: Eventos Societários (Split, Dividendos vs. JCP) e FIIs",
    modulo: "Módulo 2",
    personagem: "Fernanda (31 anos, engenheira de software, perfil Arrojado)",
    cenarioInicial:
      "Fernanda começou a montar uma carteira focada em geração de renda passiva com Ações e Fundos de Investimento Imobiliário (FIIs). Ela reservou recursos para entrar em um IPO muito aguardado, recebeu proventos de duas companhias abertas na conta da corretora e viu que uma de suas ações passou por um Desdobramento (Split) na proporção de 1 para 4.",
    etapas: [
      {
        ordem: 1,
        falaCliente:
          "Eu tinha 100 ações da empresa Beta S.A. cotadas a R$ 80,00 cada (total de R$ 8.000). Hoje acordei e vi que a empresa fez um Desdobramento (Split) de 1 para 4: agora o preço da ação caiu para R$ 20,00! Eu fiquei mais pobre ou mais rica? E por que a empresa faz isso?",
        pergunta: "Como você explica o impacto patrimonial e o objetivo do Desdobramento (Split) de ações?",
        opcoes: [
          {
            texto:
              "Seu patrimônio financeiro permanece exatamente o mesmo no momento do evento: você passou a ter 400 ações cotadas a R$ 20,00 cada (totalizando os mesmos R$ 8.000,00) e a mesma participação percentual no capital social. A empresa faz o Split para reduzir o preço unitário da ação na tela, tornando-a mais acessível ao pequeno investidor e aumentando a liquidez de negociação na B3.",
            correta: true,
            feedback:
              "Perfeito! No Desdobramento (Split), aumenta-se a quantidade de ações em circulação e divide-se o preço na mesma proporção, sem alterar o Capital Social da companhia nem o patrimônio do acionista. O objetivo principal é aumentar a liquidez em bolsa (oposto do Grupamento/Inplit, que junta ações para elevar o preço unitário e evitar penny stocks)."
          },
          {
            texto:
              "Você ficou 4 vezes mais rica, pois agora tem 400 ações que voltarão automaticamente a valer R$ 80,00 amanhã por determinação da CVM.",
            correta: false,
            feedback:
              "Incorreto. O preço teórico de abertura ex-desdobramento é ajustado proporcionalmente (dividido por 4), mantendo o valor financeiro total inalterado."
          },
          {
            texto:
              "Você sofreu uma diluição societária de 75%, pois a empresa emitiu novas ações para outros investidores sem te dar direito de preferência.",
            correta: false,
            feedback:
              "Incorreto. O Split é aplicado de maneira idêntica e gratuita a todas as ações existentes; portanto, não há qualquer diluição da participação percentual do acionista."
          }
        ]
      },
      {
        ordem: 2,
        falaCliente:
          "Que alívio! Outra dúvida: recebi dois créditos de proventos das minhas ações: um veio como 'Dividendos' (sem nenhum desconto de imposto) e outro veio como 'Juros sobre Capital Próprio (JCP)' com desconto de 15% de Imposto de Renda na fonte. Por que a empresa paga JCP se tem imposto para mim?",
        pergunta: "Qual é a diferença tributária e contábil entre Dividendos e Juros sobre Capital Próprio (JCP)?",
        opcoes: [
          {
            texto:
              "A empresa só paga JCP quando tem prejuízo contábil no trimestre, enquanto os Dividendos são pagos quando há lucro.",
            correta: false,
            feedback:
              "Incorreto. Tanto Dividendos quanto JCP exigem a existência de lucros (do exercício ou acumulados/reservas de lucros) para serem distribuídos."
          },
          {
            texto:
              "Os Dividendos saem do lucro líquido (após a empresa já ter pago IRPJ e CSLL) e são isentos na fonte para o acionista. Já o JCP é contabilizado como uma despesa financeira dedutível para a empresa (gerando economia de IRPJ/CSLL de até 34% no caixa da companhia), razão pela qual sofre retenção exclusiva de 15% de IR na fonte para o investidor pessoa física.",
            correta: true,
            feedback:
              "Exato! O JCP (limitado à variação da TJLP sobre o Patrimônio Líquido elegível) gera benefício fiscal para a companhia emissora ao reduzir seu lucro tributável. Muitas vezes a empresa consegue distribuir um valor bruto de JCP maior, de modo que mesmo após os 15% de IR exclusivo na fonte, o valor líquido recebido pelo acionista supera o dividendo equivalente."
          },
          {
            texto:
              "O desconto de 15% do JCP pode ser restituído integralmente na Declaração Anual do IRPF se o investidor vender menos de R$ 20 mil no mês.",
            correta: false,
            feedback:
              "Incorreto. A tributação de 15% sobre o JCP é exclusiva/definitiva na fonte para pessoa física, e a isenção de R$ 20 mil/mês aplica-se apenas ao ganho de capital na alienação de ações no mercado à vista, jamais a JCP."
          }
        ]
      },
      {
        ordem: 3,
        falaCliente:
          "Faz todo sentido! Agora sobre meus Fundos Imobiliários (FIIs): quero combinar FIIs de 'Tijolo' (shoppings e galpões logísticos) com FIIs de 'Papel' (recebíveis imobiliários CRI) e continuar recebendo os rendimentos mensais isentos de IR. Quais requisitos legais garantem essa isenção de IR nos rendimentos de FII para mim (Pessoa Física)?",
        pergunta: "Quais são as condições cumulativas para a isenção de IR sobre os rendimentos distribuídos por um FII à Pessoa Física?",
        opcoes: [
          {
            texto:
              "As cotas do FII devem ser negociadas exclusivamente em Bolsa ou mercado de balcão organizado; o fundo deve possuir no mínimo 100 cotistas; e o investidor pessoa física não pode deter 10% ou mais da totalidade das cotas do fundo (nem ter direito a rendimento superior a 10%). Atenção: o ganho de capital na venda da cota de FII com lucro NÃO é isento, sendo tributado em 20% via DARF.",
            correta: true,
            feedback:
              "Resposta completa e cirúrgica! Pela Lei 8.668/93 e Lei 11.033/04 (observadas também as regras de não concentração familiar/coligadas da Lei 14.754/23 para limites específicos de fundos listados), a isenção vale apenas para os RENDIMENTOS distribuídos às pessoas físicas que cumpram os requisitos. O ganho de capital na alienação de cotas de FII paga 20% de IR (mesmo em day trade ou swing trade, sem isenção de R$ 20 mil)."
          },
          {
            texto:
              "Basta ser Pessoa Física, sendo isento tanto o rendimento mensal de aluguel quanto o lucro na venda das cotas na B3 até R$ 20.000 por mês.",
            correta: false,
            feedback:
              "Pegadinha clássica da prova! FII NÃO tem isenção de R$ 20 mil para ganho de capital na venda de cotas, e a alíquota sobre o lucro na venda de cotas de FII é de 20% (tanto para swing trade quanto para day trade)."
          },
          {
            texto:
              "Apenas os FIIs de Tijolo têm isenção de IR nos rendimentos mensais; os FIIs de Papel (CRI) pagam 15% de come-cotas semestral.",
            correta: false,
            feedback:
              "Incorreto. Tanto FIIs de Tijolo quanto FIIs de Papel seguem a mesma regra tributária de isenção nos rendimentos mensais (distribuindo no mínimo 95% do lucro caixa semestral) e não possuem come-cotas."
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CASE 9 (Módulo 4): Inovação Financeira — DeFi, DEX, Tokenização e DREX
  // ==========================================================================
  {
    id: "CASE_9",
    titulo: "Fronteiras da Inovação: DeFi, DEX, Smart Contracts, Tokenização e DREX",
    modulo: "Módulo 4",
    personagem: "Gabriel (29 anos, fundador de uma startup de tecnologia, perfil Arrojado)",
    cenarioInicial:
      "Gabriel é entusiasta de criptoativos e tecnologia Blockchain. Ele procura você porque quer: (1) usar seus criptoativos em protocolos de Finanças Descentralizadas (DeFi) e corretoras descentralizadas (DEX); (2) captar recursos para sua empresa emitindo 'Tokens de Recebíveis'; e (3) entender a diferença entre criptomoedas descentralizadas, Stablecoins privadas e o DREX (Real Digital do Banco Central).",
    etapas: [
      {
        ordem: 1,
        falaCliente:
          "Estou transferindo minhas criptos de uma corretora centralizada (CEX) para minha carteira própria (self-custody) para operar em uma DEX (Corretora Descentralizada) e fazer empréstimos em um protocolo DeFi via Smart Contracts. Se eu perder minha chave privada (seed phrase) ou se houver um bug no Smart Contract, a quem eu recorro para recuperar meu saldo?",
        pergunta: "Quais são os riscos operacionais e de custódia específicos de DEX e protocolos DeFi baseados em Smart Contracts?",
        opcoes: [
          {
            texto:
              "Alertar que na autocustódia (self-custody) e em DEX/DeFi não há intermediário centralizado: se o usuário perder sua chave privada (seed phrase), o acesso aos ativos é perdido de forma irreversível (não há botão de 'esqueci minha senha'). Além disso, protocolos DeFi estão sujeitos ao risco de falhas de código/exploração em Smart Contracts, risco de oráculos e perda impermanente em pools de liquidez, sem cobertura do FGC ou MRP da B3.",
            correta: true,
            feedback:
              "Perfeito! Em DEX (Decentralized Exchanges) e protocolos DeFi, a liquidação ocorre peer-to-peer ou contra pools de liquidez automatizadas (AMM) governadas por Smart Contracts (contratos autoexecutáveis em blockchain). A imutabilidade e a descentralização trazem autonomia, mas transferem 100% da responsabilidade da guarda da chave privada ao usuário e expõem o capital a bugs de código."
          },
          {
            texto:
              "Explicar que o Banco Central do Brasil possui uma chave-mestra de todas as blockchains públicas (como Ethereum e Bitcoin) e consegue reverter transações de Smart Contracts em até 48 horas via MED.",
            correta: false,
            feedback:
              "Incorreto. Blockchains públicas e descentralizadas são imutáveis e não possuem autoridade central capaz de reverter transações ou recuperar chaves privadas perdidas."
          },
          {
            texto:
              "Informar que toda DEX é obrigada a manter seguro do FGC de até R$ 250 mil por carteira conectada.",
            correta: false,
            feedback:
              "Incorreto. Criptoativos, CEX e DEX não possuem garantia do FGC nem do Mecanismo de Ressarcimento de Prejuízos (MRP) da B3."
          }
        ]
      },
      {
        ordem: 2,
        falaCliente:
          "Entendi a responsabilidade! Agora, minha empresa quer 'tokenizar' R$ 5 milhões em recebíveis comerciais e oferecer esses tokens ao público na internet prometendo juros de 1,5% ao mês. Como é em blockchain, não preciso seguir regras da CVM, certo?",
        pergunta: "Qual é o enquadramento regulatório da Tokenização de ativos no Brasil (Princípio da Neutralidade Tecnológica da CVM)?",
        opcoes: [
          {
            texto:
              "Correto, pois qualquer ativo registrado em Blockchain é considerado uma commodity digital isenta de regulação no Brasil.",
            correta: false,
            feedback:
              "Incorreto. A tecnologia utilizada (blockchain, papel ou banco de dados centralizado) não afasta a incidência da lei se a essência econômica do ativo for um valor mobiliário."
          },
          {
            texto:
              "Incorreto! A CVM adota o princípio da 'Prevalência da Essência sobre a Forma' e da Neutralidade Tecnológica (Parecer de Orientação CVM 40): se o token ofertado publicamente gera expectativa de rendimento ou remuneração advinda do esforço do empreendedor ou de terceiros (Contrato de Investimento Coletivo / Security Token), ele é um Valor Mobiliário e está sujeito às normas da CVM (como registro de oferta pública ou dispensa via Crowdfunding CVM 88 / FIDC).",
            correta: true,
            feedback:
              "Exato! Tokenizar um ativo é representar digitalmente direitos sobre um ativo real ou financeiro em uma rede DLT/Blockchain. Se o token é um Security Token (valor mobiliário, aplicando-se o teste de Howey / Art. 2º da Lei 6.385/76), sua oferta pública deve respeitar integralmente a regulamentação da CVM, independentemente de rodar em blockchain."
          },
          {
            texto:
              "A tokenização de recebíveis é proibida no Brasil, sendo permitido apenas criar NFTs de obras de arte digitais.",
            correta: false,
            feedback:
              "Incorreto. A tokenização de recebíveis é plenamente lícita e amplamente utilizada no Brasil, desde que estruturada dentro dos marcos regulatórios aplicáveis (securitizadoras, crowdfunding CVM 88 ou ofertas registradas)."
          }
        ]
      },
      {
        ordem: 3,
        falaCliente:
          "Excelente alerta! Para fechar: qual é a diferença entre eu usar o Bitcoin, usar uma Stablecoin privada atrelada ao dólar (como USDT/USDC) ou usar o DREX (Real Digital) que o Banco Central está implementando?",
        pergunta: "Como diferenciar tecnicamente Criptomoedas nativas, Stablecoins privadas e o DREX (CBDC brasileira)?",
        opcoes: [
          {
            texto:
              "O Bitcoin é um criptoativo descentralizado de cotação flutuante sem emissor soberano; as Stablecoins privadas são criptoativos emitidos por empresas privadas que buscam paridade com uma moeda fiduciária (sujeitas ao risco de custódia/lastro do emissor privado); já o DREX é a CBDC (Moeda Digital de Banco Central) brasileira — representação digital da própria moeda soberana (Real), emitida pelo BACEN em rede DLT permissionada para liquidar contratos inteligentes e ativos tokenizados com segurança jurídica.",
            correta: true,
            feedback:
              "Perfeito! O DREX não é uma criptomoeda especulativa, e sim o próprio Real em formato digital programável (CBDC de atacado/varejo via depósitos tokenizados em instituições autorizadas), operando em infraestrutura DLT permissionada sob governança do BACEN, permitindo liquidação atômica (Entrega contra Pagamento — DvP) de ativos tokenizados."
          },
          {
            texto:
              "O DREX é uma criptomoeda de cotação variável minerada por placas de vídeo (Proof of Work) que vai substituir o PIX e extinguir os bancos comerciais.",
            correta: false,
            feedback:
              "Incorreto. O DREX tem paridade de 1 para 1 com o Real físico/escritural (1 DREX = R$ 1,00), não é minerado por Proof of Work e atua de forma complementar ao PIX, contando com a intermediação dos bancos e instituições de pagamento no Real Tokenizado."
          },
          {
            texto:
              "Stablecoins privadas e o DREX são exatamente a mesma coisa, ambos emitidos pelo Tesouro Americano.",
            correta: false,
            feedback:
              "Incorreto. Stablecoins privadas possuem risco de crédito/reservas da empresa emissora privada, enquanto uma CBDC (como o DREX) é passivo soberano do Banco Central emissor da moeda nacional."
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // CASE 10 (Módulo 4 + 3): Open Finance, Portabilidade CVM, LGPD e IA
  // ==========================================================================
  {
    id: "CASE_10",
    titulo: "Open Finance, Portabilidade Digital de Investimentos (CVM), LGPD e Uso Ético de IA",
    modulo: "Módulos 4 e 3",
    personagem: "Patrícia (34 anos, consultora de marketing, cliente digital)",
    cenarioInicial:
      "Patrícia possui conta e histórico de bom pagamento no Banco A há 10 anos, mas abriu conta na Instituição B em busca de crédito mais barato e melhores ferramentas de consolidação de carteira. Além disso, ela possui ações, Tesouro Direto e cotas de fundos custodiados na Corretora X e quer transferir esses ativos para a Corretora Y sem precisar vendê-los. Durante o atendimento, ela também questiona como seus dados pessoais são protegidos (LGPD) e como o assistente de Inteligência Artificial do aplicativo funciona.",
    etapas: [
      {
        ordem: 1,
        falaCliente:
          "Na Instituição B, como sou cliente nova, meu limite pré-aprovado veio baixo. Eles me sugeriram usar o Open Finance para conectar meus dados do Banco A, mas tenho medo de que o Banco A compartilhe minhas informações sem minha permissão ou que eu nunca mais consiga cancelar esse acesso.",
        pergunta: "Quais são as regras fundamentais de funcionamento e consentimento do Open Finance no Brasil?",
        opcoes: [
          {
            texto:
              "Explicar que no Open Finance o titular dos dados é o próprio cliente: o compartilhamento só ocorre mediante consentimento prévio, expresso, específico e com finalidade e prazo determinados (até 12 meses, renovável). Isso reduz a assimetria de informação (ajudando a obter melhores taxas de crédito na Instituição B), e o cliente pode revogar o consentimento a qualquer momento, de forma gratuita e imediata, pelo aplicativo.",
            correta: true,
            feedback:
              "Exato! O Open Finance (Sistema Financeiro Aberto regulado pelo CMN/BACEN) empodera o consumidor como dono do seu histórico financeiro. Exige consentimento ativo (opt-in), autenticação segura em ambiente criptografado (APIs padronizadas) e garante o direito de revogação imediata a qualquer tempo, em total harmonia com a LGPD."
          },
          {
            texto:
              "Informar que, após aderir ao Open Finance uma vez, o compartilhamento é vitalício e irrevogável entre todos os bancos do país.",
            correta: false,
            feedback:
              "Incorreto. O consentimento no Open Finance nunca é irrevogável; pode ser cancelado a qualquer instante pelo cliente e é restrito apenas às instituições e escopos de dados que o cliente selecionou."
          },
          {
            texto:
              "Orientar que ela passe a senha do aplicativo do Banco A por telefone para o gerente da Instituição B acessar o extrato dela.",
            correta: false,
            feedback:
              "Gravíssimo! O Open Finance funciona exclusivamente via APIs oficiais e seguras após redirecionamento e autenticação na instituição de origem; jamais se deve solicitar ou fornecer senhas pessoais a terceiros."
          }
        ]
      },
      {
        ordem: 2,
        falaCliente:
          "Perfeito, já fiz o consentimento pelo app! Agora quero trazer minhas ações, meus títulos do Tesouro Direto e meus fundos da Corretora X para cá (Corretora Y). O assessor da Corretora X disse que sou obrigada a vender tudo, pagar Imposto de Renda e transferir em dinheiro, além de preencher um formulário em papel com firma reconhecida em cartório!",
        pergunta: "O que determinam as normas de Portabilidade de Investimentos da CVM (Resoluções CVM 209, 210 e 229)?",
        opcoes: [
          {
            texto:
              "Confirmar a informação do assessor antigo, pois a transferência de custódia de valores mobiliários exige a liquidação financeira e o recolhimento de IR sobre o lucro acumulado.",
            correta: false,
            feedback:
              "Incorreto. A portabilidade de custódia transfere a titularidade do controle do ativo sem venda/resgate e, portanto, sem fato gerador de Imposto de Renda ou IOF."
          },
          {
            texto:
              "Esclarecer que o cliente tem direito à Portabilidade de Investimentos sem precisar vender ou resgatar os ativos (mantendo o preço médio, a data de aplicação original e sem pagar IR na transferência). Pelas novas normas da CVM, o processo deve ser disponibilizado em interface 100% digital (vedada a exigência abusiva de papel/cartório), podendo o pedido ser iniciado tanto na instituição de origem (cedente) quanto na de destino (cessionária) ou no portal da B3, com acompanhamento em tempo real.",
            correta: true,
            feedback:
              "Excelente! O novo marco de Portabilidade de Valores Mobiliários da CVM (Resoluções CVM 209/210/229) eliminou barreiras operacionais (friction/sludge) como formulários físicos e firma reconhecida, instituiu a solicitação digital na origem, no destino ou no depositário central, padronizou prazos estritos e tipificou o embaraço injustificado à portabilidade como infração grave."
          },
          {
            texto:
              "Explicar que a portabilidade digital só existe para salários e planos PGBL/VGBL, sendo proibida para Ações e Tesouro Direto.",
            correta: false,
            feedback:
              "Incorreto. A portabilidade de custódia abrange perfeitamente ações, FIIs, ETFs, Tesouro Direto, renda fixa privada e cotas de fundos de investimento."
          }
        ]
      },
      {
        ordem: 3,
        falaCliente:
          "Que maravilha! Uma última questão: vi que o aplicativo de vocês usa Inteligência Artificial Generativa para resumir relatórios de mercado e sugerir carteiras, e que vocês coletam dados do meu perfil. Quais são os limites da LGPD e do uso de IA no atendimento de investimentos?",
        pergunta: "Qual é a conduta ética e regulatória correta quanto à LGPD (Lei 13.709/18) e ao uso de Inteligência Artificial no mercado financeiro?",
        opcoes: [
          {
            texto:
              "Pela LGPD, o tratamento de dados deve respeitar os princípios da finalidade, adequação, necessidade (minimização de dados) e segurança, garantindo os direitos do titular. Quanto à IA no atendimento financeiro, ela pode apoiar análises e personalização, mas exige supervisão humana, transparência (informar que o cliente interage com IA), prevenção a alucinações/vieses discriminatórios e respeito estrito ao Suitability — a instituição e o profissional continuam integralmente responsáveis pelas recomendações feitas.",
            correta: true,
            feedback:
              "Conduta nota 10! A Inteligência Artificial é uma ferramenta de suporte e eficiência, mas não exime a instituição nem o profissional certificado da responsabilidade fiduciária, da verificação de veracidade (evitando alucinações de modelos generativos) e da estrita observância ao perfil de risco (Suitability) e à proteção de dados pessoais (LGPD)."
          },
          {
            texto:
              "Como a recomendação foi gerada por um algoritmo de Inteligência Artificial, nem o banco nem o profissional respondem caso o sistema recomende um derivativo alavancado para um cliente conservador.",
            correta: false,
            feedback:
              "Incorreto! A responsabilidade civil e regulatória perante a CVM, o BACEN e o consumidor permanece integralmente com a instituição financeira e seus profissionais responsáveis; o uso de algoritmos ou IA não transfere nem exclui a responsabilidade de Suitability."
          },
          {
            texto:
              "Pela LGPD, os bancos são isentos de proteger dados financeiros e podem vender a lista de patrimônio dos clientes para empresas de marketing imobiliário sem consentimento.",
            correta: false,
            feedback:
              "Gravíssimo! Instituições financeiras estão sujeitas tanto à Lei Complementar 105/2001 (Sigilo Bancário) quanto à LGPD (Lei 13.709/2018), sendo crime e infração administrativa grave compartilhar ou comercializar dados de clientes sem base legal ou consentimento específico."
          }
        ]
      }
    ]
  }
];
