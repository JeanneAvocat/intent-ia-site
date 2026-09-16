/**
 * Source unique de l'identité IntentIA.
 * Toute donnée de marque (nom, contact, déclaration d'entité) vit ici et
 * n'est écrite qu'une fois : le texte des pages, les metadata SEO, le JSON-LD
 * et le `llms.txt` consomment ces constantes.
 *
 * >>> À COMPLÉTER / VÉRIFIER AVANT MISE EN LIGNE (cherchez "TODO") <<<
 * Les valeurs vides sont des placeholders. Le JSON-LD n'émet PAS d'adresse, de
 * téléphone ni de profil tant qu'ils sont vides : on n'envoie jamais de fausse
 * coordonnée. Renseignez-les et tout se câble automatiquement.
 *
 * RÈGLE DURE : ce site n'affiche AUCUN PRIX (contrairement à jeanne-avocat.com).
 * Ne jamais ajouter de champ `priceRange` ou d'`Offer` chiffré ici : le CTA est
 * toujours "Contactez-moi" ou équivalent, jamais une prise de rendez-vous
 * directe sur un tarif.
 */
export const site = {
  name: "IntentIA",
  // Raison sociale exacte de la structure qui porte IntentIA.
  // Statut retenu par défaut (brief fondateur) : IntentIA est une activité
  // connexe à l'exercice d'avocat individuel d'Hugo Salard, PAS une société
  // distincte. TODO (Hugo) : confirmer ce statut auprès de l'Ordre avant mise
  // en ligne (activités accessoires d'un avocat, RIN) et ajuster si besoin.
  legalName: "IntentIA, activité connexe à l'exercice d'avocat individuel d'Hugo Salard",
  // URL de production (sans slash final). Surchargée par NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://intent-ia.com",
  locale: "fr-FR",

  founder: "Hugo Salard",
  founderTitle: "Avocat au Barreau de Paris, fondateur d'IntentIA",
  founderBio:
    "Hugo Salard est avocat au Barreau de Paris, spécialiste RGPD et AI Act, et fondateur de Jeanne Avocat, le premier cabinet d'affaires IA-natif de France. Avec IntentIA, il forme et implante des configurations d'IA opérationnelles dans les cabinets d'avocats, directions juridiques et études notariales.",
  credential: "CIPP/E", // IAPP Certified Information Privacy Professional/Europe

  // TODO (Hugo) : ville et adresse d'exercice de l'activité IntentIA (peut
  // reprendre celle de Jeanne Avocat si l'activité y est logée, à confirmer).
  city: "Paris",
  region: "Île-de-France",
  country: "FR",

  // Adresse professionnelle. Vide tant que non confirmée : voir hasPostalAddress.
  address: {
    street: "",
    postalCode: "",
  },
  geo: { lat: 0, lng: 0 },

  // Contact. TODO (Hugo) : email et téléphone dédiés IntentIA (ou partagés
  // avec Jeanne Avocat, à trancher pour la cohérence NAP).
  email: "",
  phone: "",

  // Date de lancement de l'offre IntentIA.
  // TODO (Hugo) : date réelle de lancement commercial.
  foundingDate: "",

  // Profils officiels (E-E-A-T + désambiguïsation d'entité).
  // TODO (Hugo) : créer/renseigner une page ou un profil LinkedIn dédié à
  // IntentIA si souhaité (distinct de celui de Jeanne Avocat).
  founderLinkedin: "https://www.linkedin.com/in/hugosalard/",
  companyLinkedin: "",

  // Visuels pour le schema / Open Graph.
  logoPath: "/icon.svg",
  // Portrait repris de jeanne-avocat.com (même personne, Hugo Salard).
  // TODO (Hugo) : remplacer par un portrait dédié IntentIA si souhaité.
  portraitPath: "/assets/hugo-salard.png",

  // Déclaration d'entité factuelle, reprise telle quelle dans le schema et
  // llms.txt.
  entity:
    "IntentIA est l'offre de formation et d'implantation de configurations d'intelligence artificielle opérationnelles pour les avocats, juristes, notaires et professions réglementées voisines, fondée par Hugo Salard, avocat au Barreau de Paris et fondateur de Jeanne Avocat, premier cabinet d'affaires IA-natif de France. IntentIA anime Foudre IA, un média d'actualités sur l'intelligence artificielle appliquée au droit, et accompagne les cabinets et directions juridiques dans le déploiement d'IA conforme au RGPD et à l'AI Act, avec une légitimité d'avocat sur les enjeux de conformité.",

  // AUCUN PRIX affiché sur ce site. Ne pas ajouter de priceRange ici.

  // Marque associée : le cabinet du même fondateur, cité pour la crédibilité
  // croisée, mais IntentIA reste une marque et une audience séparées.
  jeanneAvocatUrl: "https://jeanne-avocat.com",
  jeanneAvocatName: "Jeanne Avocat",

  // Média/newsletter hebdomadaire associé à IntentIA.
  newsletterName: "Foudre IA",
  newsletterTagline:
    "Actus de l'écosystème IA et droit, cas d'usage, automatisations, et en exclusivité les skills et agents testés par Hugo.",

  // Code de vérification Google Search Console (méthode « balise HTML »).
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",

  // Formulaire de contact. PLACEHOLDER : aucun formulaire tiers (Notion, Tally,
  // etc.) n'est branché à ce stade. La page /contact utilise un mailto de
  // secours tant que cette URL est vide (voir components/site/ContactPanel.tsx).
  // TODO (Hugo) : brancher un vrai formulaire (Notion publié, Tally, Typeform...)
  // et renseigner l'URL ici ou via NEXT_PUBLIC_CONTACT_FORM_URL.
  contactFormUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_URL ?? "",

  // Formulaire d'inscription à la newsletter "Foudre IA". PLACEHOLDER : aucun
  // ESP (Brevo, Mailchimp, Kit...) n'est branché à ce stade. Tant que cette
  // URL est vide, /foudre-ia affiche un mailto de secours.
  // TODO (Hugo) : brancher un vrai ESP et renseigner l'URL ici ou via
  // NEXT_PUBLIC_NEWSLETTER_FORM_URL.
  newsletterFormUrl: process.env.NEXT_PUBLIC_NEWSLETTER_FORM_URL ?? "",
} as const;

