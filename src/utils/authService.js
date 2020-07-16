export const authService = (response) => {
  if (typeof response.token === 'undefined') {
    throw new Error('Sign In: Something went wrong');
  }
};
