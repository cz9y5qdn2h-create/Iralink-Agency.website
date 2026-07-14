"use client";

import { useState } from "react";

const DIPPRO_URL = "https://iralink-agency.dippro.business";
const DIPPRO_MONTHLY = 850;
const DIPPRO_INSTALL = 1350;
const DIPPRO_ANNUAL = DIPPRO_MONTHLY * 12;
const LITIGATION_COST = 50000;

const RISK_RATES: Record<string, number> = {
  "Jamais mis à jour": 0.25,
  "Mise à jour annuelle": 0.10,
  "Mise à jour semestrielle": 0.04,
  "Surveillance continue": 0.008,
};

function fmt(n: number): string {
  return new Intl.NumberFormat("fr-FR").format(Math.round(n)) + " €";
}

function RangeSlider({
  label,
  min,
  max,
  step,
  value,
  onChange,
  display,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  display: string;
}) {
  const pct = `${((value - min) / (max - min)) * 100}%`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "22px",
            fontWeight: 300,
            color: "var(--white)",
            flexShrink: 0,
          }}
        >
          {display}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="iralink-range"
        style={
          {
            "--pct": pct,
          } as React.CSSProperties
        }
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            color: "#3A3A3A",
          }}
        >
          {min}
        </span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            color: "#3A3A3A",
          }}
        >
          {max}
        </span>
      </div>
    </div>
  );
}

function DIPSimulator() {
  const [franchises, setFranchises] = useState(20);
  const [frequency, setFrequency] = useState("Mise à jour annuelle");

  const riskRate = RISK_RATES[frequency] ?? 0.10;
  const annualRisk = Math.round(franchises * riskRate * LITIGATION_COST);
  const savings = Math.max(0, annualRisk - DIPPRO_ANNUAL);

  const riskLevel =
    annualRisk > 80000 ? "ÉLEVÉ" : annualRisk > 25000 ? "MODÉRÉ" : "FAIBLE";
  const riskColor =
    annualRisk > 80000
      ? "#E87272"
      : annualRisk > 25000
      ? "#C8A96E"
      : "#4CAF80";

  return (
    <div className="sim-content-grid">
      {/* Inputs */}
      <div
        style={{
          background: "var(--black)",
          padding: "40px 36px",
          display: "flex",
          flexDirection: "column",
          gap: "36px",
        }}
      >
        <RangeSlider
          label="Franchisés dans votre réseau"
          min={1}
          max={150}
          step={1}
          value={franchises}
          onChange={setFranchises}
          display={`${franchises} franchisé${franchises > 1 ? "s" : ""}`}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "4px",
            }}
          >
            Fréquence de mise à jour DIP actuelle
          </span>
          {Object.keys(RISK_RATES).map((f) => (
            <label
              key={f}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                padding: "10px 14px",
                background:
                  frequency === f
                    ? "rgba(200,169,110,0.05)"
                    : "transparent",
                border: `1px solid ${
                  frequency === f ? "var(--gold)" : "var(--border-dim)"
                }`,
                transition: "all 0.2s ease",
              }}
            >
              <input
                type="radio"
                name="frequency"
                value={f}
                checked={frequency === f}
                onChange={() => setFrequency(f)}
                style={{
                  accentColor: "var(--gold)",
                  cursor: "pointer",
                  width: "14px",
                  height: "14px",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: frequency === f ? "var(--white)" : "var(--grey)",
                  transition: "color 0.2s ease",
                }}
              >
                {f}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Output */}
      <div
        style={{
          background: "#0A0A0A",
          padding: "40px 36px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        {/* Risk level */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#5A5A5A",
            }}
          >
            Niveau de risque
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: riskColor + "18",
              border: `1px solid ${riskColor}50`,
              color: riskColor,
              padding: "4px 10px",
            }}
          >
            {riskLevel}
          </span>
        </div>

        {/* Big number */}
        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#3A3A3A",
              marginBottom: "10px",
            }}
          >
            Risque annuel estimé
          </p>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "52px",
              fontWeight: 300,
              color: riskColor,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              transition: "color 0.4s ease",
            }}
          >
            {fmt(annualRisk)}
          </div>
        </div>

        {/* Comparison */}
        <div
          style={{
            borderTop: "1px solid var(--border-dim)",
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                color: "var(--grey)",
              }}
            >
              Votre risque actuel
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: riskColor,
              }}
            >
              {fmt(annualRisk)}/an
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                color: "var(--grey)",
              }}
            >
              DIPpro — 850 €/mois
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: "#4CAF80",
              }}
            >
              {fmt(DIPPRO_ANNUAL)}/an + {fmt(DIPPRO_INSTALL)} installation
            </span>
          </div>
        </div>

        {/* Savings */}
        {savings > 0 && (
          <div
            style={{
              background: "rgba(76,175,80,0.06)",
              border: "1px solid rgba(76,175,80,0.2)",
              padding: "16px 20px",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#4CAF80",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Économie potentielle avec DIPpro
            </span>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "30px",
                fontWeight: 300,
                color: "#4CAF80",
              }}
            >
              {fmt(savings)}/an
            </span>
          </div>
        )}

        <a
          href={DIPPRO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ alignSelf: "flex-start" }}
        >
          Éliminer ce risque avec DIPpro
        </a>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            color: "#2E2E2E",
            lineHeight: 1.55,
          }}
        >
          Estimation basée sur la jurisprudence 2023-2024. Coût moyen d&apos;un litige DIP : 50 000 € (honoraires, remboursements, pénalités de réputation).
        </p>
      </div>
    </div>
  );
}

