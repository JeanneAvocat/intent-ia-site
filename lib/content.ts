import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { type CategorySlug, CATEGORIES } from "./categories";

/**
 * Couche de contenu MDX. Un article = un fichier `.mdx` dans
 * `content/articles/`, versionné dans Git : on rédige, on pousse, Clever
 * Cloud déploie. Les fichiers sont lus au build (SSG) ; le frontmatter pilote
 * les métadonnées d'article, le corps MDX porte la prose.
 *
 * Ce module n'est importé que côté serveur (pages, sitemap, generateStaticParams) :
 * il utilise `fs` et ne doit jamais être importé par un composant client.
 *
 * Note de provenance : TOUS les articles de `content/articles/` livrés avec ce
 * dépôt initial portent `provisional: true`. Ce sont des exemples de démonstration
 * écrits dans la voix de la marque Foudre IA, SANS statistique, témoignage ou
 * citation attribuée à une vraie personne ou entreprise. Ils doivent être relus
 * et validés par Hugo (passer `provisional: false`) avant toute publication réelle.
 */

const ROOT = path.join(process.cwd(), "content");
const KNOWN_CATEGORIES = new Set<string>(CATEGORIES.map((c) => c.slug));

export type FaqItem = { q: string; a: string };

export type Post = {
  slug: string;
  category: CategorySlug;
  title: string;
  headline: string;
  summary: string;
  lead: string;
  date: string;
  datePublished: string;
  readingTime: string;
  provisional: boolean;
  faq: FaqItem[]; // optionnel dans le frontmatter ; alimente l'affichage + le schema FAQPage
  content: string; // corps MDX brut, compilé sur la page de détail
};

type Entry = { slug: string; data: Record<string, unknown>; content: string };

function readCollection(dir: string): Entry[] {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(full, f), "utf8");
      const { data, content } = matter(raw);
      return { slug: f.replace(/\.mdx$/, ""), data, content };
    });
}

/** Normalise une catégorie de frontmatter : retombe sur la première catégorie
 *  connue si la valeur est absente ou invalide, pour ne jamais casser le build
 *  sur une faute de frappe dans un fichier MDX. */
function normalizeCategory(raw: unknown): CategorySlug {
  const value = String(raw ?? "");
  if (KNOWN_CATEGORIES.has(value)) return value as CategorySlug;
  return CATEGORIES[0]!.slug;
}

export function getPosts(): Post[] {
  return readCollection("articles")
    .map(({ slug, data, content }) => ({
      slug,
      category: normalizeCategory(data.category),
      title: String(data.title ?? slug),
      headline: String(data.headline ?? data.title ?? slug),
      summary: String(data.summary ?? ""),
      lead: String(data.lead ?? ""),
      date: String(data.date ?? ""),
      datePublished: String(data.datePublished ?? ""),
      readingTime: String(data.readingTime ?? ""),
      provisional: Boolean(data.provisional),
      faq: (data.faq as FaqItem[]) ?? [],
      content,
    }))
    // plus récent d'abord, slug en départage (ordre stable entre builds)
    .sort((a, b) =>
      a.datePublished === b.datePublished
        ? a.slug.localeCompare(b.slug)
        : b.datePublished.localeCompare(a.datePublished),
    );
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

/** Tous les articles d'une catégorie donnée, plus récents d'abord. */
export function getPostsByCategory(category: CategorySlug): Post[] {
  return getPosts().filter((p) => p.category === category);
}

/**
 * Articles liés (maillage interne) : même catégorie d'abord, complété par les
 * plus récents, en excluant l'article courant.
 */
export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const all = getPosts();
  const current = all.find((p) => p.slug === slug);
  const others = all.filter((p) => p.slug !== slug);
  const sameCat = current ? others.filter((p) => p.category === current.category) : [];
  const rest = others.filter((p) => !sameCat.includes(p));
  return [...sameCat, ...rest].slice(0, limit);
}
