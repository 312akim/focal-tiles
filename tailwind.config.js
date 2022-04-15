const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': '#1f2937',
      'slate': '#cbd5e1',
      'indigo': '#4f46e5',
      'black': colors.black,
      'white': colors.white,
    },
    extend: {}
  },
  plugins: [],
}