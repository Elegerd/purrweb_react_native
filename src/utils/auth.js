import request from '../request';

export function signInRequest(user) {
  return new Promise((resolve, reject) => {
    request
      .post('/auth/sign-in', user)
      .then((response) => {
        if (typeof response.token === 'undefined') {
          throw new Error('Sign In failed');
        }
        return resolve(response);
      })
      .catch((error) => reject(error));
  });
}

export function signUpRequest(user) {
  return new Promise((resolve, reject) => {
    request
      .post('/auth/sign-up', user)
      .then((response) => {
        if (typeof response.token === 'undefined') {
          throw new Error('Sign Up failed');
        }
        return resolve(response);
      })
      .catch((error) => reject(error));
  });
}
