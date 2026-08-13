"use client";

import { useState, useEffect } from "react";

import { getDipproUrl } from "@/lib/dippro";

const DIPPRO_URL = getDipproUrl("sticky-cta");

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9970,
        background: "rgba(8,8,8,0.97)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid var(--border-dim)",
        padding: "14px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
      }}
      className="sticky-cta-bar"
    >
      <style>{`
        @media (max-width: 640px) {
          .sticky-cta-bar { padding: 12px 20px !important; }
          .sticky-cta-text { display: none !important; }
        }
      `}</style>

      {/* Left: product name + price */}
      <div
        className="sticky-cta-text"
        style={{ display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "17px",
            fontWeight: 300,
            color: "var(--white)",
          }}
        >
          DIPpro — Conformité DIP automatisée.
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--grey)",
          }}
        >
          850 €/mois · 1 350 € installation
        </span>
      </div>

      {/* Right: CTAs + dismiss */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
        <a
          href="#liste-attente"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--grey)",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--white)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "var(--grey)")
          }
        >
          Liste d&apos;attente
        </a>

        <a
          href={DIPPRO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: "11px", padding: "12px 24px" }}
        >
          Accéder à DIPpro →
        </a>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Fermer"
          style={{
            background: "none",
            border: "none",
            color: "var(--grey)",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "var(--white)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "var(--grey)")
          }
        >
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
