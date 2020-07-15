import request from '../request';

export function changeColumnRequest(column) {
  return request.put(`/columns/${column.id}`, column).then(({data}) => data);
}

export function changeCardRequest(card) {
  return request.put(`/cards/${card.id}`, card).then(({data}) => data);
}
