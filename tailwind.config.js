/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '788px',
      lg: '1100px',
      xl: '1440px'
    },
    extend: {
      colors: {
        bgColor: '#ffffff',
	      secondColor: '#f54300',
	      mainColor: '#7dd87d',
	      textColor: '#130849',
	      otherColor: '#999fb9'
      }
    },
  },
  plugins: [],
}
