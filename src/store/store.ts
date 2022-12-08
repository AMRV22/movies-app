import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/user";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
