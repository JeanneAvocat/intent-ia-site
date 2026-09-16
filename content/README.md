# Contenu (MDX) — comment publier un article Foudre IA

Une page = un fichier. On ajoute un fichier `.mdx` dans `content/articles/`,
on pousse sur GitHub, Clever Cloud redéploie. Pas de code à toucher.

Un article = un fichier `mon-article.mdx`. L'URL sera `/actualites/mon-article`.

Le bloc entre `---` en haut du fichier est le **frontmatter** (les
métadonnées). En dessous, on écrit le texte normalement.

## Les six rubriques (champ `category`, valeur exacte obligatoire)

| Slug (à utiliser dans `category`) | Rubrique affichée |
|---|---|
| `marche-laboratoires-ia` | Marché & laboratoires IA (OpenAI, Anthropic, Google, Mistral, Nvidia...) |
| `droit-ia` | Droit de l'IA (RGPD, AI Act, jurisprudence, doctrine CNIL/CEPD) |
| `legal-tech-outils` | Legal tech & outils (agents juridiques IA, plateformes de recherche...) |
| `cas-usage-cabinet` | Cas d'usage en cabinet (retours d'expérience, déploiements réels) |
| `mouvements-nominations` | Mouvements & nominations (recrutements IA dans cabinets/legal tech) |
| `evenements` | Événements (conférences, webinaires, rencontres du secteur) |

La liste canonique vit dans `lib/categories.ts` : toute nouvelle rubrique se
crée là, une fois, et apparaît automatiquement dans le menu de rubriques, les
filtres et le sitemap. Une valeur de `category` absente de cette liste
retombe silencieusement sur la première rubrique au build : vérifier
l'orthographe exacte du slug avant de committer.

## Ajouter un article

Créez `content/articles/slug-de-l-article.mdx` :

```mdx
---
title: "Titre court (utilisé dans le fil et les métadonnées)"
headline: "Titre complet affiché en haut de l'article"
category: "droit-ia"                # un des 6 slugs ci-dessus, exact
summary: "Résumé d'une ligne (fil d'actualité + meta description)."
lead: "Chapô : 1 à 2 phrases d'accroche sous le titre."
date: "16 septembre 2026"        # affiché
datePublished: "2026-09-16"      # format AAAA-MM-JJ (tri chronologique + Google)
readingTime: "5 min"
provisional: true                # true tant que le texte n'est pas validé par Hugo
# FACULTATIF : un bloc FAQ s'affiche en bas de l'article ET génère un schema
# FAQPage. Réponses courtes et autoportantes.
faq:
  - q: "Une première question fréquente ?"
    a: "Une réponse courte, factuelle, qui se comprend seule."
---

Le premier paragraphe.

## Un sous-titre

Un autre paragraphe. On peut mettre en **gras**, des listes :

- premier point
- deuxième point

> Une citation, qui s'affiche avec le filet fulgur.
```

## Règles d'écriture (charte)

Aucun emoji, aucun tiret cadratin (utiliser `:`, `-` ou `·`). Première
personne (« je »), ton clair et posé. AUCUN prix ne doit apparaître dans un
article : le CTA reste toujours "Contactez-moi" pour l'offre IntentIA.

AUCUNE statistique, témoignage ou citation attribuée à une vraie
personne/entreprise ne doit être inventée. Tout article livré avec
`provisional: true` est un exemple de démonstration à valider par Hugo
(passer à `false`) avant publication réelle : vérifier chaque affirmation
factuelle avant ce passage, et sourcer toute actualité réelle (nom d'éditeur,
de laboratoire, de personne) avant publication.

Ajouté automatiquement à chaque article : la signature « Par Hugo Salard,
avocat au Barreau de Paris, fondateur d'IntentIA », les articles liés en bas
de page (même rubrique en priorité), le sitemap, le flux RSS
(`/actualites/rss.xml`), le schema Article/FAQPage et la page de rubrique.
