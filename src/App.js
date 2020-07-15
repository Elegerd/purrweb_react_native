import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {getIsAuth} from './store/selectors/authSelector';
import {logOut} from './store/routines/authRoutines';
import {changeColumn, removeColumn} from './store/routines/columnRoutines';
import Icon from './components/CustomIcon/CustomIcon';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import Board from './screens/Board/Board';
import {
  backgroundColor,
  fontColor,
  fontSize,
  primaryColor,
  secondColor,
} from './styles';
import {StyleSheet, Text} from 'react-native';
import NewColumn from './screens/NewColumn/NewColumn';
import CustomHeader from './components/CustomHeader/CustomHeader';
import Column from './screens/Column/Column';
import CustomMenuIcon from './components/CustomMenuItem/CustomMenuItem';
import CardDetails from './screens/CardDetails/CardDetails';
import CustomInput from './components/CustomInput/CustomInput';

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

  const handleOnClickLogOut = () => dispatch(logOut.success());
  const handleOnClickRemoveColumn = (navigation, columnId) => () => {
    dispatch(removeColumn({columnId}));
    navigation.goBack();
  };

  const handleOnChangeColumn = (columnId) => (value) => {
    dispatch(changeColumn({id: columnId, title: value}));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuth ? (
          <>
            <Stack.Screen
              name="Sign In"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Sign Up"
              component={SignUp}
              options={{
                header: ({navigation}) => (
                  <CustomHeader style={styles.header}>
                    <Icon
                      name={'arrow-back-outline'}
                      color={secondColor}
                      onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.headerText}>Sign Up</Text>
                  </CustomHeader>
                ),
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Board"
              component={Board}
              options={{
                header: ({navigation}) => (
                  <CustomHeader style={styles.header}>
                    <Icon
                      name={'exit-outline'}
                      color={secondColor}
                      onPress={handleOnClickLogOut}
                    />
                    <Text style={styles.headerText}>My Desk</Text>
                    <Icon
                      name={'add'}
                      color={secondColor}
                      onPress={() => navigation.navigate('New Column')}
                    />
                  </CustomHeader>
                ),
              }}
            />
            <Stack.Screen
              name="New Column"
              component={NewColumn}
              options={{
                header: ({navigation}) => (
                  <CustomHeader style={styles.header}>
                    <Icon
                      name={'arrow-back-outline'}
                      color={secondColor}
                      onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.headerText}>Create A New Column</Text>
                  </CustomHeader>
                ),
              }}
            />
            <Stack.Screen
              name="Column"
              component={Column}
              options={{
                header: ({
                  navigation,
                  scene: {
                    descriptor: {options},
                  },
                }) => (
                  <CustomHeader style={styles.headerColumn}>
                    <Icon
                      name={'arrow-back-outline'}
                      color={secondColor}
                      onPress={() => navigation.goBack()}
                    />
                    <CustomInput
                      multiline={false}
                      placeholder={'Title'}
                      inputStyle={styles.headerText}
                      value={options.title}
                      onChangeValue={handleOnChangeColumn(options.columnId)}
                    />
                    <CustomMenuIcon
                      iconName={'settings-outline'}
                      menuContainerStyle={styles.headerColumnIcon}
                      options={[
                        {
                          title: 'Remove',
                          onPress: handleOnClickRemoveColumn(
                            navigation,
                            options.columnId,
                          ),
                        },
                      ]}
                    />
                  </CustomHeader>
                ),
              }}
            />
            <Stack.Screen
              name="Card Details"
              component={CardDetails}
              options={{
                header: ({navigation}) => (
                  <CustomHeader style={styles.headerCardDetails}>
                    <Icon
                      name={'arrow-back-outline'}
                      color={secondColor}
                      onPress={() => navigation.goBack()}
                    />
                  </CustomHeader>
                ),
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: backgroundColor,
    borderBottomWidth: 1,
    borderColor: fontSize,
  },
  headerColumn: {
    backgroundColor: backgroundColor,
  },
  headerText: {
    textAlign: 'center',
    color: fontColor,
    fontSize: fontSize,
  },
  headerColumnIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerCardDetails: {
    borderBottomWidth: 0,
    backgroundColor: primaryColor,
  },
});

export default App;
