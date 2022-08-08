/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/assets/bg-intro-desktop.png')",
      },
    },
    fontFamily: {
      font: ["Poppins"],
    },
    boxShadow: {
      "custom-shadow": "0px 6px 0px 1px rgba(0,0,0,0.2)",
      "submit-shadow": "0px 2px 0px 1px rgba(0,0,0,0.5)",
    },
  },
  plugins: [],
};
