import {createRoutine} from 'redux-saga-routines';
import {
  FETCH_COMMENT,
  ADD_COMMENT,
  CHANGE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/commentActions';

export const fetchComment = createRoutine(FETCH_COMMENT);

export const addComment = createRoutine(ADD_COMMENT);

export const changeComment = createRoutine(CHANGE_COMMENT);

export const removeComment = createRoutine(REMOVE_COMMENT);
