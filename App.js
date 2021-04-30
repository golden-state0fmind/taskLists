import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import ColorPallete from './screens/ColorPallete'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ColorPallete" component={ColorPallete} options={({ route }) => ({ title: route.params.paletteName })}
  />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
