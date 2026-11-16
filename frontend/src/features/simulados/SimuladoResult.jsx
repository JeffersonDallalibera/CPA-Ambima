import { useState } from 'react';
import { ArrowLeft, ChevronDown, PartyPopper, RotateCcw } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import EmptyState from '../../components/ui/EmptyState';
import Progress from '../../components/ui/Progress';
import OptionList from '../../components/question/OptionList';
import QuestionBody from '../../components/question/QuestionBody';
import { MODULES_META } from '../../lib/constants';
import ErrorReason from '../../components/question/ErrorReason';
import { cn, formatClock, pct } from '../../lib/utils';

function moduleBreakdown(questions, answers) {
  const map = {};
  questions.forEach((q) => {
    const row = (map[q.moduloId] ||= { id: q.moduloId, total: 0, hits: 0 });
    row.total += 1;
    if (answers[q.id]?.correct) row.hits += 1;
  });
  return Object.values(map).sort((a, b) => a.id - b.id);
}

function ReviewItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  const blank = !answer;
  return (
    <Card>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-11 w-full items-center gap-3 px-4 py-3 text-left"
      >
        <span className="num text-xs text-ink-3">{index + 1}</span>
        <span className="line-clamp-1 flex-1 text-sm text-ink">{question.enunciado}</span>
        <Badge tone={blank ? 'warn' : 'bad'}>{blank ? 'Em branco' : 'Errada'}</Badge>
        <ChevronDown className={cn('h-4 w-4 shrink-0 text-ink-3 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="space-y-4 border-t border-line px-4 py-4">
          <QuestionBody question={question} />
          <OptionList
            options={question.alternativas}
            selected={blank ? null : answer.index}
            revealed
            onSelect={() => {}}
          />
          {!blank && <ErrorReason questionId={question.id} />}
        </div>
      )}
    </Card>
  );
}

export default function SimuladoResult({ result, cert, onRetry, onBack }) {
  const { questions, answers, label, durationSeconds, limitSeconds } = result;
  const total = questions.length;
  const hits = questions.filter((q) => answers[q.id]?.correct).length;
  const scorePct = pct(hits, total);
  const passed = scorePct >= cert.passThreshold;
  const review = questions.map((q, i) => ({ q, i })).filter(({ q }) => !answers[q.id]?.correct);
  const breakdown = moduleBreakdown(questions, answers);

  return (
    <div className="rise mx-auto max-w-3xl">
      <Card className="p-6 text-center">
        <p className="text-sm text-ink-3">{label}</p>
        <div className="num mt-2 text-6xl font-semibold text-ink">{scorePct}%</div>
        <div className="mt-3 flex justify-center">
          <Badge tone={passed ? 'ok' : 'bad'}>{passed ? 'Aprovado' : 'Reprovado'}</Badge>
        </div>
        <p className="mt-3 text-sm text-ink-3">
          <span className="num">{hits}</span> de <span className="num">{total}</span> acertos · mínimo{' '}
          <span className="num">{cert.passThreshold}%</span> · tempo{' '}
          <span className="num">{formatClock(durationSeconds)}</span>
          {limitSeconds ? (
            <>
              {' '}de <span className="num">{formatClock(limitSeconds)}</span>
            </>
          ) : null}
        </p>
        <div className="mt-5 flex justify-center gap-2">
          <Button icon={ArrowLeft} onClick={onBack}>
            Voltar
          </Button>
          <Button variant="primary" icon={RotateCcw} onClick={onRetry}>
            Refazer
          </Button>
        </div>
      </Card>

      <h2 className="mb-3 mt-8 text-sm font-semibold text-ink">Desempenho por módulo</h2>
      <Card className="space-y-4 p-5">
        {breakdown.map((m) => {
          const value = pct(m.hits, m.total);
          return (
            <div key={m.id}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="text-ink-2">{MODULES_META[m.id]?.label ?? `Módulo ${m.id}`}</span>
                <span className="num text-ink-3">
                  {m.hits}/{m.total} · {value}%
                </span>
              </div>
              <Progress
                value={value}
                tone={value >= cert.passThreshold ? 'ok' : 'bad'}
                label={`Acertos no módulo ${m.id}`}
              />
            </div>
          );
        })}
      </Card>

      <h2 className="mb-3 mt-8 text-sm font-semibold text-ink">Revisão</h2>
      {review.length === 0 ? (
        <EmptyState
          icon={PartyPopper}
          title="Nenhuma questão errada"
          description="Você acertou todas as questões deste simulado."
        />
      ) : (
        <div className="space-y-2">
          {review.map(({ q, i }) => (
            <ReviewItem key={q.id} question={q} answer={answers[q.id]} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
