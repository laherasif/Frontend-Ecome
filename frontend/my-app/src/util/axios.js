import axios from "axios";

// Add a request interceptor
export const Instance = axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // config.headers.Authorization = `Bearer ${your_token}`;
    // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
    config.baseURL = "http://localhost:5000/api/";

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
