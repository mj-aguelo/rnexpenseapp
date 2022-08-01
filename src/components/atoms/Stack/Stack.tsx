import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';

export interface IStackProps extends PropsWithChildren {
  spacing?: number;
  ph?: number;
}

const Stack: FC<IStackProps> = ({spacing = 1, ph = 0, children}) => {
  const {spacing: themeSpacing} = useTheme();
  return (
    <View
      style={{paddingVertical: themeSpacing * spacing, paddingHorizontal: ph}}>
      {children}
    </View>
  );
};

export default Stack;
