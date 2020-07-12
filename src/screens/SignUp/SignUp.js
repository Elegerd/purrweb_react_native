import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../routines/authRoutines';
import {backgroundColor, paddingHorizontal} from '../../styles';
import {getAuthIsLoading} from '../../selectors/authSelector';
import Splash from '../Splash/Splash';

const SignUp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getAuthIsLoading);

  const handleSubmit = (values) => dispatch(signUp(values));

  return isLoading ? (
    <Splash />
  ) : (
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
