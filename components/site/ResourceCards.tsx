import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Icon } from "./Icon";

export type ResourceCard = {
  category: string;
  title: string;
  summary: string;
  href: string;
};

const CARD_STYLE: CSSProperties = {
  padding: 24,
  display: "flex",
  flexDirection: "column",
  gap: 12,
  minHeight: 180,
  textDecoration: "none",
  color: "inherit",
  background: "var(--surface)",
};

function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}

/** Grille de cartes ressources (article) : catégorie, titre, résumé.
 *  Les liens externes (http) s'ouvrent dans un nouvel onglet. */
export function ResourceCards({ items }: { items: ResourceCard[] }) {
  return (
    <div className="grid cols-3" style={{ gap: 18, marginTop: 40 }}>
      {items.map((c) => {
        const inner: ReactNode = (
          <>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--fulgur-deep)",
              }}
            >
              {c.category}
            </span>
            <div className="ia-h3" style={{ fontSize: 19 }}>
              {c.title}
            </div>
            <p className="ia-small" style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>
              {c.summary}
            </p>
            <div style={{ marginTop: "auto", paddingTop: 8 }}>
              <Icon name="arrowRight" size={18} color="var(--fulgur)" />
            </div>
          </>
        );

        return isExternal(c.href) ? (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ia-card"
            style={CARD_STYLE}
          >
            {inner}
          </a>
        ) : (
          <Link key={c.href} href={c.href} className="ia-card" style={CARD_STYLE}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
