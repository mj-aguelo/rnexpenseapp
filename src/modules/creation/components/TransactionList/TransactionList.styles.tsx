import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const componentStyles = ({}: {colors: ReactNativePaper.ThemeColors}) =>
  StyleSheet.create({
    main: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

function useComponentStyles() {
  const {colors} = useTheme();
  const styles = useMemo(() => componentStyles({colors}), [colors]);

  return styles;
}

export default useComponentStyles;
