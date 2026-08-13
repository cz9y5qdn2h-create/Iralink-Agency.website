import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import WaitlistForm from "@/components/WaitlistForm";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Liste d'attente DIPpro — Accès anticipé | DIPpro",
  description:
    "DIPpro est le premier outil qui automatise intégralement la conformité DIP des réseaux de franchise. Inscrivez-vous pour un accès prioritaire dès l'ouverture.",
  keywords: [
    "DIPpro",
    "liste attente DIP",
    "automatisation DIP franchise",
    "conformité DIP",
    "loi Doubin",
    "DIPpro",
    "Théo Coutard",
  ],
  openGraph: {
    title: "DIPpro arrive — Accès anticipé | DIPpro",
    description:
      "Soyez parmi les premiers à accéder à DIPpro, l'outil qui automatise la conformité DIP de votre réseau de franchise.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: `${SITE_URL}/waitlist`,
  },
};

const features = [
  {
    num: "01",
    title: "Mise à jour automatique",
    body: "Chaque section de votre DIP est surveillée en continu. Dès qu'une donnée change — jurisprudence, chiffres réseau, marché — DIPpro génère et intègre la mise à jour.",
  },
  {
    num: "02",
    title: "Conformité permanente",
    body: "Alertes en temps réel sur les sections à risque. Historique complet des versions pour prouver votre conformité à tout moment en cas de litige.",
  },
  {
    num: "03",
    title: "Zéro intervention manuelle",
    body: "Plus de gestion chronophage avec votre cabinet juridique. DIPpro produit un DIP structuré, conforme Loi Doubin, prêt à valider.",
  },
];

const dipSections = [
  { label: "Présentation du réseau", status: "ok", updated: "Il y a 2h" },
  { label: "État du marché local", status: "ok", updated: "Il y a 6h" },
  { label: "Données financières réseau", status: "warning", updated: "Mise à jour en cours" },
  { label: "Historique des litiges", status: "ok", updated: "Il y a 1j" },
  { label: "Obligations du franchisé", status: "ok", updated: "Il y a 3j" },
  { label: "Comptes annuels", status: "pending", updated: "En attente vérification" },
];

