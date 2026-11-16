import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Clock } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function MaterialReader({ material, onBack }) {
  return (
    <div className="rise space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={onBack}>
          Voltar às apostilas
        </Button>
        <span className="inline-flex items-center gap-1.5 text-xs text-ink-3">
          <Clock className="h-3.5 w-3.5" />
          <span className="num">{material.readingTimeMinutes}</span> min de leitura ·{' '}
          <span className="num">{(material.wordCount || 0).toLocaleString('pt-BR')}</span> palavras
        </span>
      </div>
      <Card className="mx-auto max-w-[80ch] p-6 sm:p-10">
        <div className="markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{material.content || ''}</ReactMarkdown>
        </div>
      </Card>
    </div>
  );
}
