import {setUser} from '../routines/index';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case setUser.TRIGGER:
      return {
        ...state,
        loading: true,
      };
    case setUser.SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case setUser.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case setUser.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
