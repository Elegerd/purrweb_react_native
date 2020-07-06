import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {getAuth} from './selectors/authSelector';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import Board from './screens/Board/Board';

const Stack = createStackNavigator();

const App = () => {
  const {data} = useSelector(getAuth);

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
            <Stack.Screen name="Sign Up" component={SignUp} />
          </>
        ) : (
          <>
            <Stack.Screen name="Board" component={Board} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
