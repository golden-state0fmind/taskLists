import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Form from './screens/Form';
import TodoList from './screens/TodoList';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add To-Do" component={Form} />
        <Stack.Screen name="TodoList" component={TodoList} options={({ route }) => ({ title: route.params.taskName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
