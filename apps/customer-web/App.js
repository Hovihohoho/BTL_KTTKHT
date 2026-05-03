import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen'; // Tạm đóng dòng này

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Tạm đóng Screen Register */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}