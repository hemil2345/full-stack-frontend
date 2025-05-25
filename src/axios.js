import axios from 'axios';

const api = axios.create({
  baseURL: 'https://273b-3-89-143-79.ngrok-free.app/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access');  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
