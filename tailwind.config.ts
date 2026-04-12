import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8D080",
          dark: "#9A7A2A",
          muted: "rgba(201,168,76,0.15)",
          border: "rgba(201,168,76,0.3)",
        },
        dark: {
          DEFAULT: "#080808",
          surface: "#111111",
          surface2: "#181818",
          surface3: "#202020",
          border: "#252525",
          border2: "#2E2E2E",
        },
        text: {
          DEFAULT: "#F0F0F0",
          muted: "#888888",
          faint: "#555555",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E8D080 50%, #C9A84C 100%)",
        "gold-gradient-v": "linear-gradient(180deg, #C9A84C 0%, #E8D080 100%)",
        "dark-gradient": "linear-gradient(180deg, #080808 0%, #0F0F0F 100%)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulse_slow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        pulse_slow: "pulse_slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
