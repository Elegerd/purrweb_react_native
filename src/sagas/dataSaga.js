import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchAllData} from '../routines/dataRoutines';
import {fetchColumn} from '../routines/columnRoutines';
import {fetchCard} from '../routines/cardRoutines';
import {fetchComment} from '../routines/commentRoutines';

import {fetchAllDataRequest} from '../utils/fetchData';

export function* fetchDataWatcherSaga() {
  yield takeEvery(fetchAllData.TRIGGER, fetchDataFlow);
}

function* fetchDataFlow() {
  try {
    yield put(fetchAllData.request());
    const response = yield call(fetchAllDataRequest);
    yield put(fetchColumn.success(response.columns));
    yield put(fetchCard.success(response.cards));
    yield put(fetchComment.success(response.comments));
  } catch (error) {
    yield put(fetchAllData.failure(error.message));
  } finally {
    yield put(fetchAllData.fulfill());
  }
}
