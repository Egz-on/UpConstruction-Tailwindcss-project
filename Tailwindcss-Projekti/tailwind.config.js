/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fontprimary:['Roboto', 'sans-serif'],
      },
      colors: {
        "brand-black": "rgba(0, 0, 0, 0.8)",
      }
    },
  },
  plugins: [],
}

