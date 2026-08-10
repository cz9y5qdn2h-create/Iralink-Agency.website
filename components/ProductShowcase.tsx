"use client";
import { useState } from "react";

type TabId = "dashboard" | "alertes" | "redaction" | "historique";

const SECTIONS = [
  { id: "§1", label: "Présentation du réseau", ok: true },
  { id: "§2", label: "Expérience du franchiseur", ok: true },
  { id: "§3", label: "Redevances et charges", ok: false },
  { id: "§4", label: "Réseau de franchisés", ok: true },
  { id: "§5", label: "État du marché local", ok: true },
  { id: "§6", label: "Actions en justice", ok: true },
  { id: "§7", label: "Points de vente", ok: false },
  { id: "§8", label: "Durée et renouvellement", ok: true },
];

function DashboardTab() {
  return (
    <div style={{ padding: "24px 28px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          paddingBottom: "16px",
          borderBottom: "1px solid #141414",
        }}
      >
        <div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#2E2E2E", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "5px" }}>
            Réseau actif
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "var(--white)", fontWeight: 300 }}>
            Boulangerie Martin
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#2E2E2E", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "4px" }}>
            Conformité
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", color: "#C8A96E", fontWeight: 300, lineHeight: 1 }}>
            75%
          </p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginBottom: "16px" }}>
        {SECTIONS.map((s) => (
          <div
            key={s.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "7px 10px",
              background: !s.ok ? "#C8A96E07" : "transparent",
              borderLeft: `2px solid ${!s.ok ? "#C8A96E35" : "transparent"}`,
              transition: "background 0.3s",
            }}
          >
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#2A2A2A", minWidth: "22px", flexShrink: 0 }}>
              {s.id}
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#5A5A5A", flex: 1, fontWeight: 300 }}>
              {s.label}
            </span>
            {s.ok ? (
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#4CAF80", letterSpacing: "0.06em", flexShrink: 0 }}>
                ✓ Conforme
              </span>
            ) : (
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#C8A96E", letterSpacing: "0.06em", flexShrink: 0 }}>
                ⚠ À mettre à jour
              </span>
            )}
          </div>
        ))}
      </div>

      <div style={{ paddingTop: "14px", borderTop: "1px solid #141414", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#252525", letterSpacing: "0.06em" }}>
          Analyse : il y a 47 min · Auto-hebdomadaire
        </span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#252525", letterSpacing: "0.06em" }}>
          DIP v3.2.1 · 47 franchisés
        </span>
      </div>
    </div>
  );
}

function AlertesTab() {
  const alerts = [
    {
      level: "ÉLEVÉ",
      color: "#E87272",
      bg: "#E8727210",
      border: "#E8727230",
      section: "§3 — Redevances et charges",
      desc: "Taux de redevance modifié dans CRM Salesforce (5% → 6%)",
      when: "Détecté : 14h31",
      source: "Salesforce",
    },
    {
      level: "MOYEN",
      color: "#C8A96E",
      bg: "#C8A96E08",
      border: "#C8A96E25",
      section: "§7 — Points de vente",
      desc: "Nouveau territoire ajouté : Seine-Maritime (76)",
      when: "Détecté : 14h30",
      source: "Google Drive",
    },
  ];

  return (
    <div style={{ padding: "24px 28px" }}>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#2E2E2E", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "16px" }}>
        2 alertes actives — action requise
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        {alerts.map((a, i) => (
          <div
            key={i}
            style={{
              background: a.bg,
              border: `1px solid ${a.border}`,
              padding: "16px 20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "8px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: a.color, letterSpacing: "0.16em" }}>
                {a.level}
              </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "var(--white)", fontWeight: 300 }}>
                {a.section}
              </span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#606060", marginBottom: "10px", fontWeight: 300 }}>
              {a.desc}
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#252525" }}>{a.when}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#252525" }}>Source : {a.source}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.1em",
            color: "var(--black)",
            background: "var(--gold)",
            padding: "8px 20px",
            cursor: "pointer",
          }}
        >
          Valider les 2 mises à jour →
        </div>
      </div>
    </div>
  );
}

function RedactionTab() {
  return (
    <div style={{ padding: "24px 28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#2E2E2E", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          §3 — Redevances et charges · Diff généré par IA
        </p>
        <div style={{ display: "flex", gap: "6px" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "7px", color: "#3A3A3A", border: "1px solid #1E1E1E", padding: "3px 8px" }}>Avant</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "7px", color: "#7AB8FF", border: "1px solid #7AB8FF30", padding: "3px 8px", background: "#7AB8FF08" }}>IA · Claude API</span>
        </div>
      </div>

      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", lineHeight: 1.9, letterSpacing: "0.02em" }}>
        <div style={{ background: "#E8727212", borderLeft: "3px solid #E87272", padding: "7px 14px", marginBottom: "2px" }}>
          <span style={{ color: "#E87272", marginRight: "12px" }}>−</span>
          <span style={{ color: "#4A4A4A" }}>L&apos;article 8.1 stipule que la redevance mensuelle est</span>
        </div>
        <div style={{ background: "#E8727212", borderLeft: "3px solid #E87272", padding: "7px 14px", marginBottom: "12px" }}>
          <span style={{ color: "#E87272", marginRight: "12px" }}>−</span>
          <span style={{ color: "#4A4A4A" }}>fixée à <span style={{ textDecoration: "line-through" }}>5%</span> du chiffre d&apos;affaires HT.</span>
        </div>
        <div style={{ background: "#4CAF8012", borderLeft: "3px solid #4CAF80", padding: "7px 14px", marginBottom: "2px" }}>
          <span style={{ color: "#4CAF80", marginRight: "12px" }}>+</span>
          <span style={{ color: "#909090" }}>L&apos;article 8.1 stipule que la redevance mensuelle est</span>
        </div>
        <div style={{ background: "#4CAF8012", borderLeft: "3px solid #4CAF80", padding: "7px 14px", marginBottom: "2px" }}>
          <span style={{ color: "#4CAF80", marginRight: "12px" }}>+</span>
          <span style={{ color: "#909090" }}>fixée à <strong style={{ color: "#C8A96E" }}>6%</strong> du chiffre d&apos;affaires HT, conformément à</span>
        </div>
        <div style={{ background: "#4CAF8012", borderLeft: "3px solid #4CAF80", padding: "7px 14px" }}>
          <span style={{ color: "#4CAF80", marginRight: "12px" }}>+</span>
          <span style={{ color: "#909090" }}>l&apos;avenant n°3 du 15 novembre 2024.</span>
        </div>
      </div>

      <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px solid #141414", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#7AB8FF", letterSpacing: "0.06em" }}>
          ● Conforme format loi Doubin · Art. L.330-3
        </span>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: "var(--black)", background: "var(--gold)", padding: "6px 16px", letterSpacing: "0.1em", cursor: "pointer" }}>
          Valider →
        </div>
      </div>
    </div>
  );
}

