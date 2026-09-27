import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://team-sync-backend-n78w.onrender.com/api',
  withCredentials: true,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Axios Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;