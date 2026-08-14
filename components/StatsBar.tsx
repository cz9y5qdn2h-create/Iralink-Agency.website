const items = [
  "2 035 réseaux de franchise en France",
  "72 milliards € de chiffre d'affaires",
  "80 000 franchisés en activité",
  "Loi Doubin — obligation légale permanente",
  "0 outil automatisé sur le marché",
  "Iralink Agency — SaaS pour la franchise",
  "DIPpro — conformité DIP automatisée",
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
                fontFamily: "'Inter', sans-serif",
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
