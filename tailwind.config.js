module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["josefin sans"]
      },
      fontSize: {
        '7xl': '5rem'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
        '144': '36rem',
        '168': '42rem',
        '192': '48rem',
      },
      colors: {
        silver_tree: '#61C193',
        viridian: '#438766'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      inset: {
        '1/2': '50%'
      },
      margins: {
        '-36': '-9rem',
        '-48': '-12rem'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
      }
    }
  },
  variants: {
    height: ['responsive', 'group-hover']
  },
  plugins: []
}
