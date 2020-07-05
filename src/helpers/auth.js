import request from '../request';

export function signIn(user) {
  return new Promise((resolve, reject) => {
    request
      .post(`/auth/sign-in`, user)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function signUp(user) {
  return new Promise((resolve, reject) => {
    request
      .post(`/auth/sign-up`, user)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
