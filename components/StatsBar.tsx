const items = [
  "2 035 réseaux de franchise en France",
  "Loi Doubin — Art. L.330-3",
  "20 jours délai légal minimum",
  "0 outil automatisé sur le marché",
  "Surveillance hebdomadaire automatique",
  "Audit trail juridiquement certifié",
  "Zéro risque de nullité contractuelle",
  "Opérationnel en 48h",
];

export default function StatsBar() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderTop: "1px solid var(--border-dim)",
        borderBottom: "1px solid var(--border-dim)",
        overflow: "hidden",
        padding: "16px 0",
        background: "var(--grey-light)",
      }}
    >
      <div className="marquee-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--grey)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
