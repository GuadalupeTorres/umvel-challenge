import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '@screens/Welcome';

const Stack = createNativeStackNavigator();


const SignAllScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false,gestureEnabled: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
}


export { SignAllScreens };
