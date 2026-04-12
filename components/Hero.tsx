export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        padding: "0 60px 140px",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div className="hero-grid-bg" />

      {/* Radial glow — top right */}
      <div className="hero-glow" />

      {/* Watermark */}
      <div className="hero-watermark" aria-hidden="true">IA</div>

      {/* Content — bottom left */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "860px" }}>

        {/* Section tag */}
        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Pour les réseaux de franchise — Loi Doubin, art. L.330-3</span>
        </div>

        {/* H1 */}
        <h1
          className="t-h1 reveal reveal-delay-1"
          style={{ marginBottom: "32px" }}
        >
          Votre DIP<br />
          toujours conforme.
        </h1>

        {/* Subtext */}
        <p
          className="t-body reveal reveal-delay-2"
          style={{ maxWidth: "520px", marginBottom: "48px" }}
        >
          DIP Pilot surveille vos données en continu, détecte chaque changement,
          et met à jour votre Document d&apos;Information Précontractuelle automatiquement.{" "}
          <span className="t-body-strong" style={{ display: "inline" }}>
            Zéro oubli. Zéro risque juridique.
          </span>
        </p>

        {/* CTAs */}
        <div
          className="reveal reveal-delay-3"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <a href="#contact" className="btn-primary">
            Obtenir mon audit gratuit
          </a>
          <a href="#comment-ca-marche" className="btn-ghost">
            Voir comment ça marche
            <span className="arrow">→</span>
          </a>
        </div>

        {/* Trust micro-copy */}
        <p
          className="reveal reveal-delay-4"
          style={{
            marginTop: "32px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 300,
            color: "var(--grey)",
            letterSpacing: "0.05em",
          }}
        >
          Audit 100% gratuit · 30 minutes · Sans engagement
        </p>
      </div>

      {/* Responsive mobile padding fix */}
      <style>{`
        @media (max-width: 768px) {
          section { padding: 0 28px 90px !important; min-height: 100svh !important; }
        }
      `}</style>
    </section>
  );
}
