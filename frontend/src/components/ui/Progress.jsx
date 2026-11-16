import { cn } from '../../lib/utils';

const TONES = { brand: 'bg-brand', ok: 'bg-ok', bad: 'bg-bad', warn: 'bg-warn' };

export default function Progress({ value, tone = 'brand', className, label }) {
  const v = Math.max(0, Math.min(100, value || 0));
  return (
    <div
      role="progressbar"
      aria-valuenow={v}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className={cn('h-1.5 w-full overflow-hidden rounded-full bg-hover', className)}
    >
      <div
        className={cn('h-full rounded-full transition-[width] duration-500', TONES[tone])}
        style={{ width: `${v}%` }}
      />
    </div>
  );
}
