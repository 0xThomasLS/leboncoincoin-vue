module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'rgb(121, 38, 79)',
        orange: 'rgb(255, 110, 20)',
        gray: 'rgb(240, 240, 240)',
        'light-gray': 'rgb(250, 250, 250)',
        'dark-gray': 'rgb(150, 150, 150)',
        black: 'rgb(0, 0, 0)',
        dark: 'rgb(40, 40, 40)',
        darker: 'rgb(20, 20, 20)',
        plum: 'rgb(121, 38, 79)',
        pink: 'rgb(252, 41, 122)',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
