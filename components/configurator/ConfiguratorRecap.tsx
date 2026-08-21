"use client";

import { useState } from "react";
import { SOCLE, selectedModules, fmtEUR } from "@/lib/configurator";

export default function ConfiguratorRecap({ activeModuleIds }: { activeModuleIds: string[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const modules = selectedModules(activeModuleIds);

  const body = (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "18px" }}>
        <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold-light)" }}>
          Votre configuration
        </span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid var(--border-dim)" }}>
        <div>
          <div style={{ fontSize: "13px", color: "var(--white)", fontWeight: 600 }}>{SOCLE.name}</div>
          <div style={{ fontSize: "10px", color: "var(--grey)", marginTop: "2px" }}>Toujours inclus</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: "13px", color: "var(--white)" }}>{fmtEUR(SOCLE.monthlyPrice)}/mois</div>
          <div style={{ fontSize: "10px", color: "var(--grey)" }}>+ {fmtEUR(SOCLE.installPrice)} install.</div>
        </div>
      </div>

      {modules.map((m) => (
        <div key={m.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid var(--border-dim)" }}>
          <div style={{ fontSize: "13px", color: "var(--white)" }}>{m.name}</div>
          <div style={{ fontSize: "11px", color: "var(--gold-light)", flexShrink: 0, marginLeft: "12px", textAlign: "right" }}>{m.pricingLabel}</div>
        </div>
      ))}

      <div style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: "11px", color: "var(--grey)" }}>Total fixe</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", color: "var(--white)" }}>
            {fmtEUR(SOCLE.monthlyPrice)}<span style={{ fontSize: "12px", color: "var(--grey)" }}>/mois</span>
          </span>
        </div>
        {modules.length > 0 && (
          <p style={{ fontSize: "10.5px", color: "var(--grey)", marginTop: "6px" }}>
            + {modules.length} option{modules.length > 1 ? "s" : ""} sur devis, confirmée{modules.length > 1 ? "s" : ""} avec vous.
          </p>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <aside className="configurator-recap-desktop" aria-label="Récapitulatif de votre configuration">
        {body}
      </aside>

      {/* Mobile: sticky bottom bar, expandable */}
      <div className="configurator-recap-mobile" aria-label="Récapitulatif de votre configuration">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "none",
            border: "none",
            color: "var(--white)",
            padding: "14px 20px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "12px", fontWeight: 600 }}>
            {modules.length > 0 ? `Socle + ${modules.length} option${modules.length > 1 ? "s" : ""}` : "Socle DIPpro"}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "var(--gold-light)" }}>
              {fmtEUR(SOCLE.monthlyPrice)}/mois
            </span>
            <span style={{ transform: mobileOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }}>▲</span>
          </span>
        </button>
        {mobileOpen && <div style={{ padding: "0 20px 20px" }}>{body}</div>}
      </div>

      <style>{`
        .configurator-recap-desktop {
          background: var(--grey-light);
          border: 1px solid var(--border-dim);
          padding: 24px;
          position: sticky;
          top: 100px;
        }
        .configurator-recap-mobile { display: none; }
        @media (max-width: 900px) {
          .configurator-recap-desktop { display: none; }
          .configurator-recap-mobile {
            display: block;
            position: fixed;
            bottom: var(--cookie-banner-h, 0px); left: 0; right: 0;
            z-index: 60;
            background: rgba(8,8,8,0.97);
            backdrop-filter: blur(16px);
            border-top: 1px solid var(--border);
            max-height: 70vh;
            overflow-y: auto;
          }
        }
      `}</style>
    </>
  );
}
