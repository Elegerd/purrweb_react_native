import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {getAuth} from './selectors/authSelector';
import {logOut} from './routines/authRoutines';
import {removeColumn} from './routines/columnRoutines';
import Icon from './components/CustomIcon/CustomIcon';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import Board from './screens/Board/Board';
import {backgroundColor, fontColor, fontSize, secondColor} from './styles';
import {StyleSheet, Text} from 'react-native';
import NewColumn from './screens/NewColumn/NewColumn';
import CustomHeader from './components/CustomHeader/CustomHeader';
import Column from './screens/Column/Column';
import CustomMenuIcon from './components/CustomMenuItem/CustomMenuItem';

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(getAuth);

  const handleOnClickLogOut = () => dispatch(logOut());
  const handleOnClickRemoveColumn = (navigation, columnId) => () => {
    dispatch(removeColumn(columnId));
    navigation.goBack();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {data == null ? (
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
                    <Text style={{color: fontColor, fontSize: fontSize}}>
                      Sign Up
                    </Text>
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
                    <Text style={{color: fontColor, fontSize: fontSize}}>
                      My Desk
                    </Text>
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
                    <Text style={{color: fontColor, fontSize: fontSize}}>
                      Create A New Column
                    </Text>
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
                  <CustomHeader style={styles.headerTopNav}>
                    <Icon
                      name={'arrow-back-outline'}
                      color={secondColor}
                      onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.headerTopNavText}>{options.title}</Text>
                    <CustomMenuIcon
                      iconName={'settings-outline'}
                      menuContainerStyle={styles.headerTopNavIcon}
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
  headerTopNav: {
    backgroundColor: backgroundColor,
  },
  headerTopNavText: {
    color: fontColor,
    fontSize: fontSize,
  },
  headerTopNavIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default App;
