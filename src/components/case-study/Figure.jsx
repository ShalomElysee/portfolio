export default function Figure({ src, alt, caption, browser, className = "mt-6" }) {
  return (
    <figure
      className={`group overflow-hidden border border-line transition-shadow duration-300 hover:shadow-[0_16px_40px_-16px_oklch(23%_0.03_258/0.25)] ${className}`}
    >
      {browser && (
        <div className="flex items-center gap-3 border-b border-line bg-surface px-3 py-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
          </span>
          <span className="truncate font-mono text-[11px] text-ink-faint">
            {browser}
          </span>
        </div>
      )}
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />
      </div>
      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-xs text-ink-faint">
        {caption}
      </figcaption>
    </figure>
  );
}
