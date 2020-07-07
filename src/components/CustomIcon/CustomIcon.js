import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

const CustomIcon = ({name, type = 'ionicon', ...props}) => (
  <Icon
    type={type}
    style={styles.icon}
    name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
    {...props}
  />
);

CustomIcon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: 100,
  },
});

export default CustomIcon;
