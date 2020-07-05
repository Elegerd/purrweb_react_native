import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import {useDispatch} from 'react-redux';
import {signUp} from '../../routines';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(signUp(values));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign Up</Text>
      <SignUpForm onSubmit={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;
