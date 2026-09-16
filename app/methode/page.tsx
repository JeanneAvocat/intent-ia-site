import type { Metadata } from "next";
import Image from "next/image";
import {
  Audiences,
  ConstatPromesse,
  Steps,
  Benefits,
  Commitments,
} from "@/components/home/sections";
import { PromiseList } from "@/components/site/inner";
import { CTAFinal } from "@/components/site/CTAFinal";
import { SectionHead, Button } from "@/components/site/primitives";
import { Icon, type IconName } from "@/components/site/Icon";
import { JsonLd } from "@/components/site/JsonLd";
import { aboutPage, breadcrumb } from "@/lib/jsonld";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Méthode : déployer l'IA dans un cabinet, en conformité",
  description:
    "La méthode IntentIA : cadrage, déploiement opérationnel et formation, conformité RGPD et AI Act intégrée dès la conception. Aucun prix affiché, contactez-moi pour en discuter.",
  alternates: { canonical: "/methode" },
};

const GARANTIES: { icon: IconName; t: string; d: string }[] = [
  {
    icon: "lock",
    t: "Secret professionnel respecté.",
    d: "La méthode est pensée pour des professions soumises au secret professionnel : aucun outil qui l'expose.",
  },
  {
    icon: "mapPin",
    t: "Vous gardez la main sur vos données.",
    d: "Choix d'architectures et de fournisseurs qui n'entraînent pas de modèles sur vos documents, avec les garanties documentées.",
  },
  {
    icon: "shield",
    t: "Conformité RGPD et AI Act.",
    d: "La conformité est un prérequis du déploiement, pas une étape ajoutée ensuite dans l'urgence.",
  },
  {
    icon: "cpu",
    t: "Formation pratique, pas théorique.",
    d: "Vos équipes utilisent les outils pendant l'accompagnement, sur vos cas réels, pas sur des exemples génériques.",
  },
];

export default function MethodePage() {
  return (
    <>
      <JsonLd
        data={[
          aboutPage(),
          breadcrumb([
            { name: "Accueil", path: "/" },
            { name: "Méthode", path: "/methode" },
          ]),
        ]}
      />
      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div
          className="container grid split"
          style={{
            ["--cols" as string]: "1.2fr 0.9fr",
            gap: 56,
            alignItems: "center",
            paddingTop: 56,
            paddingBottom: 56,
          }}
        >
          <div>
            <div className="ia-kicker" style={{ marginBottom: 16, display: "block" }}>
              IntentIA · formation et implantation
            </div>
            <h1 className="ia-h1" style={{ margin: "0 0 22px", maxWidth: 640 }}>
              Comment on déploie l&apos;IA dans votre cabinet.
            </h1>
            <p className="ia-lead" style={{ margin: "0 0 30px", maxWidth: 520 }}>
              Une méthode qui associe déploiement opérationnel, conformité
              intégrée et légitimité d&apos;avocat. Aucun prix n&apos;est affiché
              ici : chaque périmètre se cadre avec vous.
            </p>
            <Button href="/contact" iconRight="arrowRight">
              {cta.primary}
            </Button>
          </div>
          <div>
            <Image
              src="/assets/hugo-salard.png"
              alt="Hugo Salard, avocat au Barreau de Paris, fondateur d'IntentIA"
              width={750}
              height={750}
              priority
              sizes="(max-width: 1000px) 70vw, 380px"
              style={{ display: "block", width: "100%", maxWidth: 380, height: "auto", margin: "0 auto" }}
            />
          </div>
        </div>
      </section>

      <Audiences />
      <ConstatPromesse />
      <Steps num="05" />
      <Benefits />

      <section className="section">
        <div className="container">
          <SectionHead
            num="06"
            eyebrow="Ce sur quoi je m'engage"
            title="Ce sur quoi je m'engage, noir sur blanc."
          />
          <PromiseList
            items={[
              {
                icon: "message",
                t: "On cadre avant de déployer.",
                d: "Pas d'outil générique plaqué sur votre cabinet : on part de votre pratique réelle.",
              },
              {
                icon: "check",
                t: "Un avocat pilote la conformité.",
                d: "Chaque choix technique est passé au filtre du secret professionnel, du RGPD et de l'AI Act.",
              },
              {
                icon: "graduationCap",
                t: "Vos équipes deviennent autonomes.",
                d: "L'objectif n'est pas votre dépendance : c'est que vous sachiez faire évoluer votre configuration seul.",
              },
              {
                icon: "globe",
                t: "Si ce n'est pas mon terrain, je vous le dis.",
                d: "Je vous oriente plutôt que de vous vendre un déploiement que je ne peux pas garantir.",
              },
            ]}
          />
        </div>
      </section>

      <Commitments />

      <section className="section section--dark">
        <div className="container">
          <SectionHead
            num="07"
            eyebrow="Vos garanties"
            title="La rigueur d'un avocat, appliquée à l'IA."
            dark
          />
          <div className="grid cols-2" style={{ gap: 18, marginTop: 40 }}>
            {GARANTIES.map((g, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 24px",
                  border: "1px solid var(--line-dark)",
                  borderRadius: 12,
                  display: "flex",
                  gap: 14,
                }}
              >
                <Icon name={g.icon} size={22} color="var(--fulgur-soft)" style={{ marginTop: 2 }} />
                <div>
                  <div className="ia-h3" style={{ fontSize: 17, color: "var(--paper)", marginBottom: 6 }}>
                    {g.t}
                  </div>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--gres-soft)" }}>
                    {g.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
