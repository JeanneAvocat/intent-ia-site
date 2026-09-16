import type { Metadata } from "next";
import Image from "next/image";
import { CTAFinal } from "@/components/site/CTAFinal";
import { Eyebrow } from "@/components/site/primitives";
import { JsonLd } from "@/components/site/JsonLd";
import { aboutPage, breadcrumb } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hugo Salard, avocat et fondateur d'IntentIA",
  description:
    "Hugo Salard, avocat au Barreau de Paris, fondateur de Jeanne Avocat et d'IntentIA. Formation et implantation d'IA opérationnelle pour cabinets d'avocats.",
  alternates: { canonical: "/a-propos" },
};

const APPROCHE = [
  {
    e: "Mon parcours",
    t: "Avocat, et bâtisseur d'un cabinet IA-natif.",
    d: "J'ai fondé Jeanne Avocat, le premier cabinet d'affaires IA-natif de France. IntentIA vient de cette expérience de terrain, pas d'une théorie.",
  },
  {
    e: "Pourquoi IntentIA",
    t: "Personne ne combine les trois.",
    d: "Déploiement IA opérationnel, conformité RGPD intégrée, légitimité d'avocat : je ne connais pas d'autre offre qui réunit ces trois éléments en France.",
  },
  {
    e: "Déontologie",
    t: "Une marque séparée, par choix.",
    d: "IntentIA n'exerce pas le droit : c'est une offre de formation et d'implantation distincte de Jeanne Avocat, pour éviter toute confusion de rôle.",
  },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd
        data={[
          aboutPage(),
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: "À propos", path: "/a-propos" },
          ]),
        ]}
      />
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div
          className="container grid split"
          style={{
            ["--cols" as string]: "1.1fr 0.9fr",
            gap: 56,
            alignItems: "center",
            paddingTop: 72,
            paddingBottom: 64,
          }}
        >
          <div>
            <Eyebrow num="01">À propos</Eyebrow>
            <h1 className="ia-h1" style={{ margin: "20px 0 22px" }}>
              Avocat, et bâtisseur d&apos;un cabinet IA-natif.
            </h1>
            <p className="ia-body" style={{ color: "var(--gres)", maxWidth: 540, marginBottom: 18 }}>
              Je suis avocat au Barreau de Paris et j&apos;ai fondé{" "}
              <a
                href={site.jeanneAvocatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ia-link"
              >
                Jeanne Avocat
              </a>
              , le premier cabinet d&apos;affaires IA-natif de France. Avant de
              proposer IntentIA à d&apos;autres cabinets, j&apos;ai construit et
              testé cette méthode dans le mien.
            </p>
            <p className="ia-body" style={{ color: "var(--gres)", maxWidth: 540 }}>
              Je crois qu&apos;aucune autre offre en France ne réunit ces trois
              éléments : un déploiement IA réellement opérationnel, une
              conformité RGPD et AI Act pensée dès la conception, et la
              légitimité de quelqu&apos;un qui exerce le droit et en connaît les
              contraintes de l&apos;intérieur.
            </p>
          </div>
          <div>
            <Image
              src="/assets/hugo-salard.png"
              alt="Hugo Salard, avocat au Barreau de Paris"
              width={750}
              height={750}
              sizes="(max-width: 1000px) 80vw, 440px"
              style={{ display: "block", width: "100%", maxWidth: 440, height: "auto", margin: "0 auto" }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid cols-3" style={{ gap: 32 }}>
          {APPROCHE.map((s, i) => (
            <div key={i}>
              <Eyebrow>{s.e}</Eyebrow>
              <div className="ia-h3" style={{ margin: "14px 0 8px" }}>
                {s.t}
              </div>
              <p className="ia-small" style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ maxWidth: 720 }}>
          <Eyebrow num="02">Jeanne Avocat</Eyebrow>
          <p className="ia-h3" style={{ margin: "14px 0 10px" }}>
            Une marque volontairement séparée.
          </p>
          <p className="ia-body" style={{ color: "var(--gres)", margin: 0 }}>
            IntentIA et Jeanne Avocat ont le même fondateur, mais des
            positionnements, des audiences et des obligations déontologiques
            différents. Jeanne Avocat exerce le droit à prix fixe pour les
            startups et entreprises tech. IntentIA forme et implante des
            configurations IA chez d&apos;autres professionnels du droit. Les
            deux marques restent distinctes par choix, pas par accident.
          </p>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
