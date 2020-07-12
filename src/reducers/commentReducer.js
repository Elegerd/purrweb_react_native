import {fetchAllData} from '../routines/dataRoutines';
import {
  addComment,
  fetchComment,
  removeComment,
} from '../routines/commentRoutines';
import {logOut} from '../routines/authRoutines';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export function commentReducer(state = initialState, action) {
  switch (action.type) {
    case addComment.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case addComment.SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        error: null,
      };
    case addComment.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case addComment.FULFILL:
      return {
        ...state,
        loading: false,
      };
    case removeComment.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case removeComment.SUCCESS:
      return {
        ...state,
        data: state.data.filter((comment) => comment.id !== action.payload),
        error: null,
      };
    case removeComment.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case removeComment.FULFILL:
      return {
        ...state,
        loading: false,
      };
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
    case logOut.TRIGGER:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
