/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["*.html", "node_modules/flowbite/**/*.js",'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
      },
      padding: {
        10: "10px",
        50: "50px",
        150: "150px",
        468: "468px",
        86: "86px",
      },
      width:{
        560: "560px",
      },
      height: {
        150: "150px",
        64: "64px",
      },
      margin: {
        30: "30px",
      },
      colors: {
        orange: "#FF7F00",
      },
      backgroundColor:{
        orange: "#FF7F00",
      },
      screens: {
        mobile: { max: "639px" },
        tablet: { min: "768px", max: "1023px" },
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui"), require('@tailwindcss/typography'),require('tw-elements/dist/plugin')],
};
