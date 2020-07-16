import request from '../request';

export function signInRequest(user) {
  return request.post('/auth/sign-in', user).then(({data}) => data);
}

export function signUpRequest(user) {
  return request.post('/auth/sign-up', user).then(({data}) => data);
}
