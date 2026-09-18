export default function Section({ title, children }) {
  return (
    <section className="mt-16 max-w-2xl first:mt-0">
      <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">
        {title}
      </h2>
      <div className="case-prose mt-4">{children}</div>
    </section>
  );
}
