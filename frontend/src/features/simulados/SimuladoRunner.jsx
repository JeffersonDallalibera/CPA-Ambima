import { useEffect, useRef, useState } from 'react';
import { useAppData, useUi } from '../../context/contexts';
import { useCountdown } from '../../hooks/useCountdown';
import { useHotkeys } from '../../hooks/useHotkeys';
import ExitDialog from './ExitDialog';
import QuestionStage from './QuestionStage';
import RunnerSidebar from './RunnerSidebar';
import RunnerTopBar from './RunnerTopBar';

const PICK_KEYS = ['a', 'b', 'c', 'd', 'e'];

export default function SimuladoRunner({ simulation, onFinish, onExit }) {
  const { mode, label, assisted, durationSeconds, questions } = simulation;
  const { favorites, answerQuestion, toggleFavorite } = useAppData();
  const { toggleCalc } = useUi();

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [picks, setPicks] = useState({});
  const [eliminated, setEliminated] = useState({});
  const [drafts, setDrafts] = useState({});
  const [dialog, setDialog] = useState(null);

  const finishedRef = useRef(false);
  const answersRef = useRef(answers);
  const leftRef = useRef(durationSeconds);

  const doFinish = (timeUp, answersOverride) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    const used = timeUp ? durationSeconds : Math.max(0, durationSeconds - leftRef.current);
    onFinish({
      mode,
      label,
      assisted,
      durationSeconds: used,
      limitSeconds: durationSeconds,
      questions,
      answers: answersOverride || answersRef.current,
    });
  };

  const { remaining, running, start } = useCountdown({ onEnd: () => doFinish(true) });
  const left = running || remaining > 0 ? remaining : durationSeconds;

  useEffect(() => {
    answersRef.current = answers;
    leftRef.current = left;
  });

  useEffect(() => {
    if (durationSeconds > 0) start(durationSeconds);
  }, [durationSeconds, start]);

  const q = questions[idx];
  const total = questions.length;
  const isLast = idx === total - 1;
  const answer = answers[q.id];
  const revealed = assisted && !!answer;
  const selected = picks[q.id] ?? answer?.index ?? null;

  const canGo = (i) => (assisted ? i <= idx || !!answers[questions[i].id] : true);
  const go = (i) => {
    if (i >= 0 && i < total && canGo(i)) setIdx(i);
  };

  const requestFinish = (override) => {
    const current = override || answers;
    const blank = questions.filter((x) => !current[x.id]).length;
    if (blank > 0) setDialog({ type: 'finish', blank, override });
    else doFinish(false, override);
  };

  const select = (i) => {
    if (revealed) return;
    setPicks((p) => ({ ...p, [q.id]: i }));
  };

  const record = () => {
    const opt = q.alternativas[selected];
    answerQuestion(q.id, !!opt.correta, opt.texto);
    const next = { ...answers, [q.id]: { index: selected, correct: !!opt.correta, chosenText: opt.texto } };
    setAnswers(next);
    return next;
  };

  const verify = () => {
    if (selected !== null && !revealed) record();
  };

  const next = () => {
    if (isLast) requestFinish();
    else setIdx(idx + 1);
  };

  const confirm = () => {
    if (selected === null) return;
    const updated = record();
    if (isLast) requestFinish(updated);
    else setIdx(idx + 1);
  };

  const pickKeys = Object.fromEntries(
    PICK_KEYS.slice(0, q.alternativas.length).map((k, i) => [k, () => select(i)])
  );
  useHotkeys(
    {
      ...pickKeys,
      Enter: () => {
        if (!assisted) confirm();
        else if (revealed) next();
        else verify();
      },
      ...(assisted ? {} : { ArrowRight: () => go(idx + 1), ArrowLeft: () => go(idx - 1) }),
    },
    { enabled: !dialog }
  );

  const toggleEliminate = (i) =>
    setEliminated((e) => ({ ...e, [q.id]: { ...e[q.id], [i]: !e[q.id]?.[i] } }));

  return (
    <div className="space-y-4">
      <RunnerTopBar
        label={label}
        assisted={assisted}
        left={left}
        limit={durationSeconds}
        onCalc={toggleCalc}
        onFinish={() => requestFinish()}
        onExit={() => setDialog({ type: 'exit' })}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <QuestionStage
          key={q.id}
          question={q}
          index={idx}
          total={total}
          assisted={assisted}
          selected={selected}
          revealed={revealed}
          eliminated={eliminated[q.id]}
          favorite={!!favorites[q.id]}
          isLast={isLast}
          onSelect={select}
          onToggleEliminate={toggleEliminate}
          onToggleFavorite={() => toggleFavorite(q.id)}
          onVerify={verify}
          onNext={next}
          onConfirm={confirm}
        />
        <RunnerSidebar
          questions={questions}
          current={idx}
          answers={answers}
          canGo={canGo}
          onGo={go}
          draft={drafts[q.id] || ''}
          onDraftChange={(text) => setDrafts((d) => ({ ...d, [q.id]: text }))}
        />
      </div>

      {dialog?.type === 'exit' && (
        <ExitDialog
          danger
          title="Abandonar o simulado?"
          description="Seu progresso neste simulado não será salvo no histórico. As respostas já registradas continuam contando nas estatísticas gerais."
          confirmLabel="Abandonar"
          onConfirm={onExit}
          onCancel={() => setDialog(null)}
        />
      )}
      {dialog?.type === 'finish' && (
        <ExitDialog
          title="Finalizar com questões em branco?"
          description={`Há ${dialog.blank} ${dialog.blank === 1 ? 'questão em branco' : 'questões em branco'}. Ao finalizar, elas serão contadas como não respondidas.`}
          confirmLabel="Finalizar mesmo assim"
          cancelLabel="Voltar ao simulado"
          onConfirm={() => doFinish(false, dialog.override)}
          onCancel={() => setDialog(null)}
        />
      )}
    </div>
  );
}
