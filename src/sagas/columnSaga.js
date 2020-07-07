import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchColumn, addColumn} from '../routines/columnRoutines';
import {createColumnRequest, fetchColumnRequest} from '../utils/fetchData';

export function* fetchColumnWatcherSaga() {
  yield takeEvery(fetchColumn.TRIGGER, fetchColumnFlow);
}

export function* createColumnWatcherSaga() {
  yield takeEvery(addColumn.TRIGGER, createColumnFlow);
}

function* fetchColumnFlow({payload}) {
  try {
    yield put(fetchColumn.request());
    const response = yield call(fetchColumnRequest, payload);
    yield put(fetchColumn.success(response));
  } catch (error) {
    yield put(fetchColumn.failure(error.message));
  } finally {
    yield put(fetchColumn.fulfill());
  }
}

function* createColumnFlow({payload}) {
  try {
    yield put(addColumn.request());
    const response = yield call(createColumnRequest, payload);
    yield put(addColumn.success(response));
  } catch (error) {
    yield put(addColumn.failure(error.message));
  } finally {
    yield put(addColumn.fulfill());
  }
}
