const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bg': "url('/src/assets/bg.png')",
        'bg-mobile': "url('/src/assets/bg-mobile.png')"
      }),
      colors: {
        primary: "#7E4FD6",
        light: "#d6bcfd"
      },
      fontFamily: {
        header: ["Oooh Baby", ...defaultTheme.fontFamily.sans]
      },
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [
  ],
};