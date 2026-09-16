import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Politique de confidentialité d'IntentIA : données collectées, bases légales, durées de conservation, droits RGPD, cookies.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

const MAXW = 760;

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="ia-h2" style={{ fontSize: 26, margin: "48px 0 16px" }}>
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="ia-body" style={{ color: "var(--ink)", margin: "0 0 16px" }}>
      {children}
    </p>
  );
}

function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul className="ia-body" style={{ color: "var(--ink)", margin: "0 0 16px", paddingLeft: 22 }}>
      {items.map((it, i) => (
        <li key={i} style={{ marginBottom: 8, lineHeight: 1.6 }}>
          {it}
        </li>
      ))}
    </ul>
  );
}

function Todo({ children }: { children: ReactNode }) {
  return (
    <div
      className="ia-card"
      style={{
        padding: "12px 16px",
        margin: "0 0 16px",
        borderColor: "var(--fulgur)",
        fontSize: 13.5,
        color: "var(--gres)",
      }}
    >
      À VÉRIFIER PAR HUGO AVANT MISE EN LIGNE : {children}
    </div>
  );
}

const COLLECTE: string[] = [
  "Des données d'identification (nom, prénom, adresse email, numéro de téléphone) transmises via le mailto de contact ou, une fois branché, un formulaire ;",
  "Des données relatives à votre vie professionnelle (nom du cabinet ou de la structure, fonction) ;",
  "Des données relatives à votre demande (objet de votre sollicitation, échanges) ;",
  "Si vous vous inscrivez à la newsletter Foudre IA : votre adresse email, et les données de délivrabilité gérées par l'outil d'envoi une fois celui-ci branché ;",
  "Des données de navigation et de connexion (adresse IP, journaux techniques).",
];

export default function ConfidentialitePage() {
  return (
    <>
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingTop: 72, paddingBottom: 48, maxWidth: 820 }}>
          <Eyebrow>Légal</Eyebrow>
          <h1 className="ia-h1" style={{ margin: "20px 0 0" }}>
            Politique de confidentialité
          </h1>
          <p className="ia-lead" style={{ margin: "16px 0 0" }}>
            IntentIA · intent-ia.com
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: MAXW }}>
          <Todo>
            Ce document est un gabarit à valider et compléter par Hugo,
            notamment le responsable de traitement exact et son adresse, avant
            toute mise en ligne. Il ne doit PAS être publié en l&apos;état.
          </Todo>

          <P>
            La protection de vos données personnelles est une priorité pour
            IntentIA. Lors de votre utilisation du site intent-ia.com (le
            « Site »), nous recueillons des données à caractère personnel vous
            concernant.
          </P>
          <P>
            Le but de cette politique est de vous informer sur les modalités
            selon lesquelles nous traitons ces données en conformité avec le
            Règlement (UE) 2016/679 du 27 avril 2016 (le « RGPD ») et la Loi
            n° 78-17 du 6 janvier 1978 relative à l&apos;informatique, aux
            fichiers et aux libertés.
          </P>

          <H2>Qui est le responsable de traitement ?</H2>
          <P>
            Le responsable de traitement est [À COMPLÉTER : structure porteuse
            d&apos;IntentIA], dont l&apos;adresse est [À COMPLÉTER]. Aucun
            délégué à la protection des données (DPO) distinct n&apos;a été
            désigné à ce stade.
          </P>

          <H2>Quelles données collectons-nous ?</H2>
          <P>Nous collectons des données personnelles qui relèvent des catégories suivantes :</P>
          <UL items={COLLECTE} />

          <H2>Comment collectons-nous les données ?</H2>
          <P>
            Nous collectons vos données parce que vous nous les fournissez
            directement, en nous écrivant par email, en remplissant un
            formulaire de contact ou d&apos;inscription à la newsletter une
            fois ceux-ci branchés, ou au cours de nos échanges.
          </P>

          <H2>Sur quelle base légale et pour quelle durée ?</H2>
          <P>
            Nous traitons vos données pour répondre à vos demandes de contact
            (exécution de mesures précontractuelles prises à votre demande, ou
            notre intérêt légitime à répondre à vos sollicitations), et pour
            vous adresser la newsletter Foudre IA si vous vous y êtes inscrit
            (consentement). Les données de contact sont conservées 3 ans à
            compter de votre dernier échange ; les données d&apos;inscription
            à la newsletter sont conservées jusqu&apos;à votre désinscription.
          </P>

          <H2>Qui sont les destinataires de vos données ?</H2>
          <P>
            [À COMPLÉTER une fois les prestataires techniques choisis :
            hébergeur, outil d&apos;envoi de newsletter, outil de formulaire de
            contact le cas échéant.] Chacun de nos sous-traitants
            n&apos;intervient que sur nos instructions et est lié par un
            engagement de confidentialité et de sécurité conforme à
            l&apos;article 28 du RGPD.
          </P>

          <H2>Vos données sont-elles transférées hors de l&apos;Union européenne ?</H2>
          <P>
            [À COMPLÉTER selon les prestataires effectivement retenus pour
            l&apos;hébergement et l&apos;envoi de la newsletter. Si un outil
            hors UE est utilisé, documenter ici le mécanisme de transfert
            (clauses contractuelles types, décision d&apos;adéquation, etc.).]
          </P>

          <H2>Quels sont vos droits sur vos données ?</H2>
          <P>
            Vous disposez des droits d&apos;information, d&apos;accès, de
            rectification, de limitation, d&apos;effacement, d&apos;opposition
            et de portabilité prévus par les articles 13 à 21 du RGPD, ainsi
            que du droit d&apos;introduire une réclamation auprès de la CNIL
            (3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07,{" "}
            <a
              className="ia-link"
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cnil.fr
            </a>
            ).
          </P>

          <H2>Quels cookies utilisons-nous ?</H2>
          <P>
            Le Site n&apos;utilise pas, à ce stade, d&apos;outil de mesure
            d&apos;audience ni de cookies publicitaires. Seuls peuvent être
            déposés des cookies strictement nécessaires au fonctionnement du
            Site.
          </P>

          <H2>Point de contact pour exercer vos droits</H2>
          <P>Email de contact : [À COMPLÉTER].</P>

          <H2>Modifications</H2>
          <P>
            Cette politique peut être modifiée à tout moment, notamment pour
            se conformer à toute évolution réglementaire ou technique.
          </P>

          <p className="ia-small" style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--line)" }}>
            Entrée en vigueur : à compléter à la mise en ligne. Document
            rédigé par IA, à valider par Hugo avant publication.
          </p>
        </div>
      </section>
    </>
  );
}
