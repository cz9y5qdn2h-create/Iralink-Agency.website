import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
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
        <StatsBar />
        <Problem />
        <HowItWorks />
        <Features />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
