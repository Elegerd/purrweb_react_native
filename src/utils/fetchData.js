import request from '../request';

export function fetchColumnRequest() {
  return new Promise((resolve, reject) => {
    request
      .get('/columns')
      .then(({data}) => resolve(data))
      .catch((error) => reject(error));
  });
}

export function fetchCardRequest() {
  return new Promise((resolve, reject) => {
    request
      .get('/cards')
      .then(({data}) => resolve(data))
      .catch((error) => reject(error));
  });
}

export function fetchCommentRequest() {
  return new Promise((resolve, reject) => {
    request
      .get('/comments')
      .then(({data}) => resolve(data))
      .catch((error) => reject(error));
  });
}

export function fetchAllDataRequest() {
  return new Promise((resolve, reject) => {
    Promise.all([
      request.get('/columns'),
      request.get('/cards'),
      request.get('/comments'),
    ])
      .then((response) => {
        return resolve({
          columns: response[0].data,
          cards: response[1].data,
          comments: response[2].data,
        });
      })
      .catch((error) => reject(error));
  });
}
