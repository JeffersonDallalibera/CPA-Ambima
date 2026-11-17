import {
  Sparkles,
  ShieldAlert,
  Zap,
  Target,
  Calculator,
  RotateCcw,
  BookOpen,
  Layers,
  CalendarClock,
  Crosshair,
} from 'lucide-react';
import { MODULES_META } from '../../lib/constants';
import { apportion, topWeightModules } from '../../lib/certifications';
import { isDue } from '../../lib/srs';
import { shuffle } from '../../lib/utils';

const CALC_REGEX =
  /r\$|%|taxa|juros|bdr|cet|vpl|tir|price|sac|lca|parcela|reserva|desconto|fisher|capitalização/i;

const SPRINT_TOTAL = 20;
const PARETO_TOTAL = 35;
const ADAPTIVE_TOTAL = 30;
const REVIEW_MAX = 20;

const moduleIds = (cert) => Object.keys(cert.weights).map(Number).sort((a, b) => a - b);

export function getSimModes(cert) {
  const weights = apportion(cert.totalQuestions, cert.weights);
  const ratio = Object.values(weights).join('/');
  const sprint = apportion(SPRINT_TOTAL, cert.weights);
  const top = topWeightModules(cert, 2);
  const topShare = top.reduce((acc, id) => acc + cert.weights[id], 0);
  const topSplit = apportion(PARETO_TOTAL, Object.fromEntries(top.map((id) => [id, cert.weights[id]])));
  const clock = `${Math.floor(cert.durationMin / 60)}h${String(cert.durationMin % 60).padStart(2, '0')}`;

  const base = [
    {
      id: 'review_due',
      label: 'Revisão do dia',
      description: 'Questões que a repetição espaçada marcou para hoje: erros recentes e itens com intervalo vencido.',
      durationMin: 30,
      totalQuestions: null,
      icon: CalendarClock,
      assisted: true,
    },
    {
      id: 'adaptive_30',
      label: 'Foco nas fraquezas',
      description: 'Sorteio adaptativo: mais questões dos módulos em que você acerta menos, priorizando as ainda não vistas.',
      durationMin: 90,
      totalQuestions: ADAPTIVE_TOTAL,
      icon: Crosshair,
      assisted: true,
    },
    {
      id: 'assisted_50',
      label: 'Simulado assistido',
      description:
        'Feedback imediato a cada questão, dica do professor e justificativa oficial de cada alternativa.',
      durationMin: cert.durationMin,
      totalQuestions: cert.totalQuestions,
      icon: Sparkles,
      assisted: true,
    },
    {
      id: 'official_50',
      label: 'Simulado oficial ANBIMA',
      description: `Reproduz o Centro de Testes: ${clock}, proporção ${ratio}, dificuldade 25/50/25 e sem retorno à questão anterior.`,
      durationMin: cert.durationMin,
      totalQuestions: cert.totalQuestions,
      icon: ShieldAlert,
      assisted: false,
    },
    {
      id: 'official_cesgranrio',
      label: 'Oficial Só Cesgranrio (50Q)',
      description: `Modo prova real (sem retorno) com 50 questões exclusivas das 121 fichas oficiais da Cesgranrio na proporção ${ratio}.`,
      durationMin: cert.durationMin,
      totalQuestions: cert.totalQuestions,
      icon: ShieldAlert,
      assisted: false,
    },
    {
      id: 'official_100',
      label: 'Oficial Estendido (100Q)',
      description: 'Prova real estendida (5h00, sem retorno) com 100 questões ponderadas pelos pesos oficiais para testar resistência.',
      durationMin: 300,
      totalQuestions: 100,
      icon: ShieldAlert,
      assisted: false,
    },
    {
      id: 'official_hard',
      label: 'Oficial Nível Difícil (30Q)',
      description: 'Modo prova real (1h30, sem retorno) focado nas questões de alta e média complexidade.',
      durationMin: 90,
      totalQuestions: 30,
      icon: ShieldAlert,
      assisted: false,
    },
    {
      id: 'official_marathon',
      label: 'Oficial Maratona Total (Todas)',
      description: 'Modo prova real (sem retorno) passando por todas as 148 questões do banco em sequência embaralhada.',
      durationMin: 360,
      totalQuestions: null,
      icon: ShieldAlert,
      assisted: false,
    },
    {
      id: 'sprint_20',
      label: 'Sprint rápido',
      description: `Bateria curta com os pesos da prova (${Object.values(sprint).join(' + ')}) para treinar ritmo e fixação.`,
      durationMin: 60,
      totalQuestions: SPRINT_TOTAL,
      icon: Zap,
      assisted: true,
    },
    {
      id: 'pareto_35',
      label: `Pareto ${topShare}%`,
      description: `Foco nos módulos ${top.join(' e ')}, que valem ${topShare}% da prova: ${top
        .map((id) => `${topSplit[id]} de ${MODULES_META[id]?.short ?? `Módulo ${id}`}`)
        .join(' e ')}.`,
      durationMin: 105,
      totalQuestions: PARETO_TOTAL,
      icon: Target,
      assisted: true,
    },
    {
      id: 'calc_hp12c',
      label: 'Cálculos e HP 12C',
      description: 'Questões quantitativas: juros, Price, SAC, LCA, renda fixa e reserva, com a calculadora à mão.',
      durationMin: 60,
      totalQuestions: 20,
      icon: Calculator,
      assisted: true,
    },
    {
      id: 'cesgranrio_only',
      label: 'Só oficiais Cesgranrio',
      description: 'Questões sorteadas exclusivamente das fichas técnicas oficiais da Cesgranrio.',
      durationMin: cert.durationMin,
      totalQuestions: cert.totalQuestions,
      icon: BookOpen,
      assisted: true,
    },
    {
      id: 'wrong_only',
      label: 'Caderno de erros',
      description: 'Refaça apenas as questões que você errou antes, até zerar as lacunas.',
      durationMin: 60,
      totalQuestions: null,
      icon: RotateCcw,
      assisted: true,
    },
  ];

  const perModule = moduleIds(cert).map((n) => ({
    id: `module_${n}`,
    label: `Módulo ${n}`,
    description: `Treino assistido de ${MODULES_META[n]?.short ?? `módulo ${n}`}.`,
    durationMin: 60,
    totalQuestions: 25,
    icon: Layers,
    assisted: true,
  }));

  return [...base, ...perModule];
}

