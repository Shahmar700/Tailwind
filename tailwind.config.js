/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "570px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        mycolors: {
          dark: "rgb(32,80,114)",
          light: "#009fe3",
          mygray: "#666",
          mybtn: "#feba02",
        },
      },
      spacing: {
        top30: "30px",
        0.23: "23%",
        0.24: "24%",
        200: "200px",
        230: "230px",
        240: "240px",
        270: "270px",
        0.3: "30%",
        0.32: "32%",
        0.48: "48%",
      },
      scale: {
        1005: "1.005",
      },
    },
  },
  plugins: [],
};
