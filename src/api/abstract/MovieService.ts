import baseConfig from "./../config/baseConfig";
import {toast} from "react-toastify"
import axios, { AxiosError } from "axios";

const movieServiceApi = axios.create(
  baseConfig(import.meta.env.VITE_MOVIE_API || "https://api.themoviedb.org/3/")
);

movieServiceApi.interceptors.request.use(
  (config) => {
    const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
    if (apiKey) {
      config.params = {
        ...config.params,
        api_key: apiKey,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

movieServiceApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const response = JSON.parse(error.request.response);
    toast(response.errors[0] ?? "Error has occurred", {type: "error"});
  });

const getData = async <T>(endpoint: string, params: T) => {
  try {
    const response = await movieServiceApi.get(endpoint, {
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

export { movieServiceApi, getData };
