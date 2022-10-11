import { StatusBar } from 'expo-status-bar';
import AppNavigation from '@navigation/index';
//graph
import { ApolloProvider } from '@apollo/client';
import { client } from '@utils/api/apollo';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
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
