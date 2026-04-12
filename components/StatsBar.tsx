const stats = [
  { value: "2 035", label: "réseaux de franchise en France" },
  { value: "20 j", label: "délai légal minimum avant signature" },
  { value: "0", label: "outil automatisé de gestion DIP" },
  { value: "100%", label: "des franchiseurs obligés par la loi" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-dark-border bg-dark-surface">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-gold-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
