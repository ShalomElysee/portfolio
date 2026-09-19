import { slugify } from "../../lib/slugify";

export default function SectionNav({ sections }) {
  return (
    <nav className="sticky top-24 hidden self-start lg:block">
      <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
        Sur cette page
      </p>
      <ul className="mt-4 space-y-3 border-l border-line pl-4">
        {sections.map((title) => (
          <li key={title}>
            <a
              href={`#${slugify(title)}`}
              className="block text-sm leading-snug text-ink-soft transition-colors hover:text-blue"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
