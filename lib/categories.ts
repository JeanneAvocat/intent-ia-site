/**
 * Taxonomie éditoriale de Foudre IA (le média IntentIA). Six catégories fixes,
 * inspirées d'Artificial Lawyer, adaptées à une audience française d'avocats,
 * juristes et notaires. Chaque article MDX de `content/articles/` porte un
 * champ frontmatter `category` qui doit correspondre à un des slugs ci-dessous.
 *
 * Source unique : la page de listing (/actualites), les pages de catégorie
 * (/actualites/categorie/[slug]) et l'affichage des étiquettes d'article
 * consomment tous ce fichier. Ajouter une catégorie ici suffit à la faire
 * apparaître partout (rail de catégories, filtres, sitemap).
 */
export type CategorySlug =
  | "marche-laboratoires-ia"
  | "droit-ia"
  | "legal-tech-outils"
  | "cas-usage-cabinet"
  | "mouvements-nominations"
  | "evenements";

export type Category = {
  slug: CategorySlug;
  label: string;
  shortLabel: string;
  description: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "marche-laboratoires-ia",
    label: "Marché & laboratoires IA",
    shortLabel: "Marché IA",
    description:
      "OpenAI, Anthropic, Google, Mistral, Nvidia : les mouvements du marché de l'IA générative qui comptent pour le droit.",
  },
  {
    slug: "droit-ia",
    label: "Droit de l'IA",
    shortLabel: "Droit & IA",
    description:
      "RGPD, AI Act, jurisprudence et doctrine de la CNIL et du CEPD : le cadre juridique de l'intelligence artificielle.",
  },
  {
    slug: "legal-tech-outils",
    label: "Legal tech & outils",
    shortLabel: "Legal tech",
    description:
      "Plateformes de recherche augmentée, copilotes de rédaction et agents juridiques IA : ce que valent les outils du marché.",
  },
  {
    slug: "cas-usage-cabinet",
    label: "Cas d'usage en cabinet",
    shortLabel: "Cas d'usage",
    description:
      "Retours d'expérience et déploiements réels d'IA dans des cabinets d'avocats, directions juridiques et études notariales.",
  },
  {
    slug: "mouvements-nominations",
    label: "Mouvements & nominations",
    shortLabel: "Mouvements",
    description:
      "Recrutements et créations de postes liés à l'IA dans les cabinets d'avocats et les éditeurs de legal tech.",
  },
  {
    slug: "evenements",
    label: "Événements",
    shortLabel: "Événements",
    description: "Conférences, webinaires et rencontres du secteur de l'IA juridique.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryLabel(slug: string): string {
  return getCategory(slug)?.label ?? slug;
}
