import request from '../request';

export function createColumnRequest(column) {
  return request.post('/columns', column).then(({data}) => data);
}

export function createCardRequest({columnId, card}) {
  return request.post(`/columns/${columnId}/cards`, card).then(({data}) => {
    return {...data, commentsIds: []};
  });
}

export function createCommentRequest({cardId, comment}) {
  return request
    .post(`/cards/${cardId}/comments`, comment)
    .then(({data}) => data);
}
