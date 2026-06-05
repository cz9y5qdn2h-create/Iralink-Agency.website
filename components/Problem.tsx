const problems = [
  {
    num: "01",
    title: "Une obligation légale permanente",
    body: "La loi Doubin impose la remise d'un DIP complet et à jour 20 jours avant toute signature. Ce n'est pas une formalité — c'est une condition de validité du contrat.",
    aside: "20 jours minimum avant chaque signature.",
  },
  {
    num: "02",
    title: "Mis à jour trop rarement",
    body: "80% des franchiseurs mettent leur DIP à jour une fois par an. Pourtant, chaque nouveau franchisé, litige ou changement exige une mise à jour immédiate.",
    aside: "1 fois/an en moyenne. La loi exige : à chaque changement.",
  },
  {
    num: "03",
    title: "Le coût d'un DIP non conforme",
    body: "Un DIP incomplet peut entraîner la nullité du contrat et le remboursement de toutes les redevances versées. Les tribunaux l'ont confirmé.",
    aside: "Nullité du contrat + remboursement des redevances.",
  },
];

export default function Problem() {
  return (
    <section className="section" style={{ background: "var(--black)" }} id="probleme">
      <div className="section-inner">

        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Le problème</span>
        </div>

        <h2 className="t-h2 reveal reveal-delay-1" style={{ marginBottom: "80px", maxWidth: "680px" }}>
          Un DIP non conforme,<br />
          c&apos;est votre contrat annulé.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2px",
          }}
        >
          {problems.map((p, i) => (
            <div key={i} className={`card-problem reveal reveal-delay-${i + 1}`}>
              <span className="t-mono-sm" style={{ display: "block", marginBottom: "24px" }}>
                {p.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "22px",
                  fontWeight: 300,
                  color: "var(--white)",
                  marginBottom: "14px",
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </h3>
              <p className="t-body" style={{ fontSize: "14px", marginBottom: "24px" }}>
                {p.body}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  color: "var(--gold)",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border-dim)",
                }}
              >
                — {p.aside}
              </p>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            marginTop: "2px",
            background: "var(--grey-light)",
            borderLeft: "2px solid var(--gold)",
            padding: "28px 36px",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--white)",
            }}
          >
            La loi ne distingue pas l&apos;oubli de la négligence.{" "}
            <span style={{ color: "#A0A0A0", fontWeight: 300 }}>
              DIP Pilot supprime ce risque à sa source.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
