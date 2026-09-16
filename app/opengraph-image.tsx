import { ImageResponse } from "next/og";

/**
 * Image Open Graph (et Twitter) générée au build, par défaut pour toutes les
 * routes. Aucune image externe : tokens de marque en dur (ardoise, encre,
 * fulgur), aucune ombre. Police système (l'OG ne charge pas Spectral).
 */
export const alt = "IntentIA, IA opérationnelle et conforme pour cabinets d'avocats";
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
          background: "#EEF0F4",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          color: "#14131F",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="26" height="34" viewBox="0 0 30 38" fill="none">
            <path d="M17 2 L7 20 H14 L12 36 L23 16 H16 Z" fill="#C6891F" />
          </svg>
          <div style={{ fontSize: 30, fontWeight: 600 }}>IntentIA</div>
          <div style={{ fontSize: 16, color: "#6F6D82", letterSpacing: 4, marginLeft: 4 }}>
            IA POUR AVOCATS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 56,
              lineHeight: 1.1,
              maxWidth: 1000,
            }}
          >
            <span>Déployez l&apos;IA dans votre cabinet,&nbsp;</span>
            <span style={{ color: "#9C6C16", fontStyle: "italic" }}>avec un avocat&nbsp;</span>
            <span>qui en porte la conformité.</span>
          </div>
          <div style={{ fontSize: 24, color: "#6F6D82", marginTop: 24, maxWidth: 920 }}>
            Formation et implantation de configurations IA opérationnelles pour
            avocats, juristes et notaires.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 20, color: "#6F6D82" }}>
          <div style={{ width: 56, height: 3, background: "#C6891F" }} />
          Par le fondateur de Jeanne Avocat, premier cabinet d&apos;affaires IA-natif de France
        </div>
      </div>
    ),
    size,
  );
}
