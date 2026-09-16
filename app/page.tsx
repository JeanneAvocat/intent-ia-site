import type { Metadata } from "next";
import Link from "next/link";
import { CategoryRail } from "@/components/site/CategoryRail";
import { ArticleFeed } from "@/components/site/ArticleFeed";
import { ServicesTeaser } from "@/components/home/sections";
import { JsonLd } from "@/components/site/JsonLd";
import { faqPage } from "@/lib/jsonld";
import { getPosts } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.newsletterName} · L'actualité de l'IA appliquée au droit`,
  },
  description:
    "Foudre IA suit l'actualité de l'intelligence artificielle appliquée au droit : marché des laboratoires IA, droit de l'IA, legal tech, cas d'usage en cabinet, mouvements et événements.",
  alternates: { canonical: "/" },
};

const HOME_FAQ = [
  {
    q: "Foudre IA est-il lié à IntentIA ?",
    a: "Oui : Foudre IA est le média d'actualités animé par IntentIA, l'offre de formation et d'implantation d'IA d'Hugo Salard, avocat au Barreau de Paris. Le média et l'offre de services restent des espaces distincts sur ce site.",
  },
  {
    q: "Qui écrit Foudre IA ?",
    a: "Hugo Salard, avocat au Barreau de Paris et fondateur de Jeanne Avocat et d'IntentIA, écrit et sélectionne les sujets couverts par Foudre IA.",
  },
  {
    q: "Comment recevoir Foudre IA par email ?",
    a: "Aucune plateforme d'envoi n'est branchée à ce stade : la page dédiée à la newsletter explique comment demander une inscription manuelle en attendant.",
  },
];

export default function HomePage() {
  const posts = getPosts();
  const [lead, ...rest] = posts;
  const feed = rest.slice(0, 8);

  return (
    <>
      <JsonLd data={[faqPage(HOME_FAQ)]} />

      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingTop: 40, paddingBottom: 0 }}>
          <CategoryRail />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 44 }}>
        <div className="container grid split" style={{ ["--cols" as string]: "1.7fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            {lead && (
              <article className="ia-lead-story">
                <Link href={`/actualites/categorie/${lead.category}`} className="ia-kicker">
                  À la une
                </Link>
                <Link href={`/actualites/${lead.slug}`}>
                  <h1 className="ia-lead-story-title">{lead.headline}</h1>
                </Link>
                <p className="ia-lead" style={{ maxWidth: 640, margin: "0 0 14px" }}>
                  {lead.summary}
                </p>
                <div className="ia-feed-meta">
                  {lead.date}
                  {lead.readingTime ? ` · ${lead.readingTime}` : ""}
                  {lead.provisional ? " · exemple de démonstration" : ""}
                </div>
              </article>
            )}
            <ArticleFeed posts={feed} />
            <div style={{ marginTop: 8, paddingTop: 20 }}>
              <Link href="/actualites" className="ia-arrow">
                Toute l&apos;actualité
              </Link>
            </div>
          </div>

          <aside style={{ borderLeft: "1px solid var(--line)", paddingLeft: 32 }}>
            <div className="ia-kicker" style={{ display: "block", marginBottom: 16 }}>
              {site.newsletterName}
            </div>
            <p className="ia-body" style={{ color: "var(--gres)", marginBottom: 18, fontSize: 15 }}>
              {site.newsletterTagline}
            </p>
            <Link href="/foudre-ia" className="ia-btn ia-btn--p ia-btn--sm">
              S&apos;inscrire
            </Link>

            <div style={{ marginTop: 40, borderTop: "1px solid var(--line)", paddingTop: 24 }}>
              <div className="ia-kicker" style={{ display: "block", marginBottom: 16 }}>
                Rubriques
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Link href="/actualites/categorie/marche-laboratoires-ia" className="ia-navlink" style={{ display: "block" }}>
                  Marché & laboratoires IA
                </Link>
                <Link href="/actualites/categorie/droit-ia" className="ia-navlink" style={{ display: "block" }}>
                  Droit de l&apos;IA
                </Link>
                <Link href="/actualites/categorie/legal-tech-outils" className="ia-navlink" style={{ display: "block" }}>
                  Legal tech & outils
                </Link>
                <Link href="/actualites/categorie/cas-usage-cabinet" className="ia-navlink" style={{ display: "block" }}>
                  Cas d&apos;usage en cabinet
                </Link>
                <Link href="/actualites/categorie/mouvements-nominations" className="ia-navlink" style={{ display: "block" }}>
                  Mouvements & nominations
                </Link>
                <Link href="/actualites/categorie/evenements" className="ia-navlink" style={{ display: "block" }}>
                  Événements
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ServicesTeaser />
    </>
  );
}
