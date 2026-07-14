import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF9F6",
        "paper-dim": "#F2F0EA",
        ink: "#1C1B19",
        "ink-muted": "#6B6A66",
        "ink-faint": "#9A988F",
        cloth: {
          DEFAULT: "#2F4A3D",
          light: "#3E5F4F",
          dark: "#1F3229",
        },
        gilt: {
          DEFAULT: "#C9A227",
          light: "#DDBE5C",
          dark: "#9C7D1B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        utility: ["var(--font-utility)"],
      },
      maxWidth: {
        prose: "42rem",
        page: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
