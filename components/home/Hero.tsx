import Image from "next/image";
import { Eyebrow, Button, MonoTag } from "@/components/site/primitives";
import { cta } from "@/lib/site";

export function Hero() {
  return (
    <section style={{ borderBottom: "1px solid var(--line)" }}>
      <div
        className="container grid split hero-pad"
        style={{
          ["--cols" as string]: "1.25fr 0.9fr",
          gap: 56,
          alignItems: "center",
          paddingTop: 72,
          paddingBottom: 72,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <Eyebrow num="01">Formation · Implantation · Conformité</Eyebrow>
          <h1
            className="ia-display"
            style={{
              margin: "22px 0 0",
              maxWidth: 660,
              fontSize: "clamp(2.2rem, 1.3rem + 2.4vw, 3.25rem)",
              lineHeight: 1.16,
            }}
          >
            Déployez l&apos;IA dans votre cabinet,{" "}
            <span className="ia-accent">avec un avocat</span> qui en porte la
            conformité.
          </h1>
          <p className="ia-lead" style={{ margin: "34px 0 30px", maxWidth: 520 }}>
            Formation et implantation de configurations IA opérationnelles pour
            avocats, juristes et notaires. Une méthode qui associe déploiement
            concret, conformité RGPD et AI Act intégrée, et légitimité d&apos;avocat.
          </p>
          <div style={{ display: "flex", gap: 14, marginBottom: 28, flexWrap: "wrap" }}>
            <Button href="/contact" iconRight="arrowRight">
              {cta.primary}
            </Button>
            <Button variant="s" href="/methode" iconRight="chevronRight">
              Voir la méthode
            </Button>
          </div>
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
            <MonoTag>IA opérationnelle</MonoTag>
            <MonoTag>conformité RGPD et AI Act intégrée</MonoTag>
            <MonoTag>par un avocat</MonoTag>
          </div>
        </div>

        <div style={{ minWidth: 0 }}>
          <Image
            src="/assets/hugo-salard.png"
            alt="Hugo Salard, avocat au Barreau de Paris, fondateur d'IntentIA"
            width={750}
            height={750}
            priority
            sizes="(max-width: 1000px) 80vw, 440px"
            style={{ display: "block", width: "100%", maxWidth: 440, height: "auto", margin: "0 auto" }}
          />
          <div style={{ marginTop: 14, borderTop: "1px solid var(--line)", paddingTop: 14 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 17,
                  lineHeight: 1.3,
                  whiteSpace: "nowrap",
                }}
              >
                Hugo Salard
              </span>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--gres)" }}>
                fondateur d&apos;intentia
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11.5,
                color: "var(--gres)",
                marginTop: 7,
              }}
            >
              avocat barreau de paris · fondateur jeanne avocat
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
