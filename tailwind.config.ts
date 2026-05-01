import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,ts,tsx,html,md,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
        body: ["Space Grotesk", "Inter", "sans-serif"],
        "working-man": ["UDC Working Man Sans", "sans-serif"],
        "working-man-light": ["UDC Working Man Sans Light", "sans-serif"],
        "working-man-rough": ["UDC Working Man Sans Rough", "sans-serif"],
        beverly: ["Beverly Drive", "cursive"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      colors: {
        olive: {
          dark: "#1B4229",
          medium: "hsl(76 15% 40%)",
          light: "hsl(76 10% 55%)",
          bright: "rgb(205, 219, 45)",
        },
        cream: "#EEECE6",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
