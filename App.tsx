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
import AppContextProvider from 'context/AppContext';
import ThemeProvider from 'context/ThemeContext';
import Navigator from 'navigation/Navigator';

const App = () => {
  return (
    <AppContextProvider>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default App;
