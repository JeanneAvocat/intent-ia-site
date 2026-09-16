import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getPosts } from "@/lib/content";
import { CATEGORIES } from "@/lib/categories";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

// Date de dernière révision des pages vitrines. À avancer lors d'une refonte
// de contenu (les pages d'actualité portent leur propre date de publication).
const LAUNCH = "2026-09-16";

/**
 * sitemap.xml généré. Le média (actualités + catégories) est prioritaire,
 * les pages de services suivent.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; freq: Freq; lastModified: string }[] = [
    { path: "/", priority: 1.0, freq: "daily", lastModified: LAUNCH },
    { path: "/actualites", priority: 0.9, freq: "daily", lastModified: LAUNCH },
    ...CATEGORIES.map((c) => ({
      path: `/actualites/categorie/${c.slug}`,
      priority: 0.7,
      freq: "daily" as Freq,
      lastModified: LAUNCH,
    })),
    { path: "/foudre-ia", priority: 0.7, freq: "weekly", lastModified: LAUNCH },
    { path: "/methode", priority: 0.6, freq: "monthly", lastModified: LAUNCH },
    { path: "/a-propos", priority: 0.5, freq: "monthly", lastModified: LAUNCH },
    { path: "/contact", priority: 0.6, freq: "monthly", lastModified: LAUNCH },
    { path: "/mentions-legales", priority: 0.2, freq: "yearly", lastModified: LAUNCH },
    { path: "/confidentialite", priority: 0.2, freq: "yearly", lastModified: LAUNCH },
    ...getPosts().map((p) => ({
      path: `/actualites/${p.slug}`,
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
