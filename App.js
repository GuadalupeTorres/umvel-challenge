import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '@navigation/index';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <NavigationContainer>
       <StatusBar style="light" />
      <AppNavigation />
    </NavigationContainer>
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
