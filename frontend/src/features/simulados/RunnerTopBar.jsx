import { Calculator, Clock, DoorOpen, Flag } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Progress from '../../components/ui/Progress';
import { cn, formatClock } from '../../lib/utils';

const TEXT_TONE = { brand: 'text-ink', warn: 'text-warn', bad: 'text-bad' };

// Topo do simulado: título, cronômetro, barra de tempo e ações.
export default function RunnerTopBar({ label, assisted, left, limit, onCalc, onFinish, onExit }) {
  const ratio = limit > 0 ? left / limit : 1;
  const tone = left <= 120 ? 'bad' : ratio <= 0.1 ? 'warn' : 'brand';

  return (
    <header className="rounded-card border border-line bg-surface px-4 py-3 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <h1 className="truncate text-sm font-semibold text-ink">{label}</h1>
          <Badge tone={assisted ? 'brand' : 'neutral'}>{assisted ? 'Assistido' : 'Oficial'}</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span
            role="timer"
            aria-label="Tempo restante"
            className={cn('num inline-flex items-center gap-1.5 text-base font-semibold', TEXT_TONE[tone])}
          >
            <Clock className="h-4 w-4" aria-hidden="true" />
            {formatClock(left)}
          </span>
          <Button size="sm" icon={Calculator} onClick={onCalc} aria-label="Abrir ou fechar a HP 12C">
            HP 12C
          </Button>
          <Button size="sm" variant="primary" icon={Flag} onClick={onFinish}>
            Finalizar
          </Button>
          <Button size="sm" variant="ghost" icon={DoorOpen} onClick={onExit}>
            Sair
          </Button>
        </div>
      </div>
      <Progress value={ratio * 100} tone={tone} label="Tempo restante" className="mt-3 h-1" />
    </header>
  );
}
