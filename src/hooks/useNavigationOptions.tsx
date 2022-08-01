import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Button, useTheme} from 'react-native-paper';
import {useAppContext} from 'context/AppContext';
import {setTheme} from 'store/actions';

function useNavigationOptions(): StackNavigationOptions {
  const {colors} = useTheme();
  const {state, dispatch} = useAppContext();

  const handleToggleTheme = () =>
    dispatch(setTheme(state?.theme === 'light' ? 'dark' : 'light'));

  const options: StackNavigationOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerRight: () => (
      <Button labelStyle={{color: colors.error}} onPress={handleToggleTheme}>
        toggle
      </Button>
    ),
  };

  return options;
}

export default useNavigationOptions;
