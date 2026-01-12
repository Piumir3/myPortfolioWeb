/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#020617", // Slate 950 (Deep Blue/Black)
        secondary: "#94a3b8", // Slate 400
        tertiary: "#0f172a", // Slate 900
        "black-100": "#1e293b",
        "black-200": "#0f172a",
        "white-100": "#f1f5f9",
        "accent-cyan": "#06b6d4", // Cyan 500
        "accent-blue": "#3b82f6", // Blue 500
        "accent-purple": "#3b82f6", // Replaced Purple with Blue for compatibility
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        neon: "0 0 10px #00f2ea, 0 0 20px #00f2ea, 0 0 40px #00f2ea",
        "neon-pink": "0 0 10px #ff0055, 0 0 20px #ff0055, 0 0 40px #ff0055",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "none", // Removed static image
        "grid-pattern":
          "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
