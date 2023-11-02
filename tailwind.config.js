/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "main-layout": "max(200px, 30%) 1fr",
      },
      textUnderlineOffset: {
        16: "16px",
      }
    },
  },
  plugins: [],
}

