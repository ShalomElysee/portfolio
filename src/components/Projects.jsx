import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-5xl px-6 py-24 md:px-10">
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-widest text-blue">
          Projets
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink md:text-4xl">
          Des applications réelles, pour de vraies personnes.
        </h2>
      </Reveal>

      <div className="mt-12">
        {projects.map((project, index) => (
          <Reveal key={project.slug}>
            <Link
              to={`/projets/${project.slug}`}
              className={`group relative flex flex-col gap-6 py-8 pl-0 transition-[padding] duration-300 hover:pl-5 md:flex-row md:items-center md:justify-between md:gap-10 ${
                index === 0 ? "border-t border-line" : ""
              } border-b border-line`}
            >
              <div className="max-w-xl">
                <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-blue">
                  {project.name}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {project.tagline}
                </p>
              </div>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-blue transition-all duration-300 group-hover:border-blue group-hover:bg-blue group-hover:text-paper">
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
