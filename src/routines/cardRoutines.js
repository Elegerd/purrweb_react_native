import {createRoutine} from 'redux-saga-routines';
import {
  FETCH_CARD,
  ADD_CARD,
  CHANGE_CARD,
  REMOVE_CARD,
} from '../actions/cardActions';

export const fetchCard = createRoutine(FETCH_CARD);

export const addCard = createRoutine(ADD_CARD);

export const changeCard = createRoutine(CHANGE_CARD);

export const removeCard = createRoutine(REMOVE_CARD);
