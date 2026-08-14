import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero3D from "@/components/Hero3D";
import TrustBar from "@/components/TrustBar";
import Marquee from "@/components/Marquee";
import Expertise from "@/components/Expertise";
import StatsBar from "@/components/StatsBar";
import CaseTeaser from "@/components/CaseTeaser";
import Roadmap from "@/components/Roadmap";
import WhyNow from "@/components/WhyNow";
import SimulateursSection from "@/components/SimulateursSection";
import Process from "@/components/Process";
import FieldVoices from "@/components/FieldVoices";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import AgencyAbout from "@/components/AgencyAbout";
import ConversionSection from "@/components/ConversionSection";
import AgencyCTABanner from "@/components/AgencyCTABanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Iralink Agency — On construit le logiciel qui fait tourner votre réseau",
  description:
    "Iralink Agency conçoit et développe des SaaS sur-mesure pour les franchiseurs : conformité juridique (DIPpro), pilotage de réseau, audit terrain. Découvrez notre étude de cas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Iralink Agency — On construit le logiciel qui fait tourner votre réseau",
    description:
      "SaaS sur-mesure pour les franchiseurs : conformité juridique, pilotage de réseau, audit terrain. DIPpro, notre premier produit, automatise la conformité DIP.",
    type: "website",
    locale: "fr_FR",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />
      <main>
        <Hero3D />
        <TrustBar />
        <Marquee />
        <Expertise />
        <StatsBar />
        <CaseTeaser />
        <Roadmap />
        <WhyNow />
        <SimulateursSection />
        <Process />
        <FieldVoices />
        <PricingSection />
        <FAQSection />
        <AgencyAbout />
        <ConversionSection />
        <AgencyCTABanner />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
