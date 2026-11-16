import { CheckCircle2, ChevronRight, GitBranch, Trophy } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Card from '../../components/ui/Card';
import EmptyState from '../../components/ui/EmptyState';
import { MODULES_META } from '../../lib/constants';

export default function MapList({ maps, completedMaps, onOpen }) {
  if (!maps.length) {
    return (
      <EmptyState
        icon={GitBranch}
        title="Nenhum caso encontrado"
        description="Ajuste os filtros para ver outros casos de decisão."
      />
    );
  }

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {maps.map((m) => {
        const done = completedMaps[m.id]?.completed ?? m.completed;
        const best = completedMaps[m.id]?.bestScore ?? m.bestScore ?? 0;
        const limite = m.limite || 5;
        const mod = MODULES_META[m.modulo];
        const steps = Object.keys(m.etapas || {}).length;
        return (
          <Card
            key={m.id}
            as="button"
            type="button"
            interactive
            onClick={() => onOpen(m.id)}
            className="rise flex w-full flex-col gap-3 p-4 text-left"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-ink-3">
                  {mod && <span>{mod.short}</span>}
                  {m.codigoItem && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="num">Item {m.codigoItem}</span>
                    </>
                  )}
                </div>
                <h3 className="mt-1 text-[15px] font-semibold leading-snug text-ink">
                  {m.titulo || m.topicoPD}
                </h3>
                {m.titulo && m.topicoPD && (
                  <p className="mt-1 line-clamp-2 text-[13px] text-ink-3">{m.topicoPD}</p>
                )}
              </div>
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-4" />
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-1.5">
              {m.dificuldade && <Badge>{m.dificuldade}</Badge>}
              {steps > 0 && <Badge><span className="num">{steps}</span> etapas</Badge>}
              {done ? (
                <Badge tone="ok" icon={CheckCircle2}>
                  Concluído
                </Badge>
              ) : (
                <Badge tone="brand">Novo</Badge>
              )}
              {done && (
                <Badge icon={Trophy}>
                  Melhor nota <span className="num">{best}/{limite}</span>
                </Badge>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
