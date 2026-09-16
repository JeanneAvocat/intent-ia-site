import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryRail } from "@/components/site/CategoryRail";
import { ArticleFeed } from "@/components/site/ArticleFeed";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumb } from "@/lib/jsonld";
import { getPostsByCategory } from "@/lib/content";
import { CATEGORIES, getCategory } from "@/lib/categories";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.label} : actualités`,
    description: category.description,
    alternates: { canonical: `/actualites/categorie/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: "Actualités", path: "/actualites" },
            { name: category.label, path: `/actualites/categorie/${category.slug}` },
          ]),
        ]}
      />
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 0 }}>
          <h1 className="ia-h1" style={{ margin: "0 0 14px" }}>
            {category.label}
          </h1>
          <p className="ia-lead" style={{ margin: "0 0 26px", maxWidth: 620 }}>
            {category.description}
          </p>
          <CategoryRail active={category.slug} />
        </div>
      </section>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <ArticleFeed posts={posts} showLead={posts.length > 1} />
        </div>
      </section>
    </>
  );
}
