const ITEMS = [
  {
    status: "LIVE",
    statusStyle: { color: "#0d0d0e", background: "var(--gold)" },
    title: "DIPpro",
    body: "Vérification automatisée du DIP au regard de la loi Doubin.",
  },
  {
    status: "EN COURS",
    statusStyle: { color: "var(--ink)", border: "1px solid var(--ink)", background: "transparent" },
    title: "Scan Réseau",
    body: "Audit et scan terrain des points de vente pour contrôler la conformité opérationnelle du réseau.",
  },
  {
    status: "À VENIR",
    statusStyle: { color: "var(--ink-grey-dim)", border: "1px solid var(--ink-border)", background: "transparent" },
    title: "Franchise OS",
    body: "La couche logicielle unifiée pour piloter l'ensemble d'un réseau, du siège au point de vente.",
  },
];

export default function Roadmap() {
  return (
    <section className="section-paper" style={{ padding: "clamp(90px,10vw,140px) 8vw" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: "56px", maxWidth: "640px" }}>
          <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-grey)" }}>ROADMAP</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(30px,3.4vw,46px)", margin: "14px 0 0", color: "var(--ink)" }}>
            Ce qu&apos;on construit ensuite pour les réseaux.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2px", background: "var(--ink-border)" }}>
          {ITEMS.map((item, i) => (
            <div key={item.title} className={`reveal reveal-delay-${i + 1}`} style={{ padding: "32px", background: "var(--paper)" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", padding: "4px 12px", display: "inline-block", ...item.statusStyle }}>
                {item.status}
              </span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 600, margin: "18px 0 10px", color: "var(--ink)" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--ink-muted)", margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
