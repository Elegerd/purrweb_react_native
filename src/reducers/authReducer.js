import {signIn, signUp, logOut, clearError} from '../routines/authRoutines';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case clearError.TRIGGER:
      return {
        ...state,
        error: null,
      };
    case logOut.TRIGGER:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
    case signIn.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case signIn.SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case signIn.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case signIn.FULFILL:
      return {
        ...state,
        loading: false,
      };
    case signUp.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case signUp.SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case signUp.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case signUp.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
