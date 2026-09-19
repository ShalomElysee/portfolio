import { Ban, Bug } from "lucide-react";
import CaseStudyHero from "../components/case-study/CaseStudyHero";
import Section from "../components/case-study/Section";
import SectionNav from "../components/case-study/SectionNav";
import Callout from "../components/case-study/Callout";
import Labeled from "../components/case-study/Labeled";
import Figure from "../components/case-study/Figure";
import priscilleAccueil from "../assets/screenshots/priscille-accueil.webp";
import priscilleLivre from "../assets/screenshots/priscille-livre.webp";
import priscilleContact from "../assets/screenshots/priscille-contact.webp";

const sections = [
  "Le besoin",
  "Comment c'est construit",
  "Protection des données",
  "Deux pannes silencieuses, et ce qu'elles m'ont appris",
  "Où en est le projet",
];

export default function ProjectPriscille() {
  return (
    <article>
      <CaseStudyHero
        eyebrow="Site vitrine d'une autrice · Projet client · En ligne"
        title="Site de Priscille Besa Muntandwe"
        url="https://besapriscille.com/"
        urlLabel="Voir le site"
      />

      <div className="mx-auto max-w-5xl px-6 pt-6 pb-24 md:px-10 lg:grid lg:grid-cols-[180px_1fr] lg:gap-16">
        <SectionNav sections={sections} />

        <div>
          <Section title="Le besoin">
            <p>
              Priscille est une amie qui m'a fait confiance pour ce projet.
              C'était la sortie de son premier livre, et elle voulait un
              site qui renforce sa posture professionnelle et sa visibilité
              en tant qu'autrice, pas seulement une page de présentation
              basique. Le site accompagne donc aussi ses podcasts, ses
              actualités et un formulaire de contact.
            </p>
            <Figure
              src={priscilleAccueil}
              alt="Page d'accueil du site de Priscille Besa Muntandwe"
              caption="Page d'accueil"
              browser="besapriscille.com"
            />
            <Figure
              src={priscilleLivre}
              alt="Page de présentation du livre de Priscille Besa Muntandwe"
              caption="Page du livre"
              browser="besapriscille.com"
            />
            <Figure
              src={priscilleContact}
              alt="Formulaire de contact du site de Priscille Besa Muntandwe"
              caption="Formulaire de contact"
              browser="besapriscille.com/contact"
            />
          </Section>

          <Section title="Comment c'est construit">
            <p>
              Le site est écrit en React et publié sur Netlify. Chaque
              modification que j'envoie est mise en ligne automatiquement.
            </p>
            <p>
              <strong>
                Il n'y a volontairement ni base de données ni espace
                d'administration.
              </strong>{" "}
              Tous les textes, images et liens sont écrits dans des fichiers
              dédiés, séparés du reste du code. Ce choix réduit fortement la
              surface exposée : sans compte, sans mot de passe et sans
              base, il n'y a presque rien à attaquer. Il a une contrepartie
              que j'assume : Priscille ne peut pas modifier son site seule,
              chaque changement passe par moi. Pour un site de quelques
              pages qui évolue peu, l'échange me paraît favorable, mais il
              faudrait revoir ce choix si elle publiait régulièrement.
            </p>
            <p>
              <strong>Ce projet m'a aussi servi de modèle.</strong> Je l'ai
              construit pour être réutilisable sur d'autres sites clients,
              avec ses propres règles écrites, notamment celle de ne jamais
              mélanger le texte du client et le code de l'interface.
            </p>
          </Section>

          <Section title="Protection des données">
            <Labeled label="Ce qui est collecté">
              Uniquement ce qu'un visiteur saisit dans le formulaire de
              contact, c'est-à-dire son nom, son e-mail, un sujet et un
              message. Ni mot de passe, ni paiement.
            </Labeled>
            <Labeled label="Où vont ces messages">
              Ils sont traités par Netlify, qui envoie une notification par
              e-mail à Priscille. Seules les personnes disposant d'un accès
              au compte d'hébergement peuvent les consulter.
            </Labeled>
            <Labeled label="Ce que j'ai mis en place">
              Un filtre anti-spam fourni par l'hébergeur, ainsi que
              plusieurs réglages de sécurité côté serveur. Ils empêchent
              notamment un autre site d'afficher celui de Priscille dans un
              cadre invisible pour piéger ses visiteurs, et limitent les
              informations transmises aux sites vers lesquels on clique.
            </Labeled>
            <Callout icon={Ban} label="Limite assumée">
              Il n'existe aucune protection anti-robot en dehors du filtre
              de l'hébergeur, ni limitation du nombre d'envois. La
              protection du formulaire repose donc entièrement sur un
              service tiers que je ne peux pas régler finement.
            </Callout>
          </Section>

          <Section title="Deux pannes silencieuses, et ce qu'elles m'ont appris">
            <p>
              C'est le problème le plus formateur que j'ai rencontré, parce
              que rien ne signalait l'erreur.
            </p>
            <Callout icon={Bug} label="Incident corrigé — 1">
              <p>
                Le visiteur envoyait un message, voyait s'afficher «
                Message envoyé », et rien n'arrivait. L'hébergeur ne
                repérait pas le formulaire, car il analyse le site avant sa
                publication, à un moment où le formulaire n'existe pas
                encore : il n'apparaît que lorsque le navigateur du visiteur
                construit la page. Mon code aggravait le problème, puisqu'il
                affichait la confirmation même en cas d'échec de l'envoi.
                J'ai corrigé les deux points : un formulaire simplifié,
                invisible pour le visiteur, permet désormais à l'hébergeur
                de le détecter, et la confirmation ne s'affiche plus que si
                l'envoi a réussi.
              </p>
            </Callout>
            <Callout icon={Bug} label="Incident corrigé — 2">
              <p>
                Une fois ce problème réglé, un message parfaitement
                légitime a été classé comme indésirable par le filtre
                anti-spam. Aucune notification n'est partie, et personne
                n'a été averti. Il faut consulter manuellement le dossier
                des messages indésirables pour le découvrir.
              </p>
            </Callout>
            <p>
              Ces deux pannes partagent le même défaut : des deux côtés,
              tout semblait fonctionner. Le visiteur croyait son message
              envoyé, et la destinataire n'avait aucune raison de penser
              qu'on lui écrivait. C'est le type de défaillance qui
              m'intéresse le plus aujourd'hui, parce qu'aucune erreur
              n'apparaît nulle part. Depuis, je teste systématiquement un
              envoi réel en conditions réelles avant de considérer une mise
              en ligne comme terminée, et je vérifie régulièrement le
              dossier des indésirables.
            </p>
          </Section>

          <Section title="Où en est le projet">
            <p>
              Le nom de domaine et l'hébergement sont aujourd'hui payés et
              gérés par Priscille elle-même. C'est une amie qui m'a fait
              confiance pour ce projet, et le résultat lui a beaucoup plu :
              elle retrouve dans le site l'identité visuelle qu'elle
              voulait.
            </p>
          </Section>
        </div>
      </div>
    </article>
  );
}
