export const handleTrigger = (routine) => {
  return {
    [routine.TRIGGER]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
  };
};

export const handleSuccess = (routine) => {
  return {
    [routine.SUCCESS]: (state, {payload}) => ({
      ...state,
      data: payload,
      error: null,
    }),
  };
};

export const handleFailure = (routine) => {
  return {
    [routine.FAILURE]: (state, {payload}) => ({
      ...state,
      error: payload,
    }),
  };
};

export const handleFulfill = (routine) => {
  return {
    [routine.FULFILL]: (state) => ({
      ...state,
      loading: false,
    }),
  };
};
