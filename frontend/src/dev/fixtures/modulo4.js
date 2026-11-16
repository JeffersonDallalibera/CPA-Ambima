import { b, buildFlashcards, buildQuestions, buildTopics, p, ul } from './helpers.js';

export const resumo4 =
  'Inovação no mercado financeiro: finanças sustentáveis (ESG), finanças descentralizadas (DeFi) e criptoativos, Open Finance e uso de inteligência artificial com governança.';

export const topicos4 = buildTopics(4, [
  ['4.1.1', 'ESG: pilares ambiental, social e de governança', 'Alta',
    p(`ESG reúne critérios ${b('ambientais')}, ${b('sociais')} e de ${b('governança')} usados para avaliar riscos e oportunidades de longo prazo de uma companhia.`) +
      ul([`${b('E')}: emissões, uso de recursos e mudanças climáticas.`, `${b('S')}: relações de trabalho, diversidade e impacto na comunidade.`, `${b('G')}: conselho, transparência e combate à corrupção.`]),
    ['Emissão de carbono -> pilar ambiental.', 'Independência do conselho -> pilar de governança.'],
    ['Classificar diversidade no quadro de funcionários como pilar ambiental.']],
  ['4.1.2', 'Títulos verdes e finanças sustentáveis', 'Média',
    p(`Os ${b('títulos verdes')} (green bonds) captam recursos destinados a projetos com benefício ambiental, e o emissor deve ${b('reportar o uso dos recursos')}.`) +
      ul(['Títulos sociais financiam projetos de impacto social.', 'Títulos sustentáveis combinam as duas finalidades.', 'Verificação externa (second opinion) reforça a credibilidade.']),
    ['"Uso dos recursos" em projeto ambiental -> título verde.'],
    ['Achar que o título verde garante rentabilidade superior ou isenção de risco.']],
  ['4.2.1', 'DeFi: conceito e funcionamento', 'Alta',
    p(`${b('DeFi')} (finanças descentralizadas) oferece serviços financeiros sobre ${b('blockchain')}, executados por ${b('contratos inteligentes')} (smart contracts), sem intermediário central.`) +
      ul(['Empréstimos, trocas e rendimentos ocorrem em protocolos abertos.', 'Riscos: falhas de código, volatilidade e ausência de garantia como o FGC.']),
    ['"Sem intermediário" e "smart contracts" -> DeFi.'],
    ['Supor que ativos em protocolos DeFi estão cobertos pelo FGC.']],
  ['4.2.2', 'Criptoativos, stablecoins e tokenização', 'Média',
    p(`${b('Stablecoins')} buscam manter paridade com um ativo de referência, como o dólar. A ${b('tokenização')} representa direitos sobre ativos reais em formato digital.`) +
      ul(['O Bacen regula prestadoras de serviços de ativos virtuais.', 'Tokens que representam valores mobiliários seguem as regras da CVM.']),
    ['"Paridade com moeda" -> stablecoin.'],
    ['Confundir stablecoin com moeda de curso legal.']],
  ['4.3.1', 'Open Finance: consentimento e compartilhamento de dados', 'Alta',
    p(`O ${b('Open Finance')} permite compartilhar dados e serviços entre instituições mediante ${b('consentimento expresso do cliente')}, via APIs padronizadas.`) +
      ul(['O cliente decide o que compartilha, com quem e por quanto tempo.', 'O consentimento pode ser revogado a qualquer momento.', 'Aplica-se a LGPD, e o cliente é o titular dos dados.']),
    ['"Consentimento" e "APIs" -> Open Finance.'],
    ['Pensar que a instituição pode compartilhar dados sem autorização do cliente.']],
  ['4.4.1', 'Inteligência artificial: usos, riscos e governança', 'Média',
    p(`A IA apoia ${b('análise de crédito')}, ${b('prevenção a fraudes')} e ${b('atendimento')}. Exige governança para tratar ${b('vieses')}, garantir explicabilidade e proteger dados.`) +
      ul(['Modelos devem ser monitorados e validados periodicamente.', 'Decisões automatizadas relevantes devem poder ser revisadas por humanos.']),
    ['"Viés" ou "explicabilidade" -> governança de IA.'],
    ['Considerar que a IA elimina a responsabilidade da instituição pelas decisões.']],
]);

export const flashcards4 = buildFlashcards(4, [
  ['O que significa a sigla ESG?', p(`${b('Environmental, Social and Governance')}: ambiental, social e governança.`)],
  ['O que é um título verde (green bond)?', p('Título cujos recursos financiam projetos com benefício ambiental, com relato do uso dos recursos.')],
  ['O que caracteriza o DeFi?', p(`Serviços financeiros sobre ${b('blockchain')} com ${b('smart contracts')}, sem intermediário central.`)],
  ['O que é uma stablecoin?', p('Criptoativo que busca manter paridade com um ativo de referência, como o dólar.')],
  ['Qual o requisito central para compartilhar dados no Open Finance?', p(`${b('Consentimento expresso')} do cliente, que pode revogá-lo a qualquer momento.`)],
  ['Qual risco de governança é típico no uso de IA em crédito?', p(`${b('Viés algorítmico')} e falta de explicabilidade das decisões.`)],
]);

const q = (extra) => ({ pd: '4.1', tp: 'ESG', nivel: 'Compreensão', dif: 'Médio', ...extra });

