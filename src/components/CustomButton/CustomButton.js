import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  backgroundColor,
  fontSize,
  shadowColor,
  primaryColor,
  fontFamily,
} from '../../styles';

const CustomButton = ({label, ...buttonProps}) => {
  return (
    <TouchableOpacity {...buttonProps} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    fontFamily: fontFamily,

    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 100,
    shadowColor: shadowColor,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  text: {
    fontSize: fontSize,
    fontFamily: fontFamily,

    color: backgroundColor,
  },
});

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CustomButton;
