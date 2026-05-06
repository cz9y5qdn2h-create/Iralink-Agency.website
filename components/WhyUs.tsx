const points = [
  {
    num: "01",
    title: "Personne ne fait ça.",
    body: "Aucun outil automatisé de gestion et mise à jour du DIP n'existe sur le marché français. Vous n'adoptez pas une nouvelle technologie — vous êtes les premiers à en avoir une.",
  },
  {
    num: "02",
    title: "Ce n'est pas optionnel.",
    body: "Le DIP n'est pas une best practice. C'est la loi. Chaque franchiseur doit le maintenir à jour tant que son réseau existe. C'est un abonnement à vie justifié par une obligation permanente.",
  },
  {
    num: "03",
    title: "Le ROI est immédiat.",
    body: "Un litige sur DIP non conforme coûte en moyenne 15 000 à 50 000€ en honoraires d'avocat. L'abonnement annuel DIP Pilot : 6 000 à 12 000€. Le calcul est simple.",
  },
  {
    num: "04",
    title: "Stack éprouvé.",
    body: "DIP Pilot est construit sur des technologies robustes et testées : n8n, Make, Claude API. Pas de prototype — un outil opérationnel qui a fait ses preuves sur d'autres automatisations métier.",
  },
];

export default function WhyUs() {
  return (
    <section className="section" style={{ background: "var(--black)" }} id="pourquoi-nous">
      <div className="section-inner">

        {/* Top: tag + h2 + market stat */}
        <div
          className="responsive-2col"
          style={{ alignItems: "start", marginBottom: "80px" }}
        >
          <div>
            <div className="section-tag reveal">
              <span className="line" />
              <span className="label">Pourquoi nous</span>
            </div>
            <h2 className="t-h2 reveal reveal-delay-1" style={{ maxWidth: "500px" }}>
              L&apos;avantage concurrentiel<br />
              qui ne disparaît pas.
            </h2>
          </div>

          {/* Market stat block */}
          <div
            className="reveal reveal-delay-2"
            style={{
              paddingTop: "60px",
            }}
          >
            <p className="t-body" style={{ marginBottom: "40px", maxWidth: "400px" }}>
              Iralink est spécialisé sur un seul sujet : l&apos;automatisation de la conformité DIP
              pour les réseaux de franchise. Pas d&apos;agence généraliste. Un produit, un problème résolu.
            </p>
            <div
              style={{
                borderLeft: "2px solid var(--gold)",
                paddingLeft: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "56px",
                  fontWeight: 300,
                  color: "var(--white)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                2 035
              </div>
              <p className="t-body" style={{ fontSize: "14px" }}>
                réseaux de franchise en France. Tous légalement obligés.
                Aucun n&apos;a d&apos;outil pour automatiser.{" "}
                <span style={{ color: "var(--white)", fontWeight: 400 }}>
                  C&apos;est maintenant que ça change.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Points */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2px",
          }}
        >
          {points.map((p, i) => (
            <div
              key={i}
              className={`card-feature reveal reveal-delay-${i + 1}`}
              style={{ padding: "40px 32px" }}
            >
              <span className="t-mono-sm" style={{ display: "block", marginBottom: "20px" }}>
                {p.num}
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
                {p.title}
              </h3>
              <p className="t-body" style={{ fontSize: "14px" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* About Théo */}
        <div
          className="reveal"
          style={{
            marginTop: "2px",
            background: "var(--grey-light)",
            padding: "48px 40px",
            display: "flex",
            gap: "48px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
            <span className="t-mono-sm" style={{ display: "block", marginBottom: "16px" }}>
              Fondateur
            </span>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "28px",
                fontWeight: 300,
                color: "var(--white)",
                marginBottom: "16px",
              }}
            >
              Théo Coutard
            </h3>
            <p className="t-body" style={{ fontSize: "14px" }}>
              Spécialiste en automatisation IA pour les entreprises. Théo a conçu
              DIP Pilot après avoir constaté que les franchiseurs font face à une obligation légale
              permanente sans aucun outil pour la tenir. Iralink apporte la réponse
              technique et juridique à ce problème structurel.
            </p>
          </div>
          <div style={{ flex: "1 1 260px", paddingTop: "52px" }}>
            <a
              href="https://www.linkedin.com/in/th%C3%A9o-coutard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline link-grey"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "var(--gold)" }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Suivre sur LinkedIn
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
