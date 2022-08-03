import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import CustomTypography from 'components/atoms/CustomTypography';
import FloatingButton from 'components/atoms/FloatingButton';
import BaseLayout from 'components/layout/BaseLayout';
import {RootStackParamList} from 'navigation/Navigator';
import React, {FC} from 'react';
import {useTheme} from 'react-native-paper';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: FC = () => {
  const {colors} = useTheme();
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <BaseLayout>
      <CustomTypography variant="h1" color={colors.text}>
        Home
      </CustomTypography>

      <FloatingButton onPress={() => navigation.navigate('AddExpense')}>
        +
      </FloatingButton>
    </BaseLayout>
  );
};

export default HomeScreen;
