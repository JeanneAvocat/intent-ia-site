import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales d'IntentIA : éditeur, hébergement, propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
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

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="ia-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
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

export default function MentionsLegalesPage() {
  return (
    <>
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingTop: 72, paddingBottom: 48, maxWidth: 820 }}>
          <Eyebrow>Légal</Eyebrow>
          <h1 className="ia-h1" style={{ margin: "20px 0 0" }}>
            Mentions légales
          </h1>
          <p className="ia-lead" style={{ margin: "16px 0 0" }}>
            Site intent-ia.com
          </p>
          <p className="ia-small" style={{ margin: "8px 0 0" }}>
            Dernière mise à jour : à compléter à la mise en ligne
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: MAXW }}>
          <Todo>
            Cette page a été rédigée par analogie avec les mentions légales de
            jeanne-avocat.com, SANS reprendre ses données d&apos;identité
            (adresse, SIRET, assurance). Le statut retenu par défaut ici est
            celui d&apos;une activité connexe à l&apos;exercice d&apos;avocat
            individuel d&apos;Hugo Salard (pas une société distincte) : à
            confirmer auprès de l&apos;Ordre avant publication, puis à
            remplacer les champs ci-après.
          </Todo>

          <H2>1. Éditeur du site</H2>
          <P>
            Le présent site est édité par Maître Hugo Salard, avocat au
            Barreau de Paris, dans le cadre d&apos;une activité connexe à son
            exercice individuel d&apos;avocat [statut à confirmer auprès de
            l&apos;Ordre avant publication].
          </P>
          <UL
            items={[
              "Adresse : [À COMPLÉTER].",
              "Téléphone : [À COMPLÉTER].",
              "Adresse électronique : [À COMPLÉTER].",
              "Numéro SIRET : [À COMPLÉTER].",
              "Numéro de TVA intracommunautaire : [À COMPLÉTER, le cas échéant].",
            ]}
          />

          <H2>2. Directeur de la publication</H2>
          <P>Le directeur de la publication est Hugo Salard.</P>

          <H2>3. Nature de l&apos;activité</H2>
          <P>
            IntentIA est une offre de formation et d&apos;implantation de
            configurations d&apos;intelligence artificielle pour les avocats,
            juristes, notaires et professions réglementées voisines. IntentIA
            anime également Foudre IA, un média d&apos;actualités sur
            l&apos;intelligence artificielle appliquée au droit. IntentIA est
            une activité connexe à l&apos;exercice d&apos;avocat individuel de
            Maître Hugo Salard, distincte de l&apos;activité d&apos;avocat
            exercée au sein de{" "}
            <Ext href="https://jeanne-avocat.com">Jeanne Avocat</Ext>.
          </P>
          <Todo>
            Vérifier que cette formulation est conforme aux règles
            déontologiques applicables (RIN, activités accessoires d&apos;un
            avocat) avant publication. Consulter l&apos;Ordre si besoin.
          </Todo>

          <H2>4. Hébergement</H2>
          <P>
            Le site est hébergé par :
            <br />
            Clever Cloud SAS
            <br />
            3 rue de l&apos;Allier, CS 30315, 44000 Nantes, France
            <br />
            Téléphone : +33 2 85 52 07 69
          </P>

          <H2>5. Propriété intellectuelle</H2>
          <P>
            L&apos;ensemble des contenus présents sur le site intent-ia.com
            (textes, articles, éléments graphiques, logo, charte, structure)
            est protégé par le droit de la propriété intellectuelle. Toute
            reproduction, représentation, modification ou exploitation, totale
            ou partielle, sans autorisation écrite préalable, est interdite.
          </P>

          <H2>6. Données personnelles</H2>
          <P>
            Les modalités de traitement des données personnelles collectées
            via le site sont détaillées dans la{" "}
            <Link className="ia-link" href="/confidentialite">
              Politique de confidentialité
            </Link>
            .
          </P>
          <P>
            Vous pouvez introduire une réclamation auprès de la CNIL, 3 place
            de Fontenoy, TSA 80715, 75334 Paris Cedex 07,{" "}
            <Ext href="https://www.cnil.fr">www.cnil.fr</Ext>.
          </P>

          <H2>7. Mesure d&apos;audience et cookies</H2>
          <P>
            Le site n&apos;utilise pas d&apos;outil de mesure d&apos;audience ni
            de cookie publicitaire ou de suivi tiers à ce stade. Seuls
            peuvent être déposés des cookies strictement nécessaires au
            fonctionnement du site.
          </P>

          <H2>8. Responsabilité</H2>
          <P>
            Les contenus à caractère général publiés sur le site ont une
            vocation informative et ne constituent pas une consultation
            juridique personnalisée. Le site peut contenir des liens vers des
            sites tiers, notamment jeanne-avocat.com, sur lesquels
            l&apos;éditeur n&apos;exerce aucun contrôle éditorial.
          </P>

          <H2>9. Droit applicable</H2>
          <P>
            Les présentes mentions légales sont régies par le droit français.
          </P>
        </div>
      </section>
    </>
  );
}
