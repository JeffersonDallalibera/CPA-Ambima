import { Calculator, GraduationCap } from 'lucide-react';
import { useAppData, useUi } from '../../context/contexts';
import { NAV_ITEMS } from '../../lib/constants';
import { cn } from '../../lib/utils';
import CertSwitcher from './CertSwitcher';
import Kbd from '../ui/Kbd';
import Progress from '../ui/Progress';

export default function Sidebar() {
  const { view, navigate, toggleCalc, calcOpen } = useUi();
  const { analytics, stats, cert } = useAppData();
  const readiness = Math.round(analytics?.readinessScore ?? stats.accuracy ?? 0);

  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-line bg-subtle lg:flex">
      <div className="flex items-center gap-2.5 px-4 pb-4 pt-5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
          <GraduationCap className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-ink">{cert.name}</p>
          <p className="text-xs text-ink-3">Preparatório ANBIMA</p>
        </div>
      </div>

      <nav aria-label="Navegação principal" className="flex-1 space-y-0.5 px-2">
        {NAV_ITEMS.map((item) => {
          const active = view === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'group flex h-9 w-full items-center gap-2.5 rounded-lg px-2.5 text-sm transition-colors',
                active ? 'bg-surface font-medium text-ink shadow-card ring-1 ring-line' : 'text-ink-2 hover:bg-hover'
              )}
            >
              <Icon className={cn('h-4 w-4', active ? 'text-brand' : 'text-ink-3')} aria-hidden="true" />
              <span className="flex-1 text-left">{item.label}</span>
              <span className="opacity-0 transition-opacity group-hover:opacity-100">
                <Kbd>{item.hotkey}</Kbd>
              </span>
            </button>
          );
        })}

        <div className="my-3 border-t border-line" />

        <button
          type="button"
          onClick={toggleCalc}
          aria-pressed={calcOpen}
          className={cn(
            'flex h-9 w-full items-center gap-2.5 rounded-lg px-2.5 text-sm transition-colors',
            calcOpen ? 'bg-surface font-medium text-ink ring-1 ring-line' : 'text-ink-2 hover:bg-hover'
          )}
        >
          <Calculator className="h-4 w-4 text-ink-3" aria-hidden="true" />
          <span className="flex-1 text-left">Calculadora HP 12C</span>
        </button>
      </nav>

      <div className="px-3 pb-1">
        <CertSwitcher className="w-full" />
        {cert.provisional && <p className="mt-1.5 text-[11px] text-warn">Estrutura provisória</p>}
      </div>

      <div className="m-3 rounded-lg border border-line bg-surface p-3">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-xs text-ink-3">Prontidão para a prova</span>
          <span className="num text-sm font-semibold text-ink">{readiness}%</span>
        </div>
        <Progress value={readiness} />
        <p className="mt-2 text-[11px] text-ink-4">Meta de aprovação: {cert.passThreshold}%</p>
      </div>
    </aside>
  );
}
