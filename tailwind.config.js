const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      fontFamily: {
        sourceCodePro: ["Source Code Pro"],
        oswald: ["Oswald"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
