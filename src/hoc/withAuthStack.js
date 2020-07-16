import React from 'react';
import {useSelector} from 'react-redux';
import {getIsAuth} from '../store/selectors/authSelector';
import UserStack from '../stacks/UserStack';
import GuestStack from '../stacks/GuestStack';

export const withAuthStack = (Component) => {
  const AuthComponent = () => {
    const isAuth = useSelector(getIsAuth);
    return <Component>{isAuth ? <UserStack /> : <GuestStack />}</Component>;
  };

  return AuthComponent;
};
