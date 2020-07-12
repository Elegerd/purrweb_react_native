import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Input} from 'react-native-elements';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import {
  backgroundColor,
  borderColor,
  dangerColor,
  otherFontSize,
  paddingHorizontal,
  safeColor,
  shadowColor,
} from '../../styles';
import CardItem from '../../components/CardItem/CardItem';
import Icon from '../CustomIcon/CustomIcon';
import {addCard, changeCard, removeCard} from '../../routines/cardRoutines';
import {ColumnContext} from '../../screens/Column/Column';

const CardList = ({
  navigation,
  route: {
    params: {isChecked, isShowInput},
  },
}) => {
  const dispatch = useDispatch();
  const {column, ...allCards} = useContext(ColumnContext);
  const cards = isChecked ? allCards.checkedCards : allCards.uncheckedCards;
  const [title, setTitle] = useState('');

  const handleOnClickAddCard = (e) => {
    if (title.length) {
      dispatch(
        addCard({
          card: {title: title, description: '', checked: false},
          columnId: column.id,
        }),
      );
      setTitle('');
    }
  };

  const handleOnClickCard = (card) => () => {
    navigation.navigate('Card Details', {cardId: card.id});
  };

  const handleOnClickCheckBox = (card) => () => {
    dispatch(changeCard({id: card.id, checked: !card.checked}));
  };

  const handleOnClickRemoveCard = (cardId) => () => {
    dispatch(removeCard(cardId));
  };

  const handleOnChange = (e) => {
    const {text} = e.nativeEvent;
    setTitle(text);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        {isShowInput && (
          <Input
            value={title}
            onChange={handleOnChange}
            placeholder={'Add a card...'}
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.input}
            leftIconContainerStyle={styles.inputLeftIcon}
            errorStyle={styles.inputError}
            leftIcon={() => (
              <Icon
                name={'add-sharp'}
                color={safeColor}
                onPress={handleOnClickAddCard}
              />
            )}
          />
        )}
        {cards.map((card) => (
          <SwipeRow key={card.id} disableRightSwipe={true} rightOpenValue={-70}>
            <View style={styles.standaloneRowBack}>
              <Text style={styles.standaloneRowBackText} />
              <TouchableOpacity onPress={handleOnClickRemoveCard(card.id)}>
                <Text style={styles.standaloneRowBackText}>Delete</Text>
              </TouchableOpacity>
            </View>
            <CardItem
              card={card}
              handleOnClickCard={handleOnClickCard(card)}
              handleOnClickCheckBox={handleOnClickCheckBox(card)}
            />
          </SwipeRow>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

CardList.propTypes = {
  isChecked: PropTypes.bool,
  isShowInput: PropTypes.bool,
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: borderColor,
    shadowColor: shadowColor,
    shadowOpacity: 0.1,
  },
  inputContainer: {
    paddingHorizontal: paddingHorizontal,
    marginHorizontal: 0,
    paddingVertical: 15,
  },
  inputLeftIcon: {
    paddingHorizontal: 12,
  },
  inputError: {
    display: 'none',
  },
  scrollView: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingVertical: 5,
  },
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
    minWidth: 70,
  },
});

export default CardList;
