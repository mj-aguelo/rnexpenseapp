import React, {FC, PropsWithChildren} from 'react';
import {SafeAreaView, View} from 'react-native';
import useComponentStyles from './BaseLayout.styles';

const BaseLayout: FC<PropsWithChildren> = ({children}) => {
  const styles = useComponentStyles();

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default BaseLayout;
