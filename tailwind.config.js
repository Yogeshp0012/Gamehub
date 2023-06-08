/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "lemonade", "dracula", "lofi","night"]
  },
  plugins: [require("daisyui")],
}
