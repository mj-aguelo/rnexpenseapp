/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppContextProvider from 'context/AppContext';
import Navigator from 'navigation/Navigator';

import {initialState} from 'store/initialState';
import {appReducer} from 'store/appReducer';
import theme from 'theme';

const App = () => {
  return (
    <AppContextProvider initialState={initialState} reducer={appReducer}>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </AppContextProvider>
  );
};

export default App;
