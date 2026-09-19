import { slugify } from "../../lib/slugify";

export default function Section({ title, children }) {
  return (
    <section id={slugify(title)} className="mt-20 max-w-2xl scroll-mt-24 first:mt-0">
      <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">
        {title}
      </h2>
      <div className="case-prose mt-4">{children}</div>
    </section>
  );
}
