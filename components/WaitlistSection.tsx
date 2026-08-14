import WaitlistForm from "@/components/WaitlistForm";
import WaitlistCount from "@/components/WaitlistCount";

export default function WaitlistSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--black)" }}
      id="liste-attente"
    >
      <div className="section-inner">

        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Accès anticipé</span>
        </div>

        <div className="waitlist-grid">

          {/* Left — copy */}
          <div>
            <h2 className="t-h2 reveal reveal-delay-1" style={{ marginBottom: "28px", maxWidth: "480px" }}>
              Soyez parmi les premiers<br />
              à automatiser votre<br />
              conformité DIP.
            </h2>

            <p
              className="t-body reveal reveal-delay-2"
              style={{ fontSize: "15px", lineHeight: 1.65, marginBottom: "40px", maxWidth: "400px" }}
            >
              DIPpro est en cours de déploiement. Les franchiseurs qui s&apos;inscrivent
              maintenant obtiennent un accès prioritaire et un tarif early adopter verrouillé.
            </p>

            <ul
              className="reveal reveal-delay-3"
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginBottom: "40px",
              }}
            >
              {[
                "Accès prioritaire dès l'ouverture",
                "Tarif early adopter garanti à vie",
                "Onboarding personnalisé avec Théo",
                "Influence sur les fonctionnalités",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "var(--grey)",
                    paddingLeft: "20px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--gold)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-3" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 20px",
                  border: "1px solid var(--border-dim)",
                  background: "var(--grey-light)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--grey)",
                  }}
                >
                  Lancement
                </span>
                <div style={{ width: "1px", height: "14px", background: "var(--border-dim)" }} />
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "18px",
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  Q3 2026
                </span>
              </div>

              <WaitlistCount />
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            <div
              className="wl-form-box"
              style={{
                background: "var(--grey-light)",
                border: "1px solid var(--border-dim)",
                borderTop: "2px solid var(--gold)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "28px",
                }}
              >
                Inscription gratuite — Sans engagement
              </p>

              <WaitlistForm />
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .waitlist-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 80px;
          align-items: start;
        }
        .wl-form-box { padding: 40px 40px 36px; }
        @media (max-width: 900px) {
          .waitlist-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 480px) {
          .wl-form-box { padding: 24px 20px 20px; }
        }
      `}</style>
    </section>
  );
}
