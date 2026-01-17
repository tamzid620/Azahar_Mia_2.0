/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { 
        airstrike: ["Airstrike", "sans-serif"],
        kosmos: ['"Planet Kosmos"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        wanted: ['Wanted'],
       },
        colors: {
        primary_color: "#2e3a59",
        secondary_color: '#1a1f36',
        light_yellow:" #f6c90e",
        dark_yellow: "#d49c03",
        header_color: "#f5f5f5",
        para_color: "#d1d5db"
      },
    },
  },
  plugins: [require("daisyui")],
};
