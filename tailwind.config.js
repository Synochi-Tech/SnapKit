/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato"],
      roboto: ["Roboto"],
    },
    colors: {
      main: "#0042B8",
      "main-500": "#0961FF",
      "main-400": "#9EC1FF",
      "main-300": "#E5EFFF",
      "main-100": "#F5F8FF",
      "main-200": "#CBD5E1",

      secondary: "#331E99",
      "secondary-500": "#5C43DA",
      "secondary-400": "#B9AEEF",
      "secondary-300": "#EDEAFB",
      "secondary-100": "#F8F6FD",
    },
  },
  plugins: [
    plugin(function ({ addVariant, addUtilities }) {
      addVariant("children-svg", "& svg"),
        addUtilities(
          {
            "input::-ms-reveal": {
              display: "none",
            },
          },
          ["responsive", "hover"]
        );
    }),
  ],
};
