import type { Metadata } from "next";
import { Eyebrow, Button } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="container" style={{ maxWidth: 620 }}>
        <Eyebrow num="404">Page introuvable</Eyebrow>
        <h1 className="ia-h1" style={{ margin: "16px 0 18px" }}>
          Cette page n&apos;existe pas, ou plus.
        </h1>
        <p className="ia-lead" style={{ marginBottom: 28 }}>
          Le lien est peut-être ancien. Revenez à l&apos;accueil, ou décrivez-moi
          votre besoin directement.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Button href="/" iconRight="arrowRight">
            Retour à l&apos;accueil
          </Button>
          <Button variant="s" href="/contact" iconRight="mail">
            Contactez-moi
          </Button>
        </div>
      </div>
    </section>
  );
}
