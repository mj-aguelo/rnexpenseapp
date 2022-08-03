import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import CustomTypography from 'components/atoms/CustomTypography';
import FloatingButton from 'components/atoms/FloatingButton';
import BaseLayout from 'components/layout/BaseLayout';
import {RootStackParamList} from 'navigation/Navigator';
import React, {FC} from 'react';
import {useTheme} from 'react-native-paper';

type IncomeScreenProp = StackNavigationProp<RootStackParamList, 'Income'>;

const IncomeScreen: FC = () => {
  const {colors} = useTheme();
  const navigation = useNavigation<IncomeScreenProp>();
  return (
    <BaseLayout>
      <CustomTypography variant="h1" color={colors.text}>
        Income
      </CustomTypography>

      <FloatingButton onPress={() => navigation.navigate('AddIncome')}>
        +
      </FloatingButton>
    </BaseLayout>
  );
};

export default IncomeScreen;
