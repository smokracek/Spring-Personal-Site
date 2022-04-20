module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: "Helvetica",
    },
    extend: {
      colors: {
        themeRed: "#BF6374",
        themeDarkBlue: "#333333",
        themeBlack: "#222222",
        themeLightBlue: "#93BFBB",
        themeGreen: "#A7BF8F",
        themeText: "#DDDDDD",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
