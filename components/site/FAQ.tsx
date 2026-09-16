"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { SectionHead } from "./primitives";

export type FaqItem = { q: string; a: string };

/**
 * Accordéon FAQ. Réutilisable sur toutes les pages. Le HTML est rendu côté
 * serveur (réponses lisibles par les crawlers d'IA qui n'exécutent pas le JS) ;
 * le client ne pilote que l'ouverture/fermeture.
 */
export function FAQ({
  items,
  num = "12",
  eyebrow = "Questions fréquentes",
  title = "Ce qu'on me demande souvent.",
}: {
  items: FaqItem[];
  num?: string;
  eyebrow?: string;
  title?: string;
}) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 860 }}>
        <SectionHead num={num} eyebrow={eyebrow} title={title} />
        <div style={{ marginTop: 36, borderTop: "1px solid var(--line)" }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div className="ia-acc-item" key={i}>
                <h3 style={{ margin: 0 }}>
                  <button
                    className="ia-acc-q"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    {it.q}
                    <Icon
                      name={isOpen ? "minus" : "plus"}
                      size={20}
                      color={isOpen ? "var(--fulgur-deep)" : "var(--gres)"}
                    />
                  </button>
                </h3>
                <div className="ia-acc-panel" style={{ maxHeight: isOpen ? 480 : 0 }}>
                  <div className="ia-acc-panel-inner">{it.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
