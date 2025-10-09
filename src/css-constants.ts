export const BREAKPOINTS = {
  mobile: '375px',
  desktop: '1440px',
} as const

export const COLORS = {
  primary: {
    blue950: 'hsl(233, 26%, 24%)',
    green500: 'hsl(136, 64%, 51%)',
    cyan400: 'hsl(192, 69%, 51%)',
  },
  neutral: {
    gray600: 'hsl(233, 8%, 62%)',
    gray100: 'hsl(220, 16%, 96%)',
    gray50: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 100%, 100%)',
  },
} as const

export const FONT = {
  family: "'Public Sans', sans-serif",
  weights: {
    light: 300,
    regular: 400,
    bold: 700,
  },
} as const

export const FONT_SIZE = {
  body: '18px',
} as const