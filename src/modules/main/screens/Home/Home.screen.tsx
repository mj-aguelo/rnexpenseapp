import CustomTypography from 'components/atoms/CustomTypography';
import BaseLayout from 'components/layout/BaseLayout';
import React, {FC} from 'react';
import {useTheme} from 'react-native-paper';

const HomeScreen: FC = () => {
  const {colors} = useTheme();
  return (
    <BaseLayout>
      <CustomTypography variant="h1" color={colors.text}>
        Home
      </CustomTypography>
    </BaseLayout>
  );
};

export default HomeScreen;
