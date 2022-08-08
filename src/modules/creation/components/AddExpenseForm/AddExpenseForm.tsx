import {useTheme} from 'react-native-paper';
import Stack from 'components/atoms/Stack';
import CustomTypography from 'components/atoms/CustomTypography';
import React, {FC, useState} from 'react';
import {TIndex} from 'interfaces/KeyValue.type';
import ButtonGroup from 'components/molecule/ButtonGroup';
import {EXPENSE_TYPES} from 'src/constants/types.const';
import CustomNumberInput from 'components/atoms/CustomNumberInput';
import CustomButton from 'components/atoms/CustomButton';
import {View} from 'react-native';
import DateInputPicker from 'components/molecule/DateInputPicker';
import {ADD_EXPENSE} from 'store/actions';
import {useAppContext} from 'context/AppContext';
import {useNavigation} from '@react-navigation/native';

const AddExpenseForm: FC = () => {
  const navigation = useNavigation();
  const {dispatch} = useAppContext();
  const {colors} = useTheme();
  const [date, setDate] = useState<Date | null>(null);
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<TIndex>('');

  const handleSubmit = () => {
    const income = {
      date,
      amount,
      category,
    };

    dispatch({type: ADD_EXPENSE, payload: income});
    navigation.goBack();
  };

  return (
    <View>
      <Stack>
        <CustomTypography variant="h4" color={colors.text}>
          Add Expense
        </CustomTypography>
      </Stack>

      <Stack spacing={1}>
        <DateInputPicker onChange={(dt: Date) => setDate(dt)} />
      </Stack>
      <Stack spacing={1}>
        <CustomNumberInput
          label={'Amount'}
          value={amount}
          onChangeText={value => setAmount(value)}
        />
      </Stack>
      <Stack>
        <CustomTypography variant="label" color={colors.text}>
          Category *
        </CustomTypography>
      </Stack>
      <Stack>
        <ButtonGroup
          options={EXPENSE_TYPES}
          onPress={(value: TIndex) => setCategory(value)}
          selectedIndex={category}
        />
      </Stack>
      <Stack spacing={4}>
        <CustomButton onPress={handleSubmit}>Submit</CustomButton>
      </Stack>
    </View>
  );
};

export default AddExpenseForm;
