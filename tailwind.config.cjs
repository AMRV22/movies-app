/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006778",
        secondary: "#0093AB",
        "yellow-b": "#FFD124",
        "aqua-bg": "#00AFC1",
        "red-bg" :"#E0144C",
      },
      fontFamily: {
        avenir: ["AvenirRegular", "sans-serif"],
        "avenir-bold": ["AvenirBold", "sans-serif"],
        "avenir-demi": ["AvenirSemi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
