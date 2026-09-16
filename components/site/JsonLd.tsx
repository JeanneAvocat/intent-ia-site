import { jsonLdString } from "@/lib/jsonld";

/** Injecte un ou plusieurs noeuds JSON-LD, rendus côté serveur. */
export function JsonLd({ data }: { data: Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: jsonLdString(...data) }}
    />
  );
}
