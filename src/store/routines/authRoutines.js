import {createRoutine} from 'redux-saga-routines';
import {LOG_OUT, SIGN_IN, SIGN_UP, CLEAR_ERROR} from '../actions/authActions';

export const signIn = createRoutine(SIGN_IN);

export const signUp = createRoutine(SIGN_UP);

export const logOut = createRoutine(LOG_OUT);

export const clearError = createRoutine(CLEAR_ERROR);
