import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

/** Bandeau horizontal de rubriques, façon barre de navigation d'un site de
 *  presse (Artificial Lawyer, Axios). `active` surligne la rubrique courante ;
 *  omis sur la page de listing générale. */
export function CategoryRail({ active }: { active?: string }) {
  return (
    <nav aria-label="Rubriques" className="ia-category-rail">
      <Link
        href="/actualites"
        className={"ia-category-pill" + (!active ? " ia-category-pill--on" : "")}
      >
        Toute l&apos;actualité
      </Link>
      {CATEGORIES.map((c) => (
        <Link
          key={c.slug}
          href={`/actualites/categorie/${c.slug}`}
          className={"ia-category-pill" + (active === c.slug ? " ia-category-pill--on" : "")}
        >
          {c.shortLabel}
        </Link>
      ))}
    </nav>
  );
}
