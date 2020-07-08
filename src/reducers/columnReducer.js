import {fetchColumn, addColumn, removeColumn} from '../routines/columnRoutines';
import {fetchAllData} from '../routines/dataRoutines';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export function columnReducer(state = initialState, action) {
  switch (action.type) {
    case addColumn.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case addColumn.SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        error: null,
      };
    case addColumn.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case addColumn.FULFILL:
      return {
        ...state,
        loading: false,
      };
    case removeColumn.TRIGGER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case removeColumn.SUCCESS:
      return {
        ...state,
        data: state.data.filter((column) => column.id !== action.payload),
        error: null,
      };
    case removeColumn.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case removeColumn.FULFILL:
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
