import { useState } from 'react';
import { useAppData } from '../../context/contexts';
import { pct } from '../../lib/utils';
import { buildSimulation } from './modes';
import SimuladoHub from './SimuladoHub';
import SimuladoResult from './SimuladoResult';
import SimuladoRunner from './SimuladoRunner';

export default function Simulados() {
  const { modules, allQuestions, answered, questionSrs, saveSimulation, cert } = useAppData();
  const [phase, setPhase] = useState('hub');
  const [simulation, setSimulation] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [runKey, setRunKey] = useState(0);

  const start = (modeId) => {
    const built = buildSimulation(modeId, { cert, modules, allQuestions, answered, questionSrs });
    if (built.error) {
      setError(built.error);
      setPhase('hub');
      return;
    }
    setError('');
    setSimulation(built);
    setResult(null);
    setRunKey((k) => k + 1);
    setPhase('run');
  };

  const handleFinish = (res) => {
    const { questions, answers } = res;
    const total = questions.length;
    const correctAnswers = questions.filter((q) => answers[q.id]?.correct).length;
    const scorePct = pct(correctAnswers, total);
    saveSimulation({
      mode: `${cert.name} · ${res.label}`,
      totalQuestions: total,
      correctAnswers,
      scorePct,
      passed: scorePct >= cert.passThreshold,
      durationSeconds: Math.round(res.durationSeconds),
      details: questions.map((q) => ({
        id: q.id,
        moduloId: q.moduloId,
        correct: !!answers[q.id]?.correct,
        answered: !!answers[q.id],
      })),
    });
    setResult(res);
    setPhase('result');
  };

  const backToHub = () => {
    setPhase('hub');
    setSimulation(null);
    setResult(null);
  };

  if (phase === 'run' && simulation) {
    return (
      <SimuladoRunner
        key={runKey}
        simulation={simulation}
        onFinish={handleFinish}
        onExit={backToHub}
      />
    );
  }

  if (phase === 'result' && result) {
    return <SimuladoResult result={result} cert={cert} onRetry={() => start(result.mode)} onBack={backToHub} />;
  }

  return <SimuladoHub onStart={start} error={error} />;
}
