import request from '../request';

export function signInRequest(user) {
  return new Promise((resolve, reject) => {
    request
      .post('/auth/sign-in', user)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function signUpRequest(user) {
  return new Promise((resolve, reject) => {
    request
      .post('/auth/sign-up', user)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
