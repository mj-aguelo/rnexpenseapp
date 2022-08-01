import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-native-paper';
import {defaultTheme, darkTheme} from 'theme';
import {useAppContext} from './AppContext';

function ThemeProvider({children}: PropsWithChildren) {
  const {state} = useAppContext();
  const isDarkMode = state?.theme === 'dark';

  return (
    <Provider theme={isDarkMode ? darkTheme : defaultTheme}>
      {children}
    </Provider>
  );
}

export default ThemeProvider;
