import React, {FC} from 'react';
import CustomTextInput, {
  ICustomTextInputProps,
} from '../CustomTextInput/CustomTextInput';

export interface ICustomNumberTextInputProps
  extends Partial<ICustomTextInputProps> {
  theme?: ReactNativePaper.Theme;
  value: any;
}

const CustomNumberInput: FC<ICustomNumberTextInputProps> = ({
  onChangeText,
  ...rest
}) => {
  const handleOnChangeText = (value: string) => {
    const parsedValue = parseFloat(value);

    if (!onChangeText) {
      return;
    }

    if (value.indexOf('.') === value.lastIndexOf('.') || value === '') {
      onChangeText(value);
    } else if (!isNaN(parsedValue)) {
      onChangeText(`${parsedValue}`);
    }
  };
  return (
    <CustomTextInput
      onChangeText={handleOnChangeText}
      keyboardType="numeric"
      maxLength={12}
      {...rest}
    />
  );
};

export default CustomNumberInput;
