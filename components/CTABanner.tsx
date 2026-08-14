import { getDipproUrl } from "@/lib/dippro";

const DIPPRO_URL = getDipproUrl("cta-banner");

export default function CTABanner() {
  return (
    <section
      style={{
        background: "var(--gold)",
        padding: "64px 60px",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "280px" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(8,8,8,0.6)",
              marginBottom: "16px",
            }}
          >
            Chaque jour sans DIPpro est un risque non couvert
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 300,
              color: "var(--black)",
              lineHeight: 1.2,
              marginBottom: "0",
            }}
          >
            Un litige DIP coûte en moyenne{" "}
            <span style={{ fontWeight: 600 }}>50 000 €.</span>
            <br />
            DIPpro coûte <span style={{ fontWeight: 600 }}>850 €/mois.</span>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          <a
            href={DIPPRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-banner-primary"
            style={{
              display: "inline-block",
              background: "var(--black)",
              color: "var(--gold)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "16px 32px",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
          >
            Accéder à DIPpro →
          </a>
          <a
            href="#liste-attente"
            className="cta-banner-ghost"
            style={{
              display: "inline-block",
              textAlign: "center",
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.08em",
              color: "rgba(8,8,8,0.6)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Ou rejoindre la liste d&apos;attente
          </a>
        </div>
      </div>

      <style>{`
        .cta-banner-primary:hover { opacity: 0.85; }
        .cta-banner-ghost:hover { color: var(--black) !important; }
      `}</style>
    </section>
  );
}
