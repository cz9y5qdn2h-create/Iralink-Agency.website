"use client";

import { useState } from "react";
import WaitlistCount from "@/components/WaitlistCount";

const TRUST = [
  { icon: "✓", text: "Accès prioritaire à l'ouverture" },
  { icon: "✓", text: "Démo personnalisée offerte" },
  { icon: "✓", text: "Sans engagement, résiliable" },
];

export default function ConversionSection() {
  const [form, setForm] = useState({ nom: "", email: "", reseau: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handle = (e: React.ChangeEvent<HTMLInputElement>) =>
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

  return (
    <section
      className="section"
      id="liste-attente"
      style={{
        background: "var(--black)",
        borderTop: "2px solid var(--gold)",
      }}
    >
      <div
        className="section-inner"
        style={{ maxWidth: "720px", margin: "0 auto" }}
      >
        <div className="section-tag reveal">
          <span className="line" />
          <span className="label">Accès anticipé — DIPpro</span>
        </div>

        {status === "success" ? (
          <div
            className="reveal"
            style={{
              background: "var(--grey-light)",
              border: "1px solid var(--gold)",
              padding: "56px 48px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                color: "var(--gold)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "32px",
                fontWeight: 300,
                color: "var(--white)",
                marginBottom: "12px",
              }}
            >
              Vous êtes sur la liste.
            </h3>
            <p
              className="t-body"
              style={{ maxWidth: "360px", margin: "0 auto", fontSize: "14px" }}
            >
              Nous vous contacterons en priorité dès l&apos;ouverture de DIPpro.
            </p>
          </div>
        ) : (
          <>
            <h2
              className="t-h2 reveal reveal-delay-1"
              style={{ marginBottom: "20px" }}
            >
              Sécurisez votre réseau.<br />
              Rejoignez la liste d&apos;attente.
            </h2>

            <p
              className="t-body reveal reveal-delay-2"
              style={{ fontSize: "15px", marginBottom: "40px", maxWidth: "560px" }}
            >
              DIPpro automatise la conformité DIP de votre réseau. Chaque jour
              sans outil, c&apos;est un risque évitable. Inscrivez-vous maintenant.
            </p>

            <form
              onSubmit={submit}
              className="reveal reveal-delay-3"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <style>{`
                .cv-input {
                  width: 100%;
                  background: var(--grey-light);
                  border: 1px solid var(--border-dim);
                  color: var(--white);
                  font-family: 'DM Sans', sans-serif;
                  font-size: 14px;
                  font-weight: 300;
                  padding: 16px 18px;
                  outline: none;
                  transition: border-color 0.2s;
                  box-sizing: border-box;
                }
                .cv-input::placeholder { color: #3A3A3A; }
                .cv-input:focus { border-color: var(--gold); }
                .cv-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
                @media (max-width: 560px) { .cv-row { grid-template-columns: 1fr; } }
              `}</style>

              <div className="cv-row">
                <input
                  className="cv-input"
                  type="text"
                  name="nom"
                  placeholder="Votre nom *"
                  value={form.nom}
                  onChange={handle}
                  maxLength={300}
                  required
                />
                <input
                  className="cv-input"
                  type="email"
                  name="email"
                  placeholder="Email professionnel *"
                  value={form.email}
                  onChange={handle}
                  maxLength={254}
                  required
                />
              </div>

              <input
                className="cv-input"
                type="text"
                name="reseau"
                placeholder="Nom de votre réseau de franchise *"
                value={form.reseau}
                onChange={handle}
                maxLength={300}
                required
              />

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    color: "#E87272",
                  }}
                >
                  Une erreur est survenue. Réessayez ou contactez theo@iralink-agency.com.
                </p>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  flexWrap: "wrap",
                  marginTop: "4px",
                }}
              >
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === "loading"}
                  style={{ opacity: status === "loading" ? 0.6 : 1 }}
                >
                  {status === "loading" ? "Inscription…" : "Rejoindre la liste →"}
                </button>
                <WaitlistCount />
              </div>
            </form>

            {/* Trust signals */}
            <div
              className="reveal"
              style={{
                display: "flex",
                gap: "32px",
                flexWrap: "wrap",
                marginTop: "32px",
                paddingTop: "28px",
                borderTop: "1px solid var(--border-dim)",
              }}
            >
              {TRUST.map((t) => (
                <span
                  key={t.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "#5A5A5A",
                  }}
                >
                  <span style={{ color: "var(--gold)" }}>{t.icon}</span>
                  {t.text}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
