// Mapas de decisão, apostilas, cronograma sprint e simulados (somente desenvolvimento).

const opt = (texto, peso, proximo) => ({ texto, peso, proximo });
const alt = (texto, correta = false) => ({ texto, correta });

const map = (id, modulo, titulo, topicoPD, dificuldade, limite, etapas, questoesObjetivas) => ({
  id,
  codigoItem: id,
  codigo_item: id,
  modulo,
  titulo,
  topicoPD,
  topico_pd: topicoPD,
  dificuldade,
  limite,
  etapas,
  questoesObjetivas,
  questoes_objetivas: questoesObjetivas,
  completed: false,
  bestScore: 0,
  best_score: 0,
});

export const MAPS = [
  map('CASO_M1_01', 1, 'Cliente quer aplicar a reserva de emergência em renda variável', 'Poupança e liquidez', 'Fácil', 3, {
    1: {
      falaCliente: 'Quero colocar toda a minha reserva de emergência em ações, porque ouvi dizer que rende mais.',
      opcoes: [
        opt('Explicar que reserva de emergência exige liquidez e baixo risco, e perguntar o objetivo do dinheiro.', 1, '2'),
        opt('Executar a ordem, pois a decisão é do cliente.', 0, '3'),
      ],
    },
    2: {
      falaCliente: 'Entendi, mas e se eu quiser aplicar só uma parte?',
      opcoes: [
        opt('Sugerir manter a reserva em ativos líquidos e destinar apenas o excedente a ativos de maior risco.', 2, 'END'),
        opt('Sugerir dividir tudo igualmente entre ações e CDB.', 0, 'END'),
      ],
    },
    3: {
      falaCliente: 'Ótimo, então pode comprar. Se cair, eu aguento.',
      opcoes: [
        opt('Voltar atrás e orientar sobre risco e liquidez antes de operar.', 1, '2'),
        opt('Concluir a operação sem registro.', 0, 'END'),
      ],
    },
  }, [
    { enunciado: 'Qual característica deve ter a reserva de emergência?', alternativas: [alt('Alta liquidez e baixo risco', true), alt('Alta rentabilidade e longo prazo'), alt('Isenção de imposto apenas'), alt('Concentração em um único emissor')] },
    { enunciado: 'Qual princípio orienta a recomendação ao cliente?', alternativas: [alt('Adequação ao perfil e aos objetivos', true), alt('Maior comissão para a instituição'), alt('Maior prazo possível'), alt('Escolha aleatória')] },
  ]),

  map('CASO_M2_01', 2, 'Escolha entre CDB, LCI e fundo de investimento', 'Renda fixa bancária', 'Médio', 4, {
    1: {
      falaCliente: 'Tenho R$ 100 mil para dois anos. Quero segurança e rendimento acima da poupança. O que você indica?',
      opcoes: [
        opt('Perguntar sobre liquidez, tolerância a risco e objetivos antes de sugerir.', 1, '2'),
        opt('Indicar logo um fundo multimercado.', 0, '3'),
      ],
    },
    2: {
      falaCliente: 'Posso ficar dois anos sem mexer e prefiro algo com garantia.',
      opcoes: [
        opt('Apresentar CDB e LCI, destacando a cobertura do FGC até R$ 250 mil por instituição.', 2, '4'),
        opt('Apresentar apenas debêntures, sem citar o FGC.', 0, '3'),
      ],
    },
    3: {
      falaCliente: 'Mas isso tem garantia? Posso perder dinheiro?',
      opcoes: [
        opt('Reconhecer a falha e esclarecer riscos e ausência de FGC antes de continuar.', 1, '2'),
        opt('Afirmar que fundos têm garantia do FGC.', 0, 'END'),
      ],
    },
    4: {
      falaCliente: 'Gostei. E sobre o imposto de renda?',
      opcoes: [
        opt('Explicar que a LCI é isenta para pessoa física e o CDB tem IR regressivo.', 1, 'END'),
        opt('Dizer que ambos são isentos.', 0, 'END'),
      ],
    },
  }, [
    { enunciado: 'Qual o limite de cobertura do FGC por CPF e instituição?', alternativas: [alt('R$ 250 mil', true), alt('R$ 100 mil'), alt('R$ 1 milhão'), alt('Sem limite')] },
    { enunciado: 'Qual produto abaixo NÃO é coberto pelo FGC?', alternativas: [alt('Cotas de fundos de investimento', true), alt('CDB'), alt('LCA'), alt('Poupança')] },
    { enunciado: 'A LCI para pessoa física é:', alternativas: [alt('Isenta de IR', true), alt('Tributada pelo IR regressivo'), alt('Tributada a 15% fixo'), alt('Tributada por IOF sempre')] },
  ]),

  map('CASO_M3_01', 3, 'Presente de um fornecedor e conflito de interesses', 'Ética e conflito de interesses', 'Médio', 4, {
    1: {
      falaCliente: 'Sou fornecedor e quero lhe dar um relógio caro como agradecimento pelo contrato.',
      opcoes: [
        opt('Recusar educadamente e informar a política da instituição sobre presentes.', 2, '2'),
        opt('Aceitar, desde que ninguém veja.', 0, '3'),
      ],
    },
    2: {
      falaCliente: 'Então posso ao menos convidar você para um jantar de negócios?',
      opcoes: [
        opt('Consultar o Compliance, pois o convite pode gerar conflito de interesses.', 2, 'END'),
        opt('Aceitar sem comunicar, por ser apenas um jantar.', 0, 'END'),
      ],
    },
    3: {
      falaCliente: 'Fica entre nós. Ninguém precisa saber.',
      opcoes: [
        opt('Reconsiderar, recusar o presente e comunicar o Compliance.', 1, '2'),
        opt('Aceitar e deixar de registrar.', 0, 'END'),
      ],
    },
  }, [
    { enunciado: 'Diante de um possível conflito de interesses, o profissional deve:', alternativas: [alt('Comunicar ao Compliance e abster-se', true), alt('Decidir sozinho'), alt('Ocultar o fato'), alt('Priorizar o ganho pessoal')] },
    { enunciado: 'Qual valor ético se opõe ao recebimento de vantagens indevidas?', alternativas: [alt('Integridade', true), alt('Agilidade'), alt('Informalidade'), alt('Lucratividade')] },
  ]),

  map('CASO_M4_01', 4, 'Cliente pergunta sobre investir em DeFi e criptoativos', 'DeFi e criptoativos', 'Difícil', 4, {
    1: {
      falaCliente: 'Vi que protocolos DeFi pagam 20% ao ano. Quero colocar minhas economias lá, deve ter FGC, certo?',
      opcoes: [
        opt('Esclarecer que não há cobertura do FGC e explicar os riscos de código, volatilidade e liquidez.', 2, '2'),
        opt('Confirmar que há FGC, pois é tecnologia moderna.', 0, '3'),
      ],
    },
    2: {
      falaCliente: 'Entendo. Mas como sei se isso combina comigo?',
      opcoes: [
        opt('Aplicar o suitability: avaliar perfil, objetivos e limitar a exposição a uma pequena parcela.', 2, 'END'),
        opt('Indicar a alocação máxima possível para ganhar mais.', 0, 'END'),
      ],
    },
    3: {
      falaCliente: 'Então pode fazer a transferência de tudo.',
      opcoes: [
        opt('Parar e corrigir a informação, apresentando os riscos antes de qualquer decisão.', 1, '2'),
        opt('Executar a transferência.', 0, 'END'),
      ],
    },
  }, [
    { enunciado: 'Ativos em protocolos DeFi contam com garantia do FGC?', alternativas: [alt('Não', true), alt('Sim, até R$ 250 mil'), alt('Sim, até R$ 1 milhão'), alt('Apenas stablecoins')] },
    { enunciado: 'O que são smart contracts?', alternativas: [alt('Contratos autoexecutáveis em blockchain', true), alt('Contratos em papel digitalizados'), alt('Apólices de seguro'), alt('Acordos verbais')] },
  ]),
];

