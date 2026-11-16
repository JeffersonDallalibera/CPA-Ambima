import { cn } from '../../lib/utils';

// O HTML vem das tabelas topics/flashcards do banco do próprio projeto.
export default function RichHtml({ html, className }) {
  return <div className={cn('rich', className)} dangerouslySetInnerHTML={{ __html: html || '' }} />;
}
