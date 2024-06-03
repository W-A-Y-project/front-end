
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
//import Cadastro from './src/screens/Cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name = "" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}