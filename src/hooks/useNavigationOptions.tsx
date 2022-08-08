import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Button, useTheme} from 'react-native-paper';
import {useAppContext} from 'context/AppContext';
import {APP_SET_THEME} from 'store/actions';

function useNavigationOptions(): StackNavigationOptions {
  const {colors} = useTheme();
  const {state, dispatch} = useAppContext();
  const isDarkMode = state?.theme === 'dark';

  const handleToggleTheme = () => {
    dispatch({type: APP_SET_THEME, payload: isDarkMode ? 'light' : 'dark'});
  };

  const options: StackNavigationOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.backdrop,
    headerBackTitleVisible: false,
    headerRight: () => (
      <Button onPress={handleToggleTheme}>
        <Ionicons
          color={colors.backdrop}
          name={isDarkMode ? 'moon' : 'moon-outline'}
          size={20}
        />
      </Button>
    ),
  };

  return options;
}

export default useNavigationOptions;
