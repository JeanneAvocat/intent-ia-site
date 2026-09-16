# Déploiement — GitHub + Clever Cloud

Le site est prêt à déployer. Build et typecheck au vert, tout en statique
(SSG) sauf le serveur Node qui sert les pages. Voici les étapes qui restent :
elles demandent ta connexion (GitHub + Clever Cloud), donc à toi de les
faire — c'est rapide.

Le dépôt Git est **déjà initialisé, commité et poussé** sur
`github.com/JeanneAvocat/intent-ia-site`. Il ne reste qu'à connecter Clever
Cloud.

---

## 1. Déployer sur Clever Cloud (~5 min)

1. Crée un compte sur https://www.clever-cloud.com (région **Paris**), si ce
   n'est pas déjà fait pour jeanne-avocat.com.
2. **Create an application** → **From a GitHub repository** → autorise
   GitHub → choisis `intent-ia-site`.
3. Type d'application : **Node.js**.
4. Taille de l'instance : **nano** (512 Mo) suffit pour démarrer, **XS**
   (1 Go) si le trafic augmente. Facturation à la seconde.
5. **Environment variables** : ajoute exactement celles-ci :

| Variable | Valeur | Pourquoi |
|---|---|---|
| `CC_NODE_DEV_DEPENDENCIES` | `install` | installe Tailwind/TypeScript (nécessaires au build) |
| `CC_POST_BUILD_HOOK` | `npm run build` | construit le site au déploiement |
| `CC_NODE_VERSION` | `22` | version de Node |
| `NEXT_PUBLIC_SITE_URL` | `https://intent-ia.com` | URL de prod (ou l'URL Clever temporaire tant que le domaine n'est pas branché) |

> `NODE_ENV=production` et `PORT=8080` sont posés automatiquement par Clever
> Cloud, ne pas les ajouter. `next start` écoute le port `PORT` tout seul.

> Optionnel, une fois branchés : `NEXT_PUBLIC_CONTACT_FORM_URL`,
> `NEXT_PUBLIC_NEWSLETTER_FORM_URL` (voir `.env.example`).

6. **Deploy**. Clever installe, build (`npm run build`), puis lance
   `npm start`. Chaque `git push` sur `main` redéploie automatiquement.

### Brancher le domaine `intent-ia.com`

Dans l'application Clever → **Domain names** → ajoute `intent-ia.com` et
`www.intent-ia.com`, puis configure le DNS chez le registrar du domaine
(actuellement une landing page Lovable à remplacer entièrement — pointer le
DNS vers Clever Cloud coupera l'ancienne landing page). Mets ensuite
`NEXT_PUBLIC_SITE_URL` sur l'URL finale.

---

## Tarifs Clever Cloud (rappel)

Facturation à la seconde, pas de forfait :
- **nano** (512 Mo) : ~6 €/mois.
- **XS** (1 Go) : ~16 €/mois.
Crédits d'essai gratuits, sans carte, pour tester.

---

## Alternative sans GitHub (dépôt Git de Clever)

Clever Cloud fournit aussi son propre dépôt Git : après avoir créé l'app
(« From a local repository »), il donne une commande `git remote add
clever ...` puis `git push clever main`. Pas besoin de GitHub, mais on perd
le déploiement auto au push GitHub. La voie GitHub ci-dessus est préférable.

---

## Avant la vraie mise en ligne (rappels)

- Trancher la structure juridique qui porte IntentIA et compléter
  `lib/site.ts` (adresse, email, téléphone, `legalName`, `foundingDate`)
  ainsi que les pages `/mentions-legales` et `/confidentialite` (marquées
  "À VÉRIFIER PAR HUGO").
- Brancher un vrai canal de contact (email dédié ou formulaire) et un ESP
  pour la newsletter Foudre IA, à la place des mailto de secours.
- Valider les 3 articles de blog `provisional: true` (passer à `false`)
  ou les remplacer par du contenu réel.
- Remplacer le DNS du domaine `intent-ia.com` (actuellement une landing page
  Lovable) pour pointer vers Clever Cloud.
- Vérifier le rendu du schema (Rich Results Test de Google) et l'absence de
  tout prix affiché sur les pages publiées.
