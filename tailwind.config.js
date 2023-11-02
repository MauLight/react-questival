const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      backgroundImage: {
        site: 'url(\'./img/joyBook_02.png\')',
        site2: 'url(\'./img/bg-site.png\')',
      },
      fontFamily: {
        primary: 'Josefin Sans',
        stoke: 'Stoke',
        zen: 'Zen Antique',
        body: ['Sono', 'serif'],
        title2: ['ZHOW', 'serif']
      }
    },
    darkMode: 'class',
    plugins: [nextui()],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
}