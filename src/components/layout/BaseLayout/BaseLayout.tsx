import React, {FC, PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

const BaseLayout: FC<PropsWithChildren> = ({children}) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default BaseLayout;
