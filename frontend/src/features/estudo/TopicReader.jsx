import { useState, useEffect } from 'react';
import { Check, Crosshair, TriangleAlert, Volume2, Square, Zap } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import RichHtml from '../../components/ui/RichHtml';

function priorityTone(p) {
  const v = String(p || '').toLowerCase();
  if (v.startsWith('alta') || v.startsWith('máx') || v.startsWith('max')) return 'brand';
  if (v.startsWith('m')) return 'warn';
  return 'neutral';
}

function toList(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);
  return [String(value)];
}

function Callout({ icon: Icon, title, items, tone }) {
  if (!items.length) return null;
  const styles =
    tone === 'warn' ? 'border-warn-line bg-warn-soft' : 'border-brand-line bg-brand-soft';
  const iconStyles = tone === 'warn' ? 'text-warn' : 'text-brand';
  return (
    <section className={`rounded-card border p-4 ${styles}`}>
      <h3 className={`mb-2 flex items-center gap-2 text-sm font-semibold ${iconStyles}`}>
        <Icon className="h-4 w-4" /> {title}
      </h3>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-4" aria-hidden="true" />
            <RichHtml html={it} className="min-w-0 flex-1" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function TopicReader({ topic, done, onToggle }) {
  const [speaking, setSpeaking] = useState(false);
  const [flashMode, setFlashMode] = useState(false);

  useEffect(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  }, [topic?.codigo]);

  const stripHtml = (html) => (html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  const toggleSpeak = () => {
    if (!window.speechSynthesis) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const gatilhos = toList(topic.gatilhosProva).map(stripHtml).join('. ');
    const pegadinhas = toList(topic.pegadinhas).map(stripHtml).join('. ');
    const text = `${topic.titulo}. ${flashMode ? '' : stripHtml(topic.explicacao)}. Gatilhos de prova: ${gatilhos}. Pegadinhas: ${pegadinhas}`;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'pt-BR';
    utter.rate = 1.08;
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utter);
  };

  return (
    <article className="rise max-w-[72ch] space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm" variant="secondary" onClick={toggleSpeak}>
          {speaking ? <Square className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          {speaking ? 'Parar Áudio' : 'Ouvir Tópico'}
        </Button>
        <Button
          size="sm"
          variant={flashMode ? 'primary' : 'secondary'}
          onClick={() => setFlashMode((v) => !v)}
        >
          <Zap className="h-3.5 w-3.5" />
          {flashMode ? 'Resumo Relâmpago (Ativo)' : 'Resumo Relâmpago (10s)'}
        </Button>
      </div>
      <header className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="num text-sm text-ink-3">{topic.codigo}</span>
          {topic.prioridade && <Badge tone={priorityTone(topic.prioridade)}>Prioridade {topic.prioridade}</Badge>}
          {done && (
            <Badge tone="ok" icon={Check}>
              Dominado
            </Badge>
          )}
        </div>
        <h2 className="text-xl font-semibold leading-snug text-ink">{topic.titulo}</h2>
      </header>

      <RichHtml html={topic.explicacao} className="text-[15px] leading-7 text-ink-2" />

      <Callout icon={Crosshair} title="Gatilhos de prova" items={toList(topic.gatilhosProva)} tone="brand" />
      <Callout icon={TriangleAlert} title="Pegadinhas" items={toList(topic.pegadinhas)} tone="warn" />

      <Button
        variant={done ? 'secondary' : 'primary'}
        icon={Check}
        onClick={onToggle}
        aria-pressed={done}
      >
        {done ? 'Dominado — desmarcar' : 'Marcar como dominado'}
      </Button>
    </article>
  );
}
