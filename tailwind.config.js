/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      primary:'#4e74ec',
      success:'#3dcf7e',
      white:'#ffffff',
      'transparent':'transparent',
      'black':{
        icon:'#878a99',
        700:'#1e1a22'
      },

      // text colors
      'color':{
        'title':'#19242f',
        'subtitle':'#878a99',
        'layout-overal':'#0f111459',
        'page-content':'#f7f7f7',
        'hover-icon-button':'#e9ebec'
      },

      input:{
        'border':'#dde1ef',
        'focus':'#afc0f7',
        'focus-shadow':' 0 0 1 0.25rem rgba(#3762ea,.25)',
        'error':'#ff6c6c',
        'text':'#878a99'
      },
      



    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      poppins: ['Poppins', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}