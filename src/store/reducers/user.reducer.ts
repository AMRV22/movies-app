import { UserState } from "store/slice/user";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  DELETE_TOKEN_ACTION,
  DELETE_USER_ACTION,
  STORE_USER_ACTION,
} from "./..//actions/user.action";
import UserCredentials from "./../../utils/types/UserCredentials";
import { initialState } from "./../../store/slice/user";
import { login } from "./../../api/entities/Login";

const deleteTokenReducer = (state: UserState, action: PayloadAction<void>) => {
  if (action.type === DELETE_TOKEN_ACTION) {
    return {
      ...state,
      token: initialState.token,
    };
  }
  return {
    ...state,
  };
};

const deleteUserReducer = (state: UserState, action: PayloadAction<void>) => {
  if (action.type === DELETE_USER_ACTION) {
    return {
      ...state,
      user: initialState.user,
    };
  }
  return {
    ...state,
  };
};

const loadingReducer = (state: UserState, action: PayloadAction<boolean>) => {
  if (action.type === DELETE_USER_ACTION) {
    return {
      ...state,
      loading: action.payload,
    };
  }
  return {
    ...state,
  };
};

const thunkLoginReducer = createAsyncThunk(
  STORE_USER_ACTION,
  async (params: UserCredentials, thunkApi) => {
    const response = await login(params);
    return {
      token: response.token,
      email: params.email,
    };
  }
);

export {
  deleteTokenReducer,
  deleteUserReducer,
  loadingReducer,
  thunkLoginReducer,
};
