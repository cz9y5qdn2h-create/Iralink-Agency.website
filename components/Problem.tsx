const problems = [
  {
    num: "01",
    title: "Une obligation légale sous-estimée",
    body: "La loi Doubin (art. L.330-3 du Code de commerce) oblige tout franchiseur à remettre un DIP complet et à jour au candidat franchisé au moins 20 jours avant la signature. Ce n'est pas une formalité — c'est une condition de validité du contrat.",
    aside: "20 jours minimum avant chaque signature.",
  },
  {
    num: "02",
    title: "Mis à jour trop rarement, trop tard",
    body: "En pratique, 80% des franchiseurs mettent leur DIP à jour une fois par an — quand ils n'oublient pas. Pourtant, chaque nouveau franchisé, chaque litige, chaque changement de dirigeant, chaque évolution financière exige une mise à jour immédiate.",
    aside: "1 fois/an en moyenne. La loi exige : à chaque changement.",
  },
  {
    num: "03",
    title: "Le coût d'un DIP non conforme",
    body: "Un DIP incomplet ou non actualisé peut entraîner la nullité du contrat de franchise, engager la responsabilité du franchiseur et donner lieu à des demandes de remboursement de l'ensemble des redevances versées. Les tribunaux l'ont confirmé.",
    aside: "Nullité du contrat + remboursement des redevances.",
  },
];

export default function Problem() {
  return (
    <section className="section" style={{ background: "var(--black)" }} id="probleme">
      <div className="section-inner">

        {/* Tag */}
        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Le problème</span>
        </div>

        {/* H2 */}
        <h2 className="t-h2 reveal reveal-delay-1" style={{ marginBottom: "80px", maxWidth: "680px" }}>
          Un DIP non conforme,<br />
          c&apos;est votre contrat annulé.
        </h2>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2px",
          }}
        >
          {problems.map((p, i) => (
            <div
              key={i}
              className={`card-problem reveal reveal-delay-${i + 1}`}
            >
              <span className="t-mono-sm" style={{ display: "block", marginBottom: "24px" }}>
                {p.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "22px",
                  fontWeight: 300,
                  color: "var(--white)",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </h3>
              <p className="t-body" style={{ marginBottom: "24px" }}>
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

        {/* Alert */}
        <div
          className="reveal"
          style={{
            marginTop: "2px",
            background: "var(--grey-light)",
            borderLeft: "2px solid var(--gold)",
            padding: "32px 36px",
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              color: "var(--gold)",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "24px",
              lineHeight: 1,
              flexShrink: 0,
              marginTop: "2px",
            }}
          >
            —
          </span>
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "var(--white)",
                marginBottom: "8px",
              }}
            >
              La loi ne fait pas de distinction entre oubli et négligence.
            </p>
            <p className="t-body" style={{ fontSize: "14px" }}>
              Que le DIP n&apos;ait pas été mis à jour par manque de temps, de process,
              ou simplement parce que personne n&apos;a pensé à le faire — le risque juridique est identique.
              DIP Pilot supprime ce risque à sa source.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
