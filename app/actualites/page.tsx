import type { Metadata } from "next";
import { CategoryRail } from "@/components/site/CategoryRail";
import { ArticleFeed } from "@/components/site/ArticleFeed";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumb } from "@/lib/jsonld";
import { getPosts } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.newsletterName} : toute l'actualité IA et droit`,
  description:
    "Toutes les actualités de Foudre IA sur l'intelligence artificielle appliquée au droit : marché, conformité, legal tech, cas d'usage, recrutements et événements.",
  alternates: {
    canonical: "/actualites",
    types: { "application/rss+xml": "/actualites/rss.xml" },
  },
};

export default function ActualitesPage() {
  const posts = getPosts();
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: "Actualités", path: "/actualites" },
          ]),
        ]}
      />
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 0 }}>
          <h1 className="ia-h1" style={{ margin: "0 0 22px" }}>
            Toute l&apos;actualité
          </h1>
          <CategoryRail />
        </div>
      </section>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <ArticleFeed posts={posts} showLead />
        </div>
      </section>
    </>
  );
}
