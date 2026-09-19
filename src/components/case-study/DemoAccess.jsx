import { useState } from "react";
import { Check, Copy, KeyRound } from "lucide-react";

function CopyRow({ label, value }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable: the value is still selectable and visible.
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 py-2.5">
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
          {label}
        </p>
        <p className="truncate font-mono text-sm text-ink">{value}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="flex shrink-0 items-center gap-1.5 rounded-full border border-blue/25 px-3 py-1.5 font-sans text-xs font-medium text-blue transition-colors hover:bg-blue hover:text-paper"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        {copied ? "Copié" : "Copier"}
      </button>
    </div>
  );
}

export default function DemoAccess({ email, password }) {
  return (
    <div className="mt-6 max-w-sm border border-blue/20 bg-blue-wash">
      <div className="flex items-center gap-2.5 border-b border-blue/15 px-5 py-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-paper">
          <KeyRound size={13} strokeWidth={2.25} />
        </span>
        <p className="font-mono text-xs uppercase tracking-widest text-blue">
          Accès test, sans rien créer
        </p>
      </div>
      <div className="divide-y divide-blue/10 px-5">
        <CopyRow label="Email" value={email} />
        <CopyRow label="Mot de passe" value={password} />
      </div>
    </div>
  );
}
