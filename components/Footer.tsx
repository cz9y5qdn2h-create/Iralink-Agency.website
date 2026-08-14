import Link from "next/link";
import { getDipproUrl } from "@/lib/dippro";

const DIPPRO_URL = getDipproUrl("footer");

export default function Footer() {
  return (
    <footer
      className="section-paper"
      style={{
        position: "relative",
        borderTop: "1px solid var(--ink-border)",
        padding: "60px 8vw 40px",
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <div style={{ maxWidth: "280px" }}>
          <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "baseline", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "19px", color: "var(--ink)" }}>IRALINK</span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: "16px", color: "var(--ink-grey)" }}>agency</span>
          </Link>
          <p style={{ fontSize: "12.5px", color: "var(--ink-grey)", margin: 0, lineHeight: 1.6 }}>
            L&apos;agence spécialisée dans le SaaS pour réseaux de franchise.
          </p>
        </div>

        <div style={{ display: "flex", gap: "56px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", color: "var(--ink-grey)", marginBottom: "4px" }}>NAVIGATION</span>
            <Link href="/" className="footer-ink-link" style={{ fontSize: "13.5px", color: "var(--ink)", textDecoration: "none" }}>Accueil</Link>
            <Link href="/etude-de-cas" className="footer-ink-link" style={{ fontSize: "13.5px", color: "var(--ink)", textDecoration: "none" }}>Étude de cas</Link>
            <Link href="/services" className="footer-ink-link" style={{ fontSize: "13.5px", color: "var(--ink)", textDecoration: "none" }}>Services</Link>
            <Link href="/#tarifs" className="footer-ink-link" style={{ fontSize: "13.5px", color: "var(--ink)", textDecoration: "none" }}>Tarifs</Link>
            <Link href="/blog" className="footer-ink-link" style={{ fontSize: "13.5px", color: "var(--ink)", textDecoration: "none" }}>Blog</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", color: "var(--ink-grey)", marginBottom: "4px" }}>PRODUIT</span>
            <a href={DIPPRO_URL} target="_blank" rel="noopener noreferrer" className="footer-ink-link" style={{ fontSize: "13.5px", color: "var(--ink)", textDecoration: "none" }}>
              Accéder à DIPpro ↗
            </a>
            <Link href="/#liste-attente" className="footer-ink-link" style={{ fontSize: "13.5px", color: "var(--ink)", textDecoration: "none" }}>Liste d&apos;attente</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", color: "var(--ink-grey)", marginBottom: "4px" }}>CONTACT</span>
            <a href="mailto:contact@iralink.agency" style={{ fontSize: "13.5px", color: "var(--ink)" }}>contact@iralink.agency</a>
            <Link href="/contact" className="footer-ink-link" style={{ fontSize: "13.5px", color: "var(--ink)", textDecoration: "none" }}>Prendre RDV</Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1320px", margin: "40px auto 0", paddingTop: "24px", borderTop: "1px solid var(--ink-border)", fontSize: "12px", color: "var(--ink-grey-dim)" }}>
        © {new Date().getFullYear()} Iralink Agency. Tous droits réservés.
      </div>

      <style>{`
        .footer-ink-link { transition: color .2s ease; }
        .footer-ink-link:hover { color: var(--gold) !important; }
      `}</style>
    </footer>
  );
}
