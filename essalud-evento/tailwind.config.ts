import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070707",
        card: "#111111",
        hover: "#181818",
        foreground: "#FFFFFF",
        muted: "#B5B5B5",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E6C76B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E6C76B 50%, #D4AF37 100%)",
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.12), transparent 60%)",
      },
      boxShadow: {
        gold: "0 0 40px -10px rgba(212,175,55,0.45)",
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        glow: "glow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
