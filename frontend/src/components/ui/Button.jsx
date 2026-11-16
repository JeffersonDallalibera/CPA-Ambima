import { cn } from '../../lib/utils';

const VARIANTS = {
  primary: 'bg-brand text-white hover:bg-brand-hover border-transparent shadow-card',
  secondary: 'bg-surface text-ink border-line hover:bg-subtle shadow-card',
  ghost: 'bg-transparent text-ink-2 border-transparent hover:bg-hover',
  danger: 'bg-surface text-bad border-bad-line hover:bg-bad-soft',
};

const SIZES = {
  sm: 'h-8 px-3 text-[13px] gap-1.5',
  md: 'h-9 px-3.5 text-sm gap-2',
  lg: 'h-11 px-5 text-sm gap-2',
};

export default function Button({
  variant = 'secondary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  className,
  children,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-lg border font-medium transition-colors disabled:pointer-events-none disabled:opacity-45',
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      {children}
      {IconRight && <IconRight className="h-4 w-4 shrink-0" />}
    </button>
  );
}
