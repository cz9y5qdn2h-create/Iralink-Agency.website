"use client";

import { useEffect } from "react";
import type { ConfiguratorContact } from "@/lib/configurator";

// NOTE: the brief asked for a dedicated Cal.com event
// (cal.com/theocoutard/entretien-installation-dippro). That slug isn't
// confirmed to exist, so this reuses the site's known-working event
// (theo-coutard-mhdsix/presentation-dippro) to avoid shipping a dead
// booking link. Swap `CAL_LINK` below once the dedicated event is created.
const CAL_NAMESPACE = "entretien-installation-dippro";
const CAL_LINK = "theo-coutard-mhdsix/presentation-dippro";

export default function ConfirmationStep({ contact }: { contact: ConfiguratorContact }) {
  useEffect(() => {
    /* eslint-disable */
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar);
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const ar = arguments;
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.createElement("script");
            s.src = A;
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    /* eslint-enable */

    const Cal = (window as any).Cal;

    Cal("init", CAL_NAMESPACE, { origin: "https://cal.com" });

    Cal.ns[CAL_NAMESPACE]("inline", {
      elementOrSelector: "#cal-booking-configurateur",
      config: { layout: "month_view" },
      calLink: CAL_LINK,
    });

    Cal.ns[CAL_NAMESPACE]("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: {
        dark: {
          "cal-brand": "#9c8a68",
          "cal-brand-emphasis": "#c2ac81",
          "cal-brand-text": "#0d0d0e",
          "cal-text": "#ece9e2",
          "cal-text-subtle": "#a49d90",
          "cal-border": "rgba(156,138,104,0.3)",
          "cal-border-subtle": "rgba(236,233,226,0.1)",
          "cal-bg": "#0d0d0e",
          "cal-bg-subtle": "#141414",
          "cal-bg-emphasis": "#1a1a1a",
        },
      },
    });
  }, []);

  return (
    <div className="configurator-fade" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "1px solid var(--gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          color: "var(--gold)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "clamp(26px,3.4vw,38px)", color: "var(--white)", margin: "0 0 16px" }}>
        C&apos;est envoyé{contact.nom ? `, ${contact.nom.split(" ")[0]}` : ""}.
      </h1>
      <p style={{ fontSize: "15px", color: "var(--grey)", maxWidth: "480px", margin: "0 auto 48px", lineHeight: 1.6 }}>
        Théo vous rappelle sous 24h pour valider votre configuration en 5 minutes. Vous préférez réserver
        tout de suite votre entretien d&apos;installation en visio&nbsp;?
      </p>

      <div style={{ background: "var(--black)", border: "1px solid var(--border)", borderRadius: "2px", overflow: "hidden", minHeight: "600px" }}>
        <div id="cal-booking-configurateur" style={{ width: "100%", minHeight: "600px" }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          #cal-booking-configurateur { min-height: 520px !important; }
        }
      `}</style>
    </div>
  );
}
