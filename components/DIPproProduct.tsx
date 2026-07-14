const DIPPRO_URL = "https://iralink-agency.dippro.business?utm_source=iralink-agency.com&utm_medium=product-card";

const pipelineNodes = [
  {
    id: "sources",
    label: "Sources",
    items: ["Google Drive", "CRM", "Emails"],
    labelColor: "#4A4A4A",
  },
  {
    id: "ia",
    label: "Analyse IA",
    items: ["Claude API"],
    labelColor: "var(--gold)",
    highlight: true,
  },
  {
    id: "dip",
    label: "DIP",
    items: ["v2.4.2", "Format légal"],
    labelColor: "var(--white)",
  },
  {
    id: "franchises",
    label: "Franchisés",
    items: ["47 réseaux", "Horodaté"],
    labelColor: "#6EE7A0",
  },
];

export default function DIPproProduct() {
  return (
    <section
      className="section"
      style={{ background: "var(--grey-light)", paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="section-inner">

        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Notre produit phare</span>
        </div>

        {/* Main card */}
        <div
          className="dippro-card reveal reveal-delay-1"
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

        {/* Animated pipeline */}
        <div
          className="reveal reveal-delay-2"
          style={{
            background: "var(--black)",
            marginTop: "2px",
            padding: "32px 52px",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#2E2E2E",
              marginBottom: "22px",
            }}
          >
            Flux de données
          </p>

          <div className="pipeline-row">
            {pipelineNodes.map((node, i) => (
              <div key={node.id} style={{ display: "flex", alignItems: "center" }}>
                <div
                  className="pipeline-node"
                  style={{
                    borderColor: node.highlight ? "var(--gold)" : "#1E1E1E",
                    boxShadow: node.highlight ? "0 0 20px #C8A96E18" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "8px",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: node.labelColor,
                      display: "block",
                      marginBottom: "7px",
                    }}
                  >
                    {node.label}
                  </span>
                  {node.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        display: "block",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "11px",
                        fontWeight: 300,
                        color: "#3A3A3A",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {i < pipelineNodes.length - 1 && (
                  <div className="pipeline-connector">
                    <div className="pipeline-line">
                      <div
                        className="pipeline-dot"
                        style={{ animationDelay: `${i * 0.45}s` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3 stats */}
        <div
          className="dippro-stats reveal reveal-delay-3"
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
          .pipeline-row {
            display: flex;
            align-items: stretch;
            gap: 0;
            overflow-x: auto;
            padding-bottom: 4px;
          }
          .pipeline-node {
            border: 1px solid;
            padding: 14px 18px;
            min-width: 110px;
            flex-shrink: 0;
          }
          .pipeline-connector {
            display: flex;
            align-items: center;
            padding: 0 6px;
            flex-shrink: 0;
          }
          .pipeline-line {
            position: relative;
            width: 52px;
            height: 1px;
            background: #1A1A1A;
            overflow: hidden;
          }
          .pipeline-dot {
            position: absolute;
            top: -1px;
            left: 0;
            width: 20px;
            height: 3px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
            animation: pipelineFlow 2s ease-in-out infinite;
          }
          @keyframes pipelineFlow {
            0%   { transform: translateX(-100%); }
            100% { transform: translateX(320%); }
          }
          @media (max-width: 768px) {
            .dippro-card { grid-template-columns: 1fr !important; gap: 28px !important; }
            .dippro-stats { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
