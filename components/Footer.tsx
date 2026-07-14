const DIPPRO_URL = "https://iralink-agency.dippro.business";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border-dim)",
        padding: "64px 60px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          className="footer-top"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: "64px",
            marginBottom: "60px",
          }}
        >
          {/* Brand */}
          <div>
            <a href="/" style={{ textDecoration: "none", display: "block", marginBottom: "20px" }}>
              <span className="logo">
                <span className="logo-i">I</span>
                <span className="logo-ralink">RALINK</span>
                <span className="logo-agency">Agency</span>
              </span>
            </a>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "var(--grey)",
                lineHeight: 1.65,
                maxWidth: "280px",
                marginBottom: "24px",
              }}
            >
              L&apos;agence SaaS pour les franchiseurs. Nous construisons les outils
              que le secteur n&apos;a pas encore.
            </p>
            <a
              href="mailto:theo@iralink-agency.com"
              className="footer-email"
            >
              theo@iralink-agency.com
            </a>
          </div>

          {/* Products */}
          <div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold)",
                display: "block",
                marginBottom: "20px",
              }}
            >
              Produits
            </span>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <li>
                <a
                  href={DIPPRO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  DIPpro — Conformité DIP
                </a>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    color: "#282828",
                  }}
                >
                  Produit 02 — Q4 2026
                </span>
              </li>
              <li>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    color: "#1E1E1E",
                  }}
                >
                  Produit 03 — 2027
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold)",
                display: "block",
                marginBottom: "20px",
              }}
            >
              Navigation
            </span>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                { label: "Produits", href: "#produits" },
                { label: "Simulateurs", href: "#simulateurs" },
                { label: "À propos", href: "#a-propos" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-dim)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
          className="footer-bottom"
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              color: "#2A2A2A",
              letterSpacing: "0.05em",
            }}
          >
            © {year} Iralink Agency — Tous droits réservés
          </p>
          <a
            href="https://www.linkedin.com/in/th%C3%A9o-coutard"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-email"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Théo Coutard
          </a>
        </div>
      </div>

      <style>{`
        .footer-email {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: var(--grey);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.3s;
        }
        .footer-email:hover { color: var(--gold); }
        .footer-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: var(--grey);
          text-decoration: none;
          transition: color 0.3s;
          letter-spacing: 0.04em;
        }
        .footer-link:hover { color: var(--white); }
        @media (max-width: 768px) {
          footer { padding: 40px 24px 32px !important; }
          .footer-top { grid-template-columns: 1fr !important; gap: 36px !important; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
