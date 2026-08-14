"use client";

import Link from "next/link";
import { magnetMove, magnetLeave } from "@/lib/motion3d";

export default function AgencyCTABanner() {
  return (
    <section className="section-dark" style={{ padding: "clamp(100px,12vw,160px) 8vw" }}>
      <div
        className="reveal"
        style={{
          textAlign: "center",
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "clamp(56px,8vw,100px) 24px",
          border: "1px solid rgba(236,233,226,0.16)",
        }}
      >
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(28px,4vw,50px)", margin: "0 0 28px", color: "var(--white)" }}>
          Votre réseau mérite son propre SaaS.
        </h2>
        <Link href="/contact" onMouseMove={magnetMove} onMouseLeave={magnetLeave} className="btn-primary" style={{ padding: "18px 40px", fontSize: "15px" }}>
          Prendre rendez-vous
        </Link>
      </div>
    </section>
  );
}
