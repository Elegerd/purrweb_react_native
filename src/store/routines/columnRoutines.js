import {createRoutine} from 'redux-saga-routines';
import {
  FETCH_COLUMN,
  ADD_COLUMN,
  CHANGE_COLUMN,
  REMOVE_COLUMN,
} from '../actions/columnActions';

export const fetchColumn = createRoutine(FETCH_COLUMN);

export const addColumn = createRoutine(ADD_COLUMN);

export const changeColumn = createRoutine(CHANGE_COLUMN);

export const removeColumn = createRoutine(REMOVE_COLUMN);
