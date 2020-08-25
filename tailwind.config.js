const { colors } = require('tailwindcss/defaultTheme')

/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '500': 'hsl(209, 10%, 55%)',
          '600': 'hsl(209, 15%, 45%)',
          '700': 'hsl(209, 15%, 35%)',
          '800': 'hsl(209, 20%, 25%)',
          '900': 'hsl(209, 25%, 17%)',
        },
        black: 'hsl(209, 70%, 8%)'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
