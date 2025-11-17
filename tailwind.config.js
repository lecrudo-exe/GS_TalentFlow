/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        fundo: "#f4f6fb",
        primario: "#6d28d9",
        escuro: "#0f172a",
      },
      fontFamily: {
        corpo: "var(--font-corpo)",
        titulos: "var(--font-titulos)",
      },
    },
  },
  plugins: [],
};
