/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dceeff",
          200: "#b9ddff",
          500: "#1677c8",
          600: "#0b63ad",
          700: "#084f8c",
          900: "#092f4f"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(13, 82, 132, 0.10)"
      }
    },
  },
  plugins: [],
};