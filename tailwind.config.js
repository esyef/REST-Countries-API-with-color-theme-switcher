/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      nunito: [ 'Nunito Sans', 'sans-serif' ]
    },
    colors: {
      white: { 50: '#FFF', },
      gray: { 50: '#F2F2F2', 100: '#848484' },
      black: { 50: '#2B3844', 100: '#202C36' },
      current: 'currentColor'
    },
  },
  plugins: [],
}