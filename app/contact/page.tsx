import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import CalWidget from "@/components/CalWidget";

export const metadata: Metadata = {
  title: "Contact — Théo Coutard | DIPpro",
  description:
    "Contactez Théo Coutard, fondateur d'DIPpro et créateur de DIPpro. Audit gratuit de votre conformité DIP, conseil en automatisation pour réseaux de franchise. Paris, France.",
  keywords: [
    "Théo Coutard",
    "contact DIPpro",
    "audit DIP gratuit",
    "conformité franchise contact",
    "DIPpro",
    "Paris",
  ],
  openGraph: {
    title: "Contact Théo Coutard — DIPpro",
    description:
      "Prenez contact avec Théo Coutard pour un audit gratuit de votre conformité DIP et une démonstration de DIPpro.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://iralink-agency.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="section page-hero"
          style={{
            paddingBottom: "80px",
            borderBottom: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="hero-grid-bg" />
          <div className="hero-glow" />
          <div className="section-inner" style={{ position: "relative" }}>
            <div className="section-tag reveal">
              <span className="line" />
              <span className="label">— Contact</span>
            </div>
            <h1
              className="t-h2 reveal reveal-delay-1"
              style={{ maxWidth: "640px", marginBottom: "24px" }}
            >
              Parlons de votre réseau.
            </h1>
            <p
              className="t-body reveal reveal-delay-2"
              style={{ maxWidth: "520px" }}
            >
              En 30 minutes, on analyse votre DIP, identifie les risques de
              non-conformité et vous montre comment DIPpro les résout.
              Sans engagement, sans frais.
            </p>
          </div>
        </section>

        {/* Two columns */}
        <section className="section" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="section-inner">
            <div className="contact-page-grid">

              {/* Left: contact info */}
              <div>
                <div className="reveal" style={{ marginBottom: "40px" }}>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(22px, 2.5vw, 28px)",
                      fontWeight: 300,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      color: "var(--white)",
                      marginBottom: "6px",
                    }}
                  >
                    Théo Coutard
                  </h2>
                  <span className="t-mono-sm" style={{ display: "block" }}>
                    DIPpro · DIPpro
                  </span>
                </div>

                {[
                  {
                    label: "Email",
                    content: (
                      <a
                        href="mailto:theo@iralink-agency.com"
                        className="link-grey-gold"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300 }}
                      >
                        theo@iralink-agency.com
                      </a>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    content: (
                      <a
                        href="https://www.linkedin.com/in/th%C3%A9o-coutard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-grey-gold"
                        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300 }}
                      >
                        Théo Coutard
                      </a>
                    ),
                  },
                  {
                    label: "Localisation",
                    content: (
                      <span
                        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 300, color: "var(--grey)" }}
                      >
                        Paris, France
                      </span>
                    ),
                  },
                ].map(({ label, content }, i) => (
                  <div key={label}>
                    <div
                      className={`reveal reveal-delay-${i + 1}`}
                      style={{ height: "1px", background: "var(--border)", marginBottom: "28px" }}
                    />
                    <div className={`reveal reveal-delay-${i + 1}`} style={{ marginBottom: "28px" }}>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "10px",
                          fontWeight: 400,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--grey)",
                          marginBottom: "8px",
                        }}
                      >
                        {label}
                      </p>
                      {content}
                    </div>
                  </div>
                ))}

                <div
                  className="reveal reveal-delay-4"
                  style={{ height: "1px", background: "var(--border)", marginBottom: "28px" }}
                />
                <div className="reveal reveal-delay-4">
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--grey)",
                      lineHeight: 1.8,
                    }}
                  >
                    Réservez un créneau<br />
                    directement dans l&apos;agenda
                  </p>
                </div>
              </div>

              {/* Right: Cal.com */}
              <div className="reveal reveal-delay-2">
                <CalWidget />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .contact-page-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .contact-page-grid {
            grid-template-columns: 1fr 1.5fr;
            gap: 48px;
          }
        }
        @media (max-width: 768px) {
          .contact-page-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </>
  );
}
