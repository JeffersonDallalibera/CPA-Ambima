import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, RotateCcw, Star, X } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Kbd from '../../components/ui/Kbd';
import OptionList from '../../components/question/OptionList';
import QuestionBody from '../../components/question/QuestionBody';
import ErrorReason from '../../components/question/ErrorReason';
import { useHotkeys } from '../../hooks/useHotkeys';
import { cn, shuffle } from '../../lib/utils';
import { MODULES_META } from '../../lib/constants';

// Remonte com key={question.id} para resetar seleção, riscos e embaralhamento ao trocar de questão.
export default function QuestionView({
  question,
  previous,
  isFavorite,
  hasPrev,
  hasNext,
  onAnswer,
  onToggleFavorite,
  onPrev,
  onNext,
}) {
  const options = useMemo(() => shuffle(question.alternativas || []), [question.alternativas]);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const [eliminated, setEliminated] = useState({});

  const showingPrevious = !!previous && !retrying && !revealed;
  const isRevealed = revealed || showingPrevious;

  // Na revisão de resposta anterior, destaca a alternativa escolhida pelo texto.
  const shownSelected = showingPrevious
    ? options.findIndex((o) => o.texto === previous.chosenText)
    : selected;
  const resultCorrect = showingPrevious
    ? previous.correct
    : selected !== null && !!options[selected]?.correta;

  const confirm = (index) => {
    if (isRevealed || index === null || !options[index]) return;
    setRevealed(true);
    onAnswer(question.id, !!options[index].correta, options[index].texto);
  };

  const pick = (i) => {
    if (isRevealed || !options[i]) return;
    setSelected(i);
  };

  const retry = () => {
    setRetrying(true);
    setRevealed(false);
    setSelected(null);
    setEliminated({});
  };

  useHotkeys({
    a: () => pick(0),
    b: () => pick(1),
    c: () => pick(2),
    d: () => pick(3),
    f: onToggleFavorite,
    Enter: () => {
      if (!isRevealed) confirm(selected);
      else if (hasNext) onNext();
    },
    ArrowLeft: () => hasPrev && onPrev(),
    ArrowRight: () => hasNext && onNext(),
  });

  const meta = MODULES_META[question.moduloId];

  return (
    <Card className="p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge tone="brand">Módulo {question.moduloId}{meta ? ` · ${meta.short}` : ''}</Badge>
          <Badge tone={question.oficial ? 'neutral' : 'warn'}>
            {question.oficial ? 'Oficial' : 'Inédita'}
          </Badge>
          {question.dificuldade && <Badge>Dificuldade: {question.dificuldade}</Badge>}
          {(question.nivelCognitivo || question.nivel_cognitivo) && (
            <Badge>{question.nivelCognitivo || question.nivel_cognitivo}</Badge>
          )}
          {question.codigoItem && <Badge className="num">{question.codigoItem}</Badge>}
          {question.topicoPD && <Badge>{question.topicoPD}</Badge>}
        </div>
        <button
          type="button"
          onClick={onToggleFavorite}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          aria-pressed={isFavorite}
          title="Favoritar (F)"
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-lg border transition-colors',
            isFavorite
              ? 'border-warn-line bg-warn-soft text-warn'
              : 'border-line bg-surface text-ink-3 hover:bg-subtle'
          )}
        >
          <Star className={cn('h-4 w-4', isFavorite && 'fill-current')} />
        </button>
      </div>

      <QuestionBody question={question} />

      <div className="mt-5">
        <OptionList
          options={options}
          selected={shownSelected >= 0 ? shownSelected : null}
          revealed={isRevealed}
          onSelect={pick}
          eliminated={eliminated}
          onToggleEliminate={(i) => setEliminated((e) => ({ ...e, [i]: !e[i] }))}
        />
      </div>

      {isRevealed && (
        <div className="rise mt-4 space-y-3">
          <div
            className={cn(
              'flex flex-wrap items-center justify-between gap-2 rounded-lg border px-3 py-2 text-sm',
              resultCorrect ? 'border-ok-line bg-ok-soft text-ok' : 'border-bad-line bg-bad-soft text-bad'
            )}
          >
            <span className="flex items-center gap-2 font-medium">
              {resultCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              {showingPrevious ? 'Resultado anterior: ' : ''}
              {resultCorrect ? 'Resposta correta' : 'Resposta incorreta'}
            </span>
            {showingPrevious && (
              <Button size="sm" icon={RotateCcw} onClick={retry}>
                Tentar de novo
              </Button>
            )}
          </div>
          {!resultCorrect && <ErrorReason questionId={question.id} />}
          {question.gabaritoComentado && (
            <div className="rounded-lg border border-line bg-subtle p-4 text-sm leading-relaxed text-ink-2">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-3">Gabarito comentado</p>
              {question.gabaritoComentado}
            </div>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <Button variant="ghost" icon={ArrowLeft} disabled={!hasPrev} onClick={onPrev}>
          Anterior
        </Button>
        <p className="hidden items-center gap-1.5 text-xs text-ink-3 md:flex">
          <Kbd>A</Kbd>–<Kbd>D</Kbd> escolher <Kbd>Enter</Kbd> confirmar <Kbd>F</Kbd> favoritar
        </p>
        {isRevealed ? (
          <Button variant="primary" iconRight={ArrowRight} disabled={!hasNext} onClick={onNext}>
            Próxima
          </Button>
        ) : (
          <Button variant="primary" disabled={selected === null} onClick={() => confirm(selected)}>
            Confirmar resposta
          </Button>
        )}
      </div>
    </Card>
  );
}
