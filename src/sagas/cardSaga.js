import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchCard,
  addCard,
  changeCard,
  removeCard,
} from '../routines/cardRoutines';
import {fetchCardRequest} from '../utils/fetchData';
import {createCardRequest} from '../utils/createData';
import {removeCardRequest} from '../utils/removeData';
import {changeCardRequest} from '../utils/changeData';

export function* fetchCardWatcherSaga() {
  yield takeEvery(fetchCard.TRIGGER, fetchCardFlow);
}

export function* createCardWatcherSaga() {
  yield takeEvery(addCard.TRIGGER, createCardFlow);
}

export function* removeCardWatcherSaga() {
  yield takeEvery(removeCard.TRIGGER, removeCardFlow);
}

export function* changeCardWatcherSaga() {
  yield takeEvery(changeCard.TRIGGER, changeCardFlow);
}

function* fetchCardFlow() {
  try {
    yield put(fetchCard.request());
    const response = yield call(fetchCardRequest);
    yield put(fetchCard.success(response));
  } catch (error) {
    yield put(fetchCard.failure(error.message));
  } finally {
    yield put(fetchCard.fulfill());
  }
}

function* createCardFlow({payload}) {
  try {
    yield put(addCard.request());
    const response = yield call(createCardRequest, payload);
    yield put(addCard.success(response));
  } catch (error) {
    yield put(addCard.failure(error.message));
  } finally {
    yield put(addCard.fulfill());
  }
}

function* removeCardFlow({payload}) {
  try {
    yield put(removeCard.request());
    yield call(removeCardRequest, payload);
    yield put(removeCard.success(payload));
  } catch (error) {
    yield put(removeCard.failure(error.message));
  } finally {
    yield put(removeCard.fulfill());
  }
}

function* changeCardFlow({payload}) {
  try {
    yield put(changeCard.request());
    const response = yield call(changeCardRequest, payload);
    yield put(changeCard.success(response));
  } catch (error) {
    yield put(changeCard.failure(error.message));
  } finally {
    yield put(changeCard.fulfill());
  }
}
