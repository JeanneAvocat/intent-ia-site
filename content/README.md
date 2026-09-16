# Contenu (MDX) — comment publier

Une page = un fichier. On ajoute un fichier `.mdx` dans `content/blog/`, on
pousse sur GitHub, Clever Cloud redéploie. Pas de code à toucher.

Un article = un fichier `mon-article.mdx`. L'URL sera `/blog/mon-article`.

Le bloc entre `---` en haut du fichier est le **frontmatter** (les
métadonnées). En dessous, on écrit le texte normalement.

## Ajouter un article de blog

Créez `content/blog/slug-de-l-article.mdx` :

```mdx
---
title: "Titre court (carte de liste)"
headline: "Titre complet affiché en haut de l'article"
category: "cas d'usage"          # cas d'usage · conformité · pédagogie
summary: "Résumé d'une ligne (carte + meta description)."
lead: "Chapô : 1 à 2 phrases d'accroche sous le titre."
date: "16 septembre 2026"        # affiché
datePublished: "2026-09-16"      # format AAAA-MM-JJ (pour Google)
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
article : le CTA reste toujours "Contactez-moi".

AUCUNE statistique, témoignage client ou citation attribuée à une vraie
personne/entreprise ne doit être inventée. Tout article livré avec
`provisional: true` est un exemple de démonstration à valider par Hugo
(passer à `false`) avant publication réelle : vérifier chaque affirmation
factuelle avant ce passage.

Ajouté automatiquement à chaque article : la signature « Par Hugo Salard,
avocat au Barreau de Paris, fondateur d'IntentIA », les articles liés en bas
de page (même catégorie), le sitemap, le schema et la page de liste.
