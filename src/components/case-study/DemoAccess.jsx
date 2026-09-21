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
    <div className="py-3">
      <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
        {label}
      </p>
      <p className="mt-0.5 break-all font-mono text-[13px] leading-snug text-ink">
        {value}
      </p>
      <button
        type="button"
        onClick={copy}
        className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-full border border-blue/25 py-1.5 font-sans text-xs font-medium text-blue transition-colors hover:bg-blue hover:text-paper"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        {copied ? "Copié" : "Copier"}
      </button>
    </div>
  );
}

export default function DemoAccess({ email, password }) {
  return (
    <div className="border border-blue/20 bg-blue-wash">
      <div className="flex items-center gap-2 border-b border-blue/15 px-4 py-2.5">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue text-paper">
          <KeyRound size={11} strokeWidth={2.25} />
        </span>
        <p className="font-mono text-[11px] uppercase tracking-widest text-blue">
          Accès test
        </p>
      </div>
      <div className="divide-y divide-blue/10 px-4">
        <CopyRow label="Email" value={email} />
        <CopyRow label="Mot de passe" value={password} />
      </div>
    </div>
  );
}
