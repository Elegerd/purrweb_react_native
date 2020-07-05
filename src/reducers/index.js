import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {reducer as formReducer} from 'redux-form';
import AsyncStorage from '@react-native-community/async-storage';
import {authReducer} from './authReducer';

const authPersistConfig = {
  key: 'auth',
  keyPrefix: '',
  storage: AsyncStorage,
};

const rootReducer = () =>
  combineReducers({
    form: formReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  });

export default rootReducer;
