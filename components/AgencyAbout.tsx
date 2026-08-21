export default function AgencyAbout() {
  return (
    <section
      className="section"
      id="a-propos"
      style={{ background: "var(--black)" }}
    >
      <div className="section-inner">
        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">À propos</span>
        </div>

        <div
          className="responsive-2col"
          style={{ alignItems: "start", marginBottom: "64px" }}
        >
          <div>
            <h2
              className="t-h2 reveal reveal-delay-1"
              style={{ maxWidth: "520px" }}
            >
              Construire ce que<br />
              la franchise attendait.
            </h2>
          </div>

          <div className="reveal reveal-delay-2" style={{ paddingTop: "12px" }}>
            <p
              className="t-body"
              style={{ fontSize: "15px", lineHeight: 1.75, marginBottom: "24px" }}
            >
              Iralink est né d&apos;un constat simple : les réseaux de franchise font face
              à des obligations légales permanentes et complexes, sans outillage
              numérique adapté. Les franchiseurs gèrent leurs documents à la main,
              exposant leur réseau à des risques juridiques évitables.
            </p>
            <p
              className="t-body"
              style={{ fontSize: "15px", lineHeight: 1.75 }}
            >
              Notre approche : identifier les obligations structurelles des franchiseurs,
              et construire des outils SaaS ciblés qui les automatisent. Un produit,
              un problème résolu. DIPpro est le premier.
            </p>
          </div>
        </div>

        {/* Founder card */}
        <div
          className="reveal"
          style={{
            background: "var(--grey-light)",
            padding: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Bio */}
          <div style={{ gridColumn: "span 2" }} className="about-bio-col">
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold)",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Co-fondateur &amp; CTO
            </span>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "32px",
                fontWeight: 300,
                color: "var(--white)",
                marginBottom: "16px",
              }}
            >
              Théo Coutard
            </h3>
            <p
              className="t-body"
              style={{ fontSize: "14px", lineHeight: 1.7, maxWidth: "520px" }}
            >
              Spécialiste en automatisation IA appliquée aux workflows métier.
              A identifié le vide total en outillage de conformité franchise après
              analyse du cadre légal Doubin et de la jurisprudence 2023-2024.
              DIPpro est le résultat de cette analyse : un outil opérationnel,
              construit sur n8n, Make et l&apos;API Claude.
            </p>
          </div>

          {/* Expertise pillars */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {[
              { label: "Automatisation IA", detail: "n8n · Make · Claude API" },
              { label: "Droit franchise", detail: "Loi Doubin · DIP · Jurisprudence" },
              { label: "SaaS B2B", detail: "Architecture · Go-to-market" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  borderLeft: "2px solid var(--gold)",
                  paddingLeft: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "var(--white)",
                    display: "block",
                    marginBottom: "3px",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.06em",
                    color: "#5A5A5A",
                  }}
                >
                  {item.detail}
                </span>
              </div>
            ))}

            <a
              href="https://www.linkedin.com/in/th%C3%A9o-coutard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "8px",
                alignSelf: "flex-start",
              }}
            >
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Quote / vision */}
        <div
          className="reveal"
          style={{
            marginTop: "2px",
            background: "var(--grey-light)",
            borderLeft: "2px solid var(--gold)",
            padding: "32px 40px",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontWeight: 300,
              color: "var(--white)",
              lineHeight: 1.5,
              maxWidth: "760px",
            }}
          >
            &ldquo;Le secteur de la franchise génère 72 milliards d&apos;euros en France
            et regroupe 2 035 réseaux. Aucun de ces réseaux n&apos;a accès à un outil
            numérique pour gérer sa conformité légale. C&apos;est notre marché.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.14em",
              color: "var(--gold)",
              marginTop: "20px",
              textTransform: "uppercase",
            }}
          >
            — Théo Coutard, Co-fondateur &amp; CTO d&apos;Iralink Agency
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-bio-col { grid-column: 1 !important; }
        }
      `}</style>
    </section>
  );
}
