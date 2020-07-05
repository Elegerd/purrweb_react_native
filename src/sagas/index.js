import {takeEvery, put, call, all} from 'redux-saga/effects';
import {signIn, signUp} from '../routines';
import {signInRequest, signUpRequest} from '../utils/auth';

function* signInWatcherSaga() {
  yield takeEvery(signIn.TRIGGER, signInFlow);
}

function* signUpWatcherSaga() {
  yield takeEvery(signUp.TRIGGER, signUpFlow);
}

function* signInFlow({payload}) {
  try {
    yield put(signIn.request());
    const response = yield call(signInRequest, payload);
    yield put(signIn.success(response.data));
  } catch (error) {
    yield put(signIn.failure(error.message));
  } finally {
    yield put(signIn.fulfill());
  }
}

function* signUpFlow({payload}) {
  try {
    yield put(signUp.request());
    const response = yield call(signUpRequest, payload);
    yield put(signUp.success(response.data));
  } catch (error) {
    yield put(signUp.failure(error.message));
  } finally {
    yield put(signUp.fulfill());
  }
}
export default function* rootSaga() {
  yield all([signInWatcherSaga(), signUpWatcherSaga()]);
}
