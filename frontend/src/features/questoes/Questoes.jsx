import { useMemo, useState } from 'react';
import { SearchX } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import EmptyState from '../../components/ui/EmptyState';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Skeleton from '../../components/ui/Skeleton';
import { useAppData, useUi } from '../../context/contexts';
import QuestionFilters from './QuestionFilters';
import QuestionNavigator from './QuestionNavigator';
import QuestionView from './QuestionView';

export default function Questoes() {
  const { status, allQuestions, answered, favorites, answerQuestion, toggleFavorite } = useAppData();
  const { params } = useUi();

  const [moduleId, setModuleId] = useState(params?.moduleId ? String(params.moduleId) : 'all');
  const [origin, setOrigin] = useState('all');
  const [search, setSearch] = useState('');
  const [index, setIndex] = useState(0);
  // Congela erradas/favoritas ao mudar o filtro: a questão atual não some da lista ao responder ou favoritar.
  const [snapshot, setSnapshot] = useState({ answered, favorites });

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return allQuestions.filter((q) => {
      if (moduleId !== 'all' && String(q.moduloId) !== moduleId) return false;
      if (origin === 'oficial' && !q.oficial) return false;
      if (origin === 'inedita' && q.oficial) return false;
      if (origin === 'wrong' && !(snapshot.answered[q.id] && !snapshot.answered[q.id].correct)) return false;
      if (origin === 'fav' && !snapshot.favorites[q.id]) return false;
      if (term) {
        const hay = `${q.codigoItem || ''} ${q.topicoPD || ''} ${q.contexto || ''} ${q.enunciado || ''}`.toLowerCase();
        if (!hay.includes(term)) return false;
      }
      return true;
    });
  }, [allQuestions, moduleId, origin, search, snapshot]);

  // Mudanças de filtro voltam ao início; o clamp cobre a lista encolher (ex.: caderno de erros).
  const safeIndex = Math.min(index, Math.max(filtered.length - 1, 0));
  const current = filtered[safeIndex];

  const changeFilter = (setter) => (value) => {
    setter(value);
    setIndex(0);
    setSnapshot({ answered, favorites });
  };

  const reset = () => {
    setModuleId('all');
    setOrigin('all');
    setSearch('');
    setIndex(0);
    setSnapshot({ answered, favorites });
  };

  if (status === 'loading' && !allQuestions.length) {
    return (
      <div>
        <PageHeader title="Banco de questões" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Banco de questões"
        description="Pratique por módulo, origem ou tema e revise o caderno de erros e as favoritas."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <aside className="space-y-3">
          <QuestionFilters
            moduleId={moduleId}
            origin={origin}
            search={search}
            onModuleChange={changeFilter(setModuleId)}
            onOriginChange={changeFilter(setOrigin)}
            onSearchChange={changeFilter(setSearch)}
          />
          <p className="num text-xs text-ink-3" aria-live="polite">
            {filtered.length ? `Questão ${safeIndex + 1} de ${filtered.length}` : '0 questões'}
          </p>
          {filtered.length > 0 && (
            <QuestionNavigator
              questions={filtered}
              answered={answered}
              currentIndex={safeIndex}
              onSelect={setIndex}
            />
          )}
        </aside>

        <section className="min-w-0">
          {current ? (
            <QuestionView
              key={current.id}
              question={current}
              previous={answered[current.id]}
              isFavorite={!!favorites[current.id]}
              hasPrev={safeIndex > 0}
              hasNext={safeIndex < filtered.length - 1}
              onAnswer={answerQuestion}
              onToggleFavorite={() => toggleFavorite(current.id)}
              onPrev={() => setIndex(Math.max(safeIndex - 1, 0))}
              onNext={() => setIndex(Math.min(safeIndex + 1, filtered.length - 1))}
            />
          ) : (
            <Card>
              <EmptyState
                icon={SearchX}
                title="Nenhuma questão encontrada"
                description="Ajuste os filtros ou a busca para ver questões."
                action={
                  <Button size="sm" onClick={reset}>
                    Limpar filtros
                  </Button>
                }
              />
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}
