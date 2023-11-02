/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "main-layout": "max(200px, 30%) 1fr",
      },
      textUnderlineOffset: {
        16: "16px",
      },
      keyframes: {
        "fade-in-tb": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: 0},
          "100%": { opacity: 1}
        },
      },
      animation: {
        "fade-in-tb": "fade-in-tb 1.5s ease-in-out",
        "fade-in-tb-2": "fade-in-tb 2s ease-in-out",
        "fade-in-tb-3": "fade-in-tb 3s ease-in-out",
        "fade-in": "fade-in 1.5s ease-in-out",
        "fade-in-2": "fade-in 2s ease-in-out",
        "fade-in-3": "fade-in 3s ease-in-out",
      }
    },
  },
  plugins: [],
}

