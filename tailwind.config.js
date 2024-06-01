const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    fontFamily:{
      'pop' : ['Poppins', 'sans-serif'],
      'dm' :['DM Sans', 'sans-serif'],
      'nun' :['Nunito', 'sans-serif'],

        },
    extend: {
      colors : {
        'parbel' : '#3661FC',
        'blc' :  '#1A1A1A'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

