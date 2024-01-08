/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      50: "#ecfdf6",
      100: "#d1faea",
      200: "#a7f3d5",
      300: "#6ee7b7",
      400: "#34d394",
      500: "#10b976",
      600: "#05965c",
      700: "#04784a",
      800: "#065f3c",
      900: "#064e31",
      950: "#022c1b",
      black: "#0a0a0a",
      divider: "rgb(209 213 219)",
    },
  },
  corePlugins: {
    divideStyle: true,
  },
  plugins: [require("daisyui")],
};
