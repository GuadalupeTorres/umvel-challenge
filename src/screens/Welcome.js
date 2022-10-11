import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@components';

const Welcome = ({ navigation }) => {

  return (
    <SafeAreaView>
      <Text h16 bold style={{color:'red'}}>Welcomemeee</Text>
    </SafeAreaView>
  );
}




export default Welcome;