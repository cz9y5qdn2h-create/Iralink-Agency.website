"use client";

import { OPTIONAL_MODULES } from "@/lib/configurator";

export default function ServiceDiagram({ activeModuleIds }: { activeModuleIds: string[] }) {
  const activeModules = OPTIONAL_MODULES.filter((m) => activeModuleIds.includes(m.id));

  return (
    <div
      style={{ position: "relative", perspective: "1400px", height: "clamp(320px,34vw,420px)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "relative",
          width: "180px",
          height: "220px",
          transformStyle: "preserve-3d",
          transform: "rotateX(8deg) rotateY(-6deg)",
        }}
      >
        {/* Socle layer — always present, base of the stack */}
        <div
          className="diagram-layer diagram-layer-socle"
          style={{
            position: "absolute",
            inset: 0,
            transform: "translateZ(0px)",
            background: "#131312",
            border: "1px solid var(--gold)",
            boxShadow: "0 0 24px rgba(156,138,104,0.18)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.1em", color: "var(--gold-light)", textTransform: "uppercase" }}>
            Socle
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", color: "var(--white)", marginTop: "4px" }}>
            DIPpro
          </span>
        </div>

        {/* One layer per active optional module — position derived from its rank among
            the CURRENTLY active modules, fanned diagonally so every layer stays legible
            even with all four options on. */}
        {OPTIONAL_MODULES.map((m) => {
          const activeIndex = activeModules.findIndex((am) => am.id === m.id);
          const active = activeIndex !== -1;
          const rank = active ? activeIndex : 0;
          const depth = 46 + rank * 42;
          const x = 26 + rank * 30;
          const y = 18 + rank * 30;

          return (
            <div
              key={m.id}
              className="diagram-layer"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "158px",
                height: "56px",
                transform: active
                  ? `translateZ(${depth}px) translate(${x}px, -${y}px)`
                  : `translateZ(0px) translate(0px, 0px) scale(0.85)`,
                opacity: active ? 1 : 0,
                pointerEvents: "none",
                background: "#17181a",
                border: "1px solid rgba(156,138,104,0.4)",
                boxShadow: "10px 10px 0 rgba(0,0,0,0.4)",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                transition: "transform 0.5s cubic-bezier(.2,.8,.2,1), opacity 0.4s ease",
              }}
            >
              <span style={{ fontSize: "10.5px", fontWeight: 600, color: "var(--white)", lineHeight: 1.3 }}>
                {m.name}
              </span>
            </div>
          );
        })}
      </div>

      <span className="sr-only">
        Configuration actuelle : Socle DIPpro
        {activeModules.length > 0 && ` avec ${activeModules.map((m) => m.name).join(", ")}`}.
      </span>

      <style>{`
        .sr-only {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
        }
      `}</style>
    </div>
  );
}
