import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import ProductFeatures3D from "@/components/ProductFeatures3D";
import { getDipproUrl } from "@/lib/dippro";
import { SITE_URL } from "@/lib/seo";

const DIPPRO_URL = getDipproUrl("case-study");

export const metadata: Metadata = {
  title: "Étude de cas DIPpro — Conformité DIP automatisée | Iralink Agency",
  description:
    "Comment Iralink Agency a conçu DIPpro pour sécuriser la conformité du Document d'Information Précontractuelle au regard de la loi Doubin. Analyse par section, citations légales, reformulations IA.",
  alternates: {
    canonical: `${SITE_URL}/etude-de-cas`,
  },
  openGraph: {
    title: "Étude de cas DIPpro — Conformité Doubin automatisée",
    description: "Un SaaS conçu et développé par Iralink Agency pour vérifier tout DIP avant sa remise au franchisé.",
    type: "article",
    locale: "fr_FR",
  },
};

const SECTIONS = [
  { label: "Présentation du réseau", status: "Conforme" },
  { label: "État du marché local", status: "Conforme" },
  { label: "Données financières réseau", status: "À vérifier", warn: true },
  { label: "Clause d'exclusivité", status: "Conforme" },
];

export default function CaseStudyPage() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />

      <main>
        {/* Header */}
        <section className="section-dark page-hero" style={{ padding: "clamp(120px,14vw,160px) 8vw 60px" }}>
          <div className="reveal" style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", color: "var(--gold-light)" }}>ÉTUDE DE CAS</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(36px,5.4vw,64px)", margin: "16px 0 20px", color: "var(--white)" }}>
              DIPpro
            </h1>
            <p style={{ fontSize: "clamp(16px,1.6vw,19px)", lineHeight: 1.65, color: "var(--grey)", maxWidth: "640px", margin: 0 }}>
              Un SaaS conçu et développé par Iralink Agency pour sécuriser la conformité du Document d&apos;Information Précontractuelle au regard de la loi Doubin.
            </p>
          </div>
        </section>

        {/* Score card */}
        <section className="section-dark" style={{ padding: "0 8vw 90px" }}>
          <div
            className="reveal case-score-card"
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              background: "#161615",
              border: "1px solid rgba(236,233,226,0.12)",
              boxShadow: "24px 24px 0 rgba(156,138,104,0.12)",
              padding: "clamp(20px,3vw,32px)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "2px", background: "rgba(236,233,226,0.1)" }} className="case-score-grid">
              <div style={{ background: "#161615", padding: "24px" }}>
                <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", color: "var(--gold-light)", marginBottom: "18px" }}>SCORE GLOBAL</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "58px", fontWeight: 700, color: "var(--white)", marginBottom: "8px" }}>87%</div>
                <div style={{ height: "3px", background: "rgba(236,233,226,0.12)", overflow: "hidden", marginBottom: "26px" }}>
                  <div style={{ height: "100%", width: "87%", background: "var(--gold)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "var(--grey)" }}>
                    <span>Sections conformes</span><span style={{ color: "var(--gold-light)", fontWeight: 700 }}>11/14</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "var(--grey)" }}>
                    <span>À vérifier</span><span style={{ color: "#c99b3e", fontWeight: 700 }}>3/14</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "var(--grey)" }}>
                    <span>Délai légal</span><span style={{ color: "var(--gold-light)", fontWeight: 700 }}>20j respectés</span>
                  </div>
                </div>
              </div>
              <div style={{ background: "#161615", padding: "24px" }}>
                <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", color: "var(--gold-light)", marginBottom: "18px" }}>ANALYSE PAR SECTION — ART. L.330-3</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {SECTIONS.map((s) => (
                    <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: s.warn ? "rgba(176,141,62,0.1)" : "rgba(156,138,104,0.08)", padding: "12px 14px" }}>
                      <span style={{ fontSize: "13px", color: "var(--white)" }}>{s.label}</span>
                      <span style={{ fontSize: "11.5px", fontWeight: 700, color: s.warn ? "#c99b3e" : "var(--gold-light)" }}>{s.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="section-paper" style={{ padding: "90px 8vw" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2px", background: "var(--ink-border)" }}>
            <div className="reveal" style={{ background: "var(--paper)", padding: "32px" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", color: "#8a6a2e" }}>LE PROBLÈME</span>
              <p style={{ fontSize: "16px", lineHeight: 1.7, margin: "14px 0 0", color: "var(--ink)" }}>
                Chaque franchiseur doit remettre un DIP conforme à l&apos;article L.330-3, 20 jours avant la signature. Un exercice juridique dense, refait à chaque nouveau franchisé, avec un vrai risque en cas d&apos;erreur.
              </p>
            </div>
            <div className="reveal reveal-delay-1" style={{ background: "var(--paper)", padding: "32px" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", color: "var(--ink-grey)" }}>LA SOLUTION</span>
              <p style={{ fontSize: "16px", lineHeight: 1.7, margin: "14px 0 0", color: "var(--ink)" }}>
                DIPpro analyse le document section par section, cite précisément les articles concernés et propose des reformulations conformes — avant chaque signature.
              </p>
            </div>
          </div>
        </section>

        {/* Perfected, 3D-animated feature grid */}
        <ProductFeatures3D />

        {/* Final CTA */}
        <section className="section-dark" style={{ padding: "clamp(100px,12vw,160px) 8vw", textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(50px,7vw,84px) 24px", border: "1px solid rgba(236,233,226,0.16)" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(24px,3.2vw,40px)", margin: "0 0 24px", color: "var(--white)" }}>
              Vous pilotez un réseau de franchise&nbsp;?
            </h2>
            <p style={{ fontSize: "15px", color: "var(--grey)", margin: "0 0 30px" }}>Parlons du SaaS qu&apos;il vous faut.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ padding: "18px 40px", fontSize: "15px" }}>
                Prendre rendez-vous
              </Link>
              <a href={DIPPRO_URL} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "18px 32px", fontSize: "15px" }}>
                Voir DIPpro en ligne →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 760px) {
          .case-score-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
