/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["PixeliProsto"],
        custom_reg: ["Minecraft"],
      },
      colors: {
        "my-red": "#E52525",
      },
    },
  },
  plugins: [],
};
