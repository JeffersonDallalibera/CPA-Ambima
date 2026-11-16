import { useMemo, useState } from 'react';
import { Calculator, CornerDownLeft, Search } from 'lucide-react';
import { useAppData, useUi } from '../../context/contexts';
import { NAV_ITEMS } from '../../lib/constants';
import { cn } from '../../lib/utils';
import Kbd from '../ui/Kbd';

function normalize(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function CommandPalette() {
  const { paletteOpen } = useUi();
  if (!paletteOpen) return null;
  return <PaletteDialog />;
}

function PaletteDialog() {
  const { navigate, setPaletteOpen, setCalcOpen } = useUi();
  const { allQuestions } = useAppData();
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);

  const items = useMemo(() => {
    const q = normalize(query.trim());
    const base = [
      ...NAV_ITEMS.map((n) => ({
        key: n.id,
        label: n.label,
        hint: 'Ir para',
        icon: n.icon,
        run: () => navigate(n.id),
      })),
      {
        key: 'calc',
        label: 'Abrir calculadora HP 12C',
        hint: 'Ferramenta',
        icon: Calculator,
        run: () => {
          setCalcOpen(true);
          setPaletteOpen(false);
        },
      },
    ].filter((i) => !q || normalize(i.label).includes(q));

    if (q.length < 3) return base;
    const found = allQuestions
      .filter((x) => normalize(`${x.enunciado} ${x.contexto || ''} ${x.codigoItem || ''}`).includes(q))
      .slice(0, 6)
      .map((x) => ({
        key: `q${x.id}`,
        label: x.enunciado.length > 90 ? `${x.enunciado.slice(0, 90)}…` : x.enunciado,
        hint: 'Questão',
        icon: Search,
        run: () => navigate('questoes', { moduleId: x.moduloId, questionId: x.id }),
      }));
    return [...base, ...found];
  }, [query, allQuestions, navigate, setCalcOpen, setPaletteOpen]);

  const safeCursor = Math.min(cursor, Math.max(0, items.length - 1));

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      setPaletteOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((safeCursor + 1) % Math.max(1, items.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((safeCursor - 1 + items.length) % Math.max(1, items.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      items[safeCursor]?.run();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink/20 px-4 pt-[14vh]"
      onMouseDown={(e) => e.target === e.currentTarget && setPaletteOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Busca e comandos"
        className="rise w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface shadow-pop"
      >
        <div className="flex items-center gap-2.5 border-b border-line px-4">
          <Search className="h-4 w-4 text-ink-3" aria-hidden="true" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Ir para uma tela ou buscar questões…"
            className="h-12 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-4"
          />
          <Kbd>Esc</Kbd>
        </div>

        <ul className="max-h-80 overflow-y-auto p-1.5" role="listbox">
          {items.length === 0 && <li className="px-3 py-6 text-center text-sm text-ink-3">Nada encontrado.</li>}
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={item.key} role="option" aria-selected={i === safeCursor}>
                <button
                  type="button"
                  onMouseEnter={() => setCursor(i)}
                  onClick={item.run}
                  className={cn(
                    'flex h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-sm',
                    i === safeCursor ? 'bg-hover text-ink' : 'text-ink-2'
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0 text-ink-3" aria-hidden="true" />
                  <span className="flex-1 truncate">{item.label}</span>
                  <span className="text-xs text-ink-4">{item.hint}</span>
                  {i === safeCursor && <CornerDownLeft className="h-3.5 w-3.5 text-ink-4" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
