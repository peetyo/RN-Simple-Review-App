import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

