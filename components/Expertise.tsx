"use client";

import { tiltMove, tiltLeave } from "@/lib/motion3d";

const PILLARS = [
  {
    num: "01",
    title: "Conformité & juridique",
    body: "SaaS qui automatisent le respect du droit de la franchise — comme DIPpro pour l'article L.330-3.",
  },
  {
    num: "02",
    title: "Pilotage de réseau",
    body: "Tableaux de bord et outils de reporting multi-unités pour piloter un réseau franchisé au quotidien.",
  },
  {
    num: "03",
    title: "Audit & scan terrain",
    body: "Outils de scan et de contrôle qualité en point de vente, pour fiabiliser chaque unité du réseau.",
  },
];

export default function Expertise() {
  return (
    <section className="section-paper" style={{ padding: "clamp(90px,10vw,140px) 8vw" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: "64px", maxWidth: "640px" }}>
          <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-grey)" }}>CE QU&apos;ON FAIT</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(30px,3.4vw,46px)", margin: "14px 0 0", color: "var(--ink)" }}>
            Trois piliers, un seul métier&nbsp;: le SaaS pour franchises.
          </h2>
        </div>

        <div className="expertise-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", borderTop: "1px solid var(--ink-border)" }}>
          {PILLARS.map((p, i) => (
            <div
              key={p.num}
              className={`reveal reveal-delay-${i + 1} expertise-card`}
              onMouseMove={tiltMove}
              onMouseLeave={tiltLeave}
              style={{
                padding: "40px 32px",
                borderRight: i < PILLARS.length - 1 ? "1px solid var(--ink-border)" : "none",
                transformStyle: "preserve-3d",
                transition: "transform .2s ease-out",
              }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "44px", fontWeight: 700, color: "var(--gold)", marginBottom: "20px" }}>{p.num}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "23px", fontWeight: 600, margin: "0 0 12px", color: "var(--ink)" }}>{p.title}</h3>
              <p style={{ fontSize: "14.5px", lineHeight: 1.65, color: "var(--ink-muted)", margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .expertise-card { border-right: none !important; border-bottom: 1px solid var(--ink-border); }
        }
      `}</style>
    </section>
  );
}
