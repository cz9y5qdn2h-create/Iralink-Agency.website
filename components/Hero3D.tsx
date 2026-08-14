"use client";

import { useRef } from "react";
import Link from "next/link";
import { magnetMove, magnetLeave } from "@/lib/motion3d";

export default function Hero3D() {
  const stackRef = useRef<HTMLDivElement>(null);

  const heroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const stack = stackRef.current;
    if (!stack) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    stack.style.transform = `rotateX(${(-y * 14 + 6).toFixed(2)}deg) rotateY(${(x * 18).toFixed(2)}deg)`;
  };
  const heroLeave = () => {
    if (stackRef.current) stackRef.current.style.transform = "rotateX(6deg) rotateY(0deg)";
  };

  return (
    <section
      className="section-dark"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(120px,16vw,180px) 8vw 100px",
        overflow: "hidden",
      }}
      id="accueil"
    >
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <span
        style={{
          position: "absolute",
          top: "18%",
          right: "6%",
          width: "min(46vw,520px)",
          height: "min(46vw,520px)",
          border: "1px solid rgba(236,233,226,0.14)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: "8%",
          left: "4%",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(180px,26vw,380px)",
          fontWeight: 700,
          lineHeight: 0.7,
          color: "transparent",
          WebkitTextStroke: "1px rgba(236,233,226,0.10)",
          pointerEvents: "none",
        }}
      >
        01
      </span>

      <div
        className="hero3d-grid"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "clamp(30px,5vw,60px)",
          alignItems: "center",
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        <div className="reveal is-visible">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 16px",
              border: "1px solid rgba(156,138,104,0.5)",
              borderRadius: "2px",
              marginBottom: "32px",
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--gold)", animation: "pulseGlow 2s ease-in-out infinite" }} />
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: "var(--gold-light)" }}>
              AGENCE SAAS · SPÉCIALISTE FRANCHISE
            </span>
          </div>

          <h1 className="t-h1" style={{ fontSize: "clamp(40px,5.6vw,74px)", lineHeight: 1.04, margin: "0 0 28px" }}>
            On construit le logiciel qui fait tourner votre réseau.
          </h1>

          <p style={{ fontSize: "clamp(16px,1.6vw,19px)", lineHeight: 1.6, color: "var(--grey)", maxWidth: "520px", margin: "0 0 42px", fontFamily: "'Inter', sans-serif" }}>
            Iralink Agency conçoit et développe des SaaS sur-mesure pour les franchiseurs&nbsp;: conformité juridique, pilotage de réseau, audit terrain.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <Link href="/contact" onMouseMove={magnetMove} onMouseLeave={magnetLeave} className="btn-primary">
              Prendre rendez-vous
            </Link>
            <Link href="/etude-de-cas" onMouseMove={magnetMove} onMouseLeave={magnetLeave} className="btn-outline">
              Voir l&apos;étude de cas DIP Pro →
            </Link>
          </div>
        </div>

        <div
          onMouseMove={heroMove}
          onMouseLeave={heroLeave}
          style={{ perspective: "1400px", height: "clamp(340px,42vw,480px)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div
            ref={stackRef}
            style={{
              position: "relative",
              width: "280px",
              height: "340px",
              transformStyle: "preserve-3d",
              transform: "rotateX(6deg) rotateY(0deg)",
              transition: "transform .25s ease-out",
            }}
          >
            <div style={{ position: "absolute", inset: 0, transform: "translateZ(-40px) translate(30px,30px)", background: "#141415", border: "1px solid rgba(236,233,226,0.1)", boxShadow: "20px 20px 0 rgba(0,0,0,0.5)" }} />
            <div style={{ position: "absolute", inset: 0, transform: "translateZ(0px) translate(15px,15px)", background: "#17181a", border: "1px solid rgba(156,138,104,0.2)", boxShadow: "20px 20px 0 rgba(0,0,0,0.4)" }} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "translateZ(40px)",
                background: "#131312",
                border: "1px solid rgba(156,138,104,0.35)",
                boxShadow: "24px 24px 0 rgba(0,0,0,0.6)",
                padding: "24px",
                animation: "floatY 5s ease-in-out infinite",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", color: "var(--gold-light)" }}>SCORE CONFORMITÉ</span>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold-light)" }} />
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "56px", fontWeight: 700, color: "var(--white)", marginBottom: "8px" }}>92%</div>
              <div style={{ height: "3px", background: "rgba(236,233,226,0.12)", overflow: "hidden", marginBottom: "22px" }}>
                <div style={{ height: "100%", width: "92%", background: "var(--gold)" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--grey)" }}>
                  <span>Art. L.330-3</span><span style={{ color: "var(--gold-light)" }}>Conforme</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--grey)" }}>
                  <span>Délai 20 jours</span><span style={{ color: "var(--gold-light)" }}>Respecté</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--grey)" }}>
                  <span>Sect. financière</span><span style={{ color: "#c99b3e" }}>À vérifier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero3d-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
