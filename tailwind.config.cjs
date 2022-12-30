/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#17171A",
      },
    },
  },
  plugins: [require("tailwindcss-dotted-background")],
};
