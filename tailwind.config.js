/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        brand: {
          DEFAULT: "#E62B1E",
          dark: "#B8180D",
        },
        muted: "#FAFAFA",
      },
      fontFamily: {
        display: ["'Archivo Black'", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1160px",
      },
    },
  },
  plugins: [],
};
