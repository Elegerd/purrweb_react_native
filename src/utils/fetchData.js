import request from '../request';

export function fetchColumnRequest() {
  return new Promise((resolve, reject) => {
    request
      .get('/columns')
      .then(({data}) => resolve(data))
      .catch((error) => reject(error));
  });
}

export function createColumnRequest(column) {
  return new Promise((resolve, reject) => {
    request
      .post('/columns', column)
      .then(({data}) => resolve(data))
      .catch((error) => reject(error));
  });
}
