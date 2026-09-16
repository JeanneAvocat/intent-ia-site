import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ContactPanel } from "@/components/site/ContactPanel";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumb } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Décrivez votre cabinet et votre besoin de déploiement IA. Réponse personnelle, aucun prix affiché en ligne.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Décrivez votre cabinet, je vous réponds."
        lead="Pas de tarif en ligne, pas de rendez-vous automatique : on cadre d'abord votre besoin ensemble."
      />
      <ContactPanel />
    </>
  );
}
