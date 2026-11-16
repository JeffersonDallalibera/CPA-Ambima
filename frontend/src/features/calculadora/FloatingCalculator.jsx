import { useState } from 'react';
import { Calculator, Globe, X } from 'lucide-react';
import HP12C from './HP12C';
import { useUi } from '../../context/contexts';
import { useHotkeys } from '../../hooks/useHotkeys';

const ICON_BTN =
  'inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-3 transition-colors hover:bg-hover hover:text-ink';

function Panel({ onClose }) {
  const [mode, setMode] = useState('native');
  const isNative = mode === 'native';
  const toggleLabel = isNative ? 'Abrir emulador Estácio' : 'Voltar para a HP 12C nativa';

  return (
    <div
      role="dialog"
      aria-label="Calculadora HP 12C"
      className="rise fixed right-2 bottom-2 z-[70] flex max-h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] flex-col rounded-card border border-line bg-surface shadow-pop sm:right-4 sm:bottom-4 sm:w-[440px]"
    >
      <div className="flex items-center justify-between gap-2 border-b border-line px-3 py-2">
        <div className="flex items-center gap-2 text-sm font-medium text-ink">
          <Calculator className="h-4 w-4 text-ink-3" aria-hidden="true" />
          HP 12C
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={ICON_BTN}
            aria-label={toggleLabel}
            title={toggleLabel}
            onClick={() => setMode(isNative ? 'estacio' : 'native')}
          >
            {isNative ? (
              <Globe className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Calculator className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className={ICON_BTN}
            aria-label="Fechar calculadora"
            title="Fechar (Esc)"
            onClick={onClose}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="overflow-y-auto p-3">
        <HP12C mode={mode} onModeChange={setMode} />
      </div>
    </div>
  );
}

export default function FloatingCalculator() {
  const { calcOpen, setCalcOpen } = useUi();
  const close = () => setCalcOpen(false);

  useHotkeys({ Escape: close }, { enabled: calcOpen });

  if (!calcOpen) return null;
  return <Panel onClose={close} />;
}
