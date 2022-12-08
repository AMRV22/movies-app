import baseConfig from "./../config/baseConfig";
import axios, { AxiosError } from "axios";

const loginServiceApi = axios.create(
  baseConfig(import.meta.env.VITE_LOGIN_API || "https://reqres.in/api/")
);

const postData = async <T>(endpoint: string, data?: T) => {
  try {
    const response = await loginServiceApi.post(endpoint, data);

    return response.data;
  } catch (error: unknown) {
    throw new Error((error as AxiosError).message);
  }
};

export { loginServiceApi, postData };
