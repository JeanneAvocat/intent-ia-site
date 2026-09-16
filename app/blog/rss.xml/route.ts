import { getPosts } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Flux RSS du blog, généré statiquement au build depuis les articles MDX.
 * Disponible sur /blog/rss.xml. Se met à jour à chaque déploiement (push).
 */
export const dynamic = "force-static";

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(dateIso: string): string {
  // dateIso au format AAAA-MM-JJ → date UTC à minuit, format RFC 822/1123.
  return new Date(`${dateIso}T00:00:00Z`).toUTCString();
}

export function GET(): Response {
  const posts = getPosts();
  const feedUrl = `${site.url}/blog/rss.xml`;
  const lastBuild = posts.length ? rfc822(posts[0]!.datePublished) : rfc822("2026-09-16");

  const items = posts
    .map((p) => {
      const url = `${site.url}/blog/${p.slug}`;
      return `    <item>
      <title>${xmlEscape(p.headline)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.datePublished)}</pubDate>
      <category>${xmlEscape(p.category)}</category>
      <description>${xmlEscape(p.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>IntentIA · Blog</title>
    <link>${site.url}/blog</link>
    <description>Analyses sur l'IA appliquée au droit, la conformité RGPD et AI Act, et le déploiement d'outils IA dans les cabinets et directions juridiques.</description>
    <language>fr-FR</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
