import Link from "next/link";
import { categoryLabel } from "@/lib/categories";
import type { Post } from "@/lib/content";

/**
 * Composants du fil éditorial. Grille de presse dense : lignes séparées par
 * un filet fin, pas de cartes flottantes ni d'ombres. Utilisés sur l'accueil,
 * /actualites et les pages de catégorie.
 */

function formatMeta(p: Post): string {
  return `${categoryLabel(p.category)} · ${p.date}${p.readingTime ? ` · ${p.readingTime}` : ""}`;
}

/** Article vedette : le plus récent, mis en avant en haut du fil. */
export function LeadStory({ post }: { post: Post }) {
  return (
    <article className="ia-lead-story">
      <Link href={`/actualites/categorie/${post.category}`} className="ia-kicker">
        {categoryLabel(post.category)}
      </Link>
      <Link href={`/actualites/${post.slug}`}>
        <h2 className="ia-lead-story-title">{post.headline}</h2>
      </Link>
      <p className="ia-lead" style={{ maxWidth: 640, margin: "0 0 14px" }}>
        {post.summary}
      </p>
      <div className="ia-feed-meta">
        {post.date}
        {post.readingTime ? ` · ${post.readingTime}` : ""}
        {post.provisional ? " · exemple de démonstration" : ""}
      </div>
    </article>
  );
}

/** Une rangée du fil : date/rubrique à gauche, titre + résumé à droite. */
export function FeedRow({ post }: { post: Post }) {
  return (
    <div className="ia-feed-row" style={{ display: "grid" }}>
      <div className="ia-feed-meta">
        {post.date}
        <br />
        <Link
          href={`/actualites/categorie/${post.category}`}
          className="ia-kicker"
          style={{ display: "inline-block", marginTop: 6, position: "relative", zIndex: 1 }}
        >
          {categoryLabel(post.category)}
        </Link>
      </div>
      <Link href={`/actualites/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
        <h3 className="ia-feed-title">{post.headline}</h3>
        <p className="ia-feed-summary">{post.summary}</p>
      </Link>
    </div>
  );
}

/** Fil chronologique complet : article vedette optionnel + rangées. */
export function ArticleFeed({
  posts,
  showLead = false,
}: {
  posts: Post[];
  showLead?: boolean;
}) {
  if (posts.length === 0) {
    return (
      <p className="ia-body" style={{ color: "var(--gres)" }}>
        Aucun article dans cette rubrique pour le moment.
      </p>
    );
  }

  const [first, ...rest] = posts;
  const lead = showLead ? first : undefined;
  const feedItems = showLead ? rest : posts;

  return (
    <div>
      {lead && <LeadStory post={lead} />}
      {feedItems.length > 0 && (
        <div className="ia-feed">
          {feedItems.map((p) => (
            <FeedRow key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}

/** Formatte les métadonnées d'un article pour un usage inline (RSS, etc). */
export { formatMeta };
