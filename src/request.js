import axios from 'axios';

const request = () => {
  const defaultOptions = {
    baseURL: 'https://trello-purrweb.herokuapp.com',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function (config) {
    const data = localStorage.getItem('auth');
    if (data && data.token)
      config.headers.Authorization = `Bearer ${data.token}`;
    return config;
  });

  return instance;
};

export default request();
