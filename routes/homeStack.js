import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator()

export default function Navigator() {

  const generalOptions = {
    headerStyle: { backgroundColor: '#eee', height: 80},
    headerTintColor: '#444'
  }

  const homeOptions = {
    // headerStyle: { backgroundColor: 'pink'}
  }
  
  const reviewDetailsOptions = {
    // headerStyle: { backgroundColor: 'pink'}
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={generalOptions}>
        <Stack.Screen name='Home' component={Home} options={homeOptions}/>
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={reviewDetailsOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

