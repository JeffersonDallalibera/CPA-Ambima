import { useState } from 'react';
import { Search, LogIn, LogOut, ShieldCheck } from 'lucide-react';
import { useAppData, useUi } from '../../context/contexts';
import { NAV_ITEMS } from '../../lib/constants';
import CertSwitcher from './CertSwitcher';
import Kbd from '../ui/Kbd';
import PomodoroChip from './PomodoroChip';
import AuthModal from '../auth/AuthModal';

export default function Topbar() {
  const { view, setPaletteOpen } = useUi();
  const { status } = useAppData();
  const current = NAV_ITEMS.find((n) => n.id === view);

  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cpa_jwt_user') || 'null');
    } catch {
      return null;
    }
  });

  const handleLogout = () => {
    localStorage.removeItem('cpa_jwt_token');
    localStorage.removeItem('cpa_jwt_user');
    setUser(null);
  };

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

        {user ? (
          <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span className="hidden font-semibold text-emerald-300 sm:inline">
              {user.alias} ({user.emailMasked})
            </span>
            <button
              type="button"
              onClick={handleLogout}
              title="Sair"
              className="text-slate-400 hover:text-rose-400"
            >
              <LogOut className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              window.location.href = '/login';
            }}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-brand px-3 text-xs font-semibold text-white hover:opacity-90"
          >
            <LogIn className="h-3.5 w-3.5" /> Entrar
          </button>
        )}
      </div>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onAuthSuccess={(u) => setUser(u)}
      />
    </header>
  );
}
