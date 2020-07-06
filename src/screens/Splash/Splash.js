import React from 'react';
import {ActivityIndicator, StatusBar, View, StyleSheet} from 'react-native';
import {backgroundColor} from '../../styles';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
