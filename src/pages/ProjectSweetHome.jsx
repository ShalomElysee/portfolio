import { Bug } from "lucide-react";
import CaseStudyHero from "../components/case-study/CaseStudyHero";
import Section from "../components/case-study/Section";
import SectionNav from "../components/case-study/SectionNav";
import Callout from "../components/case-study/Callout";
import Labeled from "../components/case-study/Labeled";
import Figure from "../components/case-study/Figure";
import sweethomeAccueil from "../assets/screenshots/sweethome-accueil.webp";
import sweethomeAjout from "../assets/screenshots/sweethome-ajout.webp";
import sweethomeListe from "../assets/screenshots/sweethome-liste.webp";
import sweethomeMembres from "../assets/screenshots/sweethome-membres.webp";

const sections = [
  "Le besoin",
  "Ce que fait l'application",
  "Comment l'application devine le rayon",
  "Comment c'est construit",
  "Protection des données",
  "Une faille que j'ai failli laisser passer",
  "Limites connues",
];

export default function ProjectSweetHome() {
  return (
    <article>
      <CaseStudyHero
        eyebrow="Liste de courses partagée · Application installable sur téléphone · Projet personnel"
        title="SweetHome"
        url="https://sweethomeproject.netlify.app/"
        urlLabel="Ouvrir l'application"
        demo={{ email: "test@sweethome.com", password: "R7kSRLk#Rw+pZN9" }}
      />

      <div className="mx-auto max-w-5xl px-6 pb-24 md:px-10 lg:grid lg:grid-cols-[180px_1fr] lg:gap-16">
        <SectionNav sections={sections} />

        <div>
          <Section title="Le besoin">
            <p>
              Chez moi, quelqu'un remarquait qu'un produit était presque
              terminé sans le signaler. Au retour du magasin, le dentifrice
              avait encore été oublié. SweetHome permet à chacun de signaler
              un produit en quelques secondes. La personne qui fait les
              courses voit alors une liste à jour, rangée par rayon.
            </p>
            <Figure
              src={sweethomeAccueil}
              alt="Page d'accueil de SweetHome présentant l'application"
              caption="Page d'accueil de SweetHome"
              browser="sweethomeproject.netlify.app"
            />
          </Section>

          <Section title="Ce que fait l'application">
            <ul>
              <li>
                On ajoute un produit en tapant son nom ou en scannant son
                code-barres.
              </li>
              <li>Chaque produit est rangé automatiquement dans le bon rayon.</li>
              <li>
                La liste se met à jour en même temps sur tous les téléphones
                de la maison.
              </li>
              <li>
                Chaque foyer accueille jusqu'à une dizaine de membres, avec
                trois rôles. Un enfant peut signaler un produit et faire les
                courses, mais ne peut rien supprimer ni modifier les
                réglages.
              </li>
            </ul>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Figure
                src={sweethomeListe}
                alt="Liste de courses SweetHome groupée par rayon"
                caption="La liste par rayon"
                browser="sweethomeproject.netlify.app"
                className=""
              />
              <Figure
                src={sweethomeAjout}
                alt="Écran d'ajout d'un produit dans SweetHome"
                caption="L'ajout d'un produit"
                browser="sweethomeproject.netlify.app"
                className=""
              />
              <Figure
                src={sweethomeMembres}
                alt="Écran des membres et rôles du foyer SweetHome"
                caption="L'écran des membres"
                browser="sweethomeproject.netlify.app"
                className=""
              />
            </div>
          </Section>

          <Section title="Comment l'application devine le rayon">
            <p>
              Elle essaie plusieurs méthodes, dans l'ordre, et s'arrête dès
              qu'elle obtient une réponse fiable :
            </p>
            <ol>
              <li>elle regarde comment la maison a déjà rangé ce produit ;</li>
              <li>
                elle consulte une liste de 133 produits courants intégrée à
                l'application ;
              </li>
              <li>
                pour un produit scanné, elle interroge Open Food Facts, une
                base publique de produits alimentaires ;
              </li>
              <li>
                elle compare le nom saisi à une liste de synonymes, en
                tolérant les fautes de frappe, sans rien envoyer sur
                internet ;
              </li>
              <li>
                si rien n'est certain, elle demande simplement dans quel
                rayon ranger le produit.
              </li>
            </ol>
            <p>
              Il n'y a pas d'intelligence artificielle ici, et c'est
              volontaire : je ne voulais pas que les listes de courses de ma
              famille soient envoyées à un service extérieur pour être
              analysées. J'ai tout de même testé un outil de reconnaissance
              de synonymes avant de renoncer. Il jugeait « crème fraîche » et
              « crème brûlée » très proches, mais ne voyait aucun lien entre
              « clopes » et « cigarettes ». Les chiffres m'ont fait abandonner
              une idée que je trouvais pourtant séduisante.
            </p>
          </Section>

          <Section title="Comment c'est construit">
            <p>
              L'application est écrite en React, un outil très répandu pour
              créer des interfaces web. Les données sont enregistrées dans
              une base hébergée par Supabase, un service qui fournit à la
              fois la base, la gestion des comptes et la synchronisation
              entre les appareils. Le site est publié sur Netlify.
            </p>
            <p>
              Au départ, la liste était enregistrée directement sur le
              téléphone. Dès que plusieurs personnes ont dû consulter la même
              liste sur des appareils différents, cette solution ne tenait
              plus et il a fallu une base commune.
            </p>
            <p>
              Sans connexion internet, l'application s'ouvre quand même et
              peut proposer un rayon, mais elle ne peut ni afficher ni
              modifier la liste partagée. Un bandeau le signale, plutôt que
              de laisser croire à un bug.
            </p>
          </Section>

          <Section title="Protection des données">
            <Labeled label="Ce qui est enregistré">
              Adresse e-mail, nom affiché, foyers et rôles, contenu des
              listes, prix et dates d'achat. Une liste peut contenir des noms
              de médicaments, ce qui la rend plus sensible qu'une simple
              liste alimentaire.
            </Labeled>
            <Labeled label="Le principe que j'ai suivi">
              Une maison ne doit jamais voir les données d'une autre. Cette
              règle n'est pas écrite dans l'application, mais dans la base de
              données elle-même. La différence compte : le code de
              l'application est téléchargé par le téléphone de chaque
              utilisateur, donc lisible et modifiable par une personne
              motivée. La base, elle, reste sur le serveur. Même quelqu'un
              qui contournerait complètement l'application pour interroger
              la base directement n'obtiendrait rien d'une autre maison.
            </Labeled>
            <Labeled label="Ce que j'ai mis en place">
              <ul>
                <li>
                  les actions sensibles comme inviter un membre, changer un
                  rôle ou vider une liste sont revérifiées par le serveur,
                  jamais seulement par l'application ;
                </li>
                <li>
                  les codes d'invitation comptent 8 chiffres, expirent au
                  bout de 5 minutes et ne servent qu'une fois ;
                </li>
                <li>
                  vider une liste entière demande d'être administrateur et de
                  ressaisir son mot de passe ;
                </li>
                <li>
                  après chaque modification de la base, un test automatique
                  vérifie qu'un visiteur non connecté n'obtient rien.
                </li>
              </ul>
            </Labeled>
          </Section>

          <Section title="Une faille que j'ai failli laisser passer">
            <Callout icon={Bug} label="Incident corrigé">
              <p>
                Un contrôle d'accès laissait passer les requêtes envoyées
                sans être connecté. En usage normal, rien ne dysfonctionnait,
                ce qui rendait le problème invisible.
              </p>
              <p>
                L'explication est instructive. Pour une personne connectée,
                la base connaît son identifiant. Pour une requête anonyme,
                cet identifiant n'est pas « faux » : il est vide, c'est-à-dire
                inconnu. Or, quand une condition porte sur une valeur
                inconnue, le résultat est lui aussi inconnu, et non « faux ».
                Ma vérification, qui se déclenchait uniquement sur un
                résultat « faux », ne se déclenchait donc jamais dans ce cas
                précis. Je vérifie désormais en premier, et séparément, que
                la personne est bien connectée.
              </p>
            </Callout>
          </Section>

          <Section title="Limites connues">
            <ul>
              <li>
                Un membre invité peut supprimer les produits un par un. Mes
                protections visent les fausses manipulations et le téléphone
                laissé déverrouillé, pas quelqu'un qu'on a invité soi-même et
                qui agit contre la maison.
              </li>
              <li>
                Le nombre de tentatives sur un code d'invitation n'est pas
                limité. La sécurité repose uniquement sur sa courte durée de
                vie et sur le nombre de combinaisons possibles. C'est une
                conséquence du format, pas une protection que j'ai conçue.
              </li>
              <li>
                Chaque nouvelle donnée ajoutée à la base doit recevoir ses
                propres règles d'accès. Un oubli suffirait à exposer des
                informations : c'est le coût permanent de ce choix
                d'architecture.
              </li>
              <li>
                La fonctionnalité de listes privées est en cours de
                développement. Tant que je ne l'ai pas testée avec un second
                compte réel, je la considère comme non vérifiée.
              </li>
              <li>
                La reconnaissance des synonymes confond encore « farine » et
                « farine de maïs ».
              </li>
            </ul>
            <p>
              <strong>Ce que j'ai mal fait :</strong> j'ai construit cinq
              versions fonctionnelles avant de travailler sérieusement
              l'apparence. La première a été jugée « trop enfantine » chez
              moi, la cinquième « fonctionne, mais n'a pas d'âme ». J'avais
              traité la sécurité avec rigueur dès le départ, et le design
              comme une finition.
            </p>
          </Section>
        </div>
      </div>
    </article>
  );
}
