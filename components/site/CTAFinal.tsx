import { Button } from "./primitives";
import { cta } from "@/lib/site";

/** Bandeau CTA pleine largeur de fin de page. Toujours "Contactez-moi", jamais
 *  un lien direct vers un tarif : IntentIA n'affiche aucun prix. */
export function CTAFinal() {
  return (
    <section className="section--dark" style={{ paddingTop: 72, paddingBottom: 72 }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="ia-h1" style={{ color: "var(--paper)", maxWidth: 760, margin: "0 auto 18px" }}>
          Un cabinet à faire avancer sur l&apos;IA ? Parlons de{" "}
          <span style={{ color: "var(--fulgur-soft)", fontStyle: "italic" }}>
            votre configuration
          </span>
          .
        </h2>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            marginTop: 28,
            flexWrap: "wrap",
          }}
        >
          <Button variant="dark" href="/contact" iconRight="arrowRight">
            {cta.primary}
          </Button>
          <Button variant="ghostdark" href="/foudre-ia" iconRight="mail">
            {cta.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
