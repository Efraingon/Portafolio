import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette 2026: Verde Esmeralda & Azul Petróleo / Verdoso (Crecimiento, Solidez y Éxito Financiero)
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981", // Esmeralda vibrante
          600: "#059669", // Esmeralda profundo
          700: "#047857", // Azul Verdoso / Petróleo
          800: "#065f46", // Verde Oscuro Madurez
          900: "#064e3b",
          950: "#022c22",
        },
        petroleum: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6", // Azul Petróleo / Teal
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        surface: {
          dark: "#050b0a",
          cardDark: "rgba(6, 24, 20, 0.70)",
          cardLight: "rgba(255, 255, 255, 0.75)",
          glow: "rgba(16, 185, 129, 0.18)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        "glass-sm": "0 4px 16px 0 rgba(0, 0, 0, 0.30)",
        neomorphic: "8px 8px 16px #030807, -8px -8px 16px #091613",
        "neomorphic-light": "6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff",
        glow: "0 0 30px -5px rgba(16, 185, 129, 0.45)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
