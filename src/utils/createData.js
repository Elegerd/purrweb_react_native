import request from '../request';

export function createColumnRequest(column) {
  return new Promise((resolve, reject) => {
    request
      .post('/columns', column)
      .then(({data}) => resolve(data))
      .catch((error) => reject(error));
  });
}

export function createCardRequest({columnId, card}) {
  return new Promise((resolve, reject) => {
    request
      .post(`/columns/${columnId}/cards`, card)
      .then(({data}) => resolve({...data, commentsIds: []}))
      .catch((error) => reject(error));
  });
}

export function createCommentRequest(comment) {
  return new Promise((resolve, reject) => {
    request
      .post('/comments', comment)
      .then(({data}) => resolve(data))
      .catch((error) => reject(error));
  });
}
