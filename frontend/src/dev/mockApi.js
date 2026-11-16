// Mock de API somente para desenvolvimento: ativado com VITE_MOCK=1 (não entra no build).
import { resumo1, topicos1, flashcards1, questoes1 } from './fixtures/modulo1.js';
import { resumo2, topicos2, flashcards2, questoes2 } from './fixtures/modulo2.js';
import { resumo3, topicos3, flashcards3, questoes3 } from './fixtures/modulo3.js';
import { resumo4, topicos4, flashcards4, questoes4 } from './fixtures/modulo4.js';
import { MAPS, MATERIALS, SPRINT_BLOCKS, SIMULATIONS } from './fixtures/extras.js';

const WEIGHTS = { 1: 20, 2: 40, 3: 30, 4: 10 };
const TITLES = {
  1: 'Módulo 1 — SFN & Economia',
  2: 'Módulo 2 — Produtos',
  3: 'Módulo 3 — Cliente, Ética & Ilícitos',
  4: 'Módulo 4 — Inovação: ESG, DeFi & IA',
};
const EXAM_QUESTIONS = { 1: 10, 2: 20, 3: 15, 4: 5 };

const round1 = (n) => Math.round(n * 10) / 10;

export function createMockApi() {
  const clone = (x) => JSON.parse(JSON.stringify(x));
  const sources = {
    1: { resumo: resumo1, topicos: topicos1, flashcards: flashcards1, questoes: questoes1 },
    2: { resumo: resumo2, topicos: topicos2, flashcards: flashcards2, questoes: questoes2 },
    3: { resumo: resumo3, topicos: topicos3, flashcards: flashcards3, questoes: questoes3 },
    4: { resumo: resumo4, topicos: topicos4, flashcards: flashcards4, questoes: questoes4 },
  };

  const state = {
    mastered: {},
    answered: {},
    favorites: {},
    completed: {},
    sprintDone: {},
    simulations: clone(SIMULATIONS),
  };
  let simId = 1000;

  const modulesView = () =>
    Object.entries(sources).map(([id, s]) => ({
      id: Number(id),
      titulo: TITLES[id],
      peso: WEIGHTS[id],
      questoesProva: EXAM_QUESTIONS[id],
      resumoExecutivo: s.resumo,
      topicos: s.topicos.map((t) => ({ ...t, mastered: !!state.mastered[t.key] })),
      flashcards: s.flashcards,
      questoes: s.questoes.map((q) => ({ ...q, favorita: !!state.favorites[q.id] })),
    }));

  const mapsView = () =>
    MAPS.map((m) => ({
      ...m,
      completed: !!state.completed[m.id],
      bestScore: state.completed[m.id]?.bestScore || 0,
    }));

  const bootstrap = () => {
    const answered = {};
    Object.entries(state.answered).forEach(([id, a]) => {
      answered[id] = a;
    });
    const completedCases = {};
    Object.entries(state.completed).forEach(([id, c]) => {
      completedCases[id] = { completed: true, bestScore: c.bestScore };
    });
    return {
      masteredTopics: Object.fromEntries(Object.entries(state.mastered).filter(([, v]) => v)),
      answeredQuestions: answered,
      favoriteQuestions: Object.fromEntries(Object.entries(state.favorites).filter(([, v]) => v)),
      completedCases,
      sprintDone: state.sprintDone,
      sprintBlocks: SPRINT_BLOCKS,
      simulations: state.simulations,
      counts: {},
    };
  };

  const analytics = () => {
    let weightedReadiness = 0;
    let weightedAccuracy = 0;
    let answeredAll = 0;
    let correctAll = 0;
    let totalQAll = 0;
    let totalTAll = 0;
    let masteredAll = 0;
    const modules = Object.entries(sources).map(([id, s]) => {
      const w = WEIGHTS[id] / 100;
      const total = s.questoes.length;
      const ans = s.questoes.filter((q) => state.answered[q.id]);
      const cor = ans.filter((q) => state.answered[q.id].correct).length;
      const acc = ans.length ? round1((cor / ans.length) * 100) : 0;
      const cov = total ? round1((ans.length / total) * 100) : 0;
      const mas = s.topicos.filter((t) => state.mastered[t.key]).length;
      const masPct = s.topicos.length ? round1((mas / s.topicos.length) * 100) : 0;
      const readiness = ans.length
        ? round1(acc * 0.7 + masPct * 0.15 + cov * 0.15)
        : round1(masPct * 0.3);
      weightedReadiness += readiness * w;
      weightedAccuracy += acc * w;
      answeredAll += ans.length;
      correctAll += cor;
      totalQAll += total;
      totalTAll += s.topicos.length;
      masteredAll += mas;
      const status =
        acc >= 75 && ans.length >= 5 ? 'DOMINADO' : acc >= 60 || mas > 0 || ans.length > 0 ? 'EM_EVOLUCAO' : 'PRIORITARIO';
      return {
        id: Number(id),
        titulo: TITLES[id],
        peso: WEIGHTS[id],
        weightPct: WEIGHTS[id],
        totalQuestions: total,
        answeredQuestions: ans.length,
        correctAnswers: cor,
        accuracyPct: acc,
        coveragePct: cov,
        totalTopics: s.topicos.length,
        masteredTopics: mas,
        topicsMasteryPct: masPct,
        readinessScore: readiness,
        status,
      };
    });

    const priorityTopics = Object.entries(sources).flatMap(([id, s]) =>
      s.topicos
        .filter((t) => t.prioridade === 'Alta')
        .map((t) => ({
          key: t.key,
          moduleId: Number(id),
          moduloTitulo: TITLES[id],
          pesoModulo: WEIGHTS[id],
          codigo: t.codigo,
          titulo: t.titulo,
          prioridade: t.prioridade,
          mastered: !!state.mastered[t.key],
          gatilhosProva: t.gatilhosProva,
          pegadinhas: t.pegadinhas,
        }))
    );
    priorityTopics.sort((a, b) => b.pesoModulo - a.pesoModulo);

    const readinessScore = round1(weightedReadiness);
    const accuracyPct = answeredAll ? round1((correctAll / answeredAll) * 100) : 0;
    const summary = {
      totalQuestions: totalQAll,
      answeredQuestions: answeredAll,
      correctAnswers: correctAll,
      accuracyPct,
      weightedAccuracyPct: round1(weightedAccuracy),
      readinessScore,
      totalTopics: totalTAll,
      masteredTopics: masteredAll,
      topicsMasteryPct: totalTAll ? round1((masteredAll / totalTAll) * 100) : 0,
      totalMaps: MAPS.length,
      completedMaps: Object.keys(state.completed).length,
      totalSimulations: state.simulations.length,
    };
    return {
      status: 'ok',
      readinessScore,
      weightedAccuracyPct: round1(weightedAccuracy),
      overallAccuracyPct: accuracyPct,
      targetScorePct: 70,
      readyForExam: readinessScore >= 70,
      weights: { 1: 20, 2: 40, 3: 30, 4: 10 },
      summary,
      totals: summary,
      modules,
      priorityTopics,
    };
  };

  const getRoutes = {
    '/api/bootstrap': bootstrap,
    '/api/modules': modulesView,
    '/api/maps': mapsView,
    '/api/analytics': analytics,
    '/api/study-materials': () => ({ status: 'ok', materials: MATERIALS, total: MATERIALS.length }),
  };

  const postRoutes = {
    '/api/topics/toggle': ({ key }) => {
      state.mastered[key] = !state.mastered[key];
      return { ok: true, key, mastered: state.mastered[key] };
    },
    '/api/questions/answer': ({ questionId, correct, chosenText }) => {
      state.answered[questionId] = { correct: !!correct, chosenText };
      return { ok: true };
    },
    '/api/questions/favorite': ({ questionId }) => {
      state.favorites[questionId] = !state.favorites[questionId];
      return { ok: true, favorita: state.favorites[questionId] };
    },
    '/api/maps/complete': ({ mapId, score }) => {
      const prev = state.completed[mapId]?.bestScore || 0;
      state.completed[mapId] = { completed: true, bestScore: Math.max(prev, Number(score) || 0) };
      return { ok: true };
    },
    '/api/sprint/toggle': ({ blockId, concluido }) => {
      state.sprintDone[blockId] = !!concluido;
      return { ok: true };
    },
    '/api/simulations': (body) => {
      const sim = {
        id: ++simId,
        mode: body.mode,
        totalQuestions: body.totalQuestions,
        correctAnswers: body.correctAnswers,
        scorePct: body.scorePct,
        score_pct: body.scorePct,
        passed: !!body.passed,
        durationSeconds: body.durationSeconds,
        details: body.details || [],
        createdAt: new Date().toISOString(),
      };
      state.simulations.unshift(sim);
      return { ok: true, simulation: sim };
    },
  };

  return { getRoutes, postRoutes };
}

export function mockApiPlugin() {
  return {
    name: 'cpa-mock-api',
    apply: 'serve',
    configureServer(server) {
      if (process.env.VITE_MOCK !== '1') return;
      const { getRoutes, postRoutes } = createMockApi();
      server.config.logger.info('  Mock da API ativo (VITE_MOCK=1): /api/* atendido em memória.');

      server.middlewares.use((req, res, next) => {
        const path = (req.url || '').split('?')[0];
        if (!path.startsWith('/api/')) return next();

        const send = (status, payload) => {
          res.statusCode = status;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify(payload));
        };

        if (req.method === 'GET' && getRoutes[path]) return send(200, getRoutes[path]());

        if (req.method === 'POST' && postRoutes[path]) {
          let raw = '';
          req.on('data', (c) => {
            raw += c;
          });
          req.on('end', () => {
            try {
              send(200, postRoutes[path](raw ? JSON.parse(raw) : {}));
            } catch (err) {
              send(400, { error: String(err.message || err) });
            }
          });
          return undefined;
        }

        return send(404, { error: 'not found' });
      });
    },
  };
}
