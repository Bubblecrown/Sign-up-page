/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/images/bg-intro-desktop.png')",
        "hero-pattern-mobile": "url('/public/images/bg-intro-mobile.png')",
      },
    },
    fontFamily: {
      font: ["Poppins"],
    },
    boxShadow: {
      "custom-shadow": "0px 6px 0px 1px rgba(0,0,0,0.2)",
      "submit-shadow": "0px 2px 0px 1px rgba(0,0,0,0.5)",
    },
    screens: {
      'ss': '240px',
      's': '360px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1286px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
