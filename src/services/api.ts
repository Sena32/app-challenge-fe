
import axios from 'axios';
import { appendFile } from 'fs';

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

export function errorInterceptor() {
  api.interceptors.response.use(null, (error) => {
      const { response } = error;
      if (!response) {
          // network error
          console.error(error);
          return;
      }
  
      if ([401, 403].includes(response.status) ) {
          // auto logout if 401 or 403 response returned from api
          localStorage.clear()
      }

      const errorMessage = response.data?.message || response.statusText;
      console.error('ERROR:', errorMessage);
  });
}


export default api;