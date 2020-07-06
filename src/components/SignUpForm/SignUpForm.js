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

const emailValidate = [email, required];
const nameValidate = [minLength(2), maxLength(32), required];
const passwordValidate = [minLength(6), maxLength(16), required];
const confirmPasswordValidate = [
  minLength(6),
  maxLength(16),
  matchPassword,
  required,
];

const SignUpForm = ({handleSubmit}) => {
  return (
    <View style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Field
        name="email"
        label="Email"
        keyboardType="email-address"
        component={CustomField}
        validate={emailValidate}
      />
      <Field
        name="name"
        label="Name"
        keyboardType="default"
        component={CustomField}
        validate={nameValidate}
      />
      <Field
        name="password"
        label="Password"
        keyboardType="default"
        secureTextEntry={true}
        component={CustomField}
        validate={passwordValidate}
      />
      <Field
        name="confirm-password"
        label="Confirm password"
        keyboardType="default"
        secureTextEntry={true}
        component={CustomField}
        validate={confirmPasswordValidate}
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
