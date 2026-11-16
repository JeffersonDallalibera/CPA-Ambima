import { ArrowRight, BarChart3, BookOpenText, CheckCircle2, ClipboardCheck, Plus, Target } from 'lucide-react';
import { useAppData, useUi } from '../../context/contexts';
import { ExamPlan, ErrorAnalysis } from './StudyInsights';
import { cn, formatClock } from '../../lib/utils';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import EmptyState from '../../components/ui/EmptyState';
import PageHeader from '../../components/ui/PageHeader';
import Progress from '../../components/ui/Progress';
import Skeleton from '../../components/ui/Skeleton';
import Stat from '../../components/ui/Stat';

const MODULE_STATUS = {
  DOMINADO: { label: 'Dominado', tone: 'ok', bar: 'ok' },
  EM_EVOLUCAO: { label: 'Em evolução', tone: 'brand', bar: 'brand' },
  PRIORITARIO: { label: 'Prioritário', tone: 'warn', bar: 'warn' },
};

const fmt = (n) => {
  const v = Number(n);
  return Number.isFinite(v) ? (Number.isInteger(v) ? String(v) : v.toFixed(1)) : '0';
};

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
}

function SectionTitle({ icon: Icon, children, aside }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
        {Icon && <Icon className="h-4 w-4 text-ink-3" />}
        {children}
      </h2>
      {aside}
    </div>
  );
}

