import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const ReviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val)=>{
      return parseInt(val) < 6 && parseInt(val) > 0; 
    })
})

export default function ReviewForm({ addReview }) {
  
  return (
    <View>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values) => {
          addReview(values)
        }}
      >
        {(props)=> (
          <View style={styles.form}>
            <TextInput 
              style={globalStyles.input}
              placeholder='Review Title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>

            <TextInput
              multiline minHeight={60}
              style={globalStyles.input}
              placeholder='Review Body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />

            <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body }</Text>
            <TextInput
              multiline 
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              onBlur={props.handleBlur('rating')}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating }</Text>
            
            {/* <Button title='Submit' color='maroon' onPress={props.handleSubmit} /> */}
            <FlatButton text='submit' onPress={props.handleSubmit} />
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