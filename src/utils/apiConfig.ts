import axios from "axios";

// export const headers: any = {
//   "Content-Type": "application/json;charset=utf-8",
// };

export const defaultConfiguration: any = {
  baseURL: process.env.API_BASEURL,
  // headers,
};

export const api = axios.create(defaultConfiguration);

export const apiWithToken = axios.create(defaultConfiguration);

apiWithToken.interceptors.request.use(
  async (config: any) => {
    config.headers.Authorization = "Bearer Yz9NMNJp56L3gPr4PWfh4zZ3U48h";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
