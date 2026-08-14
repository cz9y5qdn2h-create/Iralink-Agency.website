const VOICES = [
  {
    quote: "En France, il y a environ 4 500 franchises qui ne sont pas conformes en ce moment.",
    role: "Expert dans le secteur de la franchise",
  },
  {
    quote: "On a besoin qu'un partenaire comprenne notre métier avant de coder la moindre ligne. Ça change tout.",
    role: "Responsable développement réseau, franchise services",
  },
];

export default function FieldVoices() {
  return (
    <section className="section-paper" style={{ padding: "clamp(90px,10vw,140px) 8vw" }}>
      <div className="reveal" style={{ maxWidth: "1320px", margin: "0 auto 40px" }}>
        <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-grey)" }}>SUR LE TERRAIN</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(26px,3vw,38px)", margin: "14px 0 0", color: "var(--ink)", maxWidth: "640px" }}>
          Ce qu&apos;on entend en échangeant avec les réseaux de franchise.
        </h2>
      </div>
      <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "2px", background: "var(--ink-border)" }}>
        {VOICES.map((v, i) => (
          <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ background: "var(--paper)", padding: "40px" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "44px", color: "var(--gold)", lineHeight: 0.5, marginBottom: "18px" }}>&ldquo;</div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "19px", lineHeight: 1.6, margin: "0 0 20px", color: "var(--ink)" }}>
              {v.quote}
            </p>
            <span style={{ fontSize: "13px", color: "var(--ink-grey)" }}>{v.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
