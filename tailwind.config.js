/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%, 50%": { transform: "translateX(-110%)" },
          // "50% ": { transform: "translateX(1000%)" },
          "100% ": { transform: "translateX(200%)" },
        },
      },
      animation: {
        loading: "loading ease-in-out  2.2s infinite",
      },
      colors: {
        main: "#211F1F",
        text: "#DCAE32",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
