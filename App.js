
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Feed from './src/screens/Feed';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name = "Login" component={Login} />
        <Stack.Screen name = "Cadastro" component={Cadastro} />
        <Stack.Screen name = "Feed" component={Feed}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
