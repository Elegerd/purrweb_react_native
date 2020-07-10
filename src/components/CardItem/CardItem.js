import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {
  backgroundColor,
  borderColor,
  fontColor,
  fontFamily,
  fontSize,
  otherFontSize,
  paddingHorizontal,
  safeColor,
} from '../../styles';
import Icon from '../CustomIcon/CustomIcon';

const CardItem = ({card, handleOnClickCard, handleOnClickCheckBox}) => (
  <TouchableOpacity
    activeOpacity={1}
    style={styles.wrapper}
    onPress={handleOnClickCard}>
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <CheckBox
          onPress={handleOnClickCheckBox}
          uncheckedIcon={<Icon name={'square-outline'} color={fontColor} />}
          checkedIcon={<Icon name={'checkbox-outline'} color={fontColor} />}
          checked={card.checked}
          containerStyle={styles.checkbox}
        />
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.textTitle}>
          {card.title}
        </Text>
      </View>
      <View style={styles.commentContainer}>
        <Icon color={safeColor} name={'chatbubbles-outline'} />
        <Text style={styles.textComment}>{card.commentsIds.length}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

CardItem.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    checked: PropTypes.bool,
    columnId: PropTypes.number,
    commentsIds: PropTypes.array,
  }).isRequired,
  handleOnClickCard: PropTypes.func.isRequired,
  handleOnClickCheckBox: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  textTitle: {
    flex: 1,
    fontFamily: fontFamily,
    fontSize: fontSize,
    color: fontColor,
    paddingVertical: 10,
    paddingLeft: 5,
    paddingRight: 15,
    lineHeight: 20,
  },
  textComment: {
    fontFamily: fontFamily,
    fontSize: otherFontSize,
    color: fontColor,
    paddingVertical: 10,
    paddingLeft: 5,
    lineHeight: 20,
  },
  checkbox: {
    margin: 0,
    padding: 0,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: borderColor,
    marginHorizontal: paddingHorizontal,
  },
  wrapper: {
    minHeight: 70,
    backgroundColor: backgroundColor,
  },
});

export default CardItem;
