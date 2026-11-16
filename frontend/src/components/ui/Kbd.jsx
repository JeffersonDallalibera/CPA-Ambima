export default function Kbd({ children }) {
  return (
    <kbd className="num inline-flex h-5 min-w-5 items-center justify-center rounded border border-line-strong bg-surface px-1 text-[11px] font-medium text-ink-3">
      {children}
    </kbd>
  );
}
