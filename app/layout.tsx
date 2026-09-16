import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { globalGraph } from "@/lib/jsonld";
import { site, allKeywords } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.newsletterName} · L'actualité de l'IA appliquée au droit`,
    template: "%s · " + site.newsletterName,
  },
  description:
    "Foudre IA suit l'actualité de l'intelligence artificielle appliquée au droit : marché des laboratoires IA, droit de l'IA, legal tech, cas d'usage en cabinet, mouvements et événements. Un média animé par IntentIA.",
  applicationName: site.name,
  keywords: allKeywords,
  category: "News",
  authors: [{ name: site.founder, url: `${site.url}/a-propos` }],
  creator: site.founder,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.newsletterName,
    title: `${site.newsletterName} · L'actualité de l'IA appliquée au droit`,
    description:
      "Foudre IA suit l'actualité de l'intelligence artificielle appliquée au droit : marché, conformité, legal tech, cas d'usage, mouvements et événements.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.newsletterName} · L'actualité de l'IA appliquée au droit`,
    description:
      "Marché des laboratoires IA, droit de l'IA, legal tech, cas d'usage en cabinet, mouvements et événements.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  ...(site.googleSiteVerification
    ? { verification: { google: site.googleSiteVerification } }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={fontVariables}>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        {/* Données structurées globales : WebSite + Organization + Person (@graph) */}
        <JsonLd data={[globalGraph()]} />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
