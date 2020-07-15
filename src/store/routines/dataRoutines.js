import {createRoutine} from 'redux-saga-routines';
import {FETCH_ALL_DATA} from '../actions/dataActions';

export const fetchAllData = createRoutine(FETCH_ALL_DATA);
