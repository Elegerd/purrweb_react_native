import {
  fetchColumn,
  addColumn,
  removeColumn,
  changeColumn,
} from '../routines/columnRoutines';
import {fetchAllData} from '../routines/dataRoutines';
import {logOut} from '../routines/authRoutines';
import {createReducer} from '../createReducer';
import {
  handleFailure,
  handleFulfill,
  handleSuccess,
  handleRequest,
  handleTrigger,
} from '../baseHandle';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const handleAddColumn = {
  ...handleTrigger(addColumn),
  ...handleRequest(addColumn),
  ...handleSuccess(addColumn),
  ...handleFailure(addColumn),
  ...handleFulfill(addColumn),
};

const handleChangeColumn = {
  ...handleTrigger(changeColumn),
  ...handleRequest(changeColumn),
  ...handleSuccess(changeColumn),
  ...handleFailure(changeColumn),
  ...handleFulfill(changeColumn),
};

const handleRemoveColumn = {
  ...handleTrigger(removeColumn),
  ...handleRequest(removeColumn),
  ...handleSuccess(removeColumn),
  ...handleFailure(removeColumn),
  ...handleFulfill(removeColumn),
};

const handleFetchAllData = {
  ...handleTrigger(fetchAllData),
  ...handleFailure(fetchAllData),
  ...handleFulfill(fetchAllData),
};

const handleFetchColumn = {
  ...handleTrigger(fetchColumn),
  ...handleRequest(fetchColumn),
  ...handleSuccess(fetchColumn),
  ...handleFailure(fetchColumn),
  ...handleFulfill(fetchColumn),
};

const handleLogOut = {
  [logOut.SUCCESS]: (state) => ({
    ...state,
    data: null,
    loading: false,
    error: null,
  }),
};

export const columnReducer = createReducer(initialState)({
  ...handleAddColumn,
  ...handleChangeColumn,
  ...handleRemoveColumn,
  ...handleFetchAllData,
  ...handleFetchColumn,
  ...handleLogOut,
});
