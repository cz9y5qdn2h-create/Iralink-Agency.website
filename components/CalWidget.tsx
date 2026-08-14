"use client";

import { useEffect } from "react";

export default function CalWidget() {
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

    Cal("init", "presentation-dippro", { origin: "https://cal.com" });

    Cal.ns["presentation-dippro"]("inline", {
      elementOrSelector: "#cal-booking-inline",
      config: { layout: "month_view" },
      calLink: "theo-coutard-mhdsix/presentation-dippro",
    });

    Cal.ns["presentation-dippro"]("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: {
        dark: {
          "cal-brand":           "#C8A96E",
          "cal-brand-emphasis":  "#b8975e",
          "cal-brand-text":      "#080808",
          "cal-text":            "#F4F2EE",
          "cal-text-subtle":     "#5A5A5A",
          "cal-border":          "rgba(156, 138, 104,0.18)",
          "cal-border-subtle":   "rgba(244,242,238,0.06)",
          "cal-bg":              "#080808",
          "cal-bg-subtle":       "#111111",
          "cal-bg-emphasis":     "#1a1a1a",
        },
      },
    });
  }, []);

  return (
    <>
      <style>{`
        .cal-wrapper {
          width: 100%;
          background: var(--black);
          border: 1px solid var(--border);
          border-radius: 2px;
          overflow: hidden;
          min-height: 700px;
        }
        #cal-booking-inline {
          width: 100%;
          min-height: 700px;
          overflow: scroll;
        }
        @media (max-width: 768px) {
          .cal-wrapper {
            min-height: 580px;
            border-left: none;
            border-right: none;
            border-radius: 0;
          }
          #cal-booking-inline {
            min-height: 580px;
          }
        }
        @media (max-width: 480px) {
          .cal-wrapper {
            min-height: 520px;
          }
          #cal-booking-inline {
            min-height: 520px;
          }
        }
      `}</style>
      <div className="cal-wrapper">
        <div id="cal-booking-inline" />
      </div>
    </>
  );
}
