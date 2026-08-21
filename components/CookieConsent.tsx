"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const STORAGE_KEY = "iralink-cookie-consent";
// Other fixed-to-bottom UI (StickyCTA, the configurator's mobile recap bar)
// reads this to offset itself above the banner instead of being covered by it.
const HEIGHT_VAR = "--cookie-banner-h";

type Consent = "accepted" | "declined" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const setHeightVar = () => {
      const h = bannerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty(HEIGHT_VAR, `${h}px`);
    };
    setHeightVar();
    window.addEventListener("resize", setHeightVar);
    return () => {
      window.removeEventListener("resize", setHeightVar);
      document.documentElement.style.setProperty(HEIGHT_VAR, "0px");
    };
  }, [ready, consent]);

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
          ref={bannerRef}
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
