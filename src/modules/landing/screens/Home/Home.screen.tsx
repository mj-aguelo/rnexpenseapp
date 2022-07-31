import CustomTypography from 'components/atoms/Typography/CustomTypography';
import BaseLayout from 'components/layout/BaseLayout';
import React, {FC} from 'react';

const HomeScreen: FC = () => {
  return (
    <BaseLayout>
      <CustomTypography variant="h1">Home</CustomTypography>
    </BaseLayout>
  );
};

export default HomeScreen;
