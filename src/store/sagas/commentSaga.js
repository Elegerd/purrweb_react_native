import {call, put, takeEvery, select} from 'redux-saga/effects';
import {
  fetchComment,
  addComment,
  removeComment,
} from '../routines/commentRoutines';
import {fetchCommentRequest} from '../../utils/fetchData';
import {createCommentRequest} from '../../utils/createData';
import {removeCommentRequest} from '../../utils/removeData';
import {addCardComment, removeCardComment} from '../routines/cardRoutines';
import {getComments} from '../selectors/commentSelecotr';
import {getCards} from '../selectors/cardSelector';
import {
  addCommentFromCard,
  removeCommentFromCard,
  removeObjectById,
} from '../../utils/dataHandler';

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
    const comments = yield select(getComments);
    const cards = yield select(getCards);
    const newComment = yield call(createCommentRequest, payload);
    yield put(addComment.success([...comments, newComment]));
    yield put(
      addCardComment.success(
        addCommentFromCard(payload.cardId, newComment.id, cards),
      ),
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
    const comments = yield select(getComments);
    const cards = yield select(getCards);
    yield call(removeCommentRequest, payload.commentId);
    yield put(
      removeComment.success(removeObjectById(payload.commentId, comments)),
    );
    yield put(
      removeCardComment.success(
        removeCommentFromCard(payload.cardId, payload.commentId, cards),
      ),
    );
  } catch (error) {
    yield put(removeComment.failure(error.message));
  } finally {
    yield put(removeComment.fulfill());
  }
}
