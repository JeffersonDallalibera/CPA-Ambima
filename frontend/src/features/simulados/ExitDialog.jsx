import { useId } from 'react';
import Button from '../../components/ui/Button';

// Diálogo modal inline de confirmação (sem alert/confirm nativos).
export default function ExitDialog({
  title,
  description,
  confirmLabel,
  cancelLabel = 'Continuar simulado',
  danger = false,
  onConfirm,
  onCancel,
}) {
  const titleId = useId();
  const descId = useId();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/30 p-4"
      onKeyDown={(e) => {
        if (e.key === 'Escape') onCancel();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="rise w-full max-w-md rounded-card border border-line bg-surface p-5 shadow-pop"
      >
        <h2 id={titleId} className="text-base font-semibold text-ink">
          {title}
        </h2>
        <p id={descId} className="mt-2 text-sm leading-relaxed text-ink-2">
          {description}
        </p>
        <div className="mt-5 flex flex-wrap justify-end gap-2">
          <Button variant="secondary" onClick={onCancel} autoFocus>
            {cancelLabel}
          </Button>
          <Button variant={danger ? 'danger' : 'primary'} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
