module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lighgreen':'#94E95D'
     
      },
      boxShadow:{
        '3xl':'5px 5px black',
        '5xl':'10px 10px 0px 0px white',
        '4xl':'8px 8px black',
      }
    },
  },
  plugins: [],
}

