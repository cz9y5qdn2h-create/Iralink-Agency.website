"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal: any;
  }
}

export default function CalWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scriptId = "cal-embed-script";
    if (document.getElementById(scriptId)) {
      initCal();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = initCal;
    document.head.appendChild(script);

    function initCal() {
      if (!window.Cal) return;
      window.Cal("init", "presentation-dippro", { origin: "https://cal.com" });
      window.Cal.ns["presentation-dippro"]("inline", {
        elementOrSelector: "#cal-inline-embed",
        config: { layout: "month_view" },
        calLink: "theo-coutard-mhdsix/presentation-dippro",
      });
      window.Cal.ns["presentation-dippro"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#C8A96E" },
          dark: { "cal-brand": "#C8A96E" },
        },
      });
    }
  }, []);

  return (
    <div
      id="cal-inline-embed"
      style={{
        width: "100%",
        minHeight: "600px",
        overflow: "hidden",
        borderRadius: "2px",
      }}
    />
  );
}
