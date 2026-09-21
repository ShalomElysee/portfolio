import { useEffect, useState } from "react";
import { slugify } from "../../lib/slugify";

export default function SectionNav({ sections, children }) {
  const [activeId, setActiveId] = useState(() => slugify(sections[0]));

  useEffect(() => {
    const elements = sections
      .map((title) => document.getElementById(slugify(title)))
      .filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="hidden lg:block">
      <div className="sticky top-24 flex max-h-[calc(100vh-7rem)] flex-col gap-6 self-start overflow-y-auto">
        {children}

        <nav>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            Sur cette page
          </p>
          <ul className="mt-4 space-y-3 border-l border-line pl-4">
            {sections.map((title) => {
              const id = slugify(title);
              const active = id === activeId;
              return (
                <li key={title}>
                  <a
                    href={`#${id}`}
                    aria-current={active ? "location" : undefined}
                    className={`block text-sm leading-snug transition-colors hover:text-blue ${
                      active ? "font-medium text-blue" : "text-ink-soft"
                    }`}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
