module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'blue-grey': { // Primary/Neutrals
        50: '#F0F4F8',
        70: '#D9E2EC',
        100: '#BCCCDC',
        200: '#9FB3C8',
        300: '#829AB1',
        400: '#627D98',
        500: '#486581',
        600: '#334E68',
        700: '#243B53',
        800: '#102A43'
      },
      'light-blue': { // Supporting
        50: '#E3F8FF',
        70: '#B3ECFF',
        100: '#81DEFD',
        200: '#5ED0FA',
        300: '#40C3F7',
        400: '#2BB0ED',
        500: '#127FBF',
        600: '#0B69A3',
        700: '#243B53',
        800: '#035388'
      },
      'cyan': { // Supporting
        50: '#E0FCFF',
        70: '#BEF8FD',
        100: '#87EAF2',
        200: '#54D1DB',
        300: '#38BEC9',
        400: '#2CB1BC',
        500: '#14919B',
        600: '#0E7C86',
        700: '#0A6C74',
        800: '#044E54'
      },
      'pink': {
        50: '#F2EBFE',
        70: '#DAC4FF',
        100: '#B990FF',
        200: '#A368FC',
        300: '#9446ED',
        400: '#8719E0',
        500: '#7A0ECC',
        600: '#690CB0',
        700: '#580A94',
        800: '#44056E'
      },
      'red': {
        50: '#FFE3E3',
        70: '#FFBDBD',
        100: '#FF9B9B',
        200: '#F86A6A',
        300: '#EF4E4E',
        400: '#E12D39',
        500: '#CF1124',
        600: '#AB091E',
        700: '#8A041A',
        800: '#610316'
      },
      'yellow': {
        50: '#FFFBEA',
        70: '#FFF3C4',
        100: '#FCE588',
        200: '#FADB5F',
        300: '#F7C948',
        400: '#F0B429',
        500: '#DE911D',
        600: '#CB6E17',
        700: '#B44D12',
        800: '#8D2B0B'
      },
      'green': {
        50: '#EFFCF6',
        70: '#C6F7E2',
        100: '#8EEDC7',
        200: '#65D6AD',
        300: '#3EBD93',
        400: '#27AB83',
        500: '#199473',
        600: '#147D64',
        700: '#0C6B58',
        800: '#014D40'
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}