import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Select({ value, onChange, options, className, label, ...props }) {
  return (
    <label className={cn('relative inline-flex items-center', className)}>
      {label && <span className="sr-only">{label}</span>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 w-full cursor-pointer appearance-none rounded-lg border border-line bg-surface pl-3 pr-8 text-sm text-ink shadow-card transition-colors hover:bg-subtle focus-visible:border-brand"
        {...props}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 h-4 w-4 text-ink-3" />
    </label>
  );
}
