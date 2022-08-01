import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const componentStyles = ({colors}: {colors: ReactNativePaper.ThemeColors}) =>
  StyleSheet.create({
    button: {
      borderRadius: 50,
      backgroundColor: colors.accent,
      height: 75,
      width: 75,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      position: 'absolute',
      bottom: 50,
      right: 10,
    },
  });

function useComponentStyles() {
  const {colors} = useTheme();
  const styles = useMemo(() => componentStyles({colors}), [colors]);

  return styles;
}

export default useComponentStyles;
