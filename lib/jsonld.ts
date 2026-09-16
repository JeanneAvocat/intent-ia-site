import { site, sameAs, hasPostalAddress } from "./site";

/**
 * Constructeurs de données structurées schema.org pour IntentIA.
 * Le JSON-LD est injecté côté serveur dans chaque page : repris par Google
 * (Rich Results) et par les LLM. Les noeuds globaux (WebSite, Organization,
 * Person) forment un @graph relié par @id.
 *
 * Différence structurelle avec jeanne-website : IntentIA est une offre de
 * formation/conseil, pas un service juridique facturé à l'acte. On utilise
 * `EducationalOrganization` + `Course` plutôt que `LegalService`, et on
 * n'émet JAMAIS de prix (aucun `Offer` chiffré, aucun `priceRange`).
 *
 * Règle de sûreté : aucune coordonnée placeholder n'est émise. Adresse, géo,
 * téléphone, email, sameAs ne sont inclus que s'ils sont réellement renseignés.
 */

type Json = Record<string, unknown>;

const ORG_ID = `${site.url}/#intentia`;
const PERSON_ID = `${site.url}/#hugo-salard`;
const SITE_ID = `${site.url}/#website`;

function postalAddress(): Json {
  return {
    "@type": "PostalAddress",
    ...(hasPostalAddress ? { streetAddress: site.address.street, postalCode: site.address.postalCode } : {}),
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  };
}

/** Le site comme entité, éditeur de tout le contenu. */
export function website(): Json {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: site.name,
    url: site.url,
    inLanguage: "fr-FR",
    publisher: { "@id": ORG_ID },
  };
}

/** IntentIA, comme organisme de formation/conseil. Noeud central de l'entité. */
export function organization(): Json {
  return {
    "@type": ["EducationalOrganization", "Organization"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    description: site.entity,
    slogan: "Déployer l'IA dans votre cabinet, en conformité, avec un avocat.",
    url: site.url,
    image: `${site.url}${site.portraitPath}`,
    logo: `${site.url}${site.logoPath}`,
    ...(site.foundingDate ? { foundingDate: site.foundingDate } : {}),
    areaServed: [{ "@type": "Country", name: "France" }],
    address: postalAddress(),
    ...(hasPostalAddress
      ? { geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng } }
      : {}),
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    founder: { "@id": PERSON_ID },
    knowsAbout: [
      "Intelligence artificielle appliquée au droit",
      "Conformité RGPD",
      "Conformité AI Act",
      "Automatisation de cabinet juridique",
      "Formation professionnelle des avocats",
    ],
    // Aucun `makesOffer` chiffré : IntentIA n'affiche aucun prix.
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** Hugo Salard, le fondateur. Signaux E-E-A-T, crédibilité croisée Jeanne Avocat. */
export function person(): Json {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.founder,
    jobTitle: site.founderTitle,
    description: site.founderBio,
    image: `${site.url}${site.portraitPath}`,
    worksFor: { "@id": ORG_ID },
    memberOf: { "@type": "Organization", name: "Barreau de Paris" },
    areaServed: { "@type": "Country", name: "France" },
    url: `${site.url}/a-propos`,
    knowsAbout: [
      "Intelligence artificielle appliquée au droit",
      "RGPD",
      "AI Act",
      "Droit des affaires",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: site.credential,
    },
    ...(site.email ? { email: site.email } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** @graph global injecté dans le layout : WebSite + Organization + Person. */
export function globalGraph(): Json {
  return {
    "@context": "https://schema.org",
    "@graph": [website(), organization(), person()],
  };
}

/** Une offre de formation/méthode nommée, SANS prix (page Méthode). */
export function courseService(name: string, description: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "France" },
  };
}

/** Page À propos : AboutPage rattachée au fondateur. */
export function aboutPage(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `À propos · ${site.name}`,
    url: `${site.url}/a-propos`,
    mainEntity: { "@id": PERSON_ID },
    about: { "@id": ORG_ID },
  };
}

/** Article de blog : Article avec auteur et date de publication. */
export function article(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  section?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: `${site.url}${input.path}`,
    image: `${site.url}${site.portraitPath}`,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    inLanguage: "fr-FR",
    ...(input.section ? { articleSection: input.section } : {}),
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${site.url}${input.path}`,
  };
}

/** Bloc FAQ. Très repris par les moteurs et les IA. */
export function faqPage(items: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/** Fil d'ariane. */
export function breadcrumb(trail: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`,
    })),
  };
}

/** Sérialise un ou plusieurs noeuds en chaîne sûre pour un <script>. */
export function jsonLdString(...nodes: Json[]): string {
  const payload = nodes.length === 1 ? nodes[0] : nodes;
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}
