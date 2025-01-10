/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}', // For the main App file in the root
    './cook/**/*.{js,jsx,ts,tsx}', // For files in the cook folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

