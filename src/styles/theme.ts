export default {
  border: {
    radius: '0.4rem'
  },
  shadow: {
    default: '0 0 3.2rem 0 rgb(136 152 170 / 15%)'
  },
  sizes: {
    xsmall: '1.2rem',
    small: '1.4rem',
    medium: '1.6rem',
    large: '2.4rem',
    xlarge: '3.2rem',
    xxlarge: '4rem'
  },
  font: {
    family: "'Nunito Sans', sans-serif",
    semiRegular: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  colors: {
    default: '#3c4d69',
    primary: '#7889e8',
    secondary: '#f8fbfc',
    info: '#37d5f2',
    success: '#4fd69c',
    danger: '#f75676',
    warning: '#fc7c5f',
    white: '#fff',
    graphite: '#212529',
    background: '#f8f9fe'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  screen: {
    huge: '1170px',
    large: '1024px',
    medium: '768px',
    small: '375px'
  }
} as const
