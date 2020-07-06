import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {
  borderColor,
  fontColor,
  shadowColor,
  fontSize,
  fontFamily,
  dangerColor,
  otherFontSize,
} from '../../styles';

const CustomField = ({label, input, meta, ...inputProps}) => {
  const hasError = meta.touched && meta.error;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        {...inputProps}
        style={hasError ? [styles.input, styles.inputError] : styles.input}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      {hasError && <Text style={styles.textError}>{meta.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: fontFamily,
    fontSize: fontSize,
    color: fontColor,
    paddingVertical: 10,
  },
  input: {
    minHeight: 50,
    fontFamily: fontFamily,
    fontSize: fontSize,
    lineHeight: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: borderColor,
    shadowColor: shadowColor,
    shadowOpacity: 0.1,
  },
  textError: {
    fontFamily: fontFamily,
    fontSize: otherFontSize,
    color: dangerColor,
    paddingVertical: 5,
  },
  inputError: {
    borderColor: dangerColor,
  },
});

CustomField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
};

export default CustomField;
