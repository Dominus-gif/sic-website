/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Forge & Precision palette
        background: "#faf8ff",
        surface: "#faf8ff",
        cad: "#F8FAFC",
        obsidian: "#12141D",
        primary: "#003874", // deep industrial blue (headlines)
        brand: "#1A4F95", // industrial blue (buttons/actions)
        accent: "#FF8F27", // safety orange (CTA / focal)
        copper: "#B87333",
        ink: "#171b2a", // on-surface / on-background
        muted: "#424751", // on-surface-variant
        outline: "#c3c6d2", // outline-variant
        svariant: "#dee1f7", // surface-variant (light lavender)
        steel: "#4A5568",
      },
      fontFamily: {
        // Body prose — Work Sans (Inter/Helvetica fallback)
        sans: ["var(--font-body)", "var(--font-ui)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        // Display / headlines — Montserrat
        display: ["var(--font-display)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        // UI text — Inter
        ui: ["var(--font-ui)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        // Editorial pull-quotes — EB Garamond
        serif: ["var(--font-serif)", "Garamond", "Times New Roman", "serif"],
        // Data / part numbers — JetBrains Mono
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" }],
        "mono-data": ["14px", { lineHeight: "1.4", fontWeight: "500" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.125rem", // machined, sharp — 2px
        md: "0.25rem",
        lg: "0.25rem",
        xl: "0.5rem", // card container softness
        full: "9999px",
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        "stack-sm": "12px",
        "stack-md": "32px",
        "stack-lg": "80px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "40px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
