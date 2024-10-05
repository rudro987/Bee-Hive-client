/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
    extend: {
      colors: {
        'primaryFont': '#71ECB6',
        'secondaryColor': '#BAFE6D',
        'secondaryBg': '#242424'
      },
      fontFamily: {
        'primaryFont': ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}