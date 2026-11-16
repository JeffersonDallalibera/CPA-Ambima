import { useMemo } from 'react';
import { AlertTriangle, CalendarClock, CalendarDays, RotateCcw } from 'lucide-react';
import { useAppData, useUi } from '../../context/contexts';
import { ERROR_REASONS } from '../../lib/constants';
import { daysUntil, isDue } from '../../lib/srs';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Progress from '../../components/ui/Progress';

function Title({ icon: Icon, children, aside }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
        <Icon className="h-4 w-4 text-ink-3" aria-hidden="true" />
        {children}
      </h2>
      {aside}
    </div>
  );
}

export function ExamPlan() {
  const { cert, examDate, setExamDate, stats, questionSrs, cardSrs, allQuestions, modules } = useAppData();
  const { navigate } = useUi();
  const days = daysUntil(examDate);
  const pending = Math.max(0, stats.totalQuestions - stats.answeredCount);
  const dueQuestions = allQuestions.filter((q) => isDue(questionSrs[q.id])).length;
  const dueCards = modules
    .flatMap((m) => m.flashcards || [])
    .filter((c) => isDue(cardSrs[c.id])).length;

  const perDay = days && days > 0 ? Math.ceil(pending / days) : null;

  return (
    <Card className="p-5">
      <Title
        icon={CalendarDays}
        aside={
          <input
            type="date"
            aria-label={`Data da prova ${cert.name}`}
            value={examDate || ''}
            onChange={(e) => setExamDate(e.target.value)}
            className="h-8 rounded-md border border-line bg-surface px-2 text-xs text-ink"
          />
        }
      >
        Plano até a prova
      </Title>
      {days === null ? (
        <p className="text-sm text-ink-3">
          Informe a data da prova {cert.name} para receber uma meta diária de questões.
        </p>
      ) : days < 0 ? (
        <p className="text-sm text-ink-3">A data informada já passou. Atualize a data da prova.</p>
      ) : (
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="num text-4xl font-semibold text-ink">
              {days}
              <span className="ml-1 text-base text-ink-3">{days === 1 ? 'dia' : 'dias'}</span>
            </div>
            <p className="mt-1 text-xs text-ink-3">
              {perDay
                ? `Para cobrir as ${pending} questões ainda não vistas: ${perDay} por dia.`
                : pending === 0
                  ? 'Você já viu todo o banco. Foque em revisão e simulados.'
                  : 'A prova é hoje. Revise o essencial e descanse.'}
            </p>
          </div>
          <Badge tone={perDay && perDay > 25 ? 'warn' : 'brand'}>
            Meta: {cert.passThreshold}% de acerto
          </Badge>
        </div>
      )}
      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-line pt-4">
        <button
          type="button"
          onClick={() => navigate('simulados')}
          className="rounded-lg bg-subtle px-3 py-2.5 text-left transition-colors hover:bg-hover"
        >
          <div className="num text-xl font-semibold text-ink">{dueQuestions}</div>
          <div className="text-xs text-ink-3">questões para revisar hoje</div>
        </button>
        <button
          type="button"
          onClick={() => navigate('flashcards')}
          className="rounded-lg bg-subtle px-3 py-2.5 text-left transition-colors hover:bg-hover"
        >
          <div className="num text-xl font-semibold text-ink">{dueCards}</div>
          <div className="text-xs text-ink-3">flashcards vencidos</div>
        </button>
      </div>
    </Card>
  );
}

export function ErrorAnalysis() {
  const { answered, allQuestions, errorLog } = useAppData();
  const { navigate } = useUi();

  const { topics, reasons, wrongTotal } = useMemo(() => {
    const byTopic = {};
    const byReason = {};
    let wrong = 0;
    allQuestions.forEach((q) => {
      const a = answered[q.id];
      if (!a) return;
      const key = q.topicoPD || 'Sem tópico';
      const row = (byTopic[key] ||= { key, module: q.moduloId, total: 0, wrong: 0 });
      row.total += 1;
      if (!a.correct) {
        row.wrong += 1;
        wrong += 1;
        const reason = errorLog[q.id];
        if (reason) byReason[reason] = (byReason[reason] || 0) + 1;
      }
    });
    return {
      topics: Object.values(byTopic)
        .filter((t) => t.wrong > 0)
        .sort((a, b) => b.wrong / b.total - a.wrong / a.total || b.wrong - a.wrong)
        .slice(0, 5),
      reasons: byReason,
      wrongTotal: wrong,
    };
  }, [answered, allQuestions, errorLog]);

  return (
    <Card className="p-5">
      <Title
        icon={AlertTriangle}
        aside={
          <Button size="sm" variant="ghost" icon={RotateCcw} onClick={() => navigate('simulados')}>
            Caderno de erros
          </Button>
        }
      >
        Análise de erros
      </Title>
      {topics.length === 0 ? (
        <p className="py-4 text-center text-sm text-ink-3">Nenhum erro registrado ainda. Responda questões para ver os pontos fracos.</p>
      ) : (
        <>
          <ul className="space-y-3">
            {topics.map((t) => {
              const rate = Math.round((t.wrong / t.total) * 100);
              return (
                <li key={t.key}>
                  <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                    <span className="min-w-0 truncate text-ink-2" title={t.key}>
                      <span className="num text-ink-3">M{t.module}</span> · {t.key}
                    </span>
                    <span className="num shrink-0 text-xs text-ink-3">
                      {t.wrong}/{t.total} · {rate}% erro
                    </span>
                  </div>
                  <Progress value={rate} tone="bad" label={`Taxa de erro em ${t.key}`} />
                </li>
              );
            })}
          </ul>
          <div className="mt-4 border-t border-line pt-3">
            <p className="mb-2 flex items-center gap-1.5 text-xs text-ink-3">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" /> Motivo dos erros ({wrongTotal} no total)
            </p>
            <div className="flex flex-wrap gap-1.5">
              {ERROR_REASONS.map((r) => (
                <Badge key={r.id} tone={reasons[r.id] ? 'warn' : 'neutral'}>
                  {r.label}: {reasons[r.id] || 0}
                </Badge>
              ))}
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
