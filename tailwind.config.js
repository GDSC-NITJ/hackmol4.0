module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lighgreen':'#94E95D',
        'darkblue':' #296CF2',
        'orange': '#F96300'
      },
      boxShadow:{
        '3xl':'5px 5px black',
        '5xl':'10px 10px 0px 0px white',
        '4xl':'8px 8px black',
        'bordered-blue':' 8px 8px 0 -2px #296cf2, 8px 8px black',
        'bordered-black':' 8px 8px 0 -2px black, 8px 8px white',
        'bordered-orange':' 8px 8px 0 -2px #F96300, 8px 8px black',
        'bordered-yellow':' 0px 0px 0 5px #FFEB01',
      }
    },
  },
  plugins: [],
}

