import { ImageResponse } from "next/og";

/**
 * Image Open Graph (et Twitter) générée au build, par défaut pour toutes les
 * routes. Aucune image externe : tokens de marque en dur (papier, encre,
 * fulgur), aucune ombre. Police système (l'OG ne charge pas Fraunces).
 */
export const alt = "Foudre IA, l'actualité de l'intelligence artificielle appliquée au droit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#EEF0EE",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          color: "#15171A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="26" height="34" viewBox="0 0 30 38" fill="none">
            <path d="M17 2 L7 20 H14 L12 36 L23 16 H16 Z" fill="#C6891F" />
          </svg>
          <div style={{ fontSize: 32, fontWeight: 600, fontStyle: "italic" }}>Foudre IA</div>
          <div style={{ fontSize: 15, color: "#585B5F", letterSpacing: 3, marginLeft: 4 }}>
            PAR INTENTIA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 52,
              lineHeight: 1.15,
              maxWidth: 1020,
            }}
          >
            <span>L&apos;actualité de l&apos;intelligence artificielle&nbsp;</span>
            <span style={{ color: "#9C6C16", fontStyle: "italic" }}>appliquée au droit</span>
          </div>
          <div style={{ fontSize: 22, color: "#585B5F", marginTop: 24, maxWidth: 900 }}>
            Marché des laboratoires IA, droit de l&apos;IA, legal tech, cas d&apos;usage
            en cabinet, mouvements et événements.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 20, color: "#585B5F" }}>
          <div style={{ width: 56, height: 3, background: "#C6891F" }} />
          Écrit par le fondateur de Jeanne Avocat, premier cabinet d&apos;affaires IA-natif de France
        </div>
      </div>
    ),
    size,
  );
}
