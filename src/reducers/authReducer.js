import {signIn, signUp, logOut} from '../routines/index';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case logOut.TRIGGER:
      return {
        ...state,
        data: null,
      };
    case signIn.TRIGGER:
      return {
        ...state,
        loading: true,
      };
    case signIn.SUCCESS:
      return {
        ...state,
        data: action.payload,
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
      };
    case signUp.SUCCESS:
      return {
        ...state,
        data: action.payload,
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
