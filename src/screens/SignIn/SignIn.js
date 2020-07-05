import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import SignInForm from '../../components/SignInForm/SignInForm';
import {useDispatch} from 'react-redux';
import {signIn} from '../../routines/index';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(signIn(values));
  };

  const handleOnClickSignUp = () => {
    navigation.navigate('Sign Up');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign In</Text>
      <SignInForm onSubmit={handleSubmit} />
      <TouchableOpacity style={styles.button} onPress={handleOnClickSignUp}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignIn;
