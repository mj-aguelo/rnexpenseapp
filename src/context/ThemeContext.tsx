import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-native-paper';
import defaultTheme, {darkTheme} from 'theme';
import {useAppContext} from './AppContext';

function ThemeProvider({children}: PropsWithChildren) {
  const {state} = useAppContext();

  return (
    <Provider theme={state?.theme === 'light' ? defaultTheme : darkTheme}>
      {children}
    </Provider>
  );
}

export default ThemeProvider;
