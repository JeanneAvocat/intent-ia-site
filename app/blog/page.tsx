import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ResourceCards } from "@/components/site/ResourceCards";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumb } from "@/lib/jsonld";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog : IA et droit pour avocats, juristes et notaires",
  description:
    "Analyses sur l'IA appliquée au droit, la conformité RGPD et AI Act, et le déploiement d'outils IA dans les cabinets et directions juridiques.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Blog"
        title="L'IA et le droit, en clair."
        lead="Déploiement, conformité et pédagogie pour les professions réglementées. Les articles ci-dessous sont des exemples de démonstration, à valider avant publication réelle (voir la mention en pied de chaque article)."
      />
      <section className="section">
        <div className="container">
          <ResourceCards
            items={getPosts().map((p) => ({
              category: p.category,
              title: p.title,
              summary: p.summary,
              href: `/blog/${p.slug}`,
            }))}
          />
        </div>
      </section>
    </>
  );
}
