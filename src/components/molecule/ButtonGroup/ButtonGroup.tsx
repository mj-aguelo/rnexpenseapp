import {useTheme} from 'react-native-paper';
import React, {FC} from 'react';
import {TIndex, TKeyValue} from 'interfaces/KeyValue.type';
import {View} from 'react-native';
import CustomButton from 'components/atoms/CustomButton';
import useComponentStyles from './ButtonGroup.styles';

export interface IButtonGroupProps {
  options: Array<TKeyValue>;
  color?: string;
  selectedColor?: string;
  labelColor?: string;
  selectedLabelColor?: string;
  onPress?: Function;
  selectedIndex?: TIndex;
}

const ButtonGroup: FC<IButtonGroupProps> = ({
  color,
  selectedColor,
  labelColor,
  selectedLabelColor,
  onPress,
  options,
  selectedIndex,
}) => {
  const {colors} = useTheme();
  const styles = useComponentStyles();
  const defaultColor = color ?? colors.background;
  const defaultSelectedColor = selectedColor ?? colors.primary;
  const defaultLabelColor = labelColor ?? colors.backdrop;
  const defaultSelectedLabelColor = selectedLabelColor ?? colors.text;

  const handleOnPress = (index: TIndex) => {
    onPress && onPress(index);
  };

  const isSelected = (index: TIndex) => selectedIndex === index;

  return (
    <View style={styles.main}>
      {options?.map((option, index) => (
        <CustomButton
          key={index}
          onPress={() => handleOnPress(option.value)}
          style={styles.button}
          color={isSelected(option.value) ? defaultSelectedColor : defaultColor}
          labelColor={
            isSelected(index) ? defaultLabelColor : defaultSelectedLabelColor
          }>
          {option.value}
        </CustomButton>
      ))}
    </View>
  );
};

export default ButtonGroup;
