// Configuração por certificação. Ajuste aqui pesos, tempo e corte quando o edital for conferido.
const BASE = {
  passThreshold: 70,
  durationMin: 150,
  totalQuestions: 50,
  weights: { 1: 20, 2: 40, 3: 30, 4: 10 },
  moduleOrder: [2, 3, 1, 4],
  // Dificuldade da prova: 25% fácil, 50% média, 25% difícil.
  difficultyMix: { Fácil: 0.25, Médio: 0.5, Difícil: 0.25 },
};

export const CERTIFICATIONS = {
  cpa20: {
    ...BASE,
    id: 'cpa20',
    name: 'CPA-20',
    provisional: false,
    note: 'Pesos e composição do programa detalhado ANBIMA em uso.',
  },
  cpa10: {
    ...BASE,
    id: 'cpa10',
    name: 'CPA-10',
    provisional: true,
    note: 'Estrutura provisória: pesos, tempo e corte ainda não foram conferidos com o edital do CPA-10, e o conteúdo é compartilhado com o CPA-20.',
  },
};

export const CERTIFICATION_LIST = Object.values(CERTIFICATIONS);
export const DEFAULT_CERTIFICATION = 'cpa20';

// Distribui `total` itens proporcionalmente aos pesos (maior resto), garantindo soma exata.
export function apportion(total, weights) {
  const entries = Object.entries(weights);
  const sum = entries.reduce((acc, [, w]) => acc + w, 0) || 1;
  const rows = entries.map(([id, w]) => {
    const exact = (total * w) / sum;
    return { id, n: Math.floor(exact), rest: exact - Math.floor(exact) };
  });
  let left = total - rows.reduce((acc, r) => acc + r.n, 0);
  [...rows]
    .sort((a, b) => b.rest - a.rest)
    .forEach((r) => {
      if (left > 0) {
        r.n += 1;
        left -= 1;
      }
    });
  return Object.fromEntries(rows.map((r) => [r.id, r.n]));
}

export function topWeightModules(cert, count = 2) {
  return Object.entries(cert.weights)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([id]) => Number(id));
}
