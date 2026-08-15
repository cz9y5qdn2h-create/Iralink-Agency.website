"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const STORAGE_KEY = "iralink-cookie-consent";

type Consent = "accepted" | "declined" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  const choose = (value: "accepted" | "declined") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "accepted" && (
        <Script
          src="https://taap.it/scripts/tracker.js"
          data-project="pk_f636d7ac7232d2f7a5e64df3b44b9e5d"
          data-track-outbound="true"
          strategy="afterInteractive"
        />
      )}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-label="Consentement cookies"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9995,
            background: "var(--black)",
            borderTop: "1px solid var(--border)",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--grey)", margin: 0, maxWidth: "560px", lineHeight: 1.6 }}>
            Nous utilisons un outil de mesure d&apos;audience pour comprendre l&apos;usage du site. Il n&apos;est activé
            qu&apos;avec votre accord. Voir notre{" "}
            <Link href="/politique-de-confidentialite" style={{ color: "var(--gold-light)" }}>
              politique de confidentialité
            </Link>
            .
          </p>
          <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
            <button
              onClick={() => choose("declined")}
              className="btn-outline"
              style={{ fontSize: "11px", padding: "10px 18px" }}
            >
              Refuser
            </button>
            <button
              onClick={() => choose("accepted")}
              className="btn-primary"
              style={{ fontSize: "11px", padding: "10px 18px" }}
            >
              Accepter
            </button>
          </div>
        </div>
      )}
    </>
  );
}
