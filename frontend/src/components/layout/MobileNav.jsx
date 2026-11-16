import { useUi } from '../../context/contexts';
import { NAV_ITEMS } from '../../lib/constants';
import { cn } from '../../lib/utils';

export default function MobileNav() {
  const { view, navigate } = useUi();

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-6 border-t border-line bg-surface lg:hidden"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const active = view === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => navigate(item.id)}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'flex h-14 flex-col items-center justify-center gap-0.5 text-[10px]',
              active ? 'text-brand' : 'text-ink-3'
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            <span className="max-w-full truncate px-0.5">{item.label.split(' ')[0]}</span>
          </button>
        );
      })}
    </nav>
  );
}
