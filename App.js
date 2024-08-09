
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import Cadastro from './src/screens/Cadastro';
import Feed from './src/screens/Feed';
import { AppRegistry, StatusBar } from 'react-native';
import {WAYP as appName} from './app.json';

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

AppRegistry.registerComponent(appName, () => App);
