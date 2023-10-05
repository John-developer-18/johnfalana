/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily:{
        Mont:['Montserrat','sans-serif']
      },
      colors:{
        myYellow:'rgb(216, 145, 13)'
      },
      dropShadow:{
        rxl:'0 35px 35px rgba(216, 145, 13, 0.5)'
      },
      boxShadow:{
        rxl:'0 5px 5px rgba(216, 145, 13, 0.5)'
      }
    },
  },
  plugins: [],
}