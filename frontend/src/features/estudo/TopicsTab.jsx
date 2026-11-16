import { useState } from 'react';
import { ChevronLeft, ChevronRight, CircleCheck } from 'lucide-react';
import { useAppData } from '../../context/contexts';
import { MODULE_ORDER, MODULES_META } from '../../lib/constants';
import { cn, pct } from '../../lib/utils';
import Select from '../../components/ui/Select';
import Card from '../../components/ui/Card';
import Progress from '../../components/ui/Progress';
import Badge from '../../components/ui/Badge';
import RichHtml from '../../components/ui/RichHtml';
import TopicReader from './TopicReader';


export default function TopicsTab({ initialModuleId, initialTopicKey }) {
  const { modules, mastered, toggleTopic } = useAppData();

  const ordered = MODULE_ORDER.map((id) => modules.find((m) => m.id === id)).filter(Boolean);
  const list = ordered.length ? ordered : modules;
  const startModule = list.find((m) => m.id === initialModuleId)?.id ?? list[0]?.id;

  const [moduleId, setModuleId] = useState(startModule);
  const [activeKey, setActiveKey] = useState(initialTopicKey);

  const mod = modules.find((m) => m.id === moduleId) || list[0];
  const topicos = mod?.topicos || [];
  const keyOf = (t) => `${mod.id}_${t.codigo}`;
  const activeIdx = Math.max(
    0,
    topicos.findIndex((t) => keyOf(t) === activeKey || t.key === activeKey)
  );
  const topic = topicos[activeIdx];
  const doneCount = topicos.filter((t) => mastered[keyOf(t)]).length;
  const progress = pct(doneCount, topicos.length);

  const selectModule = (value) => {
    setModuleId(Number(value));
    setActiveKey(null);
  };
  const go = (idx) => {
    const t = topicos[idx];
    if (t) setActiveKey(keyOf(t));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[272px_minmax(0,1fr)]">
      <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
        <Select
          label="Módulo"
          className="w-full"
          value={String(mod.id)}
          onChange={selectModule}
          options={list.map((m) => ({
            value: String(m.id),
            label: MODULES_META[m.id]?.label || `Módulo ${m.id} — ${m.titulo}`,
          }))}
        />
        <Card className="p-3">
          <div className="mb-2 flex items-center justify-between text-xs text-ink-3">
            <span>Progresso do módulo</span>
            <span className="num text-ink-2">
              {doneCount}/{topicos.length}
            </span>
          </div>
          <Progress value={progress} tone="ok" label="Progresso do módulo" />
        </Card>

        <nav aria-label="Tópicos do módulo" className="hidden max-h-[calc(100vh-18rem)] overflow-y-auto pr-1 lg:block">
          <ul className="space-y-0.5">
            {topicos.map((t, i) => {
              const done = !!mastered[keyOf(t)];
              const active = i === activeIdx;
              return (
                <li key={keyOf(t)}>
                  <button
                    onClick={() => go(i)}
                    aria-current={active ? 'true' : undefined}
                    className={cn(
                      'flex min-h-8 w-full items-start gap-2 rounded-lg px-2.5 py-1.5 text-left text-[13px] transition-colors',
                      active ? 'bg-brand-soft text-brand' : 'text-ink-2 hover:bg-hover'
                    )}
                  >
                    <span className="num mt-px shrink-0 text-xs text-ink-3">{t.codigo}</span>
                    <span className="min-w-0 flex-1 leading-snug">{t.titulo}</span>
                    {done && <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-ok" aria-label="Dominado" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="lg:hidden">
          <Select
            label="Tópico"
            className="w-full"
            value={String(activeIdx)}
            onChange={(v) => go(Number(v))}
            options={topicos.map((t, i) => ({
              value: String(i),
              label: `${mastered[keyOf(t)] ? '✓ ' : ''}${t.codigo} — ${t.titulo}`,
            }))}
          />
        </div>
      </aside>

      <div className="min-w-0 space-y-6">
        {mod.resumoExecutivo && (
          <Card className="p-5">
            <div className="mb-2 flex items-center gap-2">
              <Badge tone="brand">Resumo executivo</Badge>
              {mod.peso && <span className="num text-xs text-ink-3">peso {mod.peso}</span>}
            </div>
            <RichHtml html={mod.resumoExecutivo} className="max-w-[72ch] text-sm leading-relaxed text-ink-2" />
          </Card>
        )}

        {topic ? (
          <>
            <TopicReader
              key={keyOf(topic)}
              topic={topic}
              done={!!mastered[keyOf(topic)]}
              onToggle={() => toggleTopic(keyOf(topic))}
            />
            <div className="flex max-w-[72ch] items-center justify-between">
              <button
                onClick={() => go(activeIdx - 1)}
                disabled={activeIdx === 0}
                className="inline-flex h-8 items-center gap-1 rounded-lg px-2 text-sm text-ink-2 hover:bg-hover disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Anterior
              </button>
              <span className="num text-xs text-ink-3">
                {activeIdx + 1} / {topicos.length}
              </span>
              <button
                onClick={() => go(activeIdx + 1)}
                disabled={activeIdx >= topicos.length - 1}
                className="inline-flex h-8 items-center gap-1 rounded-lg px-2 text-sm text-ink-2 hover:bg-hover disabled:pointer-events-none disabled:opacity-40"
              >
                Próximo <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </>
        ) : (
          <p className="text-sm text-ink-3">Este módulo ainda não possui tópicos.</p>
        )}
      </div>
    </div>
  );
}

