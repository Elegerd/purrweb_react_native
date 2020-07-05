import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {logOut} from '../../routines';

const Board = () => {
  const dispatch = useDispatch();

  const handleOnClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Board</Text>
      <TouchableOpacity style={styles.button} onPress={handleOnClickLogOut}>
        <Text style={styles.text}>Log Out</Text>
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

export default Board;
