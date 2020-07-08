import request from '../request';

export function changeCardRequest(card) {
  return new Promise((resolve, reject) => {
    request
      .put(`/cards/${card.id}`, card)
      .then(({data}) => resolve(data))
      .catch((error) => reject(error));
  });
}
