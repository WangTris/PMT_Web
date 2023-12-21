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
        button2: "#8D0E10",
      },
      fz: {
        title: "6.4rem",
        sub_title: "3.2rem",
        heading: "3.6rem",
        lg_text: "3.6rem",
        text: "2.4rem",
      },
    },
  },
  plugins: [],
};