// Respeita a mistura de dificuldade da prova dentro de um módulo; completa com o que sobrar.
function pickBalanced(questions, n, mix) {
  const pool = shuffle(questions);
  if (!mix) return pool.slice(0, n);
  const buckets = {};
  pool.forEach((q) => (buckets[q.dificuldade] ||= []).push(q));
  const quotas = apportion(n, mix);
  const picked = Object.entries(quotas).flatMap(([level, count]) => (buckets[level] || []).slice(0, count));
  const taken = new Set(picked.map((q) => q.id));
  return [...picked, ...pool.filter((q) => !taken.has(q.id))].slice(0, n);
}

function byWeights(all, weights, mix) {
  return Object.entries(weights).flatMap(([id, n]) =>
    pickBalanced(
      all.filter((q) => q.moduloId === Number(id)),
      n,
      mix
    )
  );
}

function adaptiveWeights(cert, all, answered) {
  const scores = {};
  moduleIds(cert).forEach((id) => {
    const qs = all.filter((q) => q.moduloId === id);
    const done = qs.filter((q) => answered?.[q.id]);
    const acc = done.length ? done.filter((q) => answered[q.id].correct).length / done.length : 0.5;
    scores[id] = cert.weights[id] * (1.6 - acc);
  });
  return apportion(ADAPTIVE_TOTAL, scores);
}

