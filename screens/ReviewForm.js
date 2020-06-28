import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';

export default function ReviewForm() {
  
  return (
    <View>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(props)=> (
          <View style={styles.form}>
            <TextInput 
              style={globalStyles.input}
              placeholder='Review Title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              multiline 
              style={globalStyles.input}
              placeholder='Review Body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput
              multiline 
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            
            <Button title='Submit' color='maroon' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
  }
})

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
}