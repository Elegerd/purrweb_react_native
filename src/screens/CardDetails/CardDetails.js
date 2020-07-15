import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  backgroundColor,
  borderColor,
  dangerColor,
  fontColor,
  fontFamily,
  fontSize,
  headerFontSize,
  otherFontSize,
  paddingHorizontal,
  primaryColor,
  secondColor,
  shadowColor,
} from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {getCardComments} from '../../store/selectors/commentSelecotr';
import {addComment, removeComment} from '../../store/routines/commentRoutines';
import {changeCard} from '../../store/routines/cardRoutines';
import {SwipeRow} from 'react-native-swipe-list-view';
import CustomInput from '../../components/CustomInput/CustomInput';
import CommentItem from './CommentItem/CommentItem';
import {Input} from 'react-native-elements';
import Icon from '../../components/CustomIcon/CustomIcon';
import {getCardById} from '../../store/selectors/cardSelector';

const CardDetails = ({
  route: {
    params: {cardId},
  },
}) => {
  const dispatch = useDispatch();
  const [commentBody, setCommentBode] = useState('');
  const card = useSelector(getCardById({id: cardId}));
  const comments = useSelector(getCardComments({id: cardId}));

  const handleOnClickRemoveCard = (commentId) => () => {
    dispatch(removeComment({cardId: cardId, commentId: commentId}));
  };

  const handleOnChangeValue = (field) => (value) => {
    dispatch(changeCard({id: card.id, [field]: value}));
  };

  const handleOnClickAddComment = (e) => {
    if (commentBody.length) {
      dispatch(
        addComment({
          comment: {body: commentBody, created: new Date()},
          cardId: card.id,
        }),
      );
      setCommentBode('');
    }
  };

  const handleOnChangeCommentBody = (e) => {
    const {text} = e.nativeEvent;
    setCommentBode(text);
  };

  const renderCommentInput = () => {
    return (
      <Input
        value={commentBody}
        onChange={handleOnChangeCommentBody}
        placeholder={'Add a comment...'}
        containerStyle={styles.inputCommentContainer}
        inputContainerStyle={styles.inputComment}
        leftIconContainerStyle={styles.inputCommentLeftIcon}
        errorStyle={styles.inputCommentError}
        leftIcon={() => (
          <Icon
            name={'chatbox-outline'}
            color={primaryColor}
            onPress={handleOnClickAddComment}
          />
        )}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subHeader}>
        <CustomInput
          multiline={true}
          placeholder={'Title'}
          inputStyle={styles.inputTitle}
          containerStyle={styles.inputContainerTitle}
          onChangeValue={handleOnChangeValue('title')}
          value={card.title}
        />
      </View>
      <ScrollView>
        <View style={styles.containerDescription}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.inputDescriptionField}>DESCRIPTION</Text>
            <CustomInput
              multiline={true}
              placeholder={'Description'}
              containerStyle={styles.inputContainerDescription}
              onChangeValue={handleOnChangeValue('description')}
              inputStyle={styles.inputDescription}
              value={card.description}
            />
          </View>
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.inputCommentField}>COMMENTS</Text>
          {comments.map((comment) => (
            <SwipeRow
              key={comment.id}
              disableRightSwipe={true}
              rightOpenValue={-70}>
              <View style={styles.standaloneRowBack}>
                <Text style={styles.standaloneRowBackText} />
                <TouchableOpacity onPress={handleOnClickRemoveCard(comment.id)}>
                  <Text style={styles.standaloneRowBackText}>Delete</Text>
                </TouchableOpacity>
              </View>
              <CommentItem comment={comment} />
            </SwipeRow>
          ))}
        </View>
      </ScrollView>
      {renderCommentInput()}
    </SafeAreaView>
  );
};

CardDetails.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    checked: PropTypes.bool,
    columnId: PropTypes.number,
    commentsIds: PropTypes.array,
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  containerDescription: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  subHeader: {
    backgroundColor: primaryColor,
  },
  inputComment: {
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderColor: borderColor,
    shadowColor: shadowColor,
    shadowOpacity: 0.1,
  },
  inputCommentContainer: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  inputCommentLeftIcon: {
    paddingHorizontal: 12,
  },
  inputCommentError: {
    display: 'none',
  },
  inputTitle: {
    fontFamily: fontFamily,
    fontSize: headerFontSize,
    color: backgroundColor,
  },
  inputContainerTitle: {
    paddingHorizontal: paddingHorizontal,
    paddingBottom: 10,
  },
  inputDescriptionField: {
    color: secondColor,
    fontSize: otherFontSize,
    fontFamily: fontFamily,
  },
  inputDescription: {
    fontFamily: fontFamily,
    fontSize: fontSize,
    color: fontColor,
  },
  inputContainerDescription: {
    paddingHorizontal: 0,
    paddingBottom: 10,
  },
  inputCommentField: {
    color: secondColor,
    fontSize: otherFontSize,
    fontFamily: fontFamily,
    paddingHorizontal: paddingHorizontal,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: borderColor,
  },
  descriptionContainer: {
    paddingVertical: 20,
    paddingHorizontal: paddingHorizontal,
  },
  commentContainer: {},
  standaloneRowBack: {
    backgroundColor: dangerColor,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  standaloneRowBackText: {
    color: backgroundColor,
    fontSize: otherFontSize,
    textAlign: 'center',
    minWidth: 75,
  },
});

export default CardDetails;
