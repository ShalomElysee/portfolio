export default function Labeled({ label, children }) {
  return (
    <div className="mt-6 first:mt-0">
      <p className="font-mono text-xs uppercase tracking-wide text-blue">
        {label}
      </p>
      <p className="mt-1.5">{children}</p>
    </div>
  );
}
