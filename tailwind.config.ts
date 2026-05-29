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
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          green: "#00ffb2",
          dim: "#00cc8e",
          glow: "rgba(0, 255, 178, 0.15)",
        },
        dark: {
          bg: "#020403",
          green: "#031b14",
          card: "rgba(3, 27, 20, 0.4)",
          border: "rgba(0, 255, 178, 0.1)",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Inter", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-reverse": "spin-reverse 25s linear infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
      },
      backgroundImage: {
        "radial-spotlight": "radial-gradient(circle at center, rgba(0, 255, 178, 0.15) 0%, transparent 60%)",
        "linear-neon": "linear-gradient(to right, #00ffb2, #00b3eb)",
      },
    },
  },
  plugins: [],
};
export default config;
