const TOOLS = [
  { name: "Google Drive", color: "#1a73e8" },
  { name: "Google Sheets", color: "#0f9d58" },
  { name: "Gmail", color: "#EA4335" },
  { name: "Salesforce", color: "#00a1e0" },
  { name: "HubSpot", color: "#ff7a59" },
  { name: "Outlook", color: "#0078d4" },
  { name: "Notion", color: "#e0e0e0" },
  { name: "DocuSign", color: "#ffb600" },
  { name: "n8n", color: "#e74949" },
  { name: "Make", color: "#9c27b0" },
];

export default function IntegrationsRow() {
  return (
    <div
      className="integrations-outer"
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border-dim)",
        borderBottom: "1px solid var(--border-dim)",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "8px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#2A2A2A",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            Connecté à
          </p>

          <div style={{ width: "1px", height: "20px", background: "#1A1A1A", flexShrink: 0 }} />

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "6px 14px",
                  border: "1px solid #151515",
                  transition: "border-color 0.3s",
                }}
                className="integration-badge"
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: tool.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "#3A3A3A",
                    fontWeight: 300,
                    whiteSpace: "nowrap",
                  }}
                >
                  {tool.name}
                </span>
              </div>
            ))}

            <div
              style={{
                padding: "6px 14px",
                border: "1px solid #111",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: "#1E1E1E",
                  letterSpacing: "0.1em",
                }}
              >
                + 40 outils
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .integrations-outer { padding: 32px 60px; }
        @media (max-width: 768px) { .integrations-outer { padding: 20px 24px; } }
        @media (max-width: 480px) { .integrations-outer { padding: 16px 20px; } }
        .integration-badge:hover { border-color: #2A2A2A !important; }
        @media (max-width: 640px) {
          .integration-badge span { font-size: 10px; }
        }
      `}</style>
    </div>
  );
}
