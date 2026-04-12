const plans = [
  {
    name: "Audit de conformité",
    price: "Gratuit",
    period: "— 30 minutes",
    description:
      "Analyse complète de votre DIP actuel, identification des manques, et démo live de l'outil.",
    highlight: false,
    cta: "Réserver mon audit",
    ctaHref: "#audit",
    features: [
      "Analyse du DIP existant section par section",
      "Identification des risques de non-conformité",
      "Rapport des manques détectés",
      "Démo personnalisée de DIP Pilot",
      "Recommandations prioritaires",
    ],
    note: null,
  },
  {
    name: "Abonnement",
    price: "500€",
    period: "– 1 000€ / mois",
    description:
      "Surveillance continue, mises à jour automatiques, notifications, audit trail. Le DIP de votre réseau est toujours à jour.",
    highlight: true,
    cta: "Démarrer",
    ctaHref: "#audit",
    features: [
      "Surveillance hebdomadaire de toutes les sources",
      "Détection automatique des changements",
      "Génération IA des mises à jour",
      "Notifications et validation en 1 clic",
      "Distribution automatique aux franchisés",
      "Audit trail horodaté et certifié",
      "Support prioritaire",
    ],
    note: "Prix selon taille du réseau",
  },
  {
    name: "Setup & intégration",
    price: "1 500€",
    period: "– 3 000€ (one-time)",
    description:
      "Configuration complète de l'outil, intégration de vos sources de données, formation de votre équipe.",
    highlight: false,
    cta: "En savoir plus",
    ctaHref: "#audit",
    features: [
      "Audit du DIP actuel",
      "Extraction et structuration du DIP",
      "Intégration de vos sources (Drive, CRM…)",
      "Configuration des workflows",
      "Formation de l'équipe",
      "Documentation complète",
    ],
    note: "Généralement couplé à l'abonnement",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-dark-surface" id="tarifs">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-gold uppercase tracking-widest font-semibold mb-4">
            Tarifs
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
            Un investissement{" "}
            <span className="text-gold-gradient">négligeable</span>
            <br />
            face au risque.
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Un contrat de franchise annulé pour DIP non conforme peut coûter des dizaines
            de milliers d&apos;euros en frais juridiques et remboursements. L&apos;abonnement mensuel,
            lui, coûte moins que la préparation d&apos;un seul acte notarié.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl flex flex-col p-6 md:p-8 ${
                plan.highlight
                  ? "bg-dark border border-gold/40 gold-glow"
                  : "card-hover bg-dark"
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="btn-gold text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Recommandé
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-3">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`text-3xl font-black ${
                      plan.highlight ? "text-gold-gradient" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-text-muted text-sm">{plan.period}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="text-gold flex-shrink-0 mt-0.5"
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              {plan.note && (
                <p className="text-xs text-text-faint mb-4 italic">{plan.note}</p>
              )}

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`w-full text-center text-sm font-bold px-6 py-3 rounded-xl transition-all ${
                  plan.highlight
                    ? "btn-gold"
                    : "btn-outline-gold"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* ROI note */}
        <p className="text-center text-text-muted text-sm mt-10">
          Tarifs HT. Engagement mensuel sans durée minimale après le setup.{" "}
          <span className="text-text">
            Prix ajustés selon la taille du réseau et le nombre de franchisés.
          </span>
        </p>
      </div>
    </section>
  );
}
