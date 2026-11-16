import { useCallback, useEffect, useMemo, useState } from 'react';
import { api } from '../lib/api';
import { usePersistentState } from '../hooks/usePersistentState';
import { CERTIFICATIONS, DEFAULT_CERTIFICATION } from '../lib/certifications';
import { nextState } from '../lib/srs';
import { AppDataContext, UiContext } from './contexts';

export default function AppProvider({ children }) {
  const [status, setStatus] = useState('loading'); // loading | online | offline
  const [error, setError] = useState(null);

  const [modules, setModules] = useState([]);
  const [maps, setMaps] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [sprintBlocks, setSprintBlocks] = useState([]);

  const [answered, setAnswered] = useState({});
  const [favorites, setFavorites] = useState({});
  const [mastered, setMastered] = useState({});
  const [completedMaps, setCompletedMaps] = useState({});
  const [sprintDone, setSprintDone] = useState({});
  const [simulations, setSimulations] = useState([]);

  const [certId, setCertId] = usePersistentState('cpa.cert', DEFAULT_CERTIFICATION);
  const [examDate, setExamDate] = usePersistentState('cpa.examDate', '');
  const [cardSrs, setCardSrs] = usePersistentState('cpa.srs.cards', {});
  const [questionSrs, setQuestionSrs] = usePersistentState('cpa.srs.questions', {});
  const [errorLog, setErrorLog] = usePersistentState('cpa.errorLog', {});
  const cert = CERTIFICATIONS[certId] || CERTIFICATIONS[DEFAULT_CERTIFICATION];

  const [view, setView] = useState('dashboard');
  const [params, setParams] = useState({});
  const [calcOpen, setCalcOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const load = useCallback(async ({ initial = false } = {}) => {
    if (!initial) {
      setStatus('loading');
      setError(null);
    }
    try {
      const data = await api.loadAll();
      const { boot } = data;
      setModules(data.modules);
      setMaps(data.maps);
      setAnalytics(data.analytics);
      setMaterials(data.materials);
      setSprintBlocks(boot.sprintBlocks || []);
      setAnswered(boot.answeredQuestions || {});
      setFavorites(boot.favoriteQuestions || {});
      setMastered(boot.masteredTopics || {});
      setCompletedMaps(boot.completedCases || {});
      setSprintDone(boot.sprintDone || {});
      setSimulations(boot.simulations || []);
      setStatus('online');
    } catch (err) {
      setError(err.message);
      setStatus('offline');
    }
  }, []);

  useEffect(() => {
    // Carga inicial de dados externos (API)
    // oxlint-disable-next-line react/set-state-in-effect
    load({ initial: true });
  }, [load]);

  const allQuestions = useMemo(
    () =>
      modules.flatMap((m) =>
        (m.questoes || []).map((q) => ({ ...q, moduloId: m.id, moduloTitulo: m.titulo }))
      ),
    [modules]
  );

  const stats = useMemo(() => {
    const answeredCount = Object.keys(answered).length;
    const hitCount = Object.values(answered).filter((a) => a.correct).length;
    return {
      totalQuestions: allQuestions.length,
      answeredCount,
      hitCount,
      wrongCount: answeredCount - hitCount,
      accuracy: answeredCount ? Math.round((hitCount / answeredCount) * 100) : 0,
    };
  }, [answered, allQuestions]);

  const answerQuestion = useCallback((questionId, correct, chosenText) => {
    setAnswered((prev) => ({ ...prev, [questionId]: { correct, chosenText } }));
    setQuestionSrs((prev) => ({ ...prev, [questionId]: nextState(prev[questionId], correct ? 'good' : 'again') }));
    api.answerQuestion(questionId, correct, chosenText).catch(console.error);
  }, [setQuestionSrs]);

  const gradeCard = useCallback(
    (cardId, grade) => setCardSrs((prev) => ({ ...prev, [cardId]: nextState(prev[cardId], grade) })),
    [setCardSrs]
  );

  const tagError = useCallback(
    (questionId, reason) => setErrorLog((prev) => ({ ...prev, [questionId]: reason })),
    [setErrorLog]
  );

  const toggleFavorite = useCallback((questionId) => {
    setFavorites((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
    api.toggleFavorite(questionId).catch(console.error);
  }, []);

  const toggleTopic = useCallback((key) => {
    setMastered((prev) => ({ ...prev, [key]: !prev[key] }));
    api.toggleTopic(key).catch(console.error);
  }, []);

  const completeMap = useCallback((mapId, score) => {
    setCompletedMaps((prev) => ({
      ...prev,
      [mapId]: { completed: true, bestScore: Math.max(prev[mapId]?.bestScore || 0, score) },
    }));
    api.completeMap(mapId, score).catch(console.error);
  }, []);

  const toggleSprint = useCallback(
    (blockId) => {
      const next = !sprintDone[blockId];
      setSprintDone((prev) => ({ ...prev, [blockId]: next }));
      api.toggleSprint(blockId, next).catch(console.error);
    },
    [sprintDone]
  );

  const saveSimulation = useCallback(async (payload) => {
    try {
      const saved = await api.saveSimulation(payload);
      setSimulations((prev) => [saved.simulation || saved || payload, ...prev]);
    } catch {
      setSimulations((prev) => [payload, ...prev]);
    }
  }, []);

  const data = useMemo(
    () => ({
      status,
      error,
      reload: load,
      modules,
      maps,
      analytics,
      materials,
      sprintBlocks,
      allQuestions,
      answered,
      favorites,
      mastered,
      completedMaps,
      sprintDone,
      simulations,
      stats,
      answerQuestion,
      toggleFavorite,
      toggleTopic,
      completeMap,
      toggleSprint,
      saveSimulation,
      cert,
      setCertification: setCertId,
      examDate,
      setExamDate,
      cardSrs,
      questionSrs,
      gradeCard,
      errorLog,
      tagError,
    }),
    [
      status, error, load, modules, maps, analytics, materials, sprintBlocks, allQuestions,
      answered, favorites, mastered, completedMaps, sprintDone, simulations, stats,
      answerQuestion, toggleFavorite, toggleTopic, completeMap, toggleSprint, saveSimulation,
      cert, setCertId, examDate, setExamDate, cardSrs, questionSrs, gradeCard, errorLog, tagError,
    ]
  );

  const navigate = useCallback((nextView, nextParams = {}) => {
    setView(nextView);
    setParams(nextParams);
    setPaletteOpen(false);
  }, []);

  const ui = useMemo(
    () => ({
      view,
      params,
      navigate,
      calcOpen,
      setCalcOpen,
      toggleCalc: () => setCalcOpen((o) => !o),
      paletteOpen,
      setPaletteOpen,
    }),
    [view, params, navigate, calcOpen, paletteOpen]
  );

  return (
    <AppDataContext.Provider value={data}>
      <UiContext.Provider value={ui}>{children}</UiContext.Provider>
    </AppDataContext.Provider>
  );
}
