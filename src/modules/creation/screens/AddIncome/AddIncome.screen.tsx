import Stack from 'components/atoms/Stack';
import CustomTypography from 'components/atoms/Typography';
import CustomTextInput from 'components/atoms/TextInput';
import BaseLayout from 'components/layout/BaseLayout';
import React, {FC} from 'react';
import {useTheme} from 'react-native-paper';

const AddIncomeScreen: FC = () => {
  const {colors} = useTheme();
  return (
    <BaseLayout>
      <Stack spacing={1}>
        <CustomTypography variant="h4" color={colors.text}>
          Add Income
        </CustomTypography>
      </Stack>

      <Stack spacing={2}>
        <CustomTextInput label={'Type'} />
      </Stack>
    </BaseLayout>
  );
};

export default AddIncomeScreen;
