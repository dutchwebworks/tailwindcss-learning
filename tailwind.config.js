/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        p80: "0 10px 5px theme('colors.p80-primary'), 0 0 20px theme('colors.p80-secondary')"
      },
      colors: {
        "p80-primary": "#3da8f5",
        "p80-secondary": "#2a526f",
        "p80-accent": "#c2570a"
      }
    },
  },
  plugins: [],
}

