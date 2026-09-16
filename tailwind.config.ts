import type { Config } from "tailwindcss";

/**
 * Les design tokens d'IntentIA sont la source de vérité dans
 * `app/globals.css` (variables CSS `--*`). On les remappe ici pour que les
 * utilitaires Tailwind (couleurs, rayons, espacements) pointent vers les mêmes
 * variables : un seul endroit à changer, deux façons de consommer.
 *
 * Palette distincte de Jeanne Avocat : fond ardoise froid (ciel d'orage),
 * accent doré "fulgur" (l'éclair de Foudre IA), sans jamais tomber dans le
 * néon. Même méthode de design system, identité visuelle différente.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-deep": "var(--ink-deep)",
        gres: "var(--gres)",
        "gres-soft": "var(--gres-soft)",
        fulgur: "var(--fulgur)",
        "fulgur-deep": "var(--fulgur-deep)",
        "fulgur-soft": "var(--fulgur-soft)",
        "fulgur-wash": "var(--fulgur-wash)",
      },
      fontFamily: {
        serif: "var(--serif)",
        sans: "var(--sans)",
        mono: "var(--mono)",
      },
      borderColor: {
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        "line-dark": "var(--line-dark)",
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        pill: "var(--r-pill)",
      },
      maxWidth: {
        content: "var(--maxw)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.2, 0.6, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
