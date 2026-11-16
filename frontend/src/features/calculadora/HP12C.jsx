import { useState } from 'react';
import { Calculator, Globe } from 'lucide-react';
import { HP12CEngine } from './engine';
import { BUTTON_LAYOUT } from './layout';
import { cn } from '../../lib/utils';

const IGNORED_KEYS = new Set(['CHS_ALT', 'R/S', 'SST', 'Σ+']);
const ESTACIO_URL = 'https://simulado.estacio.br/img/Hp/';

const KEY_STYLES = {
  default: 'border-[#14161a] bg-[#3b3f46] text-[#f1f2f4] hover:bg-[#474c54]',
  f: 'border-[#6b4a12] bg-[#c58a1d] text-[#16130c] hover:bg-[#d49a2b]',
  g: 'border-[#1d4468] bg-[#3f7fb5] text-white hover:bg-[#4b8ec6]',
};

function ModeButton({ mode, onClick }) {
  const toNative = mode === 'estacio';
  const Icon = toNative ? Calculator : Globe;
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[#4a4f57] bg-[#2a2d33] px-2.5 text-xs font-medium text-[#e5e7eb] transition-colors hover:bg-[#363a41] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fb0e0]"
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {toNative ? 'HP 12C nativa' : 'Emulador Estácio'}
    </button>
  );
}

export default function HP12C({ compact = false, mode: modeProp, onModeChange }) {
  const [eng] = useState(() => new HP12CEngine());
  const [, setTick] = useState(0);
  const [innerMode, setInnerMode] = useState('native'); // 'native' | 'estacio'

  const controlled = typeof onModeChange === 'function';
  const mode = controlled && modeProp ? modeProp : innerMode;
  const setMode = controlled ? onModeChange : setInnerMode;

  const handlePress = (key) => {
    if (IGNORED_KEYS.has(key)) return;
    eng.pressKey(key);
    setTick((t) => t + 1);
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (/^[0-9]$/.test(e.key)) handlePress(e.key);
    else if (e.key === '.' || e.key === ',') handlePress('.');
    else if (e.key === '+') handlePress('+');
    else if (e.key === '-') handlePress('-');
    else if (e.key === '*') handlePress('*');
    else if (e.key === '/') {
      e.preventDefault();
      handlePress('/');
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handlePress('ENTER');
    } else if (e.key === 'Backspace') {
      handlePress('CLx');
    }
  };

  if (mode === 'estacio') {
    return (
      <div className="rounded-lg border border-line bg-subtle p-3">
        {!controlled && (
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-xs font-medium text-ink-2">
              <Globe className="h-4 w-4" aria-hidden="true" /> Emulador HP 12C (Estácio)
            </span>
            <ModeButton mode={mode} onClick={() => setMode('native')} />
          </div>
        )}
        <iframe
          src={ESTACIO_URL}
          title="Emulador HP 12C (Estácio)"
          className="h-[400px] w-full rounded-md border border-line bg-white"
        />
      </div>
    );
  }

  const stackY = eng.stack[1].toFixed(2).replace('.', ',');

  return (
    <div
      tabIndex={0}
      role="group"
      aria-label="Calculadora HP 12C. Use o teclado para digitar números e operações."
      onKeyDown={handleKeyDown}
      className="select-none rounded-lg border border-[#0d0f12] bg-[#23262b] p-3 outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold italic tracking-tight text-[#e8c36a]">hp</span>
          <span className="text-[11px] font-medium tracking-[0.14em] text-[#a3a8b0] uppercase">
            12c financial
          </span>
        </div>
        {!controlled && <ModeButton mode={mode} onClick={() => setMode('estacio')} />}
      </div>

      <div className="mb-2 rounded-md border border-[#0d0f12] bg-[#15171a] p-1.5">
        <div
          className="rounded-sm bg-[#aeb89b] px-3 py-2 font-mono text-[#1c2117]"
          role="status"
          aria-live="polite"
          aria-label="Visor da calculadora"
        >
          <div className="num min-h-[34px] text-right text-2xl font-semibold tracking-wider">
            {eng.formatDisplay()}
          </div>
          <div className="mt-0.5 flex items-center justify-between border-t border-[#1c2117]/20 pt-0.5 text-[10px] font-medium">
            <span className="min-w-8">{eng.prefix ? eng.prefix.toUpperCase() : '\u00A0'}</span>
            <span>{eng.beginMode ? 'BEGIN' : 'END'}</span>
            <span>RPN</span>
            <span className="num opacity-80">Y: {stackY}</span>
          </div>
        </div>
      </div>

      <div className="num mb-2.5 flex flex-wrap justify-between gap-x-2 gap-y-0.5 rounded-md bg-[#15171a] px-2.5 py-1 text-[11px] text-[#c9ced6]">
        <span><b className="font-medium text-[#8f959e]">n </b>{eng.tvm.n.toFixed(1)}</span>
        <span><b className="font-medium text-[#8f959e]">i </b>{eng.tvm.i.toFixed(2)}%</span>
        <span><b className="font-medium text-[#8f959e]">PV </b>{eng.tvm.PV.toFixed(0)}</span>
        <span><b className="font-medium text-[#8f959e]">PMT </b>{eng.tvm.PMT.toFixed(1)}</span>
        <span><b className="font-medium text-[#8f959e]">FV </b>{eng.tvm.FV.toFixed(0)}</span>
      </div>

      <div className="grid grid-cols-10 gap-1">
        {BUTTON_LAYOUT.map((b) => {
          const style = KEY_STYLES[b.variant] || KEY_STYLES.default;
          const inert = IGNORED_KEYS.has(b.key);
          const label = [b.f && `f ${b.f}`, b.top && `g ${b.top}`].filter(Boolean).join(', ');
          return (
            <button
              key={b.key}
              type="button"
              disabled={inert}
              aria-label={`${b.main.replace(/\s/g, '')}${label ? ` (${label})` : ''}`}
              onClick={() => handlePress(b.key)}
              className={cn(
                'flex flex-col items-center justify-between rounded border border-b-[3px] px-0.5 py-1 transition-transform focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#7fb0e0] active:translate-y-px active:border-b enabled:cursor-pointer disabled:opacity-40',
                b.rowSpan2 ? 'row-span-2 min-h-[84px]' : 'min-h-10',
                style
              )}
            >
              <span aria-hidden="true" className="text-[9px] leading-none font-semibold text-[#e8b04a]">
                {b.f || '\u00A0'}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'text-center leading-tight font-semibold',
                  b.rowSpan2 ? 'text-[10px]' : 'text-[11px]'
                )}
              >
                {b.main}
              </span>
              <span aria-hidden="true" className="text-[9px] leading-none font-medium text-[#8cc0ee]">
                {b.top || '\u00A0'}
              </span>
            </button>
          );
        })}
      </div>

      {!compact && (
        <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 border-t border-[#3a3e45] pt-2 text-[11px] text-[#a3a8b0]">
          <span>
            BDR:{' '}
            <code className="num rounded bg-[#15171a] px-1 text-[#c9ced6]">480 ENTER 5.41 × 24 ÷</code>
          </span>
          <span>
            Fisher:{' '}
            <code className="num rounded bg-[#15171a] px-1 text-[#c9ced6]">
              1.12 ENTER 1.045 ÷ 1 - 100 ×
            </code>
          </span>
          <span>
            Limpar TVM: <code className="num rounded bg-[#15171a] px-1 text-[#c9ced6]">f x≷y</code>
          </span>
        </div>
      )}
    </div>
  );
}
