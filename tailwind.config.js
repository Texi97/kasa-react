/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        interFont: [`"Inter"`, "sans-serif"],
        outfit: [`"Outfit"`, "sans-serif"],
      },
      colors: {
        "bleu-canard": "#0B5D6A",
        orange: "#FDB52A",
        "bleu-ciel": "#B2E7EE",
        "bleu-dark": "#182944",
        "bleu-electric": "#3083FF",
        gris: "#6E7891",
      },
    },
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [],
};
