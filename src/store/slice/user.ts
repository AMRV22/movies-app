import { createSlice } from "@reduxjs/toolkit";
import {
  loadingReducer,
  setTokenReducer,
  setUserReducer,
} from "./../reducers/user.reducer";
import IUser from "./../../utils/interfaces/IUser";
import { thunkLoginReducer } from "./../reducers/user.reducer";

export type UserState = {
  token: string;
  user: IUser;
  loading: boolean;
};

export const initialState: UserState = {
  token: "",
  user: {
    email: "",
  },
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLoading: loadingReducer,
    setToken: setTokenReducer,
    setUser: setUserReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoginReducer.fulfilled, (state, action) => {
      const { email, token } = action.payload;
      return {
        ...state,
        token,
        user: {
          email,
        },
        loading: false,
      };
    });
    builder.addCase(thunkLoginReducer.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
  },
});

export const { setLoading, setUser, setToken } =
  userSlice.actions;

export default userSlice.reducer;
