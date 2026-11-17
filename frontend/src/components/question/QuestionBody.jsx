import { useState, useEffect } from 'react';
import { Highlighter, Eraser } from 'lucide-react';

const STORAGE_KEY = 'cpa_highlights_v1';

const COLORS = [
  { id: 'yellow', label: 'Amarelo', dot: 'bg-amber-300', cls: 'bg-amber-300/85 text-slate-950 rounded px-0.5 cursor-pointer' },
  { id: 'green', label: 'Esmeralda', dot: 'bg-emerald-400', cls: 'bg-emerald-400/80 text-slate-950 rounded px-0.5 cursor-pointer' },
  { id: 'cyan', label: 'Ciano', dot: 'bg-sky-400', cls: 'bg-sky-400/80 text-slate-950 rounded px-0.5 cursor-pointer' },
  { id: 'pink', label: 'Rosa', dot: 'bg-rose-400', cls: 'bg-rose-400/85 text-slate-950 rounded px-0.5 cursor-pointer' },
];

function loadHighlights(qId) {
  if (!qId) return [];
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return Array.isArray(all[qId]) ? all[qId] : [];
  } catch {
    return [];
  }
}

function saveHighlights(qId, list) {
  if (!qId) return;
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (list.length) all[qId] = list;
    else delete all[qId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {}
}

function renderHighlightedText(text, highlights, onRemoveHighlight) {
  if (!text || !highlights.length) return text;
  const escaped = highlights
    .map((h) => h.text)
    .filter((t) => t && t.length >= 2)
    .sort((a, b) => b.length - a.length)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (!escaped.length) return text;

  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);
  return parts.map((part, i) => {
    const match = highlights.find((h) => h.text === part);
    if (!match) return part;
    const colorObj = COLORS.find((c) => c.id === match.color) || COLORS[0];
    return (
      <mark
        key={i}
        className={colorObj.cls}
        title="Dê 2 cliques para desmarcar"
        onDoubleClick={(e) => {
          e.stopPropagation();
          onRemoveHighlight(match.text);
        }}
      >
        {part}
      </mark>
    );
  });
}

// Contexto (caso/situação) em bloco de citação + enunciado com Pincel Marcador persistente.
export default function QuestionBody({ question }) {
  const [brushOn, setBrushOn] = useState(false);
  const [color, setColor] = useState('yellow');
  const [highlights, setHighlights] = useState(() => loadHighlights(question?.id));

  useEffect(() => {
    setHighlights(loadHighlights(question?.id));
  }, [question?.id]);

  const removeHighlight = (textToRemove) => {
    if (!question?.id) return;
    const next = highlights.filter((h) => h.text !== textToRemove);
    setHighlights(next);
    saveHighlights(question.id, next);
  };

  const handleMouseUp = () => {
    if (!brushOn || !question?.id) return;
    const sel = window.getSelection();
    const selectedText = sel ? sel.toString().trim() : '';
    if (selectedText.length < 2) return;

    // Se já estiver marcado exatamente igual, desmarca; caso contrário, marca com a cor escolhida
    const exists = highlights.some((h) => h.text === selectedText);
    const next = exists
      ? highlights.filter((h) => h.text !== selectedText)
      : [...highlights, { text: selectedText, color }];

    setHighlights(next);
    saveHighlights(question.id, next);
    sel.removeAllRanges();
  };

  const handleClear = () => {
    setHighlights([]);
    saveHighlights(question?.id, []);
  };

  return (
    <div onMouseUp={handleMouseUp}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setBrushOn((v) => !v)}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${
              brushOn
                ? 'border-amber-400/60 bg-amber-400/15 text-amber-300'
                : 'border-slate-700/80 bg-slate-900/60 text-slate-400 hover:text-slate-200'
            }`}
            title="Ative e selecione qualquer trecho para marcar (2 cliques em uma marcação para desmarcar)"
          >
            <Highlighter className="h-3.5 w-3.5" />
            {brushOn ? 'Pincel Ativo' : 'Pincel Marcador'}
          </button>

          <div className="flex items-center gap-1.5" title="Escolha a cor do marcador">
            {COLORS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setColor(c.id);
                  setBrushOn(true);
                }}
                title={`Marcar com ${c.label}`}
                className={`h-5 w-5 rounded-full border transition ${c.dot} ${
                  color === c.id
                    ? 'scale-110 border-white ring-2 ring-white/40'
                    : 'border-transparent opacity-65 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        </div>

        {highlights.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-700/70 px-2 py-1 text-[11px] font-medium text-slate-400 hover:border-rose-500/40 hover:text-rose-400"
          >
            <Eraser className="h-3 w-3" /> Limpar ({highlights.length})
          </button>
        )}
      </div>

      {question.contexto && (
        <blockquote
          className={`mb-4 rounded-r-lg border-l-2 border-brand-line bg-subtle px-4 py-3 text-sm leading-relaxed text-ink-2 ${
            brushOn ? 'cursor-text select-text' : ''
          }`}
        >
          {renderHighlightedText(question.contexto, highlights, removeHighlight)}
        </blockquote>
      )}
      <h2
        className={`text-[17px] font-semibold leading-snug text-ink ${
          brushOn ? 'cursor-text select-text' : ''
        }`}
      >
        {renderHighlightedText(question.enunciado, highlights, removeHighlight)}
      </h2>
    </div>
  );
}
