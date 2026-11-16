import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  ShieldAlert,
  Zap,
  Target,
  Calculator,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Scissors,
  Star,
  Lock,
  ArrowRight,
  Clock,
  Award,
  BookOpen,
} from 'lucide-react';
import HP12C from './HP12C';

function shuffle(arr) {
  const copy = [...(arr || [])];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const SIM_MODES = [
  {
    id: 'assisted_50',
    title: 'Simulado Assistido (50Q)',
    badge: 'RECOMENDADO P/ ESTUDO',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    desc: 'Estude fazendo a prova: feedback imediato após cada questão, Dica do Professor antes de responder, justificativa oficial de cada alternativa (A, B, C, D) e HP 12C ao lado.',
    icon: Sparkles,
    assisted: true,
    minutes: 150,
  },
  {
    id: 'official_50',
    title: 'Simulado Oficial ANBIMA (50Q)',
    badge: 'MODO PROVA REAL',
    badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    desc: 'Reproduz o Centro de Testes: 2h30, proporção 20/40/30/10, bloqueio estrito sem retorno à questão anterior, rascunho digital e HP 12C.',
    icon: ShieldAlert,
    assisted: false,
    minutes: 150,
  },
  {
    id: 'sprint_20',
    title: 'Simulado Sprint Rápido (20Q)',
    badge: '1H00 • PONDERADO',
    badgeColor: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
    desc: 'Bateria rápida com os pesos oficiais (4 M1 + 8 M2 + 6 M3 + 2 M4) em modo assistido para treinar ritmo e fixação.',
    icon: Zap,
    assisted: true,
    minutes: 60,
  },
  {
    id: 'pareto_35',
    title: 'Simulado Pareto 70% (35Q)',
    badge: 'MÓDULO 2 + MÓDULO 3',
    badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    desc: 'Foco cirúrgico nos 2 módulos que valem 70% da prova (20Q de Produtos + 15Q de Relacionamento/Ética/Ilícitos) em modo assistido.',
    icon: Target,
    assisted: true,
    minutes: 105,
  },
  {
    id: 'calc_hp12c',
    title: 'Simulado Cálculos & HP 12C',
    badge: 'QUANTITATIVO',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    desc: 'Treine todas as questões de cálculo (BDR, Fisher, Juros Compostos, Price, SAC, LCA, Renda Fixa, Reserva) com a HP 12C aberta.',
    icon: Calculator,
    assisted: true,
    minutes: 60,
  },
  {
    id: 'cesgranrio_only',
    title: 'Só Oficiais Cesgranrio (50Q)',
    badge: 'PORTAL ANBIMA EDU',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    desc: '50 questões sorteadas exclusivamente das 121 fichas técnicas oficiais da Cesgranrio no modo assistido.',
    icon: BookOpen,
    assisted: true,
    minutes: 150,
  },
  {
    id: 'wrong_only',
    title: 'Simulado Caderno de Erros',
    badge: 'RECUPERAÇÃO',
    badgeColor: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    desc: 'Refaça exclusivamente as questões que você errou anteriormente até zerar suas lacunas.',
    icon: RotateCcw,
    assisted: true,
    minutes: 60,
  },
];

export default function SimulatorsHub({
  modules,
  answeredQuestions,
  favoriteQuestions,
  simulationsHistory,
  onAnswerQuestion,
  onToggleFavorite,
  onSaveSimulation,
}) {
  const [activeMode, setActiveMode] = useState(null);
  const [selectedModId, setSelectedModId] = useState(2);
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [eliminated, setEliminated] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [finished, setFinished] = useState(false);
  const [scratchpad, setScratchpad] = useState('');
  const [showHP, setShowHP] = useState(true);

  const allQuestions = useMemo(() => {
    const list = [];
    (modules || []).forEach((m) => {
      (m.questoes || []).forEach((q) => {
        list.push({ ...q, moduloId: m.id, moduloTitulo: m.titulo });
      });
    });
    return list;
  }, [modules]);

  useEffect(() => {
    if (!activeMode || finished) return;
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timer);
          handleFinish(answers);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [activeMode, finished, answers]);

  const startMode = (modeObj, customModId = null) => {
    const byMod = (id) => shuffle(allQuestions.filter((q) => q.moduloId === id));
    let pool = [];

    if (customModId) {
      pool = byMod(customModId).slice(0, 25);
    } else if (modeObj.id === 'assisted_50' || modeObj.id === 'official_50') {
      pool = shuffle([
        ...byMod(1).slice(0, 10),
        ...byMod(2).slice(0, 20),
        ...byMod(3).slice(0, 15),
        ...byMod(4).slice(0, 5),
      ]);
    } else if (modeObj.id === 'sprint_20') {
      pool = shuffle([
        ...byMod(1).slice(0, 4),
        ...byMod(2).slice(0, 8),
        ...byMod(3).slice(0, 6),
        ...byMod(4).slice(0, 2),
      ]);
    } else if (modeObj.id === 'pareto_35') {
      pool = shuffle([...byMod(2).slice(0, 20), ...byMod(3).slice(0, 15)]);
    } else if (modeObj.id === 'calc_hp12c') {
      pool = shuffle(
        allQuestions.filter((q) =>
          /r\$|%|taxa|juros|bdr|cet|vpl|tir|price|sac|lca|parcela|reserva|desconto|fisher|capitalização/i.test(
            `${q.contexto} ${q.enunciado}`
          )
        )
      ).slice(0, 20);
    } else if (modeObj.id === 'cesgranrio_only') {
      pool = shuffle(allQuestions.filter((q) => q.oficial)).slice(0, 50);
    } else if (modeObj.id === 'wrong_only') {
      pool = shuffle(
        allQuestions.filter((q) => answeredQuestions[q.id] && !answeredQuestions[q.id].correct)
      );
      if (!pool.length) {
        alert('Você ainda não tem questões erradas no seu Caderno de Erros! Excelente trabalho.');
        return;
      }
    }

    const prepared = pool.map((q) => ({
      ...q,
      _opts: shuffle(q.alternativas || []),
    }));

    setQuestions(prepared);
    setActiveMode(modeObj);
    setIdx(0);
    setSelectedOpt(null);
    setRevealed(false);
    setEliminated({});
    setShowHint(false);
    setAnswers([]);
    setSecondsLeft((modeObj.minutes || 60) * 60);
    setFinished(false);
  };

  const handleConfirmAssisted = () => {
    if (selectedOpt === null) return;
    const q = questions[idx];
    const chosen = q._opts[selectedOpt];
    const isOk = !!chosen.correta;
    setRevealed(true);
    onAnswerQuestion(q.id, isOk, chosen.texto);
    setAnswers((prev) => [...prev, { question: q, chosen, correct: isOk }]);
  };

  const handleConfirmOfficialAndNext = () => {
    if (selectedOpt === null) return;
    const q = questions[idx];
    const chosen = q._opts[selectedOpt];
    const isOk = !!chosen.correta;
    onAnswerQuestion(q.id, isOk, chosen.texto);
    const nextAnswers = [...answers, { question: q, chosen, correct: isOk }];
    setAnswers(nextAnswers);

    if (idx + 1 >= questions.length) {
      handleFinish(nextAnswers);
    } else {
      setIdx(idx + 1);
      setSelectedOpt(null);
      setRevealed(false);
      setEliminated({});
      setShowHint(false);
    }
  };

  const handleNextAssisted = () => {
    if (idx + 1 >= questions.length) {
      handleFinish(answers);
    } else {
      setIdx(idx + 1);
      setSelectedOpt(null);
      setRevealed(false);
      setEliminated({});
      setShowHint(false);
    }
  };

  const handleFinish = (finalAnswers) => {
    setFinished(true);
    const total = finalAnswers.length || questions.length;
    const hits = finalAnswers.filter((a) => a.correct).length;
    const pct = total ? Math.round((hits / total) * 100) : 0;
    onSaveSimulation({
      mode: activeMode?.title || 'Simulado',
      totalQuestions: total,
      correctAnswers: hits,
      scorePct: pct,
      passed: pct >= 70,
      durationSeconds: ((activeMode?.minutes || 60) * 60) - secondsLeft,
      details: finalAnswers.map((a) => ({ id: a.question.id, correct: a.correct })),
    });
  };

  const formatTimer = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // --- VIEW 1: HUB SELECTION ---
  if (!activeMode) {
    const wrongCount = allQuestions.filter(
      (q) => answeredQuestions[q.id] && !answeredQuestions[q.id].correct
    ).length;

    return (
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-slate-900 to-sky-500/10 p-6 md:flex-row md:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" /> CENTRAL DE SIMULADOS & ESTUDO ASSISTIDO
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white">
              Estude Através de Simulados Inteligentes
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-300">
              Escolha entre o <b>Simulado Assistido</b> (com Dica do Professor, justificativa oficial alternativa por alternativa e HP 12C) ou o <b>Simulado Oficial ANBIMA</b> (sem retorno à questão anterior).
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3">
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-400">Caderno de Erros</div>
              <div className="font-mono text-xl font-extrabold text-rose-400">{wrongCount} questões</div>
            </div>
          </div>
        </div>

        {/* 7 Core Modes Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SIM_MODES.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-slate-900"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-emerald-400 group-hover:bg-emerald-500/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${m.badgeColor}`}>
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{m.desc}</p>
                </div>
                <button
                  onClick={() => startMode(m)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400"
                >
                  Iniciar Agora <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}

          {/* 8th Card: By Module */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-sky-400">
                  <Target className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-sky-500/30 bg-sky-500/15 px-2.5 py-0.5 text-[11px] font-bold text-sky-400">
                  POR MÓDULO
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">Simulado por Módulo</h3>
              <p className="mt-1.5 text-sm text-slate-400">
                Escolha um módulo específico para dominar antes de partir para o simulado geral:
              </p>
              <select
                value={selectedModId}
                onChange={(e) => setSelectedModId(Number(e.target.value))}
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"
              >
                <option value={2}>Módulo 2 — Produtos (40%)</option>
                <option value={3}>Módulo 3 — Cliente, Ética & Ilícitos (30%)</option>
                <option value={1}>Módulo 1 — SFN & Economia (20%)</option>
                <option value={4}>Módulo 4 — Inovação: ESG, DeFi & IA (10%)</option>
              </select>
            </div>
            <button
              onClick={() =>
                startMode(
                  {
                    id: `mod_${selectedModId}`,
                    title: `Simulado Assistido • Módulo ${selectedModId}`,
                    assisted: true,
                    minutes: 60,
                  },
                  selectedModId
                )
              }
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-sky-400"
            >
              Treinar Módulo {selectedModId} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* History from PostgreSQL */}
        {simulationsHistory?.length > 0 && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="mb-3 text-base font-bold text-white">
              🗄️ Histórico de Simulados Salvos no PostgreSQL (cpa-ambima)
            </h3>
            <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3">
              {simulationsHistory.slice(0, 6).map((sim, i) => (
                <div
                  key={sim.id || i}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3"
                >
                  <div>
                    <div className="text-sm font-bold text-white">{sim.mode}</div>
                    <div className="text-xs text-slate-400">
                      {sim.correct_answers}/{sim.total_questions} acertos
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 font-mono text-xs font-extrabold ${
                      sim.passed
                        ? 'bg-emerald-500/15 text-emerald-400'
                        : 'bg-rose-500/15 text-rose-400'
                    }`}
                  >
                    {sim.score_pct}% {sim.passed ? 'APROVADO' : 'REVISAR'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- VIEW 2: RESULTS ---
  if (finished) {
    const total = answers.length || questions.length;
    const hits = answers.filter((a) => a.correct).length;
    const pct = total ? Math.round((hits / total) * 100) : 0;
    const passed = pct >= 70;
    const wrongList = answers.filter((a) => !a.correct);

    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                  passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                }`}
              >
                <Award className="h-4 w-4" /> {passed ? 'APROVADO (ACIMA DE 70%)' : 'ABAIXO DE 70% — REVISAR ERROS'}
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-white">{activeMode.title}</h2>
            </div>
            <div className="text-right">
              <div className={`font-mono text-4xl font-black ${passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                {pct}%
              </div>
              <div className="text-sm text-slate-400">
                {hits} de {total} acertos
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveMode(null)}
              className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-emerald-400"
            >
              Escolher Outro Simulado
            </button>
          </div>
        </div>

        {wrongList.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              🔍 Revisão Comentada das {wrongList.length} Questões Erradas:
            </h3>
            {wrongList.map((w, i) => {
              const rightOpt = w.question._opts.find((o) => o.correta) || {};
              return (
                <div
                  key={w.question.id + i}
                  className="rounded-2xl border border-rose-500/30 bg-slate-900/80 p-5"
                >
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-rose-400">
                      Módulo {w.question.moduloId} {w.question.codigoItem ? `• Item ${w.question.codigoItem}` : ''}
                    </span>
                    <span>PD {w.question.codigoPD}</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{w.question.enunciado}</p>
                  <p className="mt-2 text-sm text-rose-400">
                    ❌ <b>Você marcou:</b> {w.chosen.texto}
                  </p>
                  <p className="mt-1 text-sm text-emerald-400">
                    ✅ <b>Correta:</b> {rightOpt.texto}
                  </p>
                  <div className="mt-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs leading-relaxed text-slate-200">
                    <b>Gabarito Oficial:</b> {w.question.gabaritoComentado || rightOpt.justificativa}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // --- VIEW 3: ACTIVE QUESTION (ASSISTED OR OFFICIAL) ---
  const q = questions[idx];
  if (!q) return null;
  const letters = ['A', 'B', 'C', 'D'];
  const isFav = !!favoriteQuestions[q.id];

  return (
    <div className="space-y-4">
      {/* Top Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-slate-800 px-3 py-1 font-mono text-xs font-bold text-white">
            Questão {idx + 1} / {questions.length}
          </span>
          <span className="rounded-lg bg-sky-500/15 px-2.5 py-1 text-xs font-bold text-sky-400">
            Módulo {q.moduloId}
          </span>
          {q.codigoItem && (
            <span className="rounded-lg bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-400">
              Oficial {q.codigoItem}
            </span>
          )}
          {!activeMode.assisted && (
            <span className="inline-flex items-center gap-1 rounded-lg bg-amber-500/15 px-2.5 py-1 text-xs font-bold text-amber-400">
              <Lock className="h-3 w-3" /> Sem retorno
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowHP(!showHP)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
              showHP
                ? 'border-amber-500/50 bg-amber-500/15 text-amber-300'
                : 'border-slate-700 bg-slate-800 text-slate-300'
            }`}
          >
            🧮 {showHP ? 'Ocultar HP 12C' : 'Abrir HP 12C'}
          </button>
          <span className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-emerald-400">
            <Clock className="h-4 w-4" /> {formatTimer(secondsLeft)}
          </span>
          <button
            onClick={() => handleFinish(answers)}
            className="rounded-lg bg-rose-500/20 px-3 py-1.5 text-xs font-bold text-rose-400 hover:bg-rose-500/30"
          >
            Encerrar
          </button>
        </div>
      </div>

      {/* Main Split: Question Left + HP 12C & Scratchpad Right */}
      <div className={`grid grid-cols-1 gap-5 ${showHP ? 'xl:grid-cols-12' : ''}`}>
        <div className={showHP ? 'xl:col-span-7' : 'mx-auto w-full max-w-4xl'}>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-400">
                {q.topicoPD || `PD ${q.codigoPD}`} • {q.dificuldade || 'Médio'}
              </span>
              <div className="flex items-center gap-2">
                {activeMode.assisted && (
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="inline-flex items-center gap-1 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-bold text-amber-300 hover:bg-amber-500/20"
                  >
                    <Lightbulb className="h-3.5 w-3.5" /> {showHint ? 'Ocultar Dica' : 'Dica do Professor'}
                  </button>
                )}
                <button
                  onClick={() => onToggleFavorite(q.id)}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-bold ${
                    isFav
                      ? 'border-amber-500/40 bg-amber-500/15 text-amber-300'
                      : 'border-slate-700 bg-slate-800 text-slate-400'
                  }`}
                >
                  <Star className="inline h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {showHint && (
              <div className="mb-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs leading-relaxed text-amber-200">
                <b>💡 Dica de Resolução:</b> Identifique o comando final do enunciado, verifique o tópico{' '}
                <b>{q.topicoPD || q.codigoPD}</b> e elimine as 2 alternativas que contradizem a regra da ANBIMA/CVM.
              </div>
            )}

            <div className="mb-4 rounded-xl border-l-4 border-sky-500 bg-slate-950/70 p-4 text-sm leading-relaxed text-slate-300">
              {q.contexto}
            </div>

            <h3 className="mb-4 text-base font-bold text-white">{q.enunciado}</h3>

            <div className="space-y-2.5">
              {q._opts.map((opt, i) => {
                const isSelected = selectedOpt === i;
                const isElim = !!eliminated[i];
                let style = 'border-slate-700 bg-slate-950/70 hover:border-emerald-500/60';
                if (revealed) {
                  if (opt.correta) style = 'border-emerald-500 bg-emerald-500/15';
                  else if (isSelected) style = 'border-rose-500 bg-rose-500/15';
                  else style = 'border-slate-800 bg-slate-950/40 opacity-75';
                } else if (isSelected) {
                  style = 'border-sky-500 bg-sky-500/15';
                }

                return (
                  <div key={i} className="flex items-stretch gap-2">
                    <button
                      type="button"
                      disabled={revealed}
                      onClick={() => setSelectedOpt(i)}
                      className={`flex-1 rounded-xl border p-3.5 text-left transition ${style} ${
                        isElim && !revealed ? 'line-through opacity-40' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold ${
                            revealed && opt.correta
                              ? 'bg-emerald-500 text-slate-950'
                              : revealed && isSelected
                              ? 'bg-rose-500 text-white'
                              : isSelected
                              ? 'bg-sky-500 text-slate-950'
                              : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {letters[i]}
                        </span>
                        <span className="text-sm leading-relaxed text-slate-100">{opt.texto}</span>
                      </div>

                      {revealed && opt.justificativa && (
                        <div className="mt-2.5 border-t border-slate-800 pt-2 text-xs leading-relaxed text-slate-300">
                          <span className={opt.correta ? 'font-bold text-emerald-400' : 'font-bold text-rose-400'}>
                            {opt.correta ? '✅ Gabarito Oficial: ' : '❌ Por que está errada: '}
                          </span>
                          {opt.justificativa}
                        </div>
                      )}
                    </button>

                    {!revealed && (
                      <button
                        type="button"
                        onClick={() => setEliminated((e) => ({ ...e, [i]: !e[i] }))}
                        title="Riscar alternativa"
                        className="flex w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-500 hover:border-rose-500/40 hover:text-rose-400"
                      >
                        <Scissors className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              {activeMode.assisted ? (
                !revealed ? (
                  <button
                    disabled={selectedOpt === null}
                    onClick={handleConfirmAssisted}
                    className="rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-40"
                  >
                    Verificar Resposta & Ver Explicação
                  </button>
                ) : (
                  <div className="w-full space-y-3">
                    <div
                      className={`rounded-xl border p-4 text-sm ${
                        q._opts[selectedOpt]?.correta
                          ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                          : 'border-rose-500/40 bg-rose-500/10 text-rose-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold">
                        {q._opts[selectedOpt]?.correta ? (
                          <>
                            <CheckCircle2 className="h-5 w-5 text-emerald-400" /> Resposta Correta!
                          </>
                        ) : (
                          <>
                            <XCircle className="h-5 w-5 text-rose-400" /> Resposta Incorreta — Analise as justificativas acima.
                          </>
                        )}
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-200">
                        <b>Síntese do Conceito:</b> {q.gabaritoComentado}
                      </p>
                    </div>
                    <button
                      onClick={handleNextAssisted}
                      className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-bold text-slate-950 hover:bg-emerald-400"
                    >
                      {idx + 1 >= questions.length ? 'Finalizar Simulado' : 'Próxima Questão'}{' '}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )
              ) : (
                <button
                  disabled={selectedOpt === null}
                  onClick={handleConfirmOfficialAndNext}
                  className="ml-auto flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-bold text-slate-950 hover:bg-emerald-400 disabled:opacity-40"
                >
                  Confirmar e Avançar 🔒 <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: HP 12C + Scratchpad */}
        {showHP && (
          <div className="space-y-4 xl:col-span-5">
            <HP12C />
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                📝 Rascunho Digital (Prova Eletrônica)
              </div>
              <textarea
                value={scratchpad}
                onChange={(e) => setScratchpad(e.target.value)}
                placeholder="Anote taxas, prazos, reserva mínima (3x), parcela máx (20%)..."
                className="h-24 w-full rounded-xl border border-slate-800 bg-slate-950 p-3 font-mono text-xs text-slate-200 outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
