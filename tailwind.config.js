/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["cursive", "David Libre"],
        IMFELL: ["serif", "IM Fell English SC"],
      },
      colors: {
        pink_custom: "#FFE4F3",
        braun: "#70441C",
        pink_mar: "#D897A0",
        amber_re: "#CBA35C",
        green_os: "#465539",
      },
    },
  },
  plugins: [],
};
