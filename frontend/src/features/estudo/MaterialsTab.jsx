import { useState } from 'react';
import { ArrowRight, Clock, FileText } from 'lucide-react';
import { useAppData } from '../../context/contexts';
import { MODULES_META } from '../../lib/constants';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import EmptyState from '../../components/ui/EmptyState';
import MaterialReader from './MaterialReader';

export default function MaterialsTab() {
  const { materials } = useAppData();
  const [openId, setOpenId] = useState(null);
  const open = materials.find((m) => m.id === openId);

  if (open) return <MaterialReader material={open} onBack={() => setOpenId(null)} />;

  if (!materials.length) {
    return (
      <EmptyState
        icon={FileText}
        title="Nenhuma apostila disponível"
        description="As apostilas em Markdown não foram encontradas no servidor."
      />
    );
  }

  return (
    <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {materials.map((m) => {
        const meta = MODULES_META[m.moduleId];
        return (
          <li key={m.id}>
            <Card
              as="button"
              interactive
              onClick={() => setOpenId(m.id)}
              className="group flex h-full w-full flex-col gap-3 p-4 text-left"
            >
              <div className="flex items-center justify-between gap-2">
                <Badge tone="brand">{meta ? `Módulo ${m.moduleId}` : 'Plano'}</Badge>
                <ArrowRight className="h-4 w-4 text-ink-4 transition-transform group-hover:translate-x-0.5" />
              </div>
              <h3 className="text-sm font-semibold leading-snug text-ink">{m.title}</h3>
              <div className="mt-auto flex items-center gap-3 text-xs text-ink-3">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="num">{m.readingTimeMinutes}</span> min
                </span>
                <span>
                  <span className="num">{(m.wordCount || 0).toLocaleString('pt-BR')}</span> palavras
                </span>
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
