"use client";

import { useState, FormEvent } from "react";

interface FormData {
  nom: string;
  email: string;
  reseau: string;
  franchises: string;
}

const initialData: FormData = { nom: "", email: "", reseau: "", franchises: "" };

export default function Contact() {
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = `Demande d'audit DIP — ${data.reseau || "Nouveau réseau"}`;
    const body = [
      `Nom : ${data.nom}`,
      `Email : ${data.email}`,
      `Réseau / Entreprise : ${data.reseau}`,
      `Nombre de franchisés : ${data.franchises}`,
      ``,
      `Message envoyé depuis iralink-agency.com`,
    ].join("\n");

    window.location.href = `mailto:theo@iralink-agency.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 600);
  };

  return (
    <section className="section" style={{ background: "var(--grey-light)" }} id="contact">
      <div className="section-inner">

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — copy */}
          <div>
            <div className="section-tag reveal">
              <span className="line" />
              <span className="label">Audit gratuit</span>
            </div>

            <h2 className="t-h2 reveal reveal-delay-1" style={{ marginBottom: "32px" }}>
              Votre DIP est-il<br />
              vraiment à jour<br />
              aujourd&apos;hui ?
            </h2>

            <p className="t-body reveal reveal-delay-2" style={{ marginBottom: "48px" }}>
              En 30 minutes, on analyse votre DIP actuel, on identifie les sections à risque,
              et on vous montre exactement comment DIP Pilot les maintient à jour automatiquement.
              Aucun engagement, aucun frais.
            </p>

            {/* What you get */}
            <ul
              className="bullet-list reveal reveal-delay-3"
              style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <li>Analyse section par section de votre DIP existant</li>
              <li>Rapport des risques de non-conformité détectés</li>
              <li>Démo live de DIP Pilot sur votre cas</li>
              <li>Recommandations prioritaires sans engagement</li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div
                style={{
                  background: "var(--black)",
                  padding: "64px 48px",
                  textAlign: "center",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    color: "var(--gold)",
                    fontSize: "20px",
                  }}
                >
                  ✓
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
                  Message envoyé.
                </h3>
                <p className="t-body" style={{ fontSize: "14px", marginBottom: "32px" }}>
                  Votre demande a été transmise à Théo. Réponse garantie sous 24h.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setData(initialData); }}
                  className="btn-ghost"
                  style={{ margin: "0 auto" }}
                >
                  Envoyer une autre demande <span className="arrow">→</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "var(--black)",
                  padding: "48px 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {/* Nom */}
                <div className="form-group">
                  <label htmlFor="nom" className="form-label">Prénom & Nom *</label>
                  <input
                    id="nom"
                    type="text"
                    className="form-input"
                    placeholder="Théo Coutard"
                    value={data.nom}
                    onChange={set("nom")}
                    required
                    autoComplete="name"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email professionnel *</label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="theo@iralink-agency.com"
                    value={data.email}
                    onChange={set("email")}
                    required
                    autoComplete="email"
                  />
                </div>

                {/* Réseau */}
                <div className="form-group">
                  <label htmlFor="reseau" className="form-label">Réseau / Entreprise *</label>
                  <input
                    id="reseau"
                    type="text"
                    className="form-input"
                    placeholder="Nom de votre réseau de franchise"
                    value={data.reseau}
                    onChange={set("reseau")}
                    required
                    autoComplete="organization"
                  />
                </div>

                {/* Franchisés */}
                <div className="form-group">
                  <label htmlFor="franchises" className="form-label">Nombre de franchisés *</label>
                  <select
                    id="franchises"
                    className="form-select"
                    value={data.franchises}
                    onChange={set("franchises")}
                    required
                  >
                    <option value="" disabled>Sélectionner...</option>
                    <option value="1 à 5">1 à 5</option>
                    <option value="5 à 20">5 à 20</option>
                    <option value="20 à 50">20 à 50</option>
                    <option value="50 à 100">50 à 100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  style={{ alignSelf: "flex-start", marginTop: "8px" }}
                >
                  {loading ? "Envoi en cours..." : "Réserver mon audit gratuit"}
                </button>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 300,
                    color: "var(--grey)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Réponse garantie sous 24h · Sans engagement · 100% gratuit
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
