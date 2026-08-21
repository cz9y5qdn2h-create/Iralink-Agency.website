import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import DipproConfigurator from "@/components/configurator/DipproConfigurator";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Configurez votre offre DIPpro — Iralink Agency",
  description:
    "Composez votre offre DIPpro : socle inclus, options de support, revue juridique, cession/reprise et multi-territoires. Envoyez votre demande, sans engagement.",
  alternates: { canonical: `${SITE_URL}/configurateur` },
  openGraph: {
    title: "Configurez votre offre DIPpro",
    description: "Composez votre offre DIPpro et envoyez votre demande en quelques minutes.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function ConfiguratorPage() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />
      <main>
        <section className="section-dark page-hero" style={{ paddingBottom: "clamp(90px,10vw,140px)" }}>
          <div style={{ padding: "0 8vw" }}>
            <DipproConfigurator />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
