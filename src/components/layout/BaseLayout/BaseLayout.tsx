import React, {FC, PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import useComponentStyles from './BaseLayout.styles';

const BaseLayout: FC<PropsWithChildren> = ({children}) => {
  const styles = useComponentStyles();

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BaseLayout;
