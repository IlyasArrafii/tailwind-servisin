/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
      },
      padding: {
        50: "50px",
        150: "150px",
        468: "468px",
        86: "86px",
      },
      colors: {
        orange: "#FF7F00",
      },
      screens: {
        mobile: { min: "280px", max: "540px" },
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
