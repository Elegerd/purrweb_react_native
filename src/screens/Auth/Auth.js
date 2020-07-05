import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import SignIn from './SignIn';

const Auth = ({navigation}) => {
  const onPressNav = (screenTitle) => navigation.navigate(screenTitle);

  return (
    <SafeAreaView>
      <Text onPress={() => onPressNav('Sign In')}>Sign In</Text>
      <Text onPress={() => onPressNav('Sign Up')}>Sign Up</Text>
    </SafeAreaView>
  );
};

SignIn.navigationOptions = {
  title: 'Auth',
};

export default Auth;
