import React, { useState, useEffect, useMemo } from 'react';
import {
  LayoutDashboard,
  Target,
  BookOpen,
  MessageSquare,
  Zap,
  Calculator,
  Database,
  CheckCircle2,
  XCircle,
  Search,
  Star,
  Scissors,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Play,
  Pause,
  RotateCcw,
  X,
  FileText,
  Sparkles,
} from 'lucide-react';
import { api } from './api';
import HP12C from './components/HP12C';
import SimulatorsHub from './components/SimulatorsHub';

function shuffle(arr) {
  const copy = [...(arr || [])];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const NAV_ITEMS = [
  { id: 'simulados', label: 'Simulados & Assistido', icon: Target, badge: '8 Modos' },
  { id: 'dashboard', label: 'Painel Executivo', icon: LayoutDashboard },
  { id: 'questoes', label: 'Banco de Questões', icon: Sparkles, badge: '148Q' },
  { id: 'mapas', label: 'Mapas de Decisão', icon: MessageSquare, badge: '10' },
  { id: 'estudo', label: 'Apostila & Tabelas', icon: BookOpen, badge: '38' },
  { id: 'flashcards', label: 'Flashcards 3D', icon: Zap, badge: '78' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('simulados');
  const [loading, setLoading] = useState(true);
  const [dbOnline, setDbOnline] = useState(false);

  // Server data
  const [modules, setModules] = useState([]);
  const [maps, setMaps] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [studyMaterials, setStudyMaterials] = useState([]);
  const [sprintBlocks, setSprintBlocks] = useState([]);

  // User progress state
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [favoriteQuestions, setFavoriteQuestions] = useState({});
  const [masteredTopics, setMasteredTopics] = useState({});
  const [completedCases, setCompletedCases] = useState({});
  const [sprintDone, setSprintDone] = useState({});
  const [simulations, setSimulations] = useState([]);

  // Global UI
  const [hpOpen, setHpOpen] = useState(false);
  const [pomoSec, setPomoSec] = useState(50 * 60);
  const [pomoRun, setPomoRun] = useState(false);

  // Question Bank state
  const [qMod, setQMod] = useState('all');
  const [qOrigin, setQOrigin] = useState('all');
  const [qSearch, setQSearch] = useState('');
  const [qIdx, setQIdx] = useState(0);
  const [qSelected, setQSelected] = useState(null);
  const [qRevealed, setQRevealed] = useState(false);
  const [qElim, setQElim] = useState({});

  // Decision Maps state
  const [mapIdx, setMapIdx] = useState(0);
  const [mapNode, setMapNode] = useState('1');
  const [mapScore, setMapScore] = useState(0);
  const [mapHistory, setMapHistory] = useState([]);
  const [mapQAnswers, setMapQAnswers] = useState({});

  // Study state
  const [studyModId, setStudyModId] = useState(2);
  const [studySubTab, setStudySubTab] = useState('topics'); // 'topics' | 'apostilas'
  const [selectedApostilaId, setSelectedApostilaId] = useState('modulo2');

  // Flashcards state
  const [fcMod, setFcMod] = useState('all');
  const [fcIdx, setFcIdx] = useState(0);
  const [fcFlip, setFcFlip] = useState(false);

  useEffect(() => {
    async function loadAll() {
      try {
        const [boot, modsRes, mapsRes, anaRes, matRes] = await Promise.all([
          api.getBootstrap(),
          api.getModules(),
          api.getMaps(),
          api.getAnalytics(),
          api.getStudyMaterials(),
        ]);
        setDbOnline(true);
        setModules(modsRes.modules || []);
        setMaps(mapsRes.maps || []);
        setAnalytics(anaRes);
        setStudyMaterials(matRes.materials || []);
        setSprintBlocks(boot.sprintBlocks || []);
        setAnsweredQuestions(boot.answeredQuestions || {});
        setFavoriteQuestions(boot.favoriteQuestions || {});
        setMasteredTopics(boot.masteredTopics || {});
        setCompletedCases(boot.completedCases || {});
        setSprintDone(boot.sprintDone || {});
        setSimulations(boot.simulations || []);
      } catch (err) {
        console.error('Erro ao conectar com backend:', err);
      } finally {
        setLoading(false);
      }
    }
    loadAll();
  }, []);

  useEffect(() => {
    if (!pomoRun) return;
    const t = setInterval(() => {
      setPomoSec((s) => (s > 0 ? s - 1 : 50 * 60));
    }, 1000);
    return () => clearInterval(t);
  }, [pomoRun]);

  // Handlers with PostgreSQL persistence
  const handleAnswerQuestion = (questionId, correct, chosenText) => {
    setAnsweredQuestions((prev) => ({ ...prev, [questionId]: { correct, chosenText } }));
    api.answerQuestion(questionId, correct, chosenText).catch(console.error);
  };

  const handleToggleFavorite = (questionId) => {
    setFavoriteQuestions((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
    api.toggleFavorite(questionId).catch(console.error);
  };

  const handleToggleTopic = (key) => {
    setMasteredTopics((prev) => ({ ...prev, [key]: !prev[key] }));
    api.toggleTopic(key).catch(console.error);
  };

  const handleCompleteMap = (mapId, score) => {
    setCompletedCases((prev) => ({ ...prev, [mapId]: { completed: true, bestScore: score } }));
    api.completeMap(mapId, score).catch(console.error);
  };

  const handleToggleSprint = (blockId) => {
    const next = !sprintDone[blockId];
    setSprintDone((prev) => ({ ...prev, [blockId]: next }));
    api.toggleSprint(blockId, next).catch(console.error);
  };

  const handleSaveSimulation = async (payload) => {
    try {
      const saved = await api.saveSimulation(payload);
      setSimulations((prev) => [saved.simulation || payload, ...prev]);
    } catch (e) {
      setSimulations((prev) => [payload, ...prev]);
    }
  };

  // Filtered Question Bank
  const filteredQuestions = useMemo(() => {
    const list = [];
    modules.forEach((m) => {
      if (qMod !== 'all' && String(m.id) !== qMod) return;
      (m.questoes || []).forEach((q) => list.push({ ...q, moduloId: m.id }));
    });
    return list.filter((q) => {
      if (qOrigin === 'oficial' && !q.oficial) return false;
      if (qOrigin === 'inedita' && q.oficial) return false;
      if (qOrigin === 'wrong' && !(answeredQuestions[q.id] && !answeredQuestions[q.id].correct)) return false;
      if (qOrigin === 'fav' && !favoriteQuestions[q.id]) return false;
      if (qSearch.trim()) {
        const s = qSearch.toLowerCase();
        const hay = `${q.codigoItem || ''} ${q.topicoPD || ''} ${q.contexto} ${q.enunciado}`.toLowerCase();
        if (!hay.includes(s)) return false;
      }
      return true;
    });
  }, [modules, qMod, qOrigin, qSearch, answeredQuestions, favoriteQuestions]);

  const currentBankQ = filteredQuestions[qIdx];
  const currentBankOpts = useMemo(() => {
    if (!currentBankQ) return [];
    return shuffle(currentBankQ.alternativas || []);
  }, [currentBankQ?.id]);

  // Flashcards pool
  const fcPool = useMemo(() => {
    const list = [];
    modules.forEach((m) => {
      if (fcMod !== 'all' && String(m.id) !== fcMod) return;
      (m.flashcards || []).forEach((f) => list.push({ ...f, moduloId: m.id }));
    });
    return list;
  }, [modules, fcMod]);

  // Keyboard shortcuts for Flashcards
  useEffect(() => {
    if (activeTab !== 'flashcards') return;
    const onKey = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setFcFlip((f) => !f);
      } else if (e.code === 'ArrowRight' && fcIdx < fcPool.length - 1) {
        setFcIdx((i) => i + 1);
        setFcFlip(false);
      } else if (e.code === 'ArrowLeft' && fcIdx > 0) {
        setFcIdx((i) => i - 1);
        setFcFlip(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeTab, fcIdx, fcPool.length]);

  // Global KPIs
  const totalQCount = useMemo(
    () => modules.reduce((acc, m) => acc + (m.questoes?.length || 0), 0),
    [modules]
  );
  const answeredCount = Object.keys(answeredQuestions).length;
  const hitCount = Object.values(answeredQuestions).filter((a) => a.correct).length;
  const accPct = answeredCount ? Math.round((hitCount / answeredCount) * 100) : 0;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#090d16] text-white">
        <div className="text-center">
          <div className="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
          <p className="text-sm font-semibold text-slate-400">
            Conectando ao PostgreSQL <code className="text-emerald-400">cpa-ambima</code>...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#090d16] text-slate-100">
      {/* SIDEBAR EXECUTIVA */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-800/80 bg-[#0b101b] lg:flex">
        <div className="flex items-center gap-3 border-b border-slate-800/80 px-5 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 font-black text-slate-950 shadow-lg shadow-emerald-500/20">
            CPA
          </div>
          <div>
            <div className="text-sm font-extrabold tracking-tight text-white">CPA Pro Mastery</div>
            <div className="text-[11px] font-medium text-slate-400">ANBIMA 2026 • Terminal</div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                  active
                    ? 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </span>
                {item.badge && (
                  <span className="rounded-md bg-slate-800 px-2 py-0.5 font-mono text-[11px] text-slate-300">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-slate-800/80 p-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Aproveitamento</span>
              <span className={`font-mono font-bold ${accPct >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {accPct}%
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all"
                style={{ width: `${accPct}%` }}
              />
            </div>
            <div className="mt-2 text-[11px] text-slate-500">
              {hitCount}/{answeredCount} acertos • Meta: 70%+
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* TOPBAR */}
        <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 bg-[#090d16]/90 px-5 py-3 backdrop-blur-md">
          {/* Mobile Nav */}
          <div className="flex items-center gap-2 overflow-x-auto lg:hidden">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold ${
                  activeTab === item.id
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                dbOnline
                  ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                  : 'border-amber-500/30 bg-amber-500/10 text-amber-400'
              }`}
            >
              <Database className="h-3.5 w-3.5" />
              {dbOnline ? `PostgreSQL: cpa-ambima (${totalQCount}Q)` : 'Modo Offline'}
            </span>
          </div>

          <div className="flex items-center gap-2.5 ml-auto">
            {/* Pomodoro */}
            <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs">
              <span className="text-slate-400">🍅 Foco</span>
              <span className="font-mono font-bold text-emerald-400">
                {String(Math.floor(pomoSec / 60)).padStart(2, '0')}:
                {String(pomoSec % 60).padStart(2, '0')}
              </span>
              <button onClick={() => setPomoRun(!pomoRun)} className="text-slate-300 hover:text-white">
                {pomoRun ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              </button>
              <button
                onClick={() => {
                  setPomoRun(false);
                  setPomoSec(50 * 60);
                }}
                className="text-slate-400 hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>

            <button
              onClick={() => setHpOpen(!hpOpen)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-3.5 py-1.5 text-xs font-extrabold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
            >
              <Calculator className="h-3.5 w-3.5" /> HP 12C
            </button>
          </div>
        </header>

        {/* PAGE BODY */}
        <main className="flex-1 p-5 md:p-7">
          {activeTab === 'simulados' && (
            <SimulatorsHub
              modules={modules}
              answeredQuestions={answeredQuestions}
              favoriteQuestions={favoriteQuestions}
              simulationsHistory={simulations}
              onAnswerQuestion={handleAnswerQuestion}
              onToggleFavorite={handleToggleFavorite}
              onSaveSimulation={handleSaveSimulation}
            />
          )}

          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {modules.map((m) => {
                  const qs = m.questoes || [];
                  const ans = qs.filter((q) => answeredQuestions[q.id]);
                  const hits = ans.filter((q) => answeredQuestions[q.id].correct).length;
                  const pct = ans.length ? Math.round((hits / ans.length) * 100) : 0;
                  return (
                    <div
                      key={m.id}
                      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-300">Módulo {m.id}</span>
                        <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-bold text-emerald-400">
                          Peso {m.peso}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 min-h-[36px] text-xs text-slate-400">{m.titulo}</p>
                      <div className="mt-3 font-mono text-2xl font-extrabold text-white">
                        {pct}%{' '}
                        <span className="text-xs font-normal text-slate-400">
                          ({hits}/{ans.length}Q)
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button
                          onClick={() => {
                            setQMod(String(m.id));
                            setQIdx(0);
                            setActiveTab('questoes');
                          }}
                          className="flex-1 rounded-lg bg-slate-800 py-1.5 text-xs font-bold text-slate-200 hover:bg-slate-700"
                        >
                          Questões ({qs.length})
                        </button>
                        <button
                          onClick={() => {
                            setStudyModId(m.id);
                            setActiveTab('estudo');
                          }}
                          className="flex-1 rounded-lg bg-emerald-500/15 py-1.5 text-xs font-bold text-emerald-400 hover:bg-emerald-500/25"
                        >
                          Apostila
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {analytics?.readinessScore !== undefined && (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-white">
                        Readiness Score Ponderado (20% / 40% / 30% / 10%)
                      </h3>
                      <p className="text-xs text-slate-400">
                        Calculado em tempo real no PostgreSQL <code>cpa-ambima</code>
                      </p>
                    </div>
                    <div className="font-mono text-3xl font-black text-emerald-400">
                      {analytics.readinessScore}%
                    </div>
                  </div>
                </div>
              )}

              {sprintBlocks.length > 0 && (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <h3 className="mb-3 text-base font-bold text-white">
                    📅 Cronograma Sprint até Terça-Feira
                  </h3>
                  <div className="divide-y divide-slate-800">
                    {sprintBlocks.map((b) => (
                      <label
                        key={b.id}
                        className="flex cursor-pointer items-start gap-3 py-3 hover:bg-slate-800/30"
                      >
                        <input
                          type="checkbox"
                          checked={!!sprintDone[b.id]}
                          onChange={() => handleToggleSprint(b.id)}
                          className="mt-1 h-4 w-4 accent-emerald-500"
                        />
                        <div className={sprintDone[b.id] ? 'opacity-50 line-through' : ''}>
                          <div className="text-sm font-bold text-white">
                            {b.dia} • {b.horario} — {b.titulo}
                          </div>
                          <div className="text-xs text-slate-400">{b.modulo_foco} ({b.peso_foco})</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'questoes' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <select
                  value={qMod}
                  onChange={(e) => {
                    setQMod(e.target.value);
                    setQIdx(0);
                    setQSelected(null);
                    setQRevealed(false);
                  }}
                  className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                >
                  <option value="all">Todos os Módulos</option>
                  <option value="2">Módulo 2 — Produtos (40%)</option>
                  <option value="3">Módulo 3 — Cliente & Ética (30%)</option>
                  <option value="1">Módulo 1 — SFN & Economia (20%)</option>
                  <option value="4">Módulo 4 — Inovação (10%)</option>
                </select>
                <select
                  value={qOrigin}
                  onChange={(e) => {
                    setQOrigin(e.target.value);
                    setQIdx(0);
                    setQSelected(null);
                    setQRevealed(false);
                  }}
                  className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                >
                  <option value="all">Todas (121 Oficiais + 27 Inéditas)</option>
                  <option value="oficial">Apenas Oficiais Cesgranrio</option>
                  <option value="inedita">Apenas Inéditas</option>
                  <option value="wrong">❌ Caderno de Erros</option>
                  <option value="fav">⭐ Favoritas</option>
                </select>
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    value={qSearch}
                    onChange={(e) => {
                      setQSearch(e.target.value);
                      setQIdx(0);
                    }}
                    placeholder="Buscar por código (ex: 000234) ou tema..."
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2 pl-9 pr-3 text-sm text-white outline-none focus:border-emerald-500"
                  />
                </div>
                <span className="rounded-lg bg-slate-800 px-3 py-1.5 font-mono text-xs font-bold text-slate-300">
                  {filteredQuestions.length ? `${qIdx + 1} / ${filteredQuestions.length}` : '0'}
                </span>
              </div>

              {currentBankQ ? (
                <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                  <div className="xl:col-span-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex gap-2">
                        <span className="rounded-lg bg-sky-500/15 px-2.5 py-1 text-xs font-bold text-sky-400">
                          Módulo {currentBankQ.moduloId}
                        </span>
                        <span className="rounded-lg bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-400">
                          {currentBankQ.oficial ? `Oficial ${currentBankQ.codigoItem || ''}` : 'Inédita'}
                        </span>
                      </div>
                      <button
                        onClick={() => handleToggleFavorite(currentBankQ.id)}
                        className={`rounded-lg border px-2.5 py-1 text-xs font-bold ${
                          favoriteQuestions[currentBankQ.id]
                            ? 'border-amber-500/40 bg-amber-500/15 text-amber-300'
                            : 'border-slate-700 bg-slate-800 text-slate-400'
                        }`}
                      >
                        <Star className="inline h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="mb-4 rounded-xl border-l-4 border-sky-500 bg-slate-950/70 p-4 text-sm text-slate-300">
                      {currentBankQ.contexto}
                    </div>
                    <h3 className="mb-4 text-base font-bold text-white">{currentBankQ.enunciado}</h3>

                    <div className="space-y-2.5">
                      {currentBankOpts.map((opt, i) => {
                        const letters = ['A', 'B', 'C', 'D'];
                        const isSel = qSelected === i;
                        let cls = 'border-slate-700 bg-slate-950/70 hover:border-emerald-500/50';
                        if (qRevealed) {
                          if (opt.correta) cls = 'border-emerald-500 bg-emerald-500/15';
                          else if (isSel) cls = 'border-rose-500 bg-rose-500/15';
                        } else if (isSel) {
                          cls = 'border-sky-500 bg-sky-500/15';
                        }
                        return (
                          <div key={i} className="flex gap-2">
                            <button
                              disabled={qRevealed}
                              onClick={() => {
                                setQSelected(i);
                                setQRevealed(true);
                                handleAnswerQuestion(currentBankQ.id, !!opt.correta, opt.texto);
                              }}
                              className={`flex-1 rounded-xl border p-3.5 text-left transition ${cls} ${
                                qElim[i] && !qRevealed ? 'line-through opacity-40' : ''
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs font-extrabold text-slate-200">
                                  {letters[i]}
                                </span>
                                <span className="text-sm text-slate-100">{opt.texto}</span>
                              </div>
                              {qRevealed && opt.justificativa && (
                                <div className="mt-2 border-t border-slate-800 pt-2 text-xs text-slate-300">
                                  <b className={opt.correta ? 'text-emerald-400' : 'text-rose-400'}>
                                    {opt.correta ? '✅ Gabarito: ' : '❌ Erro: '}
                                  </b>
                                  {opt.justificativa}
                                </div>
                              )}
                            </button>
                            {!qRevealed && (
                              <button
                                onClick={() => setQElim((e) => ({ ...e, [i]: !e[i] }))}
                                className="flex w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-500 hover:text-rose-400"
                              >
                                <Scissors className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {qRevealed && (
                      <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-slate-200">
                        <b>Gabarito Comentado:</b> {currentBankQ.gabaritoComentado}
                      </div>
                    )}
                  </div>

                  {/* Navigator */}
                  <div className="xl:col-span-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                    <div className="mb-3 flex gap-2">
                      <button
                        disabled={qIdx === 0}
                        onClick={() => {
                          setQIdx((i) => i - 1);
                          setQSelected(null);
                          setQRevealed(false);
                          setQElim({});
                        }}
                        className="flex-1 rounded-lg bg-slate-800 py-2 text-xs font-bold text-white disabled:opacity-40"
                      >
                        ◀ Anterior
                      </button>
                      <button
                        disabled={qIdx >= filteredQuestions.length - 1}
                        onClick={() => {
                          setQIdx((i) => i + 1);
                          setQSelected(null);
                          setQRevealed(false);
                          setQElim({});
                        }}
                        className="flex-1 rounded-lg bg-emerald-500 py-2 text-xs font-bold text-slate-950 disabled:opacity-40"
                      >
                        Próxima ▶
                      </button>
                    </div>
                    <div className="grid max-h-[380px] grid-cols-6 gap-1.5 overflow-y-auto pr-1">
                      {filteredQuestions.map((q, i) => {
                        const ans = answeredQuestions[q.id];
                        let dot = 'border-slate-800 bg-slate-950 text-slate-400';
                        if (ans) dot = ans.correct ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-400' : 'border-rose-500/50 bg-rose-500/20 text-rose-400';
                        if (i === qIdx) dot += ' ring-2 ring-sky-400';
                        return (
                          <button
                            key={q.id}
                            onClick={() => {
                              setQIdx(i);
                              setQSelected(null);
                              setQRevealed(false);
                              setQElim({});
                            }}
                            className={`h-8 rounded-lg border font-mono text-xs font-bold ${dot}`}
                          >
                            {i + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
                  Nenhuma questão encontrada para este filtro.
                </div>
              )}
            </div>
          )}

          {activeTab === 'mapas' && maps.length > 0 && (() => {
            const m = maps[mapIdx] || maps[0];
            const node = m.etapas?.[mapNode];
            const isEnd = !node || mapNode === 'END' || !node.opcoes?.length;
            return (
              <div className="mx-auto max-w-4xl space-y-4">
                <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <select
                    value={mapIdx}
                    onChange={(e) => {
                      setMapIdx(Number(e.target.value));
                      setMapNode('1');
                      setMapScore(0);
                      setMapHistory([]);
                      setMapQAnswers({});
                    }}
                    className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                  >
                    {maps.map((mp, i) => (
                      <option key={mp.id} value={i}>
                        {i + 1}. {mp.codigo_item ? `[Oficial ${mp.codigo_item}] ` : ''}
                        {mp.titulo || mp.topico_pd}
                      </option>
                    ))}
                  </select>
                  <span className="rounded-lg bg-emerald-500/15 px-3 py-1.5 font-mono text-xs font-bold text-emerald-400">
                    Pontos: {mapScore} / {m.limite || 5}
                  </span>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-4">
                  {mapHistory.length > 0 && (
                    <div className="max-h-60 space-y-2.5 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                      {mapHistory.map((h, i) => (
                        <div key={i} className="space-y-1.5 text-xs">
                          <div className="rounded-lg bg-slate-800/80 p-2.5 text-slate-200">
                            <b>Cliente ({h.etapa}):</b> "{h.falaCliente}"
                          </div>
                          <div
                            className={`ml-6 rounded-lg p-2.5 ${
                              h.peso > 0
                                ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
                                : 'border border-amber-500/30 bg-amber-500/10 text-amber-200'
                            }`}
                          >
                            <b>Você ({h.peso > 0 ? '+1 pt' : '0 pt'} → {h.proximo}):</b> "{h.resposta}"
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!isEnd ? (
                    <>
                      <div className="rounded-xl border-l-4 border-emerald-500 bg-slate-950 p-4 text-sm text-slate-200">
                        <div className="mb-1 text-xs font-bold uppercase text-emerald-400">
                          💬 Cliente (Etapa {mapNode})
                        </div>
                        "{node.falaCliente}"
                      </div>
                      <div className="space-y-2">
                        {node.opcoes.map((op, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              const nextScore = mapScore + (op.peso || 0);
                              setMapScore(nextScore);
                              setMapHistory((h) => [
                                ...h,
                                {
                                  etapa: mapNode,
                                  falaCliente: node.falaCliente,
                                  resposta: op.texto,
                                  peso: op.peso || 0,
                                  proximo: op.proximo,
                                },
                              ]);
                              setMapNode(op.proximo || 'END');
                              if (op.proximo === 'END') handleCompleteMap(m.id, nextScore);
                            }}
                            className="w-full rounded-xl border border-slate-700 bg-slate-950/70 p-3.5 text-left text-sm text-slate-100 hover:border-emerald-500"
                          >
                            {op.texto}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                        🏁 <b>Diálogo Concluído!</b> Pontuação: {mapScore} / {m.limite || 5}
                      </div>
                      {(m.questoes_objetivas || []).map((qo, qI) => (
                        <div key={qI} className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                          <div className="text-sm font-bold text-white">
                            {qI + 1}. {qo.enunciado}
                          </div>
                          {(qo.alternativas || []).map((alt, aI) => {
                            const chosen = mapQAnswers[qI];
                            const rev = chosen !== undefined;
                            let c = 'border-slate-800 bg-slate-900';
                            if (rev) {
                              if (alt.correta) c = 'border-emerald-500 bg-emerald-500/15';
                              else if (chosen === aI) c = 'border-rose-500 bg-rose-500/15';
                            }
                            return (
                              <button
                                key={aI}
                                disabled={rev}
                                onClick={() => setMapQAnswers((p) => ({ ...p, [qI]: aI }))}
                                className={`w-full rounded-lg border p-2.5 text-left text-xs text-slate-200 ${c}`}
                              >
                                {alt.texto}
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

          {activeTab === 'estudo' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setStudySubTab('topics')}
                    className={`rounded-xl px-4 py-2 text-xs font-bold ${
                      studySubTab === 'topics' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    📚 Tópicos do Edital
                  </button>
                  <button
                    onClick={() => setStudySubTab('apostilas')}
                    className={`rounded-xl px-4 py-2 text-xs font-bold ${
                      studySubTab === 'apostilas' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    <FileText className="mr-1 inline h-3.5 w-3.5" /> Apostilas Completas (Markdown)
                  </button>
                </div>

                {studySubTab === 'topics' ? (
                  <select
                    value={studyModId}
                    onChange={(e) => setStudyModId(Number(e.target.value))}
                    className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                  >
                    {modules.map((m) => (
                      <option key={m.id} value={m.id}>
                        Módulo {m.id} — {m.titulo} ({m.peso})
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    value={selectedApostilaId}
                    onChange={(e) => setSelectedApostilaId(e.target.value)}
                    className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                  >
                    {studyMaterials.map((mat) => (
                      <option key={mat.id} value={mat.id}>
                        {mat.title} ({mat.readingTimeMinutes} min)
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {studySubTab === 'topics' ? (
                <div className="space-y-4">
                  {(modules.find((m) => m.id === studyModId)?.topicos || []).map((t) => {
                    const key = `${studyModId}_${t.codigo}`;
                    const done = !!masteredTopics[key];
                    return (
                      <div
                        key={key}
                        className={`rounded-2xl border p-5 ${
                          done ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-slate-800 bg-slate-900/70'
                        }`}
                      >
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <h3 className="text-base font-bold text-white">
                            <span className="mr-2 rounded bg-sky-500/20 px-2 py-0.5 font-mono text-xs text-sky-400">
                              {t.codigo}
                            </span>
                            {t.titulo}
                          </h3>
                          <button
                            onClick={() => handleToggleTopic(key)}
                            className={`rounded-lg px-3 py-1 text-xs font-bold ${
                              done ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {done ? '✅ Dominado' : 'Marcar Dominado'}
                          </button>
                        </div>
                        <div
                          className="prose prose-invert max-w-none text-sm text-slate-300"
                          dangerouslySetInnerHTML={{ __html: t.explicacao }}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-200">
                    {studyMaterials.find((m) => m.id === selectedApostilaId)?.content || 'Carregando...'}
                  </pre>
                </div>
              )}
            </div>
          )}

          {activeTab === 'flashcards' && fcPool.length > 0 && (
            <div className="mx-auto max-w-2xl space-y-5">
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <select
                  value={fcMod}
                  onChange={(e) => {
                    setFcMod(e.target.value);
                    setFcIdx(0);
                    setFcFlip(false);
                  }}
                  className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                >
                  <option value="all">Todos os Módulos ({fcPool.length})</option>
                  <option value="2">Módulo 2</option>
                  <option value="3">Módulo 3</option>
                  <option value="1">Módulo 1</option>
                  <option value="4">Módulo 4</option>
                </select>
                <span className="font-mono text-xs font-bold text-slate-400">
                  {fcIdx + 1} / {fcPool.length}
                </span>
              </div>

              <div
                onClick={() => setFcFlip(!fcFlip)}
                className="perspective-1200 h-72 cursor-pointer"
              >
                <div
                  className={`preserve-3d relative h-full w-full transition-transform duration-500 ${
                    fcFlip ? 'rotate-y-180' : ''
                  }`}
                >
                  <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center shadow-2xl">
                    <span className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-400">
                      Pergunta • Módulo {fcPool[fcIdx].moduloId}
                    </span>
                    <div
                      className="text-lg font-semibold text-white"
                      dangerouslySetInnerHTML={{ __html: fcPool[fcIdx].frente }}
                    />
                  </div>
                  <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-emerald-500/50 bg-slate-900 p-8 text-center shadow-2xl">
                    <span className="mb-3 text-xs font-bold uppercase tracking-widest text-sky-400">
                      Resposta Oficial
                    </span>
                    <div
                      className="text-base text-slate-200"
                      dangerouslySetInnerHTML={{ __html: fcPool[fcIdx].verso }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  disabled={fcIdx === 0}
                  onClick={() => {
                    setFcIdx((i) => i - 1);
                    setFcFlip(false);
                  }}
                  className="flex items-center gap-1 rounded-xl bg-slate-800 px-4 py-2 text-sm font-bold text-white disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" /> Anterior
                </button>
                <button
                  onClick={() => setFcFlip(!fcFlip)}
                  className="flex items-center gap-1 rounded-xl bg-emerald-500 px-5 py-2 text-sm font-bold text-slate-950"
                >
                  <RotateCw className="h-4 w-4" /> Virar (Espaço)
                </button>
                <button
                  disabled={fcIdx >= fcPool.length - 1}
                  onClick={() => {
                    setFcIdx((i) => i + 1);
                    setFcFlip(false);
                  }}
                  className="flex items-center gap-1 rounded-xl bg-slate-800 px-4 py-2 text-sm font-bold text-white disabled:opacity-40"
                >
                  Próximo <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* GLOBAL FLOATING HP 12C */}
      {hpOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-[540px] max-w-[calc(100vw-24px)] shadow-2xl">
          <div className="mb-1 flex justify-end">
            <button
              onClick={() => setHpOpen(false)}
              className="rounded-full bg-slate-800 p-1.5 text-slate-300 hover:bg-rose-500 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <HP12C />
        </div>
      )}
    </div>
  );
}
