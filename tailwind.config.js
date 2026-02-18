/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050505", // Deep Black
        secondary: "#888888", // Industrial Grey
        tertiary: "#1a1a1a", // Dark Grey
        "black-100": "#101010",
        "black-200": "#090909",
        "white-100": "#fefefe", // Almost White
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}
