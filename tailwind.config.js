module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      maxWidth: {
        custom: '60rem',
      },
      spacing: {
        76: '19rem',
      },
      fontSize: {
        xxs: ['0.625em',{lineHeight:'1rem'}]
      },
      boxShadow: {
        '4xl': '0 45px 70px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
