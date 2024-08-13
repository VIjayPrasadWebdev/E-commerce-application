/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./About.html",
    "./Products.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "w-480": "480px",
        "45%": "45vw",
        "50%": "70%",
        "90%": "85vw",
        "86%": "86%",
        "99%": "99.5vw",
      },
      height: {
        "30%": "33rem",
        "50vh": "50vh",
        "80%": "500px",
        "28rem": "24rem",
        "50px": "50px",
      },

      spacing: {
        "2px": "2px",
      },
      maxWidth: {
        "max-30%": "350px",
      },
      maxHeight: {},
      fontFamily: {
        gabarito: ["'Gabarito', sans-serif"],
        poppins: ["'Poppins', sans-serif"],
        Monte: ["Montserrat', sans-serif"],
        Lato: ["Lato', sans-serif"],
        DM: ["DM Serif Display, serif"],
        DMSans: ["DM Sans, sans-serif"],
        BtnFont: [
          "ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        ],
      },

      fontSize: {
        "link-size": "1.1rem",
      },
      colors: {
        winter: "#f2f2f2",
        "og-red": "red",
        "og-orange": "#f5b002",
        "black-light": "#191919",
        "snow-grey": "rgba(255, 255, 255, 0.25)",
        "little-dark": "#121212",
        "box-glass": "#ffffff1a",
      },
      screens: {
        tablet: "769px",
        laptopmini: "1023",
      },
      gridTemplateColumns: {
        "1/1-1/4": "280px 1fr",
      },
      gridTemplateRows: {
        "40-60": "40vh 60vh",
      },
      padding: {
        0.4: "0.1rem",
      },
      space: {
        3.5: "3.5rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
