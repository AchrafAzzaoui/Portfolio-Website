/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-dark": "#0A0E1C", //"linear-gradient(130deg, #0A0F1A 0%, #0C1322 40%, #0E1628 100%)"",
        "gradient-light":
          "linear-gradient(130deg, #F8FAFC 0%, #EEF2F6 40%, #E2E8F0 100%)", // Light theme gradient
      },
      colors: {
        // Dark theme
        dark: {
          text: {
            primary: "#F8FAFC", // Almost white
            secondary: "#94A3B8", // Lighter gray
            muted: "#64748B", // Muted gray
            customcolor: "#7A3DF4 ", // "#8C5EFF", //"#7C3AED"
          },
        },
        // Light theme
        light: {
          text: {
            primary: "#0F172A", // Very dark blue/gray
            secondary: "#334155", // Dark gray
            muted: "#64748B", // Same as dark for balance
          },
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      // Enable before/after pseudo elements
      before: ["before"],
      after: ["after"],
    },
  },
};
