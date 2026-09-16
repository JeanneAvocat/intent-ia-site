import type { CSSProperties } from "react";
import { Icon, type IconName } from "./Icon";
import { site } from "@/lib/site";

function IconBox({ name }: { name: IconName }) {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 8,
        background: "var(--fulgur-wash)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
      }}
    >
      <Icon name={name} size={22} color="var(--fulgur-deep)" />
    </div>
  );
}

const CARD: CSSProperties = {
  padding: 28,
  display: "flex",
  flexDirection: "column",
  gap: 14,
  minHeight: 220,
  textAlign: "left",
  textDecoration: "none",
  color: "inherit",
  background: "var(--surface)",
};

function Arrow({ children }: { children: string }) {
  return (
    <span
      style={{
        marginTop: "auto",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        color: "var(--fulgur-deep)",
        fontWeight: 500,
      }}
    >
      {children}
      <Icon name="arrowRight" size={16} />
    </span>
  );
}

/**
 * Panneau de contact IntentIA : un seul canal pour l'instant.
 *
 * PLACEHOLDER : aucun formulaire tiers (Notion publié, Tally, Typeform...)
 * n'est branché. Tant que `site.contactFormUrl` est vide, le panneau ouvre un
 * lien `mailto:` de secours qui préremplit un objet clair. Si `site.email`
 * est également vide (cas actuel, TODO Hugo), le mailto pointe vers une
 * adresse placeholder visible pour que ça n'échoue jamais silencieusement.
 *
 * TODO (Hugo) : renseigner `site.email` et/ou `site.contactFormUrl` dans
 * `lib/site.ts`, puis remplacer ce panneau par un vrai formulaire si souhaité.
 */
export function ContactPanel() {
  const mailTo = site.email || "contact@intent-ia.com";
  const mailtoHref = `mailto:${mailTo}?subject=${encodeURIComponent(
    "Contact IntentIA : configuration IA pour mon cabinet",
  )}`;

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 640 }}>
        {(!site.email || !site.contactFormUrl) && (
          <div
            className="ia-card"
            style={{
              padding: "14px 18px",
              marginBottom: 24,
              borderColor: "var(--fulgur)",
              fontSize: 13.5,
              color: "var(--gres)",
            }}
          >
            Note technique (à retirer une fois les coordonnées confirmées) :
            ce bouton utilise un lien mailto de secours tant qu&apos;aucun
            email dédié ni formulaire n&apos;est renseigné dans{" "}
            <code style={{ fontFamily: "var(--mono)" }}>lib/site.ts</code>.
          </div>
        )}
        <a href={mailtoHref} className="ia-card" style={CARD}>
          <IconBox name="mail" />
          <div className="ia-h3" style={{ fontSize: 20 }}>
            Contactez-moi
          </div>
          <p className="ia-small" style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
            Décrivez votre cabinet, votre structure et ce qui vous amène. Je
            réponds personnellement.
          </p>
          <Arrow>Écrire un email</Arrow>
        </a>
      </div>
    </section>
  );
}
