import BaseLayout from 'components/layout/BaseLayout';
import React, {FC} from 'react';
import AddExpenseForm from 'modules/creation/components/AddExpenseForm';

const AddExpenseScreen: FC = () => {
  return (
    <BaseLayout>
      <AddExpenseForm />
    </BaseLayout>
  );
};

export default AddExpenseScreen;