// Apostilas

const wordsOf = (text) => text.split(/\s+/).filter(Boolean).length;

const splitSections = (md) => {
  const sections = [];
  let title = 'Visão Geral';
  let buf = [];
  const flush = () => {
    const content = buf.join('\n').trim();
    if (content) sections.push({ index: sections.length + 1, title, titulo: title, content, conteudo: content });
  };
  md.split('\n').forEach((line) => {
    const m = line.trim().match(/^##\s+(.+)$/);
    if (m) {
      flush();
      title = m[1].trim();
      buf = [line];
    } else buf.push(line);
  });
  flush();
  return sections;
};

const material = (moduleId, slug, peso, questoesProva, content) => {
  const title = content.match(/^#\s+(.+)$/m)[1].trim();
  const sections = splitSections(content);
  const words = wordsOf(content);
  const readingTimeMinutes = Math.max(1, Math.round(words / 200));
  return {
    id: `modulo${moduleId}`,
    moduleId,
    module_id: moduleId,
    slug,
    filename: `modulos/${slug}.md`,
    path: `modulos/${slug}.md`,
    title,
    titulo: title,
    peso,
    questoesProva,
    questoes_prova: questoesProva,
    content,
    markdown: content,
    conteudo: content,
    sections,
    secoes: sections,
    wordCount: words,
    word_count: words,
    lineCount: content.split('\n').length,
    line_count: content.split('\n').length,
    readingTimeMinutes,
    reading_time_minutes: readingTimeMinutes,
  };
};

export const MATERIALS = [
  material(1, 'modulo1_sfn_economia', '20%', 10, `# Módulo 1: Estrutura e Dinâmica do Sistema Financeiro Nacional (SFN)

Visão geral dos órgãos, da política monetária e da matemática financeira.

## Estrutura do SFN

O SFN é organizado em três níveis:

- **Normativos:** definem as regras (CMN, CNSP, CNPC).
- **Supervisores:** fiscalizam (Bacen, CVM, SUSEP, PREVIC).
- **Operadores:** intermediam recursos (bancos, corretoras, seguradoras).

| Órgão | Papel | Foco |
| --- | --- | --- |
| CMN | Normativo | Moeda, crédito e câmbio |
| Bacen | Supervisor | Bancos e SPB |
| CVM | Supervisor | Valores mobiliários |
| SUSEP | Supervisor | Seguros e previdência aberta |

## Política monetária

O **Copom** define a meta da Selic a cada reunião.

- Selic alta: contrai crédito e reduz a inflação.
- Selic baixa: estimula atividade e crédito.

## Matemática financeira

1. Juros compostos: M = C x (1 + i)^n.
2. Juros simples: M = C x (1 + i x n).
3. Taxa real: (1 + nominal) / (1 + inflação) - 1.

## FGC

Garante até **R$ 250 mil** por CPF/CNPJ e instituição, com teto global de R$ 1 milhão a cada 4 anos.
`),
  material(2, 'modulo2_produtos', '40%', 20, `# Módulo 2: Produtos do Mercado Financeiro (CPA ANBIMA)

Principais produtos de investimento, crédito e seguros.

## Renda fixa

Títulos públicos e privados com regras de remuneração definidas.

- **Prefixados:** taxa definida na compra.
- **Pós-fixados:** acompanham CDI ou Selic.
- **Híbridos:** parte fixa mais inflação.

## Tributação

| Produto | Imposto de renda (pessoa física) |
| --- | --- |
| Poupança | Isenta |
| LCI e LCA | Isentas |
| CDB | Tabela regressiva (22,5% a 15%) |
| Debêntures incentivadas | Isentas |

## Renda variável

As ações dão direito a dividendos e à valorização, com risco de perdas. Os fundos de ações investem ao menos 67% em ações.

## Fundos de investimento

1. Cota calculada diariamente.
2. Cobram taxa de administração e, às vezes, de performance.
3. Não têm cobertura do FGC.

## Previdência privada

O **PGBL** permite deduzir contribuições em até 12% da renda bruta anual. Já no **VGBL**, o imposto incide só sobre o rendimento.
`),
  material(3, 'modulo3_relacionamento_etica', '30%', 15, `# Módulo 3: Relacionamento com o Cliente, Finanças Pessoais e Ética

Suitability, ética, prevenção à lavagem de dinheiro e proteção de dados.

## Suitability

Processo de adequação de produtos ao perfil do investidor:

- Coleta de informações sobre objetivos, situação financeira e conhecimento.
- Classificação do perfil (conservador, moderado, arrojado).
- Verificação de adequação antes da recomendação.

## Perfis de investidor

| Perfil | Característica | Exemplo de alocação |
| --- | --- | --- |
| Conservador | Prioriza segurança | Renda fixa e liquidez |
| Moderado | Aceita risco parcial | Mix de renda fixa e variável |
| Arrojado | Busca retorno alto | Maior parcela em renda variável |

## Ética e conflito de interesses

1. Agir com integridade e transparência.
2. Comunicar conflitos ao Compliance.
3. Respeitar limites para presentes e benefícios.

## Prevenção à lavagem de dinheiro

A Lei 9.613 exige **conheça seu cliente (KYC)**, registro de operações e comunicação de atividades suspeitas ao COAF.

## LGPD

O titular tem direito a acesso, correção e eliminação de seus dados, e o tratamento exige base legal.
`),
  material(4, 'modulo4_inovacao', '10%', 5, `# Módulo 4: Inovação e Desenvolvimento de Mercado (ESG, DeFi, Open Finance e IA)

Tendências que reformulam o mercado financeiro.

## ESG

Critérios usados para avaliar riscos e oportunidades:

- **Ambiental:** emissões, recursos naturais e clima.
- **Social:** pessoas, diversidade e comunidade.
- **Governança:** conselho, transparência e ética.

## Finanças descentralizadas (DeFi)

Serviços financeiros em blockchain, executados por contratos inteligentes.

| Aspecto | DeFi | Sistema tradicional |
| --- | --- | --- |
| Intermediário | Nenhum central | Bancos e corretoras |
| Garantia FGC | Não | Sim, em produtos elegíveis |
| Risco típico | Falha de código | Crédito e mercado |

## Open Finance

1. Compartilhamento de dados com **consentimento** do cliente.
2. Acesso via APIs padronizadas.
3. Revogação possível a qualquer momento.

## Inteligência artificial

A IA apoia crédito, fraudes e atendimento. Exige governança para tratar vieses e garantir explicabilidade.
`),
];

// Cronograma sprint

const block = (id, dia, horario, titulo, modulo_foco, peso_foco, tarefas, meta_questoes) => ({
  id,
  ordem: Number(id.replace(/\D/g, '')),
  dia,
  horario,
  titulo,
  modulo_foco,
  moduloFoco: modulo_foco,
  peso_foco,
  pesoFoco: peso_foco,
  tarefas,
  meta_questoes,
  metaQuestoes: meta_questoes,
  concluido: false,
});

export const SPRINT_BLOCKS = [
  block('B01', 'Sábado', '08:00 - 10:00', 'Leitura do SFN e política monetária', 'Módulo 1', '20%', ['Ler apostila do módulo 1', 'Revisar tópicos de alta prioridade'], '10 questões'),
  block('B02', 'Sábado', '10:30 - 12:30', 'Matemática financeira na HP 12C', 'Módulo 1', '20%', ['Resolver exercícios de juros compostos', 'Praticar taxa real e equivalência'], '10 questões'),
  block('B03', 'Sábado', '14:00 - 17:00', 'Produtos de renda fixa e fundos', 'Módulo 2', '40%', ['Estudar tributação dos produtos', 'Fazer flashcards de renda fixa'], '20 questões'),
  block('B04', 'Domingo', '08:00 - 11:00', 'Renda variável, previdência e derivativos', 'Módulo 2', '40%', ['Revisar PGBL e VGBL', 'Estudar fundos e ações'], '20 questões'),
  block('B05', 'Domingo', '14:00 - 17:00', 'Suitability, ética e PLD', 'Módulo 3', '30%', ['Praticar casos de decisão', 'Revisar Lei 9.613 e LGPD'], '15 questões'),
  block('B06', 'Segunda', '19:00 - 21:30', 'Inovação e simulado final', 'Módulo 4', '10%', ['Ler ESG, DeFi, Open Finance e IA', 'Realizar simulado de 50 questões'], '50 questões'),
];

// Simulados (formato de bootstrap.simulations)

const sim = (id, mode, totalQuestions, correctAnswers, durationSeconds, createdAt, details) => {
  const scorePct = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = scorePct >= 70;
  return {
    id,
    mode,
    totalQuestions,
    total_questions: totalQuestions,
    correctAnswers,
    correct_answers: correctAnswers,
    scorePct,
    score_pct: scorePct,
    passed,
    durationSeconds,
    duration_seconds: durationSeconds,
    details,
    created_at: createdAt,
    createdAt,
  };
};

export const SIMULATIONS = [
  sim(2, '20Q', 20, 15, 1380, '2026-11-14T15:20:00',
    [{ id: 'CESG_000084', correct: true }, { id: 'CESG_000085', correct: true }, { id: 'INED_M1_04', correct: false }, { id: 'CESG_000091', correct: true }]),
  sim(1, '50Q', 50, 31, 5400, '2026-11-12T09:05:00',
    [{ id: 'CESG_000086', correct: true }, { id: 'INED_M1_05', correct: false }, { id: 'CESG_000150', correct: true }, { id: 'INED_M4_06', correct: false }]),
];
