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
    default: "IntentIA · IA opérationnelle et conforme pour cabinets d'avocats",
    template: "%s · IntentIA",
  },
  description:
    "Formation et implantation de configurations IA opérationnelles pour avocats, juristes et notaires, avec conformité RGPD et AI Act intégrée, par un avocat.",
  applicationName: site.name,
  keywords: allKeywords,
  category: "Professional training",
  authors: [{ name: site.founder, url: `${site.url}/a-propos` }],
  creator: site.founder,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: "IntentIA · IA opérationnelle et conforme pour cabinets d'avocats",
    description:
      "Formation et implantation de configurations IA opérationnelles pour avocats, juristes et notaires, conformité RGPD et AI Act intégrée.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntentIA · IA opérationnelle pour cabinets d'avocats",
    description:
      "Déploiement IA opérationnel et conforme pour avocats, juristes et notaires, par un avocat.",
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