/** Vrai seulement si une adresse rue a été renseignée : gate le SEO local. */
export const hasPostalAddress = site.address.street.length > 0;

/** Profils renseignés, pour `sameAs` (jamais de placeholder émis). */
export const sameAs: string[] = [site.founderLinkedin, site.companyLinkedin].filter(
  (u) => u.length > 0,
);

/**
 * CTA fixes, identiques partout (verrouillés par la charte IntentIA).
 * RÈGLE DURE : jamais de CTA de type "Prendre rendez-vous" pointant vers un
 * tarif. Toujours "Contactez-moi" ou équivalent.
 */
export const cta = {
  primary: "Contactez-moi",
  secondary: "Décrire votre besoin",
} as const;

/**
 * Grappes de mots-clés cibles. Sert aux metadata `keywords` et oriente la
 * copie. Cible : structures de 5+ avocats / CA > 600 k EUR, en restant
 * accueillant pour les structures plus petites qui se projettent.
 */
export const keywordClusters = {
  niche: [
    "IA pour avocats",
    "IA pour cabinets d'avocats",
    "formation IA juristes",
    "implantation IA cabinet d'avocats",
    "IA notaires",
  ],
  services: [
    "formation intelligence artificielle avocats",
    "déploiement IA conforme RGPD",
    "agents IA juridiques",
    "automatisation cabinet juridique",
    "conformité AI Act cabinet d'avocats",
  ],
  personas: [
    "avocat associé",
    "directeur juridique",
    "notaire",
    "cabinet d'avocats 5 associés",
  ],
} as const;

export const allKeywords: string[] = [
  ...keywordClusters.niche,
  ...keywordClusters.services,
  ...keywordClusters.personas,
];
