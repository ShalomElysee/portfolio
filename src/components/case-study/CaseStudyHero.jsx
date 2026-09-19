import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudyHero({ eyebrow, title, url, urlLabel }) {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-12 pb-10 md:px-10 md:pt-16">
      <Link
        to="/#projets"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint transition-colors hover:text-blue"
      >
        <ArrowLeft size={14} />
        Tous les projets
      </Link>

      <p className="mt-6 font-mono text-sm uppercase tracking-widest text-blue">
        {eyebrow}
      </p>

      <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
        {title}
      </h1>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="group mt-7 inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 font-sans text-base font-medium text-blue-deep transition-colors hover:bg-yellow-strong"
      >
        {urlLabel}
        <ExternalLink
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </header>
  );
}
