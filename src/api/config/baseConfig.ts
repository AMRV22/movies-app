import { AxiosRequestConfig } from "axios";

const baseConfig: (baseUri: string) => AxiosRequestConfig = (baseUri) => ({
  baseURL: baseUri,
  responseType: "json",
});

export default baseConfig;
