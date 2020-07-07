import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {backgroundColor, fontSize} from '../../styles';
import {Header} from 'react-native-elements';

const CustomHeader = ({children}) => (
  <Header containerStyle={styles.header}>{children}</Header>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: backgroundColor,
    borderBottomWidth: 1,
    borderColor: fontSize,
  },
});

CustomHeader.propTypes = {
  className: PropTypes.string,
};

export default CustomHeader;
