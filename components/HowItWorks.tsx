const steps = [
  {
    number: "01",
    title: "Connexion des sources",
    description:
      "Connectez vos sources de données existantes : emails, Google Drive, CRM, logiciel comptable. Pas de migration, pas de refonte — on se branche sur ce que vous utilisez déjà.",
    tag: "Intégration",
  },
  {
    number: "02",
    title: "Surveillance hebdomadaire",
    description:
      "Chaque semaine, l'IA analyse vos données et les compare avec votre DIP en cours. Nouveau franchisé, litige, changement de dirigeant, mise à jour des comptes — rien ne passe entre les mailles.",
    tag: "Automatique",
  },
  {
    number: "03",
    title: "Détection des écarts",
    description:
      "Si une information du DIP a changé, l'outil identifie précisément la section concernée et la nature du changement. Pas de faux positifs — uniquement les mises à jour qui comptent réellement.",
    tag: "IA",
  },
  {
    number: "04",
    title: "Génération de la mise à jour",
    description:
      "L'IA rédige automatiquement la version mise à jour de la section concernée, en respectant le format légal du DIP. Vous recevez le diff complet : avant / après, avec les sources citées.",
    tag: "Génération",
  },
  {
    number: "05",
    title: "Validation en 1 clic",
    description:
      "Vous recevez une notification avec le résumé des modifications. Vous validez (ou ajustez) en un clic. Aucune mise à jour n'est publiée sans votre accord explicite.",
    tag: "Contrôle",
  },
  {
    number: "06",
    title: "Distribution et archivage",
    description:
      "La version validée est envoyée automatiquement aux franchisés concernés et archivée avec horodatage. Audit trail complet, valeur probatoire en cas de litige.",
    tag: "Preuve juridique",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-dark-surface" id="comment-ca-marche">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-gold uppercase tracking-widest font-semibold mb-4">
            Comment ça marche
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
            6 étapes. Entièrement{" "}
            <span className="text-gold-gradient">automatisées.</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Une fois configuré, DIP Pilot tourne sans intervention de votre part.
            Vous n&apos;intervenez que pour valider les mises à jour — le reste est géré automatiquement.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card-hover rounded-2xl bg-dark p-6 flex flex-col gap-4 group"
            >
              {/* Number + tag */}
              <div className="flex items-center justify-between">
                <div className="step-number">{step.number}</div>
                <span className="text-xs text-text-faint border border-dark-border2 rounded-full px-2.5 py-1 group-hover:border-gold/30 group-hover:text-gold/60 transition-colors">
                  {step.tag}
                </span>
              </div>

              <h3 className="text-white font-bold text-base leading-snug">
                {step.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flow visual */}
        <div className="mt-12 rounded-2xl border border-dark-border bg-dark p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {["Vos données", "Surveillance", "Détection", "Validation", "DIP à jour"].map(
              (label, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold border transition-colors ${
                        i === 4
                          ? "bg-gold text-dark border-gold"
                          : "bg-dark-surface2 text-text-muted border-dark-border2"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <span className="text-xs text-text-muted whitespace-nowrap">{label}</span>
                  </div>
                  {i < 4 && (
                    <svg
                      className="text-dark-border2 -mt-5 hidden md:block"
                      width="20"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
