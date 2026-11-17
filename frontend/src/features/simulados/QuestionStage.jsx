import { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Lightbulb, Lock, Star, XCircle } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Kbd from '../../components/ui/Kbd';
import OptionList from '../../components/question/OptionList';
import QuestionBody from '../../components/question/QuestionBody';
import { cn } from '../../lib/utils';

function Feedback({ question, selected }) {
  const ok = !!question.alternativas[selected]?.correta;
  return (
    <div
      className={cn(
        'rounded-lg border p-4 text-sm',
        ok ? 'border-ok-line bg-ok-soft' : 'border-bad-line bg-bad-soft'
      )}
    >
      <div className={cn('flex items-center gap-2 font-medium', ok ? 'text-ok' : 'text-bad')}>
        {ok ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
        {ok ? 'Resposta correta' : 'Resposta incorreta'}
      </div>
      {question.gabaritoComentado && (
        <p className="mt-2 leading-relaxed text-ink-2">
          <span className="font-medium text-ink">Gabarito comentado. </span>
          {question.gabaritoComentado}
        </p>
      )}
    </div>
  );
}

// Card da questão atual. Use key={question.id} para resetar o estado local (dica).
export default function QuestionStage({
  question,
  index,
  total,
  assisted,
  selected,
  revealed,
  eliminated,
  favorite,
  isLast,
  onSelect,
  onToggleEliminate,
  onToggleFavorite,
  onVerify,
  onNext,
  onConfirm,
}) {
  const [showHint, setShowHint] = useState(false);
  const hasPick = selected !== null && selected !== undefined;

  return (
    <article className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="num text-sm font-semibold text-ink">
            Questão {index + 1} <span className="text-ink-3">de {total}</span>
          </span>
          <Badge tone="brand">{question.moduloTitulo || `Módulo ${question.moduloId}`}</Badge>
          {!assisted && (
            <Badge tone="warn" icon={Lock}>
              Sem feedback
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          {assisted && (
            <Button
              size="sm"
              variant="ghost"
              icon={Lightbulb}
              aria-expanded={showHint}
              onClick={() => setShowHint((v) => !v)}
            >
              {showHint ? 'Ocultar dica' : 'Dica do Professor'}
            </Button>
          )}
          <button
            type="button"
            onClick={onToggleFavorite}
            aria-pressed={favorite}
            aria-label={favorite ? 'Remover dos favoritos' : 'Favoritar questão'}
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-lg border transition-colors',
              favorite
                ? 'border-warn-line bg-warn-soft text-warn'
                : 'border-line bg-surface text-ink-3 hover:bg-subtle'
            )}
          >
            <Star className={cn('h-4 w-4', favorite && 'fill-current')} />
          </button>
        </div>
      </div>

      {assisted && showHint && (
        <div className="mb-4 rounded-lg border border-warn-line bg-warn-soft p-3.5 text-[13px] leading-relaxed text-ink-2">
          <span className="font-medium text-ink">Dica do Professor. </span>
          Identifique o comando final do enunciado, relembre o tópico estudado e elimine as duas alternativas que
          contradizem a regra da ANBIMA/CVM.
        </div>
      )}

      <QuestionBody question={question} allowHints={assisted} />

      <div className="mt-5">
        <OptionList
          options={question.alternativas}
          selected={hasPick ? selected : null}
          revealed={revealed}
          onSelect={onSelect}
          eliminated={eliminated}
          onToggleEliminate={onToggleEliminate}
        />
      </div>

      <div className="mt-5 space-y-3">
        {revealed && <Feedback question={question} selected={selected} />}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="hidden items-center gap-1.5 text-xs text-ink-3 sm:inline-flex">
            <Kbd>A</Kbd>–<Kbd>D</Kbd> escolhem · <Kbd>Enter</Kbd> {assisted ? (revealed ? 'avança' : 'verifica') : 'confirma'}
          </span>
          <div className="ml-auto">
            {assisted && !revealed && (
              <Button variant="primary" icon={Check} disabled={!hasPick} onClick={onVerify}>
                Verificar
              </Button>
            )}
            {assisted && revealed && (
              <Button variant="primary" iconRight={ArrowRight} onClick={onNext}>
                {isLast ? 'Finalizar' : 'Próxima'}
              </Button>
            )}
            {!assisted && (
              <Button variant="primary" iconRight={ArrowRight} disabled={!hasPick} onClick={onConfirm}>
                {isLast ? 'Confirmar e finalizar' : 'Confirmar e avançar'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
