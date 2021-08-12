// const token = localStorage.getItem('@App:token');
// const options = {
//   mode: 'cors',
//   headers: {
//     'Content-type': 'application/json',
//     // 'credentials': 'include',
//     'Authorization': `Bearer ${token ? token : ''}`
//   },
// }


// const BASE_URL = 'http://localhost:8000'
// const fetchData = (url, fetchOptions) => {
//   const data = fetch(`${BASE_URL}/${url}`, fetchOptions)
//   .then(response => response.json())
//   .catch(err => { console.error('Failed retrieving information', err)})


//   return data
// }

// export const get = url => {
//   const optionsGet = {
//     ...options,
//     method: 'GET',
//   }
  
//   const data = fetchData(url, optionsGet)
  
//   return data
// }

// export const post = (url, payload) => {
//   const optionsPost = {
//     ...options,
//     method: 'POST',
//     body: JSON.stringify(payload)
//   }
//   const data = fetchData(url, optionsPost)

//   return data
// }


// export const put = (url ,payload) => {
//   const optionsPut = {
//     ...options,
//     method: 'PUT',
//     body: JSON.stringify(payload)
//   }
//   const data = fetchData(url, optionsPut)

//   return data
// }

// export const del = url => {
//   const optionsDelete = {
//     ...options,
//     method: 'DELETE',
//   }
  
//   const data = fetchData(url, optionsDelete)
  
//   return data
// }


import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('@App:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// api.interceptors.request.use((request) => {
//   console.log(request)
//   if (request.data.status === 200) {
//     console.log('olá')
//   }
//   return request;
// });

export default api;