const ITEMS = ["Conformité DIP", "Pilotage de réseau", "Audit & scan terrain", "SaaS sur-mesure franchise"];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div
      className="section-paper"
      style={{
        borderTop: "1px solid var(--ink-border)",
        borderBottom: "1px solid var(--ink-border)",
        padding: "24px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "23px", padding: "0 28px", color: "var(--ink)" }}>
              {item}
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "23px", padding: "0 28px", color: "var(--ink)" }}>—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
