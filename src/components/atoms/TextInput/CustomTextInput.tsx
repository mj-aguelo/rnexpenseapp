import React, {FC} from 'react';
import {TextInput} from 'react-native-paper';
import useComponentStyles from './CustomTextInput.styles';

export interface ICustomTextInput {
  label: string;
  value: string;
  defaultValue?: string;
  onChange?: Function;
  onBlur?: Function;
}

const CustomTextInput: FC<ICustomTextInput> = ({onChange, onBlur, ...rest}) => {
  const styles = useComponentStyles();

  const handleOnChange = (text: string) => {
    onChange && onChange(text);
  };

  const handleOnBlur = () => {
    onBlur && onBlur();
  };

  return (
    <TextInput
      style={styles.main}
      mode="outlined"
      onChangeText={text => handleOnChange(text)}
      onBlur={handleOnBlur}
      {...rest}
    />
  );
};

export default CustomTextInput;
