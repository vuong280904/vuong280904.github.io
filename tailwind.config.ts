import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        // Brand gradient stops — the ONLY source of hue in the system.
        primary: {
          DEFAULT: "#F472B6", // pastel pink
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FDBA74", // peach
          foreground: "#14131A",
        },
        accent: {
          DEFAULT: "#C084FC", // warm orange / lavender per brand hex
          foreground: "#FFFFFF",
        },
        background: "#FCFCFD",
        dark: "#0F1117",
        ink: {
          DEFAULT: "#14131A",
          soft: "#6B7280",
        },
        line: "#EDEDF2",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        sm: "12px",
        md: "20px",
        lg: "28px",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #F472B6 0%, #FDBA74 55%, #C084FC 100%)",
        "brand-gradient-radial":
          "radial-gradient(circle, #F472B6 0%, #FDBA74 45%, #C084FC 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(244, 114, 182, 0.35)",
        "glow-sm": "0 0 24px -6px rgba(244, 114, 182, 0.3)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        marquee: "marquee 30s linear infinite",
      },
      spacing: {
        section: "120px",
        "section-tablet": "72px",
        "section-mobile": "56px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
