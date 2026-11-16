import { useAppData } from '../../context/contexts';
import { ERROR_REASONS } from '../../lib/constants';
import { cn } from '../../lib/utils';

export default function ErrorReason({ questionId }) {
  const { errorLog, tagError } = useAppData();
  const current = errorLog[questionId];
  return (
    <div>
      <p className="mb-1.5 text-xs text-ink-3">Por que errou? Isso alimenta a análise de erros.</p>
      <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Motivo do erro">
        {ERROR_REASONS.map((r) => (
          <button
            key={r.id}
            type="button"
            role="radio"
            aria-checked={current === r.id}
            onClick={() => tagError(questionId, r.id)}
            className={cn(
              'h-8 rounded-md border px-2.5 text-xs transition-colors',
              current === r.id ? 'border-brand bg-brand-soft font-medium text-brand' : 'border-line bg-surface text-ink-2 hover:bg-hover'
            )}
          >
            {r.label}
          </button>
        ))}
      </div>
    </div>
  );
}
