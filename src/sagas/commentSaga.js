import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchComment,
  addComment,
  removeComment,
} from '../routines/commentRoutines';
import {fetchCommentRequest} from '../utils/fetchData';
import {createCommentRequest} from '../utils/createData';
import {removeCommentRequest} from '../utils/removeData';
import {addCardComment, removeCardComment} from '../routines/cardRoutines';

export function* fetchCommentWatcherSaga() {
  yield takeEvery(fetchComment.TRIGGER, fetchCommentFlow);
}

export function* createCommentWatcherSaga() {
  yield takeEvery(addComment.TRIGGER, createCommentFlow);
}

export function* removeCommentWatcherSaga() {
  yield takeEvery(removeComment.TRIGGER, removeCommentFlow);
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
    yield put(
      addCardComment.success({cardId: payload.cardId, commentId: response.id}),
    );
  } catch (error) {
    yield put(addComment.failure(error.message));
  } finally {
    yield put(addComment.fulfill());
  }
}

function* removeCommentFlow({payload}) {
  try {
    yield put(removeComment.request());
    yield call(removeCommentRequest, payload.commentId);
    yield put(removeComment.success(payload.commentId));
    console.log({
      cardId: payload.cardId,
      commentId: payload.commentId,
    });
    yield put(
      removeCardComment.success({
        cardId: payload.cardId,
        commentId: payload.commentId,
      }),
    );
  } catch (error) {
    yield put(removeComment.failure(error.message));
  } finally {
    yield put(removeComment.fulfill());
  }
}