function pickPool(modeId, ctx) {
  const { all, answered, cert, questionSrs } = ctx;
  const mix = cert.difficultyMix;
  const byModule = (id) => shuffle(all.filter((q) => q.moduloId === id));

  if (modeId === 'assisted_50' || modeId === 'official_50') {
    return byWeights(all, apportion(cert.totalQuestions, cert.weights), mix);
  }
  if (modeId === 'official_cesgranrio') {
    return byWeights(all.filter((q) => q.oficial), apportion(cert.totalQuestions, cert.weights), mix);
  }
  if (modeId === 'official_100') {
    return byWeights(all, apportion(100, cert.weights), mix);
  }
  if (modeId === 'official_hard') {
    const hard = shuffle(all.filter((q) => q.dificuldade === 'Difícil'));
    const med = shuffle(all.filter((q) => q.dificuldade === 'Médio'));
    return [...hard, ...med].slice(0, 30);
  }
  if (modeId === 'official_marathon') {
    return shuffle(all);
  }
  if (modeId === 'sprint_20') return byWeights(all, apportion(SPRINT_TOTAL, cert.weights));
  if (modeId === 'pareto_35') {
    const top = topWeightModules(cert, 2);
    return byWeights(all, apportion(PARETO_TOTAL, Object.fromEntries(top.map((id) => [id, cert.weights[id]]))));
  }
  if (modeId === 'adaptive_30') {
    const quotas = adaptiveWeights(cert, all, answered);
    return Object.entries(quotas).flatMap(([id, n]) => {
      const qs = all.filter((q) => q.moduloId === Number(id));
      const rank = (q) => {
        const a = answered?.[q.id];
        if (!a) return 1;
        return a.correct ? 3 : 0;
      };
      return shuffle(qs)
        .sort((a, b) => rank(a) - rank(b))
        .slice(0, n);
    });
  }
  if (modeId === 'review_due') {
    return shuffle(all.filter((q) => isDue(questionSrs?.[q.id]))).slice(0, REVIEW_MAX);
  }
  if (modeId.startsWith('module_')) return byModule(Number(modeId.slice(7))).slice(0, 25);
  if (modeId === 'calc_hp12c') {
    return shuffle(all.filter((q) => CALC_REGEX.test(`${q.contexto} ${q.enunciado}`))).slice(0, 20);
  }
  if (modeId === 'cesgranrio_only') {
    return shuffle(all.filter((q) => q.oficial)).slice(0, cert.totalQuestions);
  }
  if (modeId === 'wrong_only') {
    return shuffle(all.filter((q) => answered?.[q.id] && !answered[q.id].correct));
  }
  return [];
}

const EMPTY_MESSAGES = {
  wrong_only: 'Você ainda não tem questões erradas no caderno de erros.',
  review_due: 'Nada para revisar hoje. Responda questões e volte amanhã para a revisão espaçada.',
};

export function buildSimulation(modeId, { cert, modules, allQuestions, answered, questionSrs } = {}) {
  const mode = getSimModes(cert).find((m) => m.id === modeId);
  if (!mode) return { error: 'Modo de simulado desconhecido.' };

  const all =
    allQuestions && allQuestions.length
      ? allQuestions
      : (modules || []).flatMap((m) =>
          (m.questoes || []).map((q) => ({ ...q, moduloId: m.id, moduloTitulo: m.titulo }))
        );

  const pool = pickPool(modeId, { all, answered, cert, questionSrs });
  if (!pool.length) {
    return { error: EMPTY_MESSAGES[modeId] || 'Não há questões disponíveis para este simulado.' };
  }

  const questions = shuffle(pool).map((q) => ({ ...q, alternativas: shuffle(q.alternativas || []) }));
  return {
    mode: mode.id,
    label: mode.label,
    assisted: mode.assisted,
    durationSeconds: mode.durationMin * 60,
    questions,
  };
}
