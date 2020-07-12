import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {backgroundColor, paddingHorizontal} from '../../styles';
import {addColumn} from '../../routines/columnRoutines';
import {useDispatch, useSelector} from 'react-redux';
import NewColumnForm from '../../components/NewColumnForm/NewColumnForm';
import {getColumnIsLoading} from '../../selectors/columnSelector';
import Splash from '../Splash/Splash';

const NewColumn = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getColumnIsLoading);

  const handleSubmit = (values) => dispatch(addColumn(values));

  return isLoading ? (
    <Splash />
  ) : (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <NewColumnForm onSubmit={handleSubmit} />
      </SafeAreaView>
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

export default NewColumn;
