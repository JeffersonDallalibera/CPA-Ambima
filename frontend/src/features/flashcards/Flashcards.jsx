import { useMemo, useState } from 'react';
import { Layers } from 'lucide-react';
import { useAppData } from '../../context/contexts';
import { MODULES_META } from '../../lib/constants';
import { isDue } from '../../lib/srs';
import Tabs from '../../components/ui/Tabs';
import PageHeader from '../../components/ui/PageHeader';
import Select from '../../components/ui/Select';
import EmptyState from '../../components/ui/EmptyState';
import Skeleton from '../../components/ui/Skeleton';
import Deck from './Deck';

export default function Flashcards() {
  const { modules, status, cert, cardSrs, gradeCard } = useAppData();
  const MODULE_ORDER = cert.moduleOrder;
  const [moduleFilter, setModuleFilter] = useState('all');
  const [mode, setMode] = useState('due');

  const pool = useMemo(() => {
    const ordered = MODULE_ORDER.map((id) => modules.find((m) => m.id === id)).filter(Boolean);
    return (ordered.length ? ordered : modules)
      .filter((m) => moduleFilter === 'all' || String(m.id) === moduleFilter)
      .flatMap((m) => (m.flashcards || []).map((f) => ({ ...f, moduloId: m.id })));
  }, [modules, moduleFilter, MODULE_ORDER]);

  const dueCount = pool.filter((c) => isDue(cardSrs[c.id])).length;
  const hasCards = mode === 'due' ? dueCount > 0 || pool.some((c) => !cardSrs[c.id]) : pool.length > 0;

  const options = [
    { value: 'all', label: 'Todos os módulos' },
    ...MODULE_ORDER.filter((id) => modules.some((m) => m.id === id)).map((id) => ({
      value: String(id),
      label: MODULES_META[id]?.label || `Módulo ${id}`,
    })),
  ];

  if (status === 'loading' && !modules.length) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="mx-auto h-80 max-w-2xl" />
      </div>
    );
  }

  return (
    <div className="rise">
      <PageHeader
        title="Flashcards"
        description="Repetição espaçada: avalie cada cartão e ele volta no momento certo para você não esquecer."
        actions={<Select label="Filtrar por módulo" className="w-64" value={moduleFilter} onChange={setModuleFilter} options={options} />}
      />
      <Tabs
        className="mb-5"
        value={mode}
        onChange={setMode}
        items={[
          { value: 'due', label: `Revisão do dia (${dueCount})` },
          { value: 'all', label: 'Todos os cartões' },
        ]}
      />
      {hasCards ? (
        <Deck
          key={moduleFilter + mode}
          pool={pool}
          mode={mode}
          cardSrs={cardSrs}
          onGrade={gradeCard}
        />
      ) : (
        <EmptyState icon={Layers} title={mode === 'due' ? 'Revisão em dia' : 'Nenhum flashcard disponível'} description={mode === 'due' ? 'Nenhum cartão vence hoje. Volte amanhã ou estude todos os cartões.' : 'Não há cartões para o filtro selecionado.'} />
      )}
    </div>
  );
}
