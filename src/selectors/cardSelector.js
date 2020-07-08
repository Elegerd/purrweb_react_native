import {createSelector} from 'reselect';

export const getCards = (state) => state.cards.data;

export const getCardError = (state) => state.cards.error;

export const getCardIsLoading = (state) => state.cards.loading;

const getColumnId = (_, column) => column.id;

const getCardsSelector = (cards, column_id) =>
  cards.filter((card) => card.columnId === column_id);

const getFilterCardsSelector = (cards, column_id) => {
  const columnCards = cards.filter((card) => card.columnId === column_id);
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
