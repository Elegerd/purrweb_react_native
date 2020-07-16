import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text} from 'react-native';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import Icon from '../components/CustomIcon/CustomIcon';
import {backgroundColor, fontColor, fontSize, secondColor} from '../styles';

const Stack = createStackNavigator();

const GuestStack = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: backgroundColor,
    borderBottomWidth: 1,
    borderColor: fontSize,
  },
  headerText: {
    textAlign: 'center',
    color: fontColor,
    fontSize: fontSize,
  },
});

export default GuestStack;
