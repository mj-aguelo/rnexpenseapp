import React, {FC, PropsWithChildren} from 'react';
import {FlexStyle, View, ViewStyle} from 'react-native';
import {useTheme} from 'react-native-paper';

export interface IStackProps extends PropsWithChildren {
  spacing?: number;
  ph?: number;
  borderWidth?: number;
  borderBottomWidth?: ViewStyle['borderBottomWidth'];
  borderColor?: string;
  borderRadius?: number;
  flex?: FlexStyle['flex'];
  display?: FlexStyle['display'];
  justifyContent?: FlexStyle['justifyContent'];
  alignContent?: FlexStyle['alignContent'];
  alignItems?: FlexStyle['alignItems'];
}

const Stack: FC<IStackProps> = ({spacing = 1, ph = 0, children, ...rest}) => {
  const {spacing: themeSpacing} = useTheme();
  return (
    <View
      style={{
        paddingVertical: themeSpacing * spacing,
        paddingHorizontal: ph,
        ...rest,
      }}>
      {children}
    </View>
  );
};

export default Stack;
