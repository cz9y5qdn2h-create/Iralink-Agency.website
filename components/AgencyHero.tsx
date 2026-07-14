"use client";

import { useEffect, useState } from "react";

const DIPPRO_URL = "https://iralink-agency.dippro.business?utm_source=iralink-agency.com&utm_medium=hero";

function EcosystemCard() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1400);
    return () => clearInterval(id);
  }, []);

  const pulseOpacity = tick % 2 === 0 ? 1 : 0.5;

  return (
    <>
      <style>{`
        @keyframes eco-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes eco-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .eco-pulse { animation: eco-pulse 2s ease-in-out infinite; }
        .eco-flow-line {
          position: relative;
          height: 1px;
          background: var(--border-dim);
          overflow: hidden;
          margin: 0 -20px;
        }
        .eco-flow-line::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          animation: eco-flow 2.4s linear infinite;
        }
      `}</style>

      <div
        style={{
          background: "var(--grey-light)",
          border: "1px solid var(--border-dim)",
          width: "100%",
          maxWidth: "460px",
          position: "relative",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            padding: "12px 20px",
            borderBottom: "1px solid var(--border-dim)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            IRALINK AGENCY / PRODUITS
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.12em",
              color: "#4CAF80",
            }}
          >
            <span
              className="eco-pulse"
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#4CAF80",
                flexShrink: 0,
              }}
            />
            LIVE
          </span>
        </div>

        {/* DIPpro row — active */}
        <div style={{ padding: "24px 20px", borderBottom: "1px solid var(--border-dim)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: "#3A3A3A",
                }}
              >
                01
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                  fontWeight: 300,
                  color: "var(--white)",
                  letterSpacing: "0.04em",
                }}
              >
                DIPpro
              </span>
            </div>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.1em",
                color: "#4CAF80",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#4CAF80",
                  opacity: pulseOpacity,
                  transition: "opacity 0.4s ease",
                }}
              />
              ACTIF
            </span>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 300,
              color: "#5A5A5A",
              lineHeight: 1.5,
              paddingLeft: "24px",
              marginBottom: "12px",
            }}
          >
            Conformité DIP automatisée — Loi Doubin
          </p>
          <div
            style={{
              paddingLeft: "24px",
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
            }}
          >
            {["Surveillance", "IA", "Audit trail"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "8px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(200,169,110,0.3)",
                  color: "var(--gold)",
                  padding: "3px 8px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Animated flow line */}
        <div className="eco-flow-line" style={{ margin: "0" }} />

        {/* Product 02 */}
        <div
          style={{
            padding: "18px 20px",
            borderBottom: "1px solid var(--border-dim)",
            opacity: 0.38,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: "#333",
                }}
              >
                02
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "#888",
                }}
              >
                Prochain produit
              </span>
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.1em",
                color: "#555",
              }}
            >
              Q4 2026
            </span>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "#444",
              paddingLeft: "24px",
              marginTop: "6px",
            }}
          >
            En développement
          </p>
        </div>

        {/* Product 03 */}
        <div
          style={{
            padding: "18px 20px",
            borderBottom: "1px solid var(--border-dim)",
            opacity: 0.22,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: "#333",
                }}
              >
                03
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "#888",
                }}
              >
                Troisième produit
              </span>
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.1em",
                color: "#555",
              }}
            >
              2027
            </span>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "#444",
              paddingLeft: "24px",
              marginTop: "6px",
            }}
          >
            En développement
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              color: "#2A2A2A",
              letterSpacing: "0.08em",
            }}
          >
            1 actif · 2 en développement
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              color: "#2A2A2A",
            }}
          >
            iralink-agency.com
          </span>
        </div>
      </div>
    </>
  );
}

export default function AgencyHero() {
  return (
    <section
      className="hero-section"
      id="accueil"
      style={{ alignItems: "center", paddingBottom: "100px" }}
    >
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "22vw",
          fontWeight: 300,
          color: "var(--gold)",
          opacity: 0.012,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        I
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1160px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="hero-inner-grid"
      >
        {/* Left: Text */}
        <div>
          <div
            className="section-tag"
            style={{ marginBottom: "48px" }}
          >
            <span className="line" />
            <span className="label">Agence SaaS · Franchise</span>
          </div>

          <h1 className="t-h1" style={{ marginBottom: "32px" }}>
            L&apos;agence SaaS<br />
            pour les<br />
            franchiseurs.
          </h1>

          <p
            className="t-body"
            style={{
              marginBottom: "52px",
              maxWidth: "440px",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            Iralink conçoit des outils qui automatisent les obligations
            permanentes des réseaux de franchise. DIPpro est notre premier produit.
          </p>

          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "52px",
              alignItems: "center",
            }}
          >
            <a href="#produits" className="btn-primary">
              Nos produits
            </a>
            <a href="#simulateurs" className="btn-ghost">
              Tester un simulateur <span className="arrow">→</span>
            </a>
          </div>

          {/* Live badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4CAF80",
                flexShrink: 0,
                boxShadow: "0 0 8px rgba(76,175,80,0.5)",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                color: "#5A5A5A",
                letterSpacing: "0.03em",
              }}
            >
              DIPpro est disponible —{" "}
              <a
                href={DIPPRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--gold)",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                }
              >
                Accéder →
              </a>
            </span>
          </div>
        </div>

        {/* Right: Ecosystem card */}
        <div
          className="hero-right-panel"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <EcosystemCard />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-right-panel {
            justify-content: flex-start !important;
          }
        }
        @media (max-width: 600px) {
          .hero-right-panel { display: none !important; }
        }
      `}</style>
    </section>
  );
}
