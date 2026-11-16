import { cn } from '../../lib/utils';

export default function Card({ as: Tag = 'div', interactive = false, className, children, ...props }) {
  return (
    <Tag
      className={cn(
        'rounded-card border border-line bg-surface shadow-card',
        interactive && 'transition-colors hover:border-line-strong hover:bg-subtle/50',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
