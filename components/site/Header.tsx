"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./Icon";
import { Logo, Button } from "./primitives";
import { cta } from "@/lib/site";

const NAV: { href: string; label: string }[] = [
  { href: "/methode", label: "Méthode" },
  { href: "/foudre-ia", label: "Foudre IA" },
  { href: "/blog", label: "Blog" },
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
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        className="container"
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" aria-label="IntentIA, accueil" style={{ padding: 0 }}>
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
