import { cn } from '../../lib/utils';

export default function Tabs({ value, onChange, items, className }) {
  return (
    <div
      role="tablist"
      className={cn('inline-flex rounded-lg border border-line bg-subtle p-0.5', className)}
    >
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(it.value)}
            className={cn(
              'inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-[13px] font-medium transition-colors',
              active ? 'bg-surface text-ink shadow-card' : 'text-ink-3 hover:text-ink'
            )}
          >
            {it.icon && <it.icon className="h-3.5 w-3.5" />}
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
