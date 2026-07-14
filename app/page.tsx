import Nav from "@/components/Nav";
import AgencyHero from "@/components/AgencyHero";
import StatsBar from "@/components/StatsBar";
import ProductsSection from "@/components/ProductsSection";
import SimulateursSection from "@/components/SimulateursSection";
import ConversionSection from "@/components/ConversionSection";
import WhyNow from "@/components/WhyNow";
import AgencyAbout from "@/components/AgencyAbout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />
      <main>
        <AgencyHero />
        <StatsBar />
        <ProductsSection />
        <SimulateursSection />
        <ConversionSection />
        <WhyNow />
        <AgencyAbout />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
