import {fetchAllData} from '../routines/dataRoutines';
import {
  addCard,
  changeCard,
  fetchCard,
  removeCard,
} from '../routines/cardRoutines';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export function cardReducer(state = initialState, action) {
  switch (action.type) {
    case addCard.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case addCard.SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        error: null,
      };
    case addCard.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case addCard.FULFILL:
      return {
        ...state,
        loading: false,
      };
    case removeCard.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case removeCard.SUCCESS:
      return {
        ...state,
        data: state.data.filter((column) => column.id !== action.payload),
        error: null,
      };
    case removeCard.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case removeCard.FULFILL:
      return {
        ...state,
        loading: false,
      };
    case changeCard.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case changeCard.SUCCESS:
      return {
        ...state,
        data: state.data.map((card) => {
          if (card.id === action.payload.id) {
            return action.payload;
          }
          return card;
        }),
        error: null,
      };
    case changeCard.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case changeCard.FULFILL:
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
    case fetchCard.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fetchCard.SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case fetchCard.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case fetchCard.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
