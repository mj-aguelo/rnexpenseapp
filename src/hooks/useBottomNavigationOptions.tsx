import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function useBottomNavigationOptions() {
  const {colors} = useTheme();
  const bottomNavigation = (iconName: string) => {
    const options: BottomTabNavigationOptions = {
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.background,
      },
      tabBarLabelStyle: {
        color: colors.primary,
      },
      tabBarIcon: () => (
        <MaterialCommunityIcons
          color={colors.primary}
          name={iconName}
          size={20}
        />
      ),
    };

    return options;
  };

  return {bottomNavigation};
}

export default useBottomNavigationOptions;
