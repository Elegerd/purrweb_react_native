import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import {useDispatch} from 'react-redux';
import {signUp} from '../../routines/authRoutines';
import {backgroundColor, paddingHorizontal} from '../../styles';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => dispatch(signUp(values));

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <SignUpForm onSubmit={handleSubmit} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: paddingHorizontal,
    paddingVertical: 5,
  },
});

export default SignUp;
