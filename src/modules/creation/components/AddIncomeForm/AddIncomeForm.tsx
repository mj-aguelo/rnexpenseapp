import {useTheme} from 'react-native-paper';
import CustomTextInput from 'components/atoms/CustomTextInput';
import Stack from 'components/atoms/Stack';
import CustomTypography from 'components/atoms/CustomTypography';
import React, {FC, useState} from 'react';

const AddIncomeForm: FC = () => {
  const {colors} = useTheme();
  const [amount, setAmount] = useState<number | undefined>(undefined);
  return (
    <>
      <Stack spacing={1}>
        <CustomTypography variant="h4" color={colors.text}>
          Add Income
        </CustomTypography>
      </Stack>

      <Stack spacing={2}>
        <CustomTextInput label={'Amount'} value={amount} />
      </Stack>
    </>
  );
};

export default AddIncomeForm;
