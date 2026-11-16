import { cn } from '../../lib/utils';

const TONES = {
  neutral: 'bg-subtle text-ink-2 border-line',
  brand: 'bg-brand-soft text-brand border-brand-line',
  ok: 'bg-ok-soft text-ok border-ok-line',
  bad: 'bg-bad-soft text-bad border-bad-line',
  warn: 'bg-warn-soft text-warn border-warn-line',
};

export default function Badge({ tone = 'neutral', icon: Icon, className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-xs font-medium leading-4',
        TONES[tone],
        className
      )}
    >
      {Icon && <Icon className="h-3 w-3" />}
      {children}
    </span>
  );
}
