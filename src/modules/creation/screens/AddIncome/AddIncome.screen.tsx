import BaseLayout from 'components/layout/BaseLayout';
import React, {FC} from 'react';
import AddIncomeForm from 'modules/creation/components/AddIncomeForm';

const AddIncomeScreen: FC = () => {
  return (
    <BaseLayout>
      <AddIncomeForm />
    </BaseLayout>
  );
};

export default AddIncomeScreen;
