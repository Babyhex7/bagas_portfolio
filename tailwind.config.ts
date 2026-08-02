import type { Config } from "tailwindcss";

/**
 * Design system: "Record & Voice"
 *
 * Two grounds, inverted against each other:
 *   ink   — warm brown-black, carries the opening statement and the closing invitation
 *   paper — cool limewash, carries the record (work, toolkit, achievements)
 *
 * One accent per ground so the two never compete:
 *   kunyit (turmeric) lives on ink
 *   nila   (batik indigo) lives on paper
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#17140F",
          raised: "#211C16",
          line: "#342D24",
          muted: "#8B8E85",
        },
        paper: {
          DEFAULT: "#E7E9E3",
          raised: "#DCDFD7",
          line: "#C6C9C0",
          muted: "#5E5B54",
        },
        nila: {
          DEFAULT: "#24356F",
          soft: "#8494CE",
        },
        kunyit: {
          DEFAULT: "#E9A62A",
          deep: "#B87C12",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        label: "0.16em",
      },
      maxWidth: {
        measure: "62ch",
      },
      borderRadius: {
        panel: "4px",
      },
      animation: {
        seal: "seal-spin 34s linear infinite",
      },
      keyframes: {
        "seal-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
