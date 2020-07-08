import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {backgroundColor, paddingHorizontal} from '../../styles';
import {fetchAllData} from '../../routines/dataRoutines';
import {getColumnIsLoading, getColumns} from '../../selectors/columnSelector';
import ColumnItem from '../../components/ColumnItem/ColumnItem';
import Splash from '../Splash/Splash';

const Board = ({navigation}) => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);
  const isLoading = useSelector(getColumnIsLoading);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  const handleOnClick = (column) => () =>
    navigation.navigate('Column', {column});

  return isLoading ? (
    <Splash />
  ) : (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        {columns.map((column) => (
          <ColumnItem
            key={column.id}
            column={column}
            handleOnClick={handleOnClick}
          />
        ))}
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

export default Board;
