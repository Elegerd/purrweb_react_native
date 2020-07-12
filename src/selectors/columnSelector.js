import {createSelector} from 'reselect';

export const getColumns = (state) => state.columns.data;

export const getColumnError = (state) => state.columns.error;

export const getColumnIsLoading = (state) => state.columns.loading;

const getColumnId = (_, column) => column.id;

const getColumnByIdSelector = (columns, columnId) =>
  columns.find((column) => column.id === columnId);

const columnByIdSelector = createSelector(
  getColumns,
  getColumnId,
  getColumnByIdSelector,
);

export const getColumnById = (column) => (state) =>
  columnByIdSelector(state, column);
