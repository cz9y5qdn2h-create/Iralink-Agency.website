"use client";

import { deepTiltMove, deepTiltLeave } from "@/lib/motion3d";

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="1" y="1" width="6.5" height="6.5" />
        <rect x="10.5" y="1" width="6.5" height="6.5" />
        <rect x="1" y="10.5" width="6.5" height="6.5" />
        <rect x="10.5" y="10.5" width="6.5" height="6.5" />
      </svg>
    ),
    title: "Analyse section par section",
    body: "Statut Conforme / À vérifier / Non conforme pour chaque rubrique du DIP, mis à jour à chaque analyse.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1.5L2 5v3.5c0 4.7 3 7.7 7 8.5 4-.8 7-3.8 7-8.5V5L9 1.5Z" />
        <path d="M6.2 9l2 2 3.6-4" />
      </svg>
    ),
    title: "Citations légales précises",
    body: "Références exactes aux articles L.330-3 et R.330-1 du Code de commerce pour chaque non-conformité relevée.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 1L10.8 6.8H17L12 10.3L13.8 16.1L9 12.6L4.2 16.1L6 10.3L1 6.8H7.2L9 1Z" />
      </svg>
    ),
    title: "Reformulations suggérées",
    body: "Une proposition de rédaction conforme, en langage juridique, pour chaque non-conformité détectée par l'IA.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <circle cx="9" cy="9" r="7.5" />
        <polyline points="9,4.5 9,9 12.5,11" />
      </svg>
    ),
    title: "Suivi du délai légal",
    body: "Alerte automatique sur le respect du délai de 20 jours avant signature, calculée à partir de la date de remise.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <circle cx="4" cy="9" r="3" />
        <circle cx="14" cy="9" r="3" />
        <line x1="7" y1="9" x2="11" y2="9" />
      </svg>
    ),
    title: "Intégration multisources",
    body: "Google Drive, emails, CRM, comptabilité — DIPpro se connecte à vos outils existants, sans migration de données.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M9 1.5C6.5 1.5 4.5 3.5 4.5 6V11.5L2.5 13.5H15.5L13.5 11.5V6C13.5 3.5 11.5 1.5 9 1.5Z" />
        <path d="M7.5 14C7.5 15.1 8.2 16 9 16C9.8 16 10.5 15.1 10.5 14" />
      </svg>
    ),
    title: "Notifications intelligentes",
    body: "Alertes uniquement quand une action est requise. Chaque notification correspond à une décision à prendre.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <polygon points="16,9 2,15.5 5.5,9 2,2.5" />
        <line x1="5.5" y1="9" x2="16" y2="9" />
      </svg>
    ),
    title: "Distribution automatique",
    body: "Le DIP mis à jour est envoyé automatiquement aux franchisés concernés, avec traçabilité de la remise.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="14" height="14" rx="1" />
        <path d="M2 6.5h14M6.5 2v14" />
      </svg>
    ),
    title: "Audit trail horodaté",
    body: "Chaque modification est archivée avec date, heure, source et validateur — valeur probante en cas de litige.",
  },
];

export default function ProductFeatures3D() {
  return (
    <section className="section-paper" style={{ padding: "0 8vw clamp(100px,12vw,160px)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: "48px", maxWidth: "640px" }}>
          <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", color: "var(--ink-grey)" }}>PRODUIT</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(26px,3.2vw,42px)", margin: "14px 0 0", color: "var(--ink)" }}>
            Ce que fait DIPpro.
          </h2>
        </div>

        <div className="pf3d-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px" }}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${(i % 6) + 1} pf3d-card`}
              onMouseMove={deepTiltMove}
              onMouseLeave={deepTiltLeave}
              style={{
                position: "relative",
                background: "#fff",
                border: "1px solid var(--ink-border)",
                borderRadius: "3px",
                padding: "26px 24px",
                transformStyle: "preserve-3d",
                willChange: "transform",
                overflow: "hidden",
              }}
            >
              <div data-tilt-glow style={{ position: "absolute", inset: 0, pointerEvents: "none", transition: "background .15s ease" }} />
              <div
                style={{
                  position: "relative",
                  width: "40px",
                  height: "40px",
                  borderRadius: "2px",
                  border: "1px solid var(--ink-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold)",
                  marginBottom: "18px",
                  transform: "translateZ(24px)",
                }}
              >
                {f.icon}
              </div>
              <h4 style={{ position: "relative", fontSize: "15px", fontWeight: 700, margin: "0 0 8px", color: "var(--ink)", transform: "translateZ(18px)" }}>
                {f.title}
              </h4>
              <p style={{ position: "relative", fontSize: "13px", lineHeight: 1.6, color: "var(--ink-muted)", margin: 0, transform: "translateZ(10px)" }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pf3d-card { transition: transform .12s ease-out, box-shadow .2s ease; box-shadow: 0 1px 2px rgba(17,17,16,0.04); }
        .pf3d-card:hover { box-shadow: 0 24px 40px -12px rgba(17,17,16,0.18); }
        @media (max-width: 1080px) {
          .pf3d-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .pf3d-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
