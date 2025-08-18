/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 5px 15px 0 rgba(0, 0, 0, 0.12), 0 15px 35px 0 rgba(103, 110, 118, 0.08)",
      },
    },
    colors: {},
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
