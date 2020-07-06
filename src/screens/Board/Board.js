import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {logOut} from '../../routines';
import {
  backgroundColor,
  fontColor,
  fontFamily,
  fontSize,
  paddingHorizontal,
} from '../../styles';
import CustomButton from '../../components/CustomButton/CustomButton';

const Board = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleOnClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Board</Text>
      <CustomButton label={'Log Out'} onPress={handleOnClickLogOut} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize,
    fontFamily: fontFamily,

    color: fontColor,
  },
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: paddingHorizontal,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default Board;
