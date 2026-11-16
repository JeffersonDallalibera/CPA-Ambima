import { Check, Scissors, X } from 'lucide-react';
import { LETTERS, cn } from '../../lib/utils';

// options: [{ texto, correta, justificativa }]
// selected: índice escolhido | null. revealed: mostra gabarito e justificativas.
export default function OptionList({
  options,
  selected,
  revealed,
  onSelect,
  eliminated = {},
  onToggleEliminate,
  showJustifications = true,
}) {
  return (
    <div className="space-y-2" role="radiogroup">
      {options.map((opt, i) => {
        const isSelected = selected === i;
        const isRight = revealed && !!opt.correta;
        const isWrongPick = revealed && isSelected && !opt.correta;
        const struck = !!eliminated[i] && !revealed;

        return (
          <div key={i} className="flex items-stretch gap-2">
            <button
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={revealed}
              onClick={() => onSelect(i)}
              className={cn(
                'flex-1 rounded-lg border bg-surface p-3 text-left transition-colors disabled:cursor-default',
                !revealed && !isSelected && 'border-line hover:border-line-strong hover:bg-subtle/60',
                !revealed && isSelected && 'border-brand bg-brand-soft',
                isRight && 'border-ok-line bg-ok-soft',
                isWrongPick && 'border-bad-line bg-bad-soft',
                revealed && !isRight && !isWrongPick && 'opacity-60',
                struck && 'opacity-40'
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    'num mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs font-semibold',
                    !revealed && !isSelected && 'border-line-strong text-ink-3',
                    !revealed && isSelected && 'border-brand bg-brand text-white',
                    isRight && 'border-ok bg-ok text-white',
                    isWrongPick && 'border-bad bg-bad text-white',
                    revealed && !isRight && !isWrongPick && 'border-line-strong text-ink-3'
                  )}
                >
                  {isRight ? <Check className="h-3.5 w-3.5" /> : isWrongPick ? <X className="h-3.5 w-3.5" /> : LETTERS[i]}
                </span>
                <span className={cn('text-sm leading-relaxed text-ink', struck && 'line-through')}>
                  {opt.texto}
                </span>
              </div>

              {revealed && showJustifications && opt.justificativa && (
                <p
                  className={cn(
                    'mt-2.5 border-t pt-2 pl-9 text-[13px] leading-relaxed text-ink-2',
                    isRight ? 'border-ok-line' : 'border-line'
                  )}
                >
                  <span className={cn('font-medium', opt.correta ? 'text-ok' : 'text-bad')}>
                    {opt.correta ? 'Gabarito. ' : 'Por que está errada. '}
                  </span>
                  {opt.justificativa}
                </p>
              )}
            </button>

            {!revealed && onToggleEliminate && (
              <button
                type="button"
                onClick={() => onToggleEliminate(i)}
                title="Riscar alternativa"
                aria-label={`Riscar alternativa ${LETTERS[i]}`}
                aria-pressed={!!eliminated[i]}
                className={cn(
                  'flex w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-ink-4 transition-colors hover:bg-subtle hover:text-ink-2',
                  eliminated[i] && 'border-line-strong bg-hover text-ink-2'
                )}
              >
                <Scissors className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
