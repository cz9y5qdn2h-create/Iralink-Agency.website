import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Théo Coutard | Iralink Agency",
  description:
    "Contactez Théo Coutard, fondateur d'Iralink Agency et créateur de DIP Pilot. Audit gratuit de votre conformité DIP, conseil en automatisation pour réseaux de franchise. Paris, France.",
  keywords: [
    "Théo Coutard",
    "contact Iralink Agency",
    "audit DIP gratuit",
    "conformité franchise contact",
    "DIP Pilot",
    "Paris",
  ],
  openGraph: {
    title: "Contact Théo Coutard — Iralink Agency",
    description:
      "Prenez contact avec Théo Coutard pour un audit gratuit de votre conformité DIP et une démonstration de DIP Pilot.",
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
        {/* ── Hero ── */}
        <section
          className="section"
          style={{
            paddingTop: "160px",
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
              style={{ maxWidth: "520px", marginBottom: "0" }}
            >
              En 30 minutes, on analyse votre DIP, identifie les risques de
              non-conformité et vous montre comment DIP Pilot les résout.
              Sans engagement, sans frais.
            </p>
          </div>
        </section>

        {/* ── Contact columns ── */}
        <section
          className="section"
          style={{ paddingTop: "80px", paddingBottom: "0" }}
        >
          <div className="section-inner">
            <div
              className="contact-page-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "80px",
                alignItems: "start",
              }}
            >
              {/* ── Left: contact info ── */}
              <div>
                {/* Name & title */}
                <div
                  className="reveal"
                  style={{ marginBottom: "40px" }}
                >
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
                  <span
                    className="t-mono-sm"
                    style={{ display: "block" }}
                  >
                    DIP Pilot · Iralink Agency
                  </span>
                </div>

                {/* Gold separator */}
                <div
                  className="reveal reveal-delay-1"
                  style={{
                    height: "1px",
                    background: "var(--border)",
                    marginBottom: "32px",
                  }}
                />

                {/* Email */}
                <div
                  className="reveal reveal-delay-1"
                  style={{ marginBottom: "32px" }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "10px",
                      fontWeight: 400,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--grey)",
                      marginBottom: "10px",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:theo@iralink-agency.com"
                    className="link-grey-gold"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                    }}
                  >
                    theo@iralink-agency.com
                  </a>
                </div>

                {/* Gold separator */}
                <div
                  className="reveal reveal-delay-2"
                  style={{
                    height: "1px",
                    background: "var(--border)",
                    marginBottom: "32px",
                  }}
                />

                {/* LinkedIn */}
                <div
                  className="reveal reveal-delay-2"
                  style={{ marginBottom: "32px" }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "10px",
                      fontWeight: 400,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--grey)",
                      marginBottom: "10px",
                    }}
                  >
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/th%C3%A9o-coutard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-grey-gold"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                    }}
                  >
                    Théo Coutard
                  </a>
                </div>

                {/* Gold separator */}
                <div
                  className="reveal reveal-delay-3"
                  style={{
                    height: "1px",
                    background: "var(--border)",
                    marginBottom: "32px",
                  }}
                />

                {/* Location */}
                <div
                  className="reveal reveal-delay-3"
                  style={{ marginBottom: "40px" }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "10px",
                      fontWeight: 400,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--grey)",
                      marginBottom: "10px",
                    }}
                  >
                    Localisation
                  </p>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "var(--grey)",
                    }}
                  >
                    Paris, France
                  </span>
                </div>

                {/* Gold separator */}
                <div
                  className="reveal reveal-delay-4"
                  style={{
                    height: "1px",
                    background: "var(--border)",
                    marginBottom: "32px",
                  }}
                />

                {/* Response time note */}
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
                    Réponse garantie<br />
                    sous 24h ouvrées
                  </p>
                </div>
              </div>

              {/* ── Right: contact form ── */}
              <div className="reveal reveal-delay-2">
                {/* We render the Contact component which includes its own section wrapper.
                    We override its outer section padding via a scoped style below. */}
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        /* Strip the section wrapper padding/bg from the embedded Contact component
           so it sits flush inside the two-column layout */
        .contact-page-grid > div:last-child > section {
          padding: 0 !important;
          background: transparent !important;
        }
        .contact-page-grid > div:last-child > section > .section-inner {
          max-width: unset !important;
          margin: 0 !important;
        }
        /* Remove the left column inside Contact (already shown in our left col) */
        .contact-page-grid .contact-grid > div:first-child {
          display: none !important;
        }
        .contact-page-grid .contact-grid {
          grid-template-columns: 1fr !important;
          gap: 0 !important;
        }

        @media (max-width: 900px) {
          .contact-page-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 640px) {
          .contact-page-grid > div:last-child > section {
            padding: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
