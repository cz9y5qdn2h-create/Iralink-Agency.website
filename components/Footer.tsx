export default function Footer() {
  const year = new Date().getFullYear();

  const productLinks = [
    { label: "Comment ça marche", href: "#comment-ca-marche" },
    { label: "Fonctionnalités", href: "#fonctionnalites" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Audit gratuit", href: "#contact" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border-dim)",
        padding: "80px 60px 48px",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>

        {/* Top */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "80px",
            marginBottom: "80px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <a href="#" className="logo" style={{ textDecoration: "none", display: "inline-flex", marginBottom: "20px" }}>
              <span className="logo-i">I</span>
              <span className="logo-ralink">RALINK</span>
              <span className="logo-agency">agency</span>
            </a>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "var(--grey)",
                lineHeight: 1.75,
                maxWidth: "300px",
                marginBottom: "24px",
              }}
            >
              On automatise la conformité DIP des réseaux de franchise.
              Votre DIP est toujours à jour. Votre risque juridique est à zéro.
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--grey)",
              }}
            >
              Paris, France — {year}
            </p>
          </div>

          {/* Product links */}
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--grey)",
                marginBottom: "24px",
              }}
            >
              Produit
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-grey"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                    }}
                  >
                    — {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--grey)",
                marginBottom: "24px",
              }}
            >
              Contact
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <li>
                <a
                  href="mailto:theo@iralink-agency.com"
                  className="link-grey-gold"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                  }}
                >
                  — theo@iralink-agency.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/th%C3%A9o-coutard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grey"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                  }}
                >
                  — LinkedIn
                </a>
              </li>
            </ul>

            {/* Refs juridiques */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--grey)",
                marginTop: "40px",
                marginBottom: "14px",
              }}
            >
              Référence légale
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.06em",
                color: "var(--grey)",
                lineHeight: 1.8,
              }}
            >
              Art. L.330-3<br />
              Code de commerce<br />
              Loi Doubin, 31 déc. 1989
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "24px",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              color: "var(--grey)",
              letterSpacing: "0.05em",
            }}
          >
            © {year} Iralink Agency — Tous droits réservés
          </p>
          <div style={{ display: "flex", gap: "32px" }}>
            {["Mentions légales", "CGU", "Confidentialité"].map((label) => (
              <span
                key={label}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  color: "var(--grey)",
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 60px 28px 40px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </footer>
  );
}
