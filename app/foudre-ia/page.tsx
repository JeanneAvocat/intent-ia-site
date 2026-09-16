import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { Icon } from "@/components/site/Icon";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumb } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.newsletterName} : la newsletter IA et droit`,
  description: site.newsletterTagline,
  alternates: { canonical: "/foudre-ia" },
};

const THEMES = [
  { t: "Actualités", d: "L'écosystème IA et droit, résumé et commenté chaque semaine." },
  { t: "Cas d'usage", d: "Des exemples concrets de déploiement d'IA dans des cabinets et directions juridiques." },
  { t: "Automatisations", d: "Des workflows et automatisations testés, expliqués simplement." },
  { t: "Exclusivités", d: "Les skills et agents IA testés par Hugo, avant tout le monde." },
];

export default function FoudreIaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: site.newsletterName, path: "/foudre-ia" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Newsletter"
        title={`${site.newsletterName} : l'IA et le droit, chaque semaine.`}
        lead={site.newsletterTagline}
      />

      <section className="section">
        <div className="container grid cols-2" style={{ gap: 48, alignItems: "start" }}>
          <div>
            <div className="grid cols-2" style={{ gap: 18 }}>
              {THEMES.map((th, i) => (
                <div key={i} className="ia-card" style={{ padding: 22 }}>
                  <Icon name="zap" size={20} color="var(--fulgur-deep)" />
                  <div className="ia-h3" style={{ fontSize: 17, margin: "14px 0 6px" }}>
                    {th.t}
                  </div>
                  <p className="ia-small" style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>
                    {th.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
