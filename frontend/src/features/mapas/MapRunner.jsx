import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import OptionList from '../../components/question/OptionList';
import { MODULES_META } from '../../lib/constants';
import { cn } from '../../lib/utils';

function feedbackFor(score, limite) {
  const ratio = limite ? score / limite : 0;
  if (ratio >= 0.7) {
    return { tone: 'ok', title: 'Ótima condução', text: 'Você conduziu o atendimento de forma alinhada às boas práticas e à regulação.' };
  }
  if (ratio >= 0.4) {
    return { tone: 'warn', title: 'Condução parcial', text: 'Algumas escolhas foram adequadas, mas há pontos a revisar. Refaça o caso para explorar outros caminhos.' };
  }
  return { tone: 'bad', title: 'Reveja o caso', text: 'Várias escolhas se afastaram do esperado. Revise o tema e tente novamente.' };
}

const FEEDBACK_BOX = {
  ok: 'border-ok-line bg-ok-soft',
  warn: 'border-warn-line bg-warn-soft',
  bad: 'border-bad-line bg-bad-soft',
};

export default function MapRunner({ map, onBack, onComplete }) {
  const [node, setNode] = useState('1');
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [quiz, setQuiz] = useState({});
  const endRef = useRef(null);

  const limite = map.limite || 5;
  const current = map.etapas?.[node];
  const finished = !current || node === 'END' || !current.opcoes?.length;
  const questoes = map.questoesObjetivas || [];
  const mod = MODULES_META[map.modulo];

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [history.length]);

  const choose = (op) => {
    const peso = op.peso || 0;
    const nextScore = score + peso;
    const proximo = op.proximo || 'END';
    setScore(nextScore);
    setHistory((h) => [...h, { etapa: node, falaCliente: current.falaCliente, resposta: op.texto, peso }]);
    setNode(proximo);
    if (proximo === 'END') onComplete(map.id, nextScore);
  };

  const restart = () => {
    setNode('1');
    setScore(0);
    setHistory([]);
    setQuiz({});
  };

  const fb = feedbackFor(score, limite);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={onBack}>
          Voltar
        </Button>
        <div className="ml-auto flex items-center gap-2">
          <Badge>
            Pontos <span className="num">{score}/{limite}</span>
          </Badge>
          <Button size="sm" icon={RotateCcw} onClick={restart} disabled={!history.length}>
            Refazer
          </Button>
        </div>
      </div>

      <div className="mb-5">
        <div className="text-xs text-ink-3">
          {mod?.short}
          {map.codigoItem && <span className="num"> · Item {map.codigoItem}</span>}
          {map.dificuldade && <span> · {map.dificuldade}</span>}
        </div>
        <h1 className="mt-1 text-xl font-semibold text-ink">{map.titulo || map.topicoPD}</h1>
      </div>

      <Card className="space-y-4 p-4 sm:p-5" aria-live="polite">
        {history.map((h, i) => (
          <div key={i} className="space-y-2.5">
            <div className="flex max-w-[85%] flex-col items-start gap-1">
              <span className="text-xs text-ink-4">Cliente</span>
              <div className="rounded-lg rounded-tl-sm bg-subtle px-3.5 py-2.5 text-sm leading-relaxed text-ink">
                {h.falaCliente}
              </div>
            </div>
            <div className="ml-auto flex max-w-[85%] flex-col items-end gap-1">
              <span className="text-xs text-ink-4">
                Você · <span className="num">{h.peso > 0 ? `+${h.peso}` : '0'}</span> pt
              </span>
              <div className="rounded-lg rounded-tr-sm border border-brand-line bg-brand-soft px-3.5 py-2.5 text-sm leading-relaxed text-ink">
                {h.resposta}
              </div>
            </div>
          </div>
        ))}

        {!finished && (
          <div key={node} className="rise space-y-4">
            <div className="flex max-w-[85%] flex-col items-start gap-1">
              <span className="text-xs text-ink-4">Cliente · etapa <span className="num">{node}</span></span>
              <div className="rounded-lg rounded-tl-sm bg-subtle px-3.5 py-2.5 text-sm leading-relaxed text-ink">
                {current.falaCliente}
              </div>
            </div>
            <div className="space-y-2 border-t border-line pt-4">
              <p className="text-xs font-medium text-ink-3">Como você responde?</p>
              {current.opcoes.map((op, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => choose(op)}
                  className="w-full rounded-lg border border-line bg-surface p-3 text-left text-sm leading-relaxed text-ink transition-colors hover:border-brand hover:bg-brand-soft"
                >
                  {op.texto}
                </button>
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </Card>

      {finished && (
        <div className="rise mt-5 space-y-5">
          <div className={cn('rounded-card border p-4', FEEDBACK_BOX[fb.tone])}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-sm font-semibold text-ink">{fb.title}</h2>
              <span className="num text-sm font-semibold text-ink">
                Nota {score}/{limite}
              </span>
            </div>
            <p className="mt-1 text-sm text-ink-2">{fb.text}</p>
          </div>

          {questoes.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-sm font-semibold text-ink">Questões de fixação</h2>
              {questoes.map((qo, qi) => (
                <Card key={qi} className="space-y-3 p-4">
                  <p className="text-sm font-medium leading-relaxed text-ink">
                    <span className="num">{qi + 1}.</span> {qo.enunciado}
                  </p>
                  <OptionList
                    options={qo.alternativas || []}
                    selected={quiz[qi] ?? null}
                    revealed={quiz[qi] !== undefined}
                    onSelect={(i) => setQuiz((p) => ({ ...p, [qi]: i }))}
                  />
                </Card>
              ))}
            </section>
          )}

          <div className="flex justify-end gap-2">
            <Button variant="ghost" icon={ArrowLeft} onClick={onBack}>
              Voltar aos casos
            </Button>
            <Button variant="primary" icon={RotateCcw} onClick={restart}>
              Refazer
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
