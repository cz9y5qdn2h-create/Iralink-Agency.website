import { getDipproUrl } from "@/lib/dippro";

const DIPPRO_URL = getDipproUrl("pricing");

const FEATURES = [
  "Surveillance hebdomadaire des obligations légales",
  "Génération IA des mises à jour DIP (Claude / Anthropic)",
  "Validation humaine avant diffusion",
  "Distribution par email certifié à tous vos franchisés",
  "Audit trail horodaté à valeur probante",
  "Tableau de bord de conformité temps réel",
  "Alertes automatiques à chaque changement de réseau",
  "Import de votre DIP existant inclus",
  "Onboarding guidé — opérationnel en 48h",
  "Support dédié (email + Slack)",
  "Hébergement EU — RGPD conforme",
  "Résiliation sans pénalité (préavis 30 jours)",
];

export default function PricingSection() {
  return (
    <section className="section" id="tarifs" style={{ background: "var(--black)" }}>
      <div className="section-inner">
        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Tarifs</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            alignItems: "start",
            marginBottom: "52px",
          }}
          className="responsive-2col"
        >
          <h2 className="t-h2 reveal reveal-delay-1">
            Transparent.<br />
            Sans surprise.
          </h2>
          <p
            className="t-body reveal reveal-delay-2"
            style={{ fontSize: "14px", paddingTop: "8px", maxWidth: "380px" }}
          >
            Un seul produit, un seul tarif. Pas de paliers cachés, pas de frais additionnels.
            Le coût d&apos;un litige DIP dépasse 50 000 € — DIPpro est un investissement, pas une dépense.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* Pricing card */}
          <div
            style={{
              border: "1px solid var(--gold)",
              padding: "40px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-1px",
                left: "40px",
                right: "40px",
                height: "2px",
                background: "var(--gold)",
              }}
            />

            <div
              style={{
                display: "inline-block",
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#4CAF80",
                border: "1px solid rgba(76,175,128,0.3)",
                padding: "4px 10px",
                marginBottom: "24px",
              }}
            >
              Disponible maintenant
            </div>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "28px",
                fontWeight: 300,
                color: "var(--white)",
                marginBottom: "4px",
              }}
            >
              DIPpro
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "var(--grey)",
                marginBottom: "32px",
              }}
            >
              Conformité DIP automatisée pour réseaux de franchise
            </p>

            <div
              style={{
                borderTop: "1px solid var(--border-dim)",
                paddingTop: "28px",
                marginBottom: "28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "8px" }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "48px",
                    fontWeight: 300,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  850 €
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    color: "var(--grey)",
                    textTransform: "uppercase",
                  }}
                >
                  / mois
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "var(--grey)",
                }}
              >
                + 1 350 € d&apos;installation (une seule fois)
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
              {FEATURES.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "#A0A0A0",
                      lineHeight: 1.5,
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href={DIPPRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textAlign: "center" }}
              >
                Accéder à DIPpro →
              </a>
              <a
                href="#liste-attente"
                className="btn-outline"
                style={{ textAlign: "center" }}
              >
                Rejoindre la liste d&apos;attente
              </a>
            </div>
          </div>

          {/* ROI panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                background: "var(--grey-light)",
                border: "1px solid var(--border-dim)",
                padding: "32px",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--grey)",
                  marginBottom: "20px",
                }}
              >
                Analyse de ROI — 20 franchisés
              </p>

              {[
                {
                  label: "Coût moyen d'un litige DIP",
                  value: "50 000 €",
                  color: "#E87272",
                  note: "honoraires + remboursements + réputation",
                },
                {
                  label: "Risque annuel attendu",
                  value: "100 000 €",
                  color: "#E87272",
                  note: "20 franchisés × 10 % de probabilité",
                },
                {
                  label: "Coût DIPpro (an 1)",
                  value: "11 550 €",
                  color: "var(--gold)",
                  note: "850 × 12 + 1 350 € installation",
                },
                {
                  label: "Économie potentielle",
                  value: "88 450 €",
                  color: "#4CAF80",
                  note: "risque couvert vs coût DIPpro",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--border-dim)",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        fontWeight: 300,
                        color: "var(--white)",
                        marginBottom: "2px",
                      }}
                    >
                      {row.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "9px",
                        letterSpacing: "0.08em",
                        color: "var(--grey)",
                      }}
                    >
                      {row.note}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "20px",
                      fontWeight: 300,
                      color: row.color,
                      flexShrink: 0,
                      marginLeft: "16px",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "var(--grey-light)",
                border: "1px solid var(--border-dim)",
                padding: "24px 32px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "17px",
                  fontWeight: 300,
                  color: "var(--white)",
                  marginBottom: "8px",
                  lineHeight: 1.4,
                }}
              >
                &laquo;&nbsp;La Cour de cassation (26 juin 2024) : une omission mineure suffit à invalider l&apos;ensemble du contrat.&nbsp;&raquo;
              </p>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--grey)",
                }}
              >
                Jurisprudence récente — Arrêt n° 22-18.786
              </p>
            </div>

            <div
              style={{
                background: "var(--grey-light)",
                border: "1px solid var(--border-dim)",
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
                style={{ color: "var(--gold)", flexShrink: 0 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "var(--white)",
                    marginBottom: "2px",
                  }}
                >
                  Sans engagement — résiliation 30 jours
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "var(--grey)",
                  }}
                >
                  Vos données vous appartiennent. Export PDF + JSON à tout moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