export const questoes4 = buildQuestions(4, [
  q({ of: '000150', nivel: 'Memorização', dif: 'Fácil',
    enun: 'No conceito ESG, a letra "G" refere-se a:',
    alts: [['Gestão de resíduos.', 'Resíduos fazem parte do pilar ambiental.'], ['Governança corporativa.', 'Correto: conselho, transparência e ética.'], ['Geração de empregos.', 'Está ligada ao pilar social.'], ['Globalização.', 'Não é pilar do ESG.']],
    ok: 1, gab: 'G = governança: estrutura de decisão, transparência e prevenção à corrupção.' }),
  q({ of: '000151', tp: 'Títulos verdes', pd: '4.1',
    enun: 'Uma característica dos títulos verdes (green bonds) é:',
    alts: [['Garantia de rentabilidade superior à de títulos tradicionais.', 'Não há garantia de rentabilidade superior.'], ['Destinação dos recursos a projetos com benefício ambiental.', 'Correto.'], ['Cobertura integral pelo FGC.', 'O FGC não cobre esses títulos.'], ['Isenção de risco de crédito do emissor.', 'O risco de crédito permanece.']],
    ok: 1, gab: 'O traço central é o uso dos recursos em projetos ambientais, com prestação de contas.' }),
  q({ of: '000152', tp: 'Open Finance', pd: '4.3', dif: 'Fácil',
    enun: 'No Open Finance, o compartilhamento de dados entre instituições depende:',
    alts: [['Da decisão da instituição detentora dos dados.', 'Quem decide é o cliente.'], ['Do consentimento do cliente.', 'Correto.'], ['De autorização prévia do CMN a cada operação.', 'Não há essa exigência.'], ['De pagamento de taxa pelo cliente.', 'Não é requisito.']],
    ok: 1, gab: 'O cliente é o titular dos dados e autoriza o compartilhamento.' }),
  q({ of: '000153', tp: 'DeFi', pd: '4.2', nivel: 'Aplicação',
    enun: 'Qual risco é característico de protocolos DeFi?',
    alts: [['Falhas em contratos inteligentes e ausência de garantia como a do FGC.', 'Correto.'], ['Cobertura obrigatória do FGC até R$ 250 mil.', 'O FGC não cobre protocolos DeFi.'], ['Impossibilidade de oscilação de preços.', 'A volatilidade é elevada.'], ['Supervisão direta do Copom.', 'O Copom define a Selic.']],
    ok: 0, gab: 'Código vulnerável, volatilidade e falta de proteção institucional são riscos típicos.' }),
  q({ tp: 'Stablecoins', pd: '4.2', dif: 'Fácil',
    enun: 'Uma stablecoin é um criptoativo que:',
    alts: [['Tem preço sempre crescente.', 'Não há essa garantia.'], ['Procura manter paridade com um ativo de referência.', 'Correto.'], ['É emitida exclusivamente pelo Bacen.', 'Pode ser emitida por entes privados.'], ['Possui curso legal obrigatório.', 'Não tem curso legal.']],
    ok: 1, gab: 'Stablecoins buscam estabilidade de preço atrelada a uma referência, como o dólar.' }),
  q({ tp: 'Open Finance', pd: '4.3', nivel: 'Aplicação',
    ctx: 'Um cliente autorizou o compartilhamento de seus dados com um banco parceiro por 6 meses e mudou de ideia após 2 meses.',
    enun: 'O que ele pode fazer?',
    alts: [['Nada, pois o prazo precisa ser cumprido.', 'O consentimento é revogável.'], ['Revogar o consentimento a qualquer momento.', 'Correto.'], ['Revogar apenas com autorização do banco.', 'A revogação independe do banco.'], ['Revogar somente ao fim do prazo.', 'Não há essa limitação.']],
    ok: 1, gab: 'O consentimento pode ser revogado a qualquer tempo pelo titular.' }),
  q({ tp: 'Inteligência artificial', pd: '4.4', nivel: 'Aplicação', dif: 'Difícil',
    ctx: 'Um banco usa modelo de IA para aprovar crédito e percebe taxas de negativa muito maiores para um grupo específico de clientes.',
    enun: 'Qual a providência de governança mais adequada?',
    alts: [['Manter o modelo, pois ele é automatizado e imparcial.', 'Modelos podem reproduzir vieses.'], ['Revisar o modelo e os dados para identificar e corrigir o viés.', 'Correto.'], ['Transferir a responsabilidade ao fornecedor do software.', 'A responsabilidade permanece com a instituição.'], ['Ocultar os critérios dos clientes.', 'Contraria a transparência.']],
    ok: 1, gab: 'A governança de IA exige monitorar, explicar e corrigir vieses.' }),
  q({ tp: 'Finanças sustentáveis', pd: '4.1', nivel: 'Memorização',
    enun: 'A emissão de gases de efeito estufa de uma empresa é avaliada, no ESG, no pilar:',
    alts: [['Social.', 'O pilar social trata de pessoas e comunidade.'], ['Ambiental.', 'Correto.'], ['De governança.', 'Trata de estrutura de decisão.'], ['Fiscal.', 'Não é pilar do ESG.']],
    ok: 1, gab: 'Emissões e mudanças climáticas pertencem ao pilar ambiental.' }),
]);
