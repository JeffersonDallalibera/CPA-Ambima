import { cn } from '../../lib/utils';

// Estado de cada questão: atual, certa, errada ou não respondida.
export default function QuestionNavigator({ questions, answered, currentIndex, onSelect }) {
  return (
    <nav
      aria-label="Navegador de questões"
      className="flex gap-1.5 overflow-x-auto pb-1 lg:grid lg:max-h-[calc(100vh-22rem)] lg:min-h-40 lg:grid-cols-6 lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:pr-1"
    >
      {questions.map((q, i) => {
        const ans = answered[q.id];
        const current = i === currentIndex;
        const state = ans ? (ans.correct ? 'respondida, certa' : 'respondida, errada') : 'não respondida';
        return (
          <button
            key={q.id}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Questão ${i + 1}, ${state}`}
            aria-current={current ? 'true' : undefined}
            className={cn(
              'num h-8 min-w-8 shrink-0 rounded-md border text-xs font-medium transition-colors',
              !ans && 'border-line bg-surface text-ink-3 hover:bg-subtle',
              ans?.correct && 'border-ok-line bg-ok-soft text-ok',
              ans && !ans.correct && 'border-bad-line bg-bad-soft text-bad',
              current && 'ring-2 ring-brand ring-offset-1'
            )}
          >
            {i + 1}
          </button>
        );
      })}
    </nav>
  );
}
