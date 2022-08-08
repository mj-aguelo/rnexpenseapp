import React, {FC, PropsWithChildren} from 'react';
import {TextStyle} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import useComponentStyles from './CustomTypography.styles';

export interface ICustomTypographyProps extends PropsWithChildren {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'label';
  color?: string;
  textAlign?: TextStyle['textAlign'];
}

const CustomTypography: FC<ICustomTypographyProps> = ({
  variant = 'p',
  color,
  children,
  textAlign,
}) => {
  const styles = useComponentStyles();
  const {colors} = useTheme();

  return (
    <Text style={{...styles[variant], color: color ?? colors.text, textAlign}}>
      {children}
    </Text>
  );
};

export default CustomTypography;
