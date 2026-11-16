import { useEffect, useRef } from 'react';
import { isTypingTarget } from '../lib/utils';

// map: { 'a': fn, 'Enter': fn, 'mod+k': fn, 'ArrowRight': fn }. Teclas simples são ignoradas ao digitar em campos.
export function useHotkeys(map, { enabled = true } = {}) {
  const ref = useRef(map);
  useEffect(() => {
    ref.current = map;
  });

  useEffect(() => {
    if (!enabled) return undefined;
    const onKey = (e) => {
      const handlers = ref.current;
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const combo = e.ctrlKey || e.metaKey ? `mod+${key}` : key;
      const fn = handlers[combo];
      if (!fn) return;
      if (!(e.ctrlKey || e.metaKey) && isTypingTarget(e.target)) return;
      if (e.altKey) return;
      e.preventDefault();
      fn(e);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [enabled]);
}
