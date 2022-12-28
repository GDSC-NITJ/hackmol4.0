module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lighgreen':'#94E95D',
        'darkblue':' #296CF2'
      },
      boxShadow:{
        '3xl':'5px 5px black',
        '5xl':'10px 10px 0px 0px white',
      }
    },
  },
  plugins: [],
}

