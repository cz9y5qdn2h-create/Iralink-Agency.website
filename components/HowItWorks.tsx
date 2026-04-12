const steps = [
  {
    num: "01",
    tag: "Intégration",
    title: "Connexion des sources",
    body: "Connectez vos sources de données existantes : emails, Google Drive, CRM, logiciel comptable. Pas de migration, pas de refonte — on se branche sur ce que vous utilisez déjà.",
  },
  {
    num: "02",
    tag: "Automatique",
    title: "Surveillance hebdomadaire",
    body: "Chaque semaine, l'IA analyse vos données et les compare avec votre DIP en cours. Nouveau franchisé, litige, changement de dirigeant — rien ne passe entre les mailles.",
  },
  {
    num: "03",
    tag: "IA",
    title: "Détection des écarts",
    body: "Si une information du DIP a changé, l'outil identifie précisément la section concernée et la nature du changement. Uniquement les mises à jour qui comptent réellement.",
  },
  {
    num: "04",
    tag: "Génération",
    title: "Rédaction de la mise à jour",
    body: "L'IA rédige automatiquement la version mise à jour en respectant le format légal du DIP. Vous recevez le diff complet : avant / après, avec les sources citées.",
  },
  {
    num: "05",
    tag: "Contrôle",
    title: "Validation en 1 clic",
    body: "Vous recevez une notification avec le résumé des modifications. Vous validez ou ajustez en un clic. Aucune mise à jour n'est publiée sans votre accord explicite.",
  },
  {
    num: "06",
    tag: "Preuve",
    title: "Distribution & archivage",
    body: "La version validée est envoyée automatiquement aux franchisés concernés et archivée avec horodatage. Audit trail complet, valeur probatoire en cas de litige.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="section"
      style={{ background: "var(--grey-light)" }}
      id="comment-ca-marche"
    >
      <div className="section-inner">

        {/* Tag */}
        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Comment ça marche</span>
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
            6 étapes. Entièrement<br />
            automatisées.
          </h2>
          <p
            className="t-body reveal reveal-delay-2"
            style={{ maxWidth: "360px" }}
          >
            Une fois configuré, DIP Pilot tourne sans intervention de votre part.
            Vous n&apos;intervenez que pour valider les mises à jour.
          </p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2px",
          }}
        >
          {steps.map((step, i) => (
            <div key={i} className={`card-step reveal reveal-delay-${(i % 3) + 1}`}>
              {/* Number + tag */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "32px",
                }}
              >
                <span className="t-mono">{step.num}</span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--grey)",
                    border: "1px solid var(--border-dim)",
                    padding: "4px 10px",
                  }}
                >
                  {step.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="t-step-title" style={{ marginBottom: "16px" }}>
                {step.title}
              </h3>

              {/* Body */}
              <p className="t-body">{step.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
