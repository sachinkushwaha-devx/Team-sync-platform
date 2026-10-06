import axios from "axios";

export const SESSION_EXPIRED_EVENT = "auth:session-expired";

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
  async (error) => {
    let originalReq = error.config;
    const isRefreshRequest = originalReq?.url?.includes("/auth/get-accessToken");
    if (
      !originalReq ||
      error.response?.status !== 401 ||
      originalReq._retry ||
      isRefreshRequest
    ) {
      return Promise.reject(error);
    }

    originalReq._retry = true;
    try {
      await axiosInstance.get('/auth/get-accessToken');
      return axiosInstance(originalReq);
    } catch (refreshError) {
      window.dispatchEvent(new Event(SESSION_EXPIRED_EVENT));
      return Promise.reject(refreshError);
    }
  }
);

export default axiosInstance;