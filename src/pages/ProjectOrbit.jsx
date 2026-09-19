import { KeyRound, ServerCrash } from "lucide-react";
import CaseStudyHero from "../components/case-study/CaseStudyHero";
import Section from "../components/case-study/Section";
import SectionNav from "../components/case-study/SectionNav";
import Callout from "../components/case-study/Callout";
import Labeled from "../components/case-study/Labeled";
import DemoAccess from "../components/case-study/DemoAccess";
import FigurePlaceholder from "../components/case-study/FigurePlaceholder";
import Figure from "../components/case-study/Figure";
import orbitAccueil from "../assets/screenshots/orbit-accueil.webp";
import orbitSystemeSolaire from "../assets/screenshots/orbit-systeme-solaire.webp";
import orbitVueOrbite from "../assets/screenshots/orbit-vue-orbite.webp";
import orbitFicheContact from "../assets/screenshots/orbit-fiche-contact.webp";

const sections = [
  "Le besoin",
  "Ce que fait l'application",
  "Comment la distance est calculée",
  "Comment c'est construit",
  "Protection des données",
  "Ce que ce projet m'a appris sur la sécurité",
  "Une panne instructive",
];

export default function ProjectOrbit() {
  return (
    <article>
      <CaseStudyHero
        eyebrow="Garder le contact avec ses proches · Application installable sur téléphone · Projet personnel"
        title="Orbit"
        url="https://dearorbit.netlify.app/"
        urlLabel="Ouvrir l'application"
      />

      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <DemoAccess email="test@orbit.com" password="-J?6e.4$-5hN7BM" />
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24 md:px-10 lg:grid lg:grid-cols-[180px_1fr] lg:gap-16">
        <SectionNav sections={sections} />

        <div>
          <Section title="Le besoin">
            <p>
              On perd souvent le contact avec des gens qui comptent, non par
              manque d'envie, mais parce que les semaines passent sans qu'on
              s'en aperçoive. Orbit rend ce temps visible sans culpabiliser.
              L'utilisateur est le soleil, chaque proche est une planète :
              plus on tarde à donner des nouvelles, plus la planète
              s'éloigne.
            </p>
            <Figure
              src={orbitAccueil}
              alt="Page d'accueil d'Orbit présentant l'application"
              caption="Page d'accueil d'Orbit"
              browser="dearorbit.netlify.app"
            />
          </Section>

          <Section title="Ce que fait l'application">
            <ul>
              <li>
                Chaque contact appartient à une catégorie : famille, amis,
                travail ou autre.
              </li>
              <li>
                On choisit un rythme de contact par personne, d'une semaine à
                trois mois, ou un calendrier sur mesure.
              </li>
              <li>
                L'application indique chaque jour les personnes à
                recontacter en priorité.
              </li>
              <li>
                Une notification arrive la veille et le jour même, même si
                l'application est fermée.
              </li>
              <li>
                Un espace de notes permet de garder l'essentiel de chaque
                échange.
              </li>
              <li>Le système solaire s'affiche en 2D ou en 3D.</li>
            </ul>
            <Figure
              src={orbitSystemeSolaire}
              alt="Vue Système solaire d'Orbit, avec des contacts de démonstration"
              caption="Le système solaire (compte de démonstration)"
              browser="dearorbit.netlify.app"
            />
            <Figure
              src={orbitVueOrbite}
              alt="Vue orbite détaillée d'un contact"
              caption="Voir mon orbite, avec lecture animée"
              browser="dearorbit.netlify.app"
            />
            <Figure
              src={orbitFicheContact}
              alt="Fiche d'édition d'un contact de démonstration"
              caption="La fiche d'un contact"
              browser="dearorbit.netlify.app"
            />
            <FigurePlaceholder captions={["Une notification"]} />
          </Section>

          <Section title="Comment la distance est calculée">
            <p>
              L'application compare le nombre de jours écoulés depuis le
              dernier échange au rythme choisi pour cette personne. Le
              rapport entre les deux donne trois états : « proche », «
              bientôt » et « en retard ». Chaque état correspond à une
              distance d'orbite et à une place dans les suggestions du jour.
            </p>
            <p>
              Pour l'animation en 2D, chaque planète est un simple bouton
              dont la position est recalculée plusieurs dizaines de fois par
              seconde, à partir d'un angle qui progresse. C'est de la
              trigonométrie de lycée, sans aucune bibliothèque d'animation.
              La vue en 3D utilise en revanche Three.js, un outil spécialisé.
            </p>
          </Section>

          <Section title="Comment c'est construit">
            <p>
              L'interface est écrite en React, les données sont hébergées
              chez Supabase et le site est publié sur Netlify. Les rappels
              sont envoyés par une tâche qui s'exécute automatiquement
              chaque jour sur le serveur.
            </p>
            <p>
              <strong>Une précision honnête sur l'origine du projet :</strong>{" "}
              Orbit a démarré sur Lovable, un outil qui génère une première
              version d'application à partir d'une description écrite.
              Cette base générée explique le choix initial des
              technologies, que je n'ai donc pas arbitré moi-même. Je l'ai
              ensuite reprise en profondeur : vue 3D, notifications,
              calendriers personnalisés, et remplacement des éléments de
              connexion qui dépendaient encore du compte Lovable et non du
              mien.
            </p>
          </Section>

          <Section title="Protection des données">
            <Labeled label="Ce qui est enregistré">
              Noms des contacts, catégories, notes libres, dates du dernier
              échange et motifs de rappel. Pour envoyer les notifications,
              l'application conserve aussi un identifiant de l'appareil.
            </Labeled>
            <Labeled label="Le point le plus délicat">
              Orbit contient des informations sur des personnes qui n'ont
              jamais donné leur accord : mes proches ignorent qu'ils
              figurent dans une base de données avec des notes les
              concernant. Le RGPD prévoit une exception pour un usage
              strictement personnel, qui couvre l'usage actuel de
              l'application. Cette exception disparaîtrait si j'ouvrais
              l'application au public. Je dois par ailleurs vérifier dans
              quelle région Supabase héberge ces données, pour savoir si
              elles restent en Europe.
            </Labeled>
            <Labeled label="Le cloisonnement entre comptes">
              Repose, comme sur SweetHome, sur des règles inscrites dans la
              base elle-même : chaque personne ne voit que ses propres
              contacts, et cette règle s'applique même à quelqu'un qui
              contournerait l'application.
            </Labeled>
          </Section>

          <Section title="Ce que ce projet m'a appris sur la sécurité">
            <Callout icon={KeyRound} label="Incident corrigé">
              <p>
                <strong>J'ai exposé une clé d'accès.</strong> Pendant la
                configuration des notifications, j'ai partagé hors du projet
                une clé donnant un accès complet à la base, en pensant
                qu'elle était nécessaire pour un test. Je l'ai révoquée et
                remplacée. La leçon dépasse le cas précis : un secret ne
                fuite pas seulement par du code mal configuré, mais aussi
                par une fenêtre de discussion ou une capture d'écran.
              </p>
              <p>
                <strong>
                  D'anciennes clés restent dans l'historique du projet.
                </strong>{" "}
                Un fichier de configuration a été enregistré avant que je
                pense à l'exclure. Exclure un fichier ne l'efface pas des
                versions déjà enregistrées : il faut nettoyer l'historique.
                C'est pour cette raison que je ne publie pas encore le code
                de ce projet.
              </p>
              <p>
                <strong>
                  Je ne contrôlais pas ma propre authentification.
                </strong>{" "}
                La connexion par compte Google reposait sur les identifiants
                de Lovable, pas sur les miens. Une partie du parcours de
                connexion de mes utilisateurs dépendait donc d'un tiers,
                sans que j'en aie conscience, jusqu'à ce que je la
                remplace.
              </p>
            </Callout>
          </Section>

          <Section title="Une panne instructive">
            <Callout icon={ServerCrash} label="Panne résolue">
              <p>
                L'inscription a cessé de fonctionner du jour au lendemain,
                avec une simple erreur réseau. La cause n'était pas dans le
                code : la base de données, hébergée sur une offre gratuite,
                avait été mise en pause après une période sans activité,
                puis supprimée. J'ai dû tout reconfigurer. Depuis, je
                considère la disponibilité d'un service gratuit comme une
                hypothèse à surveiller, pas comme un acquis.
              </p>
              <p>
                Autre incident : certaines planètes s'affichaient
                parfaitement chez moi mais devenaient invisibles une fois le
                site en ligne. L'outil de mise en forme supprime
                automatiquement les styles qu'il croit inutilisés, et les
                couleurs des planètes étaient construites au dernier
                moment, donc indétectables pour lui. Ni erreur, ni
                avertissement : j'ai trouvé la cause en inspectant le
                fichier de styles final.
              </p>
            </Callout>
          </Section>
        </div>
      </div>
    </article>
  );
}
