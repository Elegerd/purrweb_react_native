import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {reducer as formReducer} from 'redux-form';
import AsyncStorage from '@react-native-community/async-storage';
import {authReducer} from './authReducer';
import {columnReducer} from './columnReducer';

const authPersistConfig = {
  key: 'auth',
  keyPrefix: '',
  storage: AsyncStorage,
  whitelist: ['data'],
};

const columnPersistConfig = {
  key: 'column',
  keyPrefix: '',
  storage: AsyncStorage,
  whitelist: ['data'],
};

const rootReducer = () =>
  combineReducers({
    form: formReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    column: persistReducer(columnPersistConfig, columnReducer),
  });

export default rootReducer;
