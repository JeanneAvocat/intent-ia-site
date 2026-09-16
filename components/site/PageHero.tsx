import type { ReactNode } from "react";
import { Eyebrow } from "./primitives";

/**
 * Hero de page intérieure : eyebrow numéroté + h1 + lead, sur fond ardoise.
 * Rend un vrai `h1` (un seul par page). `children` accueille un CTA optionnel.
 */
export function PageHero({
  num = "01",
  eyebrow,
  title,
  lead,
  children,
}: {
  num?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section style={{ borderBottom: "1px solid var(--line)" }}>
      <div className="container" style={{ paddingTop: 72, paddingBottom: 56, maxWidth: 920 }}>
        <Eyebrow num={num}>{eyebrow}</Eyebrow>
        <h1 className="ia-h1" style={{ margin: "20px 0 0" }}>
          {title}
        </h1>
        {lead && (
          <p className="ia-lead" style={{ margin: "20px 0 0", maxWidth: 640 }}>
            {lead}
          </p>
        )}
        {children && <div style={{ marginTop: 28 }}>{children}</div>}
      </div>
    </section>
  );
}
