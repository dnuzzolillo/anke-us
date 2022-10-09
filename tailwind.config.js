module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      red: '#CC0000',
      neutral: {
        10: '#F6F8FC',
        20: '#F1F4F9',
        30: '#E2E8F0',
        40: '#CBD4E1',
        50: '#94A3B8',
        60: '#64748B', // light fonts
        70: '#475569',
        80: '#27364B',
        90: '#1E2A3B',
        100: '#0F1A2A',
      },
      gris: {
        10: '#F8F8F8',
        20: '#DEDEDE',
        40: '#9A9A9A',
        60: '#707070',
        80: '#474747',
        100: '#2E2E2E',
        110: '#000000',
      },
      azul: {
        5: '#D4D4EC',
        7: 'rgba(39, 99, 165, 0.2)',
        8: '#EFEFF9',
        10: '#CCCCEC',
        15: '#BFBFE3',
        20: '#8080C7',
        40: '#4040AB',
        60: '#00008F', // main azul
        80: '#000075',
        100: '#000040',
      },
      rosa: {
        10: '#FEEDED',
        20: '#FBC8C8',
        40: '#F9A3A3',
        60: '#F56C6C',
        80: '#B85151',
        100: '#7A3636',
      },
      naranja: {
        20: '#FCE5D2',
        60: '#E26B0A',
      },
      verde: {
        20: '#E5F2E5',
        60: '#00B050'
      },
      morado: {
        20: '#ECBFEA',
        60: '#A832A2'
      },
      amarillo: {
        20: '#FFF2C7',
        60: '#FFC000',
        80: '#976400'
      },
      salud: {
        20: '#BED0E4',
        60: '#2763A5'
      },
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      }
    },
    fontSize: {
      '2xs': '14px',
      'xs': '16px',
      'sm': '18px',
      'md': '20px',
      'lg': '24px',
      'xl': '30px',
      '2xl': '32px',
    },
    container: {
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1300px',
      }
    },
    borderCustom: {
      '6': '6px'
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


