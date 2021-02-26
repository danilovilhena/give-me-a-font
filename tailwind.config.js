module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'purple-700': '#7C40B9',
      'purple-600': '#9663c9'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'purple-700': '#7C40B9',
      'purple-600': '#9663c9'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'purple-700': '#7C40B9',
      'purple-600': '#9663c9'
    }),
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '2.5xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
