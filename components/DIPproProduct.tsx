const DIPPRO_URL = "https://iralink-agency.dippro.business";

export default function DIPproProduct() {
  return (
    <section className="section" style={{ background: "var(--grey-light)", paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="section-inner">

        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Notre produit phare</span>
        </div>

        <div
          className="reveal reveal-delay-1"
          style={{
            background: "#141414",
            border: "1px solid var(--gold)",
            padding: "48px 52px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            {/* Product name */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "48px",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: "var(--white)",
                  lineHeight: 1,
                }}
              >
                DIPpro
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  border: "1px solid var(--border)",
                  padding: "3px 10px",
                }}
              >
                SaaS · B2B
              </span>
            </div>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                color: "#A0A0A0",
                lineHeight: 1.65,
                maxWidth: "520px",
              }}
            >
              Le premier outil qui automatise intégralement la mise à jour du Document
              d&apos;Information Précontractuelle — l&apos;obligation légale permanente
              de tout réseau de franchise en France.
            </p>
          </div>

          {/* CTA */}
          <div style={{ flexShrink: 0 }}>
            <a
              href={DIPPRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ whiteSpace: "nowrap" }}
            >
              Voir DIPpro →
            </a>
          </div>
        </div>

        {/* 3 bullets */}
        <div
          className="reveal reveal-delay-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            marginTop: "2px",
          }}
        >
          {[
            { num: "2 035", label: "réseaux concernés en France" },
            { num: "0", label: "outil automatisé existant avant DIPpro" },
            { num: "Art. L.330-3", label: "Code de commerce — Loi Doubin" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "var(--black)",
                padding: "32px",
                borderTop: "1px solid var(--border-dim)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "36px",
                  fontWeight: 300,
                  color: "var(--white)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.num}
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#A0A0A0",
                  letterSpacing: "0.03em",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .dippro-card { grid-template-columns: 1fr !important; }
            .dippro-stats { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
