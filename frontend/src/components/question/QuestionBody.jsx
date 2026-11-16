// Contexto (caso/situação) em bloco de citação + enunciado.
export default function QuestionBody({ question }) {
  return (
    <div>
      {question.contexto && (
        <blockquote className="mb-4 rounded-r-lg border-l-2 border-brand-line bg-subtle px-4 py-3 text-sm leading-relaxed text-ink-2">
          {question.contexto}
        </blockquote>
      )}
      <h2 className="text-[17px] font-semibold leading-snug text-ink">{question.enunciado}</h2>
    </div>
  );
}
