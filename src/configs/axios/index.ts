import axios from "axios";

export const AxiosCreate = axios.create({
  baseURL: "https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/",
});

AxiosCreate.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

AxiosCreate.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("access-token");
      window.location.reload();
    }
    throw err;
  }
);
