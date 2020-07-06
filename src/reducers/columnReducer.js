import {fetchColumn} from '../routines/columnRoutines';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export function columnReducer(state = initialState, action) {
  switch (action.type) {
    case fetchColumn.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fetchColumn.SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case fetchColumn.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case fetchColumn.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
