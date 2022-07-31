import {DefaultTheme} from 'react-native-paper';

const defaultTheme = {
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

export const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7ECA9C',
    secondary: '#CCFFBD',
    tertiary: '#40394A',
    background: '#000000',
    error: '#FF5677',
  },
};

export default defaultTheme;
