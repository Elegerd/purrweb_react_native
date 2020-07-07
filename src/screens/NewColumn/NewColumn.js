import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {backgroundColor, paddingHorizontal} from '../../styles';
import {addColumn} from '../../routines/columnRoutines';
import {useDispatch, useSelector} from 'react-redux';
import NewColumnForm from '../../components/NewColumnForm/NewColumnForm';
import {getColumns} from '../../selectors/columnSelector';
import Splash from '../Splash/Splash';

const NewColumn = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(getColumns);

  const handleSubmit = (values) => dispatch(addColumn(values));

  return loading ? (
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
