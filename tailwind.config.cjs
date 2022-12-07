/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#05445E',
        'secondary': '#189AB4',
        'baby-blue': '#D4F1F4',
        'blue-green': '#75E6DA',

      }
    },
  },
  plugins: [],
}