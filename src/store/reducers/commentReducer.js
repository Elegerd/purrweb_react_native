import {fetchAllData} from '../routines/dataRoutines';
import {
  addComment,
  fetchComment,
  removeComment,
} from '../routines/commentRoutines';
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

const handleAddComment = {
  ...handleTrigger(addComment),
  ...handleRequest(addComment),
  ...handleSuccess(addComment),
  ...handleFailure(addComment),
  ...handleFulfill(addComment),
};

const handleRemoveComment = {
  ...handleTrigger(removeComment),
  ...handleRequest(removeComment),
  ...handleSuccess(removeComment),
  ...handleFailure(removeComment),
  ...handleFulfill(removeComment),
};

const handleFetchAllData = {
  ...handleTrigger(fetchAllData),
  ...handleFailure(fetchAllData),
  ...handleFulfill(fetchAllData),
};

const handleFetchComment = {
  ...handleTrigger(fetchComment),
  ...handleRequest(fetchComment),
  ...handleSuccess(fetchComment),
  ...handleFailure(fetchComment),
  ...handleFulfill(fetchComment),
};

const handleLogOut = {
  [logOut.SUCCESS]: (state) => ({
    ...state,
    data: null,
    loading: false,
    error: null,
  }),
};

export const commentReducer = createReducer(initialState)({
  ...handleAddComment,
  ...handleRemoveComment,
  ...handleFetchAllData,
  ...handleFetchComment,
  ...handleLogOut,
});
