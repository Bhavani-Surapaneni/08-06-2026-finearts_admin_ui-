/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#a842df",
        "neon-pink": "#ee68e0",
        "soft-gold": "#f4b16a",
        "white-glow": "#f6f8f8",
        "dark-purple": "#55409a",
        "accent-rose": "#c8616b",
        "background-dark": "#0b0b0f",
        "deep-shadow": "#2f1d31",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
