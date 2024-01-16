import type { Config } from 'tailwindcss'

const px2rem = (px: number) => px / 16 + 'rem'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/cmp/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      h1: [
        px2rem(160),
        {
          letterSpacing: '-0.03em',
          lineHeight: px2rem(160),
        },
      ],
      'h1-alt': [
        px2rem(140),
        {
          letterSpacing: '-0.03em',
          lineHeight: px2rem(129),
        },
      ],
      'h1-alt2': [
        px2rem(85),
        {
          letterSpacing: '-0.03em',
          lineHeight: px2rem(85),
        },
      ],
      h2: [
        px2rem(88),
        {
          letterSpacing: '-0.03em',
          lineHeight: px2rem(88),
        },
      ],
      h3: [
        px2rem(25),
        {
          letterSpacing: '-0.02em',
          lineHeight: px2rem(32),
        },
      ],
      'h3-alt': [
        px2rem(56),
        {
          letterSpacing: '-0.01em',
          lineHeight: '100%',
        },
      ],
      h4: [
        px2rem(15),
        {
          letterSpacing: '-0.02em',
          lineHeight: px2rem(16),
        },
      ],
      p: [px2rem(18), px2rem(25)],
      'p-alt': [px2rem(19), px2rem(26)],
      intro: [px2rem(24), { lineHeight: px2rem(32) }],
      sm: [
        px2rem(15),
        {
          letterSpacing: '-0.02em',
          lineHeight: px2rem(19),
        },
      ],
      medium: px2rem(19),
      xs: px2rem(12),
      nav: [px2rem(36), px2rem(68)],
      'nav-mobile-main': [px2rem(48), px2rem(86)],
      'nav-mobile-sub': [px2rem(18), px2rem(40)],
      'h1-m': [
        px2rem(80),
        {
          letterSpacing: '-0.03em',
          lineHeight: px2rem(80),
        },
      ],
      'h2-m': [
        px2rem(64),
        {
          letterSpacing: '-0.03em',
          lineHeight: px2rem(60),
        },
      ],
      'h3-m': [
        px2rem(22),
        {
          letterSpacing: '-0.02em',
          lineHeight: px2rem(28),
        },
      ],
      'intro-m': [px2rem(22), { lineHeight: px2rem(28) }],
      'btn-sm': [
        px2rem(12),
        {
          lineHeight: px2rem(10.1),
        },
      ],
      'btn-md': [
        px2rem(15),
        {
          lineHeight: px2rem(12.63),
        },
      ],
      'btn-lg': [
        px2rem(20),
        {
          lineHeight: px2rem(16.84),
        },
      ],
    },
    fontWeight: {
      light: '300',
      normal: 'normal',
      bold: 'bold',
      heavy: '900',
    },
    maxHeight: {
      v60: '60vh',
      none: 'none',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
      dark: {
        400: '#160D13',
        300: '#504D54',
        200: '#8E8E93',
        100: '#CECFD1',
        50: '#E7E7E7',
      },
      yellow: {
        600: '#776000',
        500: '#BB9700',
        400: '#FFCE00',
        300: '#FFDC4C',
        200: '#FFEB99',
        100: '#FFFAE5',
      },
      orange: {
        600: '#773300',
        500: '#BB5000',
        400: '#FF6D00',
        300: '#FF994C',
        200: '#FFC499',
        100: '#FFF0E5',
      },
      red: {
        600: '#770007',
        500: '#BB000A',
        450: '#B60015',
        400: '#FF1320',
        300: '#FF5A63',
        200: '#FFA0A6',
        100: '#FFE7E8',
      },
      pink: {
        600: '#572E66',
        500: '#9654B3',
        400: '#D57DFF',
        300: '#E19DFF',
        200: '#EDBEFF',
        100: '#F8E2FF',
      },
      violette: {
        600: '#250032',
        500: '#3F0055',
        400: '#580075',
        300: '#86449D',
        200: '#B388C2',
        100: '#DFCCE6',
      },
      'dark-green': {
        600: '#002A2A',
        500: '#004647',
        400: '#006162',
        300: '#448E8E',
        200: '#88B8B9',
        100: '#CCE1E2',
      },
      'light-green': {
        600: '#005C46',
        500: '#009B78',
        400: '#01D6A7',
        300: '#44E6C1',
        200: '#88F3DA',
        100: '#CCFBF0',
      },
      purple: {
        600: '#110F4E',
        500: '#211E85',
        400: '#342FB9',
        300: '#6763CF',
        200: '#9C9AE3',
        100: '#D4D3F4',
      },
      blue: {
        600: '#002766',
        500: '#0046B3',
        400: '#0066FF',
        300: '#448EFF',
        200: '#88B6FF',
        100: '#CCDFFF',
      },
      'dark-red': {
        600: '#4E0005',
        500: '#84000B',
        400: '#B60015',
        300: '#CE4450',
        200: '#FFA0A6',
        100: '#FFE7E8',
      },
    },
    extend: {
      transitionDuration: {
        4000: '4000ms',
      },
      screens: {
        xsm: { max: '400px' },
      },
      gridTemplateColumns: {
        searchResults: '2fr 3fr 1fr',
        searchStaffResults: '2fr 2fr 2fr 1fr',
        news: '2fr 5fr 5fr',
      },
      zIndex: {
        '-1': '-1',
        '1': '1',
        header: '100',
        '99': '99',
      },
      margin: {
        45.5: px2rem(45.5 * 4),
      },
      width: {
        '3/8': (3 / 8) * 100 + '%',
        '2/10': (2 / 10) * 100 + '%',
      },
      minWidth: {
        fit: 'fit-content',
      },
      spacing: {
        4.5: px2rem(4.5 * 4),
        6.5: px2rem(6.5 * 4),
        7.5: px2rem(7.5 * 4),
        23: px2rem(23 * 4),
        50: px2rem(50 * 4),
        100: px2rem(100 * 4),
        header: '82px',
      },
      backgroundSize: {
        'h-full': 'auto 100%',
      },
      backgroundImage: {
        'main-gradient':
          'linear-gradient(138.66deg, #6EABC0 5.5%, rgba(255, 241, 215, 0.2) 46.5%, #F1511E 94.66%)',
      },
    },
  },
  variants: {
    columnCount: ['responsive'],
    extend: {
      translate: ['group-hover', 'group-focus'],
    },
  },
}
export default config
