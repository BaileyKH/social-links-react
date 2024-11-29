/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  			inter: ['Inter"', 'sans-serif']
  		},
      colors: {
        accentGreen: '#c5f82a',
        greySeven: '#333333',
        grayEight: '#1f1f1f',
        greyNine: '#141414'
      }
    },
  },
  plugins: [],
}