import { useCallback } from 'react';
import { POMODORO_SECONDS } from '../lib/constants';
import { useCountdown } from './useCountdown';

export function usePomodoro() {
  const cd = useCountdown();
  const { remaining, running, start, pause, resume, reset } = cd;

  const idle = !running && remaining === 0;
  const display = idle ? POMODORO_SECONDS : remaining;

  const toggle = useCallback(() => {
    if (running) pause();
    else if (remaining > 0) resume();
    else start(POMODORO_SECONDS);
  }, [running, remaining, pause, resume, start]);

  const restart = useCallback(() => reset(0), [reset]);

  return { seconds: display, running, toggle, restart };
}
