/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#5868d5',
        secondary: '#4848d5',
        accent: '#F59E0B',
      },
      textColor: {
        primary: '#956480',
        secondary: '#E0BB72',
        accent: '#F59E0B',
      },
      borderColor: {
        primary: '#1E3A8A',
        secondary: '#E6E7E8',
        accent: '#F59E0B',
      },
    },
  },
  plugins: [],
}