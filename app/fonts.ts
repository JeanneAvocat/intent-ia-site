import { Spectral, Inter, IBM_Plex_Mono } from "next/font/google";

/**
 * Polices auto-hébergées. `next/font/google` télécharge les fichiers au build et
 * les sert depuis notre domaine : aucune requête vers Google au runtime, conforme
 * à l'exigence de souveraineté. `display: swap` + préchargement gérés par Next.
 * Chaque police expose une variable CSS, consommée par les tokens dans globals.css.
 *
 * Choix distinct de Jeanne Avocat (Newsreader + IBM Plex Sans) : Spectral pour
 * le serif (plus contemporain, moins "cabinet traditionnel"), Inter pour le
 * texte courant (très lisible, référence produit tech), IBM Plex Mono conservé
 * pour le signal technique (cohérent avec l'ADN IA du site).
 */
export const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-spectral",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const fontVariables = `${spectral.variable} ${inter.variable} ${plexMono.variable}`;
