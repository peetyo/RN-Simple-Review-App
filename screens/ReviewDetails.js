import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation, route}) {

  const { title, body, rating } = route.params

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.titleText}>{body}</Text>
      <Text style={globalStyles.titleText}>{rating}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})