const features = [
  {
    icon: "◈",
    title: "Dashboard de conformité",
    body: "Vue globale de toutes les sections du DIP avec leur statut : conforme, à mettre à jour, non conforme. Un coup d'œil suffit.",
  },
  {
    icon: "⊕",
    title: "Intégration multisources",
    body: "Google Drive, emails, CRM, comptabilité — DIP Pilot se connecte à vos outils existants. Aucune migration de données.",
  },
  {
    icon: "◎",
    title: "Rédaction IA du DIP",
    body: "L'IA génère directement la nouvelle version de chaque section modifiée, en respectant le format légal et votre style.",
  },
  {
    icon: "◉",
    title: "Notifications intelligentes",
    body: "Alertes uniquement quand une action est requise. Pas de bruit. Chaque notification = une décision à prendre.",
  },
  {
    icon: "⊞",
    title: "Audit trail horodaté",
    body: "Chaque modification est archivée avec date, heure, source et validateur. Valeur probatoire en cas de contestation juridique.",
  },
  {
    icon: "→",
    title: "Distribution automatique",
    body: "Le DIP mis à jour est envoyé automatiquement aux franchisés concernés. Traçabilité de la remise incluse.",
  },
];

export default function Features() {
  return (
    <section className="section" style={{ background: "var(--black)" }} id="fonctionnalites">
      <div className="section-inner">

        {/* Tag */}
        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Fonctionnalités</span>
        </div>

        {/* Header */}
        <h2
          className="t-h2 reveal reveal-delay-1"
          style={{ marginBottom: "80px", maxWidth: "600px" }}
        >
          Tout ce qu&apos;il faut pour<br />
          ne plus y penser.
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className={`card-feature reveal reveal-delay-${(i % 3) + 1}`}
            >
              {/* Icon box */}
              <div className="icon-box" style={{ marginBottom: "24px" }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "20px",
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {f.icon}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "var(--white)",
                  marginBottom: "12px",
                  letterSpacing: "0.02em",
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
  );
}
