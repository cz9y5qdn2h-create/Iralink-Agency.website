import Nav from "@/components/Nav";
import AgencyHero from "@/components/AgencyHero";
import TrustBar from "@/components/TrustBar";
import StatsBar from "@/components/StatsBar";
import ProductsSection from "@/components/ProductsSection";
import SimulateursSection from "@/components/SimulateursSection";
import ConversionSection from "@/components/ConversionSection";
import WhyNow from "@/components/WhyNow";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import AgencyAbout from "@/components/AgencyAbout";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />
      <main>
        <AgencyHero />
        <TrustBar />
        <StatsBar />
        <ProductsSection />
        <SimulateursSection />
        <ConversionSection />
        <WhyNow />
        <PricingSection />
        <FAQSection />
        <AgencyAbout />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
