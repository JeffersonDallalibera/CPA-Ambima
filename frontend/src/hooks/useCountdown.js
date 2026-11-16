import { useCallback, useEffect, useRef, useState } from 'react';

// Contagem regressiva baseada em relógio (Date.now), sem recriar o intervalo a cada render.
export function useCountdown({ onEnd } = {}) {
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const deadline = useRef(0);
  const onEndRef = useRef(onEnd);

  useEffect(() => {
    onEndRef.current = onEnd;
  });

  useEffect(() => {
    if (!running) return undefined;
    const tick = () => {
      const left = Math.max(0, Math.round((deadline.current - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0) {
        setRunning(false);
        onEndRef.current?.();
      }
    };
    const id = setInterval(tick, 500);
    return () => clearInterval(id);
  }, [running]);

  const start = useCallback((seconds) => {
    deadline.current = Date.now() + seconds * 1000;
    setRemaining(seconds);
    setRunning(true);
  }, []);

  const pause = useCallback(() => {
    setRemaining(Math.max(0, Math.round((deadline.current - Date.now()) / 1000)));
    setRunning(false);
  }, []);

  const resume = useCallback(() => {
    deadline.current = Date.now() + remaining * 1000;
    setRunning(true);
  }, [remaining]);

  const reset = useCallback((seconds = 0) => {
    setRunning(false);
    setRemaining(seconds);
  }, []);

  return { remaining, running, start, pause, resume, reset };
}
