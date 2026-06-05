import LiveMonitor from "@/components/LiveMonitor";
import WaitlistCount from "@/components/WaitlistCount";

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
            <span className="label">SaaS B2B · Conformité DIP · France</span>
          </div>

          <h1 className="t-h1 reveal reveal-delay-1" style={{ marginBottom: "24px" }}>
            Votre DIP toujours<br />conforme. Automatiquement.
          </h1>

          <p
            className="t-body reveal reveal-delay-2"
            style={{ maxWidth: "440px", marginBottom: "48px", fontSize: "18px", lineHeight: 1.6 }}
          >
            DIPpro surveille votre réseau et met à jour votre DIP en temps réel.
          </p>

          <div
            className="reveal reveal-delay-3"
            style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}
          >
            <a href="#contact" className="btn-primary">
              Demander une démo gratuite
            </a>
            <a href="#comment-ca-marche" className="btn-ghost">
              Voir comment ça marche
              <span className="arrow">→</span>
            </a>
          </div>

          <WaitlistCount />
        </div>

        {/* Right: animated dashboard mockup */}
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
