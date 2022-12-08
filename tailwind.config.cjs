/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D033B",
        secondary: "#810CA8",
        "lavender": "#E5B8F4",
        "purple-light": "#C147E9",
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
