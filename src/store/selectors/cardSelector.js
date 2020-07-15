import {createSelector} from 'reselect';

export const getCards = (state) => state.cards.data;

export const getCardError = (state) => state.cards.error;

export const getCardIsLoading = (state) => state.cards.loading;

const getColumnId = (_, column) => column.id;

const getCardsSelector = (cards, columnId) =>
  cards.filter((card) => card.columnId === columnId);

const getFilterCardsSelector = (cards, columnId) => {
  const columnCards = cards.filter((card) => card.columnId === columnId);
  return {
    checkedCards: columnCards.filter((card) => card.checked),
    uncheckedCards: columnCards.filter((card) => !card.checked),
  };
};

const cardSelector = createSelector(getCards, getColumnId, getCardsSelector);

const filterCardSelector = createSelector(
  getCards,
  getColumnId,
  getFilterCardsSelector,
);

export const getColumnCards = (column) => (state) =>
  cardSelector(state, column);

export const getFilterColumnCards = (column) => (state) =>
  filterCardSelector(state, column);

const getCardId = (_, card) => card.id;

const getCardByIdSelector = (cards, cardId) =>
  cards.find((card) => card.id === cardId);

const cardByIdSelector = createSelector(
  getCards,
  getCardId,
  getCardByIdSelector,
);

export const getCardById = (card) => (state) => cardByIdSelector(state, card);
