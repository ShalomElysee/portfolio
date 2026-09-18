import { ArrowRight } from "lucide-react";
import { profile } from "../data/profile";
import portrait from "../assets/portrait.webp";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden"
      >
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue/25 to-transparent [animation:scan_9s_linear_infinite]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="min-w-0 md:flex-1">
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink [animation:rise_0.7s_cubic-bezier(0.16,1,0.3,1)_both] sm:text-6xl md:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-4 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-blue [animation:rise_0.7s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
              Développement web · Cybersécurité
              <span
                aria-hidden="true"
                className="inline-block h-4 w-[2px] bg-yellow [animation:blink_1.1s_steps(1)_infinite]"
              />
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft [animation:rise_0.7s_cubic-bezier(0.16,1,0.3,1)_0.2s_both] md:text-xl">
              Je conçois des sites et des applications web. Depuis deux ans,
              je construis des outils qui servent réellement, à ma famille
              comme à mes clients. Je me spécialise aujourd'hui en
              cybersécurité, avec une attention particulière portée à la
              protection des données dès la conception d'un projet.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 [animation:rise_0.7s_cubic-bezier(0.16,1,0.3,1)_0.3s_both]">
              <a
                href="#projets"
                className="group flex items-center gap-2 rounded-full bg-yellow px-6 py-3 font-sans text-base font-medium text-blue-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-strong hover:shadow-[0_12px_24px_-8px_oklch(83%_0.15_92/0.6)]"
              >
                Voir les projets
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href={profile.cvUrl}
                className="relative font-sans text-base font-medium text-ink transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-blue after:transition-all after:duration-300 hover:text-blue hover:after:w-full"
              >
                CV
              </a>
              <a
                href="#contact"
                className="relative font-sans text-base font-medium text-ink transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-blue after:transition-all after:duration-300 hover:text-blue hover:after:w-full"
              >
                Contact
              </a>
            </div>

            <p className="mt-10 font-mono text-xs text-ink-faint [animation:rise_0.7s_cubic-bezier(0.16,1,0.3,1)_0.4s_both]">
              Disponible pour un stage de {profile.internshipDuration} mois (
              {profile.internshipPeriod}) · {profile.location}
            </p>
          </div>

          <div className="relative shrink-0 self-center md:self-start">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-full bg-blue/15 blur-2xl"
            />
            <img
              src={portrait}
              alt={`Portrait de ${profile.name}`}
              className="h-32 w-32 rounded-full border-2 border-blue object-cover [animation:rise_0.7s_cubic-bezier(0.16,1,0.3,1)_0.15s_both] md:h-56 md:w-56"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
