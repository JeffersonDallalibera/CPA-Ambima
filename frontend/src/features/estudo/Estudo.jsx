import { useMemo, useState } from 'react';
import { BookOpenText, FileText } from 'lucide-react';
import { useAppData, useUi } from '../../context/contexts';
import PageHeader from '../../components/ui/PageHeader';
import Tabs from '../../components/ui/Tabs';
import EmptyState from '../../components/ui/EmptyState';
import Skeleton from '../../components/ui/Skeleton';
import TopicsTab from './TopicsTab';
import MaterialsTab from './MaterialsTab';

const TABS = [
  { value: 'topicos', label: 'Tópicos', icon: BookOpenText },
  { value: 'apostilas', label: 'Apostilas', icon: FileText },
];

export default function Estudo() {
  const { modules, status } = useAppData();
  const { params } = useUi();
  const [tab, setTab] = useState('topicos');

  const initialModuleId = useMemo(() => (params?.moduleId != null ? Number(params.moduleId) : null), [params]);
  const initialTopicKey = params?.topicKey ?? null;

  if (status === 'loading' && !modules.length) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div className="rise">
      <PageHeader
        title="Estudo"
        description="Tópicos do edital organizados por módulo e apostilas completas para leitura."
        actions={<Tabs value={tab} onChange={setTab} items={TABS} />}
      />
      {!modules.length ? (
        <EmptyState icon={BookOpenText} title="Sem conteúdo disponível" description="Não foi possível carregar os módulos." />
      ) : tab === 'topicos' ? (
        <TopicsTab
          key={`${initialModuleId}-${initialTopicKey}`}
          initialModuleId={initialModuleId}
          initialTopicKey={initialTopicKey}
        />
      ) : (
        <MaterialsTab />
      )}
    </div>
  );
}
