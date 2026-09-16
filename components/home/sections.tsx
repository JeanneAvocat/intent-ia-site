import Link from "next/link";
import { Icon, type IconName } from "@/components/site/Icon";
import { Eyebrow, SectionHead } from "@/components/site/primitives";
import { site, cta } from "@/lib/site";

/* ===========================================================================
   Section — Pour qui (4 tuiles). Utilisée sur /methode.
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
   Section — Le constat et la promesse. Utilisée sur /methode.
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
   Section — La méthode en 3 étapes. Utilisée sur /methode (et l'accueil V1,
   conservée ici pour compatibilité du composant).
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
   Section — Ce que vous obtenez. Utilisée sur /methode.
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
   Section — Mes engagements. Utilisée sur /methode.
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
   Section — Bandeau services (accueil du média). Volontairement discret :
   une seule bande, pas un hero de vente, pas de tuiles ni d'illustration.
   L'accueil est un fil d'actualités ; l'offre IntentIA reste accessible mais
   au second plan, ici sous forme d'un simple bandeau de bas de page.
   ========================================================================= */
export function ServicesTeaser() {
  return (
    <section className="section--dark" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div className="ia-kicker" style={{ color: "var(--fulgur-soft)", marginBottom: 10 }}>
            IntentIA
          </div>
          <p className="ia-h3" style={{ color: "var(--paper)", margin: 0, maxWidth: 560 }}>
            Foudre IA est animé par IntentIA, l&apos;offre de formation et
            d&apos;implantation d&apos;IA d&apos;{site.founder} pour les cabinets
            d&apos;avocats, juristes et notaires.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/methode" className="ia-btn ia-btn--ghostdark ia-btn--sm">
            Découvrir la méthode
          </Link>
          <Link href="/contact" className="ia-btn ia-btn--dark ia-btn--sm">
            {cta.primary}
          </Link>
        </div>
      </div>
    </section>
  );
}


