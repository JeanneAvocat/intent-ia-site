import { Icon } from "./Icon";
import { site } from "@/lib/site";

/**
 * Formulaire d'inscription à la newsletter "Foudre IA".
 *
 * PLACEHOLDER : aucun ESP (Brevo, Mailchimp, Kit...) n'est branché à ce
 * stade. Tant que `site.newsletterFormUrl` est vide, ce composant affiche un
 * lien `mailto:` de secours avec un objet préformaté ("Inscription Foudre
 * IA"), clairement documenté ici et dans le README.
 *
 * TODO (Hugo) : créer un compte ESP, brancher le formulaire d'inscription
 * (souvent un simple <iframe> ou une action de formulaire HTML fournie par
 * l'ESP), puis renseigner `NEXT_PUBLIC_NEWSLETTER_FORM_URL`. Une fois fait,
 * remplacer le bloc mailto ci-dessous par l'intégration réelle.
 */
export function NewsletterForm() {
  const hasEsp = site.newsletterFormUrl.length > 0;
  const mailTo = site.email || "contact@intent-ia.com";
  const mailtoHref = `mailto:${mailTo}?subject=${encodeURIComponent(
    "Inscription à Foudre IA",
  )}&body=${encodeURIComponent("Bonjour, je souhaite recevoir Foudre IA. Mon email : ")}`;

  if (hasEsp) {
    // Intégration réelle branchée : iframe fournie par l'ESP.
    return (
      <div className="ia-card" style={{ padding: 28 }}>
        <iframe
          src={site.newsletterFormUrl}
          title="Inscription à Foudre IA"
          style={{ width: "100%", height: 220, border: "none" }}
        />
      </div>
    );
  }

  return (
    <div className="ia-card" style={{ padding: 32, textAlign: "center" }}>
      <Icon name="zap" size={28} color="var(--fulgur-deep)" />
      <div className="ia-h3" style={{ fontSize: 20, margin: "16px 0 8px" }}>
        Recevoir Foudre IA
      </div>
      <p className="ia-small" style={{ margin: "0 0 20px", fontSize: 15, lineHeight: 1.6 }}>
        Aucune plateforme d&apos;envoi n&apos;est encore branchée : en attendant,
        écrivez-moi et je vous ajoute à la liste manuellement.
      </p>
      <a className="ia-btn ia-btn--p" href={mailtoHref}>
        Demander l&apos;inscription
        <Icon name="mail" size={18} />
      </a>
      <p className="ia-tag" style={{ marginTop: 16, fontSize: 12, color: "var(--gres)" }}>
        Placeholder : à remplacer par un vrai formulaire ESP (Brevo, Mailchimp...)
        avant la mise en ligne définitive.
      </p>
    </div>
  );
}
