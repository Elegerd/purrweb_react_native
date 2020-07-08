import {fetchAllData} from '../routines/dataRoutines';
import {fetchComment} from '../routines/commentRoutines';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export function commentReducer(state = initialState, action) {
  switch (action.type) {
    case fetchAllData.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fetchAllData.FULFILL:
      return {
        ...state,
        loading: false,
      };
    case fetchAllData.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case fetchComment.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fetchComment.SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case fetchComment.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case fetchComment.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
