import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'modules/landing/screens/Home';
import useNavigationOptions from 'hooks/useNavigationOptions';
import AddIncome from 'modules/creation/screens/AddIncome';
import AddExpense from 'modules/creation/screens/AddExpense';

export type RootStackParamList = {
  Home: undefined;
  AddIncome: undefined;
  AddExpense: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  const navigationOptions = useNavigationOptions();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={navigationOptions}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="AddIncome"
            component={AddIncome}
            options={{title: 'Add Income', ...navigationOptions}}
          />
          <Stack.Screen
            name="AddExpense"
            component={AddExpense}
            options={{title: 'Add Expense', ...navigationOptions}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