function HistoriqueTab() {
  const entries = [
    {
      version: "v3.2.1",
      date: "15 jan. 2025",
      count: 2,
      changes: ["§3 Redevances — Taux 6% (avenant n°3)", "§7 Nouveau territoire Seine-Maritime"],
      latest: true,
    },
    {
      version: "v3.1.0",
      date: "3 déc. 2024",
      count: 1,
      changes: ["§2 Expérience — Bilan annuel franchisés mis à jour"],
      latest: false,
    },
    {
      version: "v3.0.0",
      date: "18 oct. 2024",
      count: 4,
      changes: ["Mise à jour majeure — Arrêt Cour de cassation 26 juin 2024"],
      latest: false,
    },
  ];

  return (
    <div style={{ padding: "24px 28px" }}>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#2E2E2E", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "16px" }}>
        Historique des versions · Horodatage certifié
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {entries.map((e, i) => (
          <div
            key={i}
            style={{
              padding: "14px 18px",
              background: e.latest ? "#C8A96E07" : "#0C0C0C",
              borderLeft: `2px solid ${e.latest ? "#C8A96E" : "#1A1A1A"}`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "7px" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: e.latest ? "#C8A96E" : "#3A3A3A", letterSpacing: "0.06em" }}>
                  {e.version}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#252525" }}>
                  {e.count} section{e.count > 1 ? "s" : ""} mise{e.count > 1 ? "s" : ""} à jour
                </span>
              </div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#252525" }}>{e.date}</span>
            </div>
            {e.changes.map((c, j) => (
              <p key={j} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#404040", fontWeight: 300 }}>
                — {c}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid #141414" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#1E1E1E", letterSpacing: "0.08em" }}>
          12 mises à jour · Validé par T.C. · Archivé + distribué automatiquement
        </span>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");

  const TABS: { id: TabId; label: string; badge?: number }[] = [
    { id: "dashboard", label: "Tableau de bord" },
    { id: "alertes", label: "Alertes", badge: 2 },
    { id: "redaction", label: "Rédaction IA" },
    { id: "historique", label: "Historique" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":   return <DashboardTab />;
      case "alertes":     return <AlertesTab />;
      case "redaction":   return <RedactionTab />;
      case "historique":  return <HistoriqueTab />;
    }
  };

  return (
    <section className="section" style={{ background: "var(--grey-light)" }} id="conformite">
      <div className="section-inner">

        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Interface produit</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          <h2 className="t-h2 reveal reveal-delay-1" style={{ maxWidth: "480px" }}>
            Voyez votre conformité<br />en temps réel.
          </h2>
          <p className="t-body reveal reveal-delay-2" style={{ maxWidth: "300px", fontSize: "14px" }}>
            Visibilité totale sur chaque section de votre DIP, à chaque instant.
          </p>
        </div>

        {/* Product mockup window */}
        <div className="reveal" style={{ background: "#080808", border: "1px solid #1A1A1A" }}>

          {/* Title bar */}
          <div
            style={{
              background: "#0C0C0C",
              borderBottom: "1px solid #141414",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1C1C1C" }} />
            ))}
            <span
              style={{
                marginLeft: "14px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                color: "#2A2A2A",
                letterSpacing: "0.12em",
              }}
            >
              DIPpro — Réseau Boulangerie Martin
            </span>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#4CAF80",
                  animation: "showcasePulse 2.2s ease-in-out infinite",
                }}
              />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "8px", color: "#4CAF80", letterSpacing: "0.12em" }}>
                ACTIF
              </span>
            </div>
          </div>

          {/* Tab bar */}
          <div
            style={{
              background: "#0A0A0A",
              borderBottom: "1px solid #141414",
              display: "flex",
              padding: "0 16px",
              overflowX: "auto",
            }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: activeTab === tab.id ? "var(--white)" : "#2A2A2A",
                  background: "none",
                  border: "none",
                  borderBottom: `2px solid ${activeTab === tab.id ? "var(--gold)" : "transparent"}`,
                  padding: "12px 18px",
                  cursor: "pointer",
                  transition: "color 0.25s, border-color 0.25s",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {tab.label}
                {tab.badge && (
                  <span
                    style={{
                      background: "#C8A96E",
                      color: "#000",
                      fontSize: "7px",
                      padding: "1px 5px",
                      borderRadius: "10px",
                      letterSpacing: "0",
                    }}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="showcase-content" style={{ minHeight: "300px" }}>{renderContent()}</div>
        </div>

        <style>{`
          @keyframes showcasePulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
          }
          @media (max-width: 480px) {
            .showcase-content > div { padding: 16px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
