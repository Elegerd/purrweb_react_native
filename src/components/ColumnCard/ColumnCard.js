import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {borderColor, fontColor, fontFamily, fontSize} from '../../styles';

const ColumnCard = ({column}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => console.log('CLICK')}>
    <Text style={styles.text}>{column.title}</Text>
  </TouchableOpacity>
);

ColumnCard.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
  }),
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily,
    fontSize: fontSize,
    color: fontColor,
    paddingVertical: 10,
    lineHeight: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: borderColor,
    minHeight: 60,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

export default ColumnCard;
