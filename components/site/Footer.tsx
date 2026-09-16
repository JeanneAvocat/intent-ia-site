import Link from "next/link";
import { Icon } from "./Icon";
import { Logo } from "./primitives";
import { site } from "@/lib/site";

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--gres-soft)",
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="ia-navlink"
            style={{ color: "var(--paper)", opacity: 0.78, textAlign: "left" }}
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="section--dark" style={{ paddingTop: 64, paddingBottom: 40 }}>
      <div className="container">
        <div
          className="grid footer-grid"
          style={{ gap: 40, paddingBottom: 40, borderBottom: "1px solid var(--line-dark)" }}
        >
          <div>
            <Logo dark scale={1.05} />
            <p
              style={{
                color: "var(--gres-soft)",
                fontSize: 14.5,
                lineHeight: 1.6,
                marginTop: 18,
                maxWidth: 280,
              }}
            >
              Formation et implantation de configurations IA opérationnelles pour
              avocats, juristes et notaires, par le fondateur de{" "}
              <a
                href={site.jeanneAvocatUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--fulgur-soft)", textDecoration: "underline" }}
              >
                Jeanne Avocat
              </a>
              .
            </p>
            {site.companyLinkedin && (
              <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
                <a
                  className="ia-btn ia-btn--ghostdark ia-btn--sm"
                  href={site.companyLinkedin || site.founderLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin" size={16} /> LinkedIn
                </a>
              </div>
            )}
          </div>

          <FooterCol
            title="IntentIA"
            items={[
              { href: "/methode", label: "Méthode" },
              { href: "/a-propos", label: "À propos" },
              { href: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Ressources"
            items={[
              { href: "/foudre-ia", label: "Newsletter Foudre IA" },
              { href: "/blog", label: "Blog" },
            ]}
          />

          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--gres-soft)",
                marginBottom: 16,
              }}
            >
              Contact
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                color: "var(--gres-soft)",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="ia-navlink"
                  style={{ color: "var(--paper)", opacity: 0.78 }}
                >
                  {site.email}
                </a>
              ) : (
                <span>Coordonnées : voir la page Contact.</span>
              )}
              <Link
                href="/contact"
                className="ia-navlink"
                style={{ color: "var(--paper)", opacity: 0.78 }}
              >
                Contactez-moi
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 24,
            color: "var(--gres-soft)",
            fontSize: 13,
          }}
        >
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link
              href="/mentions-legales"
              className="ia-navlink"
              style={{ color: "var(--gres-soft)", fontSize: 13 }}
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="ia-navlink"
              style={{ color: "var(--gres-soft)", fontSize: 13 }}
            >
              Confidentialité
            </Link>
          </div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 12 }}>
            IntentIA · marque distincte de {site.jeanneAvocatName}
          </div>
        </div>
      </div>
    </footer>
  );
}
