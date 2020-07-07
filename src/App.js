import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {getAuth} from './selectors/authSelector';
import {logOut} from './routines/authRoutines';
import Icon from './components/CustomIcon/CustomIcon';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import Board from './screens/Board/Board';
import {fontColor, fontSize, secondColor} from './styles';
import {Text} from 'react-native';
import NewColumn from './screens/NewColumn/NewColumn';
import CustomHeader from './components/CustomHeader/CustomHeader';

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(getAuth);

  const handleOnClickLogOut = () => dispatch(logOut());

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
                  <CustomHeader>
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
                  <CustomHeader>
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
                  <CustomHeader>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
