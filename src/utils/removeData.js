import request from '../request';

export function removeColumnRequest(columnId) {
  return new Promise((resolve, reject) => {
    request
      .delete(`/columns/${columnId}`)
      .then(({data}) => resolve(data))
      .catch((error) => reject(error));
  });
}
