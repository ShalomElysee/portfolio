import { PenLine } from "lucide-react";

// Marqueur honnête pour un contenu qu'il reste à écrire, pas à inventer.
export default function TodoNote({ children }) {
  return (
    <div className="mt-6 border border-dashed border-line px-6 py-5">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
        <PenLine size={14} strokeWidth={2} />À compléter
      </p>
      <p className="mt-3 text-sm text-ink-soft">{children}</p>
    </div>
  );
}
