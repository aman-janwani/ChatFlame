/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        beige: "#f2f3d9",
        gray: { "100": "#1e1e1e", "200": "rgba(42, 43, 42, 0.6)" },
        darkolivegreen: "#0b4725",
        seagreen: {
          "100": "rgba(63, 146, 99, 0.15)",
          "200": "rgba(63, 146, 99, 0.2)",
        },
        black: "#000",
      },
      fontFamily: { rubik: "Rubik" },
      borderRadius: {
        xxs: "10px",
        small: "15px",
        base: "10000px",
        large: "1000000px",
      },
    },
    fontSize: {
      base: "0.63rem",
      lg: "0.75rem",
      xl: "0.88rem",
      "2xl": "1rem",
      "3xl": "1.25rem",
      "4xl": "1.5rem",
      "5xl": "2rem",
    },
  },
  corePlugins: { preflight: false },
};
