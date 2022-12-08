import { UserState } from "store/slice/user";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import UserCredentials from "./../../utils/types/UserCredentials";
import { login } from "./../../api/entities/Login";

const setTokenReducer = (state: UserState, action: PayloadAction<string>) => {
  return {
    ...state,
    token: action.payload,
  };
};

const setUserReducer = (state: UserState, action: PayloadAction<string>) => {
  return {
    ...state,
    user: {
      email: action.payload,
    },
  };
};

const loadingReducer = (state: UserState, action: PayloadAction<boolean>) => {
  return {
    ...state,
    loading: action.payload,
  };
};

const thunkLoginReducer = createAsyncThunk(
  "STORE_USER_ACTION",
  async (params: UserCredentials) => {
    const response = await login(params);
    localStorage.setItem("user-email", params.email);
    localStorage.setItem("user-token", response.token);
    return {
      token: response.token,
      email: params.email,
    };
  }
);

export { loadingReducer, setUserReducer, setTokenReducer, thunkLoginReducer };
