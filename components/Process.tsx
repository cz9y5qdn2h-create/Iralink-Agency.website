const STEPS = [
  { num: "01", title: "Cadrage & audit métier", body: "On comprend votre réseau, ses contraintes juridiques et opérationnelles." },
  { num: "02", title: "Design produit", body: "Interfaces pensées pour des utilisateurs métier, pas pour des développeurs." },
  { num: "03", title: "Développement", body: "Un SaaS sur-mesure, robuste, pensé pour tenir la charge d'un réseau qui grandit." },
  { num: "04", title: "Déploiement & scale", body: "On accompagne le déploiement sur l'ensemble du réseau et on fait évoluer le produit." },
];

export default function Process() {
  return (
    <section className="section-dark" style={{ padding: "clamp(90px,10vw,140px) 8vw" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: "56px", maxWidth: "640px" }}>
          <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", color: "var(--gold-light)" }}>MÉTHODE</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(30px,3.4vw,46px)", margin: "14px 0 0", color: "var(--white)" }}>
            De l&apos;audit métier au SaaS déployé.
          </h2>
        </div>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", borderTop: "1px solid rgba(236,233,226,0.16)" }}>
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${i + 1}`}
              style={{ padding: "32px 24px", borderRight: i < STEPS.length - 1 ? "1px solid rgba(236,233,226,0.16)" : "none" }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", color: "var(--gold)", marginBottom: "14px" }}>{s.num}</div>
              <h4 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 8px", color: "var(--white)" }}>{s.title}</h4>
              <p style={{ fontSize: "13.5px", lineHeight: 1.6, color: "var(--grey)", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .process-grid > div { border-right: none !important; border-bottom: 1px solid rgba(236,233,226,0.16); }
        }
      `}</style>
    </section>
  );
}
