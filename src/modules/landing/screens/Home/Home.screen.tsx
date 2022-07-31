import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'pink'}}>
      <Text style={{ color: 'red'}}>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
