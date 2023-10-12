/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["ui-sans-serif", "system-ui"],
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

