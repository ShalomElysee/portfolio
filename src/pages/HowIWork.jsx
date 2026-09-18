import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/case-study/Section";

export default function HowIWork() {
  return (
    <article>
      <header className="mx-auto max-w-3xl px-6 pt-12 pb-10 md:px-10 md:pt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint transition-colors hover:text-blue"
        >
          <ArrowLeft size={14} />
          Accueil
        </Link>

        <p className="mt-6 font-mono text-sm uppercase tracking-widest text-blue">
          Comment je travaille
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
          Ce que l'IA fait dans mes projets, et ce qu'elle ne fait pas.
        </h1>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-24 md:px-10">
        <Section title="L'IA dans mes projets">
          <p>
            Je développe avec l'aide d'assistants d'intelligence
            artificielle, et je préfère le dire clairement plutôt que le
            laisser deviner.
          </p>
          <p>
            <strong>Ce qu'ils font :</strong> ils écrivent une partie du
            code, m'aident à explorer des pistes techniques et à comprendre
            des erreurs. Orbit a même démarré sur un outil qui génère une
            première version complète à partir d'une description écrite.
          </p>
          <p>
            <strong>Ce qu'ils ne font pas :</strong> ils ne décident pas à
            ma place. Le choix de renoncer à l'IA dans SweetHome pour ne pas
            exposer les listes de ma famille, celui de placer les règles de
            sécurité dans la base plutôt que dans l'application, celui de
            ne mettre aucune base de données sur le site de Priscille : ce
            sont mes arbitrages, et je peux les défendre.
          </p>

          <p className="mt-6 font-display text-xl font-semibold leading-snug text-blue-strong md:text-2xl">
            Un assistant produit du code qui fonctionne, et c'est
            précisément là le piège : cela ne signifie pas qu'il est sûr.
          </p>
          <p>
            Le contrôle d'accès défaillant de SweetHome fonctionnait
            parfaitement en usage normal. Les couleurs disparues d'Orbit ne
            provoquaient aucune erreur. Le formulaire de Priscille affichait
            une confirmation rassurante en n'envoyant rien. Ces trois
            problèmes ont un point commun : aucun message d'alerte, et un
            comportement normal en apparence. Ils m'ont donné le réflexe de
            vérifier moi-même, en conditions réelles, plutôt que de faire
            confiance à ce qui semble marcher. C'est d'ailleurs ce même
            réflexe qu'on attend en audit.
          </p>
        </Section>

        <Section title="L'audit, en parallèle">
          <p>
            Depuis septembre 2025, je participe comme élève ingénieur aux
            audits de formations menés par la Commission des titres
            d'ingénieur. J'y analyse des écarts entre une situation réelle
            et un référentiel, puis je rédige des recommandations. J'essaie
            d'appliquer cette même lecture à mes propres projets, d'où les
            sections « limites connues » de ces pages.
          </p>
        </Section>
      </div>
    </article>
  );
}
