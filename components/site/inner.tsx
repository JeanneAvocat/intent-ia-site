import { Icon, type IconName } from "./Icon";

/* ===========================================================================
   PromiseList — liste d'engagements (titre + description, puce forte), 2 colonnes
   ========================================================================= */
export function PromiseList({
  items,
}: {
  items: { icon?: IconName; t: string; d: string }[];
}) {
  return (
    <div
      className="grid cols-2"
      style={{
        gap: 0,
        border: "1px solid var(--line)",
        borderRadius: 12,
        overflow: "hidden",
        marginTop: 8,
      }}
    >
      {items.map((it, i) => (
        <div
          key={i}
          className="strip-cell"
          style={{
            padding: "26px 24px",
            borderTop: i > 1 ? "1px solid var(--line)" : "none",
            borderRight: i % 2 === 0 ? "1px solid var(--line)" : "none",
            background: "var(--surface)",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <Icon name={it.icon || "check"} size={20} color="var(--fulgur)" style={{ marginTop: 3 }} />
            <div>
              <div className="ia-h3" style={{ fontSize: 17, marginBottom: 6 }}>
                {it.t}
              </div>
              <p className="ia-small" style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>
                {it.d}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
