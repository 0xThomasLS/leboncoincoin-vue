module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'rgb(65, 131, 215)',
        orange: 'rgb(255, 110, 20)',
        gray: 'rgb(200, 200, 200)',
        black: 'rgb(0, 0, 0)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
