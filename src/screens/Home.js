import React from 'react';
import {Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const Home = ({ navigation }) => {

  return (
    <SafeAreaView  forceInset={{ bottom: 'never'}}>
      <Text>Home</Text>
    </SafeAreaView>

   
  );
}




export default Home;