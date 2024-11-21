/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["cursive", "David Libre"],
        IMFELL: ["serif", "IM Fell English SC"],
        merienda: ['cursive', "Merienda"]
      },
      colors: {
        pink_custom: "#0C343C",
        braun: "#D2B892",
        pink_mar: "#3F7477",
        amber_re: "#3ECC95",
        green_os: "#3F7477",
      },
    },
  },
  plugins: [],
};
