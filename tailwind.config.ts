import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1180px" } },
    extend: {
      colors: {
        god: {
          primary: "#006C35",
          deep: "#004D26",
          accent: "#00A651",
          gold: "#C9A84C",
          dark: "#001A0E",
          white: "#FFFFFF",
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      borderRadius: { xl: "1rem", "2xl": "1.5rem", "3xl": "1.75rem" },
      boxShadow: { glass: "0 28px 80px rgba(0,0,0,.32)" },
      keyframes: {
        drive: { "0%,100%": { transform: "translateX(-24px)" }, "50%": { transform: "translateX(24px)" } },
        trail: { "0%,100%": { transform: "scaleX(.65)", opacity: ".45" }, "50%": { transform: "scaleX(1)", opacity: "1" } },
        cue: { "0%,100%": { transform: "translateY(-2px)" }, "50%": { transform: "translateY(4px)" } },
        scan: { to: { transform: "translateY(92px)" } },
        spin: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        drive: "drive 1.4s ease-in-out infinite",
        trail: "trail 1.4s ease-in-out infinite",
        cue: "cue 1.6s ease-in-out infinite",
        scan: "scan 2.2s ease-in-out infinite alternate",
        spin: "spin 16s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
