/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        gob: {
          100: "#67DCEB",
          200: "#4ED6E7",
          300: "#35D0E4",
          400: "#1BCAE0",
          500: "#02C4DD",
          600: "#029DB1",
          700: "#01899B",
          800: "#017685",
          900: "#01626F",
        },
      },
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
