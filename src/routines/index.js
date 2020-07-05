import {createRoutine} from 'redux-saga-routines';
import {SET_USER} from '../actions/authActions';

export const setUser = createRoutine(SET_USER);
