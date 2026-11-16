import { cn } from '../../lib/utils';

function cellState(i, current, answered) {
  if (i === current) return 'border-brand bg-brand text-white';
  if (answered) return 'border-brand-line bg-brand-soft text-brand';
  return 'border-line bg-surface text-ink-3';
}

// Mini-mapa numerado + contagem + rascunho digital da questão atual.
export default function RunnerSidebar({
  questions,
  current,
  answers,
  canGo,
  onGo,
  draft,
  onDraftChange,
}) {
  const answeredCount = questions.filter((q) => answers[q.id]).length;

  return (
    <aside className="space-y-4" aria-label="Painel do simulado">
      <section className="rounded-card border border-line bg-surface p-4 shadow-card">
        <div className="mb-3 flex items-baseline justify-between">
          <h3 className="text-sm font-semibold text-ink">Mapa de questões</h3>
          <span className="num text-xs text-ink-3">
            {answeredCount}/{questions.length} respondidas
          </span>
        </div>
        <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-5 xl:grid-cols-6">
          {questions.map((q, i) => {
            const allowed = canGo(i);
            return (
              <button
                key={q.id}
                type="button"
                disabled={!allowed}
                onClick={() => onGo(i)}
                aria-label={`Questão ${i + 1}${answers[q.id] ? ', respondida' : ', em branco'}`}
                aria-current={i === current ? 'step' : undefined}
                className={cn(
                  'num h-8 rounded-md border text-xs font-medium transition-colors',
                  cellState(i, current, !!answers[q.id]),
                  allowed && i !== current && 'hover:border-line-strong hover:bg-hover',
                  !allowed && 'cursor-not-allowed opacity-50'
                )}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-brand" /> Atual
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm border border-brand-line bg-brand-soft" /> Respondida
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm border border-line-strong bg-surface" /> Em branco
          </span>
        </div>
      </section>

      <section className="rounded-card border border-line bg-surface p-4 shadow-card">
        <label htmlFor="runner-draft" className="mb-2 block text-sm font-semibold text-ink">
          Rascunho digital
        </label>
        <textarea
          id="runner-draft"
          value={draft}
          onChange={(e) => onDraftChange(e.target.value)}
          rows={6}
          placeholder="Anote cálculos e raciocínios desta questão."
          className="num w-full resize-y rounded-lg border border-line bg-subtle p-2.5 text-sm text-ink placeholder:text-ink-4"
        />
      </section>
    </aside>
  );
}
