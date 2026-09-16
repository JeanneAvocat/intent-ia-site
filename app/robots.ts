import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * robots.txt généré.
 *
 * Choix assumé (GEO) : on AUTORISE explicitement les crawlers d'IA. IntentIA
 * veut être lu, compris et cité par ChatGPT, Claude, Perplexity, Gemini comme
 * une référence sur l'IA appliquée au droit. On liste donc GPTBot, ClaudeBot,
 * OAI-SearchBot, PerplexityBot, Google-Extended, CCBot, Applebot-Extended en
 * `allow`. Si la position évolue, c'est ici qu'on referme.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Google-Extended",
    "CCBot",
    "Applebot-Extended",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
