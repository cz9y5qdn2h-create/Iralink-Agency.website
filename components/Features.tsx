const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="1" y="1" width="6.5" height="6.5" />
        <rect x="10.5" y="1" width="6.5" height="6.5" />
        <rect x="1" y="10.5" width="6.5" height="6.5" />
        <rect x="10.5" y="10.5" width="6.5" height="6.5" />
      </svg>
    ),
    title: "Dashboard de conformité",
    body: "Vue globale de toutes les sections du DIP avec leur statut : conforme, à mettre à jour, non conforme. Un coup d'œil suffit.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="4" cy="9" r="3" />
        <circle cx="14" cy="9" r="3" />
        <line x1="7" y1="9" x2="11" y2="9" />
      </svg>
    ),
    title: "Intégration multisources",
    body: "Google Drive, emails, CRM, comptabilité — DIPpro se connecte à vos outils existants. Aucune migration de données.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1L10.8 6.8H17L12 10.3L13.8 16.1L9 12.6L4.2 16.1L6 10.3L1 6.8H7.2L9 1Z" />
      </svg>
    ),
    title: "Rédaction IA du DIP",
    body: "L'IA génère directement la nouvelle version de chaque section modifiée, en respectant le format légal et votre style.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M9 1.5C6.5 1.5 4.5 3.5 4.5 6V11.5L2.5 13.5H15.5L13.5 11.5V6C13.5 3.5 11.5 1.5 9 1.5Z" />
        <path d="M7.5 14C7.5 15.1 8.2 16 9 16C9.8 16 10.5 15.1 10.5 14" />
      </svg>
    ),
    title: "Notifications intelligentes",
    body: "Alertes uniquement quand une action est requise. Pas de bruit. Chaque notification = une décision à prendre.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="9" cy="9" r="7.5" />
        <polyline points="9,4.5 9,9 12.5,11" />
      </svg>
    ),
    title: "Audit trail horodaté",
    body: "Chaque modification est archivée avec date, heure, source et validateur. Valeur probatoire en cas de contestation juridique.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="16,9 2,15.5 5.5,9 2,2.5" />
        <line x1="5.5" y1="9" x2="16" y2="9" />
      </svg>
    ),
    title: "Distribution automatique",
    body: "Le DIP mis à jour est envoyé automatiquement aux franchisés concernés. Traçabilité de la remise incluse.",
  },
];

export default function Features() {
  return (
    <section className="section" style={{ background: "var(--black)" }} id="fonctionnalites">
      <div className="section-inner">

        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Fonctionnalités</span>
        </div>

        <h2
          className="t-h2 reveal reveal-delay-1"
          style={{ marginBottom: "80px", maxWidth: "600px" }}
        >
          Tout ce qu&apos;il faut pour<br />
          ne plus y penser.
        </h2>

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
              <div className="icon-box" style={{ marginBottom: "24px" }}>
                {f.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
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
