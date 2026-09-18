export default function Callout({ icon: Icon, label, children }) {
  return (
    <div className="mt-6 border border-blue/20 bg-blue-wash">
      <div className="flex items-center gap-2.5 border-b border-blue/15 px-6 py-3">
        {Icon && (
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-paper">
            <Icon size={13} strokeWidth={2.25} />
          </span>
        )}
        <p className="font-mono text-xs uppercase tracking-widest text-blue">
          {label}
        </p>
      </div>
      <div className="case-prose px-6 py-5 text-ink-soft">{children}</div>
    </div>
  );
}
