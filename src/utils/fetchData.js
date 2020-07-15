import request from '../request';

export function fetchColumnRequest() {
  return request.get('/columns').then(({data}) => data);
}

export function fetchCardRequest() {
  return request.get('/cards').then(({data}) => data);
}

export function fetchCommentRequest() {
  return request.get('/comments').then(({data}) => data);
}

export function fetchAllDataRequest() {
  return Promise.all([
    request.get('/columns'),
    request.get('/cards'),
    request.get('/comments'),
  ]).then((response) => {
    return {
      columns: response[0].data,
      cards: response[1].data,
      comments: response[2].data,
    };
  });
}
