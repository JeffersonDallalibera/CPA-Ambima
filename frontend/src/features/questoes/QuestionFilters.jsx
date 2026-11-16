import Select from '../../components/ui/Select';
import SearchInput from '../../components/ui/SearchInput';
import { MODULES_META, MODULE_ORDER } from '../../lib/constants';

const MODULE_OPTIONS = [
  { value: 'all', label: 'Todos os módulos' },
  ...MODULE_ORDER.map((id) => ({ value: String(id), label: MODULES_META[id].label })),
];

const ORIGIN_OPTIONS = [
  { value: 'all', label: 'Todas as origens' },
  { value: 'oficial', label: 'Oficiais' },
  { value: 'inedita', label: 'Inéditas' },
  { value: 'wrong', label: 'Caderno de erros' },
  { value: 'fav', label: 'Favoritas' },
];

export default function QuestionFilters({
  moduleId,
  origin,
  search,
  onModuleChange,
  onOriginChange,
  onSearchChange,
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1">
      <Select label="Filtrar por módulo" value={moduleId} onChange={onModuleChange} options={MODULE_OPTIONS} />
      <Select label="Filtrar por origem" value={origin} onChange={onOriginChange} options={ORIGIN_OPTIONS} />
      <SearchInput value={search} onChange={onSearchChange} placeholder="Buscar enunciado, contexto ou código" />
    </div>
  );
}

