import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import CustomTypography from 'components/atoms/CustomTypography';
import FloatingButton from 'components/atoms/FloatingButton';
import BaseLayout from 'components/layout/BaseLayout';
import {useAppContext} from 'context/AppContext';
import TransactionList from 'modules/creation/components/TransactionList';
import {RootStackParamList} from 'navigation/Navigator';
import React, {FC} from 'react';
import {useTheme} from 'react-native-paper';

type ExpenseScreenProp = StackNavigationProp<RootStackParamList, 'Expense'>;

const ExpenseScreen: FC = () => {
  const {colors} = useTheme();
  const {state} = useAppContext();
  const navigation = useNavigation<ExpenseScreenProp>();

  return (
    <BaseLayout>
      <CustomTypography variant="h1" color={colors.text}>
        Expense
      </CustomTypography>

      <TransactionList transactions={state?.expense} />

      <FloatingButton onPress={() => navigation.navigate('AddExpense')}>
        +
      </FloatingButton>
    </BaseLayout>
  );
};

export default ExpenseScreen;
