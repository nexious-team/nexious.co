/* eslint-disable no-undef */
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
}
