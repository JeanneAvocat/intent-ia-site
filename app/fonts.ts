import { Fraunces, Public_Sans, JetBrains_Mono } from "next/font/google";

/**
 * Polices auto-hébergées. `next/font/google` télécharge les fichiers au build
 * et les sert depuis notre domaine : aucune requête vers Google au runtime,
 * conforme à l'exigence de souveraineté. `display: swap` géré par Next.
 *
 * Choix radicalement distinct de jeanne-avocat.com (Newsreader + IBM Plex
 * Sans) ET de la première itération d'IntentIA (Spectral + Inter + IBM Plex
 * Mono), pour donner à Foudre IA une identité de presse forte et reconnaissable :
 *
 * - Fraunces (titres) : un serif éditorial à fort caractère, optical sizing
 *   variable, taillé pour de grands titres de presse. Beaucoup plus marqué
 *   qu'un serif "corporate" générique, sans tomber dans le décoratif.
 * - Public Sans (corps de texte) : dessiné pour la lecture dense de contenu
 *   éditorial (c'est la police du design system du gouvernement américain,
 *   pensée pour l'accessibilité et la lisibilité longue durée), délibérément
 *   différente d'Inter qui est devenu le choix par défaut de tous les
 *   templates produit/SaaS générés par IA.
 * - JetBrains Mono (métadonnées : rubriques, dates, labels) : signal
 *   "rédaction/atelier", distinct de la famille IBM Plex déjà utilisée par
 *   Jeanne Avocat.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
  variable: "--font-fraunces",
});

export const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-public-sans",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const fontVariables = `${fraunces.variable} ${publicSans.variable} ${jetbrainsMono.variable}`;
