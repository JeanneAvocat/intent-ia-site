"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./Icon";
import { Logo, Button } from "./primitives";
import { cta } from "@/lib/site";

/**
 * Navigation : "Actualités" en premier, l'offre de services (Méthode, À
 * propos) reste accessible mais en second plan, après le média. Foudre IA
 * (newsletter) reste visible car c'est l'entrée de conversion du média.
 */
const NAV: { href: string; label: string }[] = [
  { href: "/actualites", label: "Actualités" },
  { href: "/foudre-ia", label: "Newsletter" },
  { href: "/methode", label: "Services" },
  { href: "/a-propos", label: "À propos" },
];

const MOBILE_NAV = [...NAV, { href: "/contact", label: "Contact" }];

export function Header() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const isOn = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className={"ia-navlink" + (isOn(href) ? " ia-navlink--on" : "")}
    >
      {label}
    </Link>
  );

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "var(--paper)",
      }}
    >
      <div
        className="container"
        style={{
          height: 76,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" aria-label="Foudre IA, accueil" style={{ padding: 0 }}>
          <Logo />
        </Link>

        <nav className="nav-desktop" aria-label="Navigation principale">
          {NAV.map((n) => navLink(n.href, n.label))}
          <Button href="/contact" size="sm">
            {cta.primary}
          </Button>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={openMobile}
          onClick={() => setOpenMobile((v) => !v)}
        >
          <Icon name={openMobile ? "x" : "menu"} size={22} />
        </button>
      </div>

      <div className="ia-masthead-rule" />

      {openMobile && (
        <div className="nav-mobile">
          {MOBILE_NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={"ia-navlink" + (isOn(n.href) ? " ia-navlink--on" : "")}
              onClick={() => setOpenMobile(false)}
            >
              {n.label}
            </Link>
          ))}
          <div className="nav-mobile-cta">
            <Button href="/contact" size="sm">
              {cta.primary}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
