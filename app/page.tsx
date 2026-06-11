import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DIPproProduct from "@/components/DIPproProduct";
import StatsBar from "@/components/StatsBar";
import IntegrationsRow from "@/components/IntegrationsRow";
import Problem from "@/components/Problem";
import WhyNow from "@/components/WhyNow";
import HowItWorks from "@/components/HowItWorks";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import WaitlistSection from "@/components/WaitlistSection";
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
        <Hero />
        <DIPproProduct />
        <StatsBar />
        <IntegrationsRow />
        <Problem />
        <WhyNow />
        <HowItWorks />
        <ProductShowcase />
        <Features />
        <Pricing />
        <WhyUs />
        <WaitlistSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
