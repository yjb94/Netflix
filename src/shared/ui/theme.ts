export const palette = {
  primaryBlack: '#000000',
  primaryRed: '#e50914',
  primaryWhite: '#ffffff',
  secondaryRed100: '#eb3942',
  secondaryRed200: '#c11119',
  secondaryRed300: '#f50723',
  secondaryBlue100: '#0071eb',
  secondaryBlue200: '#448ef4',
  secondaryBlue300: '#54b9c5',
  secondaryGreen: '#46d369',
  greyGrey10: '#e5e5e5',
  greyGrey20: '#dcdcdc',
  greyGrey25: '#d2d2d2',
  greyGrey50: '#bcbcbc',
  greyGrey100: '#b3b3b3',
  greyGrey150: '#979797',
  greyGrey200: '#808080',
  greyGrey250: '#777777',
  greyGrey350: '#545454',
  greyGrey400: '#414141',
  greyGrey450: '#404040',
  greyGrey500: '#3a3a3a',
  greyGrey550: '#363636',
  greyGrey600: '#333333',
  greyGrey650: '#2f2f2f',
  greyGrey700: '#2a2a2a',
  greyGrey750: '#262626',
  greyGrey800: '#232323',
  greyGrey850: '#181818',
  greyGrey900: '#141414',
};

export const theme = {
  colors: {
    ...palette,
  },
};

export type Colors = keyof typeof palette;

type AppThemes = {
  name: typeof theme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
