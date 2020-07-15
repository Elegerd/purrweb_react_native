import {fetchAllData} from '../routines/dataRoutines';
import {
  addCard,
  changeCard,
  fetchCard,
  removeCard,
  addCardComment,
  removeCardComment,
} from '../routines/cardRoutines';
import {logOut} from '../routines/authRoutines';
import {createReducer} from '../createReducer';
import {
  handleTrigger,
  handleSuccess,
  handleFailure,
  handleFulfill,
} from '../baseHandle';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const handleAddCard = {
  ...handleTrigger(addCard),
  ...handleSuccess(addCard),
  ...handleFailure(addCard),
  ...handleFulfill(addCard),
};

const handleRemoveCard = {
  ...handleTrigger(removeCard),
  ...handleSuccess(removeCard),
  ...handleFailure(removeCard),
  ...handleFulfill(removeCard),
};

const handleChangeCard = {
  ...handleTrigger(changeCard),
  ...handleSuccess(changeCard),
  ...handleFailure(changeCard),
  ...handleFulfill(changeCard),
};

const handleFetchAllData = {
  ...handleTrigger(fetchAllData),
  ...handleFailure(fetchAllData),
  ...handleFulfill(fetchAllData),
};

const handleFetchCard = {
  ...handleTrigger(fetchCard),
  ...handleSuccess(fetchCard),
  ...handleFailure(fetchCard),
  ...handleFulfill(fetchCard),
};

const handleLogOut = {
  [logOut.SUCCESS]: (state) => ({
    ...state,
    data: null,
    loading: false,
    error: null,
  }),
};

const handleAddCardComment = {
  ...handleSuccess(addCardComment),
};

const handleRemoveCardComment = {
  ...handleSuccess(removeCardComment),
};

export const cardReducer = createReducer(initialState)({
  ...handleAddCard,
  ...handleRemoveCard,
  ...handleChangeCard,
  ...handleFetchAllData,
  ...handleFetchCard,
  ...handleLogOut,
  ...handleAddCardComment,
  ...handleRemoveCardComment,
});
