import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'modules/landing/screens/Home';
import useNavigationOptions from 'hooks/useNavigationOptions';

const Stack = createStackNavigator();

const Navigator = () => {
  const navigationOptions = useNavigationOptions();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
