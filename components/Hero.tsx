import LiveMonitor from "@/components/LiveMonitor";

const DIPPRO_URL = "https://iralink-agency.dippro.business";

export default function Hero() {
  return (
    <section className="hero-section" style={{ alignItems: "center" }}>
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-watermark" aria-hidden="true">IA</div>

      <div
        className="hero-split"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1160px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left: text */}
        <div>
          <div className="section-tag reveal">
            <span className="line" />
            <span className="label">Paris, France — Automatisation IA</span>
          </div>

          <h1 className="t-h1 reveal reveal-delay-1" style={{ marginBottom: "24px" }}>
            Iralink Agency
          </h1>

          <p
            className="t-body reveal reveal-delay-2"
            style={{ maxWidth: "480px", marginBottom: "48px", fontSize: "18px", lineHeight: 1.65 }}
          >
            On construit DIPpro — la conformité DIP automatisée pour les franchiseurs.
          </p>

          <div
            className="reveal reveal-delay-3"
            style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}
          >
            <a href={DIPPRO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Découvrir DIPpro
            </a>
            <a href="mailto:theo@iralink-agency.com" className="btn-ghost">
              Nous contacter
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* Right: animated monitor */}
        <div className="hero-monitor reveal reveal-delay-2">
          <LiveMonitor />
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-split { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-monitor { display: none !important; }
        }
      `}</style>
    </section>
  );
}
