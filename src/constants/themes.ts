export const LIGHT: string = 'light';
export const DARK: string = 'dark';

const dropdown = {
  backgroundColor: '#e1e1e1',
  color: '#000000',
  borderColor: '#848080',
  hoveredBackground: '#848080',
};

const Themes = {
  [LIGHT]: {
    backgroundColor: '#f0ffff',
    primaryColor: '#4c4c4c',
    secondaryColor: '#848080',
    header: {
      titleColor: '#ffa7c4',
    },
    card: {
      titleColor: '#d23669',
      boxShadowColor: 'rgba(225,225,225, 1)',
    },
    button: {
      backgroundColor: '#ffa7c4',
      borderBottomColor: '#ffa7c4',
    },
    table: {
      timeColumnTextColor: '#d23669',
      hoverColor: '#bbffff',
      borderColor: '#9b9b9b',
    },
    dropdown,
    themeName: LIGHT,
  },
  [DARK]: {
    backgroundColor: '#282c35',
    primaryColor: '#e1e1e1',
    secondaryColor: '#848080',
    header: {
      titleColor: '#72d7d1',
    },
    card: {
      titleColor: '#72d7d1',
      boxShadowColor: 'rgba(225,225,225, .5)',
    },
    button: {
      backgroundColor: '#72d7d1',
      borderBottomColor: '#72d7d1',
    },
    table: {
      timeColumnTextColor: '#72d7d1',
      hoverColor: '#3b444b',
      borderColor: '#9b9b9b',
    },
    dropdown,
    themeName: DARK,
  },
};

export default Themes;
