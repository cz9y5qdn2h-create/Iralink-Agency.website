import { getDipproUrl } from "@/lib/dippro";

const DIPPRO_URL = getDipproUrl("products-section");

const DIPPRO_FEATURES = [
  "Surveillance hebdomadaire des obligations légales",
  "Mise à jour automatique via IA (Claude API)",
  "Détection des écarts vs. jurisprudence en cours",
  "Distribution aux franchisés par email certifié",
  "Audit trail horodaté et juridiquement certifié",
  "Tableau de bord conformité en temps réel",
];

export default function ProductsSection() {
  return (
    <section className="section" id="produits" style={{ background: "var(--black)" }}>
      <div className="section-inner">
        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Nos produits</span>
        </div>

        <div
          className="reveal reveal-delay-1"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            alignItems: "start",
            marginBottom: "16px",
          }}
        >
          <h2 className="t-h2">
            Un écosystème SaaS<br />
            pour la franchise.
          </h2>
          <p
            className="t-body"
            style={{ paddingTop: "12px", fontSize: "15px", maxWidth: "420px" }}
          >
            Chaque produit Iralink résout un problème structurel des réseaux de franchise.
            Nous construisons l&apos;outillage que le secteur n&apos;a pas encore.
          </p>
        </div>

        {/* Products grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr",
            gap: "2px",
            marginTop: "64px",
          }}
          className="products-grid"
        >
          {/* DIPpro — featured */}
          <div
            className="reveal reveal-delay-1"
            style={{
              background: "var(--grey-light)",
              borderTop: "2px solid var(--gold)",
              padding: "48px 40px",
              position: "relative",
            }}
          >
            {/* Active badge */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#4CAF80",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#4CAF80",
                  boxShadow: "0 0 6px rgba(76,175,80,0.6)",
                }}
              />
              Disponible
            </div>

            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold)",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Produit 01
            </span>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "38px",
                fontWeight: 300,
                color: "var(--white)",
                letterSpacing: "-0.01em",
                marginBottom: "6px",
                lineHeight: 1,
              }}
            >
              DIP<span style={{ color: "var(--gold)" }}>pro</span>
            </h3>

            <p
              className="t-body"
              style={{
                fontSize: "14px",
                marginBottom: "32px",
                lineHeight: 1.6,
              }}
            >
              La conformité DIP automatisée pour les réseaux de franchise.
              Zéro risque de nullité contractuelle.
            </p>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "40px",
              }}
            >
              {DIPPRO_FEATURES.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "1px" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "#787878",
                      lineHeight: 1.5,
                    }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href={DIPPRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Accéder à DIPpro
              </a>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "var(--grey)",
                  textTransform: "uppercase",
                }}
              >
                850 €/mois · 1 350 € installation
              </span>
            </div>
          </div>

          {/* Product 02 — coming soon */}
          <div
            className="reveal reveal-delay-2"
            style={{
              background: "var(--grey-light)",
              borderTop: "2px solid #222",
              padding: "48px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#333",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Produit 02
            </span>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "28px",
                fontWeight: 300,
                color: "#444",
                marginBottom: "16px",
                lineHeight: 1.1,
              }}
            >
              En développement
            </h3>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "#333",
                lineHeight: 1.65,
                marginBottom: "auto",
              }}
            >
              Prochain outil de l&apos;écosystème Iralink pour les franchiseurs.
              Annoncé Q4 2026.
            </p>

            <div
              style={{
                marginTop: "40px",
                paddingTop: "20px",
                borderTop: "1px solid #1A1A1A",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#222",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#333",
                }}
              >
                Q4 2026
              </span>
            </div>
          </div>

          {/* Product 03 — coming soon */}
          <div
            className="reveal reveal-delay-3"
            style={{
              background: "var(--grey-light)",
              borderTop: "2px solid #1A1A1A",
              padding: "48px 32px",
              display: "flex",
              flexDirection: "column",
              opacity: 0.7,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#282828",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Produit 03
            </span>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "28px",
                fontWeight: 300,
                color: "#333",
                marginBottom: "16px",
                lineHeight: 1.1,
              }}
            >
              En développement
            </h3>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "#282828",
                lineHeight: 1.65,
                marginBottom: "auto",
              }}
            >
              Troisième outil de l&apos;écosystème Iralink.
              Vision 2027.
            </p>

            <div
              style={{
                marginTop: "40px",
                paddingTop: "20px",
                borderTop: "1px solid #161616",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#1E1E1E",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#282828",
                }}
              >
                2027
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
