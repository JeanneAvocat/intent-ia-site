import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

/* ---- Logo : mark éclair + nom du média en serif fort ---------------------
   Masthead de presse : "Foudre IA" est le nom du média (le nom qui apparaît
   en haut de chaque page comme le nom d'un journal), "IntentIA" reste la
   marque/l'offre de services, rappelée en petit à droite. Mark éclair
   distinct du monogramme "j" de Jeanne Avocat. */
export function Logo({
  dark = false,
  scale = 1,
  showBrand = true,
}: {
  dark?: boolean;
  scale?: number;
  showBrand?: boolean;
}) {
  const markColor = dark ? "#F5ECD8" : "#C6891F";
  const nameColor = dark ? "#EEF0EE" : "#15171A";
  const subColor = dark ? "#90939A" : "#585B5F";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 11 * scale }}>
      <svg
        width={26 * scale}
        height={34 * scale}
        viewBox="0 0 30 38"
        fill="none"
        aria-hidden="true"
      >
        <path d="M17 2 L7 20 H14 L12 36 L23 16 H16 Z" fill={markColor} />
      </svg>
      <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: 24 * scale,
            fontWeight: 600,
            fontStyle: "italic",
            color: nameColor,
            letterSpacing: "-0.005em",
          }}
        >
          Foudre IA
        </span>
        {showBrand && (
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 9.5 * scale,
              fontWeight: 500,
              color: subColor,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              marginTop: 2 * scale,
            }}
          >
            par IntentIA
          </span>
        )}
      </span>
    </span>
  );
}

/* ---- Button : rend un <Link> si href, sinon un <button> ----------------- */
type ButtonVariant = "p" | "s" | "g" | "dark" | "ghostdark";

export function Button({
  variant = "p",
  size,
  href,
  type = "button",
  onClick,
  iconRight,
  iconLeft,
  children,
  disabled,
  ariaLabel,
}: {
  variant?: ButtonVariant;
  size?: "sm";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  iconRight?: IconName;
  iconLeft?: IconName;
  children: ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
}) {
  const cls = `ia-btn ia-btn--${variant}${size === "sm" ? " ia-btn--sm" : ""}`;
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} size={18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={18} />}
    </>
  );
  if (href) {
    return (
      <Link
        className={cls}
        href={href}
        aria-disabled={disabled || undefined}
        aria-label={ariaLabel}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button
      className={cls}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
}

/* ---- Eyebrow : repère de section "§ NN · LABEL" en monospace ------------ */
export function Eyebrow({
  children,
  num,
  dark,
}: {
  children: ReactNode;
  num?: string;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        fontFamily: "var(--mono)",
        fontWeight: 500,
        fontSize: "var(--fs-eyebrow)",
        letterSpacing: "var(--tr-eyebrow)",
        textTransform: "uppercase",
        color: dark ? "var(--fulgur-soft)" : "var(--fulgur-deep)",
      }}
    >
      {num ? `§ ${num} · ` : ""}
      {children}
    </div>
  );
}

/* ---- MonoTag : chip monospace ------------------------------------------- */
export function MonoTag({ children }: { children: ReactNode }) {
  return <span className="ia-chip">{children}</span>;
}

/* ---- ArrowLink : lien fléché (href réel) -------------------------------- */
export function ArrowLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link className="ia-arrow" href={href}>
      {children}
      <Icon name="arrowRight" size={16} />
    </Link>
  );
}

/* ---- BackLink : retour fléché (fil d'ariane léger) ---------------------- */
export function BackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className="ia-arrow"
      href={href}
      style={{ marginBottom: 20, color: "var(--gres)" }}
    >
      <Icon name="arrowLeft" size={16} />
      {children}
    </Link>
  );
}

/* ---- SectionHead : eyebrow + titre serif + lead optionnel --------------- */
export function SectionHead({
  num,
  eyebrow,
  title,
  lead,
  dark,
  align = "left",
  maxw = 720,
}: {
  num?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  maxw?: number;
}) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === "center" ? maxw : "none",
        margin: align === "center" ? "0 auto" : 0,
      }}
    >
      {eyebrow && (
        <Eyebrow num={num} dark={dark}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className="ia-h2"
        style={{ margin: "14px 0 0", color: dark ? "var(--paper)" : "var(--ink)" }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className="ia-lead"
          style={{
            margin: "16px 0 0",
            color: dark ? "var(--gres-soft)" : "var(--gres)",
            maxWidth: maxw,
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
