import request from '../request';

export function signInRequest(user) {
  return new Promise((resolve, reject) => {
    request
      .post('/auth/sign-in', user)
      .then(({data}) => {
        if (typeof data.token === 'undefined') {
          throw new Error('Sign In: Something went wrong');
        }
        return resolve(data);
      })
      .catch((error) => reject(error));
  });
}

export function signUpRequest(user) {
  return new Promise((resolve, reject) => {
    request
      .post('/auth/sign-up', user)
      .then(({data}) => {
        if (typeof data.token === 'undefined') {
          throw new Error('Sign Up: Something went wrong');
        }
        return resolve(data);
      })
      .catch((error) => reject(error));
  });
}
