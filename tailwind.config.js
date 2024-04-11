/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./screens/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "Montserrat": ["Montserrat"],
        "Quicksand": ["Quicksand"],
      }
    },
  },
  plugins: [],
}

