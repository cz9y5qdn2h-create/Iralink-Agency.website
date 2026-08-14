"use client";
import { useState, useEffect } from "react";

const PHASES = [
  {
    id: "01",
    label: "ANALYSE",
    status: "Scan des sources en cours…",
    color: "#C8A96E",
    lines: [
      { tag: "SRC", text: "Google Drive — synced" },
      { tag: "SRC", text: "CRM Salesforce — synced" },
      { tag: "SRC", text: "Comptabilité — synced" },
      { tag: "CMP", text: "DIP v2.4.1 chargé" },
    ],
  },
  {
    id: "02",
    label: "DÉTECTION",
    status: "2 écarts identifiés",
    color: "#E87272",
    lines: [
      { tag: "DIFF", text: "§3 — Redevances modifiées" },
      { tag: "DIFF", text: "§7 — Nouveau point de vente" },
      { tag: "WARN", text: "Mise à jour requise" },
    ],
  },
  {
    id: "03",
    label: "GÉNÉRATION IA",
    status: "Rédaction automatique…",
    color: "#7AB8FF",
    lines: [
      { tag: "AI", text: "§3 → rédigé format légal" },
      { tag: "AI", text: "§7 → rédigé format légal" },
      { tag: "DIP", text: "v2.4.2 prête à valider" },
    ],
  },
  {
    id: "04",
    label: "DISTRIBUTION",
    status: "DIP envoyé — conformité assurée",
    color: "#6EE7A0",
    lines: [
      { tag: "SEND", text: "47 franchisés notifiés" },
      { tag: "CERT", text: "Horodatage certifié" },
      { tag: "OK", text: "Conformité assurée ✓" },
    ],
  },
];

export default function LiveMonitor() {
  const [phase, setPhase] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const current = PHASES[phase];

    const lineTimer = setInterval(() => {
      setLineIndex((prev) =>
        prev < current.lines.length - 1 ? prev + 1 : prev
      );
    }, 700);

    const phaseTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setPhase((p) => (p + 1) % PHASES.length);
        setLineIndex(0);
        setVisible(true);
      }, 380);
    }, 3200);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(phaseTimer);
    };
  }, [phase]);

  const cur = PHASES[phase];

  return (
    <div
      style={{
        background: "#0C0C0C",
        border: "1px solid #252525",
        fontFamily: "'Inter', sans-serif",
        width: "100%",
        maxWidth: "440px",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: "#141414",
          borderBottom: "1px solid #1E1E1E",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2E2E2E" }} />
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2E2E2E" }} />
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2E2E2E" }} />
        <span
          style={{
            marginLeft: "14px",
            fontSize: "9px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#3A3A3A",
          }}
        >
          DIPpro — monitor
        </span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            className="live-dot"
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: cur.color,
              boxShadow: `0 0 8px ${cur.color}66`,
              transition: "background 0.4s, box-shadow 0.4s",
            }}
          />
          <span
            style={{
              fontSize: "8px",
              letterSpacing: "0.14em",
              color: cur.color,
              transition: "color 0.4s",
            }}
          >
            LIVE
          </span>
        </div>
      </div>

      {/* Phase header */}
      <div
        style={{
          padding: "18px 20px 14px",
          borderBottom: "1px solid #181818",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-5px)",
          transition: "opacity 0.32s ease, transform 0.32s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
          <span style={{ fontSize: "9px", color: "#2E2E2E", letterSpacing: "0.08em" }}>
            {cur.id} / 04
          </span>
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: cur.color,
              transition: "color 0.4s",
            }}
          >
            {cur.label}
          </span>
        </div>
        <p style={{ fontSize: "11px", color: "#B0B0B0", letterSpacing: "0.04em" }}>
          {cur.status}
        </p>
      </div>

      {/* Log lines */}
      <div
        style={{
          padding: "18px 20px 20px",
          minHeight: "116px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.32s ease",
        }}
      >
        {cur.lines.map((line, i) => (
          <div
            key={`${phase}-${i}`}
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "baseline",
              opacity: i <= lineIndex ? 1 : 0,
              transform: i <= lineIndex ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            <span
              style={{
                fontSize: "8px",
                letterSpacing: "0.1em",
                color: cur.color,
                minWidth: "34px",
                transition: "color 0.4s",
              }}
            >
              {line.tag}
            </span>
            <span style={{ fontSize: "10px", color: "#606060", letterSpacing: "0.04em" }}>
              {line.text}
            </span>
          </div>
        ))}
      </div>

      {/* Progress segments */}
      <div
        style={{
          background: "#111",
          borderTop: "1px solid #1A1A1A",
          padding: "10px 20px",
          display: "flex",
          gap: "4px",
        }}
      >
        {PHASES.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "2px",
              background: i <= phase ? cur.color : "#1E1E1E",
              transition: "background 0.5s ease",
            }}
          />
        ))}
      </div>

      <style>{`
        .live-dot { animation: livePulse 1.8s ease-in-out infinite; }
        @keyframes livePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.22; }
        }
      `}</style>
    </div>
  );
}
