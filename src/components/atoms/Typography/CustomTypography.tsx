import React, {FC, PropsWithChildren} from 'react';
import {Text} from 'react-native-paper';
import useComponentStyles from './CustomTypography.styles';

export interface ICustomTypographyProps extends PropsWithChildren {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'label';
  color?: string;
}

const CustomTypography: FC<ICustomTypographyProps> = ({
  variant,
  color,
  children,
}) => {
  const styles = useComponentStyles();

  return <Text style={{...styles[variant], color: color}}>{children}</Text>;
};

export default CustomTypography;
