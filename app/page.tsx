import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import {
  TrustBand,
  Audiences,
  ConstatPromesse,
  Steps,
  Benefits,
  Commitments,
  NewsletterTeaser,
  AboutShort,
  HOME_FAQ,
} from "@/components/home/sections";
import { FAQ } from "@/components/site/FAQ";
import { CTAFinal } from "@/components/site/CTAFinal";
import { JsonLd } from "@/components/site/JsonLd";
import { faqPage } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "IntentIA · IA opérationnelle et conforme pour cabinets d'avocats" },
  description:
    "Formation et implantation de configurations IA opérationnelles pour avocats, juristes et notaires, avec conformité RGPD et AI Act intégrée, par un avocat.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqPage(HOME_FAQ)]} />
      <Hero />
      <TrustBand />
      <Audiences />
      <ConstatPromesse />
      <Steps num="05" />
      <Benefits />
      <Commitments />
      <NewsletterTeaser />
      <AboutShort />
      <FAQ items={HOME_FAQ} />
      <CTAFinal />
    </>
  );
}
