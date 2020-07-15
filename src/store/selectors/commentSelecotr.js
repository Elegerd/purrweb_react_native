import {createSelector} from 'reselect';

export const getComments = (state) => state.comments.data;

export const getCommentError = (state) => state.comments.error;

export const getCommentIsLoading = (state) => state.comments.loading;

const getCardId = (_, card) => card.id;

const getCommentsSelector = (comments, cardId) =>
  comments.filter((comment) => comment.cardId === cardId);

const commentSelector = createSelector(
  getComments,
  getCardId,
  getCommentsSelector,
);

export const getCardComments = (card) => (state) =>
  commentSelector(state, card);
