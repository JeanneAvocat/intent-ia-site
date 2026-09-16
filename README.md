# Foudre IA — site

Foudre IA, le média d'actualités sur l'intelligence artificielle appliquée au
droit, animé par Hugo Salard (avocat au Barreau de Paris, fondateur de Jeanne
Avocat et d'IntentIA). L'offre de services IntentIA (formation et
implantation d'IA pour avocats, juristes, notaires) reste accessible sur ce
site, en second plan par rapport au média. Next.js, prêt pour Clever Cloud.

Identité graphique et éditoriale entièrement propre à Foudre IA/IntentIA,
radicalement distincte de jeanne-avocat.com (palette, typographie, structure
de composants). Aucun prix n'est affiché sur ce site : le CTA de l'offre de
services est toujours "Contactez-moi".

## Stack

- **Next.js 15 (App Router) · TypeScript strict** — rendu statique (SSG) de
  toutes les pages.
- **Tailwind CSS** + design tokens. La source de vérité des tokens est
  `app/globals.css` (variables CSS `--*`) ; `tailwind.config.ts` les remappe
  pour les utilitaires.
- **Polices auto-hébergées** via `next/font/google` (Fraunces, Public Sans,
  JetBrains Mono) : téléchargées au build, servies depuis notre domaine.
- **MDX** pour les articles, via `next-mdx-remote` + `gray-matter`.
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
  page.tsx                ACCUEIL — fil d'actualités (média en priorité) + bandeau services
  globals.css             Design tokens (--*) + styles des composants + grille éditoriale
  fonts.ts                Polices auto-hébergées (Fraunces, Public Sans, JetBrains Mono)
  robots.ts               robots.txt (ouvert aux crawlers d'IA)
  sitemap.ts              sitemap.xml (actualités prioritaires + pages de services)
  icon.svg                favicon
  not-found.tsx           404 dans la charte
  actualites/             LE MÉDIA : liste, /categorie/[slug], /[slug], /rss.xml
  methode/, a-propos/, foudre-ia/, contact/,
  mentions-legales/, confidentialite/   Pages de services (second plan)
components/
  site/                   Chrome & primitives réutilisables (Header, Footer, Icon,
                          primitives, Button, FAQ, CTAFinal, ContactPanel,
                          NewsletterForm, PageHero, ArticleFeed, CategoryRail,
                          inner [PromiseList], JsonLd)
  home/                   Sections réutilisées sur /methode + bandeau ServicesTeaser (accueil)
lib/
  site.ts                 Identité IntentIA/Foudre IA (source unique : nom, contact, entité)
  categories.ts           Taxonomie éditoriale : 6 rubriques (source unique, réutilisée partout)
  jsonld.ts               Constructeurs de données structurées schema.org (sans prix)
  content.ts              Lecture du contenu MDX (frontmatter via gray-matter) : getPosts
content/
  articles/*.mdx          Articles (frontmatter + corps prose), tous `provisional: true`
  README.md               Guide d'écriture (comment publier un article, taxonomie)
public/
  assets/hugo-salard.png  Portrait (repris de jeanne-website, même personne)
  llms.txt                Résumé pour les LLM (GEO)
```

## Direction artistique

Palette resserrée (papier gris-neutre froid, encre quasi noire, accent doré
"fulgur" dosé au filet), typographie de presse : Fraunces (titres serif à
fort caractère, distinct de Newsreader chez Jeanne Avocat et de Spectral
utilisé dans la V1 d'IntentIA), Public Sans (corps de texte, lisibilité
longue durée), JetBrains Mono (rubriques/dates/légendes). Grille éditoriale
dense avec filets fins entre les lignes du fil d'actualité : pas de cartes
flottantes, pas d'ombres portées, pas de gradient. Inspiration : Artificial
Lawyer, Axios, Stratechery, The Information, Puck — pour la structure et la
densité d'information, jamais copiées à l'identique.

## SEO — implémenté

- Metadata API par route (`title`, description, `metadataBase`, canonical,
  Open Graph, Twitter, robots).
- HTML sémantique, un seul `h1` par page, hiérarchie de titres propre, lien
  d'évitement.
- JSON-LD par page : `@graph` global (`WebSite` + `EducationalOrganization`
  + `Person`, reliés par `@id`), puis `FAQPage` (accueil, articles),
  `AboutPage` (méthode, à propos), `Article` (actualités), `BreadcrumbList`
  (pages intérieures). AUCUN `Offer` chiffré, AUCUN `priceRange`.
- Image Open Graph + Twitter générée au build (`app/opengraph-image.tsx`).
- `sitemap.xml` avec `lastModified`, flux RSS (`/actualites/rss.xml`).
  En-têtes de sécurité (`next.config.mjs`).
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
  mailto de secours tant qu'aucun ESP (`site.newsletterFormUrl`) n'est branché
  (Beehiiv en cours d'arrêt côté Hugo : pas d'ESP à brancher pour l'instant).
- **Mentions légales / Confidentialité** : gabarits avec champs `[À COMPLÉTER]`
  et blocs "À VÉRIFIER PAR HUGO" — le statut retenu par défaut (activité
  connexe à l'exercice d'avocat individuel d'Hugo Salard) doit être confirmé
  auprès de l'Ordre avant publication.
- **Articles** (`content/articles/*.mdx`) : les 7 articles livrés portent
  tous `provisional: true`. Ce sont des exemples de démonstration, un par
  rubrique, à valider (passer à `false`) avant publication réelle. Voir
  `content/README.md`.
- **`lib/site.ts`** : `address`, `email`, `phone`, `foundingDate`,
  `companyLinkedin` sont vides ou provisoires — voir les commentaires `TODO`
  dans le fichier.

## Checklist de mise en ligne

1. `NEXT_PUBLIC_SITE_URL` = URL de production (voir `.env.example`).
2. Confirmer le statut juridique d'IntentIA (activité connexe à l'exercice
   d'avocat individuel d'Hugo Salard) auprès de l'Ordre, puis compléter
   `lib/site.ts` + les pages légales en conséquence.
3. Brancher un vrai canal de contact et, le cas échéant, un ESP pour Foudre
   IA (ou conserver les mailto de secours en connaissance de cause).
4. Valider les articles de démonstration (`provisional: false`) ou les
   remplacer par du contenu réel, rubrique par rubrique.
5. Connecter le dépôt GitHub au déploiement automatique Clever Cloud.
6. Valider le schema au Rich Results Test de Google.

## Notes

- Palette et typographie volontairement distinctes de jeanne-avocat.com ET de
  la première itération d'IntentIA (voir `app/globals.css` et `app/fonts.ts`).
- Règles dures de la charte respectées : aucun emoji, aucun tiret cadratin,
  aucune ombre portée, **aucun prix affiché**.
