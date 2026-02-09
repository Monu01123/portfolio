/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Warm Creative Director" Theme Palette
        primary: "#050505", // Near Black background
        secondary: "#9ca3af", // Gray-400 for secondary text
        tertiary: "#111111", // Dark gray for cards
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // Accents
        "creative-orange": "#FF5500", // Vibrant Orange
        "creative-red": "#CC2200", // Deep Red
        border: "rgba(255, 255, 255, 0.1)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1a1a1a",
        hero: "0px 0px 50px -10px rgba(255, 85, 0, 0.3)",
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neon': '0 0 10px rgba(145, 94, 255, 0.5), 0 0 20px rgba(145, 94, 255, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'float': 'float 20s infinite linear',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateY(-100vh) rotate(720deg)' },
        }
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'], // Modern geometric sans
      }
    },
  },
  plugins: [],
}
