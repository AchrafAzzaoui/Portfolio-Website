/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(130deg, #0A0F1A 0%, #0C1322 40%, #0E1628 100%)",
      },
    },
  },
  plugins: [],
};
