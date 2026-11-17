import { useState, useEffect, useRef } from 'react';
import { Highlighter, Eraser, ScanSearch, Volume2, Square } from 'lucide-react';

const STORAGE_KEY = 'cpa_highlights_char_v2';

const COLORS = [
  { id: 'yellow', label: 'Amarelo', dot: 'bg-amber-300', cls: 'bg-amber-300/85 text-slate-950 rounded-[2px] cursor-pointer' },
  { id: 'green', label: 'Esmeralda', dot: 'bg-emerald-400', cls: 'bg-emerald-400/80 text-slate-950 rounded-[2px] cursor-pointer' },
  { id: 'cyan', label: 'Ciano', dot: 'bg-sky-400', cls: 'bg-sky-400/80 text-slate-950 rounded-[2px] cursor-pointer' },
  { id: 'pink', label: 'Rosa', dot: 'bg-rose-400', cls: 'bg-rose-400/85 text-slate-950 rounded-[2px] cursor-pointer' },
];

function loadCharMap(qId) {
  if (!qId) return { contexto: {}, enunciado: {} };
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return all[qId] || { contexto: {}, enunciado: {} };
  } catch {
    return { contexto: {}, enunciado: {} };
  }
}

function saveCharMap(qId, map) {
  if (!qId) return;
  try {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const hasCtx = Object.keys(map.contexto || {}).length > 0;
    const hasEnu = Object.keys(map.enunciado || {}).length > 0;
    if (hasCtx || hasEnu) all[qId] = map;
    else delete all[qId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {}
}

function getSelectionOffsets(containerEl) {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0 || sel.isCollapsed || !containerEl) return null;
  const range = sel.getRangeAt(0);
  if (!containerEl.contains(range.startContainer) || !containerEl.contains(range.endContainer)) {
    return null;
  }
  const preRange = document.createRange();
  preRange.selectNodeContents(containerEl);
  preRange.setEnd(range.startContainer, range.startOffset);
  const start = preRange.toString().length;
  const length = range.toString().length;
  if (length < 1) return null;
  return { start, end: start + length };
}

function renderCharHighlighted(text, fieldMap, onDoubleClickSpan) {
  if (!text) return null;
  const keys = Object.keys(fieldMap || {});
  if (!keys.length) return text;

  const segments = [];
  let curStart = 0;
  let curColor = fieldMap[0] || null;

  for (let i = 1; i <= text.length; i++) {
    const c = i < text.length ? fieldMap[i] || null : '__END__';
    if (c !== curColor) {
      segments.push({ start: curStart, end: i, color: curColor, text: text.slice(curStart, i) });
      curStart = i;
      curColor = c;
    }
  }

  return segments.map((seg) => {
    if (!seg.color) return <span key={seg.start}>{seg.text}</span>;
    const colorObj = COLORS.find((c) => c.id === seg.color) || COLORS[0];
    return (
      <mark
        key={seg.start}
        className={colorObj.cls}
        title="2 cliques para desmarcar este trecho"
        onDoubleClick={(e) => {
          e.stopPropagation();
          onDoubleClickSpan(seg.start, seg.end);
        }}
      >
        {seg.text}
      </mark>
    );
  });
}

function analyzeExaminerXRay(question) {
  const full = `${question?.contexto || ''} ${question?.enunciado || ''} ${question?.topicoPD || ''}`.toLowerCase();
  const traps = [];
  if (/\b(não|exceto|incorreta|vedad|proibid)\b/i.test(full)) {
    traps.push('⚠️ Comando NEGATIVO detectado ("NÃO / EXCETO / VEDADO") — cuidado para não marcar a verdadeira.');
  }
  if (/pgbl|vgbl|previdência/.test(full)) {
    traps.push('🎯 PGBL = Declaração Completa + até 12% renda bruta + IR sobre o TOTAL. VGBL = Simplificado + IR só sobre RENDIMENTOS.');
  }
  if (/fgc|cri|cra|debênture|lci|lca|cdb/.test(full)) {
    traps.push('🛡️ FGC cobre CDB/LCI/LCA/Poupança (R$ 250 mil/CPF/IF, teto R$ 1M/4 anos). NÃO cobre CRI, CRA, Debêntures, Fundos ou COE.');
  }
  if (/cvm 175|fundo|cotista|segregação/.test(full)) {
    traps.push('📜 CVM 175: Segregação patrimonial entre classes, responsabilidade limitada como padrão e Art. 101 veda prometer rentabilidade.');
  }
  if (/bdr|dólar|câmbio|ptax/.test(full)) {
    traps.push('🧮 Paridade BDR = (Preço Ação USD × Câmbio) ÷ Paridade. Dólar alto encarece importações e beneficia exportadores.');
  }
  if (/selic|ipca|copom|fiscal|compromissada|compulsório/.test(full)) {
    traps.push('🏛️ Compromissada de venda enxuga liquidez. Descontrole fiscal eleva risco-país, juros e derruba PU dos títulos prefixados.');
  }
  if (/churning|spoofing|layering|insider|front running|kyc|pldft/.test(full)) {
    traps.push('⚖️ CVM 62: Churning = giro excessivo por comissão; Spoofing/Layering = ordens falsas; Front Running = passar na frente do cliente.');
  }
  if (traps.length === 0) {
    traps.push('🔍 Leia primeiro a pergunta final do enunciado, identifique o perfil/prazo do cliente e elimine 2 alternativas absurdas.');
  }
  return traps;
}

// Contexto + enunciado com Pincel Marcador caractere por caractere (marca por cima com outra cor e desmarca com 2 cliques).
export default function QuestionBody({ question, allowHints = true }) {
  const [brushOn, setBrushOn] = useState(false);
  const [xrayOn, setXrayOn] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [color, setColor] = useState('yellow');
  const [charMap, setCharMap] = useState(() => loadCharMap(question?.id));
  const ctxRef = useRef(null);
  const enuRef = useRef(null);

  useEffect(() => {
    setCharMap(loadCharMap(question?.id));
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  }, [question?.id]);

  const toggleSpeak = () => {
    if (!window.speechSynthesis) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = `${question?.contexto || ''}. ${question?.enunciado || ''}`.trim();
    if (!text) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'pt-BR';
    utter.rate = 1.08;
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utter);
  };

  const applyRange = (field, start, end) => {
    if (!question?.id) return;
    const fieldObj = { ...(charMap[field] || {}) };
    let allSameColor = true;
    for (let i = start; i < end; i++) {
      if (fieldObj[i] !== color) {
        allSameColor = false;
        break;
      }
    }
    for (let i = start; i < end; i++) {
      if (allSameColor) delete fieldObj[i];
      else fieldObj[i] = color;
    }
    const next = { ...charMap, [field]: fieldObj };
    setCharMap(next);
    saveCharMap(question.id, next);
  };

  const handleMouseUpField = (field, ref) => {
    if (!brushOn || !question?.id) return;
    const offsets = getSelectionOffsets(ref.current);
    if (!offsets) return;
    applyRange(field, offsets.start, offsets.end);
    window.getSelection()?.removeAllRanges();
  };

  const removeSpan = (field, start, end) => {
    if (!question?.id) return;
    const fieldObj = { ...(charMap[field] || {}) };
    for (let i = start; i < end; i++) delete fieldObj[i];
    const next = { ...charMap, [field]: fieldObj };
    setCharMap(next);
    saveCharMap(question.id, next);
  };

  const totalMarkedChars =
    Object.keys(charMap.contexto || {}).length + Object.keys(charMap.enunciado || {}).length;

  const handleClear = () => {
    const empty = { contexto: {}, enunciado: {} };
    setCharMap(empty);
    saveCharMap(question?.id, empty);
  };

  return (
    <div>
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
            title="Arraste sobre qualquer palavra ou caractere para marcar. Marque por cima com outra cor ou dê 2 cliques para desmarcar."
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSpeak}
            className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${
              speaking
                ? 'border-emerald-400/60 bg-emerald-400/15 text-emerald-300'
                : 'border-slate-700/70 bg-slate-900/60 text-slate-400 hover:text-emerald-300'
            }`}
            title="Ouvir leitura da questão em Português (Modo Áudio)"
          >
            {speaking ? <Square className="h-3 w-3" /> : <Volume2 className="h-3.5 w-3.5" />}
            {speaking ? 'Parar' : 'Ouvir'}
          </button>

          {allowHints && (
            <button
              type="button"
              onClick={() => setXrayOn((v) => !v)}
              className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${
                xrayOn
                  ? 'border-sky-400/60 bg-sky-400/15 text-sky-300'
                  : 'border-slate-700/70 bg-slate-900/60 text-slate-400 hover:text-sky-300'
              }`}
              title="Dica do Professor / Raio-X: revela gatilhos, armadilhas e regra de ouro desta questão"
            >
              <ScanSearch className="h-3.5 w-3.5" /> Dica / Raio-X
            </button>
          )}

          {totalMarkedChars > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-700/70 px-2 py-1 text-[11px] font-medium text-slate-400 hover:border-rose-500/40 hover:text-rose-400"
            >
              <Eraser className="h-3 w-3" /> Limpar marcações
            </button>
          )}
        </div>
      </div>

      {allowHints && xrayOn && (
        <div className="mb-3 rounded-xl border border-sky-500/30 bg-sky-500/10 p-3 text-xs leading-relaxed text-sky-200 space-y-1">
          <div className="font-bold text-sky-300">⚡ Raio-X do Examinador ANBIMA:</div>
          {analyzeExaminerXRay(question).map((tip, idx) => (
            <div key={idx}>{tip}</div>
          ))}
        </div>
      )}

      {question.contexto && (
        <blockquote
          ref={ctxRef}
          onMouseUp={() => handleMouseUpField('contexto', ctxRef)}
          className={`mb-4 rounded-r-lg border-l-2 border-brand-line bg-subtle px-4 py-3 text-sm leading-relaxed text-ink-2 ${
            brushOn ? 'cursor-text select-text' : ''
          }`}
        >
          {renderCharHighlighted(question.contexto, charMap.contexto, (s, e) =>
            removeSpan('contexto', s, e)
          )}
        </blockquote>
      )}

      <h2
        ref={enuRef}
        onMouseUp={() => handleMouseUpField('enunciado', enuRef)}
        className={`text-[17px] font-semibold leading-snug text-ink ${
          brushOn ? 'cursor-text select-text' : ''
        }`}
      >
        {renderCharHighlighted(question.enunciado, charMap.enunciado, (s, e) =>
          removeSpan('enunciado', s, e)
        )}
      </h2>
    </div>
  );
}
