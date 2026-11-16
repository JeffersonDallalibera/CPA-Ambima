import { useAppData } from '../../context/contexts';
import { CERTIFICATION_LIST } from '../../lib/certifications';
import { cn } from '../../lib/utils';

export default function CertSwitcher({ className }) {
  const { cert, setCertification } = useAppData();
  return (
    <div
      role="radiogroup"
      aria-label="Certificação"
      title={cert.provisional ? cert.note : undefined}
      className={cn('inline-flex rounded-lg border border-line bg-surface p-0.5 text-xs shadow-card', className)}
    >
      {CERTIFICATION_LIST.map((c) => (
        <button
          key={c.id}
          type="button"
          role="radio"
          aria-checked={c.id === cert.id}
          onClick={() => setCertification(c.id)}
          className={cn(
            'h-7 flex-1 rounded-md px-2.5 font-medium transition-colors',
            c.id === cert.id ? 'bg-brand text-white' : 'text-ink-2 hover:bg-hover'
          )}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
