import react, { useState } from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import Cadastro from './src/screens/Cadastro';
import Feed from './src/screens/Feed';
import Missing from './src/screens/Missing';
import { AppRegistry, StatusBar } from 'react-native';
import {WAYP as appName} from './app.json';

const Stack = createStackNavigator();
//const [isStatusBarVisible, setStatusBarVisible] = useState(true);
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar /> 
      {/*hidden={!isStatusBarVisible}/>*/}
      <Stack.Navigator initialRouteName="Missing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name = "Missing" component={Missing}/>
        <Stack.Screen name = "Feed" component={Feed}/>
        <Stack.Screen name = "Login" component={Login} />
        <Stack.Screen name = "Cadastro" component={Cadastro}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