function Sparkline({ scores, threshold }) {
  if (scores.length < 2) return null;
  const w = 120;
  const h = 32;
  const x = (i) => (i / (scores.length - 1)) * (w - 4) + 2;
  const y = (v) => h - 2 - (Math.max(0, Math.min(100, v)) / 100) * (h - 4);
  const points = scores.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-8 w-[120px]"
      role="img"
      aria-label={`Evolução das últimas ${scores.length} notas de simulados`}
    >
      <line
        x1="0"
        x2={w}
        y1={y(threshold)}
        y2={y(threshold)}
        className="stroke-line-strong"
        strokeDasharray="3 3"
      />
      <polyline points={points} fill="none" className="stroke-brand" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx={x(scores.length - 1)} cy={y(scores[scores.length - 1])} r="2.5" className="fill-brand" />
    </svg>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6" aria-busy="true" aria-label="Carregando visão geral">
      <Skeleton className="h-32 w-full" />
      <div className="grid gap-4 lg:grid-cols-3">
        <Skeleton className="h-72 lg:col-span-2" />
        <Skeleton className="h-72" />
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { status, analytics, simulations, sprintBlocks, sprintDone, toggleSprint, stats, cert } = useAppData();
  const { navigate } = useUi();

  const header = <PageHeader title="Visão geral" description={`Seu progresso rumo à certificação ${cert.name}.`} />;

  if (!analytics) {
    return (
      <div>
        {header}
        {status === 'loading' ? (
          <DashboardSkeleton />
        ) : (
          <EmptyState
            icon={BarChart3}
            title="Sem dados de desempenho"
            description="Não foi possível carregar os indicadores. Verifique a conexão com o servidor e tente novamente."
          />
        )}
      </div>
    );
  }

  const modules = analytics.modules || [];
  const priorityTopics = (analytics.priorityTopics || []).filter((t) => !t.mastered).slice(0, 6);
  const summary = analytics.summary || {};
  const target = analytics.targetScorePct ?? cert.passThreshold;
  const readiness = Number(analytics.readinessScore) || 0;
  const ready = !!analytics.readyForExam;
  const accuracy = Number(analytics.overallAccuracyPct) || 0;
  const answered = stats?.answeredCount ?? summary.answeredQuestions ?? 0;
  const total = stats?.totalQuestions ?? summary.totalQuestions ?? 0;
  const history = (simulations || []).slice(0, 6);
  const sparkScores = (simulations || [])
    .slice(0, 10)
    .map((s) => Number(s.scorePct) || 0)
    .reverse();
  const blocks = sprintBlocks || [];
  const blocksDone = blocks.filter((b) => sprintDone?.[b.id]).length;

  return (
    <div className="rise">
      {header}

      <Card className="mb-6 grid grid-cols-2 gap-x-6 gap-y-5 p-5 md:grid-cols-4">
        <Stat
          label="Prontidão para a prova"
          value={`${fmt(readiness)}%`}
          tone={ready ? 'ok' : undefined}
          hint={`Meta: ${fmt(target)}%`}
        />
        <Stat label="Acerto geral" value={`${fmt(accuracy)}%`} hint={`${summary.correctAnswers ?? 0} acertos`} />
        <Stat
          label="Questões respondidas"
          value={`${answered}/${total}`}
          hint={total ? `${Math.round((answered / total) * 100)}% do banco` : undefined}
        />
        <Stat
          label="Tópicos dominados"
          value={`${summary.masteredTopics ?? 0}/${summary.totalTopics ?? 0}`}
          hint={`${fmt(summary.topicsMasteryPct ?? 0)}% do conteúdo`}
        />
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="min-w-0 space-y-6 lg:col-span-2">
          <ExamPlan />
          <Card className="p-5">
            <SectionTitle icon={Target}>Prontidão ponderada</SectionTitle>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="num text-4xl font-semibold text-ink">
                {fmt(readiness)}
                <span className="text-xl text-ink-3">%</span>
              </div>
              <Badge tone={ready ? 'ok' : 'warn'} icon={ready ? CheckCircle2 : Target}>
                {ready ? 'Apto para a prova' : `Faltam ${fmt(Math.max(0, target - readiness))} p.p. para a meta`}
              </Badge>
            </div>
            <div className="relative mt-4">
              <Progress value={readiness} tone={ready ? 'ok' : 'brand'} label="Prontidão para a prova" />
              <span
                className="absolute -top-1 h-3.5 w-px bg-ink-3"
                style={{ left: `${Math.min(100, target)}%` }}
                aria-hidden="true"
              />
            </div>
            <div className="num mt-1.5 flex justify-between text-xs text-ink-3">
              <span>0%</span>
              <span>Meta {fmt(target)}%</span>
              <span>100%</span>
            </div>
            <p className="mt-3 text-xs text-ink-3">
              Combina acerto, domínio de tópicos e cobertura, ponderados pelo peso de cada módulo na prova.
            </p>
          </Card>

          <Card className="p-5">
            <SectionTitle icon={BarChart3}>Desempenho por módulo</SectionTitle>
            {modules.length === 0 ? (
              <p className="py-6 text-center text-sm text-ink-3">Nenhum módulo disponível.</p>
            ) : (
              <ul className="-mx-2 divide-y divide-line">
                {modules.map((m) => {
                  const st = MODULE_STATUS[m.status] || MODULE_STATUS.EM_EVOLUCAO;
                  const acc = Number(m.accuracyPct) || 0;
                  return (
                    <li key={m.id}>
                      <button
                        type="button"
                        onClick={() => navigate('questoes', { moduleId: m.id })}
                        className="group w-full rounded-lg px-2 py-3 text-left transition-colors hover:bg-subtle"
                        aria-label={`Abrir questões do módulo ${m.id}: ${m.titulo}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium text-ink">
                              <span className="num text-ink-3">M{m.id}</span> · {m.titulo}
                            </div>
                            <div className="mt-0.5 text-xs text-ink-3">
                              Peso <span className="num">{m.weightPct}%</span> na prova ·{' '}
                              <span className="num">
                                {m.answeredQuestions}/{m.totalQuestions}
                              </span>{' '}
                              questões
                            </div>
                          </div>
                          <Badge tone={st.tone}>{st.label}</Badge>
                        </div>
                        <div className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-2">
                          <div>
                            <div className="mb-1 flex justify-between text-xs text-ink-3">
                              <span>Acerto</span>
                              <span className="num text-ink-2">{fmt(acc)}%</span>
                            </div>
                            <Progress value={acc} tone={st.bar} label={`Acerto do módulo ${m.id}`} />
                          </div>
                          <div>
                            <div className="mb-1 flex justify-between text-xs text-ink-3">
                              <span>Cobertura</span>
                              <span className="num text-ink-2">{fmt(m.coveragePct)}%</span>
                            </div>
                            <Progress
                              value={Number(m.coveragePct) || 0}
                              tone="brand"
                              label={`Cobertura do módulo ${m.id}`}
                            />
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </Card>

          {blocks.length > 0 && (
            <Card className="p-5">
              <SectionTitle
                icon={ClipboardCheck}
                aside={
                  <span className="num text-xs text-ink-3">
                    {blocksDone}/{blocks.length} concluídos
                  </span>
                }
              >
                Cronograma Sprint
              </SectionTitle>
              <ul className="divide-y divide-line">
                {blocks.map((b) => {
                  const done = !!sprintDone?.[b.id];
                  return (
                    <li key={b.id}>
                      <label className="flex min-h-10 cursor-pointer items-start gap-3 py-2.5">
                        <input
                          type="checkbox"
                          checked={done}
                          onChange={() => toggleSprint(b.id)}
                          className="mt-1 h-4 w-4 accent-brand"
                        />
                        <div className={cn('min-w-0', done && 'opacity-50')}>
                          <div className={cn('text-sm font-medium text-ink', done && 'line-through')}>
                            <span className="num">
                              {b.dia} · {b.horario}
                            </span>{' '}
                            — {b.titulo}
                          </div>
                          {(b.modulo_foco || b.peso_foco) && (
                            <div className="text-xs text-ink-3">
                              {b.modulo_foco}
                              {b.peso_foco ? ` (${b.peso_foco})` : ''}
                            </div>
                          )}
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <ErrorAnalysis />
          <Card className="p-5">
            <SectionTitle
              icon={BookOpenText}
              aside={
                <Button size="sm" variant="ghost" iconRight={ArrowRight} onClick={() => navigate('estudo')}>
                  Estudar
                </Button>
              }
            >
              Tópicos prioritários
            </SectionTitle>
            {priorityTopics.length === 0 ? (
              <p className="py-4 text-center text-sm text-ink-3">Nenhum tópico prioritário pendente.</p>
            ) : (
              <ul className="-mx-2">
                {priorityTopics.map((t) => (
                  <li key={t.key}>
                    <button
                      type="button"
                      onClick={() => navigate('estudo', { moduleId: t.moduleId, topicKey: t.key })}
                      className="flex min-h-10 w-full items-start justify-between gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-subtle"
                    >
                      <div className="min-w-0">
                        <div className="text-sm text-ink">
                          {t.codigo && <span className="num mr-1.5 text-ink-3">{t.codigo}</span>}
                          {t.titulo}
                        </div>
                        <div className="mt-0.5 truncate text-xs text-ink-3">
                          M{t.moduleId} · {t.moduloTitulo}
                        </div>
                      </div>
                      <Badge tone={/alta/i.test(t.prioridade) ? 'warn' : 'neutral'}>{t.prioridade}</Badge>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Card>

          <Card className="p-5">
            <SectionTitle
              icon={ClipboardCheck}
              aside={
                <Button size="sm" variant="primary" icon={Plus} onClick={() => navigate('simulados')}>
                  Novo simulado
                </Button>
              }
            >
              Simulados recentes
            </SectionTitle>
            {history.length === 0 ? (
              <p className="py-4 text-center text-sm text-ink-3">Você ainda não fez nenhum simulado.</p>
            ) : (
              <>
                {sparkScores.length > 1 && (
                  <div className="mb-3 flex items-center justify-between gap-3 rounded-lg bg-subtle px-3 py-2">
                    <span className="text-xs text-ink-3">Últimas notas</span>
                    <Sparkline scores={sparkScores} threshold={cert.passThreshold} />
                  </div>
                )}
                <ul className="divide-y divide-line">
                  {history.map((s) => (
                    <li key={s.id} className="flex items-center justify-between gap-3 py-2.5">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-ink">{s.mode}</div>
                        <div className="num text-xs text-ink-3">
                          {formatDate(s.createdAt)}
                          {s.durationSeconds ? ` · ${formatClock(s.durationSeconds)}` : ''}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="num text-sm font-semibold text-ink">{fmt(s.scorePct)}%</span>
                        <Badge tone={s.passed ? 'ok' : 'bad'}>{s.passed ? 'Aprovado' : 'Reprovado'}</Badge>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
