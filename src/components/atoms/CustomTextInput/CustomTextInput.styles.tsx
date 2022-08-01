import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const componentStyles = ({colors}: {colors: ReactNativePaper.ThemeColors}) =>
  StyleSheet.create({
    main: {
      color: colors.text,
    },
  });

function useComponentStyles() {
  const {colors} = useTheme();
  const styles = useMemo(() => componentStyles({colors}), [colors]);

  return styles;
}

export default useComponentStyles;
