import {useTheme} from 'react-native-paper';
import React, {FC, PropsWithChildren} from 'react';
import {Button} from 'react-native-paper';
import useComponentStyles from './FloatingButton.styles';

export interface IFloatingButtonProps extends PropsWithChildren {
  color?: string;
  labelColor?: string;
  onPress?: Function;
}

const FloatingButton: FC<IFloatingButtonProps> = ({
  children,
  color,
  labelColor,
  onPress,
}) => {
  const styles = useComponentStyles();
  const {colors} = useTheme();
  const defaultColor = color ?? colors.primary;
  const defaultLabelColor = labelColor ?? colors.backdrop;

  const handleOnPress = () => {
    onPress && onPress();
  };

  return (
    <Button
      onPress={handleOnPress}
      style={{...styles.button, backgroundColor: defaultColor}}
      labelStyle={{color: defaultLabelColor}}>
      {children}
    </Button>
  );
};

export default FloatingButton;
