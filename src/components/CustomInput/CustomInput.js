import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const CustomInput = ({value, onChangeValue, ...inputProps}) => {
  const mounted = useRef();
  const [inputValue, setInputValue] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (
        !isFocused &&
        typeof inputValue !== 'undefined' &&
        value !== inputValue
      ) {
        onChangeValue(inputValue);
      }
    }
  });

  const handleOnChange = (e) => {
    const {text} = e.nativeEvent;
    setInputValue(text);
  };

  return (
    <Input
      {...inputProps}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      inputContainerStyle={
        isFocused ? styles.activeInput : styles.inactiveInput
      }
      errorStyle={styles.inputCommentError}
      onChange={handleOnChange}
      value={inputValue}
    />
  );
};

CustomInput.propTypes = {
  value: PropTypes.string,
  onChangeValue: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  activeInput: {
    borderBottomWidth: 0,
  },
  inactiveInput: {
    borderBottomWidth: 0,
  },
  inputCommentError: {
    display: 'none',
  },
});

export default CustomInput;
