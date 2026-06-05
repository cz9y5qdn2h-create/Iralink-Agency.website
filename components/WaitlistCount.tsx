"use client";
import { useState, useEffect } from "react";

export default function WaitlistCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist-count")
      .then((r) => r.json())
      .then((d) => setCount(d.count ?? null))
      .catch(() => {});
  }, []);

  if (count === null || count === 0) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "28px",
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#6EE7A0",
          animation: "countPulse 2s ease-in-out infinite",
        }}
      />
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.1em",
          color: "#6EE7A0",
        }}
      >
        {count} pré-inscrit{count > 1 ? "s" : ""} — accès anticipé ouvert
      </span>
      <style>{`
        @keyframes countPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
