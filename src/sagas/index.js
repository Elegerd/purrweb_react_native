import {all} from 'redux-saga/effects';
import {signInWatcherSaga, signUpWatcherSaga} from './authSaga';
import {fetchColumnWatcherSaga, createColumnWatcherSaga} from './columnSaga';

export default function* rootSaga() {
  yield all([
    signInWatcherSaga(),
    signUpWatcherSaga(),
    fetchColumnWatcherSaga(),
    createColumnWatcherSaga(),
  ]);
}