export default function WaitlistPage() {
  return (
    <>
      <CustomCursor />
      <ScrollReveal />
      <Nav />

      <main>
        {/* Hero */}
        <section className="section page-hero" style={{ background: "var(--black)" }}>
          <div className="section-inner">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "80px",
                alignItems: "center",
              }}
              className="waitlist-hero-grid"
            >
              {/* Left */}
              <div>
                <div className="section-tag reveal">
                  <span className="line" />
                  <span className="label">Accès anticipé</span>
                </div>
                <h1
                  className="t-h1 reveal reveal-delay-1"
                  style={{ marginBottom: "28px" }}
                >
                  DIPpro arrive.<br />
                  Soyez les premiers.
                </h1>
                <p className="t-body reveal reveal-delay-2" style={{ marginBottom: "40px", maxWidth: "420px" }}>
                  DIPpro est le premier outil qui automatise intégralement la conformité de votre
                  Document d&apos;Information Précontractuelle — l&apos;obligation légale permanente
                  de tout franchiseur en France.
                </p>
                <div
                  className="reveal reveal-delay-3"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(200,169,110,0.08)",
                    border: "1px solid rgba(200,169,110,0.25)",
                    padding: "10px 18px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--gold)",
                      display: "inline-block",
                      animation: "pulse-dot 2s infinite",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    Lancement prévu — Q3 2026
                  </span>
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="reveal reveal-delay-2">
                <div className="dip-mockup">
                  <div className="dip-mockup-header">
                    <div className="dip-mockup-dots">
                      <span /><span /><span />
                    </div>
                    <span className="dip-mockup-title">DIPpro — Tableau de bord</span>
                    <div className="dip-status-badge">
                      <span className="dip-status-dot ok" />
                      Conforme
                    </div>
                  </div>

                  <div className="dip-mockup-network">
                    <span className="dip-label">Réseau</span>
                    <span className="dip-value">Réseau Exemple SA</span>
                    <span className="dip-label" style={{ marginLeft: "auto" }}>Dernière MàJ</span>
                    <span className="dip-value">Aujourd&apos;hui, 09:42</span>
                  </div>

                  <div className="dip-sections">
                    {dipSections.map((s, i) => (
                      <div key={i} className="dip-section-row">
                        <div className={`dip-status-dot ${s.status}`} style={{ flexShrink: 0 }} />
                        <span className="dip-section-label">{s.label}</span>
                        <span className="dip-section-meta">{s.updated}</span>
                      </div>
                    ))}
                  </div>

                  <div className="dip-mockup-footer">
                    <span className="dip-label">Surveillance automatique</span>
                    <div className="dip-toggle-on">
                      <span />
                    </div>
                    <span className="dip-label" style={{ marginLeft: "auto" }}>
                      Prochain scan dans 47 min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section" style={{ background: "var(--grey-light)" }}>
          <div className="section-inner">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2px",
              }}
              className="waitlist-features-grid"
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`card-feature reveal reveal-delay-${i + 1}`}
                  style={{ padding: "40px 32px" }}
                >
                  <span className="t-mono-sm" style={{ display: "block", marginBottom: "20px" }}>
                    {f.num}
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
                    {f.title}
                  </h3>
                  <p className="t-body" style={{ fontSize: "14px" }}>
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist form */}
        <section className="section" style={{ background: "var(--black)" }} id="inscription">
          <div className="section-inner">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.4fr",
                gap: "80px",
                alignItems: "start",
              }}
              className="waitlist-form-grid"
            >
              {/* Left — copy */}
              <div>
                <div className="section-tag reveal">
                  <span className="line" />
                  <span className="label">Liste d&apos;attente</span>
                </div>
                <h2 className="t-h2 reveal reveal-delay-1" style={{ marginBottom: "24px" }}>
                  Réservez votre<br />
                  accès prioritaire.
                </h2>
                <p className="t-body reveal reveal-delay-2" style={{ marginBottom: "40px" }}>
                  Dès que DIPpro ouvre, vous recevrez une invitation personnelle avant
                  tout le monde. Aucun engagement, aucun paiement requis.
                </p>

                <div className="reveal reveal-delay-3">
                  <div
                    style={{
                      borderLeft: "2px solid var(--gold)",
                      paddingLeft: "24px",
                      marginBottom: "32px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "42px",
                        fontWeight: 300,
                        color: "var(--white)",
                        lineHeight: 1,
                        marginBottom: "8px",
                      }}
                    >
                      2 035
                    </div>
                    <p className="t-body" style={{ fontSize: "13px" }}>
                      réseaux de franchise en France.
                      <br />
                      Tous légalement obligés. Aucun outil.
                    </p>
                  </div>

                  <div
                    style={{
                      borderLeft: "2px solid var(--border-dim)",
                      paddingLeft: "24px",
                    }}
                  >
                    <p className="t-body" style={{ fontSize: "13px", marginBottom: "12px" }}>
                      Un litige sur DIP non conforme coûte en moyenne
                    </p>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "36px",
                        fontWeight: 300,
                        color: "var(--gold)",
                        lineHeight: 1,
                      }}
                    >
                      15 000 – 50 000 €
                    </div>
                    <p className="t-body" style={{ fontSize: "12px", marginTop: "8px" }}>
                      en honoraires d&apos;avocat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div className="reveal reveal-delay-2">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Dashboard mockup */
        .dip-mockup {
          background: #0d0d0d;
          border: 1px solid var(--border-dim);
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.5);
        }
        .dip-mockup-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-dim);
          background: #0a0a0a;
        }
        .dip-mockup-dots { display: flex; gap: 5px; }
        .dip-mockup-dots span {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--border-dim);
          display: block;
        }
        .dip-mockup-title {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--grey);
          margin-left: 4px;
        }
        .dip-status-badge {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4ade80;
          background: rgba(74,222,128,0.08);
          border: 1px solid rgba(74,222,128,0.2);
          padding: 3px 10px;
        }
        .dip-status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }
        .dip-status-dot.ok { background: #4ade80; }
        .dip-status-dot.warning { background: #f59e0b; }
        .dip-status-dot.pending { background: var(--grey); }
        .dip-mockup-network {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-bottom: 1px solid var(--border-dim);
          background: #0b0b0b;
        }
        .dip-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--grey);
        }
        .dip-value {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: var(--white);
        }
        .dip-sections { padding: 8px 0; }
        .dip-section-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: background 0.2s;
        }
        .dip-section-row:hover { background: rgba(255,255,255,0.02); }
        .dip-section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 300;
          color: var(--white);
          flex: 1;
        }
        .dip-section-meta {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--grey);
          white-space: nowrap;
        }
        .dip-mockup-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-top: 1px solid var(--border-dim);
          background: #0a0a0a;
        }
        .dip-toggle-on {
          width: 28px; height: 14px;
          background: var(--gold);
          border-radius: 7px;
          position: relative;
          flex-shrink: 0;
        }
        .dip-toggle-on span {
          position: absolute;
          right: 2px; top: 2px;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #000;
          display: block;
        }

        @media (max-width: 900px) {
          .waitlist-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .waitlist-features-grid {
            grid-template-columns: 1fr !important;
          }
          .waitlist-form-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 768px) {
          .dip-mockup-network { flex-wrap: wrap; gap: 4px 12px; }
        }
      `}</style>
    </>
  );
}
