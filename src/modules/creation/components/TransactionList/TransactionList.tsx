import CustomTypography from 'components/atoms/CustomTypography';
import Stack from 'components/atoms/Stack';
import {IStackProps} from 'components/atoms/Stack/Stack';
import {ITransaction} from 'interfaces/Transaction.interface';
import React, {FC} from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {formatDate} from 'utils/dateFormatter';
import useComponentStyles from './TransactionList.styles';

export interface ITransactionListProps {
  transactions?: Array<ITransaction>;
}

const TransactionList: FC<ITransactionListProps> = ({transactions}) => {
  const styles = useComponentStyles();
  const {colors} = useTheme();

  const stackProps: IStackProps = {
    borderColor: colors.text,
    borderBottomWidth: 1,
    ph: 5,
    spacing: 2,
    flex: 1,
  };

  return (
    <Stack spacing={2}>
      {transactions?.map((transaction, index) => (
        <View key={index} style={styles.main}>
          <Stack {...stackProps}>
            <CustomTypography variant="h4" textAlign="center">
              {formatDate(transaction.date)}
            </CustomTypography>
          </Stack>
          <Stack {...stackProps}>
            <CustomTypography variant="h4" textAlign="center">
              {transaction.category}
            </CustomTypography>
          </Stack>
          <Stack {...stackProps}>
            <CustomTypography variant="h4" textAlign="right">
              {transaction.amount}
            </CustomTypography>
          </Stack>
        </View>
      ))}
    </Stack>
  );
};

export default TransactionList;
