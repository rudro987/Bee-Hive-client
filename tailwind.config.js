/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
    extend: {
      colors: {
        'primaryFont': '#71ECB6',
        'secondaryColor': '#BAFE6D'
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