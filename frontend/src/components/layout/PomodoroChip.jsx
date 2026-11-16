import { Pause, Play, RotateCcw, Timer } from 'lucide-react';
import { usePomodoro } from '../../hooks/usePomodoro';
import { formatClock } from '../../lib/utils';

export default function PomodoroChip() {
  const { seconds, running, toggle, restart } = usePomodoro();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-line bg-surface py-1 pl-2.5 pr-1 shadow-card">
      <Timer className="h-3.5 w-3.5 text-ink-3" aria-hidden="true" />
      <span className="num w-[3.2rem] text-center text-[13px] font-medium text-ink" aria-label="Tempo de foco restante">
        {formatClock(seconds)}
      </span>
      <button
        type="button"
        onClick={toggle}
        aria-label={running ? 'Pausar foco' : 'Iniciar foco de 50 minutos'}
        className="flex h-7 w-7 items-center justify-center rounded-md text-ink-2 hover:bg-hover"
      >
        {running ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
      </button>
      <button
        type="button"
        onClick={restart}
        aria-label="Reiniciar foco"
        className="flex h-7 w-7 items-center justify-center rounded-md text-ink-3 hover:bg-hover"
      >
        <RotateCcw className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
