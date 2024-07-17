/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("rippleui")],
  rippleui: {
    removeThemes: ["dark"],
    defaultStyle: false,
    themes: [
      {
        themeName: "custom",
        colorScheme: "dark",
        colors: {
          primary: "#1fa060",
          backgroundPrimary: "#583533",
        },
      },
    ],
  },
};
