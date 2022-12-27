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
      }
    },
  },
  plugins: [],
}

