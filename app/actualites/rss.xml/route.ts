import { getPosts } from "@/lib/content";
import { categoryLabel } from "@/lib/categories";
import { site } from "@/lib/site";

/**
 * Flux RSS des actualités, généré statiquement au build depuis les articles
 * MDX. Disponible sur /actualites/rss.xml. Se met à jour à chaque déploiement
 * (push).
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
  const feedUrl = `${site.url}/actualites/rss.xml`;
  const lastBuild = posts.length ? rfc822(posts[0]!.datePublished) : rfc822("2026-09-16");

  const items = posts
    .map((p) => {
      const url = `${site.url}/actualites/${p.slug}`;
      return `    <item>
      <title>${xmlEscape(p.headline)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.datePublished)}</pubDate>
      <category>${xmlEscape(categoryLabel(p.category))}</category>
      <description>${xmlEscape(p.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${site.newsletterName} · Actualités</title>
    <link>${site.url}/actualites</link>
    <description>Toutes les actualités de Foudre IA sur l'intelligence artificielle appliquée au droit : marché, conformité, legal tech, cas d'usage, recrutements et événements.</description>
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
