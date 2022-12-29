module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':' #296CF2',
        'yellow': '#FFEB01',
        'purple': '#5C40EC',
        'white': '#FFFFFF',
        'orange': '#FF6F0F',
        'green':'#94E95D',
        'black':'#000000'
      },
      boxShadow:{
        '3xl':'5px 5px black',
        '5xl':'10px 10px 0px 0px white',
        'bordered-blue':' 8px 8px 0 -2px #296cf2, 8px 8px black',
        'bordered-black':' 8px 8px 0 -2px black, 8px 8px white',
        'bordered-orange':' 8px 8px 0 -2px #F96300, 8px 8px black',
      },
      fontFamily:{
        Jakarta: ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

