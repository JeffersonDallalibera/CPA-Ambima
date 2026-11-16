import { AlertCircle, Clock, History, Play } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import EmptyState from '../../components/ui/EmptyState';
import PageHeader from '../../components/ui/PageHeader';
import { useAppData } from '../../context/contexts';
import { isDue } from '../../lib/srs';
import { formatClock } from '../../lib/utils';
import { getSimModes } from './modes';

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
}

function ModeCard({ mode, onStart, badge }) {
  const Icon = mode.icon;
  return (
    <Card className="flex flex-col p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div className="flex items-center gap-1.5">
          {badge && <Badge tone="warn">{badge}</Badge>}
          <Badge tone={mode.assisted ? 'neutral' : 'brand'}>
            {mode.assisted ? 'Assistido' : 'Oficial · sem feedback'}
          </Badge>
        </div>
      </div>
      <h3 className="text-[15px] font-semibold text-ink">{mode.label}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-3">{mode.description}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-xs text-ink-3">
          <span className="num">{mode.totalQuestions ? `${mode.totalQuestions} questões` : 'Variável'}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span className="num">{formatClock(mode.durationMin * 60)}</span>
          </span>
        </div>
        <Button variant="primary" size="sm" icon={Play} onClick={() => onStart(mode.id)}>
          Iniciar
        </Button>
      </div>
    </Card>
  );
}

function HistoryList({ simulations }) {
  if (!simulations.length) {
    return (
      <EmptyState
        icon={History}
        title="Nenhum simulado realizado"
        description="Seus resultados aparecerão aqui depois do primeiro simulado."
      />
    );
  }
  return (
    <Card className="divide-y divide-line">
      {simulations.map((s, i) => {
        const score = s.scorePct ?? s.score_pct ?? 0;
        const duration = s.durationSeconds ?? s.duration_seconds ?? 0;
        return (
          <div key={s.id ?? i} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3">
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-ink">{s.mode}</div>
              <div className="text-xs text-ink-3">{formatDate(s.created_at)}</div>
            </div>
            <span className="num flex items-center gap-1 text-xs text-ink-3">
              <Clock className="h-3.5 w-3.5" />
              {formatClock(duration)}
            </span>
            <span className="num w-12 text-right text-sm font-semibold text-ink">{score}%</span>
            <Badge tone={s.passed ? 'ok' : 'bad'}>{s.passed ? 'Aprovado' : 'Reprovado'}</Badge>
          </div>
        );
      })}
    </Card>
  );
}

export default function SimuladoHub({ onStart, error }) {
  const { simulations = [], cert, questionSrs, allQuestions } = useAppData();
  const modes = getSimModes(cert);
  const dueCount = allQuestions.filter((q) => questionSrs[q.id] && isDue(questionSrs[q.id])).length;

  return (
    <div className="rise">
      <PageHeader
        title="Simulados"
        description="Escolha um modo de prova. No modo oficial não há feedback nem retorno às questões anteriores."
      />

      {error && (
        <div
          role="alert"
          className="mb-4 flex items-center gap-2 rounded-lg border border-warn-line bg-warn-soft px-3 py-2.5 text-sm text-warn"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modes.map((m) => (
          <ModeCard key={m.id} mode={m} onStart={onStart} badge={m.id === 'review_due' ? `${dueCount} para hoje` : null} />
        ))}
      </div>

      <h2 className="mb-3 mt-10 text-sm font-semibold text-ink">Histórico</h2>
      <HistoryList simulations={simulations} />
    </div>
  );
}
