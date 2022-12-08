import { postData } from "./../abstract/LoginService";
import UserCredentials from "./../../utils/types/UserCredentials";
import { AxiosError } from "axios";
import ILoginResponse from "./../../utils/interfaces/apiResponses/ILoginResponse";

const login = async (params: UserCredentials) => {
  try {
    const response = await postData("/login", params);
    return response as ILoginResponse;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

export { login };
