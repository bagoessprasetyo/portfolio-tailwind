/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
        dark: '#0f172a',
      },
      screens:{
        '2x':'1320px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
  
}

