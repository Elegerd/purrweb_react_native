import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const CustomInput = ({value = '', onChangeValue, ...inputProps}) => {
  const mounted = useRef();
  const input = useRef(null);
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (!isFocused) {
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
      multiline={true}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      inputContainerStyle={
        isFocused ? styles.activeInput : styles.inactiveInput
      }
      onChange={handleOnChange}
      value={inputValue}
      ref={input}
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
});

export default CustomInput;
