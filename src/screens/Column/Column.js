import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {backgroundColor, paddingHorizontal} from '../../styles';
import {fetchCard} from '../../routines/cardRoutines';
import {useDispatch, useSelector} from 'react-redux';
import {getCards} from '../../selectors/cardSelector';
import Splash from '../Splash/Splash';

const Column = () => {
  const dispatch = useDispatch();
  const {data: cards, loading} = useSelector(getCards);

  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);

  return loading ? (
    <Splash />
  ) : (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </ScrollView>
  );
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
});

export default Column;
