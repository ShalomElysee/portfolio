import { ImageOff } from "lucide-react";

// Marqueur honnête pour une capture à venir : pas d'image factice.
export default function FigurePlaceholder({ captions }) {
  return (
    <div className="mt-6 border border-dashed border-line px-6 py-5">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
        <ImageOff size={14} strokeWidth={2} />
        Captures à ajouter
      </p>
      <ul className="mt-3 space-y-1.5">
        {captions.map((caption) => (
          <li key={caption} className="text-sm text-ink-soft">
            {caption}
          </li>
        ))}
      </ul>
    </div>
  );
}
