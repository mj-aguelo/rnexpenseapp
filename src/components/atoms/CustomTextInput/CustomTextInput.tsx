import React, {FC} from 'react';
import {TextInput, useTheme} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import useComponentStyles from './CustomTextInput.styles';

export interface ICustomTextInputProps extends Partial<TextInputProps> {
  theme?: ReactNativePaper.Theme;
  value: any;
}

const CustomTextInput: FC<ICustomTextInputProps> = ({
  onChangeText,
  onBlur,
  ...rest
}) => {
  const styles = useComponentStyles();
  const theme = useTheme();

  const handleOnChange = (text: string) => {
    onChangeText && onChangeText(text);
  };

  return (
    <TextInput
      style={styles.main}
      mode="outlined"
      onChangeText={text => handleOnChange(text)}
      onBlur={onBlur}
      {...rest}
      theme={theme}
    />
  );
};

export default CustomTextInput;
