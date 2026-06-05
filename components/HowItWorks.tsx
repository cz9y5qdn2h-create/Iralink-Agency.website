const steps = [
  {
    num: "01",
    tag: "Intégration",
    title: "Connexion",
    body: "On se branche sur vos outils : Drive, CRM, comptabilité.",
  },
  {
    num: "02",
    tag: "Automatique",
    title: "Surveillance",
    body: "L'IA analyse vos données chaque semaine et compare avec votre DIP.",
  },
  {
    num: "03",
    tag: "IA",
    title: "Détection",
    body: "Chaque section à mettre à jour est identifiée avec la nature du changement.",
  },
  {
    num: "04",
    tag: "Génération",
    title: "Rédaction",
    body: "La nouvelle version est rédigée par l'IA dans le format légal du DIP.",
  },
  {
    num: "05",
    tag: "Contrôle",
    title: "Validation",
    body: "Vous recevez un résumé. Aucune mise à jour sans votre accord.",
  },
  {
    num: "06",
    tag: "Preuve",
    title: "Archivage",
    body: "Version distribuée aux franchisés + horodatage certifié.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" style={{ background: "var(--grey-light)" }} id="comment-ca-marche">
      <div className="section-inner">

        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Comment ça marche</span>
        </div>

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
          <h2 className="t-h2 reveal reveal-delay-1" style={{ maxWidth: "480px" }}>
            6 étapes.<br />Entièrement automatisées.
          </h2>
          <p className="t-body reveal reveal-delay-2" style={{ maxWidth: "300px", fontSize: "14px" }}>
            Configuré une fois, DIPpro tourne seul. Vous n&apos;intervenez que pour valider.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2px",
          }}
        >
          {steps.map((step, i) => (
            <div key={i} className={`card-step reveal reveal-delay-${(i % 3) + 1}`}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
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
              <h3 className="t-step-title" style={{ marginBottom: "12px" }}>{step.title}</h3>
              <p className="t-body" style={{ fontSize: "14px" }}>{step.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
