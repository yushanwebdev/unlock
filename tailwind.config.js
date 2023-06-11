/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        one: "0px 15px 30px rgba(0, 0, 0, 0.04)",
      },
      colors: {
        secondary: {
          400: "#757784",
          600: "#47495B",
          950: "#171F46",
        },
        grayOne: "#F0F4F7",
        primary: "#FFECE8",
      },
    },
  },
  plugins: [],
};
