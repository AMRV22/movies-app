import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/user";
import movie from "./slice/movie";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    user,
    movie,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
