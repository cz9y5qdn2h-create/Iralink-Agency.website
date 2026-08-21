"use client";

import { useState } from "react";
import Link from "next/link";
import ServiceDiagram from "./ServiceDiagram";
import ConfiguratorRecap from "./ConfiguratorRecap";
import ConfirmationStep from "./ConfirmationStep";
import {
  SOCLE,
  OPTIONAL_MODULES,
  EMPTY_CONTACT,
  selectedModules,
  fmtEUR,
  type ConfiguratorContact,
} from "@/lib/configurator";
import { getDipproUrl } from "@/lib/dippro";

type Step = 0 | 1 | 2 | 3;

const inputClass = "configurator-input";

export default function DipproConfigurator() {
  const [step, setStep] = useState<Step>(0);
  const [moduleIds, setModuleIds] = useState<string[]>([]);
  const [contact, setContact] = useState<ConfiguratorContact>(EMPTY_CONTACT);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const toggleModule = (id: string) => {
    setModuleIds((prev) => (prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]));
  };

  const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const canSubmit = contact.nom.trim() && contact.reseau.trim() && contact.email.trim() && contact.telephone.trim();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/configurateur", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact, moduleIds }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Erreur inconnue");
      }
      setStatus("idle");
      setStep(3);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  if (step === 3) {
    return <ConfirmationStep contact={contact} />;
  }

  return (
    <div className="configurator-layout" style={{ maxWidth: "1160px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 360px", gap: "48px", alignItems: "start" }}>
      <div>
        {/* Step indicator — purely decorative; the real step announcement is the
            visible "ÉTAPE X — ..." heading inside each panel below. */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "40px" }} aria-hidden="true">
          {["Le socle", "Options", "Vos coordonnées"].map((label, i) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  flexShrink: 0,
                  borderRadius: "50%",
                  border: `1px solid ${step >= i ? "var(--gold)" : "var(--border-dim)"}`,
                  background: step > i ? "var(--gold)" : "transparent",
                  color: step > i ? "var(--black)" : step === i ? "var(--gold-light)" : "var(--grey)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                {step > i ? "✓" : i + 1}
              </span>
              <span style={{ fontSize: "11px", color: step >= i ? "var(--white)" : "var(--grey)" }} className="configurator-step-label">
                {label}
              </span>
              {i < 2 && <span style={{ flex: 1, height: "1px", background: "var(--border-dim)" }} />}
            </div>
          ))}
        </div>

        {/* STEP 0 — Le socle */}
        {step === 0 && (
          <div className="configurator-fade">
            <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", color: "var(--gold-light)", textTransform: "uppercase" }}>
              Étape 1 — Le socle
            </span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", color: "var(--white)", margin: "14px 0 20px" }}>
              {SOCLE.name}
            </h1>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--grey)", maxWidth: "520px", marginBottom: "28px" }}>
              {SOCLE.description}
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
              {[
                "Surveillance hebdomadaire des obligations légales",
                "Génération IA des mises à jour DIP",
                "Tableau de bord de conformité temps réel",
              ].map((item) => (
                <li key={item} style={{ fontSize: "13.5px", color: "var(--grey)", paddingLeft: "20px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--gold)" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "32px" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", color: "var(--white)" }}>
                {fmtEUR(SOCLE.monthlyPrice)}
              </span>
              <span style={{ fontSize: "13px", color: "var(--grey)" }}>/mois + {fmtEUR(SOCLE.installPrice)} d&apos;installation</span>
            </div>
            <button type="button" className="btn-primary" onClick={() => setStep(1)}>
              Configurer mon offre →
            </button>
          </div>
        )}

        {/* STEP 1 — Options */}
        {step === 1 && (
          <div className="configurator-fade">
            <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", color: "var(--gold-light)", textTransform: "uppercase" }}>
              Étape 2 — Options
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(24px,3vw,34px)", color: "var(--white)", margin: "14px 0 24px" }}>
              Ajustez selon votre réseau.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {OPTIONAL_MODULES.map((m) => {
                const active = moduleIds.includes(m.id);
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => toggleModule(m.id)}
                    aria-pressed={active}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "16px",
                      textAlign: "left",
                      width: "100%",
                      background: active ? "rgba(156,138,104,0.08)" : "var(--grey-light)",
                      border: `1px solid ${active ? "var(--gold)" : "var(--border-dim)"}`,
                      padding: "20px 22px",
                      cursor: "pointer",
                      transition: "background .2s ease, border-color .2s ease",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "20px",
                        height: "20px",
                        flexShrink: 0,
                        border: `1px solid ${active ? "var(--gold)" : "var(--border-dim)"}`,
                        background: active ? "var(--gold)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--black)",
                        fontSize: "12px",
                      }}
                    >
                      {active ? "✓" : ""}
                    </span>
                    <span style={{ flex: 1 }}>
                      <span style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "var(--white)" }}>{m.name}</span>
                      <span style={{ display: "block", fontSize: "12.5px", color: "var(--grey)", marginTop: "3px" }}>{m.description}</span>
                    </span>
                    <span style={{ fontSize: "11px", color: "var(--gold-light)", flexShrink: 0, whiteSpace: "nowrap" }}>{m.pricingLabel}</span>
                  </button>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
              <button type="button" className="btn-outline" onClick={() => setStep(0)}>← Retour</button>
              <button type="button" className="btn-primary" onClick={() => setStep(2)}>Continuer →</button>
            </div>
          </div>
        )}

        {/* STEP 2 — Coordonnées */}
        {step === 2 && (
          <form onSubmit={submit} className="configurator-fade">
            <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", color: "var(--gold-light)", textTransform: "uppercase" }}>
              Étape 3 — Vos coordonnées
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(24px,3vw,34px)", color: "var(--white)", margin: "14px 0 24px" }}>
              Dernière étape.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "480px" }}>
              <input className={inputClass} type="text" name="nom" placeholder="Votre nom *" value={contact.nom} onChange={handleContact} required maxLength={300} />
              <input className={inputClass} type="text" name="reseau" placeholder="Nom de votre réseau de franchise *" value={contact.reseau} onChange={handleContact} required maxLength={300} />
              <input className={inputClass} type="email" name="email" placeholder="Email professionnel *" value={contact.email} onChange={handleContact} required maxLength={254} />
              <input className={inputClass} type="tel" name="telephone" placeholder="Téléphone *" value={contact.telephone} onChange={handleContact} required maxLength={40} />
              <input className={inputClass} type="text" name="pointsDeVente" placeholder="Nombre de points de vente (optionnel)" value={contact.pointsDeVente} onChange={handleContact} maxLength={20} />
            </div>

            {status === "error" && (
              <p style={{ fontSize: "12px", color: "#e05c5c", marginTop: "16px" }}>{errorMsg}</p>
            )}

            <div style={{ display: "flex", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
              <button type="button" className="btn-outline" onClick={() => setStep(1)}>← Retour</button>
              <button type="submit" className="btn-primary" disabled={!canSubmit || status === "loading"} style={{ opacity: !canSubmit || status === "loading" ? 0.5 : 1 }}>
                {status === "loading" ? "Envoi…" : "Envoyer la demande"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Diagram + sticky recap — visible on steps 0-2 */}
      <div>
        <ServiceDiagram activeModuleIds={moduleIds} />
        <div style={{ marginTop: "24px" }}>
          <ConfiguratorRecap activeModuleIds={moduleIds} />
        </div>
      </div>

      <p style={{ gridColumn: "1 / -1", fontSize: "12px", color: "var(--grey)", marginTop: "8px" }}>
        Vous cherchez la démo produit ?{" "}
        <a href={getDipproUrl("configurateur")} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold-light)" }}>
          Voir DIPpro en ligne ↗
        </a>
      </p>

      <style>{`
        .configurator-input {
          width: 100%;
          background: var(--black);
          border: 1px solid var(--border-dim);
          color: var(--white);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          padding: 14px 16px;
          box-sizing: border-box;
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .configurator-input::placeholder { color: var(--grey); }
        .configurator-input:focus-visible {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 2px rgba(156,138,104,0.35);
        }
        @media (max-width: 900px) {
          .configurator-layout { grid-template-columns: 1fr !important; padding-bottom: 90px; }
        }
        @media (max-width: 560px) {
          .configurator-step-label { display: none; }
        }
        .configurator-fade { animation: configuratorFadeIn .35s ease; }
        @keyframes configuratorFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
