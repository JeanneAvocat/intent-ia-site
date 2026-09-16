# IntentIA — site

Site vitrine d'IntentIA, l'offre de formation et d'implantation de
configurations IA opérationnelles pour avocats, juristes, notaires et
professions réglementées voisines, par Hugo Salard (avocat au Barreau de
Paris, fondateur de Jeanne Avocat). Next.js, prêt pour Clever Cloud.

Construit sur le même socle technique que jeanne-avocat.com, avec une
identité visuelle et un contenu entièrement propres à IntentIA. Aucun prix
n'est affiché sur ce site (contrairement à jeanne-avocat.com) : le CTA est
toujours "Contactez-moi".

## Stack

- **Next.js 15 (App Router) · TypeScript strict** — rendu statique (SSG) de
  toutes les pages vitrines.
- **Tailwind CSS** + design tokens. La source de vérité des tokens est
  `app/globals.css` (variables CSS `--*`) ; `tailwind.config.ts` les remappe
  pour les utilitaires.
- **Polices auto-hébergées** via `next/font/google` (Spectral, Inter, IBM
  Plex Mono) : téléchargées au build, servies depuis notre domaine.
- **MDX** pour le blog, via `next-mdx-remote` + `gray-matter`.
- **Aucune dépendance lourde.** JS client minimal (menu mobile, accordéon FAQ).

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production (SSG)
npm run typecheck  # tsc --noEmit
npm run lint
```

## Structure

```
app/
  layout.tsx              Chrome global (Header, Footer), metadata de base, JSON-LD global
  page.tsx                ACCUEIL — assemble les sections + JSON-LD FAQPage
  globals.css             Design tokens (--*) + styles des composants
  fonts.ts                Polices auto-hébergées
  robots.ts               robots.txt (ouvert aux crawlers d'IA)
  sitemap.ts              sitemap.xml (pages statiques + détails blog)
  icon.svg                favicon
  not-found.tsx           404 dans la charte
  methode/, a-propos/, foudre-ia/, contact/,
  blog/, blog/[slug]/, blog/rss.xml/,
  mentions-legales/, confidentialite/   Toutes les pages
components/
  site/                   Chrome & primitives réutilisables (Header, Footer, Icon,
                          primitives, Button, FAQ, CTAFinal, ContactPanel,
                          NewsletterForm, PageHero, ResourceCards, inner [PromiseList], JsonLd)
  home/                   Sections de l'accueil (Hero + sections.tsx)
lib/
  site.ts                 Identité IntentIA (source unique : nom, contact, déclaration d'entité)
  jsonld.ts               Constructeurs de données structurées schema.org (sans prix)
  content.ts              Lecture du contenu MDX (frontmatter via gray-matter) : getPosts
content/
  blog/*.mdx              Articles (frontmatter + corps prose), tous `provisional: true`
  README.md               Guide d'écriture (comment publier un article)
public/
  assets/hugo-salard.png  Portrait (repris de jeanne-website, même personne)
  llms.txt                Résumé pour les LLM (GEO)
```

## SEO — implémenté

- Metadata API par route (`title`, description, `metadataBase`, canonical,
  Open Graph, Twitter, robots).
- HTML sémantique, un seul `h1` par page, hiérarchie de titres propre, lien
  d'évitement.
- JSON-LD par page : `@graph` global (`WebSite` + `EducationalOrganization`
  + `Person`, reliés par `@id`), puis `FAQPage` (accueil, articles),
  `AboutPage` (méthode, à propos), `Article` (blog), `BreadcrumbList` (pages
  intérieures). AUCUN `Offer` chiffré, AUCUN `priceRange`.
- Image Open Graph + Twitter générée au build (`app/opengraph-image.tsx`).
- `sitemap.xml` avec `lastModified`. En-têtes de sécurité (`next.config.mjs`).
- Accessibilité WCAG 2.2 : focus visibles, navigation clavier, `prefers-reduced-motion`.

## GEO — implémenté

- `/llms.txt` à la racine : résumé, déclaration d'entité, pages clés.
- `robots.txt` **autorise explicitement** GPTBot, ClaudeBot, OAI-SearchBot,
  PerplexityBot, Google-Extended, CCBot, Applebot-Extended.
- Tout le contenu clé est rendu **côté serveur**.
- Déclaration d'entité unique et cohérente via `lib/site.ts`.

## Placeholders à remplacer avant mise en ligne réelle

Voir aussi les commentaires `TODO` dans `lib/site.ts` et `DEPLOY.md`.

- **Contact** (`components/site/ContactPanel.tsx`) : utilise un lien `mailto:`
  de secours tant qu'aucun email dédié (`site.email`) ni formulaire tiers
  (`site.contactFormUrl`) n'est renseigné.
- **Newsletter Foudre IA** (`components/site/NewsletterForm.tsx`) : idem,
  mailto de secours tant qu'aucun ESP (`site.newsletterFormUrl`) n'est branché.
- **Mentions légales / Confidentialité** : gabarits avec champs `[À COMPLÉTER]`
  et blocs "À VÉRIFIER PAR HUGO" — la structure juridique exacte qui porte
  IntentIA (société distincte, ou activité connexe de l'exercice d'avocat)
  doit être tranchée avant publication.
- **Articles de blog** (`content/blog/*.mdx`) : les 3 articles livrés portent
  tous `provisional: true`. Ce sont des exemples de démonstration, à valider
  (passer à `false`) avant publication réelle. Voir `content/README.md`.
- **`lib/site.ts`** : `address`, `email`, `phone`, `foundingDate`,
  `companyLinkedin`, `legalName` sont vides ou provisoires — voir les
  commentaires `TODO` dans le fichier.

## Checklist de mise en ligne

1. `NEXT_PUBLIC_SITE_URL` = URL de production (voir `.env.example`).
2. Trancher la structure juridique porteuse d'IntentIA et compléter
   `lib/site.ts` + les pages légales en conséquence.
3. Brancher un vrai canal de contact et un ESP pour Foudre IA (ou conserver
   les mailto de secours en connaissance de cause).
4. Valider les 3 articles de blog (`provisional: false`) ou les remplacer par
   du contenu réel.
5. Connecter le dépôt GitHub au déploiement automatique Clever Cloud.
6. Valider le schema au Rich Results Test de Google.

## Notes

- Palette et typographie volontairement distinctes de jeanne-avocat.com
  (voir `app/globals.css` : ardoise + fulgur doré, Spectral + Inter) tout en
  suivant la même méthode de design tokens.
- Règles dures de la charte respectées : aucun emoji, aucun tiret cadratin,
  aucune ombre portée, **aucun prix affiché**.