function ROISimulator() {
  const [franchises, setFranchises] = useState(20);
  const [monthlyFee, setMonthlyFee] = useState(1000);
  const [growth, setGrowth] = useState(10);

  const currentRevenue = franchises * monthlyFee * 12;
  const year1Revenue = (franchises + growth) * monthlyFee * 12;
  const year3Revenue = (franchises + growth * 3) * monthlyFee * 12;
  const uplift = year1Revenue - currentRevenue;
  const growthPct = Math.round((uplift / currentRevenue) * 100);

  return (
    <div className="sim-content-grid">
      {/* Inputs */}
      <div
        style={{
          background: "var(--black)",
          padding: "40px 36px",
          display: "flex",
          flexDirection: "column",
          gap: "36px",
        }}
      >
        <RangeSlider
          label="Franchisés actuels"
          min={1}
          max={200}
          step={1}
          value={franchises}
          onChange={setFranchises}
          display={`${franchises} franchisés`}
        />
        <RangeSlider
          label="Redevance mensuelle / franchisé"
          min={200}
          max={5000}
          step={50}
          value={monthlyFee}
          onChange={setMonthlyFee}
          display={
            new Intl.NumberFormat("fr-FR").format(monthlyFee) + " €/mois"
          }
        />
        <RangeSlider
          label="Croissance cible — 12 mois"
          min={1}
          max={60}
          step={1}
          value={growth}
          onChange={setGrowth}
          display={`+${growth} franchisés`}
        />
      </div>

      {/* Output */}
      <div
        style={{
          background: "#0A0A0A",
          padding: "40px 36px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        {/* Current */}
        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#3A3A3A",
              marginBottom: "8px",
            }}
          >
            CA réseau actuel
          </p>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "44px",
              fontWeight: 300,
              color: "var(--white)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {fmt(currentRevenue)}
          </div>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "var(--grey)",
              marginTop: "4px",
              display: "block",
            }}
          >
            par an
          </span>
        </div>

        {/* Projections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            borderTop: "1px solid var(--border-dim)",
            paddingTop: "20px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "8px",
              }}
            >
              Dans 12 mois
            </p>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "26px",
                fontWeight: 300,
                color: "var(--white)",
                lineHeight: 1,
              }}
            >
              {fmt(year1Revenue)}
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "8px",
              }}
            >
              Dans 3 ans
            </p>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "26px",
                fontWeight: 300,
                color: "var(--white)",
                lineHeight: 1,
              }}
            >
              {fmt(year3Revenue)}
            </div>
          </div>
        </div>

        {/* Uplift */}
        <div
          style={{
            background: "rgba(200,169,110,0.06)",
            border: "1px solid rgba(200,169,110,0.2)",
            padding: "16px 20px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold)",
              display: "block",
              marginBottom: "6px",
            }}
          >
            Potentiel additionnel sur 12 mois
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "30px",
              fontWeight: 300,
              color: "var(--gold)",
            }}
          >
            +{fmt(uplift)}/an
          </span>
          {growthPct > 0 && (
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                color: "#5A5A5A",
                marginLeft: "12px",
              }}
            >
              +{growthPct}% de croissance
            </span>
          )}
        </div>

        <a
          href="#contact"
          className="btn-primary"
          style={{ alignSelf: "flex-start" }}
        >
          Structurer votre croissance
        </a>
      </div>
    </div>
  );
}

export default function SimulateursSection() {
  const [tab, setTab] = useState<"dip" | "roi">("dip");

  return (
    <section
      className="section"
      id="simulateurs"
      style={{ background: "var(--grey-light)" }}
    >
      <div className="section-inner">
        <style>{`
          .iralink-range {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 2px;
            background: linear-gradient(
              to right,
              var(--gold) 0%,
              var(--gold) var(--pct, 50%),
              #1E1E1E var(--pct, 50%),
              #1E1E1E 100%
            );
            outline: none;
            border-radius: 1px;
            cursor: pointer;
          }
          .iralink-range::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--gold);
            cursor: pointer;
            box-shadow: 0 0 0 3px rgba(200,169,110,0.15);
            transition: box-shadow 0.2s ease;
          }
          .iralink-range::-webkit-slider-thumb:hover {
            box-shadow: 0 0 0 6px rgba(200,169,110,0.2);
          }
          .iralink-range::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--gold);
            cursor: pointer;
            border: none;
          }
          .sim-content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2px;
          }
          @media (max-width: 768px) {
            .sim-content-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Simulateurs</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "52px",
            alignItems: "end",
          }}
          className="responsive-2col"
        >
          <h2 className="t-h2 reveal reveal-delay-1">
            Calculez votre risque.<br />
            Maintenant.
          </h2>
          <p
            className="t-body reveal reveal-delay-2"
            style={{ fontSize: "14px", maxWidth: "380px" }}
          >
            Deux outils pour mesurer concrètement l&apos;enjeu de la conformité franchise
            et le potentiel de croissance de votre réseau.
          </p>
        </div>

        {/* Tab bar */}
        <div
          className="reveal"
          style={{
            display: "flex",
            borderBottom: "1px solid var(--border-dim)",
            marginBottom: "0",
          }}
        >
          {[
            { key: "dip" as const, label: "Simulateur — Risque DIP" },
            { key: "roi" as const, label: "Simulateur — ROI Réseau" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                padding: "14px 28px",
                background: "none",
                border: "none",
                borderBottom: `2px solid ${tab === t.key ? "var(--gold)" : "transparent"}`,
                color: tab === t.key ? "var(--white)" : "var(--grey)",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
                marginBottom: "-1px",
                whiteSpace: "nowrap",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === "dip" ? <DIPSimulator /> : <ROISimulator />}
      </div>
    </section>
  );
}
