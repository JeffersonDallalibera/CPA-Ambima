import { useCallback, useState } from 'react';

// useState com persistência em localStorage (falhas de acesso são ignoradas).
export function usePersistentState(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw === null ? initial : JSON.parse(raw);
    } catch {
      return initial;
    }
  });

  const set = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === 'function' ? next(prev) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          // armazenamento indisponível: mantém só em memória
        }
        return resolved;
      });
    },
    [key]
  );

  return [value, set];
}
