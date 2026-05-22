"use client";

import { useState } from "react";

const ROLES = [
  { value: "", label: "Sélectionner votre rôle" },
  { value: "directeur-reseau", label: "Directeur réseau" },
  { value: "juriste", label: "Juriste / Avocat" },
  { value: "responsable-developpement", label: "Responsable développement" },
  { value: "dirigeant", label: "Dirigeant franchiseur" },
  { value: "autre", label: "Autre" },
];

const FRANCHISES_RANGES = [
  { value: "", label: "Nombre de franchisés" },
  { value: "1-10", label: "1 – 10 franchisés" },
  { value: "11-30", label: "11 – 30 franchisés" },
  { value: "31-100", label: "31 – 100 franchisés" },
  { value: "100+", label: "100+ franchisés" },
];

export default function WaitlistForm() {
  const [form, setForm] = useState({ nom: "", email: "", reseau: "", franchises: "", role: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom || !form.email || !form.reseau) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          background: "var(--grey-light)",
          border: "1px solid var(--gold)",
          padding: "48px 40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "16px",
          }}
        >
          Inscription confirmée
        </div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "28px",
            fontWeight: 300,
            color: "var(--white)",
            marginBottom: "16px",
          }}
        >
          Vous êtes sur la liste.
        </h3>
        <p className="t-body" style={{ maxWidth: "340px", margin: "0 auto" }}>
          Dès que DIPpro ouvre l&apos;accès, vous serez parmi les premiers notifiés.
          Nous vous contacterons à l&apos;adresse indiquée.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <style>{`
        .wl-input {
          width: 100%;
          background: var(--grey-light);
          border: 1px solid var(--border-dim);
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          padding: 14px 16px;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          -webkit-appearance: none;
          appearance: none;
        }
        .wl-input::placeholder { color: var(--grey); }
        .wl-input:focus { border-color: var(--gold); }
        .wl-input option { background: #111; color: var(--white); }
        .wl-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 560px) { .wl-row { grid-template-columns: 1fr; } }
      `}</style>

      <div className="wl-row">
        <input
          className="wl-input"
          type="text"
          name="nom"
          placeholder="Nom complet *"
          value={form.nom}
          onChange={handle}
          required
        />
        <input
          className="wl-input"
          type="email"
          name="email"
          placeholder="Email professionnel *"
          value={form.email}
          onChange={handle}
          required
        />
      </div>

      <input
        className="wl-input"
        type="text"
        name="reseau"
        placeholder="Nom de votre réseau de franchise *"
        value={form.reseau}
        onChange={handle}
        required
      />

      <div className="wl-row">
        <select className="wl-input" name="franchises" value={form.franchises} onChange={handle}>
          {FRANCHISES_RANGES.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
        <select className="wl-input" name="role" value={form.role} onChange={handle}>
          {ROLES.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#e05c5c" }}>
          Une erreur est survenue. Réessayez ou écrivez-nous à theo@iralink-agency.com.
        </p>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "loading"}
        style={{ alignSelf: "flex-start", opacity: status === "loading" ? 0.6 : 1 }}
      >
        {status === "loading" ? "Inscription…" : "Rejoindre la liste d'attente"}
      </button>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 300,
          color: "var(--grey)",
          marginTop: "4px",
        }}
      >
        Aucun engagement. Vous recevrez un accès prioritaire à l&apos;ouverture.
      </p>
    </form>
  );
}
