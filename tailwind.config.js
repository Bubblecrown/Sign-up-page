/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'hero-pattern': "url('/public/assets/bg-intro-desktop.png')",
    }},
  },
  plugins: [],
};
