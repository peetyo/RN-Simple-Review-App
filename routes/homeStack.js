import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator()

export default function Navigator() {

  const generalOptions = {
    headerStyle: { backgroundColor: '#eee', height: 80},
    headerTintColor: '#444'
  }
  
  const homeOptions = ({ navigation }) => 
  {
    return {
      headerTitle: ()=> <Header navigation={navigation} title='GameZone'/>,
    }
  }
  const reviewDetailsOptions = {
    // headerStyle: { backgroundColor: 'pink'}
  }

  return (
      <Stack.Navigator initialRouteName='Home' screenOptions={generalOptions}>
        <Stack.Screen name='Home' component={Home} options={homeOptions}/>
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={reviewDetailsOptions} />
      </Stack.Navigator>
  );
}

