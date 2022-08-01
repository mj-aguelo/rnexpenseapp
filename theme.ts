import {DefaultTheme, DarkTheme} from 'react-native-paper';

export const defaultTheme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  spacing: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7ECA9C',
    accent: '#CCFFBD',
    tertiary: '#40394A',
    background: '#FFFFFF',
    error: '#FF5677',
    text: '#041C32',
    backdrop: '#FFFFFF',
  },
};

export const darkTheme = {
  ...DarkTheme,
  roundness: 2,
  version: 3,
  spacing: 8,
  colors: {
    ...DarkTheme.colors,
    primary: '#7ECA9C',
    accent: '#CCFFBD',
    tertiary: '#40394A',
    background: '#041C32',
    error: '#FF5677',
    text: '#FFFFFF',
    backdrop: '#041C32',
  },
};

type DefaultThemeOverride = typeof defaultTheme;
type DarkThemeOverride = typeof darkTheme;

declare global {
  namespace ReactNativePaper {
    interface Theme extends DefaultThemeOverride {}
    interface Theme extends DarkThemeOverride {}
  }
}
