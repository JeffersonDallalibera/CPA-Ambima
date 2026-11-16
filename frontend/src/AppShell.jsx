import { Suspense, lazy } from 'react';
import { WifiOff } from 'lucide-react';
import AppProvider from './context/AppProvider';
import { useAppData, useUi } from './context/contexts';
import { NAV_ITEMS } from './lib/constants';
import { useHotkeys } from './hooks/useHotkeys';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import MobileNav from './components/layout/MobileNav';
import CommandPalette from './components/layout/CommandPalette';
import Button from './components/ui/Button';
import EmptyState from './components/ui/EmptyState';
import Skeleton from './components/ui/Skeleton';
import FloatingCalculator from './features/calculadora/FloatingCalculator';

const VIEWS = {
  dashboard: lazy(() => import('./features/dashboard/Dashboard')),
  simulados: lazy(() => import('./features/simulados/Simulados')),
  questoes: lazy(() => import('./features/questoes/Questoes')),
  mapas: lazy(() => import('./features/mapas/Mapas')),
  estudo: lazy(() => import('./features/estudo/Estudo')),
  flashcards: lazy(() => import('./features/flashcards/Flashcards')),
};

function LoadingScreen() {
  return (
    <div className="space-y-4" aria-busy="true" aria-label="Carregando">
      <Skeleton className="h-8 w-56" />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-24" />
        ))}
      </div>
      <Skeleton className="h-64" />
    </div>
  );
}

function Content() {
  const { view } = useUi();
  const { status, reload } = useAppData();

  if (status === 'loading') return <LoadingScreen />;
  if (status === 'offline') {
    return (
      <EmptyState
        icon={WifiOff}
        title="Não foi possível carregar os dados"
        description="Verifique se o servidor está em execução e tente novamente."
        action={<Button variant="primary" onClick={reload}>Tentar novamente</Button>}
      />
    );
  }

  const View = VIEWS[view] || VIEWS.dashboard;
  return (
    <Suspense fallback={<LoadingScreen />}>
      <View />
    </Suspense>
  );
}

function Shell() {
  const { navigate, setPaletteOpen, paletteOpen } = useUi();

  const hotkeys = { 'mod+k': () => setPaletteOpen(!paletteOpen) };
  NAV_ITEMS.forEach((n) => {
    hotkeys[n.hotkey] = () => navigate(n.id);
  });
  useHotkeys(hotkeys);

  return (
    <div className="flex min-h-screen bg-canvas text-ink">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 pt-6 sm:px-6 lg:pb-10">
          <Content />
        </main>
      </div>
      <MobileNav />
      <FloatingCalculator />
      <CommandPalette />
    </div>
  );
}

export default function AppShell() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
