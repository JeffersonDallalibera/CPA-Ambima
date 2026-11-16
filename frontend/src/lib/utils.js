export function cn(...parts) {
  return parts.filter(Boolean).join(' ');
}

export function shuffle(arr) {
  const copy = [...(arr || [])];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pct(part, total) {
  return total ? Math.round((part / total) * 100) : 0;
}

export function formatClock(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return h > 0 ? `${String(h).padStart(2, '0')}:${m}:${sec}` : `${m}:${sec}`;
}

export const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export function isTypingTarget(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
}
