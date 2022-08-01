import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const componentStyles = ({}: {colors: ReactNativePaper.ThemeColors}) =>
  StyleSheet.create({
    h1: {
      fontSize: 26,
    },
    h2: {
      fontSize: 24,
    },
    h3: {
      fontSize: 20,
    },
    h4: {
      fontSize: 16,
    },
    p: {
      fontSize: 12,
    },
    label: {
      fontSize: 14,
    },
  });

function useComponentStyles() {
  const {colors} = useTheme();
  const styles = useMemo(() => componentStyles({colors}), [colors]);

  return styles;
}

export default useComponentStyles;
