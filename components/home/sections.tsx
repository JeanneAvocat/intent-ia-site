import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/site/Icon";
import {
  Eyebrow,
  Button,
  ArrowLink,
  SectionHead,
} from "@/components/site/primitives";
import { site } from "@/lib/site";

/* ===========================================================================
   Section 2 — Bandeau de confiance (encre profonde)
   ========================================================================= */
export function TrustBand() {
  const items = [
    "Conforme RGPD et AI Act",
    "Porté par un avocat inscrit au Barreau de Paris",
    "Secret professionnel et confidentialité par conception",
    "Déploiement opérationnel, pas seulement une formation théorique",
  ];
  return (
    <section className="section--dark" style={{ paddingTop: 28, paddingBottom: 28 }}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            alignItems: "center",
            color: "var(--paper)",
            fontSize: 14.5,
          }}
        >
          {items.map((t, i) => (
            <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Icon name="shield" size={17} color="var(--fulgur-soft)" />
                {t}
              </span>
              {i < items.length - 1 && (
                <span style={{ color: "var(--fulgur-soft)" }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Section 2 bis — Pour qui (4 tuiles)
   ========================================================================= */
const AUDIENCES: { icon: IconName; t: string; d: string; href: string }[] = [
  {
    icon: "scale",
    t: "Cabinets d'avocats",
    d: "Structures de plusieurs associés qui veulent industrialiser l'usage de l'IA sans exposer leurs dossiers.",
    href: "/methode",
  },
  {
    icon: "building",
    t: "Directions juridiques",
    d: "Équipes internes qui cherchent à gagner du temps sur la recherche, la rédaction et la revue documentaire.",
    href: "/methode",
  },
  {
    icon: "fileText",
    t: "Notaires et études",
    d: "Professions réglementées voisines, avec les mêmes exigences de confidentialité et de traçabilité.",
    href: "/methode",
  },
  {
    icon: "graduationCap",
    t: "Juristes et équipes conformité",
    d: "Montée en compétence pratique sur les outils IA, au delà de la seule sensibilisation.",
    href: "/methode",
  },
];

export function Audiences() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          num="02"
          eyebrow="Pour qui"
          title="Conçu pour les professions réglementées."
          lead="Le format s'adapte à la taille et à la maturité de votre structure, avec une attention particulière aux cabinets de plusieurs avocats."
          maxw={620}
        />
        <div
          className="grid cols-2"
          style={{
            gap: 0,
            marginTop: 44,
            border: "1px solid var(--line)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {AUDIENCES.map((t, i) => (
            <Link
              key={i}
              href={t.href}
              style={{
                padding: "28px 26px",
                background: "var(--surface)",
                borderRight: i % 2 === 0 ? "1px solid var(--line)" : "none",
                borderTop: i >= 2 ? "1px solid var(--line)" : "none",
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <Icon name={t.icon} size={24} color="var(--fulgur-deep)" />
              <h3 className="ia-h3" style={{ fontSize: 18, margin: "16px 0 8px" }}>
                {t.t}
              </h3>
              <p className="ia-small" style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>
                {t.d}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Section 3/4 — Le constat et la promesse
   ========================================================================= */
export function ConstatPromesse() {
  return (
    <section className="section">
      <div className="container grid split" style={{ gap: 56 }}>
        <div>
          <Eyebrow num="03">Le constat</Eyebrow>
          <p
            className="ia-h2"
            style={{ fontFamily: "var(--serif)", margin: "16px 0 0", color: "var(--gres)" }}
          >
            Vos équipes testent déjà des outils d&apos;IA, en ordre dispersé, sans
            cadre de conformité, et vous n&apos;avez pas la certitude que vos données
            et celles de vos clients sont protégées.
          </p>
        </div>
        <div>
          <Eyebrow num="04">La promesse</Eyebrow>
          <p className="ia-h2" style={{ fontFamily: "var(--serif)", margin: "16px 0 0" }}>
            Une configuration IA <span className="ia-accent">opérationnelle</span>,
            déployée pour votre cabinet, avec la conformité pensée dès le départ,
            pas ajoutée après coup.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Section 5 — La méthode en 3 étapes
   ========================================================================= */
const STEPS: { icon: IconName; t: string; d: string }[] = [
  {
    icon: "message",
    t: "On cadre votre besoin.",
    d: "Un échange pour comprendre votre pratique, vos contraintes de confidentialité et vos priorités.",
  },
  {
    icon: "cpu",
    t: "On déploie et on forme.",
    d: "Configuration des outils, agents et automatisations adaptés à votre cabinet, avec formation pratique de vos équipes.",
  },
  {
    icon: "shield",
    t: "Vous restez conforme.",
    d: "RGPD et AI Act intégrés dès la conception, pas en rattrapage. Vous savez ce que fait chaque outil, et pourquoi c'est autorisé.",
  },
];

export function Steps({ num = "05" }: { num?: string }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHead num={num} eyebrow="La méthode" title="Trois étapes, un cabinet transformé." />
        <div className="grid cols-3" style={{ gap: 24, marginTop: 44 }}>
          {STEPS.map((s, i) => (
            <div key={i} className="ia-card" style={{ padding: 26 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 22,
                }}
              >
                <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--fulgur-deep)" }}>
                  0{i + 1}
                </span>
                <Icon name={s.icon} size={22} color="var(--ink)" />
              </div>
              <h3 className="ia-h3" style={{ marginBottom: 8 }}>
                {s.t}
              </h3>
              <p className="ia-small" style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Section 6 — Ce que vous obtenez
   ========================================================================= */
const BENEFITS: { icon: IconName; t: string; d: string }[] = [
  {
    icon: "cpu",
    t: "Une configuration qui tourne.",
    d: "Pas une démonstration, des outils réellement branchés dans votre pratique quotidienne.",
  },
  {
    icon: "shield",
    t: "La conformité intégrée.",
    d: "RGPD et AI Act pensés dès le déploiement, avec un avocat qui en comprend les enjeux de l'intérieur.",
  },
  {
    icon: "handshake",
    t: "Une légitimité d'avocat.",
    d: "Formé par quelqu'un qui exerce, qui connaît le secret professionnel et les contraintes de la profession.",
  },
  {
    icon: "graduationCap",
    t: "Une équipe formée, pas dépendante.",
    d: "L'objectif est votre autonomie : vous savez utiliser, ajuster et faire évoluer votre configuration.",
  },
];

export function Benefits() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead num="06" eyebrow="Ce que vous obtenez" title="Ce que ça change pour votre cabinet." />
        <div className="grid cols-4" style={{ gap: 24, marginTop: 44 }}>
          {BENEFITS.map((b, i) => (
            <div key={i}>
              <Icon name={b.icon} size={24} color="var(--fulgur-deep)" />
              <h3 className="ia-h3" style={{ fontSize: 18, margin: "16px 0 8px" }}>
                {b.t}
              </h3>
              <p className="ia-small" style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
                {b.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Section 7 — Mes engagements
   ========================================================================= */
export function Commitments() {
  const items = [
    "Conformité pensée dès le départ",
    "Formation pratique, pas seulement théorique",
    "Un avocat qui comprend votre déontologie",
    "Vos données restent sous votre contrôle",
  ];
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHead num="07" eyebrow="Mes engagements" title="Ce sur quoi je m'engage." />
        <div
          className="grid cols-4"
          style={{
            gap: 0,
            marginTop: 40,
            border: "1px solid var(--line)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {items.map((t, i) => (
            <div
              key={i}
              className="strip-cell"
              style={{
                padding: "26px 22px",
                borderRight: i < 3 ? "1px solid var(--line)" : "none",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                background: "var(--surface)",
              }}
            >
              <Icon name="check" size={20} color="var(--fulgur)" />
              <span style={{ fontWeight: 500, fontSize: 15.5, lineHeight: 1.4 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Section 8 — Teaser newsletter Foudre IA (encre profonde)
   ========================================================================= */
export function NewsletterTeaser() {
  return (
    <section className="section section--dark">
      <div
        className="container grid split"
        style={{ ["--cols" as string]: "1.2fr 0.8fr", gap: 48, alignItems: "center" }}
      >
        <div>
          <Eyebrow num="08" dark>
            {site.newsletterName}
          </Eyebrow>
          <h2 className="ia-h2" style={{ color: "var(--paper)", margin: "16px 0 14px" }}>
            La newsletter IA et droit, chaque semaine.
          </h2>
          <p
            className="ia-lead"
            style={{ color: "var(--gres-soft)", maxWidth: 520, marginBottom: 28 }}
          >
            {site.newsletterTagline}
          </p>
          <Button variant="dark" href="/foudre-ia" iconRight="arrowRight">
            S&apos;inscrire à {site.newsletterName}
          </Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {(
            [
              ["Actus IA et droit", "chaque semaine"],
              ["Skills et agents testés", "en exclusivité"],
            ] as const
          ).map(([t, p], i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "16px 18px",
                border: "1px solid var(--line-dark)",
                borderRadius: 10,
              }}
            >
              <span style={{ color: "var(--paper)", fontWeight: 500 }}>{t}</span>
              <span style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--fulgur-soft)" }}>
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================================================
   Section 9 — À propos en court
   ========================================================================= */
export function AboutShort() {
  return (
    <section className="section">
      <div
        className="container grid split split--imgfirst"
        style={{ ["--cols" as string]: "0.8fr 1.2fr", gap: 48, alignItems: "center" }}
      >
        <Image
          className="split-img"
          src="/assets/hugo-salard.png"
          alt="Hugo Salard"
          width={750}
          height={750}
          sizes="(max-width: 1000px) 70vw, 380px"
          style={{ display: "block", width: "100%", maxWidth: 380, height: "auto", margin: "0 auto" }}
        />
        <div>
          <Eyebrow num="09">À propos</Eyebrow>
          <p className="ia-h2" style={{ fontFamily: "var(--serif)", margin: "16px 0 20px" }}>
            Un avocat qui a construit ce qu&apos;il vous propose.
          </p>
          <p className="ia-body" style={{ color: "var(--gres)", maxWidth: 560, marginBottom: 24 }}>
            Hugo Salard est avocat au Barreau de Paris et fondateur de Jeanne
            Avocat, premier cabinet d&apos;affaires IA-natif de France. Il n&apos;enseigne
            pas une théorie : il a déployé cette méthode dans son propre cabinet
            avant de la proposer aux vôtres.
          </p>
          <ArrowLink href="/a-propos">En savoir plus</ArrowLink>
        </div>
      </div>
    </section>
  );
}

/* FAQ de l'accueil. Le JSON-LD FAQPage est généré côté page.
   Contenu écrit dans la voix de la marque, à valider par Hugo avant mise en
   ligne : réponses courtes et autoportantes. AUCUN prix n'est mentionné. */
export const HOME_FAQ = [
  {
    q: "IntentIA est-il lié à Jeanne Avocat ?",
    a: "Le fondateur est le même, Hugo Salard, avocat au Barreau de Paris. Mais IntentIA est une marque et une offre séparées : la formation et l'implantation d'IA pour d'autres cabinets, avocats, juristes et notaires, distincte de l'exercice du droit chez Jeanne Avocat.",
  },
  {
    q: "Combien coûte l'accompagnement ?",
    a: "Cela dépend de la taille de votre structure et du périmètre du déploiement. Contactez-moi pour en discuter : je préfère cadrer votre besoin avant de parler chiffres.",
  },
  {
    q: "Mes données et celles de mes clients restent-elles confidentielles ?",
    a: "C'est le point de départ de la méthode : secret professionnel, confidentialité par conception, choix d'architectures qui ne réutilisent pas vos données pour entraîner des modèles tiers.",
  },
  {
    q: "Faut-il déjà utiliser l'IA dans mon cabinet ?",
    a: "Non. La méthode s'adapte aux cabinets qui démarrent de zéro comme à ceux qui ont déjà des usages dispersés à cadrer et à sécuriser.",
  },
  {
    q: "Qu'est-ce que Foudre IA ?",
    a: "La newsletter hebdomadaire associée à IntentIA : actualités de l'écosystème IA et droit, cas d'usage, automatisations, et en exclusivité les skills et agents testés par Hugo.",
  },
  {
    q: "L'accompagnement s'adresse-t-il aux notaires ?",
    a: "Oui. La méthode vise les avocats, juristes et notaires, ainsi que les professions réglementées voisines qui partagent des contraintes de confidentialité et de déontologie proches.",
  },
];
