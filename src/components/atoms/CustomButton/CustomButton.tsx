import {useTheme} from 'react-native-paper';
import React, {FC, PropsWithChildren} from 'react';
import {Button} from 'react-native-paper';
import {TextStyle, ViewStyle} from 'react-native';

export interface ICustomButtonProps extends PropsWithChildren {
  color?: string;
  labelColor?: string;
  onPress?: Function;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  color,
  labelColor,
  onPress,
  style,
  labelStyle,
}) => {
  const {colors} = useTheme();
  const defaultColor = color ?? colors.primary;
  const defaultLabelColor = labelColor ?? colors.backdrop;

  const handleOnPress = () => {
    onPress && onPress();
  };

  return (
    <Button
      onPress={handleOnPress}
      style={{...style, backgroundColor: defaultColor}}
      labelStyle={{...labelStyle, color: defaultLabelColor}}>
      {children}
    </Button>
  );
};

export default CustomButton;
