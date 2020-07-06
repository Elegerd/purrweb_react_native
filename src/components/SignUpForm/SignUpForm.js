import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {View, StyleSheet} from 'react-native';
import CustomField from '../CustomField/CustomField';
import CustomButton from '../CustomButton/CustomButton';
import {
  email,
  matchPassword,
  maxLength,
  minLength,
  required,
} from '../../utils/validations';

const SignUpForm = ({handleSubmit}) => {
  return (
    <View style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Field
        name="email"
        label="Email"
        keyboardType="email-address"
        component={CustomField}
        validate={[email, required]}
      />
      <Field
        name="name"
        label="Name"
        keyboardType="default"
        component={CustomField}
        validate={[minLength(2), maxLength(32), required]}
      />
      <Field
        name="password"
        label="Password"
        keyboardType="default"
        secureTextEntry={true}
        component={CustomField}
        validate={[minLength(6), maxLength(16), required]}
      />
      <Field
        name="confirm_password"
        label="Confirm password"
        keyboardType="default"
        secureTextEntry={true}
        component={CustomField}
        validate={[minLength(6), maxLength(16), matchPassword, required]}
      />
      <CustomButton label={'Submit'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({form: 'signUp'})(SignUpForm);
