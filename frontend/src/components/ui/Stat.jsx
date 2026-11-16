import { cn } from '../../lib/utils';

export default function Stat({ label, value, hint, tone, className }) {
  const color = tone === 'ok' ? 'text-ok' : tone === 'bad' ? 'text-bad' : tone === 'warn' ? 'text-warn' : 'text-ink';
  return (
    <div className={className}>
      <div className="text-xs font-medium text-ink-3">{label}</div>
      <div className={cn('num mt-1 text-2xl font-semibold', color)}>{value}</div>
      {hint && <div className="mt-0.5 text-xs text-ink-3">{hint}</div>}
    </div>
  );
}
