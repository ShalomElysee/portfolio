import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section className="relative overflow-hidden bg-blue-deep">
      <div
        aria-hidden="true"
        className="approach-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-yellow/10 blur-3xl"
      />
      <Reveal>
        <div className="relative mx-auto max-w-3xl px-6 py-24 md:px-10">
          <p className="font-mono text-sm uppercase tracking-widest text-yellow">
            Ma démarche
          </p>
          <p className="mt-5 font-display text-2xl font-semibold leading-snug text-paper md:text-3xl">
            Je suis venu à la cybersécurité par le développement.
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-paper/70">
            En construisant des applications utilisées par d'autres, je me
            suis heurté à des questions que le code seul ne règle pas : qui
            peut accéder à quelles données, où elles sont stockées, et ce
            qui se passe quand quelque chose échoue sans prévenir. Sur
            chaque page de projet, je décris donc aussi ce que j'ai
            protégé, ce que j'ai raté et ce que j'en ai appris.
          </p>

          <Link
            to="/comment-je-travaille"
            className="group mt-8 inline-flex items-center gap-2 font-sans text-base font-medium text-yellow transition-colors hover:text-yellow-strong"
          >
            Comment je travaille, et ce que l'IA fait dans mes projets
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
