// Repetição espaçada (variação simplificada do SM-2). O estado é por item: { ease, interval, reps, lapses, due }.
export const DAY_MS = 86400000;

export const GRADES = [
  { id: 'again', label: 'Errei', key: 'Q' },
  { id: 'hard', label: 'Difícil', key: 'W' },
  { id: 'good', label: 'Bom', key: 'E' },
  { id: 'easy', label: 'Fácil', key: 'R' },
];

export function nextState(prev, grade, now = Date.now()) {
  let { ease = 2.5, interval = 0, reps = 0, lapses = 0 } = prev || {};

  if (grade === 'again') {
    return { ease: Math.max(1.3, ease - 0.2), interval: 0, reps: 0, lapses: lapses + 1, due: now, last: now };
  }

  reps += 1;
  if (grade === 'hard') ease = Math.max(1.3, ease - 0.15);
  if (grade === 'easy') ease += 0.15;

  if (reps === 1) interval = grade === 'easy' ? 3 : 1;
  else if (reps === 2) interval = grade === 'hard' ? 3 : grade === 'easy' ? 8 : 6;
  else {
    const factor = grade === 'hard' ? 1.2 : grade === 'easy' ? ease * 1.3 : ease;
    interval = Math.max(interval + 1, Math.round(interval * factor));
  }
  return { ease, interval, reps, lapses, due: now + interval * DAY_MS, last: now };
}

export function endOfToday(now = Date.now()) {
  const d = new Date(now);
  d.setHours(23, 59, 59, 999);
  return d.getTime();
}

export const isDue = (state, now = Date.now()) => !!state && state.due <= endOfToday(now);

export function intervalLabel(prev, grade) {
  const next = nextState(prev, grade, 0);
  if (!next.interval) return 'hoje';
  return next.interval === 1 ? '1 dia' : `${next.interval} dias`;
}

export function daysUntil(dateStr, now = Date.now()) {
  if (!dateStr) return null;
  const target = new Date(`${dateStr}T23:59:59`).getTime();
  if (Number.isNaN(target)) return null;
  return Math.ceil((target - now) / DAY_MS);
}
