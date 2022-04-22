const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        100: '#d1fae5',
        400: '#34d399',
        700: '#047857',
      },
      'secondary': '#FAFAFA',
      'highlight': '#4f46e5',
      'black': colors.black,
      'white': colors.white,
    },
    extend: {}
  },
  plugins: [],
}