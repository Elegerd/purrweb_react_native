import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CustomField from '../CustomField/CustomField';

const SignInForm = ({handleSubmit}) => {
  const formStates = [
    'asyncValidating',
    'dirty',
    'pristine',
    'valid',
    'invalid',
    'submitting',
    'submitSucceeded',
    'submitFailed',
  ];

  return (
    <View style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Field
        name="email"
        label="Email"
        keyboardType="email-address"
        component={CustomField}
      />
      <Field
        name="password"
        label="Password"
        keyboardType="default"
        secureTextEntry={true}
        component={CustomField}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#BFB393',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
  },
  text: {
    color: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default reduxForm({form: 'signIn'})(SignInForm);
