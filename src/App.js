import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {withAuthStack} from './hoc/withAuthStack';

const App = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default withAuthStack(App);
