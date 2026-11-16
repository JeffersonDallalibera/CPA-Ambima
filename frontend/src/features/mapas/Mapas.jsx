import { useState } from 'react';
import { GitBranch } from 'lucide-react';
import EmptyState from '../../components/ui/EmptyState';
import PageHeader from '../../components/ui/PageHeader';
import Select from '../../components/ui/Select';
import Skeleton from '../../components/ui/Skeleton';
import Tabs from '../../components/ui/Tabs';
import { useAppData } from '../../context/contexts';
import { MODULES_META, MODULE_ORDER } from '../../lib/constants';
import MapList from './MapList';
import MapRunner from './MapRunner';

const STATUS_TABS = [
  { value: 'all', label: 'Todos' },
  { value: 'new', label: 'Novos' },
  { value: 'done', label: 'Concluídos' },
];

export default function Mapas() {
  const { status, maps, completedMaps, completeMap } = useAppData();
  const [activeId, setActiveId] = useState(null);
  const [moduleFilter, setModuleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [runKey, setRunKey] = useState(0);

  const active = maps.find((m) => m.id === activeId);

  if (active) {
    return (
      <MapRunner
        key={`${active.id}-${runKey}`}
        map={active}
        onBack={() => setActiveId(null)}
        onComplete={completeMap}
      />
    );
  }

  const isDone = (m) => completedMaps[m.id]?.completed ?? m.completed;
  const filtered = maps.filter((m) => {
    if (moduleFilter !== 'all' && String(m.modulo) !== moduleFilter) return false;
    if (statusFilter === 'done') return !!isDone(m);
    if (statusFilter === 'new') return !isDone(m);
    return true;
  });
  const doneCount = maps.filter(isDone).length;

  const moduleOptions = [
    { value: 'all', label: 'Todos os módulos' },
    ...MODULE_ORDER.map((id) => ({ value: String(id), label: MODULES_META[id].short })),
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        title="Mapas de decisão"
        description={
          maps.length
            ? `Casos de atendimento com diálogo ramificado. ${doneCount} de ${maps.length} concluídos.`
            : 'Casos de atendimento com diálogo ramificado.'
        }
      />

      {status === 'loading' && !maps.length ? (
        <div className="grid gap-3 md:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      ) : !maps.length ? (
        <EmptyState
          icon={GitBranch}
          title="Nenhum mapa disponível"
          description="Os casos de decisão ainda não foram carregados."
        />
      ) : (
        <>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Tabs value={statusFilter} onChange={setStatusFilter} items={STATUS_TABS} />
            <Select
              label="Filtrar por módulo"
              value={moduleFilter}
              onChange={setModuleFilter}
              options={moduleOptions}
              className="sm:ml-auto"
            />
          </div>
          <MapList
            maps={filtered}
            completedMaps={completedMaps}
            onOpen={(id) => {
              setRunKey((k) => k + 1);
              setActiveId(id);
            }}
          />
        </>
      )}
    </div>
  );
}
