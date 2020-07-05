import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {authReducer} from './authReducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const rootReducer = () =>
  combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
  });

export default rootReducer;
