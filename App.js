import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from '@navigation/index';
//graph
import { ApolloProvider } from '@apollo/client';
import { client } from '@utils/api/apollo';

//Redux
import { Provider } from 'react-redux'
import store from '@store';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';



export default function App() {
  const [storePromise, setStorePromise] = useState(null);
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.otf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
  });



  useEffect(() => {
    if (!fontsLoaded) {
      return null;
    }
  }, []);


  useEffect(() => {
    const configStore = store;
    setStorePromise(configStore);
  }, []);


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark-content" />
        <ApolloProvider client={client} store={storePromise}>
          <Provider store={storePromise} >
            <AppNavigation />
          </Provider>
        </ApolloProvider>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
