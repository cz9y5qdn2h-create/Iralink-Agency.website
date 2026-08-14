import Link from "next/link";

export default function CaseTeaser() {
  return (
    <section className="section-dark" style={{ padding: "clamp(90px,10vw,140px) 8vw" }}>
      <Link
        href="/etude-de-cas"
        className="reveal case-teaser-block"
        style={{
          textDecoration: "none",
          maxWidth: "1320px",
          margin: "0 auto",
          background: "#161615",
          border: "1px solid rgba(236,233,226,0.12)",
          boxShadow: "28px 28px 0 rgba(156,138,104,0.14)",
          padding: "clamp(32px,5vw,64px)",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", color: "var(--gold-light)" }}>ÉTUDE DE CAS · PRODUIT LIVE</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(26px,3vw,40px)", margin: "16px 0 16px", color: "var(--white)" }}>
            DIPpro&nbsp;: la conformité Doubin, automatisée.
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--grey)", margin: "0 0 24px", maxWidth: "460px" }}>
            Un SaaS que nous avons conçu et développé pour vérifier tout Document d&apos;Information Précontractuelle avant sa remise au franchisé.
          </p>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--gold-light)", fontWeight: 700, fontSize: "14px" }}>
            Voir l&apos;étude de cas complète →
          </span>
        </div>
        <div style={{ background: "var(--black)", border: "1px solid rgba(236,233,226,0.12)", padding: "20px" }}>
          <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", color: "var(--gold-light)", marginBottom: "12px" }}>RAPPORT DE CONFORMITÉ</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(156,138,104,0.08)", padding: "11px 13px", fontSize: "12.5px", color: "var(--white)" }}>
              <span>Présentation du réseau</span><span style={{ color: "var(--gold-light)" }}>Conforme</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(176,141,62,0.1)", padding: "11px 13px", fontSize: "12.5px", color: "var(--white)" }}>
              <span>Données financières</span><span style={{ color: "#c99b3e" }}>À vérifier</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(156,138,104,0.08)", padding: "11px 13px", fontSize: "12.5px", color: "var(--white)" }}>
              <span>Délai légal 20 jours</span><span style={{ color: "var(--gold-light)" }}>Respecté</span>
            </div>
          </div>
        </div>
      </Link>

      <style>{`
        .case-teaser-block { transition: transform .25s ease, box-shadow .25s ease; }
        .case-teaser-block:hover { transform: translate(-4px,-4px); box-shadow: 32px 32px 0 rgba(156,138,104,0.2) !important; }
        @media (max-width: 760px) {
          .case-teaser-block { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
