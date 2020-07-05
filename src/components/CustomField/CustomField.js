import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const CustomField = (props) => {
  const {label, input, ...inputProps} = props;

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        {...inputProps}
        style={styles.input}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250,
  },
});

export default CustomField;
