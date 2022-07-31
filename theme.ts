import {DefaultTheme} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7ECA9C',
    secondary: '#CCFFBD',
    tertiary: '#40394A',
    background: '#FFFFFF',
    error: '#FF5677',
  },
};

export default theme;
