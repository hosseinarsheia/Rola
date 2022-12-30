const unionColors = {
  blue: {
    S100: '#0088EF',
    S90: '#0088EFE5',
    S80: '#0088EFCC',
    S70: '#0088EFB2',
    S60: '#0088EF99',
    S50: '#0088EF80',
    S40: '#0088EF66',
    S30: '#0088EF4D',
    S20: '#0088EF33',
    S10: '#0088EF1A',
  },

  purple: {
    S100: '#7B61FF',
    S90: '#7B61FFE5',
    S80: '#7B61FFCC',
    S70: '#7B61FFB2',
    S60: '#7B61FF99',
    S50: '#7B61FF80',
    S40: '#7B61FF66',
    S30: '#7B61FF4D',
    S20: '#7B61FF33',
    S10: '#7B61FF1A',
  },

  teal: {
    S100: '#00E3EF',
    S90: '#1AE6F1',
    S80: '#33E9F2',
    S70: '#4DEBF4',
    S60: '#66EEF5',
    S50: '#80F1F7',
    S40: '#99F4F9',
    S30: '#B3F7FA',
    S20: '#CCF9FC',
    S10: '#E6FCFD',
  },

  black: {
    S100: '#2D3B48',
    S90: '#162534E5',
    S80: '#162534CC',
    S70: '#162534B2',
    S60: '#16253499',
    S50: '#16253480 ',
    S40: '#16253466',
    S30: '#1625344D',
    S20: '#16253433',
    S10: '#1625341A',
  },

  white: {
    S100: '#FFFFFF',
  },

  paleWhite: {
    S100: '#F2F3F3',
  },

  pink: '#FF2B51',
  orange: '#FF6B00',
  fuschia: '#EF5DA8',
  error: '#ED0006',
  valid: '#22D896',

  linearGradient: {
    blue1: ['#00E3EF', '#0088EF'],
    blue2: ['#E6F3FD', '#0088EF'],
    blue3: ['#00D4E3', '#00F2FF'],
    blue4: ['#0088EF1A', '#00E3EF'],
    blue5: ['#E6FCFD', '#0088EF'],
    blue6: ['#1625341A', '#162534'],
    button: ['#7B61FF', '#0088EF'],
  },
};
export const lightColors = {
  ...unionColors,
  backgroundColor: '#FFFFFF',
  text: unionColors.black.S80,
  textInput: unionColors.paleWhite.S100,
};

// Dark theme colors
export const darkColors = {
  ...unionColors,
  backgroundColor: '#162534',
  text: '#FFFFFF',
  textInput: unionColors.black.S90,
};
