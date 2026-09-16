import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BackLink } from "@/components/site/primitives";
import { CTAFinal } from "@/components/site/CTAFinal";
import { FAQ } from "@/components/site/FAQ";
import { mdxComponents } from "@/components/site/mdx";
import { JsonLd } from "@/components/site/JsonLd";
import { article, faqPage, breadcrumb } from "@/lib/jsonld";
import { getPosts, getPost, getRelatedPosts } from "@/lib/content";
import { categoryLabel } from "@/lib/categories";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.headline,
    description: post.summary,
    alternates: { canonical: `/actualites/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.headline,
      description: post.summary,
      publishedTime: post.datePublished,
      authors: [site.founder],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  return (
    <>
      <JsonLd
        data={[
          article({
            headline: post.headline,
            description: post.summary,
            path: `/actualites/${post.slug}`,
            datePublished: post.datePublished,
            section: categoryLabel(post.category),
          }),
          ...(post.faq.length ? [faqPage(post.faq)] : []),
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: "Actualités", path: "/actualites" },
            { name: categoryLabel(post.category), path: `/actualites/categorie/${post.category}` },
            { name: post.title, path: `/actualites/${post.slug}` },
          ]),
        ]}
      />

      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingTop: 48, paddingBottom: 44, maxWidth: 760 }}>
          <BackLink href="/actualites">Actualités</BackLink>
          <div
            style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18, flexWrap: "wrap" }}
          >
            <Link href={`/actualites/categorie/${post.category}`} className="ia-kicker">
              {categoryLabel(post.category)}
            </Link>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--gres)" }}>
              <time dateTime={post.datePublished}>{post.date}</time>
              {post.readingTime ? ` · ${post.readingTime}` : ""}
            </span>
          </div>
          <h1 className="ia-h1" style={{ margin: "0 0 22px" }}>
            {post.headline}
          </h1>
          <p className="ia-lead" style={{ margin: "0 0 20px" }}>
            {post.lead}
          </p>
          {/* Signature auteur : signal E-E-A-T visible */}
          <div style={{ fontSize: 14, color: "var(--gres)" }}>
            Par <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{site.founder}</strong>,{" "}
            {site.founderTitle.toLowerCase()}
          </div>
          {post.provisional && (
            <div className="ia-provisional" style={{ marginTop: 24 }}>
              Article de démonstration : contenu d&apos;exemple écrit dans la voix
              de la marque, sans statistique ni citation attribuée à une vraie
              personne ou entreprise. À valider par Hugo avant toute publication
              réelle.
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <article className="container" style={{ maxWidth: 720 }}>
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>
      </section>

      {post.faq.length > 0 && (
        <div className="section--alt">
          <FAQ items={post.faq} eyebrow="FAQ" title="Questions fréquentes" />
        </div>
      )}

      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ maxWidth: 820 }}>
            <div className="ia-kicker" style={{ marginBottom: 8, display: "block" }}>
              À lire aussi
            </div>
            <div className="ia-feed">
              {related.map((p) => (
                <Link key={p.slug} href={`/actualites/${p.slug}`} className="ia-feed-row">
                  <div className="ia-feed-meta">{p.date}</div>
                  <div>
                    <h3 className="ia-feed-title">{p.headline}</h3>
                    <p className="ia-feed-summary">{p.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAFinal />
    </>
  );
}
