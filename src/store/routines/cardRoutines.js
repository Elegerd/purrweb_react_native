import {createRoutine} from 'redux-saga-routines';
import {
  FETCH_CARD,
  ADD_CARD,
  CHANGE_CARD,
  REMOVE_CARD,
  ADD_CARD_COMMENT,
  REMOVE_CARD_COMMENT,
} from '../actions/cardActions';

export const fetchCard = createRoutine(FETCH_CARD);

export const addCard = createRoutine(ADD_CARD);

export const changeCard = createRoutine(CHANGE_CARD);

export const removeCard = createRoutine(REMOVE_CARD);

export const addCardComment = createRoutine(ADD_CARD_COMMENT);

export const removeCardComment = createRoutine(REMOVE_CARD_COMMENT);
