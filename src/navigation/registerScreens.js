import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '@screens/Welcome';
import Home from '@screens/Home';


const Stack = createNativeStackNavigator();


const SignAllScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false,gestureEnabled: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}


export { SignAllScreens };
