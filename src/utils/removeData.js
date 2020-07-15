import request from '../request';

export function removeColumnRequest(columnId) {
  return request.delete(`/columns/${columnId}`).then(({data}) => data);
}

export function removeCardRequest(cardId) {
  return request.delete(`/cards/${cardId}`).then(({data}) => data);
}

export function removeCommentRequest(commentId) {
  return request.delete(`/comments/${commentId}`).then(({data}) => data);
}
