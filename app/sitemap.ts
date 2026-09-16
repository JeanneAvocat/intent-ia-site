import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getPosts } from "@/lib/content";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

// Date de dernière révision des pages vitrines. À avancer lors d'une refonte
// de contenu (les pages de blog portent leur propre date de publication).
const LAUNCH = "2026-09-16";

/**
 * sitemap.xml généré. Pages vitrines statiques + pages de détail (blog) lues
 * depuis la couche de contenu.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; freq: Freq; lastModified: string }[] = [
    { path: "/", priority: 1.0, freq: "weekly", lastModified: LAUNCH },
    { path: "/methode", priority: 0.9, freq: "monthly", lastModified: LAUNCH },
    { path: "/a-propos", priority: 0.7, freq: "monthly", lastModified: LAUNCH },
    { path: "/foudre-ia", priority: 0.8, freq: "weekly", lastModified: LAUNCH },
    { path: "/blog", priority: 0.7, freq: "weekly", lastModified: LAUNCH },
    { path: "/contact", priority: 0.8, freq: "monthly", lastModified: LAUNCH },
    { path: "/mentions-legales", priority: 0.2, freq: "yearly", lastModified: LAUNCH },
    { path: "/confidentialite", priority: 0.2, freq: "yearly", lastModified: LAUNCH },
    ...getPosts().map((p) => ({
      path: `/blog/${p.slug}`,
      priority: 0.6,
      freq: "monthly" as Freq,
      lastModified: p.datePublished,
    })),
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
