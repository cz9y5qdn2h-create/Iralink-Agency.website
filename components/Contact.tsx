import CalWidget from "./CalWidget";

export default function Contact() {
  return (
    <section className="section" style={{ background: "var(--grey-light)" }} id="contact">
      <div className="section-inner">
        <div className="contact-grid">
          {/* Left — copy */}
          <div>
            <div className="section-tag reveal">
              <span className="line" />
              <span className="label">Audit gratuit</span>
            </div>

            <h2 className="t-h2 reveal reveal-delay-1" style={{ marginBottom: "32px" }}>
              Votre DIP est-il<br />
              vraiment à jour<br />
              aujourd&apos;hui ?
            </h2>

            <p className="t-body reveal reveal-delay-2" style={{ marginBottom: "40px" }}>
              En 30 minutes, on analyse votre DIP actuel, on identifie les sections
              à risque, et on vous montre exactement comment DIP Pilot les maintient
              à jour automatiquement. Aucun engagement, aucun frais.
            </p>

            <ul
              className="reveal reveal-delay-3"
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                "Analyse section par section de votre DIP existant",
                "Rapport des risques de non-conformité détectés",
                "Démo live de DIP Pilot sur votre cas",
                "Recommandations prioritaires sans engagement",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "var(--grey)",
                    paddingLeft: "16px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--gold)",
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Cal.com widget */}
          <div className="reveal reveal-delay-2">
            <CalWidget />
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
