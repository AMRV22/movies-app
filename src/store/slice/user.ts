import { createSlice } from "@reduxjs/toolkit";
import {
  deleteTokenReducer,
  deleteUserReducer,
  loadingReducer,
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
    lastName: "",
    name: "",
  },
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    deleteToken: deleteTokenReducer,
    deleteUser: deleteUserReducer,
    setLoading: loadingReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLoginReducer.fulfilled, (state, action) => {
      return {
        ...state,
        token: action.payload,
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

export const { deleteToken, deleteUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
