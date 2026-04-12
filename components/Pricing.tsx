const plans = [
  {
    name: "Audit de conformité",
    price: "Gratuit",
    period: "30 minutes",
    body: "Analyse complète de votre DIP actuel, identification des risques, démo live de l'outil.",
    featured: false,
    cta: "Réserver l'audit",
    items: [
      "Analyse du DIP section par section",
      "Identification des risques de non-conformité",
      "Rapport des manques détectés",
      "Démo personnalisée de DIP Pilot",
    ],
  },
  {
    name: "Abonnement",
    price: "500 — 1 000 €",
    period: "par mois",
    body: "Surveillance continue, mises à jour automatiques, notifications, audit trail. Le DIP de votre réseau est toujours à jour.",
    featured: true,
    cta: "Démarrer",
    items: [
      "Surveillance hebdomadaire de toutes les sources",
      "Détection automatique des changements",
      "Génération IA des mises à jour",
      "Validation en 1 clic",
      "Distribution automatique aux franchisés",
      "Audit trail horodaté certifié",
      "Support prioritaire",
    ],
  },
  {
    name: "Setup & intégration",
    price: "1 500 — 3 000 €",
    period: "one-time",
    body: "Configuration complète, intégration de vos sources, formation de votre équipe.",
    featured: false,
    cta: "En savoir plus",
    items: [
      "Audit du DIP actuel",
      "Extraction et structuration du DIP",
      "Intégration de vos sources",
      "Configuration des workflows",
      "Formation de l'équipe",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="section" style={{ background: "var(--grey-light)" }} id="tarifs">
      <div className="section-inner">

        {/* Tag */}
        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Tarifs</span>
        </div>

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "80px",
          }}
        >
          <h2 className="t-h2 reveal reveal-delay-1" style={{ maxWidth: "520px" }}>
            Un investissement négligeable<br />
            face au risque.
          </h2>
          <p className="t-body reveal reveal-delay-2" style={{ maxWidth: "360px" }}>
            Un litige sur DIP non conforme coûte en moyenne 15 000 à 50 000€
            en frais d&apos;avocat. L&apos;abonnement annuel DIP Pilot : 6 000 à 12 000€.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2px",
            alignItems: "stretch",
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "var(--black)",
                padding: "48px 40px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                border: plan.featured ? "1px solid var(--border)" : "none",
              }}
            >
              {/* Featured label */}
              {plan.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    right: "40px",
                    background: "var(--gold)",
                    color: "var(--black)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "9px",
                    fontWeight: 400,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                  }}
                >
                  Recommandé
                </div>
              )}

              {/* Plan name */}
              <span
                className="t-mono-sm"
                style={{ display: "block", marginBottom: "24px" }}
              >
                {plan.name}
              </span>

              {/* Price */}
              <div style={{ marginBottom: "8px" }}>
                <span className="t-price">{plan.price}</span>
              </div>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  color: "var(--grey)",
                  letterSpacing: "0.08em",
                  display: "block",
                  marginBottom: "24px",
                }}
              >
                {plan.period}
              </span>

              {/* Divider */}
              <div className="section-divider" style={{ marginBottom: "24px" }} />

              {/* Body */}
              <p className="t-body" style={{ fontSize: "14px", marginBottom: "32px" }}>
                {plan.body}
              </p>

              {/* Items */}
              <ul
                className="bullet-list"
                style={{ listStyle: "none", padding: 0, marginBottom: "40px", flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}
              >
                {plan.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={plan.featured ? "btn-primary" : "btn-outline"}
                style={{ alignSelf: "flex-start" }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="reveal"
          style={{
            marginTop: "32px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 300,
            color: "var(--grey)",
            textAlign: "center",
          }}
        >
          Tarifs HT · Prix ajustés selon la taille du réseau · Sans durée minimale d&apos;engagement
        </p>
      </div>
    </section>
  );
}
