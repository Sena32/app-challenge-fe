
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST || 'http://localhost:8000/',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('@App:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export default api;