/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // toggle dark mode manually
  mode: "jit",
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./sections/**/*.{html,js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
        "primary-gray": "#F1F5F8",
        "primary-orange": "#F28C28",
        "secondary-blue": "#25618B",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      backgroundImage: {
        darkMenu:
          "linear-gradient(60deg, rgba(2,0,36,1) 0%, rgba(61,77,97,1) 100%)",
        menu: "linear-gradient(34deg, rgba(45,72,152,1) 0%, rgba(255,255,255,1) 100%)",
      },
    },
  },
  plugins: [],
};
