import { Search } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function SearchInput({ value, onChange, placeholder, className }) {
  return (
    <label className={cn('relative flex items-center', className)}>
      <Search className="pointer-events-none absolute left-3 h-4 w-4 text-ink-4" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-9 w-full rounded-lg border border-line bg-surface pl-9 pr-3 text-sm text-ink shadow-card placeholder:text-ink-4 focus-visible:border-brand"
      />
    </label>
  );
}
