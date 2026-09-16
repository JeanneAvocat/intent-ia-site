/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Images optimisées (AVIF/WebP). next/image sert ces formats automatiquement.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // En-têtes de sécurité (bonnes pratiques, signaux de confiance).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "browsing-topics=(), interest-cohort=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
  // Point d'extension : si un jour un formulaire ESP (Brevo, etc.) ou une API
  // d'inscription à la newsletter "Foudre IA" est branché côté serveur, ajouter
  // ici les routes/rewrites nécessaires. Rien à fermer aujourd'hui.
};

export default nextConfig;
