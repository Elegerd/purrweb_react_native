import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {View, StyleSheet} from 'react-native';
import CustomField from '../CustomField/CustomField';
import CustomButton from '../CustomButton/CustomButton';
import {email, maxLength, minLength, required} from '../../utils/validations';

const emailValidate = [email, required];
const passwordValidate = [minLength(6), maxLength(16), required];

const SignInForm = ({handleSubmit}) => {
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
        name="password"
        label="Password"
        keyboardType="default"
        secureTextEntry={true}
        component={CustomField}
        validate={passwordValidate}
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

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({form: 'signIn'})(SignInForm);
