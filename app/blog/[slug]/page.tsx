import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BackLink } from "@/components/site/primitives";
import { CTAFinal } from "@/components/site/CTAFinal";
import { FAQ } from "@/components/site/FAQ";
import { ResourceCards } from "@/components/site/ResourceCards";
import { mdxComponents } from "@/components/site/mdx";
import { JsonLd } from "@/components/site/JsonLd";
import { article, faqPage, breadcrumb } from "@/lib/jsonld";
import { getPosts, getPost, getRelatedPosts } from "@/lib/content";
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
    alternates: { canonical: `/blog/${post.slug}` },
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

  const related = getRelatedPosts(post.slug, 2);

  return (
    <>
      <JsonLd
        data={[
          article({
            headline: post.headline,
            description: post.summary,
            path: `/blog/${post.slug}`,
            datePublished: post.datePublished,
            section: post.category,
          }),
          ...(post.faq.length ? [faqPage(post.faq)] : []),
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ paddingTop: 56, paddingBottom: 48, maxWidth: 760 }}>
          <BackLink href="/blog">Blog</BackLink>
          <div
            style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 18, flexWrap: "wrap" }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11.5,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--fulgur-deep)",
              }}
            >
              {post.category}
            </span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--gres)" }}>
              <time dateTime={post.datePublished}>{post.date}</time> · {post.readingTime}
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
            <div
              className="ia-card"
              style={{
                marginTop: 24,
                padding: "12px 16px",
                borderColor: "var(--fulgur)",
                fontSize: 13.5,
                color: "var(--gres)",
              }}
            >
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
        <section className="section">
          <div className="container">
            <div
              className="ia-eyebrow"
              style={{ fontFamily: "var(--mono)", textTransform: "uppercase", color: "var(--fulgur-deep)" }}
            >
              À lire aussi
            </div>
            <ResourceCards
              items={related.map((p) => ({
                category: p.category,
                title: p.title,
                summary: p.summary,
                href: `/blog/${p.slug}`,
              }))}
            />
          </div>
        </section>
      )}

      <CTAFinal />
    </>
  );
}
