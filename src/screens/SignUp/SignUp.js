import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import {useDispatch} from 'react-redux';
import {signUp} from '../../routines/authRoutines';
import {backgroundColor, paddingHorizontal} from '../../styles';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(signUp(values));
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior={'automatic'}
      style={styles.container}>
      <SignUpForm onSubmit={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: 15,
  },
});

export default SignUp;
