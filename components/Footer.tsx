export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border-dim)",
        padding: "40px 60px",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
        className="footer-inner"
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "baseline", gap: "2px" }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "var(--white)",
              lineHeight: 1,
            }}
          >
            DIP
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "var(--gold)",
              lineHeight: 1,
            }}
          >
            pro
          </span>
        </a>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 300,
            color: "var(--grey)",
            letterSpacing: "0.05em",
          }}
        >
          © {year} DIPpro — Tous droits réservés
        </p>

        {/* Contact */}
        <a
          href="mailto:theo@iralink-agency.com"
          className="footer-email"
        >
          theo@iralink-agency.com
        </a>
      </div>

      <style>{`
        .footer-email {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 300;
          color: var(--grey);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.3s;
        }
        .footer-email:hover { color: var(--gold); }
        @media (max-width: 640px) {
          footer { padding: 32px 24px !important; }
          .footer-inner { flex-direction: column; align-items: flex-start; gap: 12px !important; }
        }
      `}</style>
    </footer>
  );
}
