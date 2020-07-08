import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchComment, addComment} from '../routines/commentRoutines';
import {fetchCommentRequest} from '../utils/fetchData';
import {createCommentRequest} from '../utils/createData';

export function* fetchCommentWatcherSaga() {
  yield takeEvery(fetchComment.TRIGGER, fetchCommentFlow);
}

export function* createCommentWatcherSaga() {
  yield takeEvery(addComment.TRIGGER, createCommentFlow);
}

function* fetchCommentFlow() {
  try {
    yield put(fetchComment.request());
    const response = yield call(fetchCommentRequest);
    yield put(fetchComment.success(response));
  } catch (error) {
    yield put(fetchComment.failure(error.message));
  } finally {
    yield put(fetchComment.fulfill());
  }
}

function* createCommentFlow({payload}) {
  try {
    yield put(addComment.request());
    const response = yield call(createCommentRequest, payload);
    yield put(addComment.success(response));
  } catch (error) {
    yield put(addComment.failure(error.message));
  } finally {
    yield put(addComment.fulfill());
  }
}
