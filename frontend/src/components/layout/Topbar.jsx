import { Search } from 'lucide-react';
import { useAppData, useUi } from '../../context/contexts';
import { NAV_ITEMS } from '../../lib/constants';
import CertSwitcher from './CertSwitcher';
import Kbd from '../ui/Kbd';
import PomodoroChip from './PomodoroChip';

export default function Topbar() {
  const { view, setPaletteOpen } = useUi();
  const { status } = useAppData();
  const current = NAV_ITEMS.find((n) => n.id === view);

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-line bg-canvas/90 px-4 backdrop-blur sm:px-6">
      <h1 className="hidden text-sm font-medium text-ink-2 sm:block">{current?.label}</h1>

      {status === 'offline' && (
        <span className="rounded-md border border-warn-line bg-warn-soft px-2 py-0.5 text-xs text-warn">
          Sem conexão com o servidor
        </span>
      )}

      <div className="ml-auto flex min-w-0 items-center gap-2">
        <CertSwitcher className="lg:hidden" />
        <button
          type="button"
          onClick={() => setPaletteOpen(true)}
          className="hidden h-9 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-sm text-ink-3 shadow-card hover:bg-subtle sm:flex"
          aria-label="Abrir busca e comandos"
        >
          <Search className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Buscar ou ir para…</span>
          <span className="ml-4 flex gap-1">
            <Kbd>Ctrl</Kbd>
            <Kbd>K</Kbd>
          </span>
        </button>
        <button
          type="button"
          onClick={() => setPaletteOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink-2 sm:hidden"
          aria-label="Abrir busca e comandos"
        >
          <Search className="h-4 w-4" />
        </button>
        <PomodoroChip />
      </div>
    </header>
  );
}
