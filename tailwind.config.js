module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': ' #296CF2',
        'yellow': '#FFEB01',
        'purple': '#5C40EC',
        'white': '#FFFFFF',
        'orange': '#FF6F0F',
        'green': '#94E95D',
        'black': '#000000',
        'lightblue': '#5C40EC'
      },
      fontFamily: {
        'Space-Grotesk': ['Space Grotesk', 'sans-serif'],
        'Plus-Jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'Red-Hat-Display': ['Red Hat Display', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '5px 5px black',
        '5xl': '10px 10px 0px 0px white',
        '4xl': '8px 8px black',
        'bordered-blue': ' 8px 8px 0 -2px #296cf2, 8px 8px black',
        'bordered-black': ' 8px 8px 0 -2px black, 8px 8px white',

        'bordered-orange': ' 8px 8px 0 -2px #FF6F0F, 8px 8px black',
        'bordered-yellow': ' 0px 0px 0 5px #FFEB01',
        'hack': '0px 0px 0 8px #D0A4FF'
      }
    },
  },
  plugins: [],
}

