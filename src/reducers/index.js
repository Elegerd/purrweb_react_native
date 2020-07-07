import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {reducer as formReducer} from 'redux-form';
import AsyncStorage from '@react-native-community/async-storage';
import {authReducer} from './authReducer';
import {columnReducer} from './columnReducer';
import {cardReducer} from './cardReducer';
import {commentReducer} from './commentReducer';

const authPersistConfig = {
  key: 'auth',
  keyPrefix: '',
  storage: AsyncStorage,
  whitelist: ['data'],
};

const columnPersistConfig = {
  key: 'columns',
  keyPrefix: '',
  storage: AsyncStorage,
  whitelist: ['data'],
};

const cardPersistConfig = {
  key: 'cards',
  keyPrefix: '',
  storage: AsyncStorage,
  whitelist: ['data'],
};

const commentPersistConfig = {
  key: 'comments',
  keyPrefix: '',
  storage: AsyncStorage,
  whitelist: ['data'],
};

const rootReducer = () =>
  combineReducers({
    form: formReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    columns: persistReducer(columnPersistConfig, columnReducer),
    cards: persistReducer(cardPersistConfig, cardReducer),
    comments: persistReducer(commentPersistConfig, commentReducer),
  });

export default rootReducer;
