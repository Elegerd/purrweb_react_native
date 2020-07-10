import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {
  backgroundColor,
  borderColor,
  fontColor,
  fontFamily,
  fontSize,
  inactiveColor,
  otherFontSize,
} from '../../styles';
import getDaysAgo from '../../utils/getDaysAgo';

const CommentItem = ({comment}) => (
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          size={46}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
        />
      </View>
      <View style={styles.commentContainer}>
        <View style={styles.commentHeader}>
          <Text style={styles.commentAuthor}>Author</Text>
          <Text style={styles.commentDate}>
            {getDaysAgo(comment.created, new Date())} days ago
          </Text>
        </View>
        <View style={styles.commentBody}>
          <Text style={styles.commentBodyText}>{comment.body}</Text>
        </View>
      </View>
    </View>
  </View>
);

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    created: PropTypes.string,
    cardId: PropTypes.number,
    userId: PropTypes.number,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: borderColor,
  },
  avatarContainer: {
    paddingHorizontal: 12,
  },
  commentContainer: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: backgroundColor,
  },
  commentAuthor: {
    fontSize: fontSize,
    fontFamily: fontFamily,
    fontWeight: 'bold',
    color: fontColor,
    paddingRight: 12,
  },
  commentDate: {
    fontSize: otherFontSize,
    fontFamily: fontFamily,
    color: inactiveColor,
    paddingLeft: 6,
  },
  commentBodyText: {
    fontSize: fontSize,
    fontFamily: fontFamily,
    color: fontColor,
  },
  commentBody: {
    flex: 1,
    paddingRight: 12,
    paddingBottom: 15,
  },
  wrapper: {
    minHeight: 75,
    backgroundColor: backgroundColor,
  },
});

export default CommentItem;
