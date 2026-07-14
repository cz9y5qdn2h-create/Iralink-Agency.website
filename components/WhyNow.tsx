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
            className="reveal reveal-delay-1"
            style={{
              background: "#1A0808",
              border: "1px solid #5A1A1A",
              padding: "48px 52px",
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
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#E87272",
                }}
              >
                Cour de cassation — 26 juin 2024
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
              Un franchiseur dont le DIP ne mentionnait pas la date de création de l&apos;enseigne
              voit son contrat annulé. Toutes les redevances perçues doivent être remboursées.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "#787878",
                lineHeight: 1.65,
              }}
            >
              La Cour confirme sa jurisprudence : une omission dans le DIP — même mineure —
              suffit à invalider l&apos;ensemble du contrat de franchise.
            </p>
          </div>

          {/* Stat block */}
          <div
            className="reveal reveal-delay-2"
            style={{
              background: "var(--grey-light)",
              padding: "48px 40px",
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
                fontFamily: "'DM Sans', sans-serif",
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
                  fontFamily: "'DM Mono', monospace",
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
          @media (max-width: 768px) {
            .why-now-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
