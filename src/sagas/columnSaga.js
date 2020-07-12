import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchColumn,
  addColumn,
  removeColumn,
  changeColumn,
} from '../routines/columnRoutines';
import {fetchColumnRequest} from '../utils/fetchData';
import {createColumnRequest} from '../utils/createData';
import {removeColumnRequest} from '../utils/removeData';
import {changeColumnRequest} from '../utils/changeData';

export function* fetchColumnWatcherSaga() {
  yield takeEvery(fetchColumn.TRIGGER, fetchColumnFlow);
}

export function* createColumnWatcherSaga() {
  yield takeEvery(addColumn.TRIGGER, createColumnFlow);
}

export function* changeColumnWatcherSaga() {
  yield takeEvery(changeColumn.TRIGGER, changeColumnFlow);
}

export function* removeColumnWatcherSaga() {
  yield takeEvery(removeColumn.TRIGGER, removeColumnFlow);
}

function* fetchColumnFlow() {
  try {
    yield put(fetchColumn.request());
    const response = yield call(fetchColumnRequest);
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

function* changeColumnFlow({payload}) {
  try {
    yield put(changeColumn.request());
    const response = yield call(changeColumnRequest, payload);
    yield put(changeColumn.success(response));
  } catch (error) {
    yield put(changeColumn.failure(error.message));
  } finally {
    yield put(changeColumn.fulfill());
  }
}

function* removeColumnFlow({payload}) {
  try {
    yield put(removeColumn.request());
    yield call(removeColumnRequest, payload);
    yield put(removeColumn.success(payload));
  } catch (error) {
    yield put(removeColumn.failure(error.message));
  } finally {
    yield put(removeColumn.fulfill());
  }
}
