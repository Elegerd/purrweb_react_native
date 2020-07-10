import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import {
  backgroundColor,
  fontColor,
  fontFamily,
  fontSize,
  headerFontSize,
  otherFontSize,
  paddingHorizontal,
  primaryColor,
  secondColor,
} from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {getCardComments} from '../../selectors/commentSelecotr';
import {SwipeRow} from 'react-native-swipe-list-view';
import {changeCard} from '../../routines/cardRoutines';

const CardDetails = ({
  route: {
    params: {card},
  },
}) => {
  const dispatch = useDispatch();
  const comments = useSelector(getCardComments(card));

  const handleOnChangeValue = (field) => (value) => {
    dispatch(changeCard({id: card.id, [field]: value}));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.subHeader}>
        <CustomInput
          placeholder={'Title'}
          inputStyle={styles.inputTitle}
          containerStyle={styles.inputContainerTitle}
          onChangeValue={handleOnChangeValue('title')}
          value={card.title}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.inputDescriptionField}>DESCRIPTION</Text>
          <CustomInput
            placeholder={'Description'}
            containerStyle={styles.inputContainerDescription}
            onChangeValue={handleOnChangeValue('description')}
            inputStyle={styles.inputDescription}
            value={card.description}
          />
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.inputDescriptionField}>COMMENTS</Text>
          {comments.map((comment) => (
            <SwipeRow
              key={comment.id}
              disableRightSwipe={true}
              rightOpenValue={-70}>
              <View style={styles.standaloneRowBack}>
                <Text style={styles.standaloneRowBackText} />
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.standaloneRowBackText}>Delete</Text>
                </TouchableOpacity>
              </View>
              <Text>{comment.body}</Text>
            </SwipeRow>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
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
  scrollView: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: paddingHorizontal,
    paddingVertical: 5,
  },
  subHeader: {
    backgroundColor: primaryColor,
  },
  inputTitle: {
    fontFamily: fontFamily,
    fontSize: headerFontSize,
    color: backgroundColor,
  },
  inputContainerTitle: {
    paddingHorizontal: paddingHorizontal,
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
  },
  descriptionContainer: {
    paddingVertical: 20,
  },
  commentContainer: {},
});

export default CardDetails;
