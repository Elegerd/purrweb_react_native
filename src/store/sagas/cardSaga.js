import {call, put, select, takeEvery} from 'redux-saga/effects';
import {
  fetchCard,
  addCard,
  changeCard,
  removeCard,
} from '../routines/cardRoutines';
import {fetchCardRequest} from '../../utils/fetchData';
import {createCardRequest} from '../../utils/createData';
import {removeCardRequest} from '../../utils/removeData';
import {changeCardRequest} from '../../utils/changeData';
import {getCards} from '../selectors/cardSelector';
import {changeObjectById, removeObjectById} from '../../utils/dataHandler';

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
    const cards = yield select(getCards);
    const newCard = yield call(createCardRequest, payload);
    yield put(addCard.success([...cards, newCard]));
  } catch (error) {
    yield put(addCard.failure(error.message));
  } finally {
    yield put(addCard.fulfill());
  }
}

function* removeCardFlow({payload}) {
  try {
    yield put(removeCard.request());
    const cards = yield select(getCards);
    yield call(removeCardRequest, payload.cardId);
    yield put(removeCard.success(removeObjectById(payload.cardId, cards)));
  } catch (error) {
    yield put(removeCard.failure(error.message));
  } finally {
    yield put(removeCard.fulfill());
  }
}

function* changeCardFlow({payload}) {
  try {
    yield put(changeCard.request());
    const cards = yield select(getCards);
    const changedCard = yield call(changeCardRequest, payload);
    yield put(changeCard.success(changeObjectById(changedCard, cards)));
  } catch (error) {
    yield put(changeCard.failure(error.message));
  } finally {
    yield put(changeCard.fulfill());
  }
}
