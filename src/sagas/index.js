import {takeEvery, put, all} from 'redux-saga/effects';
import {setUser} from '../routines';
import {signIn, signUp} from '../helpers/auth';

function* signInWatcherSaga() {
  yield takeEvery(setUser.REQUEST, signInFlow);
}

function* signUpWatcherSaga() {
  yield takeEvery(setUser.REQUEST, signUpFlow);
}

function* signInFlow(action) {
  try {
    const {email, password} = action;
    yield put(setUser.request());
    const response = yield call(signIn, email, password);
    console.log('SIGN-IN', response);
    yield put(setUser.success(response));
  } catch (error) {
    console.error('SIGN-IN', error);
    yield put(setUser.failure(error.message));
  } finally {
    yield put(setUser.fulfill());
  }
}

function* signUpFlow(action) {
  try {
    const {email, name, password} = action;
    yield put(setUser.request());
    const response = yield call(signUp, email, name, password);
    console.log('SIGN-UP', response);
    yield put(setUser.success(response));
  } catch (error) {
    console.error('SIGN-UP', error);
    yield put(setUser.failure(error.message));
  } finally {
    yield put(setUser.fulfill());
  }
}
export default function* rootSaga() {
  yield all([signInWatcherSaga(), signUpWatcherSaga()]);
}
