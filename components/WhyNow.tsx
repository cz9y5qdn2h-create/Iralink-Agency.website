import CountUp from "@/components/CountUp";

export default function WhyNow() {
  return (
    <section className="section" style={{ background: "var(--black)" }} id="pourquoi-maintenant">
      <div className="section-inner">

        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Pourquoi maintenant</span>
        </div>

        <h2 className="t-h2 reveal reveal-delay-1" style={{ marginBottom: "60px", maxWidth: "600px" }}>
          La jurisprudence vient<br />de changer la donne.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "2px",
            alignItems: "stretch",
          }}
          className="why-now-grid"
        >
          {/* Red ruling block */}
          <div
            className="reveal reveal-delay-1 why-now-ruling"
            style={{
              background: "#1A0808",
              border: "1px solid #5A1A1A",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#E87272",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#E87272",
                }}
              >
                Jurisprudence constante — Cour de cassation
              </span>
            </div>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "22px",
                fontWeight: 300,
                color: "var(--white)",
                lineHeight: 1.45,
                marginBottom: "28px",
                maxWidth: "560px",
              }}
            >
              Un DIP incomplet ou obsolète peut suffire à faire annuler un contrat de franchise
              et à devoir rembourser l&apos;ensemble des redevances perçues.
            </p>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "#787878",
                lineHeight: 1.65,
              }}
            >
              La nullité n&apos;est pas automatique : elle suppose que le franchisé prouve que
              cette carence a vicié son consentement. Mais un DIP mal tenu à jour offre un
              boulevard à toute demande de nullité — c&apos;est un risque réel, pas une clause de style.
            </p>
          </div>

          {/* Stat block */}
          <div
            className="reveal reveal-delay-2 why-now-stat"
            style={{
              background: "var(--grey-light)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "52px",
                fontWeight: 300,
                color: "#E87272",
                lineHeight: 1,
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              <CountUp to={200000} suffix="€" duration={1600} />
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "var(--white)",
                lineHeight: 1.55,
                marginBottom: "24px",
              }}
            >
              Coût moyen d&apos;un litige DIP — honoraires, remboursements, préjudice de réputation.
            </p>
            <div
              style={{
                borderTop: "1px solid var(--border-dim)",
                paddingTop: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                DIPpro : 850 €/mois · 1 350 € installation
              </p>
            </div>
          </div>
        </div>

        <style>{`
          .why-now-ruling { padding: 48px 52px; }
          .why-now-stat { padding: 48px 40px; }
          @media (max-width: 768px) {
            .why-now-grid { grid-template-columns: 1fr !important; }
            .why-now-ruling { padding: 32px 24px; }
            .why-now-stat { padding: 32px 24px; }
          }
        `}</style>
      </div>
    </section>
  );
}
