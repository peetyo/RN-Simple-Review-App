import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About'
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';

const AboutStack = createStackNavigator()

export default function aboutNavigator() {

  const generalOptions = {
    headerStyle: { backgroundColor: '#eee', height: 80},
    headerTintColor: '#444'
  }

  const aboutOptions = ({ navigation }) => 
  {
    return {
      headerTitle: ()=> <Header navigation={navigation} title='About GameZone'/>,
    }
  }

  return (
    <AboutStack.Navigator initialRouteName='About' screenOptions={generalOptions}>
      <AboutStack.Screen name='About' component={About} options={aboutOptions}/>
    </AboutStack.Navigator>
  );
}

