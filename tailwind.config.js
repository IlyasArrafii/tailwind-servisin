/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Poppins"],
      },
      padding: {
        50: "50px",
        150: "150px",
        468: "468px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
