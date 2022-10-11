import { StatusBar } from 'expo-status-bar';
import AppNavigation from '@navigation/index';
//graph
import { ApolloProvider } from '@apollo/client';
import { client } from '@utils/api/apollo';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';



export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.otf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark-content" />
        <ApolloProvider client={client}>
          <AppNavigation />
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
