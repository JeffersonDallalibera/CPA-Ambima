window.CPA_MODULO_2 = {
  "id": 2,
  "titulo": "Produtos do mercado financeiro",
  "peso": "40%",
  "questoesProva": 20,
  "resumoExecutivo": "É o módulo mais importante da CPA (40% da prova = 20 questões). Exige domínio absoluto sobre produtos de Renda Fixa (Tesouro Direto, títulos bancários, crédito privado, FGC e tributação), Renda Variável e COE (IPO, eventos corporativos, governança e IR), Fundos de Investimento sob a Resolução CVM 175/22 e FIIs, Previdência Complementar (PGBL vs. VGBL, regimes tributários, portabilidade e tipos de renda), além de Operações de Crédito, Serviços Bancários, Câmbio e Seguros.",
  "topicos": [
    {
      "codigo": "2.1.1.1",
      "titulo": "Renda Fixa: Títulos Públicos Federais e Tesouro Direto",
      "prioridade": "Alta",
      "explicacao": "Os Títulos Públicos Federais são emitidos pela <b>Secretaria do Tesouro Nacional (STN)</b> para financiar a dívida pública e possuem o <b>menor risco de crédito da economia (Risco Soberano)</b>, não contando com cobertura do FGC. No <b>Tesouro Direto</b> (plataforma para Pessoas Físicas com liquidez diária D+0/D+1 garantida pela recompra do Tesouro a preços de mercado), negociam-se:<ul><li><b>Tesouro Selic (LFT):</b> 100% pós-fixado (acompanha a Selic diária), sem cupom. Tem baixíssimo risco de mercado (quase não sofre marcação a mercado), sendo ideal para <b>Reserva de Emergência</b> ou cenários de alta de juros.</li><li><b>Tesouro Prefixado (LTN - sem cupom; e NTN-F - com juros semestrais):</b> Taxa fixa definida na compra. A LTN paga R$ 1.000,00 no vencimento (comprada com deságio). Indicado quando há expectativa de <b>queda na taxa de juros</b> (marcação a mercado favorável se os juros caírem, e desfavorável se subirem).</li><li><b>Tesouro IPCA+ (NTN-B Principal - sem cupom; e NTN-B - com juros semestrais):</b> Híbrido (IPCA + taxa prefixada real). Protege o poder de compra contra a inflação no longo prazo.</li><li><b>Tesouro Renda+ (NTN-B1):</b> Focado na aposentadoria complementar; após o período de acumulação, paga <b>240 parcelas mensais (20 anos)</b> corrigidas pelo IPCA (amortização + juros).</li><li><b>Tesouro Educa+:</b> Focado no custeio universitário/educacional; após a acumulação, paga <b>60 parcelas mensais (5 anos)</b> corrigidas pelo IPCA.</li></ul>",
      "gatilhosProva": [
        "Gatilho 1: Reserva de emergência, liquidez sem risco de perda na marcação a mercado ou expectativa de alta da Selic -> Tesouro Selic (LFT).",
        "Gatilho 2: Expectativa de queda nos juros futuros para travar taxa alta -> Tesouro Prefixado (LTN).",
        "Gatilho 3: Proteção do poder de compra + renda mensal por 20 anos na aposentadoria -> Tesouro Renda+; por 5 anos para faculdade -> Tesouro Educa+."
      ],
      "pegadinhas": [
        "Afirmar que Títulos Públicos Federais possuem garantia do FGC até R$ 250 mil (FALSO: a garantia é soberana do Tesouro Nacional).",
        "Dizer que o Tesouro IPCA+ ou Prefixado garante a taxa contratada em caso de resgate antecipado (FALSO: antes do vencimento vale o preço de mercado - marcação a mercado)."
      ]
    },
    {
      "codigo": "2.1.1.1.3",
      "titulo": "Títulos Bancários, Debêntures, CRI/CRA, Poupança e FGC",
      "prioridade": "Alta",
      "explicacao": "Os títulos privados dividem-se conforme o emissor, a garantia do FGC e a isenção de IR para Pessoa Física:<ul><li><b>Títulos Bancários/Cooperativos (COM FGC / FGCoop):</b> <b>CDB</b> (transferível, negociável no secundário, tributado), <b>RDB e RDC</b> (intransferíveis e inegociáveis, tributados; RDC é exclusivo de cooperativas), <b>LCI e LCA (Item 000158)</b> (lastro imobiliário e agro, <b>isentos de IR para PF</b> — o valor bruto resgatado é igual ao líquido sem corretagem —, com <b>carência mínima regulatória</b>, após a qual podem ter liquidez conforme o contrato), e <b>LCD</b> (Letra de Crédito de Desenvolvimento, emitida por Bancos de Desenvolvimento como BNDES, prazo mín. 12 meses, com FGC e <b>isenta de IR para PF</b>).</li><li><b>Títulos Corporativos e Securitizados (SEM FGC! - Item 000141):</b> <b>Debêntures</b> são emitidas por S/A não financeiras (Comuns = tabela regressiva; <b>Debêntures Incentivadas de Infraestrutura Lei 12.431</b> = <b>isentas de IR para PF</b> e 15% para PJ; Conversíveis = viram ações da emissora; Permutáveis = trocadas por ações de outra cia). <b>CRI e CRA</b> são emitidos exclusivamente por <b>Companhias Securitizadoras</b>, <b>NÃO têm FGC</b> (a recuperação depende da performance dos recebíveis imobiliários/agro que compõem o lastro) e são <b>isentos de IR para PF</b>.</li><li><b>Regra do FGC:</b> Cobre até <b>R$ 250 mil por CPF/CNPJ por instituição/conglomerado</b>, com <b>teto global de R$ 1 milhão a cada 4 anos</b>. Em conta conjunta, o limite de R$ 250 mil é dividido entre os titulares da conta.</li><li><b>Poupança:</b> Recursos direcionados ao SFH. Coberta pelo FGC e isenta de IR para PF. Rende na <b>data de aniversário mensal</b> (resgate antes perde 100% do juro do mês; dias 29, 30 e 31 fazem aniversário no dia 1º). Regra: se <b>Selic &gt; 8,5% a.a.</b> rende <code>0,5% a.m. + TR</code>; se <b>Selic &le; 8,5% a.a.</b> rende <code>70% da Selic + TR</code>.</li><li><b>TR e TLP:</b> A TR é calculada pelo Bacen a partir das LTNs com redutor. A TLP (contratos do BNDES) equivale a <b>IPCA + juro real das NTN-Bs de 5 anos</b>.</li></ul>",
      "gatilhosProva": [
        "Gatilho 1: PF buscando isenção de IR + garantia do FGC -> LCI, LCA, LCD ou Poupança.",
        "Gatilho 2: PF buscando isenção de IR financiando empresas diretamente (sem FGC) -> Debêntures Incentivadas (Lei 12.431), CRI ou CRA.",
        "Gatilho 3: Conta conjunta com 2 titulares e R$ 400 mil no banco que quebrou -> O FGC paga no máximo R$ 250 mil para a conta (R$ 125 mil para cada titular)."
      ],
      "pegadinhas": [
        "Confundir LCI/LCA (emitidas por bancos, TÊM FGC) com CRI/CRA (emitidos por companhias securitizadoras, NÃO TÊM FGC).",
        "Achar que a isenção de IR em LCI, LCA, CRI e CRA também vale para Pessoa Jurídica (FALSO: a isenção é exclusiva para Pessoa Física; PJ paga tabela regressiva)."
      ]
    },
    {
      "codigo": "2.1.1.1.11",
      "titulo": "Tributação na Renda Fixa (IR Regressivo e IOF) e Rating",
      "prioridade": "Alta",
      "explicacao": "Nos títulos de Renda Fixa tributáveis (Tesouro Direto, CDB, RDB, Debêntures Comuns, COE), os impostos incidem exclusivamente na fonte sobre os <b>rendimentos</b>:<ul><li><b>IOF Regressivo:</b> Cobrado apenas em resgates realizados entre o <b>1º dia (96% do rendimento) e o 29º dia (3% do rendimento)</b>. A partir do <b>30º dia é isento (0%)</b>. Sempre é calculado <b>antes do IR</b> (o IR incide sobre o rendimento líquido de IOF).</li><li><b>Tabela Regressiva de IR:</b><ul><li>Até 180 dias: <b>22,5%</b></li><li>De 181 a 360 dias: <b>20,0%</b></li><li>De 361 a 720 dias: <b>17,5%</b></li><li>Acima de 720 dias: <b>15,0%</b></li></ul></li><li><b>Rating de Crédito:</b> Avaliação independente (S&amp;P, Moody's, Fitch) sobre a capacidade do emissor honrar a dívida (risco de crédito). Quanto <b>pior o rating</b> (maior risco de calote), <b>maior o prêmio de risco (taxa de juros)</b> que o emissor precisa oferecer para atrair investidores.</li></ul>",
      "gatilhosProva": [
        "Gatilho 1: Resgate no 20º dia de um CDB -> Incide primeiro IOF regressivo e depois IR de 22,5% sobre o rendimento restante.",
        "Gatilho 2: Resgate em 400 dias -> Isento de IOF e alíquota de IR de 17,5% (faixa de 361 a 720 dias)."
      ],
      "pegadinhas": [
        "Afirmar que na Renda Fixa o investidor deve recolher o IR via DARF (FALSO: na Renda Fixa a retenção é exclusiva na fonte pela instituição pagadora).",
        "Dizer que um alto Rating (AAA) assegura que o título não sofrerá oscilações de preço no mercado secundário (FALSO: Rating mede apenas Risco de Crédito, não Risco de Mercado)."
      ]
    },
    {
      "codigo": "2.1.1.2",
      "titulo": "Renda Variável: Ações, Ofertas Públicas (IPO/Bookbuilding) e Eventos Corporativos",
      "prioridade": "Alta",
      "explicacao": "Diferente das Limitadas (Ltda., divididas em quotas), as <b>Sociedades Anônimas (S/A)</b> têm capital dividido em ações, podendo ser <b>Abertas</b> (registradas na CVM para negociar valores mobiliários no mercado público, listadas ou não em bolsa) ou <b>Fechadas</b>.<ul><li><b>Tipos de Ativos e Cálculo do Preço Justo de BDR (Item 000234!):</b> <b>ON (Ordinárias)</b> dão direito a voto e 80% de Tag Along legal; <b>PN (Preferenciais)</b> dão prioridade nos dividendos (adquirem direito a voto se a cia ficar <b>3 exercícios seguidos sem pagar dividendos</b>); <b>Units</b> são pacotes de ON+PN; <b>BDRs</b> são certificados negociados na B3 com lastro em ações do exterior, cujo <b>Valor Justo em Reais = (Cotação da Ação em US$ &times; Taxa de Câmbio) / Razão de Conversão (Paridade BDRs por Ação)</b> (ex.: <code>US$ 480 &times; R$ 5,41 / 24 BDRs = R$ 108,20</code>); <b>Bônus de Subscrição</b> dão direito de comprar novas ações no futuro.</li><li><b>Mercados e Ofertas (IPO e Follow-on Primário vs. Secundário - Item 000235!):</b> No <b>Mercado Primário</b> (IPO ou parcela primária de Follow-on), há emissão de novas ações: <b>apenas a parcela primária gera entrada de recursos para o caixa da companhia e provoca diluição da participação percentual</b> dos acionistas que não acompanharem a emissão. Na <b>Oferta Secundária</b>, acionistas atuais vendem suas ações já existentes (o dinheiro vai para os sócios vendedores e não altera o número total de ações nem dilui participação). No <b>Mercado Secundário</b> (B3), os investidores negociam entre si, gerando <b>liquidez real</b>.</li><li><b>Eventos Corporativos (Item 000292!):</b><ul><li><b>AGO</b> (anual, até 4 meses após fim do exercício: aprova contas, dividendos e elege conselho) vs. <b>AGE</b> (a qualquer tempo: reforma estatuto, fusões, etc.).</li><li><b>Dividendos</b> são <b>isentos de IR</b>; <b>JCP (Juros sobre Capital Próprio)</b> são despesa dedutível para a empresa e sofrem <b>15% de IR na fonte</b> para o acionista.</li><li><b>Desdobramento (Split - Item 000292):</b> Multiplica a quantidade de ações e divide o preço na mesma proporção (ex: 1 ação de R$ 100 vira 10 de R$ 10). <b>Não altera o valor do capital social da empresa nem a participação percentual do acionista!</b> Objetivo: aumentar liquidez.</li><li><b>Grupamento (Inplit):</b> Reúne várias ações em uma só (aumenta o preço unitário e reduz a quantidade), também sem alterar o capital social nem o % do sócio.</li><li><b>Bonificação:</b> Distribuição gratuita de novas ações por incorporação de reservas ao capital social. <b>Subscrição:</b> Direito de preferência para comprar novas ações emitidas pela empresa (entra dinheiro no caixa).</li></ul></li></ul>",
      "gatilhosProva": [
        "Gatilho 1 (Questão 11): Alta demanda no IPO e rateio no bookbuilding -> Pressiona o preço na abertura do mercado secundário, onde a liquidez real se estabelece.",
        "Gatilho 2 (Questão 13): Desdobramento (Split) de 1 para 10 ações -> Aumenta o número de ações em circulação, mas o capital social da cia e a participação (%) do acionista ficam INALTERADOS."
      ],
      "pegadinhas": [
        "Afirmar que no Desdobramento (Split) o patrimônio do acionista ou o capital social da empresa aumenta (FALSO: não há entrada de recursos; preço e quantidade se ajustam na proporção exata).",
        "Dizer que o Lote Suplementar (Green Shoe) no IPO serve para fixar a cotação e proibir volatilidade no mercado secundário (FALSO)."
      ]
    },
    {
      "codigo": "2.1.1.2.3",
      "titulo": "Índices de Bolsa, Governança Corporativa, Tributação em RV e COE",
      "prioridade": "Alta",
      "explicacao": "O mercado acionário conta com índices de referência, segmentos de governança e regras próprias de tributação:<ul><li><b>Índices da B3:</b> <b>Ibovespa</b> (carteira teórica de retorno total dos ativos de maior negociabilidade e representatividade), <b>IBrX-100</b> (100 ações mais negociadas ponderadas pelo <i>free float</i>) e <b>IBrX-50</b> (50 mais líquidas).</li><li><b>Governança Corporativa na B3:</b><ul><li><b>Novo Mercado (Padrão Máximo):</b> Permite <b>EXCLUSIVAMENTE ações Ordinárias (100% ON)</b>, <b>Tag Along de 100%</b>, <i>Free Float</i> mínimo de 25% (ou 15% para alto volume diário) e Conselho de Administração com mínimo de 3 membros (sendo pelo menos 2 ou 20% independentes).</li><li><b>Nível 2:</b> Igual ao Novo Mercado (Tag Along de 100% para ON e PN), mas <b>permite ações PN</b> (que ganham voto em temas societários críticos).</li><li><b>Nível 1:</b> Permite ON e PN, Tag Along legal (80% ON) e foco em transparência e <i>free float</i> (25%).</li><li><b>Tag Along vs. Drag Along:</b> <i>Tag Along</i> protege o minoritário (direito de vender junto se o controle mudar); <i>Drag Along</i> protege o majoritário (direito de obrigar o minoritário a vender junto pelo mesmo preço).</li></ul></li><li><b>Tributação em Ações (Pessoa Física):</b><ul><li><b>Swing Trade (dias diferentes):</b> Alíquota de <b>15%</b> sobre o lucro líquido mensal (IRRF dedo-duro de 0,005% na venda). <b>ISENTO de IR para PF se o total de alienações (vendas) de ações no mês for igual ou inferior a R$ 20.000,00!</b></li><li><b>Day Trade (compra e venda no mesmo dia):</b> Alíquota de <b>20%</b> sobre o lucro (IRRF de 1% na fonte sobre o ganho). <b>NÃO tem isenção de R$ 20 mil!</b></li><li>Recolhimento via <b>DARF pelo próprio investidor</b> até o último dia útil do mês seguinte. Prejuízos abatem lucros futuros da mesma modalidade (Swing com Swing; Day Trade com Day Trade).</li></ul></li><li><b>COE (Certificado de Operações Estruturadas):</b> Emitido por bancos mesclando Renda Fixa e Derivativos. Duas modalidades: <b>Capital Protegido</b> (garante o principal no vencimento) ou <b>Capital em Risco</b> (pode perder até o valor investido). Exige entrega do <b>DIE</b>, <b>NÃO tem FGC</b> e é tributado pela <b>Tabela Regressiva da Renda Fixa (22,5% a 15% na fonte)</b>.</li></ul>",
      "gatilhosProva": [
        "Gatilho 1: Segmento que exige 100% de ações ON e 100% de Tag Along -> Novo Mercado. Permite PN com 100% de Tag Along -> Nível 2.",
        "Gatilho 2: PF vendeu R$ 18 mil em ações em operações comuns (Swing Trade) com lucro -> ISENTO de IR (vendas até R$ 20 mil/mês). Se foi Day Trade ou ETF/FII -> Tributado!",
        "Gatilho 3: Produto bancário estruturado com derivativos, sem FGC e tributado pela tabela regressiva de RF -> COE."
      ],
      "pegadinhas": [
        "Achar que a isenção de R$ 20 mil/mês vale para Day Trade, FIIs, ETFs ou BDRs (FALSO: vale exclusivamente para vendas de ações à vista em operações comuns por PF).",
        "Afirmar que o COE de Capital Protegido conta com garantia do FGC (FALSO: COE não tem cobertura do FGC em nenhuma hipótese)."
      ]
    },
    {
      "codigo": "2.1.2.2",
      "titulo": "Fundos de Investimento: Resolução CVM 175/22, Classes e Segregação Patrimonial",
      "prioridade": "Alta",
      "explicacao": "O Fundo de Investimento é uma comunhão de recursos constituída sob a forma de <b>condomínio de natureza especial</b>, cujo funcionamento exige <b>prévio registro na CVM</b> (Questão 14!). A <b>Resolução CVM nº 175/22</b> modernizou toda a indústria:<ul><li><b>Estrutura em 3 Níveis e Emissão de Cotas (Questão 16 e Item 000239!):</b> <b>Fundo</b> &rarr; <b>Classes de Cotas</b> (carteiras distintas com <b>Segregação Patrimonial Jurídica</b> e CNPJ próprio: os prejuízos ou dívidas de uma classe jamais contaminam outra classe ou outros fundos! Novas emissões de cotas devem seguir o regulamento e a política da classe, respeitando prazos e controles contábeis definidos) &rarr; <b>Subclasses</b> (divisões dentro da mesma classe diferenciadas apenas por público-alvo, prazos/condições de resgate e taxas).</li><li><b>Responsabilidade Limitada vs. Ilimitada (Questão 12 e Item 000236!):</b> A <b>Responsabilidade Limitada ao valor investido</b> passou a ser a <b>regra geral</b> na CVM 175, salvo previsão expressa de responsabilidade ilimitada no regulamento aceita formalmente pelo investidor por meio do <b>Termo de Adesão e Ciência de Risco</b> (Art. 29 da CVM 175).</li><li><b>Vedações Estritas do Art. 101 da CVM 175 (Item 000237!):</b> É expressamente vedado ao administrador e ao gestor (em nome do fundo/classe): <b>(1) prometer rentabilidade</b> predeterminada aos cotistas; <b>(2) conceder empréstimos/crédito</b> ou adiantamentos; e <b>(3) usar ativos/patrimônio do fundo como garantia</b> (prestar fiança, aval, aceite ou coobrigar-se em operações privadas).</li><li><b>Prestadores de Serviços:</b><ul><li><b>Serviços Essenciais:</b> <b>Administrador Fiduciário</b> (responsável legal, controladoria, cálculo da cota) e <b>Gestor de Recursos</b> (compra e venda dos ativos da carteira e contratação de distribuidores). Na CVM 175, cada um responde individualmente por suas atribuições (fim da solidariedade automática).</li><li><b>Serviços Contratados:</b> Custodiante (guarda e liquidação dos ativos), Distribuidor e Auditor Independente. No <b>Investimento por Conta e Ordem</b>, o distribuidor subscreve em seu nome por conta do cliente, assumindo o KYC, suitability e retenção do IR, mantendo o direito político do cotista nas Assembleias (Gerais = todas as classes; Especiais = apenas uma classe/subclasse).</li></ul></li></ul>",
      "gatilhosProva": [
        "Gatilho 1 (Questão 14): Onde verificar a regularidade e o registro de qualquer oferta pública de 'Fundo de Investimento'? -> Na CVM (Comissão de Valores Mobiliários).",
        "Gatilho 2 (Questão 16): Proteção legal que impede que prejuízos de uma classe de fundo afetem outra classe do mesmo fundo -> Segregação Patrimonial (Resolução CVM 175).",
        "Gatilho 3 (Questão 12): Documento obrigatório no ingresso em que o cotista atesta conhecer os fatores de risco (inclusive de perda superior ao capital aplicado quando previsto no regulamento) -> Termo de Adesão e Ciência de Risco."
      ],
      "pegadinhas": [
        "Dizer que o Gestor é o responsável legal pelo fundo perante a CVM ou pelo cálculo da cota (FALSO: isso é função do Administrador Fiduciário; o Gestor escolhe os ativos da carteira).",
        "Afirmar que Subclasses possuem carteiras de ativos diferentes (FALSO: quem tem carteira e patrimônio segregado é a Classe; Subclasses compartilham a mesma carteira da Classe, mudando apenas taxas, prazos e público-alvo)."
      ]
    },
    {
      "codigo": "2.1.2.3",
      "titulo": "FIFs (Tipificação, Crédito Privado e Limites), Tributação (Come-Cotas) e FIIs",
      "prioridade": "Alta",
      "explicacao": "O Anexo I da Resolução CVM 175 regula os <b>Fundos de Investimento Financeiro (FIF)</b>:<ul><li><b>Tipificação:</b> <b>Renda Fixa</b> (mín. 80% em juros domésticos ou inflação; RF Simples tem mín. 95% em risco soberano), <b>Ações</b> (mín. <b>67%</b> em ações/BDRs/ETFs/cotas FIA), <b>Cambial</b> (mín. <b>80%</b> em moedas), <b>Multimercado</b> (vários fatores sem concentração obrigatória) e <b>FI-Infra</b> (investe em debêntures incentivadas, isento de IR para PF).</li><li><b>Crédito Privado (Questão 15!):</b> Classes com <b>mais de 50% do PL</b> em ativos privados devem trazer 'Crédito Privado' no nome. Sua principal vantagem frente a comprar um título privado individual é a <b>diversificação do risco de crédito</b>, diluindo o impacto do calote de um emissor individual.</li><li><b>Limites por Emissor (FIF Varejo):</b> União Federal (<b>100%</b>), Instituição Financeira (<b>20%</b>), Companhia Aberta (<b>10%</b>), Cotas de Fundos (<b>10%</b>) e PF ou Cia Fechada (<b>5%</b>).</li><li><b>Tributação de Fundos (Come-Cotas):</b><ul><li><b>Fundos de Longo Prazo</b> (carteira &gt; 365 dias): Tabela regressiva de 22,5% a 15%, com <b>Come-Cotas semestral de 15%</b> (último dia útil de maio e novembro, reduzindo a quantidade de cotas).</li><li><b>Fundos de Curto Prazo</b> (carteira &le; 365 dias): Alíquotas de 22,5% (até 180d) e 20% (&gt;180d), com <b>Come-Cotas semestral de 20%</b>.</li><li><b>Fundos de Ações (FIA):</b> <b>15% apenas no resgate</b>, isentos de IOF e <b>SEM come-cotas</b>!</li></ul></li><li><b>Fundos Imobiliários (FIIs - Anexo III):</b> Condomínios <b>fechados</b> (sem resgate; negociados na B3). Podem ser de <b>Tijolo</b> (imóveis físicos; risco de vacância), <b>Papel</b> (CRIs/LCIs; risco de crédito) ou <b>Híbridos</b>. <b>Rendimentos mensais são ISENTOS de IR para PF</b> (desde que negociados em bolsa, fundo com mín. 100/500 cotistas e PF com menos de 10% das cotas). <b>Ganho de capital na venda da cota paga 20% de IR via DARF</b> (sem isenção de R$ 20 mil).</li></ul>",
      "gatilhosProva": [
        "Gatilho 1 (Questão 15): Vantagem de investir em um Fundo de Crédito Privado em vez de um título individual -> Reduzir o risco de perdas de crédito pela diversificação entre vários emissores.",
        "Gatilho 2: Limites de concentração por emissor no FIF -> 20% Banco (IF), 10% S/A Aberta, 5% S/A Fechada ou PF.",
        "Gatilho 3: FII para Pessoa Física -> Dividendos isentos de IR (se &lt; 10% das cotas em bolsa); Lucro na venda da cota = 20% de IR via DARF."
      ],
      "pegadinhas": [
        "Afirmar que o Come-Cotas reduz o valor da cota em maio e novembro (FALSO: o Come-Cotas reduz a QUANTIDADE de cotas do investidor!).",
        "Dizer que Fundos de Ações sofrem Come-Cotas de 15% ou que FIIs permitem resgate de cotas a qualquer momento (FALSO)."
      ]
    },
    {
      "codigo": "2.2.1",
      "titulo": "Previdência Complementar: PGBL vs. VGBL e Regimes Tributários (Progressivo vs. Regressivo)",
      "prioridade": "Alta",
      "explicacao": "A Previdência Complementar Aberta (fiscalizada pela SUSEP) não possui come-cotas e divide-se em duas modalidades e dois regimes tributários:<ul><li><b>PGBL (Plano Gerador de Benefício Livre - Questões 2 e 17!):</b> Indicado para quem faz a <b>Declaração Completa do IRPF</b>, possui renda tributável e <b>contribui para o regime oficial (INSS ou RPPS)</b>. Permite <b>deduzir os aportes em até 12% da renda bruta tributável anual</b> (diferimento fiscal). Em compensação, no resgate ou benefício, o <b>IR incide sobre o VALOR TOTAL (capital aportado + rendimentos)</b>.</li><li><b>VGBL (Vida Gerador de Benefício Livre - Questão 18!):</b> Seguro de pessoas indicado para quem faz a <b>Declaração Simplificada do IRPF</b>, é isento, profissional liberal/autônomo com baixa renda tributável, ou quem deseja aplicar <b>acima dos 12% do PGBL</b>. Não deduz na entrada, mas no resgate o <b>IR incide APENAS sobre os RENDIMENTOS</b>.</li><li><b>Regime Progressivo (Compensável):</b> Segue a tabela do IRPF conforme o valor recebido (0% até <b>27,5%</b>). Nos resgates antecipados, retém <b>15% na fonte como antecipação</b>, ajustando na Declaração Anual.</li><li><b>Regime Regressivo (Definitivo na Fonte):</b> Alíquotas exclusivas baseadas no tempo de cada aporte: começa em <b>35% (até 2 anos)</b> e cai 5% a cada 2 anos (30%, 25%, 20%, 15%) até atingir <b>10% acima de 10 anos</b>. Pela Lei 14.803/24, a escolha entre Progressivo e Regressivo pode ser feita até o primeiro resgate ou concessão do benefício.</li></ul>",
      "gatilhosProva": [
        "Gatilho 1 (Questões 2 e 17): Cliente faz declaração completa, contribui para INSS/RPPS e quer abater até 12% da renda bruta -> PGBL (tributa o total no resgate).",
        "Gatilho 2 (Questão 18): Cliente faz declaração simplificada (ex: pró-labore de 1 salário mínimo) -> VGBL (tributa apenas os rendimentos no resgate).",
        "Gatilho 3: Investidor de longo prazo (> 10 anos) buscando a menor alíquota de IR (10%) -> Regime Regressivo."
      ],
      "pegadinhas": [
        "Recomendar PGBL para quem faz declaração simplificada: é o pior erro financeiro possível, pois o cliente não aproveita a dedução na entrada e ainda paga IR sobre 100% do capital no resgate!",
        "Afirmar que no resgate do Regime Progressivo a alíquota de 15% na fonte é definitiva (FALSO: é apenas antecipação sujeita ao ajuste de até 27,5% na declaração anual)."
      ]
    },
    {
      "codigo": "2.2.3",
      "titulo": "Previdência: Portabilidade e Modalidades de Transformação em Renda",
      "prioridade": "Alta",
      "explicacao": "Durante a fase de acumulação (contribuição), o participante pode realizar a <b>Portabilidade</b> (interna na mesma seguradora ou externa para outra instituição), sem incidência de IR e mantendo a antiguidade dos aportes, respeitando duas travas absolutas:<ul><li><b>1. Proibido mudar de modalidade:</b> PGBL só porta para PGBL; VGBL só porta para VGBL.</li><li><b>2. Proibido retroceder na tabela regressiva:</b> Pode migrar do <b>Progressivo para o Regressivo</b>, mas <b>NUNCA do Regressivo para o Progressivo</b> (o Regressivo é irretratável).</li></ul>Na fase de benefício (aposentadoria), além do resgate único, a reserva pode ser convertida em diferentes tipos de renda atuarial (Questão 19!):<ul><li><b>Renda Mensal por Prazo Certo (Questão 19!):</b> Paga por um número prefixado de anos (ex: 15 anos). Se o titular falecer antes do término do prazo, <b>o pagamento continua normalmente aos beneficiários indicados até o fim do período contratado</b>.</li><li><b>Renda Mensal Temporária:</b> Paga por prazo determinado, mas <b>cessa imediatamente se o titular falecer antes do prazo</b> (não reverte a ninguém).</li><li><b>Renda Mensal Vitalícia (RMV):</b> Paga até a morte do titular e <b>cessa com o falecimento</b> (sem reversão).</li><li><b>Renda Vitalícia com Prazo Mínimo Garantido:</b> Vitalícia para o titular; se ele falecer dentro do prazo mínimo (ex: 10 anos), os beneficiários recebem até completar esse prazo mínimo.</li><li><b>Renda Vitalícia Reversível (a Beneficiário Indicado ou Cônjuge/Menores):</b> Vitalícia para o titular e, após sua morte, continua sendo paga aos beneficiários conforme percentual contratado.</li></ul>",
      "gatilhosProva": [
        "Gatilho 1 (Questão 19): Aposentado quer renda mensal por tempo determinado e garantir que, se falecer antes do fim desse período, os filhos continuem recebendo até acabar o prazo -> Renda Mensal por Prazo Certo.",
        "Gatilho 2: Participante quer fazer portabilidade de um plano Regressivo para um Progressivo -> PROIBIDO pela legislação."
      ],
      "pegadinhas": [
        "Confundir 'Renda Mensal por Prazo Certo' (continua para os beneficiários até o fim do prazo se o titular morrer) com 'Renda Mensal Temporária' (cessa imediatamente na morte do titular).",
        "Dizer que na portabilidade de previdência incide IR ou que é permitido portar de PGBL para VGBL (FALSO)."
      ]
    },
    {
      "codigo": "2.3",
      "titulo": "Produtos de Crédito e Financiamento: Cartão, Cheque Especial, Consignado, CDC e Consórcio",
      "prioridade": "Alta",
      "explicacao": "A análise de crédito utiliza o <b>Score</b> (bureaus como Serasa) e o <b>SCR (Sistema de Informações de Créditos do Bacen)</b>, que registra operações a partir de R$ 200,00 (mediante autorização do cliente).<ul><li><b>Conceitos:</b> <b>Empréstimo</b> não tem destinação específica (uso livre); <b>Financiamento</b> exige destinação específica (aquisição de veículo/imóvel, geralmente com garantia de alienação fiduciária); <b>Leasing</b> é arrendamento mercantil com opção de compra pelo VRG (incide ISS, não IOF); <b>Consórcio</b> é autofinanciamento em grupo fechado administrado por instituição fiscalizada pelo Bacen, <b>sem juros</b> (cobra taxa de administração), com contemplação por sorteio ou lance.</li><li><b>Cartão de Crédito e Refinanciamento (Questão 20!):</b> Quem não paga a fatura integral entra no rotativo (máximo de 30 dias). O <b>refinanciamento (parcelamento) da fatura</b> substitui a dívida por um novo contrato com <b>parcelas fixas, prazo definido e taxa de juros menor que a do rotativo</b>, havendo incidência normal de <b>encargos financeiros e impostos (IOF)</b>.</li><li><b>Cheque Especial (Questão 21!):</b> Cobra <b>juros calculados por dia apenas sobre o valor efetivamente utilizado</b> (teto de 8% a.m. para PF/MEI). Além dos juros, incide <b>IOF composto por uma alíquota fixa (0,38% na liberação) + uma alíquota diária</b> pelo tempo em que o saldo fica negativo!</li><li><b>Crédito Consignado (Questão 22!):</b> Como as parcelas são descontadas diretamente na folha salarial ou benefício do INSS, <b>reduz drasticamente o risco de inadimplência para o banco</b>, garantindo <b>juros muito menores e prazos mais longos</b> para reorganizar dívidas caras.</li></ul>",
      "gatilhosProva": [
        "Gatilho 1 (Questão 20): Refinanciamento da fatura do cartão -> Parcelas fixas e prazo definido, juros menores que o rotativo, com incidência de encargos financeiros e impostos (IOF).",
        "Gatilho 2 (Questão 21): Cliente usou cheque especial por 5 dias e pagou mais que os juros divulgados -> Os juros são diários sobre o valor usado + IOF fixo na liberação + IOF diário pelo tempo de uso.",
        "Gatilho 3 (Questão 22): Aposentada quer quitar dívidas atrasadas com menor juro e maior prazo -> Crédito Consignado (desconto em folha reduz o risco do banco)."
      ],
      "pegadinhas": [
        "Afirmar que no Cheque Especial os juros incidem sobre o limite total ou que o IOF é cobrado apenas uma vez sem parcela diária (FALSO).",
        "Dizer que o Financiamento de Veículo tem juros menores que o Consignado para quitar dívidas gerais (FALSO: financiamento exige bem específico e o consignado tem a menor taxa para uso livre)."
      ]
    },
    {
      "codigo": "2.4",
      "titulo": "Serviços Bancários, Depósito Compulsório, PIX, Atendimento e Conta Internacional",
      "prioridade": "Alta",
      "explicacao": "Os serviços bancários e cambiais envolvem regras de liquidez macroeconômica, gratuidades e acesso digital:<ul><li><b>Depósito Compulsório e Limites de Crédito (Questão 23!):</b> Quando o Banco Central <b>eleva o compulsório sobre depósitos à vista</b>, ele <b>retira dinheiro de circulação</b> (imobiliza parte dos depósitos no Bacen), diminuindo o montante que os bancos têm livre para emprestar e levando a uma <b>política de crédito mais restritiva</b> (como redução do limite do cheque especial).</li><li><b>Canais de Atendimento Bancário (Questão 24!):</b> Os bancos devem oferecer canais <b>presenciais, digitais e telefônicos</b> com segurança e clareza, e <b>o cliente tem o direito de escolher o canal conforme sua necessidade</b> (é proibido obrigar o cliente a usar apenas o app ou autoatendimento).</li><li><b>Tarifas e PIX:</b> Pessoas Físicas têm direito ao <b>Pacote de Serviços Essenciais gratuito</b> em conta corrente e à <b>gratuidade no PIX</b> (envio e recebimento no SPI 24/7; PJs podem ser tarifadas).</li><li><b>Conta Internacional e Câmbio (Questão 25!):</b> Com a modernização cambial, <b>plataformas digitais passaram a permitir a abertura de contas no exterior com integração cambial e fiscal</b>, democratizando o acesso a investimentos globais para diversos perfis de investidores (tributados no Brasil à alíquota anual de 15% sobre rendimentos/ganhos no exterior pela Lei 14.754/23).</li></ul>",
      "gatilhosProva": [
        "Gatilho 1 (Questão 23): Banco reduziu limite do cheque especial após Bacen subir o depósito compulsório -> Compulsório retira dinheiro de circulação, reduzindo a liquidez dos bancos para emprestar.",
        "Gatilho 2 (Questão 24): Cliente quer atendimento humano presencial na agência em vez do aplicativo -> O cliente tem direito de escolher livremente entre os canais presenciais, digitais e telefônicos.",
        "Gatilho 3 (Questão 25): Acesso de brasileiros a investimentos no exterior hoje -> Facilitado por plataformas digitais que integram câmbio e aspectos fiscais para diversos perfis."
      ],
      "pegadinhas": [
        "Afirmar que o banco pode exigir agendamento prévio ou proibir atendimento presencial na agência quando a demanda puder ser resolvida no aplicativo (FALSO: fere as normas do Bacen/CMN).",
        "Dizer que remessas para contas internacionais ainda exigem autorização formal prévia do Banco Central a cada operação (FALSO)."
      ]
    },
    {
      "codigo": "2.5",
      "titulo": "Seguros de Vida (Vida Inteira, Temporário, Tradicional) e Patrimoniais (Auto, Residencial e Prestamista)",
      "prioridade": "Alta",
      "explicacao": "Nos seguros (supervisionados pela SUSEP), o segurado paga o <b>Prêmio</b> para ter cobertura contra o <b>Sinistro</b>, recebendo a <b>Indenização</b>.<ul><li><b>Seguros de Vida:</b> A indenização não entra em inventário e é isenta de IR.<ul><li><b>Vida Inteira (Whole Life):</b> Cobertura vitalícia (não expira) e forma reserva matemática que permite <b>resgate em vida</b>.</li><li><b>Temporário:</b> Cobre apenas um período determinado (ex: 10 anos); se não houver sinistro, encerra sem resgate (prêmio mais barato).</li><li><b>Tradicional:</b> Vigência renovável (anual) com reajuste por faixa etária, sem formação de reserva para resgate.</li></ul></li><li><b>Seguros Patrimoniais:</b><ul><li><b>Automóvel:</b> Cobre Casco (colisão/roubo), RCF-V (danos a terceiros) e APP (passageiros). A <b>franquia</b> só é cobrada em perda parcial do casco (isenta em perda total e danos a terceiros).</li><li><b>Residencial:</b> Cobertura básica obrigatória contra incêndio, raio e explosão + adicionais opcionais.</li><li><b>Seguro Prestamista (Questão 26!):</b> Vinculado a uma operação de crédito para quitar/amortizar a dívida em caso de morte, invalidez ou desemprego, tendo o <b>credor (banco) como beneficiário</b>. <b>Regra de Ouro (Questão 26):</b> Como a apólice é estritamente vinculada ao contrato original (saldo e prazo), se o cliente realizar um <b>refinanciamento da dívida</b> (gerando novo contrato, valor e prazo), <b>a apólice anterior deixa de vigorar, exigindo-se nova cobertura prestamista vinculada ao novo contrato!</b></li></ul></li></ul>",
      "gatilhosProva": [
        "Gatilho 1 (Questão 26): Cliente refinanciou um empréstimo consignado (gerando novo contrato, prazo e valor) e pergunta sobre o seguro prestamista anterior -> A apólice anterior deixa de vigorar e exige-se nova cobertura vinculada ao credor.",
        "Gatilho 2: Seguro de vida vitalício que acumula reserva passível de resgate -> Seguro de Vida Inteira (Whole Life)."
      ],
      "pegadinhas": [
        "Afirmar que no refinanciamento de dívida a apólice original do seguro prestamista se estende automaticamente para o novo prazo e valor (FALSO: o refinanciamento extingue o contrato original e exige nova apólice).",
        "Dizer que o banco pode impor a contratação do seguro prestamista como condição obrigatória para aprovar o empréstimo (FALSO: isso é venda casada, prática proibida)."
      ]
    }
  ],
  "flashcards": [
    {
      "frente": "Qual título do Tesouro Direto é 100% pós-fixado e indicado para Reserva de Emergência ou cenário de alta de juros?",
      "verso": "Tesouro Selic (LFT - Letra Financeira do Tesouro), pois acompanha a Selic diária e possui baixíssimo risco de oscilação na marcação a mercado."
    },
    {
      "frente": "Qual a diferença entre Tesouro Renda+ e Tesouro Educa+ no fluxo de recebimento?",
      "verso": "Após o período de acumulação, o Tesouro Renda+ paga 240 parcelas mensais (20 anos) para aposentadoria, enquanto o Tesouro Educa+ paga 60 parcelas mensais (5 anos) para custeio educacional, ambos corrigidos pelo IPCA."
    },
    {
      "frente": "Quais são os limites de cobertura do FGC (Fundo Garantidor de Créditos)?",
      "verso": "Até R$ 250 mil por CPF/CNPJ por instituição (ou conglomerado financeiro), sujeito a um teto global de R$ 1 milhão renovável a cada 4 anos."
    },
    {
      "frente": "Qual a diferença entre LCI/LCA e CRI/CRA quanto ao emissor e à garantia do FGC?",
      "verso": "LCI e LCA são emitidas por Bancos e TÊM garantia do FGC. CRI e CRA são emitidos exclusivamente por Companhias Securitizadoras e NÃO têm garantia do FGC. (Todos são isentos de IR para Pessoa Física)."
    },
    {
      "frente": "Qual a regra de rentabilidade da Caderneta de Poupança?",
      "verso": "Se a Meta Selic for maior que 8,5% a.a., rende 0,5% ao mês + TR. Se a Meta Selic for igual ou menor que 8,5% a.a., rende 70% da Selic + TR. (Rende apenas na data de aniversário mensal para PF)."
    },
    {
      "frente": "Quais são as alíquotas e prazos da Tabela Regressiva de IR da Renda Fixa?",
      "verso": "Até 180 dias: 22,5% | De 181 a 360 dias: 20,0% | De 361 a 720 dias: 17,5% | Acima de 720 dias: 15,0%. (E IOF regressivo nos primeiros 29 dias)."
    },
    {
      "frente": "O que ocorre na abertura do mercado secundário quando um IPO tem demanda muito superior à oferta (rateio)? (Questão 11)",
      "verso": "A demanda elevada não atendida no rateio do IPO cria forte pressão compradora na abertura do mercado secundário, onde a liquidez real se estabelece pela negociação entre investidores."
    },
    {
      "frente": "O que acontece com o capital social da empresa e a participação do acionista em um Desdobramento (Split) de ações? (Questão 13)",
      "verso": "O número de ações em circulação aumenta (e o preço unitário cai na mesma proporção), mas o valor do capital social da empresa e a participação percentual do acionista permanecem INALTERADOS."
    },
    {
      "frente": "Qual a diferença tributária entre Dividendos e JCP (Juros sobre Capital Próprio)?",
      "verso": "Dividendos são isentos de IR (0%). O JCP é tributado em 15% de IR retido exclusivamente na fonte (pois é contabilizado como despesa dedutível na empresa emissora)."
    },
    {
      "frente": "Quais as exigências exclusivas do Novo Mercado (nível máximo de governança da B3)?",
      "verso": "Capital composto EXCLUSIVAMENTE por ações Ordinárias (100% ON), 100% de Tag Along e Free Float mínimo de 25% (ou 15% para alto volume diário)."
    },
    {
      "frente": "Qual a regra de tributação e isenção de IR para Pessoa Física no mercado de ações à vista?",
      "verso": "Swing Trade (dias diferentes): 15% via DARF, mas é ISENTO se o total de vendas de ações no mês for até R$ 20.000,00. Day Trade (mesmo dia): 20% via DARF, SEM isenção."
    },
    {
      "frente": "O que é o COE (Certificado de Operações Estruturadas), tem FGC e como é tributado?",
      "verso": "Título emitido por bancos que combina Renda Fixa e Derivativos (Capital Protegido ou Capital em Risco). NÃO tem FGC e é tributado na fonte pela Tabela Regressiva da Renda Fixa (22,5% a 15%)."
    },
    {
      "frente": "Qual órgão registra e fiscaliza a regularidade de qualquer Fundo de Investimento no Brasil? (Questão 14)",
      "verso": "A CVM (Comissão de Valores Mobiliários), pois o fundo é um condomínio de natureza especial e suas cotas são valores mobiliários."
    },
    {
      "frente": "O que garante a Segregação Patrimonial na Resolução CVM 175/22? (Questão 16)",
      "verso": "Separa juridicamente o patrimônio de cada fundo e de cada Classe de cotas (CNPJ próprio), impedindo que prejuízos ou dívidas de uma classe afetem outras classes ou fundos do mesmo administrador."
    },
    {
      "frente": "Qual documento formaliza a ciência do cotista sobre riscos que podem gerar perdas superiores ao capital aplicado em um fundo? (Questão 12)",
      "verso": "O Termo de Adesão e Ciência de Risco (conforme Art. 29 da Resolução CVM 175/22)."
    },
    {
      "frente": "Qual a principal vantagem de investir em um Fundo de Crédito Privado em vez de títulos individuais? (Questão 15)",
      "verso": "A diversificação do risco de crédito, que dilui a exposição entre diversos emissores e reduz o impacto do não pagamento (calote) de um emissor individual sobre a carteira."
    },
    {
      "frente": "Quais são os limites máximos de concentração por emissor em um FIF para o público em geral?",
      "verso": "União Federal: 100% | Instituição Financeira (Bancos): 20% | Companhia Aberta (S/A): 10% | Cotas de Fundos: 10% | Pessoa Física ou Companhia Fechada: 5%."
    },
    {
      "frente": "Como funciona a tributação para Pessoa Física nos Fundos Imobiliários (FIIs)?",
      "verso": "Rendimentos mensais (aluguéis/dividendos) são ISENTOS de IR para PF (se negociado em bolsa, fundo com mín. 100/500 cotistas e PF com < 10% das cotas). Ganho de capital na venda da cota paga 20% de IR via DARF (sem isenção de R$ 20 mil)."
    },
    {
      "frente": "Qual a diferença fundamental entre PGBL e VGBL? (Questões 2, 17 e 18)",
      "verso": "PGBL: indicado para declaração completa + contribuinte do INSS/RPPS; deduz até 12% da renda bruta anual e o IR no resgate incide sobre o TOTAL. VGBL: indicado para declaração simplificada/isento; não deduz na entrada e o IR incide só sobre os RENDIMENTOS."
    },
    {
      "frente": "Quais são as duas trocas proibidas na Portabilidade de Previdência Complementar?",
      "verso": "1) Não pode migrar entre PGBL e VGBL; 2) Não pode migrar do regime tributário Regressivo para o Progressivo (apenas do Progressivo para o Regressivo)."
    },
    {
      "frente": "Como funciona a Renda Mensal por Prazo Certo na aposentadoria complementar? (Questão 19)",
      "verso": "O benefício é pago por um prazo predeterminado; caso o titular faleça antes do término, o pagamento continua aos beneficiários indicados até o fim do prazo contratado."
    },
    {
      "frente": "Como funciona o refinanciamento da fatura do cartão de crédito? (Questão 20)",
      "verso": "Substitui o saldo devedor por um contrato de parcelamento com parcelas fixas e prazo definido, com juros menores que o rotativo, havendo incidência de encargos financeiros e impostos (IOF)."
    },
    {
      "frente": "Como são cobrados os juros e o IOF no Cheque Especial? (Questão 21)",
      "verso": "Os juros são calculados por dia apenas sobre o valor realmente utilizado, e o IOF soma um percentual fixo na liberação (0,38%) + um percentual diário pelo tempo de utilização do limite."
    },
    {
      "frente": "Por que a elevação do Depósito Compulsório pelo Bacen reduz limites de cheque especial nos bancos? (Questão 23)",
      "verso": "Porque imobiliza parte dos depósitos no Banco Central, retirando dinheiro de circulação e diminuindo o montante que os bancos têm livre para emprestar, gerando restrição de crédito."
    },
    {
      "frente": "O que acontece com o Seguro Prestamista quando o cliente faz um refinanciamento do empréstimo? (Questão 26)",
      "verso": "Como a apólice anterior era vinculada exclusivamente ao contrato original, ela deixa de vigorar no refinanciamento, exigindo-se nova cobertura prestamista vinculada ao novo contrato e credor."
    }
  ],
  "questoes": [
    {
      "id": "M2_Q43",
      "oficial": true,
      "codigoItem": "000140-Q1",
      "codigoPD": "2.1.1.1",
      "nivelCognitivo": "Análise",
      "dificuldade": "Médio",
      "contexto": "No Mapa de Decisão sobre Tesouro Direto (Item 000140), a cliente Claudete procurou Marcos no atendimento bancário dizendo ter ouvido colegas comentarem que o Tesouro Direto seria um investimento do governo 'tipo uma poupança nova', buscando entender como funcionam o resgate antecipado, a liquidez e as diferenças entre os títulos públicos.",
      "enunciado": "Claudete perguntou se o Tesouro Direto era 'tipo uma poupança nova'. Se o gerente tivesse confirmado essa comparação sem ressalvas, a implicação para as expectativas da cliente seria de:",
      "alternativas": [
        {
          "texto": "possível surpresa ao descobrir que alguns títulos podem ter valor de resgate inferior ao aplicado, diferente da poupança, que não tem essa variação.",
          "correta": true,
          "justificativa": "O profissional demonstrou capacidade de analisar como uma comparação imprecisa pode gerar expectativas equivocadas sobre o comportamento dos títulos."
        },
        {
          "texto": "expectativa correta, pois o Tesouro Direto funciona exatamente como a poupança em termos de liquidez, rentabilidade e garantias.",
          "correta": false,
          "justificativa": "O profissional não demonstrou conhecimento das diferenças estruturais entre poupança e títulos públicos quanto a risco de mercado e rentabilidade."
        },
        {
          "texto": "benefício para a cliente, pois a simplificação facilita a decisão de investimento sem necessidade de entender detalhes técnicos.",
          "correta": false,
          "justificativa": "O profissional não demonstrou compreensão de que simplificações imprecisas podem induzir decisões inadequadas ao perfil e expectativas do cliente."
        },
        {
          "texto": "nenhuma implicação relevante, pois clientes conservadores como Claudete não precisam conhecer diferenças entre produtos de renda fixa.",
          "correta": false,
          "justificativa": "O profissional não demonstrou compreensão do dever de informação adequada independente do perfil, conforme diretrizes de suitability."
        }
      ],
      "gabaritoComentado": "Gabarito Oficial ANBIMA (A) [Item 000140 - Questão 1]: O profissional demonstrou capacidade de analisar como uma comparação imprecisa pode gerar expectativas equivocadas sobre o comportamento dos títulos, já que títulos do Tesouro Direto sofrem marcação a mercado em caso de resgate antes do vencimento."
    },
    {
      "id": "M2_Q44",
      "oficial": true,
      "codigoItem": "000140-Q2",
      "codigoPD": "2.1.1.1",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "No Mapa de Decisão sobre Tesouro Direto (Item 000140), Claudete compreendeu o funcionamento do Tesouro Selic para liquidez e reserva de curto prazo, mas avaliou também aplicar recursos em Tesouro IPCA+ de longo prazo.",
      "enunciado": "Se Claudete, após investir em Tesouro Selic conforme seu perfil, decidisse também aplicar em Tesouro IPCA+ com vencimento em 8 anos, o risco adicional que ela assumiria, em caso de necessidade de resgate antecipado, seria:",
      "alternativas": [
        {
          "texto": "a possibilidade de resgatar valor inferior ao aplicado, pois o IPCA+ tem maior sensibilidade às variações de juros antes do vencimento.",
          "correta": true,
          "justificativa": "O profissional demonstrou capacidade de aplicar o conceito de marcação a mercado, diferenciando o comportamento do IPCA+ em relação ao Selic quanto à volatilidade."
        },
        {
          "texto": "a perda total do valor investido, pois títulos de longo prazo não permitem resgate antes do vencimento pelo Tesouro Nacional.",
          "correta": false,
          "justificativa": "O profissional não demonstrou conhecimento sobre a liquidez diária garantida pelo Tesouro, confundindo restrição de resgate com volatilidade de preço."
        },
        {
          "texto": "a cobrança de multa pelo governo federal, já que o resgate antecipado de títulos indexados à inflação gera penalidade contratual.",
          "correta": false,
          "justificativa": "O profissional não demonstrou conhecimento sobre o funcionamento do Tesouro Direto, inventando penalidade inexistente no programa."
        },
        {
          "texto": "nulo, pois a proteção contra inflação do IPCA+ garante que o valor resgatado seja sempre superior ao aplicado.",
          "correta": false,
          "justificativa": "O profissional não demonstrou compreensão de que a correção pela inflação não elimina o risco de marcação a mercado em resgates antecipados."
        }
      ],
      "gabaritoComentado": "Gabarito Oficial ANBIMA (A) [Item 000140 - Questão 2]: O profissional demonstrou capacidade de aplicar o conceito de marcação a mercado, diferenciando o comportamento do Tesouro IPCA+ em relação ao Tesouro Selic quanto à volatilidade antes do vencimento."
    },
    {
      "id": "CESG_000141",
      "oficial": true,
      "codigoItem": "000141",
      "topicoPD": "Produtos de investimentos.",
      "codigoPD": "2.1",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Vera adquiriu Certificados de Recebíveis Imobiliários (CRI) no valor de R$ 300.000 pela plataforma da instituição financeira em que mantém suas aplicações. Durante uma reunião familiar, conversou com um profissional do setor imobiliário que previu dificuldades para o segmento, devido aos juros elevados e à alta oferta de imóveis. Preocupada com a segurança do investimento, Vera procurou Pedro, profissional CPA, para entender quais garantias teria no caso de problemas com a aplicação. Ela perguntou se tal investimento era contemplado pelo Fundo Garantidor de Crédito (FGC).",
      "enunciado": "A informação correta a ser fornecida por Pedro é que o investimento de Vera",
      "alternativas": [
        {
          "texto": "não é coberto pelo FGC, e o valor a ser recuperado depende do desempenho dos recebíveis imobiliários que compõem o CRI.",
          "correta": true,
          "justificativa": "O investimento de Vera não é coberto pelo Fundo Garantidor de Crédito (FGC). Os CRIs são emitidos por securitizadoras.  As securitizadoras são instituições autorizadas pela CVM   a emitir títulos negociados no mercado lastreados por recebíveis imobiliários.  Desta forma, não fazem parte do grupo de instituições financeiras que têm cobertura do FGC.  O valor da aplicação de Vera a ser recuperado está atrelado à performance dos  recebíveis imobiliários que compõem a carteira do CRI."
        },
        {
          "texto": "é coberto pelo FGC, pois foi adquirido em instituição financeira participante, que responde pela restituição até o limite estabelecido.",
          "correta": false,
          "justificativa": "A primeira afirmação está incorreta, pois o investimento de Vera não é coberto pelo Fundo Garantidor de Crédito (FGC). As securitizadoras são instituições autorizadas pela CVM   a emitir títulos negociados no mercado lastreados por recebíveis imobiliários. Desta forma, não fazem parte do grupo de instituições financeiras que têm cobertura do FGC.  A segunda afirmação também está incorreta.  O valor da aplicação não pode ser recuperado , seja parcialmente ou totalmente, pelo acionamento dos recursos do FGC."
        },
        {
          "texto": "é coberto pelo FGC, desde que a securitizadora emissora esteja vinculada a um conglomerado financeiro associado ao Fundo.",
          "correta": false,
          "justificativa": "A primeira afirmação está incorreta, pois o investimento de Vera não é coberto pelo Fundo Garantidor de Crédito (FGC). As securitizadoras são instituições autorizadas pela CVM   a emitir títulos negociados no mercado lastreados por recebíveis imobiliários. Desta forma, não fazem parte do grupo de instituições financeiras que têm cobertura do FGC.  A segunda afirmação também está incorreta.  O valor da aplicação não pode ser recuperado , seja parcialmente ou totalmente, pelo acionamento dos recursos do FGC."
        },
        {
          "texto": "não é coberto pelo FGC, e o valor da aplicação depende da solvência da instituição financeira em que ela realizou a compra do título.",
          "correta": false,
          "justificativa": "A primeira afirmação está correta, pois o investimento de Vera não é coberto pelo Fundo Garantidor de Crédito (FGC). As securitizadoras são instituições autorizadas pela CVM   a emitir títulos negociados no mercado lastreados por recebíveis imobiliários. Desta forma, não fazem parte do grupo de instituições financeiras que têm cobertura do FGC.  A segunda afirmação está incorreta.  O valor da aplicação de Vera a ser recuperado está atrelado à performance dos  recebíveis imobiliários que compõem a carteira do CRI e não da instituição financeira onde fez a aplicação. O título foi emitido pela securitizadora e não pela instituição onde fez a compra dos títulos."
        }
      ],
      "gabaritoComentado": "O investimento de Vera não é coberto pelo Fundo Garantidor de Crédito (FGC). Os CRIs são emitidos por securitizadoras.  As securitizadoras são instituições autorizadas pela CVM   a emitir títulos negociados no mercado lastreados por recebíveis imobiliários.  Desta forma, não fazem parte do grupo de instituições financeiras que têm cobertura do FGC.  O valor da aplicação de Vera a ser recuperado está atrelado à performance dos  recebíveis imobiliários que compõem a carteira do CRI."
    },
    {
      "id": "CESG_000142",
      "oficial": true,
      "codigoItem": "000142",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Durante um atendimento, um cliente informa ao profissional CPA que realizou uma aplicação em um fundo de investimento de classe única com cotização em d+1, mas percebeu que o valor da cota de fechamento divulgada no dia seguinte estava diferente daquela que ele havia visto no momento da aplicação. Diante disso, o cliente questiona como funciona o cálculo do valor da cota dos fundos de investimento, já que elas mudam a cada dia.",
      "enunciado": "Para esclarecer ao cliente, o profissional CPA deve explicar que o procedimento está correto e que tal valor",
      "alternativas": [
        {
          "texto": "é calculado e divulgado diariamente pelo administrador do fundo, com base no patrimônio líquido da classe apurado ao final do dia.",
          "correta": true,
          "justificativa": "O administrador é o responsável fiduciário pelo cálculo e pela divulgação do valor da cota, apurada a partir do patrimônio líquido da classe ao fim de cada dia, conforme a regulamentação vigente."
        },
        {
          "texto": "é definido pelo gestor do fundo, conforme as decisões de investimento realizadas durante o pregão naquela classe.",
          "correta": false,
          "justificativa": "O gestor decide onde os recursos do fundo serão investidos, mas não é responsável pelo cálculo ou divulgação do valor da cota."
        },
        {
          "texto": "é estimado pelas instituições distribuidoras, a partir das aplicações e resgates realizados pelos clientes nessa classe do fundo.",
          "correta": false,
          "justificativa": "As instituições distribuidoras intermediam a relação com os investidores, mas não calculam nem divulgam o valor da cota do fundo."
        },
        {
          "texto": "é validado pelo auditor independente, que acompanha diariamente as variações do patrimônio da classe do fundo.",
          "correta": false,
          "justificativa": "O auditor independente atua de forma periódica, verificando demonstrações financeiras, e não participa do cálculo diário ou da divulgação da cota."
        }
      ],
      "gabaritoComentado": "O administrador é o responsável fiduciário pelo cálculo e pela divulgação do valor da cota, apurada a partir do patrimônio líquido da classe ao fim de cada dia, conforme a regulamentação vigente."
    },
    {
      "id": "CESG_000143",
      "oficial": true,
      "codigoItem": "000143",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Em um atendimento na agência, Patrícia percebe algo que costuma confundir quem está começando: o mesmo fundo aparece com duas “portas de entrada”, ou seja, duas classes. No app, ela vê a Classe A (Aberta), com cotização e resgate em D+X. No material do assessor, consta a Classe B (Fechada), vinculada a um objetivo de longo prazo, com indicação de que não há resgate a qualquer momento.\nPatrícia comenta que pode precisar de parte do dinheiro em algum momento nos próximos 12 meses e pergunta a Jonas, profissional CPA: “Qual a diferença entre essas duas classes e qual é a mais indicada para o meu caso?”",
      "enunciado": "Ao analisar a situação de Patrícia, Jonas deve esclarecer que, nesse cenário,",
      "alternativas": [
        {
          "texto": "a classe fechada pode expor Patrícia ao risco de não conseguir sair no momento desejado ou de aceitar preço desfavorável, diferentemente da classe aberta.",
          "correta": true,
          "justificativa": "O elemento decisivo do caso é a possibilidade de Patrícia precisar de recursos nos próximos 12 meses. Ao optar por uma classe fechada, ela abre mão do resgate e passa a depender de negociação de cotas, o que envolve incerteza quanto ao prazo e ao preço. Isso afeta diretamente o planejamento financeiro, ao contrário da classe aberta, que permite uma saída previsível por meio de resgate."
        },
        {
          "texto": "a classe fechada oferece a Patrícia maior previsibilidade de liquidez no curto prazo, uma vez que o fundo controla melhor o fluxo de entradas e saídas de recursos.",
          "correta": false,
          "justificativa": "A alternativa inverte a lógica do risco. O controle do fluxo de recursos é um benefício para a gestão do fundo, e não para o cotista, que pode precisar de liquidez. Para Patrícia, a classe fechada reduz, e não aumenta, a previsibilidade de acesso aos recursos no curto prazo."
        },
        {
          "texto": "a diferença entre as classes não afeta o planejamento financeiro de Patrícia, pois ambas permitem acesso aos recursos conforme o regulamento do fundo.",
          "correta": false,
          "justificativa": "Embora ambas as classes sigam regulamentos, a forma de acesso aos recursos é distinta. Tratar essa diferença como irrelevante ignora o impacto prático no planejamento financeiro de quem pode precisar sair antes do prazo."
        },
        {
          "texto": "a classe fechada elimina o risco de liquidez de Patrícia no curto prazo, pois o investimento fica protegido até o encerramento do objetivo de longo prazo.",
          "correta": false,
          "justificativa": "A classe fechada não “elimina” o risco de liquidez; ao contrário, transfere esse risco ao cotista, que fica condicionado ao encerramento da classe ou à negociação no mercado secundário, o que pode não ocorrer no momento desejado."
        }
      ],
      "gabaritoComentado": "O elemento decisivo do caso é a possibilidade de Patrícia precisar de recursos nos próximos 12 meses. Ao optar por uma classe fechada, ela abre mão do resgate e passa a depender de negociação de cotas, o que envolve incerteza quanto ao prazo e ao preço. Isso afeta diretamente o planejamento financeiro, ao contrário da classe aberta, que permite uma saída previsível por meio de resgate."
    },
    {
      "id": "CESG_000144",
      "oficial": true,
      "codigoItem": "000144",
      "topicoPD": "Produtos de Previdência Complementar (PGBL E VGBL).",
      "codigoPD": "2.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Fernanda, profissional CPA, conversava com Édson, de 62 anos, que acumulou recursos em um plano de previdência e está avaliando como transformar a reserva em renda. Porém, ele contou que teme pela situação financeira de sua esposa no caso de falecer antes dela.",
      "enunciado": "Fernanda explicou que existe uma modalidade em que é a",
      "alternativas": [
        {
          "texto": "Renda Mensal Vitalícia Reversível ao Beneficiário Indicado, em que parte ou a totalidade do valor pago é revertida ao beneficiário indicado de forma vitalícia.",
          "correta": true,
          "justificativa": "Na Renda Mensal Vitalícia com Reversão ao Beneficiário Indicado, o participante recebe renda por toda a vida e, após o falecimento, o beneficiário continua recebendo percentual ou totalidade do valor, conforme definido no contrato com a seguradora."
        },
        {
          "texto": "Renda Mensal por Prazo Certo, em que o saldo remanescente é transferido integralmente ao beneficiário ao término do prazo de pagamento.",
          "correta": false,
          "justificativa": "Essa descrição se aproxima da renda temporária com prazo certo e não da vitalícia com reversão. Nesta, o benefício não depende de prazo fixo, mas da duração da vida do participante e da existência de beneficiário."
        },
        {
          "texto": "Renda Mensal Vitalícia, em que o beneficiário recebe um valor equivalente ao saldo acumulado após o falecimento do titular.",
          "correta": false,
          "justificativa": "Na reversão ao beneficiário não há “indenização”, mas continuidade do pagamento da renda. A indenização seria típica de coberturas de risco, não de previdência programada."
        },
        {
          "texto": "Renda Mensal Vitalícia com Prazo Mínimo Garantido, em que a reversão ocorre apenas se o falecimento do titular acontecer antes do início do benefício.",
          "correta": false,
          "justificativa": "A reversão não depende do falecimento antes do início da renda; ela é válida após o início do benefício, garantindo continuidade dos pagamentos ao beneficiário."
        }
      ],
      "gabaritoComentado": "Na Renda Mensal Vitalícia com Reversão ao Beneficiário Indicado, o participante recebe renda por toda a vida e, após o falecimento, o beneficiário continua recebendo percentual ou totalidade do valor, conforme definido no contrato com a seguradora."
    },
    {
      "id": "CESG_000145",
      "oficial": true,
      "codigoItem": "000145",
      "topicoPD": "Produtos de Previdência Complementar (PGBL E VGBL).",
      "codigoPD": "2.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Em uma conversa sobre previdência complementar, Rafaela, médica de 50 anos, comenta com Frederico, profissional CPA, que pretende iniciar o resgate de seu plano. Ela tem dúvidas sobre o que muda nessa etapa — se o contrato permanece igual ao da fase de aplicação ou se há uma nova estrutura de regras para o recebimento dos valores.",
      "enunciado": "Durante a conversa, Frederico explica para Rafaela que, ao iniciar o recebimento do plano,",
      "alternativas": [
        {
          "texto": "inicia-se nova etapa contratual distinta da acumulação com regras e deveres próprios para o recebimento já na previdência complementar.",
          "correta": true,
          "justificativa": "A previdência é composta por duas fases complementares: acumulação, voltada à formação de capital, e benefício, destinada ao recebimento. Cada fase tem regras contratuais e tributárias próprias, definidas pela SUSEP e pela CVM."
        },
        {
          "texto": "mantém-se a fase de acumulação, e o pagamento de benefícios ocorre sem alterar regras, responsabilidades ou tributos, preservando contrato.",
          "correta": false,
          "justificativa": "A fase de benefício não é mera continuidade da acumulação. Representa nova etapa contratual, com regras específicas de resgate, tributação e prazo, podendo envolver transformação da natureza do plano."
        },
        {
          "texto": "ocorre sobreposição de etapas: o participante continua aportando enquanto recebe benefícios sem mudar regras ou tributos, mantendo contrato.",
          "correta": false,
          "justificativa": "As fases não se sobrepõem integralmente. Alguns planos aceitam aportes durante o benefício, mas isso ocorre sob regras distintas e não altera a natureza sequencial das etapas."
        },
        {
          "texto": "preserva-se a estrutura original do contrato, sem distinção entre aplicação e usufruto, mantendo regras e responsabilidades idênticas.",
          "correta": false,
          "justificativa": "Há distinção formal e obrigatória entre acumulação e usufruto. Ignorar essa separação contraria a estrutura regulatória dos produtos de previdência aberta e afeta o controle fiscal e contratual."
        }
      ],
      "gabaritoComentado": "A previdência é composta por duas fases complementares: acumulação, voltada à formação de capital, e benefício, destinada ao recebimento. Cada fase tem regras contratuais e tributárias próprias, definidas pela SUSEP e pela CVM."
    },
    {
      "id": "CESG_000146",
      "oficial": true,
      "codigoItem": "000146",
      "topicoPD": "Serviços bancários.",
      "codigoPD": "2.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Em uma manhã de segunda-feira, Fernando, profissional CPA, observa duas situações em uma agência bancária. Primeiro, vê Paulo dirigir-se ao atendimento presencial para resolver uma divergência de saldo. Irritado com a espera, ele reclama do tempo de fila e diz que no aplicativo não encontra suporte humano direto. A atendente de triagem explica que poderia auxiliá-lo via atendimento remoto, mas Paulo insiste em falar com o gerente. Já Helena utiliza o terminal de autoatendimento para imprimir comprovantes, comentando que o sistema é rápido, mas às vezes falha.",
      "enunciado": "Considerando as situações observadas, Fernando pode esclarecer que",
      "alternativas": [
        {
          "texto": "o banco disponibiliza canais presenciais, digitais e telefônicos, com segurança e informações claras, e o cliente pode escolher conforme sua necessidade.",
          "correta": true,
          "justificativa": "O atendimento bancário deve garantir acesso eficiente e transparente, em canais físicos, digitais ou telefônicos. O cliente tem direito a escolher o meio mais adequado à sua demanda."
        },
        {
          "texto": "o atendimento presencial tende a ser priorizado para resolver situações que envolvem divergências, pois o suporte digital tem limitações em certas demandas.",
          "correta": false,
          "justificativa": "Não há prioridade obrigatória do canal presencial sobre o digital. Ambos devem coexistir, assegurando conveniência e eficiência. O gerente não é requisito para todas as demandas, e impor hierarquia entre canais contraria normas de atendimento bancário."
        },
        {
          "texto": "o canal digital substitui o presencial, devendo o cliente resolver suas solicitações no aplicativo ou telefone e com agendamento prévio para atendimentos nas agências.",
          "correta": false,
          "justificativa": "O atendimento digital amplia a conveniência, mas não substitui o presencial. Demandas com documentos, acessibilidade ou mediação humana ainda exigem agência. A norma do Bacen assegura pluralidade de canais, não a extinção do contato físico."
        },
        {
          "texto": "a definição do canal de atendimento deve seguir regras internas de cada instituição, podendo exigir autorização do gerente para casos específicos.",
          "correta": false,
          "justificativa": "A escolha do canal não depende de autorização do gerente. As regras internas tratam de segurança e fluxos, não de restrição de acesso. Condicionar o atendimento à validação gerencial fere a liberdade de escolha prevista nas boas práticas do setor."
        }
      ],
      "gabaritoComentado": "O atendimento bancário deve garantir acesso eficiente e transparente, em canais físicos, digitais ou telefônicos. O cliente tem direito a escolher o meio mais adequado à sua demanda."
    },
    {
      "id": "CESG_000148",
      "oficial": true,
      "codigoItem": "000148",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Um fundo multimercado registrou perdas expressivas além do seu patrimônio em um mês de forte volatilidade. O administrador comunicou aos cotistas a necessidade de aporte adicional para cobertura proporcional do prejuízo, conforme previsto no regulamento, já que o fundo não possui responsabilidade limitada.\nUm investidor pessoa física, surpreso com a convocação, procurou o profissional CPA para compreender se o procedimento é permitido e quais cuidados deve adotar para garantir transparência e segurança jurídica nesse procedimento",
      "enunciado": "Nesse cenário, a conduta correta do profissional CPA é",
      "alternativas": [
        {
          "texto": "informar que, em fundos sem responsabilidade limitada, o cotista pode ser chamado a aporte adicional para cobrir prejuízos além do patrimônio do fundo, de acordo com o regulamento e o comunicado do administrador.",
          "correta": true,
          "justificativa": "A CVM 175 permite fundos sem responsabilidade limitada, nos quais o cotista pode aportar para cobrir perdas além do patrimônio do fundo. O CPA deve confirmar essa previsão no regulamento."
        },
        {
          "texto": "considerar o pedido de aporte como irregular, pois a legislação proíbe qualquer solicitação de recursos após a aplicação inicial, além de comunicar as autoridades competentes, a atitude do administrador do fundo.",
          "correta": false,
          "justificativa": "Errado, pois a norma não proíbe o aporte adicional quando previsto. A vedação aplica-se a garantias de rentabilidade, não a recomposição de prejuízos em caso de não possuir responsabilidade limitada."
        },
        {
          "texto": "orientar o cliente a realizar o resgate imediato das cotas, ou negociar suas cotas imediatamente no mercado secundário já que a chamada de capital indica má gestão e risco de insolvência do administrador.",
          "correta": false,
          "justificativa": "Equivocado: não há o que resgatar, já que os prejuízos foram maiores do que o patrimônio do fundo. Inclusive há a necessidade de aporte adicional para cobrir esses prejuízos, mesmo que consiga vender as cotas no mercado secundário."
        },
        {
          "texto": "aguardar maior clareza da CVM sobre o tema, fazendo consultas à essa autoridade e acompanhando o fundo sem alarmar o cliente sobre possíveis implicações de o fundo não ter responsabilidade limitada.",
          "correta": false,
          "justificativa": "Postura omissa: a comunicação preventiva é essencial para transparência e proteção do investidor. Não se trata de “alarmar” o cliente, mas de deixá-lo totalmente informado."
        }
      ],
      "gabaritoComentado": "A CVM 175 permite fundos sem responsabilidade limitada, nos quais o cotista pode aportar para cobrir perdas além do patrimônio do fundo. O CPA deve confirmar essa previsão no regulamento."
    },
    {
      "id": "CESG_000149",
      "oficial": true,
      "codigoItem": "000149",
      "topicoPD": "Seguros de vida e patrimoniais",
      "codigoPD": "2.5",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Um investidor de perfil conservador possui seguro de vida tradicional contratado há dez anos, com prêmios periódicos e cobertura por morte vigente durante todo o contrato. Após ler sobre apólices temporárias com prêmios mais baixos, considera substituí-lo por uma opção mais econômica. O profissional CPA é chamado a esclarecer a natureza do produto vigente e os efeitos patrimoniais da mudança.",
      "enunciado": "O profissional CPA explica que o seguro tradicional",
      "alternativas": [
        {
          "texto": "combina proteção e formação de reserva, permitindo resgate ao segurado sobrevivente ao término do prazo.",
          "correta": true,
          "justificativa": "O seguro tradicional une cobertura por morte e componente de poupança, permitindo resgate da reserva ao fim do prazo."
        },
        {
          "texto": "tem cobertura vitalícia, garantindo indenização, independente do prazo de vigência contratual.",
          "correta": false,
          "justificativa": "A cobertura é temporária, limitada ao período definido em contrato."
        },
        {
          "texto": "não prevê valor de resgate, pois todo o prêmio é destinado exclusivamente à cobertura de risco.",
          "correta": false,
          "justificativa": "Há reserva acumulada, que pode ser resgatada ao término."
        },
        {
          "texto": "possui capital segurado variável, ajustado anualmente conforme o desempenho do fundo de investimento vinculado.",
          "correta": false,
          "justificativa": "O capital é fixo, não vinculado a fundos de investimento."
        }
      ],
      "gabaritoComentado": "O seguro tradicional une cobertura por morte e componente de poupança, permitindo resgate da reserva ao fim do prazo."
    },
    {
      "id": "CESG_000150",
      "oficial": true,
      "codigoItem": "000150",
      "topicoPD": "Produtos de Previdência Complementar (PGBL E VGBL).",
      "codigoPD": "2.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Mauro, prestes a se aposentar, procura Daniel, profissional CPA, e informa que acumulou recursos em um plano de previdência e pretende iniciar o recebimento do benefício em breve. Ele deseja uma renda mensal por tempo determinado, já que pretende utilizar parte do valor para complementar o orçamento e deixar o restante como herança aos filhos.",
      "enunciado": "Daniel esclareceu que existe uma modalidade em que o pagamento é",
      "alternativas": [
        {
          "texto": "fixado por prazo determinado, com continuidade ao(s) beneficiário(s) até o fim do período em caso de falecimento do titular.",
          "correta": true,
          "justificativa": "A Renda Mensal por Prazo Certo estabelece um período previamente definido de pagamento. Caso o participante falte antes do término, o beneficiário continua recebendo a renda até o fim do prazo estipulado em contrato, conforme regulamentação da SUSEP."
        },
        {
          "texto": "vitalício condicionado à expectativa de vida do participante, sem reversão ao beneficiário após o falecimento do titular.",
          "correta": false,
          "justificativa": "Descreve a Renda Vitalícia, cujo pagamento depende da duração da vida do participante e não prevê continuidade ao beneficiário após o óbito."
        },
        {
          "texto": "variável, vinculado ao rendimento da reserva, com pagamentos mensais e encerrado automaticamente em caso de morte do titular.",
          "correta": false,
          "justificativa": "Confunde renda programada com renda variável vitalícia. Na modalidade por prazo certo, o valor é definido contratualmente, e não depende do desempenho da reserva."
        },
        {
          "texto": "garantido até o falecimento do titular, com saldo residual convertido em indenização única a ser pago ao(s) beneficiário(s).",
          "correta": false,
          "justificativa": "A renda não é convertida em indenização, mas mantida como fluxo de pagamentos até o fim do prazo; o objetivo é previsibilidade, não proteção securitária."
        }
      ],
      "gabaritoComentado": "A Renda Mensal por Prazo Certo estabelece um período previamente definido de pagamento. Caso o participante falte antes do término, o beneficiário continua recebendo a renda até o fim do prazo estipulado em contrato, conforme regulamentação da SUSEP."
    },
    {
      "id": "CESG_000151",
      "oficial": true,
      "codigoItem": "000151",
      "topicoPD": "Produtos de Financiamento.",
      "codigoPD": "2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Durante uma oficina de educação financeira em uma associação de lojistas, André, profissional CPA, foi questionado sobre como funcionam os cálculos da taxa de refinanciamento da fatura do cartão de crédito. Um lojista relatou que, ao pagar apenas o valor mínimo, percebeu aumento expressivo da dívida no mês seguinte. Outro perguntou se esse acréscimo envolvia apenas juros ou outros encargos. André destacou que, mesmo com mudanças regulatórias no crédito rotativo, as condições de refinanciamento ainda exigem atenção. Os participantes pediram, então, que André resumisse de forma prática como funciona esse cálculo.",
      "enunciado": "André explicou que para compreender o cálculo é necessário",
      "alternativas": [
        {
          "texto": "reconhecer que os juros incidem sobre o saldo não quitado da fatura, acumulando-se a cada período pelo regime composto até a quitação.",
          "correta": true,
          "justificativa": "O refinanciamento aplica juros sobre o valor que ficou em aberto, e como esses juros são compostos, o saldo cresce mês a mês. É o principal motivo do rápido aumento da dívida quando o cliente paga apenas parte da fatura do cartão."
        },
        {
          "texto": "avaliar que os juros incidem apenas sobre o valor mínimo pago, enquanto o saldo restante permanece inalterado até o próximo vencimento.",
          "correta": false,
          "justificativa": "Os juros não incidem apenas sobre o valor mínimo pago, mas sim sobre o saldo devedor não liquidado. Essa interpretação reduz o custo do crédito de forma equivocada e não corresponde ao cálculo real das operadoras."
        },
        {
          "texto": "considerar que os encargos recaem sobre o valor total da fatura original, mesmo após o cliente ter feito um pagamento parcial.",
          "correta": false,
          "justificativa": "Após o pagamento parcial, os encargos recaem somente sobre o saldo em aberto, não sobre o valor já quitado. Cobrar juros sobre o valor total pago distorceria o cálculo e não refletiria a prática regulada do setor."
        },
        {
          "texto": "entender que o saldo em aberto é apenas corrigido de forma linear, sem a aplicação recorrente de juros sobre juros.",
          "correta": false,
          "justificativa": "A dívida não é corrigida apenas pela inflação, mas sim por juros compostos definidos pela instituição. Esse encargo é muito superior à simples correção inflacionária, o que explica o custo elevado do refinanciamento."
        }
      ],
      "gabaritoComentado": "O refinanciamento aplica juros sobre o valor que ficou em aberto, e como esses juros são compostos, o saldo cresce mês a mês. É o principal motivo do rápido aumento da dívida quando o cliente paga apenas parte da fatura do cartão."
    },
    {
      "id": "CESG_000152",
      "oficial": true,
      "codigoItem": "000152",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Pedro ouviu de amigos sobre uma oportunidade de investimento em flats de sua cidade, oferecida por uma empresa responsável pelo empreendimento. Interessado, visitou o stand de vendas e foi informado de que, para participar, o investidor deveria aderir a um condomínio denominado “Fundo de Investimento Plaza S/C”, com integralização de recursos via contrato de mútuo. Antes de decidir, Pedro quis confirmar se a operação seguia as normas do mercado e oferecia a devida segurança. Para isso, entrou em contato com Denise, profissional de atendimento de sua instituição financeira, em busca de orientação sobre onde verificar a regularidade do investimento.",
      "enunciado": "Diante da dúvida de Pedro, a orientação correta de Denise é que ele deve recorrer",
      "alternativas": [
        {
          "texto": "à Comissão de Valores Mobiliários (CVM).",
          "correta": true,
          "justificativa": "O fundo de investimento é uma comunhão de recursos, constituído sob a forma de condomínio de natureza especial, destinado à aplicação em ativos financeiros, bens e direitos, de acordo com a regra específica aplicável à categoria do fundo. Como a oferta utiliza a expressão “Fundo de Investimento”, o  Art. 8º da Resolução No. 175  estabelece que o  funcionamento do fundo depende do seu prévio registro na CVM. Ademais, como o investimento está sendo feito ao público,  trata-se de um valor mobiliário, o qual também requer registro da oferta junto à  CVM."
        },
        {
          "texto": "ao Banco Central.",
          "correta": false,
          "justificativa": "O papel de supervisão do Banco Central (BC) está restrito ao sistema financeiro nacional e não a incorporados de empreendimentos imobiliários, como no caso da oferta . Para isso, o BC autoriza o funcionamento das instituições, monitora suas atividades para garantir o cumprimento das normas estabelecidas pelo Conselho Monetário Nacional (CMN).  Já no caso dos fundos de investimento, sua constituição e registro estão sob a supervisão da CVM ."
        },
        {
          "texto": "à Bolsa B3.",
          "correta": false,
          "justificativa": "A B3 oferece serviços de diferentes naturezas a empresas e investidores. A bolsa é um ambiente de negociação , mas também oferece serviços para registrar ativos de clientes, como a certificação de ativos e operações, o que aumenta a segurança e transparência das negociações, conforme detalhado pela B3.  No entanto, este registro não prescinde da autorização do registro da CVM para os fundos de investimento, conforme o  Art. 8º da Resolução nº  175 da CVM."
        },
        {
          "texto": "à Junta Comercial do estado.",
          "correta": false,
          "justificativa": "A junta comercial é um órgão estadual responsável por registrar, organizar e arquivar informações sobre empresas e sociedades empresariais. Ela formaliza a abertura, alteração e encerramento de negócios, garantindo a segurança jurídica e a legalidade das atividades. No entanto, ela não tem a faculdade de regular , supervisionar e registrar o funcionamento de fundos de investimento. Esta responsabilidade está a cargo da CVM . O  Art. 8º da Resolução nº 175  estabelece que o  funcionamento do fundo depende do seu prévio registro na CVM."
        }
      ],
      "gabaritoComentado": "O fundo de investimento é uma comunhão de recursos, constituído sob a forma de condomínio de natureza especial, destinado à aplicação em ativos financeiros, bens e direitos, de acordo com a regra específica aplicável à categoria do fundo. Como a oferta utiliza a expressão “Fundo de Investimento”, o  Art. 8º da Resolução No. 175  estabelece que o  funcionamento do fundo depende do seu prévio registro na CVM. Ademais, como o investimento está sendo feito ao público,  trata-se de um valor mobiliário, o qual também requer registro da oferta junto à  CVM."
    },
    {
      "id": "CESG_000153",
      "oficial": true,
      "codigoItem": "000153",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Difícil",
      "contexto": "Durante um treinamento interno, Helena, analista de operações de uma corretora, perguntou a Paulo, profissional CPA, como a regulação recente da CVM garante a proteção dos cotistas em situações de risco financeiro. Ela citou o caso de um cliente preocupado com a possibilidade de prejuízos em uma classe de fundo afetarem outra classe ou mesmo outros fundos do mesmo administrador.",
      "enunciado": "Paulo explica que esse caso está relacionado à",
      "alternativas": [
        {
          "texto": "segregação patrimonial.",
          "correta": true,
          "justificativa": "A Resolução CVM nº 175 garante a segregação patrimonial, princípio que protege os cotistas, separando juridicamente os patrimônios de cada fundo e classes, impedindo que perdas ou obrigações de um/uma afetem os demais."
        },
        {
          "texto": "unificação contábil dos fundos.",
          "correta": false,
          "justificativa": "A norma não trata de unificação contábil, mas de separação. Cada classe de fundo possui registros e demonstrações próprios. Unificar contas geraria risco de confusão patrimonial e violaria a autonomia contábil exigida pela CVM."
        },
        {
          "texto": "compensação de resultados.",
          "correta": false,
          "justificativa": "A compensação de resultados entre fundos e classes de fundos é vedada. Cada estrutura responde individualmente por suas obrigações. A segregação evita que lucros ou prejuízos de um carteira contaminem outra."
        },
        {
          "texto": "integração operacional entre classes.",
          "correta": false,
          "justificativa": "A segregação patrimonial impede integração operacional entre classes. Cada classe tem controle, registros, ativos e passivos distintos. A interação só ocorre dentro dos limites expressamente previstos no regulamento."
        }
      ],
      "gabaritoComentado": "A Resolução CVM nº 175 garante a segregação patrimonial, princípio que protege os cotistas, separando juridicamente os patrimônios de cada fundo e classes, impedindo que perdas ou obrigações de um/uma afetem os demais."
    },
    {
      "id": "CESG_000154",
      "oficial": true,
      "codigoItem": "000154",
      "topicoPD": "Produtos de investimentos.",
      "codigoPD": "2.1",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Uma empresa do setor de tecnologia, com forte apelo de mercado, está realizando sua Oferta Pública Inicial (IPO). A demanda pelas ações durante o período de reserva superou em várias vezes a quantidade de papéis ofertada, resultando em um rateio significativo para os investidores que participaram. A oferta também prevê um lote suplementar como mecanismo de estabilização.",
      "enunciado": "Considerando a dinâmica de formação de preço no bookbuilding, apresentado neste contexto, conclui-se que",
      "alternativas": [
        {
          "texto": "a demanda elevada no IPO tende a pressionar o preço na abertura do mercado secundário, em que a liquidez real se estabelece com a negociação entre investidores.",
          "correta": true,
          "justificativa": "A alta demanda não atendida no IPO (rateio) tende a criar uma pressão compradora no início das negociações, influenciando o preço. A liquidez se consolida no secundário."
        },
        {
          "texto": "o preço da ação se manterá estável após a listagem, pois o lote suplementar é usado ativamente para impedir a volatilidade e fixar a cotação no valor do IPO.",
          "correta": false,
          "justificativa": "O lote complementar modera a volatilidade, mas não impede as oscilações de preço nem garante um valor fixo. A estabilidade total do preço no início é improvável."
        },
        {
          "texto": "a liquidez atinge seu pico durante o IPO, devido ao grande volume ofertado pela empresa, tornando-se mais restrita no secundário, em que depende dos vendedores iniciais.",
          "correta": false,
          "justificativa": "A liquidez real surge com a negociação contínua no mercado secundário. O IPO é um evento de distribuição, não de negociação com liquidez diária."
        },
        {
          "texto": "o rateio na oferta primária é pouco relevante para o preço no secundário, que se altera com novas ofertas da empresa, e não pela negociação entre os investidores.",
          "correta": false,
          "justificativa": "A demanda reprimida, indicada pelo rateio, influencia o preço inicial. O preço no secundário muda constantemente pela negociação entre os investidores."
        }
      ],
      "gabaritoComentado": "A alta demanda não atendida no IPO (rateio) tende a criar uma pressão compradora no início das negociações, influenciando o preço. A liquidez se consolida no secundário."
    },
    {
      "id": "CESG_000155",
      "oficial": true,
      "codigoItem": "000155",
      "topicoPD": "Serviços bancários.",
      "codigoPD": "2.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Júlia e Renato, correntistas há dois anos, procuram João, profissional CPA, após notarem a cobrança de tarifas por saques adicionais, emissão de segunda via de cartão e transferências. Eles comentam que usam pouco a conta e cogitam migrar para um pacote padronizado sem custos. Júlia acredita que, por receber o salário na conta, teria isenção de todas as tarifas. Renato, por sua vez, observou no aplicativo que algumas operações digitais aparecem como “sem cobrança”. O casal quer entender quando as tarifas são devidas e se vale a pena alterar o pacote de serviços.",
      "enunciado": "Em sua explicação, João afirma que",
      "alternativas": [
        {
          "texto": "a cobrança ocorre quando o serviço não integra o rol essencial, e o cliente pode comparar o uso para decidir entre o pacote padronizado ou os serviços avulsos.",
          "correta": true,
          "justificativa": "As tarifas são cobradas apenas para serviços fora do conjunto essencial definido pelo Banco Central. O cliente pode escolher entre pagar serviços avulsos ou aderir a um pacote, comparando frequência de uso e custo-benefício."
        },
        {
          "texto": "a conta que recebe salário garante gratuidade de transferências para terceiros e de extratos sem limite, independentemente de contratação de pacote por parte do cliente.",
          "correta": false,
          "justificativa": "O recebimento de salário garante gratuidade apenas para movimentações da conta-salário e transferências para conta de mesma titularidade, não para todos os serviços."
        },
        {
          "texto": "operações pelos canais digitais geram isenção de saques e transferências, como estímulo dos bancos para os clientes migrarem suas transações para o aplicativo.",
          "correta": false,
          "justificativa": "Alguns bancos oferecem isenção em operações digitais, mas não há regra geral que elimine tarifas para todos os serviços. A decisão depende do contrato e do tipo de conta."
        },
        {
          "texto": "o pacote padronizado faz com que as cobranças dos serviços listados deixam de ocorrer, o que é benéfico para o cliente porque torna os serviços sem custo.",
          "correta": false,
          "justificativa": "Pacotes padronizados possuem lista específica de serviços incluídos. Exceder limites ou usar serviços não previstos gera cobrança, portanto a isenção não é total."
        }
      ],
      "gabaritoComentado": "As tarifas são cobradas apenas para serviços fora do conjunto essencial definido pelo Banco Central. O cliente pode escolher entre pagar serviços avulsos ou aderir a um pacote, comparando frequência de uso e custo-benefício."
    },
    {
      "id": "M2_Q45",
      "oficial": true,
      "codigoItem": "000158-Q1",
      "codigoPD": "2.1.1.1.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "No Mapa de Decisão sobre Letra de Crédito do Agronegócio (Item 000158), o cliente Antônio (pessoa física) informa ao especialista que precisa resgatar R$ 80.000,00 líquidos para dar um carro de presente à sua neta que completará 18 anos. Ele possui uma LCA atrelada ao CDI e outra atrelada ao IPCA.",
      "enunciado": "Se o banco não apresentar taxa de corretagem para a LCA solicitada, o valor bruto a resgatar para atingir o líquido solicitado seria de:",
      "alternativas": [
        {
          "texto": "R$ 80.000",
          "correta": true,
          "justificativa": "O profissional demonstrou capacidade de identificar que a LCA é isenta de IR para pessoa física, resultando em bruto igual ao líquido desejado."
        },
        {
          "texto": "R$ 82.000",
          "correta": false,
          "justificativa": "O profissional não demonstrou capacidade de diferenciar a tributação da LCA e do CDB (ou LCA PJ), calculando como se houvesse IR de 22,5% sobre o rendimento."
        },
        {
          "texto": "R$ 82.300",
          "correta": false,
          "justificativa": "O profissional não demonstrou capacidade de distinguir LCA de Tesouro Direto, calculando como se houvesse IR de 22,5% mais taxa de custódia."
        },
        {
          "texto": "R$ 84.200",
          "correta": false,
          "justificativa": "O profissional não demonstrou capacidade de compreender que IOF não incide em LCA."
        }
      ],
      "gabaritoComentado": "Gabarito Oficial ANBIMA (A) [Item 000158 - Questão 1]: O profissional demonstrou capacidade de identificar que a LCA é isenta de Imposto de Renda para pessoa física, resultando em valor bruto igual ao valor líquido desejado (R$ 80.000)."
    },
    {
      "id": "M2_Q46",
      "oficial": true,
      "codigoItem": "000158-Q2",
      "codigoPD": "2.1.1.1.3",
      "nivelCognitivo": "Compreensão",
      "dificuldade": "Médio",
      "contexto": "No Mapa de Decisão sobre Letra de Crédito do Agronegócio (Item 000158), Antônio optou por resgatar R$ 80.000,00 de sua LCA atrelada ao CDI e manter a LCA atrelada ao IPCA para o longo prazo.",
      "enunciado": "Se ambas as LCAs de Antônio tivessem carência mínima regulamentada e tivessem sido contratadas juntas há 7 meses, o resgate solicitado:",
      "alternativas": [
        {
          "texto": "ainda seria viável.",
          "correta": true,
          "justificativa": "O profissional demonstrou capacidade de compreender que, após o prazo de carência mínima de 6 meses, as LCAs atreladas ao CDI podem ter liquidez para resgate conforme condições contratuais."
        },
        {
          "texto": "seria viável, mas mudaria de tributação no resgate.",
          "correta": false,
          "justificativa": "O profissional não demonstrou capacidade de identificar que, cumprida a carência mínima de 6 meses, o resgate de LCAs não tem dedução de IR."
        },
        {
          "texto": "seria viável apenas se o cliente topasse resgatar da outra LCA.",
          "correta": false,
          "justificativa": "O profissional não demonstrou capacidade de identificar carência mínima de LCA IPCA, que é de 9 meses."
        },
        {
          "texto": "não seria mais viável.",
          "correta": false,
          "justificativa": "O profissional não demonstrou capacidade de reconhecer que 7 meses de aplicação superam a carência mínima regulamentada de 6 meses para LCAs indexadas ao CDI."
        }
      ],
      "gabaritoComentado": "Gabarito Oficial ANBIMA (A) [Item 000158 - Questão 2]: O profissional demonstrou capacidade de compreender que, após o prazo de carência mínima de 6 meses, as LCAs atreladas ao CDI podem ter liquidez para resgate conforme condições contratuais."
    },
    {
      "id": "CESG_000159",
      "oficial": true,
      "codigoItem": "000159",
      "topicoPD": "Seguros de vida e patrimoniais",
      "codigoPD": "2.5",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Um cliente, casado, tem dois filhos pequenos e é o principal provedor da família. Ele informou ao profissional CPA que a sua maior preocupação é garantir recursos para custear a educação dos filhos e manter o padrão de vida da família, caso venha a falecer nos próximos 20 anos, período em que os filhos ainda dependerão financeiramente dele. Ao mesmo tempo, o cliente afirmou que busca uma alternativa de custo acessível, pois possui orçamento mensal limitado.",
      "enunciado": "Analisando a situação apresentada, a modalidade que melhor atende às demandas do  cliente é",
      "alternativas": [
        {
          "texto": "seguro de vida temporário com prazo alinhado ao período de dependência dos filhos, por oferecer a proteção adequada com menor custo.",
          "correta": true,
          "justificativa": "O seguro temporário é mais adequado para cobrir necessidades por período definido, como a fase de dependência dos filhos, oferecendo proteção a um custo mais acessível."
        },
        {
          "texto": "seguro de vida inteira, pois garante cobertura vitalícia e é a opção mais econômica para a proteção do período de dependência dos filhos.",
          "correta": false,
          "justificativa": "O seguro de vida inteiro tem custo mais elevado e não é uma opção mais eficiente para cobrir apenas um período específico de necessidade."
        },
        {
          "texto": "seguro de vida tradicional com acumulação, pois prioriza a formação de reserva e substitui a necessidade de proteção por prazo definido.",
          "correta": false,
          "justificativa": "O seguro tradicional como acumulação prioriza a formação de reserva, mas não substitui adequadamente a necessidade de proteção focada no período de dependência"
        },
        {
          "texto": "seguro de vida inteira, temporário ou tradicional, uma vez que o principal fator é o valor do capital segurado independentemente do prazo.",
          "correta": false,
          "justificativa": "O prazo da cobertura é um elemento central da decisão. É incorreto considerar que apenas o valor do capital segurado deve ser observado nesta escolha."
        }
      ],
      "gabaritoComentado": "O seguro temporário é mais adequado para cobrir necessidades por período definido, como a fase de dependência dos filhos, oferecendo proteção a um custo mais acessível."
    },
    {
      "id": "CESG_000160",
      "oficial": true,
      "codigoItem": "000160",
      "topicoPD": "Produtos de Previdência Complementar (PGBL E VGBL).",
      "codigoPD": "2.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Carolina, profissional CPA, atende Lúcia, professora aposentada de 66 anos, que possui um plano de previdência VGBL. Lúcia deseja começar a receber valores mensais desse investimento e pergunta se, ao iniciar os recebimentos, o saldo permanece aplicado e continua a gerar rendimentos.",
      "enunciado": "Carolina explica que essa operação",
      "alternativas": [
        {
          "texto": "transforma o saldo em reserva matemática administrada pela seguradora e os ativos continuam gerando resultado, já incorporado ao valor da renda contratada.",
          "correta": true,
          "justificativa": "Na conversão em renda do VGBL, o saldo passa a ser reserva matemática na seguradora. Essa reserva é investida e continua gerando resultados (financeiros/atuariais). O efeito não aparece como “rendimento do saldo” do cliente, mas está embutido no valor/atualização da renda conforme a modalidade escolhida."
        },
        {
          "texto": "mantém o saldo aplicado em nome da cliente no mesmo fundo e os pagamentos mensais realizados por meio de resgates programados, sem alteração da natureza do investimento.",
          "correta": false,
          "justificativa": "Descreve resgates programados, mantendo o saldo em nome do cliente no fundo, o que é típico de saque periódico, e não de renda contratada. Na renda, os recursos passam para a seguradora (reserva matemática) e o pagamento segue tabela/critério atuarial, não simples variação do fundo."
        },
        {
          "texto": "faz com que o saldo deixe de render, pois o montante passa a ser amortizado em parcelas fixas, sem considerar ganhos financeiros posteriores e mantendo a tributação.",
          "correta": false,
          "justificativa": "Afirma que o saldo “deixa de render” e que a renda apenas amortiza o montante. Na prática, a seguradora investe a reserva e considera as taxas atuariais e financeiras na precificação da renda. Mesmo em modalidades sem reajuste, há estrutura financeira subjacente; não é mera amortização."
        },
        {
          "texto": "mantém o saldo rendendo como antes e garante, em qualquer modalidade, uma taxa fixa de retorno definida pela seguradora, sem impacto atuarial no valor da renda.",
          "correta": false,
          "justificativa": "Supõe que o saldo “rende como antes” e que há taxa mínima fixa em qualquer modalidade, “sem impacto atuarial”. Rendas variam de acordo com a modalidade (vitalícia, prazo certo, etc.), as hipóteses de sobrevida e os parâmetros financeiros; não há garantia única universal nem ausência de impacto atuarial."
        }
      ],
      "gabaritoComentado": "Na conversão em renda do VGBL, o saldo passa a ser reserva matemática na seguradora. Essa reserva é investida e continua gerando resultados (financeiros/atuariais). O efeito não aparece como “rendimento do saldo” do cliente, mas está embutido no valor/atualização da renda conforme a modalidade escolhida."
    },
    {
      "id": "CESG_000234",
      "oficial": true,
      "codigoItem": "000234",
      "topicoPD": "Instrumentos de Renda Variável.",
      "codigoPD": "2.1.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Rodrigo, cliente de uma instituição, demonstrou entusiasmo ao investir em ações de empresas estrangeiras por meio de BDRs que representam 1 ação da Alfa Eletronics, identificados pelo ticker ALFA34. Após alguns dias, ele procurou o atendimento para entender qual seria o valor justo de venda de seus BDRs, considerando a cotação da ação no mercado americano. Ele destacou que sabia da existência de uma razão de conversão entre a ação negociada nos Estados Unidos e os BDRs, mas não sabia como aplicar esse cálculo. O profissional de atendimento reuniu os dados disponíveis: cada ação da Alfa Eletronics equivale a 24 BDRs, a taxa de câmbio vigente é de R$ 5,41 por dólar e a ação da Alfa Eletronics está cotada em US$ 480 no mercado americano.",
      "enunciado": "Com esses dados, o valor justo de venda dos BDRs de Rodrigo, em reais, é:",
      "alternativas": [
        {
          "texto": "108,2.",
          "correta": true,
          "justificativa": "O valor justo dos BDR seria igual ao preço em Reais da MSFT  ajustado pela razão de conversão. Calculado assim:   BDR=480*5,41/24=108,2."
        },
        {
          "texto": "103,4.",
          "correta": false,
          "justificativa": "O erro está em aplicar incorretamente a razão de conversão, gerando um valor próximo ao correto e capaz de confundir o candidato."
        },
        {
          "texto": "105,1.",
          "correta": false,
          "justificativa": "Resulta de arredondamentos ou ajustes incorretos nos cálculos parciais, levando a um valor intermediário, mas que não corresponde ao cálculo preciso."
        },
        {
          "texto": "129,8.",
          "correta": false,
          "justificativa": "Decorre de ignorar a razão de conversão (24 BDRs = 1 ação), levando a um valor superestimado."
        }
      ],
      "gabaritoComentado": "O valor justo dos BDR seria igual ao preço em Reais da MSFT  ajustado pela razão de conversão. Calculado assim:   BDR=480*5,41/24=108,2."
    },
    {
      "id": "CESG_000235",
      "oficial": true,
      "codigoItem": "000235",
      "topicoPD": "Instrumentos de Renda Variável.",
      "codigoPD": "2.1.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Cecília, investidora pessoa física, recebeu comunicado de sua instituição financeira sobre uma nova oferta pública de ações (follow-on) de uma empresa da qual já detinha participação. Ao consultar o prospecto, verificou que a operação incluía uma oferta primária e outra secundária de ações. Cecília procurou Pedro Augusto, profissional de atendimento, para entender a diferença entre as duas parcelas e como a operação poderia afetar sua posição acionária.",
      "enunciado": "Pedro Augusto deve explicar que, caso Cecília não acompanhe a emissão,",
      "alternativas": [
        {
          "texto": "apenas a parcela primária da oferta gera captação de recursos para a companhia, e também provocará diluição da participação de Cecília.",
          "correta": true,
          "justificativa": "A parcela primária é composta por novas ações a serem emitidas pela empresa. A parcela secundária é composta por ações já existentes pertencentes a acionistas que desejam vender sua participação (acionistas vendedores). Assim, apenas a parcela primária gerará recursos para a empresa. Os recursos provenientes da parcela secundária serão distribuídos aos acionistas vendedores.\nApenas a parcela primária aumenta o número de ações que compõem o capital da empresa. Desta forma, caso Cecília não acompanhe a emissão, adquirindo ações na proporção de sua participação , terá sua participação diluída."
        },
        {
          "texto": "as parcelas primária e secundária provocam diluição da participação de Cecília e só a secundária resultará em entrada de novos recursos no caixa da empresa.",
          "correta": false,
          "justificativa": "A parcela primária é composta por novas ações a serem emitidas pela empresa. A parcela secundária é composta por ações já existentes pertencentes a acionistas que desejam vender sua participação (acionistas vendedores). Assim, apenas a parcela primária gerará recursos para a empresa. Os recursos provenientes da parcela secundária serão distribuídos aos acionistas vendedores.  Desta forma, é incorreto dizer que os recursos irão para a empresa. Apenas a parcela primária aumenta o número de ações que compõem o capital da empresa. Desta forma, caso Cecília não acompanhe a emissão, adquirindo ações na proporção de sua participação , terá sua participação diluída. Desta forma, é incorreto dizer que tanto a parcela primária quanto a secundária irão diluir a participação de Cecília."
        },
        {
          "texto": "tanto a oferta primária quanto a secundária geram captação de recursos para a companhia, e a parcela secundária provocará diluição da participação de Cecília.",
          "correta": false,
          "justificativa": "A parcela primária é composta por novas ações a serem emitidas pela empresa. A parcela secundária é composta por ações já existentes pertencentes a acionistas que desejam vender sua participação (acionistas vendedores). Assim, apenas a parcela primária gerará recursos para a empresa. Os recursos provenientes da parcela secundária serão distribuídos aos acionistas vendedores.  Desta forma, é incorreto dizer que os recursos irão para a empresa. Apenas a parcela primária aumenta o número de ações que compõem o capital da empresa. Desta forma, caso Cecília não acompanhe a emissão, adquirindo ações na proporção de sua participação , terá sua participação diluída. Desta forma, é correto dizer que a parcela primária irá diluir a participação de Cecília, caso não acompanhe a emissão, adquirindo ações na proporção de sua participação."
        },
        {
          "texto": "apenas a parcela secundária gera captação de recursos para a companhia, porém, ambas as parcelas provocarão diluição da participação de Cecília.",
          "correta": false,
          "justificativa": "A parcela primária é composta por novas ações a serem emitidas pela empresa. A parcela secundária é composta por ações já existentes pertencentes a acionistas que desejam vender sua participação (acionistas vendedores). Assim, apenas a parcela primária gerará recursos para a empresa. Os recursos provenientes da parcela secundária serão distribuídos aos acionistas vendedores.  Desta forma, é incorreto dizer que os recursos da parcela secundária irão para a empresa. Apenas a parcela primária aumenta o número de ações que compõem o capital da empresa. Desta forma, caso Cecília não acompanhe a emissão, adquirindo ações na proporção de sua participação, sua participação será diluída. Desta forma, é incorreto dizer que a parcela secundária irá diluir a participação de Cecília, caso não acompanhe a emissão, adquirindo ações na proporção de sua participação."
        }
      ],
      "gabaritoComentado": "A parcela primária é composta por novas ações a serem emitidas pela empresa. A parcela secundária é composta por ações já existentes pertencentes a acionistas que desejam vender sua participação (acionistas vendedores). Assim, apenas a parcela primária gerará recursos para a empresa. Os recursos provenientes da parcela secundária serão distribuídos aos acionistas vendedores.\nApenas a parcela primária aumenta o número de ações que compõem o capital da empresa. Desta forma, caso Cecília não acompanhe a emissão, adquirindo ações na proporção de sua participação , terá sua participação diluída."
    },
    {
      "id": "CESG_000236",
      "oficial": true,
      "codigoItem": "000236",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante a leitura do regulamento de um fundo de investimento recém-lançado, um participante apresenta o documento ao profissional CPA e manifesta dúvida sobre a possibilidade de chamada adicional de capital prevista na cláusula de responsabilidade dos cotistas. O profissional precisa esclarecer o tema de forma técnica e alinhada à legislação vigente.",
      "enunciado": "Neste caso, a compreensão das normas aplicáveis permite ao profissional CPA esclarecer que",
      "alternativas": [
        {
          "texto": "a responsabilidade do cotista, como regra geral, se limita ao valor investido, salvo previsão expressa em regulamento aceita pelo investidor, como é o caso.",
          "correta": true,
          "justificativa": "A legislação estabelece responsabilidade limitada como regra geral, admitindo ampliação apenas quando prevista no regulamento e aceita formalmente pelo cotista."
        },
        {
          "texto": "a responsabilidade do cotista é sempre limitada, independentemente do que conste no regulamento do fundo ou de cláusulas específicas previstas nos documentos.",
          "correta": false,
          "justificativa": "Ignora a possibilidade regulatória de responsabilidade ilimitada prevista em regulamento."
        },
        {
          "texto": "o cotista, havendo prejuízo no patrimônio do fundo,  sempre poderá ser chamado a responder além do valor aplicado, conforme legislação.",
          "correta": false,
          "justificativa": "Transforma exceção condicionada em regra automática."
        },
        {
          "texto": "fundos de investimento contam com proteção semelhante ao FGC, afastando a necessidade de avaliar cláusulas de responsabilidade.",
          "correta": false,
          "justificativa": "Fundos não têm FGC; a verificação recai sobre o regulamento e os documentos do fundo."
        }
      ],
      "gabaritoComentado": "A legislação estabelece responsabilidade limitada como regra geral, admitindo ampliação apenas quando prevista no regulamento e aceita formalmente pelo cotista."
    },
    {
      "id": "CESG_000237",
      "oficial": true,
      "codigoItem": "000237",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Um influenciador digital de finanças anuncia em uma live que está criando um “fundo de investimento multimercado inovador” com uma gestora independente. Ele afirma que o fundo:\nPrometerá rentabilidade mínima de 110% do CDI;\nEmprestará recursos a empresas parceiras estratégicas;\nUsará os ativos do fundo como garantia em operações privadas para “trazer mais segurança” ao cotista.\nCarlos, que acompanha a transmissão, encaminha a gravação a um profissional certificado pela ANBIMA, e questiona se a legislação permite que o influenciador faça esse tipo de divulgação.",
      "enunciado": "Uma compreensão correta do profissional certificado pela ANBIMA permite que ele esclareça ao cliente que",
      "alternativas": [
        {
          "texto": "todas as condutas descritas são vedadas: não se pode prometer rentabilidade, conceder crédito nem usar patrimônio do fundo como garantia.",
          "correta": true,
          "justificativa": "O Art. 101 da Resolução CVM nº 175 veda expressamente: prometer rentabilidade, conceder crédito, comprometer o patrimônio do fundo como garantia ou práticas que gerem conflitos de interesse."
        },
        {
          "texto": "apenas a promessa de rentabilidade é vedada; empréstimos e uso de ativos como garantia podem ser admitidos se previstos em regulamento.",
          "correta": false,
          "justificativa": "Ainda que a promessa de rentabilidade seja ilegal, tanto a concessão de crédito quanto o uso de ativos como garantia também violam a norma, independentemente do regulamento."
        },
        {
          "texto": "apenas a concessão de crédito é vedada; as demais práticas podem ser aceitas mediante aprovação dos cotistas em assembleia.",
          "correta": false,
          "justificativa": "A concessão de crédito é proibida, mas a vedação também se estende ao uso de patrimônio como garantia e à promessa de rentabilidade. Aprovação dos cotistas não tem poder para anular essas restrições."
        },
        {
          "texto": "apenas o uso de ativos como garantia é vedado; as demais condutas podem ser flexibilizadas de acordo com regras da CVM.",
          "correta": false,
          "justificativa": "O patrimônio do fundo não pode servir de garantia de obrigações de terceiros, mas essa não é a única vedação: prometer rentabilidade e conceder crédito também ferem a norma."
        }
      ],
      "gabaritoComentado": "O Art. 101 da Resolução CVM nº 175 veda expressamente: prometer rentabilidade, conceder crédito, comprometer o patrimônio do fundo como garantia ou práticas que gerem conflitos de interesse."
    },
    {
      "id": "CESG_000238",
      "oficial": true,
      "codigoItem": "000238",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Teresa investiu em um fundo de crédito privado, mas ficou decepcionada. A rentabilidade do fundo foi inferior ao benchmark, além das taxas de administração incorridas no período. Procurando atendimento, entrou em contato com Raquel, profissional da instituição, para solicitar o resgate de suas cotas. Durante a conversa, Teresa comentou que cogitava investir apenas em títulos de crédito individuais, em vez de fundos. Raquel explicou que, entre as vantagens dos fundos, está a diversificação do risco de crédito.",
      "enunciado": "Neste caso, Raquel poderia explicar este benefício como uma forma de",
      "alternativas": [
        {
          "texto": "reduzir o risco de perdas de crédito decorrentes do não pagamento de emissores individuais.",
          "correta": true,
          "justificativa": "A ideia chave da diversificação é reduzir o risco de crédito da carteira. Ela não elimina o risco, mas permite reduzi-lo ao diluir a exposição entre diferentes ativos e emissores. Dessa forma, diminui o impacto de eventos negativos em ativos individuais sobre o resultado total da carteira."
        },
        {
          "texto": "assegurar retornos superiores ao fundo, quando comparado a ativos individuais.",
          "correta": false,
          "justificativa": "Muitos investidores acreditam que a diversificação assegura retorno maior. Na verdade, ela melhora a relação risco-retorno, mas não garante desempenho superior em relação a ativos isolados."
        },
        {
          "texto": "reduzir custos de administração e gerenciamento do fundo.",
          "correta": false,
          "justificativa": "A diversificação tende a aumentar os custos de análise e de administração, já que exige acompanhamento de mais ativos, bem como maiores custos de transação, como corretagem, custódia, entre outros."
        },
        {
          "texto": "permitir liquidez imediata semelhante à dos fundos de renda fixa de alta liquidez.",
          "correta": false,
          "justificativa": "Embora a diversificação dos títulos de crédito permita aumentar as alternativas para dar  liquidez aos cotistas, não terá a mesma liquidez de fundos de  renda fixa de alta liquidez."
        }
      ],
      "gabaritoComentado": "A ideia chave da diversificação é reduzir o risco de crédito da carteira. Ela não elimina o risco, mas permite reduzi-lo ao diluir a exposição entre diferentes ativos e emissores. Dessa forma, diminui o impacto de eventos negativos em ativos individuais sobre o resultado total da carteira."
    },
    {
      "id": "CESG_000239",
      "oficial": true,
      "codigoItem": "000239",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante um atendimento, Ana, investidora, comenta ter recebido comunicado de seu banco sobre uma nova emissão de cotas em um fundo de investimento em que já aplica. Ela pergunta a João, profissional CPA, se essa emissão significa que o fundo mudará suas regras ou objetivos, e se precisa tomar alguma providência para continuar investindo.",
      "enunciado": "João explica que a nova operação",
      "alternativas": [
        {
          "texto": "deve seguir o regulamento e a política da classe, respeitando prazos e controles contábeis definidos.",
          "correta": true,
          "justificativa": "A Resolução CVM 175 determina que a emissão de cotas deve seguir o regulamento e a política de investimento da classe. O administrador e o gestor conduzem o processo respeitando prazos, controles contábeis e limites definidos, garantindo transparência e equidade entre cotistas."
        },
        {
          "texto": "depende de autorização específica da CVM, mediante aprovação formal do órgão regulador.",
          "correta": false,
          "justificativa": "A autorização da CVM é exigida para o registro e constituição do fundo, não para cada nova emissão de cotas. Solicitar aprovação formal a cada operação seria incompatível com o modelo regulatório, que confere autonomia operacional às instituições sob supervisão contínua."
        },
        {
          "texto": "ocorre somente após o fundo atingir o valor mínimo inicial determinado pela tabela divulgada pela CVM.",
          "correta": false,
          "justificativa": "A norma não impõe valor mínimo padronizado para início de novas emissões. O patrimônio inicial é definido no regulamento de cada fundo, de acordo com seu público e estratégia, e não constitui requisito para cada nova captação."
        },
        {
          "texto": "permite ao gestor fixar a quantidade, o preço e o cronograma de emissão, conforme condições de mercado.",
          "correta": false,
          "justificativa": "O gestor não pode definir livremente a quantidade, o preço ou o cronograma. A emissão deve respeitar critérios previstos no regulamento, controles internos e normas de equidade entre cotistas, evitando variações arbitrárias que comprometam a governança."
        }
      ],
      "gabaritoComentado": "A Resolução CVM 175 determina que a emissão de cotas deve seguir o regulamento e a política de investimento da classe. O administrador e o gestor conduzem o processo respeitando prazos, controles contábeis e limites definidos, garantindo transparência e equidade entre cotistas."
    },
    {
      "id": "CESG_000240",
      "oficial": true,
      "codigoItem": "000240",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Renata, profissional CPA, auxilia o cliente Rafael na análise da lâmina de um fundo multimercado. O documento informa que a estratégia do fundo X é \"macro\", buscando ganhos em cenários de juros, inflação e câmbio. Rafael explica que ouviu o call mensal do gestor em que ele falou: \"Após a decisão do Copom de manter os juros, zeramos as posições em dólar e aumentamos a alocação em títulos públicos prefixados do fundo X\".",
      "enunciado": "Renata explica que, com base nessa notícia, a atividade realizada pelo gestor foi",
      "alternativas": [
        {
          "texto": "ajustar a carteira do fundo à nova expectativa para a economia, buscando rentabilizar o capital conforme o cenário de juros e câmbio.",
          "correta": true,
          "justificativa": "A função principal do gestor é tomar decisões ativas de investimento para posicionar a carteira do fundo de acordo com suas análises e expectativas do cenário econômico."
        },
        {
          "texto": "executar a apuração do resultado do fundo e o cálculo do valor da cota, refletindo o impacto da decisão do Copom nos ativos.",
          "correta": false,
          "justificativa": "A apuração de resultados e o cálculo do valor da cota são responsabilidades do administrador do fundo, e não do gestor, que se concentra na estratégia de investimento."
        },
        {
          "texto": "garantir o cumprimento das regras do regulamento, vendendo ativos para manter o fundo dentro dos seus limites de concentração.",
          "correta": false,
          "justificativa": "Embora o gestor deva seguir o regulamento, a ação descrita é uma decisão tática para buscar retorno, não uma medida obrigatória para corrigir um desenquadramento de risco."
        },
        {
          "texto": "comunicar ao mercado e aos cotistas a nova visão da equipe econômica, formalizando a estratégia do fundo em um relatório de gestão.",
          "correta": false,
          "justificativa": "A comunicação é uma atividade de suporte. A função principal do gestor é a tomada de decisão e a execução das operações de compra e venda de ativos, não apenas a sua divulgação."
        }
      ],
      "gabaritoComentado": "A função principal do gestor é tomar decisões ativas de investimento para posicionar a carteira do fundo de acordo com suas análises e expectativas do cenário econômico."
    },
    {
      "id": "CESG_000241",
      "oficial": true,
      "codigoItem": "000241",
      "topicoPD": "Introdução aos Fundos de Investimento.",
      "codigoPD": "2.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Difícil",
      "contexto": "Durante um atendimento, Valéria procurou a instituição para esclarecer dúvidas sobre o resgate de suas cotas no Fundo Alpha, um fundo de direitos creditórios (FDIC). Ela relatou que havia aplicado R$ 80.000 no dia 2 e solicitou o resgate no dia 5. Valéria explicou que desejava entender a variação do fundo e, por isso, pediu ao profissional de atendimento que calculasse o valor bruto do resgate, antes da dedução de impostos, considerando as regras do fundo. O profissional reforçou que, conforme regulamento, a emissão de cotas ocorre em D+1 em relação à aplicação, a cotização do resgate em D+4 em relação ao pedido, e a liquidação no dia seguinte à cotização.\nDia\tCota do Fundo\n1\t1,10\n2\t1,11\n3\t1,09\n4\t1,12\n5\t1,11\n6\t1,10\n7\t1,12\n8\t1,13\n9\t1,12\n10\t1,11",
      "enunciado": "Diante das informações apresentadas, o valor a ser informado à cliente seria:",
      "alternativas": [
        {
          "texto": "R$ 82.201,83",
          "correta": true,
          "justificativa": "Data de aplicação : dia 2\nData de emissão de cotas: dia 3\nData de solicitação do resgate: dia 5\nData de cotização do resgate: dia 9\nData de liquidação do resgate dia 10\nValor bruto a ser resgatado antes de taxas e impostos=(1,12/1,09)*80.000=82.201,83"
        },
        {
          "texto": "R$ 81.467,89",
          "correta": false,
          "justificativa": "Considera equivocadamente a cota de liquidação no lugar da data de cotização. Em decorrência o cálculo do valor bruto foi: (1,11/1,09)*80000=81.467,89"
        },
        {
          "texto": "R$ 80.720,72",
          "correta": false,
          "justificativa": "Considera equivocadamente a data de emissão em D+0. Em decorrência o cálculo do valor bruto foi: (1,12/1,11)*80.000=80720,72"
        },
        {
          "texto": "R$ 80.000,00",
          "correta": false,
          "justificativa": "Considera equivocadamente a data de emissão em D+0 e data de liquidação. Em decorrência o cálculo do valor bruto foi: (1,11/1,11)*80.000=80.000,00"
        }
      ],
      "gabaritoComentado": "Data de aplicação : dia 2\nData de emissão de cotas: dia 3\nData de solicitação do resgate: dia 5\nData de cotização do resgate: dia 9\nData de liquidação do resgate dia 10\nValor bruto a ser resgatado antes de taxas e impostos=(1,12/1,09)*80.000=82.201,83"
    },
    {
      "id": "CESG_000242",
      "oficial": true,
      "codigoItem": "000242",
      "topicoPD": "Produtos de investimentos.",
      "codigoPD": "2.1",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Joel, profissional CPA, foi procurado por investidores interessados em participar de um fundo de investimento inovador. Durante o atendimento, ele consultou o regulamento do fundo e verificou a cláusula que estabelecia: “as estratégias de investimento podem resultar em perdas superiores ao capital aplicado e na consequente obrigação do cotista de aportar recursos adicionais para cobrir o prejuízo”. Diante da dúvida dos investidores sobre a documentação necessária para formalizar a aplicação, Joel explicou que eles precisariam assinar um termo.",
      "enunciado": "O termo a que Joel se referiu é o",
      "alternativas": [
        {
          "texto": "termo de adesão e ciência de risco, que formaliza o conhecimento dos cotistas sobre a possibilidade de perdas superiores ao capital aplicado.",
          "correta": true,
          "justificativa": "Por meio de um termo de adesão e ciência de risco, ao ingressar no fundo, todo cotista deve atestar que teve acesso à documentação requerida , que conhece os fatores de risco que podem resultar em perdas superiores ao capital aplicado. Conforme artigo 29 inc. 2º, letra e da Res. CVM 175/22 . Como o regulamento do fundo explicitamente não limita a responsabilidade do cotista ao valor por ele subscrito, o cotista não precisa assinar, conjuntamente, o Termo de ciência e assunção de responsabilidade ilimitada."
        },
        {
          "texto": "termo de ciência e assunção de responsabilidade patrimonial ilimitada, que substitui a necessidade de adesão quando há alavancagem.",
          "correta": false,
          "justificativa": "Conforme artigo 29, inciso 2º, Inc 2º, letra e da Resolução 175/22 da CVM, caso o regulamento do fundo não limite a responsabilidade do cotista ao valor por ele subscrito, o cotista deve atestar que tem ciência dos riscos decorrentes da responsabilidade ilimitada assinando o termo de ciência e assunção de responsabilidade ilimitada. Como neste caso, o regulamento do fundo explicita que “as estratégias de investimento podem resultar em perdas superiores ao capital aplicado e na consequente obrigação do cotista de aportar recursos adicionais para cobrir o prejuízo”, basta a assinatura do termo de adesão e a ciência de risco."
        },
        {
          "texto": "termo de ciência e confirmação de interesse, registrado em meio físico ou digital, como único requisito de ingresso no fundo de investimento.",
          "correta": false,
          "justificativa": "O Termo de confirmação de interesse por meio digital ou físico não é suficiente. Conforme Art. 29, inc. 2º, letra e, da Resolução 175/22 da CVM, ao ingressar no fundo, todo cotista deve atestar, por meio de um termo de adesão e ciência de risco , que teve acesso e ciência da documentação requerida e das informações definidas nos itens I e II do artigo referido anteriormente."
        },
        {
          "texto": "termo de autorização para movimentação de recursos, que assegura a formalização de conhecimento de perdas relativas a juros e depreciação.",
          "correta": false,
          "justificativa": "Não é dispensada a assinatura de termo, conforme Art. 29 Inc. 2º, letra e, da Resolução 175/22 da CVM. Ao ingressar no fundo, todo cotista deve atestar, por meio de um termo de adesão e ciência de risco , que teve o devido acesso à documentação requerida e às informações definidas nos itens I e II do artigo referido anteriormente."
        }
      ],
      "gabaritoComentado": "Por meio de um termo de adesão e ciência de risco, ao ingressar no fundo, todo cotista deve atestar que teve acesso à documentação requerida , que conhece os fatores de risco que podem resultar em perdas superiores ao capital aplicado. Conforme artigo 29 inc. 2º, letra e da Res. CVM 175/22 . Como o regulamento do fundo explicitamente não limita a responsabilidade do cotista ao valor por ele subscrito, o cotista não precisa assinar, conjuntamente, o Termo de ciência e assunção de responsabilidade ilimitada."
    },
    {
      "id": "CESG_000243",
      "oficial": true,
      "codigoItem": "000243",
      "topicoPD": "Produtos de investimentos.",
      "codigoPD": "2.1",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante um atendimento digital, um profissional certificado Anbima recebe contato de um cliente conservador que, há 2 anos investiu R$ 200 mil no Tesouro Prefixado com vencimento 5 anos depois da aquisição (portanto, daqui 3 anos). Ao consultar o extrato, o cliente observou desvalorização no valor de mercado e demonstrou surpresa, pois acreditava que o título permaneceria estável até o vencimento. Preocupado com a aparente perda, mencionou interesse em alternativas com maior liquidez e previsibilidade e queria entender o motivo da oscilação observada.",
      "enunciado": "Nesse cenário, o profissional esclarece tecnicamente ao cliente que",
      "alternativas": [
        {
          "texto": "a marcação a mercado ajusta diariamente os preços de prefixados longos, que oscilam, mas garantem o valor contratado no vencimento.",
          "correta": true,
          "justificativa": "A marcação a mercado reflete a precificação diária dos títulos conforme as expectativas de juros e inflação. Prefixados de prazo mais longo são mais sensíveis a oscilações, mas o investidor que mantiver até o vencimento receberá exatamente a taxa contratada."
        },
        {
          "texto": "as oscilações no extrato resultam de recolhimento antecipado de impostos e taxas administrativas cobradas pelo Tesouro.",
          "correta": false,
          "justificativa": "Impostos só incidem no momento do resgate ou nos cupons, e taxas administrativas são fixas, não explicando variações diárias."
        },
        {
          "texto": "apenas títulos indexados à Selic sofrem marcação a mercado; prefixados e atrelados ao IPCA permanecem estáveis até o resgate.",
          "correta": false,
          "justificativa": "Todos os títulos públicos são sujeitos à marcação a mercado. O que difere é a intensidade: prefixados e indexados ao IPCA são mais voláteis que Tesouro Selic."
        },
        {
          "texto": "o extrato mostra variações por erro de interpretação dos investidores, sem alteração real no preço do título.",
          "correta": false,
          "justificativa": "Não se trata de erro de interpretação, mas de variação real do preço de mercado. O extrato reflete oscilações diárias de precificação, não alteração da taxa original."
        }
      ],
      "gabaritoComentado": "A marcação a mercado reflete a precificação diária dos títulos conforme as expectativas de juros e inflação. Prefixados de prazo mais longo são mais sensíveis a oscilações, mas o investidor que mantiver até o vencimento receberá exatamente a taxa contratada."
    },
    {
      "id": "CESG_000244",
      "oficial": true,
      "codigoItem": "000244",
      "topicoPD": "Produtos de Previdência Complementar (PGBL E VGBL).",
      "codigoPD": "2.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante um atendimento, César, engenheiro de uma empresa privada, comentou com Rogério, profissional CPA, que deseja começar a investir em previdência complementar. Ele ouviu colegas falarem sobre o PGBL, mas não entendeu quais perfis se beneficiam dessa modalidade.",
      "enunciado": "Rogério esclarece que esse plano",
      "alternativas": [
        {
          "texto": "é voltado para quem declara o IR no modelo completo e busca deduzir contribuições até o limite legal anual.",
          "correta": true,
          "justificativa": "O PGBL é voltado a contribuintes que declaram IR no modelo completo, permitindo deduzir até 12% da renda bruta anual. O imposto incide sobre o total resgatado, sendo ideal para quem busca benefício fiscal no longo prazo."
        },
        {
          "texto": "é isento de imposto no resgate, pois a tributação ocorre durante o período de acumulação dos recursos.",
          "correta": false,
          "justificativa": "O PGBL não é isento no resgate. O imposto é cobrado sobre o valor total (aportes + rendimentos), conforme regime progressivo ou regressivo. A vantagem está na dedutibilidade das contribuições, não na isenção."
        },
        {
          "texto": "é indicado para quem utiliza o modelo simplificado de IR, já que não há necessidade de deduzir contribuições.",
          "correta": false,
          "justificativa": "Quem utiliza o modelo simplificado não pode usufruir da dedução de 12%. Nesse caso, o VGBL costuma ser mais adequado, pois tributa apenas os rendimentos."
        },
        {
          "texto": "é destinado a empregados de empresas patrocinadoras que também realizam contribuições ao plano.",
          "correta": false,
          "justificativa": "A restrição a empregados de empresas patrocinadoras caracteriza planos fechados (EFPC), não o PGBL, que é aberto, oferecido por EAPCs e acessível a qualquer pessoa física."
        }
      ],
      "gabaritoComentado": "O PGBL é voltado a contribuintes que declaram IR no modelo completo, permitindo deduzir até 12% da renda bruta anual. O imposto incide sobre o total resgatado, sendo ideal para quem busca benefício fiscal no longo prazo."
    },
    {
      "id": "CESG_000245",
      "oficial": true,
      "codigoItem": "000245",
      "topicoPD": "Produtos de Previdência Complementar (PGBL E VGBL).",
      "codigoPD": "2.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante um atendimento, Beatriz, dentista de 38 anos, procurou João, profissional CPA, para esclarecer dúvidas sobre seu plano de previdência VGBL (Vida Gerador de Benefício Livre). Ela explicou que seu pró-labore mensal é de 1 salário mínimo e gostaria de entender se esse plano seria adequado a ela.",
      "enunciado": "João explica que o plano de Beatriz é adequado pois",
      "alternativas": [
        {
          "texto": "é voltado para quem declara o IR no modelo simplificado e tributa apenas os rendimentos no resgate.",
          "correta": true,
          "justificativa": "O VGBL é destinado a quem utiliza o modelo simplificado de IR ou já atingiu o limite de dedução do PGBL. O imposto incide somente sobre os rendimentos, o que torna o plano indicado para autônomos e profissionais liberais."
        },
        {
          "texto": "é voltado para quem busca deduzir até 12% da renda bruta anual e reduzir a base de cálculo do imposto.",
          "correta": false,
          "justificativa": "A dedução de até 12% da renda bruta anual é característica do PGBL, não do VGBL. Este não concede benefício fiscal na fase de acumulação, sendo vantajoso em termos de tributação sobre ganhos."
        },
        {
          "texto": "é voltado para quem participa de planos corporativos que oferecem previdência complementar patrocinada.",
          "correta": false,
          "justificativa": "O VGBL é um plano aberto, oferecido por EAPCs, e não se limita a participantes de planos corporativos. Está disponível para qualquer pessoa física interessada em formar poupança previdenciária."
        },
        {
          "texto": "é voltado para quem declara IR pelo modelo simplificado e tributa o valor total resgatado, abrangendo capital e rendimentos acumulados.",
          "correta": false,
          "justificativa": "A tributação sobre o valor total resgatado é típica do PGBL. No VGBL, apenas os rendimentos são tributados, o que o torna mais eficiente para quem não utiliza o modelo completo de IR."
        }
      ],
      "gabaritoComentado": "O VGBL é destinado a quem utiliza o modelo simplificado de IR ou já atingiu o limite de dedução do PGBL. O imposto incide somente sobre os rendimentos, o que torna o plano indicado para autônomos e profissionais liberais."
    },
    {
      "id": "CESG_000292",
      "oficial": true,
      "codigoItem": "000292",
      "topicoPD": "Instrumentos de Renda Variável.",
      "codigoPD": "2.1.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Tânia é acionista da empresa de capital aberto Nova Era S.A. e recebeu um comunicado de que a companhia realizará uma operação de ajuste no número de ações em circulação. O documento informava que cada ação existente passará a representar dez novas ações. Desejando entender o impacto dessa alteração sobre sua participação e sobre o valor do capital da empresa, Tânia procurou Luísa, profissional de atendimento de sua instituição financeira.",
      "enunciado": "A informação correta a ser fornecida por Luísa é de que",
      "alternativas": [
        {
          "texto": "haverá aumento do número de ações no capital social da empresa. A participação de Tânia  e o valor do capital social da Nova Era ficarão  inalterados.",
          "correta": true,
          "justificativa": "Um desdobramento de ações consiste no aumento do número das ações em circulação (outstanding) que compõem o capital social da empresa.  No entanto, o valor do capital social não é alterado, uma vez que não haverá entrada ou saída de recursos no capital da empresa. Haverá apenas o aumento do número de ações em circulação. O número de ações de Tânia será aumentado na proporção de sua participação, de modo que sua participação ficará inalterada."
        },
        {
          "texto": "não haverá alteração do número de ações no capital social da empresa. A participação de Tânia  e o valor do capital social da Nova Era ficarão  inalterados.",
          "correta": false,
          "justificativa": "A primeira afirmação está incorreta, pois um desdobramento de ações consiste no aumento do número das ações em circulação (outstanding) que compõem o capital social da empresa. A segunda afirmação está correta. O valor do capital social não é alterado, uma vez que não haverá entrada ou saída de recursos no capital da empresa. Da mesma forma, a  participação de Tânia  ficará  inalterada, pois Tânia receberá mais  ações na proporção de sua participação, mantendo sua participação inalterada."
        },
        {
          "texto": "não haverá aumento do número de ações no capital social da empresa. A participação de Tânia na Nova Era e o valor do capital social da empresa serão reduzidos.",
          "correta": false,
          "justificativa": "A primeira afirmação está incorreta, pois um desdobramento de ações consiste no aumento do número das ações em circulação (outstanding) que compõem o capital social da empresa. A segunda afirmação também está incorreta. O valor do capital social não é alterado, uma vez que não haverá entrada ou saída de recursos no capital da empresa. Da mesma forma, a  participação de Tânia  ficará  inalterada, pois Tânia receberá mais  ações na proporção de sua participação, mantendo sua participação inalterada."
        },
        {
          "texto": "haverá aumento do número de ações no capital social da empresa. a participação de Tânia  será reduzida e o valor do capital social da Nova Era será aumentado.",
          "correta": false,
          "justificativa": "A primeira afirmação está correta. Um desdobramento de ações consiste no aumento do número das ações em circulação (outstanding) que compõem o capital social da empresa.  No entanto, a segunda afirmação está incorreta. O valor do capital social não é alterado, uma vez que não haverá entrada ou saída de recursos no capital da empresa. Haverá apenas o aumento do número de ações em circulação. Da mesma forma,  a participação de Tânia  será inalterada, pois Tânia receberá mais  ações na proporção de sua participação, mantendo sua participação inalterada."
        }
      ],
      "gabaritoComentado": "Um desdobramento de ações consiste no aumento do número das ações em circulação (outstanding) que compõem o capital social da empresa.  No entanto, o valor do capital social não é alterado, uma vez que não haverá entrada ou saída de recursos no capital da empresa. Haverá apenas o aumento do número de ações em circulação. O número de ações de Tânia será aumentado na proporção de sua participação, de modo que sua participação ficará inalterada."
    },
    {
      "id": "CESG_000293",
      "oficial": true,
      "codigoItem": "000293",
      "topicoPD": "Níveis de governança para as empresas.",
      "codigoPD": "2.1.1.2.3.1",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Juliana, analista de investimento, recebeu uma consulta de Frederico, investidor em ações, sobre uma empresa que anunciou um plano de captação e a migração de segmento de listagem na B3. A companhia avalia aderir a um segmento especial de governança para atrair investidores institucionais, ainda com emissões de ações PN e tag along para investidores minoritários. Frederico pediu esclarecimentos sobre como essa mudança pode afetar os direitos dos acionistas e a estrutura das ações. Juliana explicou que os segmentos de listagem da B3 impõem obrigações adicionais às previstas na lei societária, variando em rigor e escopo. Ressaltou também que a escolha do segmento pode influenciar a percepção de risco, a liquidez, a política de disclosure e as proteções em transações de controle (como o tag along).",
      "enunciado": "Com base no contexto, Juliana explica ao cliente que a empresa vai aderir ao",
      "alternativas": [
        {
          "texto": "Nível 1, aumentando o compromisso de transparência e direitos.",
          "correta": true,
          "justificativa": "O Nível 1 permite a emissão de ações preferenciais (PN) e exige compromissos adicionais de governança, como maior detalhamento de informações e regras de disclosure. A empresa busca atrair investidores ampliando transparência sem alterar a estrutura de capital de forma restritiva."
        },
        {
          "texto": "Novo Mercado, adotando compromissos semelhantes ao Nível 1.",
          "correta": false,
          "justificativa": "O Novo Mercado exige emissão exclusiva de ações ordinárias (ON) e tag along de 100%. Embora tenha objetivos de transparência semelhantes, a presença de PN no caso descrito mostra que a companhia não pode aderir a este segmento, o que torna a alternativa incorreta."
        },
        {
          "texto": "Nível 2, proibindo emissões de ações preferenciais (PN).",
          "correta": false,
          "justificativa": "O Nível 2 aceita ações PN, mas concede a elas tag along de 80% em caso de venda de controle, ao contrário do Novo Mercado. A afirmação de que o segmento proíbe PN é incorreta, pois confunde sua estrutura com a do Novo Mercado."
        },
        {
          "texto": "Novo Mercado, adotando o tag along parcial para todos os acionistas.",
          "correta": false,
          "justificativa": "No Novo Mercado, o tag along é integral (100%) para todas as ações ON. O enunciado menciona tag along parcial, o que está mais próximo do Nível 2. Por isso, a descrição dada nesta alternativa é equivocada e não corresponde ao funcionamento do Novo Mercado."
        }
      ],
      "gabaritoComentado": "O Nível 1 permite a emissão de ações preferenciais (PN) e exige compromissos adicionais de governança, como maior detalhamento de informações e regras de disclosure. A empresa busca atrair investidores ampliando transparência sem alterar a estrutura de capital de forma restritiva."
    },
    {
      "id": "CESG_000294",
      "oficial": true,
      "codigoItem": "000294",
      "topicoPD": "Produtos de Previdência Complementar (PGBL E VGBL).",
      "codigoPD": "2.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Em atendimento híbrido via canal digital da instituição, um motorista de aplicativo que contribui ao INSS pelo carnê e utiliza declaração simplificada do IR solicita ao profissional CPA esclarecimento sobre previdência complementar. Ele deseja realizar aportes mensais para longo prazo e acredita que terá benefício fiscal ao escolher um plano com dedução de contribuições do tipo PGBL ou VGBL. Como seu fluxo financeiro é variável e está iniciando um planejamento de aposentadoria gradual, o objetivo é entender a regra fiscal aplicável antes de comparar alternativas no aplicativo da instituição. O profissional CPA deve prestar um esclarecimento técnico ao cliente, quanto à possibilidade de dedução fiscal das contribuições em planos de previdência.",
      "enunciado": "Nesse cenário, a explicação que o profissional CPA deve fornecer ao cliente é que",
      "alternativas": [
        {
          "texto": "a declaração simplificada impede a dedução de contribuições ao PGBL.",
          "correta": true,
          "justificativa": "No PGBL, a dedução só é permitida no modelo completo de declaração; quem utiliza a declaração simplificada não pode deduzir contribuições."
        },
        {
          "texto": "a dedução no PGBL é permitida em qualquer tipo de declaração do IR.",
          "correta": false,
          "justificativa": "A dedução no PGBL não é permitida em qualquer tipo de declaração, sendo vedada no modelo simplificado."
        },
        {
          "texto": "o regime regressivo garante dedução, pois a tributação incide apenas sobre o rendimento.",
          "correta": false,
          "justificativa": "O regime tributário define a forma de tributação no resgate e não cria direito à dedução das contribuições."
        },
        {
          "texto": "a dedução é válida em qualquer plano de previdência, desde que haja aportes regulares.",
          "correta": false,
          "justificativa": "A dedução não é válida em qualquer plano, pois no VGBL não há dedução de contribuições."
        }
      ],
      "gabaritoComentado": "No PGBL, a dedução só é permitida no modelo completo de declaração; quem utiliza a declaração simplificada não pode deduzir contribuições."
    },
    {
      "id": "CESG_000295",
      "oficial": true,
      "codigoItem": "000295",
      "topicoPD": "Produtos de Previdência Complementar (PGBL E VGBL).",
      "codigoPD": "2.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Durante um atendimento em agência, uma médica autônoma que administra seu consultório particular compartilha com o profissional CPA seu interesse em conhecer produtos que contribuam para a organização financeira e familiar de longo prazo. Ela comenta que tem patrimônio em aplicações e bens, mas gostaria de assegurar que os recursos sejam transferidos diretamente aos filhos, com agilidade, sem depender de inventário, em caso de imprevistos. Deseja entender qual tipo de plano previdenciário pode atender esse objetivo, considerando exclusivamente a estrutura do produto, sem ainda entrar em aspectos tributários específicos.",
      "enunciado": "Analisando a situação, o profissional CPA deve esclarecer à cliente que",
      "alternativas": [
        {
          "texto": "no VGBL, a indicação direta de beneficiários permite a transferência dos recursos conforme as regras do produto, atendendo ao objetivo sucessório apresentado.",
          "correta": true,
          "justificativa": "O VGBL permite indicação direta de beneficiários e transferência conforme regras próprias do produto, atendendo ao objetivo de agilidade e organização sucessória apresentado no contexto."
        },
        {
          "texto": "no PGBL, a estrutura do plano prioriza benefícios fiscais em vida, não sendo o instrumento mais adequado quando o foco principal é a transferência direta de recursos aos herdeiros.",
          "correta": false,
          "justificativa": "Embora o PGBL permita beneficiários, sua estrutura é usualmente associada a planejamento fiscal, não sendo a alternativa mais aderente ao objetivo sucessório descrito."
        },
        {
          "texto": "planos de previdência permitem beneficiários, mas a liberação dos recursos sempre depende de procedimentos sucessórios equivalentes aos de aplicações tradicionais.",
          "correta": false,
          "justificativa": "A previdência não segue automaticamente os mesmos trâmites sucessórios de aplicações tradicionais, e a estrutura do produto influencia a forma de transferência dos recursos."
        },
        {
          "texto": "investimentos tradicionais atendem ao objetivo sucessório, pois também possibilitam a indicação direta de beneficiários com liquidez imediata.",
          "correta": false,
          "justificativa": "Aplicações financeiras tradicionais não possuem mecanismo interno de indicação direta de beneficiários, o que pode sujeitar os recursos a inventário."
        }
      ],
      "gabaritoComentado": "O VGBL permite indicação direta de beneficiários e transferência conforme regras próprias do produto, atendendo ao objetivo de agilidade e organização sucessória apresentado no contexto."
    },
    {
      "id": "CESG_000296",
      "oficial": true,
      "codigoItem": "000296",
      "topicoPD": "Produtos de Financiamento.",
      "codigoPD": "2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Marcos tem uma fatura de cartão de crédito de R$ 10.200,00 com vencimento próximo, mas não dispõe de recursos para quitá-la integralmente. Após ouvir de um familiar que poderia avaliar alternativas de refinanciamento, procurou sua instituição financeira e ao chegar foi atendido por Camila, profissional CPA. Ele explicou a ela a situação e perguntou como funciona essa modalidade de refinanciamento oferecida pelo banco. Camila esclarece que essa operação  de refinanciamento da fatura ocorre com base em um contrato de parcelamento do saldo da dívida do cartão.",
      "enunciado": "Camila acrescentou em sua explicação que",
      "alternativas": [
        {
          "texto": "as parcelas do cartão são fixas e o prazo é definido, com incidência de encargos financeiros e impostos na operação.",
          "correta": true,
          "justificativa": "O refinanciamento consiste em renegociar as dívidas já existentes, substituindo o contrato atual por um novo que oferece condições de pagamento mais favoráveis, como juros menores e prazos de pagamento mais longos, para facilitar a sua organização financeira. A medida permite parcelar o saldo total da dívida do cartão em um número maior de parcelas fixas e com taxas de juros inferiores às do rotativo do cartão, evitando que a dívida cresça excessivamente. Há incidência de impostos, pois se trata de um novo financiamento, bem como de encargos financeiros. Estes, porém, são inferiores ao crédito rotativo."
        },
        {
          "texto": "as parcelas são atualizadas com a mesma taxa de juros do crédito rotativo e com prazo definido, com incidência de impostos.",
          "correta": false,
          "justificativa": "O refinanciamento da fatura ocorre com base em um contrato de parcelamento do saldo da dívida do cartão. Neste novo contrato, porém,  as parcelas são atualizadas a uma taxa de juros fixa e  inferior à taxa de juros do crédito rotativo. Haverá incidência de impostos na operação, pois se trata de um novo financiamento."
        },
        {
          "texto": "o parcelamento da fatura pode ser contratado sem cobrança de encargos financeiros e impostos, se o valor mínimo da fatura for pago.",
          "correta": false,
          "justificativa": "O refinanciamento da fatura ocorre com base em um contrato de parcelamento do saldo da dívida do cartão. O parcelamento da fatura pode ser contratado, porém haverá  a incidência de encargos financeiros e impostos. Não há necessidade de que o valor mínimo da fatura seja pago, uma vez que o saldo integral do cartão de crédito pode ser refinanciado."
        },
        {
          "texto": "a extensão do vencimento do saldo da fatura para o próximo mês é automática e sem encargos, se o valor mínimo da fatura for pago.",
          "correta": false,
          "justificativa": "O refinanciamento da fatura não ocorre com base na extensão do vencimento do saldo da fatura para o próximo vencimento do cartão,mas sim em prazo definido e que pode ser mais longo. Adicionalmente, haverá cobrança de impostos e encargos financeiros na operação."
        }
      ],
      "gabaritoComentado": "O refinanciamento consiste em renegociar as dívidas já existentes, substituindo o contrato atual por um novo que oferece condições de pagamento mais favoráveis, como juros menores e prazos de pagamento mais longos, para facilitar a sua organização financeira. A medida permite parcelar o saldo total da dívida do cartão em um número maior de parcelas fixas e com taxas de juros inferiores às do rotativo do cartão, evitando que a dívida cresça excessivamente. Há incidência de impostos, pois se trata de um novo financiamento, bem como de encargos financeiros. Estes, porém, são inferiores ao crédito rotativo."
    },
    {
      "id": "CESG_000297",
      "oficial": true,
      "codigoItem": "000297",
      "topicoPD": "Produtos de Financiamento.",
      "codigoPD": "2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Maurício adquiriu 1000 cotas do Fundo de Investimento Imobiliário (FII) Fênix na B3 ao preço de R$80 por cota. O capital do fundo à época era constituído de 1 milhão de cotas. Seu objetivo era aumentar  a aplicação no longo prazo, beneficiando-se de distribuição de dividendos e da valorização dos investimentos do fundo. Certo dia, recebeu comunicado sobre uma oferta pública de distribuição primária de cotas do Fênix ao preço de R$70 por cota. Adicionalmente, informa a existência de direito de preferência de Maurício na subscrição. Após a oferta pública, o capital do fundo será constituído por 1.200.000 cotas. Maurício contatou Tomás, profissional CPA de sua instituição, para obter esclarecimentos sobre a oferta. Particularmente, gostaria de saber quanto deveria investir na oferta, de modo que sua participação no capital do fundo permanecesse inalterada.",
      "enunciado": "Tomás informa que Maurício deveria investir",
      "alternativas": [
        {
          "texto": "R$ 14.000.",
          "correta": true,
          "justificativa": "Participação inicial =1000/1.000.000=0,1%\nNúmero de cotas de Maurício após a oferta=0,1%*1.200.000=1200\nCotas a serem adquiridas=1200-1000=200\nValor a ser investido R$200*70=R$14.000"
        },
        {
          "texto": "R$ 16.000.",
          "correta": false,
          "justificativa": "O candidato calcula o número de cotas corretamente , mas usa o preço original de aquisição de Maurício.\nValor a ser investido R$200*80=R$16.000"
        },
        {
          "texto": "R$ 7.000.",
          "correta": false,
          "justificativa": "O candidato calcula o número de cotas erroneamente , mas usa o preço da oferta corretamente.\nValor a ser investido R$100*70=R$7.000"
        },
        {
          "texto": "R$ 9.600.",
          "correta": false,
          "justificativa": "O candidato calcula o número de cotas e usa o preço de aquisição original de Maurício.\nValor a ser investido R$120*80=R$9.600"
        }
      ],
      "gabaritoComentado": "Participação inicial =1000/1.000.000=0,1%\nNúmero de cotas de Maurício após a oferta=0,1%*1.200.000=1200\nCotas a serem adquiridas=1200-1000=200\nValor a ser investido R$200*70=R$14.000"
    },
    {
      "id": "CESG_000298",
      "oficial": true,
      "codigoItem": "000298",
      "topicoPD": "Produtos de Financiamento.",
      "codigoPD": "2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Tatiane, servidora pública, deseja financiar a compra de um notebook e alguns móveis planejados. O valor total é de R$ 18.000,00. O banco ofereceu um crédito direto ao consumidor (CDC) com prazo de 48 meses e taxa de 2,1% ao mês, enquanto a loja sugeriu CDC vinculado a convênio, com 36 meses e taxa de 1,8% ao mês, e débito automático em conta. Tatiane procurou Cláudio, profissional certificado ANBIMA, para entender a diferença entre essas operações.",
      "enunciado": "Cláudio explica para Tatiane que o CDC",
      "alternativas": [
        {
          "texto": "do banco, com prazo maior, tende a ter custo total mais elevado, pois o alongamento do prazo aumenta o risco de inadimplência e o volume de juros.",
          "correta": true,
          "justificativa": "Operações com prazos longos elevam o risco de crédito e o custo total, mesmo com parcelas menores. O alongamento do contrato faz com que os juros incidam sobre um período maior, ampliando o CET (Custo Efetivo Total)."
        },
        {
          "texto": "do banco é mais vantajoso, já que as parcelas menores diluem o custo total e reduzem o impacto do financiamento sobre a renda.",
          "correta": false,
          "justificativa": "Embora o valor das parcelas do CDC do banco pareça mais acessível, o custo total é maior, pois os juros compostos incidem por mais tempo. Essa percepção é comum, mas incorreta."
        },
        {
          "texto": "da loja mantém custo semelhante ao do banco, pois a destinação e o convênio não interferem significativamente nas taxas.",
          "correta": false,
          "justificativa": "O CDC da loja tem características próprias: convênio e destinação específica costumam reduzir o risco e a taxa. Portanto, a taxa tende a ser menor, não igual à do banco."
        },
        {
          "texto": "da loja tende a ser mais caro, porque o débito automático limita a flexibilidade de pagamento e eleva o risco de inadimplência.",
          "correta": false,
          "justificativa": "O débito automático é visto como fator que reduz o risco de inadimplência, e não o contrário. Logo, essa justificativa inverte a lógica do comportamento de risco e da precificação."
        }
      ],
      "gabaritoComentado": "Operações com prazos longos elevam o risco de crédito e o custo total, mesmo com parcelas menores. O alongamento do contrato faz com que os juros incidam sobre um período maior, ampliando o CET (Custo Efetivo Total)."
    },
    {
      "id": "CESG_000299",
      "oficial": true,
      "codigoItem": "000299",
      "topicoPD": "Produtos de Financiamento.",
      "codigoPD": "2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Em um atendimento presencial, Marcos comentou com Camila, profissional CPA, que precisou usar o cheque especial por 5 dias, e que utilizou o limite, no valor de R$ 800, para cobrir despesas até o recebimento do salário. Ao consultar o extrato, notou que o valor cobrado era maior do que imaginava. Ele acreditava que pagaria apenas os juros sobre os R$ 800 pelo período utilizado, mas percebeu um valor adicional. Pediu, então, que Camila explicasse por que o valor cobrado não correspondia aos juros publicados pelo banco.",
      "enunciado": "Camila esclareceu que",
      "alternativas": [
        {
          "texto": "os juros são calculados por dia sobre os valores realmente usados e o IOF inclui um percentual fixo e outro diário, cobrado pelo tempo de utilização do limite.",
          "correta": true,
          "justificativa": "O cheque especial aplica juros diários sobre o valor utilizado e não sobre o limite. Além disso, o IOF é composto por uma alíquota fixa na liberação do crédito e outra diária, acumulada enquanto o saldo permanece negativo. Isso explica por que Marcos pagou mais do que apenas os juros divulgados."
        },
        {
          "texto": "os juros incidem sobre o saldo devedor diário, mas o IOF é recolhido integralmente no primeiro dia de uso, sem componente adicional nos dias seguintes.",
          "correta": false,
          "justificativa": "A menção a juros sobre saldo diário é verossímil, porém incorreta quanto ao IOF: além da parcela fixa na abertura/uso, há parcela diária enquanto o saldo permanecer negativo. Dizer que todo o IOF ocorre no primeiro dia ignora a incidência ao longo dos dias de uso, subestimando o custo total."
        },
        {
          "texto": "os juros são apropriados dia a dia e debitados no ciclo do extrato, enquanto o IOF é cobrado na ativação do limite, sem incidência diária adicional.",
          "correta": false,
          "justificativa": "A redação aproxima a prática ao mencionar a apropriação diária, mas erra ao afirmar que o IOF ocorre apenas na ativação, sem parte diária. No cheque especial, além da parcela fixa na abertura/uso, há um componente diário de IOF enquanto o saldo ficar negativo, o que aumenta o custo mesmo por poucos dias."
        },
        {
          "texto": "o valor  tem como base o saldo negativo médio do período e o IOF  sobre a variação diária do uso, sem componente fixo na contratação.",
          "correta": false,
          "justificativa": "Falar em “saldo médio” torna a alternativa verossímil, mas incorreta: os juros incidem sobre o saldo diário efetivamente utilizado, não sobre uma média aritmética simplificada. Além disso, o IOF não incide apenas sobre variação; há parcela fixa na contratação/uso e parcela diária enquanto durar o débito."
        }
      ],
      "gabaritoComentado": "O cheque especial aplica juros diários sobre o valor utilizado e não sobre o limite. Além disso, o IOF é composto por uma alíquota fixa na liberação do crédito e outra diária, acumulada enquanto o saldo permanece negativo. Isso explica por que Marcos pagou mais do que apenas os juros divulgados."
    },
    {
      "id": "CESG_000300",
      "oficial": true,
      "codigoItem": "000300",
      "topicoPD": "Produtos de Financiamento.",
      "codigoPD": "2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Um cliente possui fatura de cartão de crédito de R$ 8.000 e paga apenas R$ 2.000 no vencimento. O saldo restante de R$ 6.000 entra no crédito rotativo à taxa de 12% ao mês e, após 30 dias, é automaticamente refinanciado em 6 parcelas mensais fixas a 6% ao mês.\nDurante o atendimento, o cliente pergunta ao analista com certificação ANBIMA quanto desembolsará ao todo até quitar completamente o saldo, considerando o processo padrão de refinanciamento do cartão de crédito.",
      "enunciado": "Nesse caso, o valor total a ser pago pelo cliente ao final da operação é",
      "alternativas": [
        {
          "texto": "R$ 10.199,58",
          "correta": true,
          "justificativa": "Justificativa Gabarito:\nFV = PV × (1 + i)^n = 6.000 × (1 + 0,12)^1 = 6.720,00\nPMT = PV × [ i / (1 − (1 + i)^−n ) ] = 6.720 × [0,06 / (1 − 1,06^−6)] = 1.366,60\nTotal das parcelas = 1.366,60 × 6 = 8.199,58\nDesembolso total = 2.000,00 + 8.199,58 = 10.199,58"
        },
        {
          "texto": "R$ 9.321,05",
          "correta": false,
          "justificativa": "Ignora o rotativo e parcela 6.000 a 6% (somando os R$ 2.000 já pagos):\nPMT = 6.000 × [0,06/(1−1,06^−6)] = 1.220,18 → 2.000 + 1.220,18×6 = 9.321,05."
        },
        {
          "texto": "R$ 10.880,00",
          "correta": false,
          "justificativa": "Usa juros simples (12% + 6%×6) sobre 6.000:\n6.000 × 1,48 = 8.880 → 8.880 + 2.000 = 10.880,00."
        },
        {
          "texto": "R$ 8.720,00",
          "correta": false,
          "justificativa": "Divide 6.720 por 6 sem juros (erro clássico de “parcelamento sem taxa”) e soma o pagamento inicial:\n6.720/6 = 1.120,00 → 1.120 × 6 = 6.720 → 6.720 + 2.000 = 8.720,00."
        }
      ],
      "gabaritoComentado": "Justificativa Gabarito:\nFV = PV × (1 + i)^n = 6.000 × (1 + 0,12)^1 = 6.720,00\nPMT = PV × [ i / (1 − (1 + i)^−n ) ] = 6.720 × [0,06 / (1 − 1,06^−6)] = 1.366,60\nTotal das parcelas = 1.366,60 × 6 = 8.199,58\nDesembolso total = 2.000,00 + 8.199,58 = 10.199,58"
    },
    {
      "id": "CESG_000301",
      "oficial": true,
      "codigoItem": "000301",
      "topicoPD": "Produtos de Financiamento.",
      "codigoPD": "2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Um cliente adquiriu um veículo financiado por meio de CDC. O valor do carro foi de R$ 90.000, sendo 80% financiado. O contrato estabelece taxa de 1,5% ao mês, prazo de 36 meses e sistema Price. Na contratação, foi incluída uma tarifa de cadastro de R$ 1.200, incorporada ao saldo devedor. Após receber o carnê, o cliente percebeu que a prestação mensal ficou acima do valor que havia projetado e pede ao profissional certificado pela ANBIMA o valor correto da prestação pelas condições pactuadas.\nFórmulas:\nFV = PV × (1 + i)^n\nPMT = PV × [ i / (1 − (1 + i)^−n ) ]",
      "enunciado": "O valor correto da prestação mensal do financiamento descrito é",
      "alternativas": [
        {
          "texto": "R$ 2.646,36",
          "correta": true,
          "justificativa": "Saldo financiado = 72.000 + 1.200 = 73.200. Aplicando Price (i = 1,5% a.m., n = 36), obtém-se ≈ R$ 2.646,36."
        },
        {
          "texto": "R$ 2.602,97",
          "correta": false,
          "justificativa": "Usa apenas 72.000 como PV, ignorando a tarifa embutida. Cálculo gera  R$ 2.602,97, abaixo da prestação real."
        },
        {
          "texto": "R$ 3.131,33",
          "correta": false,
          "justificativa": "Aplica juros simples: PV/n + i·PV. Para 73.200  = R$ 3.131,33, valor inflado por método inadequado."
        },
        {
          "texto": "R$ 2.703,54",
          "correta": false,
          "justificativa": "Considera PV correto, mas prazo de 35 meses. Price gera = R$ 2.703,54, erro por prazo incorreto."
        }
      ],
      "gabaritoComentado": "Saldo financiado = 72.000 + 1.200 = 73.200. Aplicando Price (i = 1,5% a.m., n = 36), obtém-se ≈ R$ 2.646,36."
    },
    {
      "id": "CESG_000302",
      "oficial": true,
      "codigoItem": "000302",
      "topicoPD": "Produtos de Financiamento.",
      "codigoPD": "2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Marina, profissional certificada pela ANBIMA, atende o cliente Fábio, empresário do setor de logística, que pretende renovar parte de sua frota de caminhões para contratos de transporte com duração estimada entre 3 e 4 anos. Fábio não deseja imobilizar capital; prefere flexibilidade para a troca de veículos e não considera estratégico manter os caminhões no balanço da empresa após esse período.\nEle recebeu duas propostas:\n(i) um financiamento tradicional para aquisição dos caminhões, com parcelas mensais e transferência da propriedade ao final do pagamento;\n(ii) um leasing operacional, no qual pagaria prestações mensais pelo uso dos veículos, com possibilidade de devolução ao término do contrato.\nFábio pede auxílio à Marina na análise das alternativas, com base na sua necessidade operacional, já que ambas envolvem pagamentos mensais semelhantes.",
      "enunciado": "Marina analisa a situação de Fábio e esclarece que",
      "alternativas": [
        {
          "texto": "o leasing operacional é adequado, pois permite o uso dos caminhões sem aquisição da propriedade, atendendo à necessidade de flexibilidade, sem imobilizar capital.",
          "correta": true,
          "justificativa": "O leasing operacional é mais coerente com a realidade de Fábio, pois permite o uso dos caminhões sem imobilizar capital nem incorporar o bem ao ativo, oferecendo flexibilidade para renovação da frota ao fim do contrato."
        },
        {
          "texto": "o financiamento é mais indicado, pois garante ao cliente a posse definitiva do bem, independentemente de sua intenção de renovação frequente da frota.",
          "correta": false,
          "justificativa": "O financiamento prioriza a aquisição definitiva do bem, com a imobilização de recursos e manutenção do ativo no balanço, o que não atende à estratégia de flexibilidade e renovação periódica desejada pelo cliente."
        },
        {
          "texto": "o leasing operacional é pouco adequado, pois não permite a utilização do bem para contratos de médio prazo, restringindo-se a operações de prazo mais curto.",
          "correta": false,
          "justificativa": "O leasing operacional não se restringe a prazos curtos e pode ser utilizado em contratos de médio prazo, desde que alinhado à operação, o que torna incorreta a limitação apresentada na alternativa."
        },
        {
          "texto": "o financiamento e o leasing atendem de forma equivalente às demandas de Fábio, pois resultam na incorporação dos caminhões ao ativo da empresa ao final do contrato.",
          "correta": false,
          "justificativa": "As modalidades não são equivalentes, pois no leasing operacional, não há incorporação do bem ao ativo ao final, diferentemente do financiamento, que resulta na propriedade dos caminhões."
        }
      ],
      "gabaritoComentado": "O leasing operacional é mais coerente com a realidade de Fábio, pois permite o uso dos caminhões sem imobilizar capital nem incorporar o bem ao ativo, oferecendo flexibilidade para renovação da frota ao fim do contrato."
    },
    {
      "id": "CESG_000303",
      "oficial": true,
      "codigoItem": "000303",
      "topicoPD": "Produtos de Financiamento.",
      "codigoPD": "2.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Carlos, profissional CPA, está auxiliando Joana, aposentada que deseja quitar dívidas atrasadas e reorganizar seu orçamento. Ela identificou disponíveis no seu internet banking: um empréstimo pessoal tradicional de prazo curto; um financiamento de veículo; e um crédito consignado, com parcelas descontadas diretamente do benefício do INSS. Joana perguntou qual dessas propostas oferecia condições mais adequadas em termos de juros e prazo, considerando seu perfil de aposentada.",
      "enunciado": "Carlos respondeu que, para o perfil da cliente, a proposta mais adequada e que atende às condições que ela ponderou seria",
      "alternativas": [
        {
          "texto": "o crédito consignado, pois o desconto em folha reduz risco para o banco, permitindo juros menores e prazos mais longos.",
          "correta": true,
          "justificativa": "O crédito consignado, com desconto em folha, reduz significativamente o risco de inadimplência para o banco. Isso permite a oferta de juros menores e prazos mais longos, especialmente vantajosos para aposentados e pensionistas."
        },
        {
          "texto": "o empréstimo pessoal, pois garante uso livre dos recursos, com taxa reduzida em razão da ausência de garantias.",
          "correta": false,
          "justificativa": "O empréstimo pessoal tem uso livre dos recursos, mas a ausência de garantias aumenta o risco da operação. Por isso, costuma ter juros mais elevados e prazos mais curtos, sendo menos vantajoso que o consignado."
        },
        {
          "texto": "o financiamento do veículo, pois é direcionado a um bem específico e, por isso, tende a apresentar juros inferiores aos do consignado.",
          "correta": false,
          "justificativa": "O financiamento de veículo é vinculado a um bem específico, o que reduz risco em comparação ao empréstimo pessoal, mas não é adequado ao caso da cliente. Inclusive, seus juros e prazos não costumam ser mais favoráveis que os do consignado, especialmente no caso de aposentados."
        },
        {
          "texto": "o financiamento do veículo, pois garante a posse imediata do bem e oferece prazos de pagamento mais extensos que o empréstimo pessoal.",
          "correta": false,
          "justificativa": "O financiamento de veículo realmente assegura a posse imediata do bem e pode ter prazos mais longos que o empréstimo pessoal, mas ainda apresenta custos mais altos que o consignado. Assim, não é a melhor alternativa em termos de juros e prazo para o perfil apresentado. Não é o mais adequado à cliente."
        }
      ],
      "gabaritoComentado": "O crédito consignado, com desconto em folha, reduz significativamente o risco de inadimplência para o banco. Isso permite a oferta de juros menores e prazos mais longos, especialmente vantajosos para aposentados e pensionistas."
    },
    {
      "id": "CESG_000304",
      "oficial": true,
      "codigoItem": "000304",
      "topicoPD": "Conta internacional.",
      "codigoPD": "2.4.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Um investidor brasileiro, interessado em diversificar sua carteira, manifesta preocupação com a complexidade do acesso a ativos internacionais. Ele acredita que esse processo envolve barreiras operacionais e regulatórias, sem clareza sobre as soluções atualmente disponíveis no mercado.",
      "enunciado": "Neste caso, a compreensão da regulamentação permite ao profissional explicar que",
      "alternativas": [
        {
          "texto": "plataformas digitais permitem abrir contas no exterior, com integração cambial e fiscal, ampliando o acesso a diversos perfis de investidores.",
          "correta": true,
          "justificativa": "As plataformas digitais integraram câmbio e aspectos fiscais, democratizando a abertura de contas internacionais no Brasil."
        },
        {
          "texto": "a abertura de conta internacional depende de relacionamento direto com bancos estrangeiros, sem soluções locais que simplifiquem o processo.",
          "correta": false,
          "justificativa": "Já existem instituições locais que viabilizam a abertura de contas sem necessidade de bancos estrangeiros tradicionais."
        },
        {
          "texto": "as remessas para investimentos no exterior requerem autorização formal do Banco Central a cada operação, mantendo etapas burocráticas obrigatórias.",
          "correta": false,
          "justificativa": "As operações cambiais seguem normas gerais, mas não exigem autorização prévia do Bacen a cada envio.."
        },
        {
          "texto": "o acesso a ativos internacionais é restrito a fundos exclusivos de maior porte, preservando barreiras relevantes para investidores de menor patrimônio.",
          "correta": false,
          "justificativa": "O acesso deixou de ser restrito a fundos exclusivos, já que novas plataformas oferecem alternativas a diversos perfis de investidores."
        }
      ],
      "gabaritoComentado": "As plataformas digitais integraram câmbio e aspectos fiscais, democratizando a abertura de contas internacionais no Brasil."
    },
    {
      "id": "CESG_000305",
      "oficial": true,
      "codigoItem": "000305",
      "topicoPD": "Conta internacional.",
      "codigoPD": "2.4.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Um investidor de perfil moderado está em planejamento de viagem internacional e precisa enviar recursos ao filho que estuda no exterior. Ele relata a um profissional certificado CPA ter recebido informações divergentes sobre a cobrança de IOF: em uma agência, disseram que transferências entre contas internacionais seriam sempre isentas; em um fórum, leu que remessas familiares possuem tributação específica e, em uma live, ouviu que investimentos em ações no exterior só pagam IOF sobre lucros. Como profissional certificado pela ANBIMA, sua função é esclarecer ao cliente como o IOF incide em cada tipo de operação internacional, de acordo com a regulamentação vigente.",
      "enunciado": "Para atender corretamente ao cliente, o profissional deveria compreender bem a legislação e explicar que",
      "alternativas": [
        {
          "texto": "o IOF incide de forma diferenciada nas operações internacionais,  depende da finalidade e do enquadramento conta cambial, tendo alíquotas diferentes e que variam no tempo, de acordo com a regulamentação vigente.",
          "correta": true,
          "justificativa": "o IOF é um tributo que incide de forma diferenciada conforme a finalidade da operação o enquadramento cambial e as normas vigentes algumas remessas podem ter alíquota zero enquanto outros estão sujeitas a incidência positiva sendo importante destacar que essas alíquotas não são fixas e podem variar ao longo do tempo"
        },
        {
          "texto": "todas as transferências internacionais são isentas de IOF, independentemente do tipo de operação realizada, da finalidade declarada pelo remetente ou da origem dos recursos, não havendo exceções previstas na regulamentação.",
          "correta": false,
          "justificativa": "Nem todas as transferências internacionais são isentas a incidência do IOF depende da natureza da operação e da regulamentação aplicável."
        },
        {
          "texto": "As remessas ao exterior possuem a mesma tributação em todas as situações, sem variação de alíquota, conforme o propósito da operação e o enquadramento cambial ou ainda a natureza dos recursos enviados.",
          "correta": false,
          "justificativa": "a tributação não é uniforme a alíquota e a incidência variam conforme o objetivo da remessa e o enquadramento definido pelo regulador"
        },
        {
          "texto": "os investimentos no exterior somente sofrem incidência de IOF quando da apuração de lucro nas operações, não ocorrendo qualquer tributação no momento da remessa inicial dos recursos ao exterior.",
          "correta": false,
          "justificativa": "o IOF não se limita a apuração de lucros pode incidir já no envio de recursos conforme a modalidade da operação"
        }
      ],
      "gabaritoComentado": "o IOF é um tributo que incide de forma diferenciada conforme a finalidade da operação o enquadramento cambial e as normas vigentes algumas remessas podem ter alíquota zero enquanto outros estão sujeitas a incidência positiva sendo importante destacar que essas alíquotas não são fixas e podem variar ao longo do tempo"
    },
    {
      "id": "CESG_000306",
      "oficial": true,
      "codigoItem": "000306",
      "topicoPD": "Serviços bancários.",
      "codigoPD": "2.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Durante um atendimento financeiro, o profissional certificado CPA atende a um cliente que relata ter sido surpreendido por cobranças em sua conta-corrente, referentes a extratos impressos e a transferências entre contas da mesma titularidade. Ele afirma não ter recebido informações prévias sobre esses valores e acredita que, por se tratar de operações rotineiras, todas deveriam ser isentas de custos adicionais. Além disso, menciona ter contratado um pacote padronizado de serviços sem clareza sobre o que está incluído.  Percebendo a dúvida, o profissional busca orientar o cliente com base nas regras relativas à cobrança de tarifas e à oferta de serviços bancários.",
      "enunciado": "Nesse cenário, o profissional CPA deve explicar que, de acordo com as normas que regem o sistema financeiro,",
      "alternativas": [
        {
          "texto": "alguns serviços básicos não geram cobrança e outros podem ser tarifados, desde que claramente informado no pacote contratado.",
          "correta": true,
          "justificativa": "A legislação prevê serviços essenciais isentos de tarifa, permite a cobrança dos demais com transparência e padroniza pacotes com limites mensais."
        },
        {
          "texto": "tarifas, inclusive de serviços essenciais, podem ser cobradas mediante o uso dos serviços, desde que previstas no pacote contratado pelo cliente.",
          "correta": false,
          "justificativa": "A oferta de pacotes a baixo custo não reduz a obrigatoriedade de manter a gratuidade dos serviços considerados essenciais nos normativos do Banco Central."
        },
        {
          "texto": "a adesão a pacotes padronizados, e de baixo custo para o cliente, substitui a oferta obrigatória de serviços essenciais gratuitos pela instituição.",
          "correta": false,
          "justificativa": "A contratação de pacotes não elimina o direito aos serviços essenciais gratuitos, que permanecem obrigatórios."
        },
        {
          "texto": "a modalidade mais frequente é a cobrança de tarifas conforme autorização do cliente a cada operação, sem previsão de pacotes padronizados.",
          "correta": false,
          "justificativa": "A norma não exige autorização individual para cada operação e prevê pacotes de serviços aplicáveis às contas de depósito."
        }
      ],
      "gabaritoComentado": "A legislação prevê serviços essenciais isentos de tarifa, permite a cobrança dos demais com transparência e padroniza pacotes com limites mensais."
    },
    {
      "id": "CESG_000307",
      "oficial": true,
      "codigoItem": "000307",
      "topicoPD": "Serviços bancários.",
      "codigoPD": "2.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Em um atendimento, Frederico, profissional CPA, foi procurado por Eduardo, gerente de uma empresa de tecnologia que realiza pagamentos frequentes a prestadores de serviço no exterior e recebe parte das receitas em dólar. Ele demonstrou interesse em abrir uma conta internacional para facilitar as operações. Frederico explicou que esse tipo de conta oferece várias funcionalidades, mas ressaltou que as condições variam conforme o país de abertura.",
      "enunciado": "Frederico explicou que, entre as funcionalidades, esta conta",
      "alternativas": [
        {
          "texto": "combina saldo multimoeda, cartão para uso no exterior e, em alguns casos, dados bancários locais que facilitam recebimentos por redes domésticas.",
          "correta": true,
          "justificativa": "As contas internacionais oferecem saldo multimoeda, cartão para uso no exterior e, em alguns casos, dados bancários locais (ex.: IBAN na Europa, ABA nos EUA) que viabilizam transferências por redes domésticas. As operações seguem a regulamentação cambial, com incidência de IOF e spread na conversão, além de exigências de compliance e de reporte fiscal."
        },
        {
          "texto": "permite reduzir custos em compras no exterior, mas não elimina IOF nem spread cambial, que seguem aplicáveis conforme a operação realizada hoje.",
          "correta": false,
          "justificativa": "O IOF e o spread cambial continuam válidos nas operações de conversão. As contas internacionais podem reduzir custos, mas não eliminam tributos nem variações cambiais."
        },
        {
          "texto": "garante acesso automático a IBAN ou número bancário local para as moedas, com transferências internacionais padronizadas e isentas de tarifas.",
          "correta": false,
          "justificativa": "Nem todas as instituições oferecem IBAN ou ABA pessoais. A gratuidade e a isenção de tarifas variam conforme país, provedor e tipo de operação, não sendo padronizadas."
        },
        {
          "texto": "opera com ativos digitais, permitindo pagamentos internacionais sem intermediação bancária tradicional e sem necessidade de controles fiscais.",
          "correta": false,
          "justificativa": "As contas internacionais não se baseiam em criptoativos e continuam sujeitas às regras de KYC (conheça seu cliente) e de combate à lavagem de dinheiro. O uso de cripto é eventual e regulado, sem dispensa de comprovação de origem e de obrigações fiscais."
        }
      ],
      "gabaritoComentado": "As contas internacionais oferecem saldo multimoeda, cartão para uso no exterior e, em alguns casos, dados bancários locais (ex.: IBAN na Europa, ABA nos EUA) que viabilizam transferências por redes domésticas. As operações seguem a regulamentação cambial, com incidência de IOF e spread na conversão, além de exigências de compliance e de reporte fiscal."
    },
    {
      "id": "CESG_000308",
      "oficial": true,
      "codigoItem": "000308",
      "topicoPD": "Serviços bancários.",
      "codigoPD": "2.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "No atendimento de rotina, Helena mostra a Rafael, profissional certificado ANBIMA, duas notificações recebidas: (i) o Banco A reduziu o limite do cheque especial; (ii) o Banco B informou que, após elevação do compulsório sobre depósitos à vista, anunciada pelo Banco Central, parte dos recursos ficará imobilizada, podendo diminuir a oferta de crédito. Helena pergunta por que o limite do cheque especial caiu e o que, na prática, explica essa restrição de crédito.",
      "enunciado": "A explicação de Rafael é que a decisão do Banco Central",
      "alternativas": [
        {
          "texto": "retira dinheiro de circulação, diminuindo o montante que os bancos têm para emprestar e, consequentemente, levando a uma política de crédito mais restritiva.",
          "correta": true,
          "justificativa": "Elevação do compulsório imobiliza parte dos depósitos no Banco Central, reduz a liquidez dos bancos e, portanto, encolhe a base para concessão de crédito. Com menos recursos livres, instituições ajustam limites (como o cheque especial) e restringem oferta — exatamente o efeito observado por Helena."
        },
        {
          "texto": "estimula os bancos a remunerarem depósitos à vista, compensando os clientes; assim, a redução dos limites ocorre por decisão comercial, sem relação com liquidez.",
          "correta": false,
          "justificativa": "Depósitos à vista não são remunerados ao correntista por causa do compulsório; e aumento do compulsório não cria obrigação de pagar juros na conta. A queda de limites tem relação direta com a liquidez menor, não é “apenas” decisão comercial."
        },
        {
          "texto": "promove ajustes operacionais e, uma vez cumpridas as exigências, os bancos podem emprestar o restante sem novas restrições, mantendo limites inalterados.",
          "correta": false,
          "justificativa": "Mesmo “cumprido” o compulsório, permanecem outras restrições (capital regulatório, liquidez, concentração de risco). Logo, não é verdade que os bancos possam emprestar “o restante” sem novas restrições nem manter limites inalterados quando a liquidez cai."
        },
        {
          "texto": "visa resguardar saldos dos correntistas, atuando como proteção direta, e eventuais cortes de limites não se relacionam diretamente às mudanças no compulsório.",
          "correta": false,
          "justificativa": "Confunde compulsório com mecanismo de garantia de depósitos (p. ex., FGC). O compulsório não protege diretamente saldos do cliente; é instrumento monetário/macroprudencial que afeta a liquidez e, por consequência, limites e oferta de crédito."
        }
      ],
      "gabaritoComentado": "Elevação do compulsório imobiliza parte dos depósitos no Banco Central, reduz a liquidez dos bancos e, portanto, encolhe a base para concessão de crédito. Com menos recursos livres, instituições ajustam limites (como o cheque especial) e restringem oferta — exatamente o efeito observado por Helena."
    },
    {
      "id": "CESG_000309",
      "oficial": true,
      "codigoItem": "000309",
      "topicoPD": "Serviços bancários.",
      "codigoPD": "2.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Fácil",
      "contexto": "Felipe, profissional certificado ANBIMA, atende Mariana, dona de uma papelaria que também vende on-line. Ela relata um problema de caixa: em um pedido recente, o cliente pagou por um título de cobrança e o dinheiro não entrou no mesmo dia, ao contrário do que costuma ocorrer quando o pagamento é feito on-line. A diferença dificultou a conciliação das vendas. Mariana quer entender o que pode explicar esse atraso específico para ajustar o controle de recebimentos.",
      "enunciado": "A explicação de Felipe sobre a conciliação bancária é que",
      "alternativas": [
        {
          "texto": "a diferença decorre do horário do pagamento do título; se antes das 13:30, o crédito entra no mesmo dia, se depois disso, entra no próximo dia útil, afetando o planejamento do caixa e a conciliação.",
          "correta": true,
          "justificativa": "O pagamento por título depende de compensação; o prazo varia pelo horário do pagamento, e o crédito costuma entrar em D+0/D+1 útil, o que impacta o caixa e exige conciliação por data."
        },
        {
          "texto": "a diferença decorre de rendimento automático do saldo da loja; os juros recebidos explicam a entrada do valor, independentemente do momento e do canal de pagamento.",
          "correta": false,
          "justificativa": "Não há rendimento automático sobre saldo em conta que explique o atraso. A diferença de prazo decorre da compensação do título, não de juros que “substituiriam” a antecipação."
        },
        {
          "texto": "o crédito deveria ser no dia do pagamento; o atraso observado seria de lançamentos internos do comércio, sem relação com o fluxo e a compensação entre instituições.",
          "correta": false,
          "justificativa": "Crédito imediato não descreve o fluxo do título; isso confundiria com meios de liquidação em tempo real. O atraso não é só lançamento interno, mas efeito do processo interbancário."
        },
        {
          "texto": "o atraso decorre do prazo interno do banco do recebedor para liberar valores; como a liquidação ocorre no ato em qualquer canal, a conciliação depende dessa liberação.",
          "correta": false,
          "justificativa": "Reduzir a questão ao “prazo interno do banco” ignora a compensação e a dependência de canal, dia e horário. A liquidação nem sempre ocorre no ato, por isso a conciliação não depende apenas da liberação do recebedor."
        }
      ],
      "gabaritoComentado": "O pagamento por título depende de compensação; o prazo varia pelo horário do pagamento, e o crédito costuma entrar em D+0/D+1 útil, o que impacta o caixa e exige conciliação por data."
    },
    {
      "id": "CESG_000310",
      "oficial": true,
      "codigoItem": "000310",
      "topicoPD": "Seguros de vida e patrimoniais",
      "codigoPD": "2.5",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Após um período de fortes chuvas e instabilidade na rede elétrica, um cliente de longa data da instituição financeira entra em contato relatando que teve vários equipamentos eletrônicos danificados em casa. Ele menciona possuir um seguro residencial ativo, contratado junto à seguradora parceira do banco, e manifesta surpresa ao ser informado de que o sinistro não seria coberto. Durante o atendimento, o profissional CPA analisa o histórico da apólice e identifica que o cliente contratou apenas as coberturas básicas previstas no plano padrão, sem incluir proteções complementares. Diante da insatisfação, o profissional busca esclarecer de forma didática como funcionam as coberturas e as opções disponíveis para evitar situações semelhantes na renovação.",
      "enunciado": "Nesse cenário, o profissional CPA deve explicar que",
      "alternativas": [
        {
          "texto": "a cobertura básica inclui incêndio, raio e explosão, enquanto danos elétricos exigem uma cobertura adicional.",
          "correta": true,
          "justificativa": "A cobertura básica do seguro residencial inclui incêndio, raio e explosão. Danos elétricos e outros riscos devem ser contratados como coberturas adicionais específicas."
        },
        {
          "texto": "a cobertura básica contempla sobrecarga elétrica em casos que não sejam derivados de eventos climáticos.",
          "correta": false,
          "justificativa": "A cobertura básica não contempla sobrecarga elétrica; cobre apenas incêndio e explosão, sendo necessário contratar cláusula adicional para danos elétricos."
        },
        {
          "texto": "a cobertura de danos elétricos é concedida automaticamente para equipamentos com garantia de fábrica.",
          "correta": false,
          "justificativa": "A garantia de fábrica não substitui cobertura securitária; danos elétricos só são indenizáveis se houver contratação específica."
        },
        {
          "texto": "o seguro residencial padrão cobre equipamentos eletrônicos, independentemente da causa do dano.",
          "correta": false,
          "justificativa": "O seguro residencial não cobre automaticamente todos os equipamentos; somente os eventos previstos na apólice e dentro das coberturas contratadas são indenizáveis."
        }
      ],
      "gabaritoComentado": "A cobertura básica do seguro residencial inclui incêndio, raio e explosão. Danos elétricos e outros riscos devem ser contratados como coberturas adicionais específicas."
    },
    {
      "id": "CESG_000311",
      "oficial": true,
      "codigoItem": "000311",
      "topicoPD": "Seguros de vida e patrimoniais",
      "codigoPD": "2.5",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Durante uma renegociação de crédito consignado, uma cliente demonstra preocupação com os compromissos financeiros assumidos e questiona se o seguro prestamista contratado no empréstimo anterior ainda está em vigor. O profissional CPA analisa o histórico e observa que o refinanciamento gerou um novo contrato, com condições, valores e prazos distintos do anterior. A apólice anterior consta vinculada exclusivamente ao contrato original, emitida em função daquele saldo devedor e prazo.",
      "enunciado": "Nesse cenário, o profissional CPA deve explicar que",
      "alternativas": [
        {
          "texto": "a apólice anterior deixa de vigorar, e exige-se nova cobertura prestamista vinculada ao credor.",
          "correta": true,
          "justificativa": "O seguro é vinculado ao contrato que o originou e com o refinanciamento, há novo risco e saldo, exigindo nova apólice específica com o credor como beneficiário."
        },
        {
          "texto": "a apólice original permanece válida até o término do prazo do novo empréstimo.",
          "correta": false,
          "justificativa": "A apólice não se estende automaticamente ao novo contrato, pois o seguro anterior cessa com o fim do vínculo original que deu origem à cobertura."
        },
        {
          "texto": "o beneficiário passa a ser a instituição bancária independentemente de nova apólice.",
          "correta": false,
          "justificativa": "O beneficiário é definido na apólice vigente e não por vínculo automático com a instituição; é necessária nova emissão para o refinanciamento."
        },
        {
          "texto": "o seguro prestamista cobre as dívidas do cliente com a instituição.",
          "correta": false,
          "justificativa": "O seguro prestamista cobre apenas o saldo do contrato específico segurado, não se aplicando de forma ampla a outras dívidas do cliente."
        }
      ],
      "gabaritoComentado": "O seguro é vinculado ao contrato que o originou e com o refinanciamento, há novo risco e saldo, exigindo nova apólice específica com o credor como beneficiário."
    },
    {
      "id": "M2_Q27_INEDITA",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "2.1.1.1.2",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Roberto, 40 anos, procura sua gerente certificada CPA com três objetivos distintos no Tesouro Direto: (1) montar uma reserva de emergência que possa ser resgatada a qualquer momento sem risco de perda por marcação a mercado; (2) travar uma taxa fixa aproveitando que o mercado projeta forte queda da Selic nos próximos dois anos; e (3) acumular recursos corrigidos pela inflação para receber uma renda mensal complementar durante 20 anos a partir de sua aposentadoria em 2045.",
      "enunciado": "Para atender corretamente aos objetivos (1), (2) e (3) de Roberto, os títulos públicos mais indicados são, respectivamente:",
      "alternativas": [
        {
          "texto": "Tesouro Selic (LFT), Tesouro Prefixado (LTN) e Tesouro Renda+ (NTN-B1).",
          "correta": true
        },
        {
          "texto": "Tesouro Prefixado (LTN), Tesouro Selic (LFT) e Tesouro Educa+.",
          "correta": false
        },
        {
          "texto": "Tesouro Selic (LFT), Tesouro IPCA+ (NTN-B Principal) e Tesouro Educa+.",
          "correta": false
        },
        {
          "texto": "Tesouro IPCA+ com Juros Semestrais (NTN-B), Tesouro Prefixado (LTN) e Tesouro Renda+ (NTN-B1).",
          "correta": false
        }
      ],
      "gabaritoComentado": "Questão Inédita Padrão ANBIMA: (1) Para reserva de emergência sem risco de perda na marcação a mercado, o título correto é o Tesouro Selic (LFT), que é 100% pós-fixado. (2) Para ganhar com a queda futura das taxas de juros travando uma taxa fixa hoje, indica-se o Tesouro Prefixado (LTN). (3) Para receber uma renda mensal corrigida pelo IPCA pelo prazo de 20 anos (240 parcelas mensais) na aposentadoria, o título específico é o Tesouro Renda+ (NTN-B1) — lembrando que o Tesouro Educa+ paga por apenas 5 anos (60 parcelas)."
    },
    {
      "id": "M2_Q28_INEDITA",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "2.1.1.1.3",
      "nivelCognitivo": "Análise",
      "dificuldade": "Médio",
      "contexto": "Fernanda, investidora pessoa física com perfil moderado, possui R$ 200 mil aplicados em uma LCI do Banco Alfa e R$ 200 mil aplicados em um CRA emitido por uma companhia securitizadora e distribuído pela Corretora do mesmo Conglomerado Alfa. Ela questiona seu especialista CPA sobre a incidência de Imposto de Renda e a proteção do Fundo Garantidor de Créditos (FGC) caso tanto o Banco Alfa quanto a empresa devedora do agronegócio entrem em insolvência.",
      "enunciado": "O profissional CPA deve esclarecer que, para Fernanda (Pessoa Física):",
      "alternativas": [
        {
          "texto": "ambos os títulos são isentos de Imposto de Renda, mas apenas a LCI conta com a cobertura do FGC até o limite regulamentar.",
          "correta": true
        },
        {
          "texto": "ambos os títulos são isentos de Imposto de Renda e somam R$ 400 mil no mesmo conglomerado, sendo cobertos até R$ 250 mil pelo FGC.",
          "correta": false
        },
        {
          "texto": "a LCI é isenta de Imposto de Renda e coberta pelo FGC, enquanto o CRA sofre tributação pela tabela regressiva e não possui FGC.",
          "correta": false
        },
        {
          "texto": "ambos os títulos contam com garantia do FGC por terem lastro nos setores imobiliário e do agronegócio, mas apenas a LCI é isenta de IR.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Questão Inédita Padrão ANBIMA: Tanto a LCI/LCA/LCD quanto o CRI/CRA e as Debêntures Incentivadas (Lei 12.431) são isentos de Imposto de Renda para Pessoa Física. Contudo, apenas os títulos de emissão bancária (como CDB, RDB, LCI, LCA e LCD) possuem cobertura do FGC (até R$ 250 mil por instituição/conglomerado). CRI, CRA e Debêntures são títulos de crédito privado securitizados/corporativos e NÃO possuem garantia do FGC."
    },
    {
      "id": "M2_Q29_INEDITA",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "2.1.1.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Lucas, investidor pessoa física, realizou duas operações no mês de outubro: (i) resgatou um CDB após 400 dias da aplicação, obtendo R$ 5.000,00 de rendimento bruto; e (ii) vendeu ações de uma companhia aberta na B3 em operações comuns (swing trade) pelo valor total de R$ 18.500,00 no mês, apurando um lucro líquido de R$ 3.200,00. Não houve outras vendas de ações no período.",
      "enunciado": "Sobre a tributação de Imposto de Renda (IR) nessas duas operações, conclui-se que:",
      "alternativas": [
        {
          "texto": "o CDB terá IR de 17,5% retido na fonte pela instituição financeira, enquanto o lucro nas ações será isento de IR por respeitar o limite mensal de vendas de até R$ 20 mil.",
          "correta": true
        },
        {
          "texto": "o CDB terá IR de 15% retido na fonte, e o lucro nas ações será tributado em 15% via DARF pago pelo investidor até o último dia útil do mês seguinte.",
          "correta": false
        },
        {
          "texto": "ambas as operações serão tributadas em 17,5% na fonte, pois o limite de isenção de R$ 20 mil aplica-se somente a dividendos e fundos imobiliários.",
          "correta": false
        },
        {
          "texto": "o CDB terá IR de 17,5% recolhido via DARF pelo investidor, e o lucro nas ações será isento de IR na fonte.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Questão Inédita Padrão ANBIMA: No CDB (Renda Fixa), após 400 dias (faixa de 361 a 720 dias), incide a alíquota de 17,5% da tabela regressiva, retida exclusivamente na fonte pela instituição pagadora (sem IOF, pois passou de 29 dias). Já nas operações comuns (swing trade) com ações por Pessoa Física, quando o valor total das alienações (vendas) no mês é igual ou inferior a R$ 20.000,00 (no caso, R$ 18.500,00), o ganho líquido é totalmente ISENTO de Imposto de Renda."
    },
    {
      "id": "M2_Q30_INEDITA",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "2.1.2.3.5.3",
      "nivelCognitivo": "Compreensão",
      "dificuldade": "Difícil",
      "contexto": "Durante uma reunião de comitê de investimentos, o gestor de uma classe de Fundo de Investimento Financeiro (FIF) de Renda Fixa Longo Prazo, destinada ao público em geral (varejo), revisa os limites regulatórios de concentração por emissor previstos no Anexo I da Resolução CVM nº 175/22 e explica aos novos analistas como ocorre a tributação semestral dos cotistas.",
      "enunciado": "De acordo com as normas vigentes, os limites máximos do patrimônio líquido para aplicação em ativos de uma mesma Instituição Financeira e de uma mesma Companhia Aberta não financeira, bem como a alíquota do come-cotas semestral desse fundo de Longo Prazo, são, respectivamente:",
      "alternativas": [
        {
          "texto": "20% para Instituição Financeira, 10% para Companhia Aberta e come-cotas de 15% em maio e novembro.",
          "correta": true
        },
        {
          "texto": "10% para Instituição Financeira, 20% para Companhia Aberta e come-cotas de 20% em maio e novembro.",
          "correta": false
        },
        {
          "texto": "20% para Instituição Financeira, 5% para Companhia Aberta e come-cotas de 15% apenas no resgate.",
          "correta": false
        },
        {
          "texto": "100% para Instituição Financeira, 10% para Companhia Aberta e come-cotas de 17,5% em maio e novembro.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Questão Inédita Padrão ANBIMA: Nos FIFs destinados ao público em geral, os limites máximos de concentração por emissor são: até 100% para a União Federal (Títulos Públicos); até 20% para Instituições Financeiras autorizadas pelo Bacen; até 10% para Companhias Abertas (S/A listadas) ou cotas de fundos; e até 5% para Pessoas Físicas ou Companhias Fechadas. Na tributação de Fundos de Longo Prazo (prazo médio da carteira superior a 365 dias), o come-cotas semestral (último dia útil de maio e novembro) incide à menor alíquota da tabela, que é de 15% (reduzindo a quantidade de cotas)."
    },
    {
      "id": "M2_Q31_INEDITA",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "2.1.4",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Mariana, investidora pessoa física, adquiriu na B3 cotas de um Fundo de Investimento Imobiliário (FII) que investe diretamente em galpões logísticos e shoppings centers. O fundo possui 15 mil cotistas e Mariana detém 0,02% do total das cotas. Após receber rendimentos mensais de aluguéis durante o ano, ela decidiu vender todas as suas cotas no mercado secundário da B3 por R$ 15.000,00, obtendo um ganho de capital (lucro na venda) de R$ 2.000,00.",
      "enunciado": "Considerando a classificação da carteira desse FII e as regras tributárias aplicáveis a Mariana, é correto afirmar que se trata de um:",
      "alternativas": [
        {
          "texto": "Fundo de Tijolo, exposto ao risco de vacância; os rendimentos mensais são isentos de IR, mas o lucro na venda das cotas é tributado em 20% via DARF.",
          "correta": true
        },
        {
          "texto": "Fundo de Papel, exposto ao risco de crédito de CRIs; tanto os rendimentos mensais quanto o lucro na venda até R$ 20 mil são isentos de IR.",
          "correta": false
        },
        {
          "texto": "Fundo de Tijolo, cujas cotas podem ser resgatadas a qualquer momento junto ao administrador com alíquota regressiva de 15% sobre o ganho.",
          "correta": false
        },
        {
          "texto": "Fundo Híbrido, com rendimentos mensais tributados em 15% na fonte e ganho de capital na venda tributado em 15% no swing trade.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Questão Inédita Padrão ANBIMA: FIIs que investem em imóveis físicos (galpões logísticos, shoppings, lajes corporativas) são classificados como Fundos de Tijolo, cujo risco principal é a vacância (imóveis desocupados) e inadimplência dos locatários. Para Pessoa Física, os rendimentos mensais distribuídos são isentos de IR (pois as cotas são negociadas exclusivamente em bolsa, o fundo cumpre o mínimo legal de cotistas e a investidora detém menos de 10% das cotas). Porém, o ganho de capital na alienação (venda) de cotas de FIIs NÃO tem isenção de R$ 20 mil e é sempre tributado à alíquota de 20% via DARF!"
    },
    {
      "id": "M2_Q32_INEDITA",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "2.1.1.4",
      "nivelCognitivo": "Compreensão",
      "dificuldade": "Médio",
      "contexto": "Um cliente conservador deseja participar da eventual valorização de um índice de ações de tecnologia dos Estados Unidos pelo prazo de 3 anos, mas afirma categoricamente ao seu especialista CPA que não aceita correr o risco de receber, no vencimento da operação, um valor nominal menor do que os R$ 100.000,00 inicialmente aplicados. O gerente apresenta a ele um Certificado de Operações Estruturadas (COE).",
      "enunciado": "Para atender à exigência do cliente e prestar informações completas sobre o produto, o profissional CPA deve ofertar um COE na modalidade:",
      "alternativas": [
        {
          "texto": "Valor Nominal Protegido, entregando previamente o Documento de Informações Essenciais (DIE) e esclarecendo que o produto é tributado pela tabela regressiva de renda fixa e não possui cobertura do FGC.",
          "correta": true
        },
        {
          "texto": "Valor Nominal Protegido, esclarecendo que o principal de R$ 100.000,00 conta com garantia do FGC por ser emitido por instituição bancária e é tributado em 15% como renda variável.",
          "correta": false
        },
        {
          "texto": "Valor Nominal em Risco, entregando o prospecto de bolsa e informando que a proteção do capital ocorre automaticamente caso o índice caia mais de 20%.",
          "correta": false
        },
        {
          "texto": "Valor Nominal Protegido, informando que a garantia de 100% do capital investido vale inclusive para resgates antecipados no mercado secundário a qualquer momento.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Questão Inédita Padrão ANBIMA: O COE possui duas modalidades: Valor Nominal Protegido (garante a devolução de 100% do principal aplicado NO VENCIMENTO da operação) e Valor Nominal em Risco (em que há possibilidade de perda até o limite do capital investido). Embora seja emitido por bancos e tributado na fonte pela Tabela Regressiva da Renda Fixa (22,5% a 15%), o COE NÃO possui garantia do FGC e exige a entrega obrigatória do DIE (Documento de Informações Essenciais) antes da aplicação."
    },
    {
      "id": "M2_Q33_INEDITA",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "2.2.3.3",
      "nivelCognitivo": "Aplicação",
      "dificuldade": "Médio",
      "contexto": "Gustavo possui um plano de previdência PGBL contratado há 3 anos no Banco X sob o regime de tributação Progressivo. Insatisfeito com a rentabilidade do fundo previdenciário, ele procura Marina, profissional certificada CPA do Banco Y, solicitando realizar a portabilidade de seus recursos para um plano VGBL do Banco Y sob o regime de tributação Regressivo, sem pagar Imposto de Renda na transferência.",
      "enunciado": "Diante da solicitação de Gustavo, Marina deve orientá-lo de que a portabilidade:",
      "alternativas": [
        {
          "texto": "pode ser feita sem incidência de IR e permite alterar o regime de Progressivo para Regressivo, mas somente para outro plano PGBL, sendo vedada a troca de PGBL para VGBL.",
          "correta": true
        },
        {
          "texto": "pode ser realizada exatamente como solicitado, migrando de PGBL para VGBL e de Progressivo para Regressivo sem cobrança de IR após a carência de 60 dias.",
          "correta": false
        },
        {
          "texto": "permite migrar de PGBL para VGBL sem incidência de IR, porém a legislação proíbe alterar o regime tributário de Progressivo para Regressivo.",
          "correta": false
        },
        {
          "texto": "exige o resgate total com retenção de 15% de IR na fonte, pois a portabilidade sem imposto só é permitida entre planos da mesma seguradora (portabilidade interna).",
          "correta": false
        }
      ],
      "gabaritoComentado": "Questão Inédita Padrão ANBIMA: Na portabilidade de previdência complementar (interna ou externa), não há incidência de IR nem reinício da contagem de prazo, mas existem duas regras pétreas: (1) NUNCA é permitido migrar entre modalidades diferentes (PGBL só porta para PGBL; VGBL só porta para VGBL); e (2) quanto ao regime tributário, é permitido migrar do Progressivo para o Regressivo, mas jamais do Regressivo para o Progressivo (caráter irretratável)."
    },
    {
      "id": "M2_Q34_INEDITA",
      "oficial": false,
      "numeroOficial": null,
      "codigoPD": "2.3.1.2",
      "nivelCognitivo": "Compreensão",
      "dificuldade": "Fácil",
      "contexto": "Durante uma consultoria de planejamento financeiro, três clientes relatam suas demandas: (Cliente 1) precisa de R$ 20.000,00 imediatamente na conta para usar livremente em diversas despesas pessoais, sem vincular a compra de nenhum bem; (Cliente 2) deseja adquirir um caminhão imediatamente para sua frota, dando o próprio veículo em alienação fiduciária ao banco; e (Cliente 3) não tem pressa e deseja planejar a troca de seu imóvel nos próximos anos, sem pagar juros, participando de um grupo fechado com sorteios e lances mensais.",
      "enunciado": "As modalidades que atendem corretamente às demandas dos Clientes 1, 2 e 3 são, respectivamente:",
      "alternativas": [
        {
          "texto": "Empréstimo, Financiamento e Consórcio.",
          "correta": true
        },
        {
          "texto": "Financiamento, Empréstimo e Leasing.",
          "correta": false
        },
        {
          "texto": "Empréstimo, Consórcio e Financiamento Imobiliário.",
          "correta": false
        },
        {
          "texto": "Crédito Direto ao Consumidor (CDC), Leasing e Empréstimo Pessoal.",
          "correta": false
        }
      ],
      "gabaritoComentado": "Questão Inédita Padrão ANBIMA: (1) Empréstimo é a operação de crédito sem destinação específica (uso livre pelo tomador). (2) Financiamento (como o CDC ou Crédito Imobiliário) exige destinação específica vinculada à aquisição de um bem ou serviço, geralmente atrelado à garantia real de alienação fiduciária do próprio bem. (3) Consórcio é a modalidade de autofinanciamento em grupo fechado gerido por administradora de consórcios (fiscalizada pelo Bacen), em que não há cobrança de juros (apenas taxa de administração) e a contemplação da carta de crédito ocorre por sorteio ou lance."
    }
  ]
};
