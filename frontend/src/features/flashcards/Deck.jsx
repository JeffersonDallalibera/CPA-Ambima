import { useState } from 'react';
import { Check, PartyPopper, ChevronLeft, ChevronRight, RotateCw, Shuffle } from 'lucide-react';
import { useHotkeys } from '../../hooks/useHotkeys';
import { pct, shuffle, cn } from '../../lib/utils';
import { GRADES, intervalLabel, isDue } from '../../lib/srs';
import { MODULES_META } from '../../lib/constants';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Progress from '../../components/ui/Progress';
import RichHtml from '../../components/ui/RichHtml';
import Kbd from '../../components/ui/Kbd';

// Fila do dia: vencidos primeiro, depois até 10 cartões novos. Congelada ao montar para não mudar durante a sessão.
function buildQueue(pool, cardSrs) {
  const due = pool.filter((c) => isDue(cardSrs[c.id]));
  const fresh = pool.filter((c) => !cardSrs[c.id]).slice(0, 10);
  return [...due, ...fresh];
}

export default function Deck({ pool, mode, cardSrs, onGrade }) {
  const [order, setOrder] = useState(() => (mode === 'due' ? buildQueue(pool, cardSrs) : pool));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = order[Math.min(index, order.length - 1)];
  const [graded, setGraded] = useState({});
  const gradedCount = Object.keys(graded).length;
  const state = cardSrs[card.id];

  const goTo = (i) => {
    if (i < 0 || i >= order.length) return;
    setIndex(i);
    setFlipped(false);
  };
  const flip = () => setFlipped((f) => !f);
  const grade = (g) => {
    if (!flipped) return;
    onGrade(card.id, g);
    setGraded((prev) => ({ ...prev, [card.id]: g }));
    if (index < order.length - 1) goTo(index + 1);
    else setFlipped(false);
  };
  const doShuffle = () => {
    setOrder(shuffle(order));
    setIndex(0);
    setFlipped(false);
  };

  useHotkeys({
    ' ': flip,
    ArrowRight: () => goTo(index + 1),
    ArrowLeft: () => goTo(index - 1),
    q: () => grade('again'),
    w: () => grade('hard'),
    e: () => grade('good'),
    r: () => grade('easy'),
  });

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-ink-3">
            Cartão <span className="num text-ink">{index + 1}</span> de{' '}
            <span className="num text-ink">{order.length}</span>
          </span>
          <span className="text-xs text-ink-3">
            <span className="num text-ok">{gradedCount}</span> avaliados
          </span>
        </div>
        <Progress value={pct(index + 1, order.length)} label="Progresso no baralho" />
      </div>

      {gradedCount === order.length && (
        <div className="flex items-center justify-center gap-2 rounded-lg border border-ok-line bg-ok-soft px-3 py-2 text-sm text-ok">
          <PartyPopper className="h-4 w-4" aria-hidden="true" /> Sessão concluída. Os cartões voltam no intervalo indicado.
        </div>
      )}

      <div className="flip-scene">
        <div
          className="flip-card relative h-80 w-full cursor-pointer"
          data-flipped={flipped}
          onClick={flip}
        >
          <div
            className="flip-face absolute inset-0 flex flex-col items-center rounded-card border border-line bg-surface p-8 text-center shadow-card"
            aria-hidden={flipped}
          >
            <div className="mb-4 flex items-center gap-2">
              <Badge tone="brand">Pergunta</Badge>
              <span className="text-xs text-ink-3">{MODULES_META[card.moduloId]?.short}</span>
              {state?.interval > 0 && <Badge tone="ok" icon={Check}>Intervalo: {state.interval}d</Badge>}
            </div>
            <div className="flex min-h-0 w-full flex-1 items-center justify-center overflow-y-auto">
              <RichHtml html={card.frente} className="text-lg font-medium leading-relaxed text-ink" />
            </div>
            <span className="mt-3 text-xs text-ink-4">Clique para ver a resposta</span>
          </div>
          <div
            className="flip-face flip-back absolute inset-0 flex flex-col items-center rounded-card border border-brand-line bg-brand-soft p-8 text-center shadow-card"
            aria-hidden={!flipped}
          >
            <div className="mb-4">
              <Badge tone="brand">Resposta</Badge>
            </div>
            <div className="flex min-h-0 w-full flex-1 items-center justify-center overflow-y-auto">
              <RichHtml html={card.verso} className="text-base leading-relaxed text-ink-2" />
            </div>
          </div>
        </div>
      </div>

      <div className={cn('grid grid-cols-2 gap-2 sm:grid-cols-4', !flipped && 'pointer-events-none opacity-40')}>
        {GRADES.map((g) => (
          <button
            key={g.id}
            type="button"
            disabled={!flipped}
            onClick={() => grade(g.id)}
            className={cn(
              'flex min-h-14 flex-col items-center justify-center rounded-lg border px-2 py-1.5 text-sm transition-colors hover:bg-hover',
              graded[card.id] === g.id ? 'border-brand bg-brand-soft text-brand' : 'border-line bg-surface text-ink'
            )}
          >
            <span className="font-medium">{g.label}</span>
            <span className="text-[11px] text-ink-3">{intervalLabel(state, g.id)} · tecla {g.key}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button icon={ChevronLeft} onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Cartão anterior" />
        <Button variant="primary" icon={RotateCw} onClick={flip}>
          Virar
        </Button>
        <Button
          icon={ChevronRight}
          onClick={() => goTo(index + 1)}
          disabled={index >= order.length - 1}
          aria-label="Próximo cartão"
        />
        <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
        <Button variant="ghost" icon={Shuffle} onClick={doShuffle}>
          Embaralhar
        </Button>
      </div>

      <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-ink-3">
        <span className="inline-flex items-center gap-1.5"><Kbd>Espaço</Kbd> virar</span>
        <span className="inline-flex items-center gap-1.5"><Kbd>←</Kbd><Kbd>→</Kbd> navegar</span>
        <span className="inline-flex items-center gap-1.5"><Kbd>Q</Kbd>–<Kbd>R</Kbd> avaliar</span>
      </p>
    </div>
  );
}
