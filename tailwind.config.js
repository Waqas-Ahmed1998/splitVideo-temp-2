const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      xs: "319px",
      iphone6: "370px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
// content: ["./src/**/*.{html,js}"],
