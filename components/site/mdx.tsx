import type { ReactNode } from "react";

/**
 * Correspondance MDX → composants de marque. Le corps des articles (.mdx) est
 * compilé avec ces styles pour rester fidèle au design system (titres serif,
 * corps Inter, citation à filet fulgur). Aucune ombre, aucun emoji.
 */
export const mdxComponents = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="ia-h2" style={{ fontSize: 26, margin: "36px 0 14px" }}>
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="ia-h3" style={{ fontSize: 20, margin: "28px 0 12px" }}>
      {children}
    </h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="ia-body" style={{ margin: "0 0 18px" }}>
      {children}
    </p>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote
      style={{
        margin: "28px 0",
        padding: "8px 0 8px 24px",
        borderLeft: "2px solid var(--fulgur)",
        fontFamily: "var(--serif)",
        fontSize: 22,
        lineHeight: 1.4,
        color: "var(--ink)",
      }}
    >
      {children}
    </blockquote>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="ia-body" style={{ margin: "0 0 18px", paddingLeft: 22 }}>
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="ia-body" style={{ margin: "0 0 18px", paddingLeft: 22 }}>
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li style={{ marginBottom: 8 }}>{children}</li>
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a className="ia-link" href={href}>
      {children}
    </a>
  ),
  strong: ({ children }: { children?: ReactNode }) => (
    <strong style={{ fontWeight: 600 }}>{children}</strong>
  ),
  hr: () => (
    <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "32px 0" }} />
  ),
};
