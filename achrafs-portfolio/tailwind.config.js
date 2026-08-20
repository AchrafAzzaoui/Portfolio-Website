/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const rgb = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(130deg, rgb(var(--color-page-start)) 0%, rgb(var(--color-page-mid)) 40%, rgb(var(--color-page-end)) 100%)",
      },
      colors: {
        page: rgb("--color-page"),
        surface: {
          DEFAULT: rgb("--color-surface"),
          raised: rgb("--color-surface-raised"),
          muted: rgb("--color-surface-muted"),
        },
        fg: {
          DEFAULT: rgb("--color-fg"),
          secondary: rgb("--color-fg-secondary"),
          muted: rgb("--color-fg-muted"),
        },
        line: rgb("--color-line"),
        overlay: rgb("--color-overlay"),
        accent: {
          DEFAULT: rgb("--color-accent"),
          strong: rgb("--color-accent-strong"),
          deep: rgb("--color-accent-deep"),
          soft: rgb("--color-accent-soft"),
          faint: rgb("--color-accent-faint"),
          tint: rgb("--color-accent-tint"),
        },
        danger: rgb("--color-danger"),
        skill: {
          frontend: rgb("--color-skill-frontend"),
          backend: rgb("--color-skill-backend"),
          database: rgb("--color-skill-database"),
          devops: rgb("--color-skill-devops"),
          ml: rgb("--color-skill-ml"),
          other: rgb("--color-skill-other"),
        },
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        display: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        brand: ["1.4rem", { lineHeight: "1.75rem" }],
      },
      maxWidth: {
        site: "100rem",
      },
      borderRadius: {
        card: "1.6rem",
      },
      boxShadow: {
        header: "0 4px 10px rgb(0 0 0 / 0.3)",
      },
    },
  },
  plugins: [],
};
