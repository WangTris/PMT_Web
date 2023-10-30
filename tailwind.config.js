/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Inter, sans-serif",
    },
    extend: {
      colors: {
        primary: "#D02023",
        accent: "#313131",
        accent2: "#D2D2D2",
      },
    },
  },
  plugins: [],
};
