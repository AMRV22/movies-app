import { createSlice } from "@reduxjs/toolkit";
import {
  thunkFilterMoviesReducer,
  thunkPopularMovieReducer,
} from "./../reducers/movie.reducer";
import IMovie from "utils/interfaces/IMovie";

export type MovieState = {
  page: number;
  loading: boolean;
  movies: IMovie[];
  totalPages: number;
  isFiltered: boolean;
};

const initialState: MovieState = {
  page: 0,
  loading: false,
  movies: [],
  totalPages: 0,
  isFiltered: false,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunkPopularMovieReducer.fulfilled, (_, action) => {
        const { page, results, total_pages, isFiltered } = action.payload;
        return {
          page,
          movies: results,
          totalPages: total_pages,
          loading: false,
          isFiltered,
        };
      })
      .addCase(thunkPopularMovieReducer.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(thunkPopularMovieReducer.rejected, (state) => {
        return {
          ...state,
          loading: false,
        };
      });

    builder
      .addCase(thunkFilterMoviesReducer.fulfilled, (_, action) => {
        const { page, results, total_pages, isFiltered } = action.payload;
        return {
          page,
          movies: results,
          totalPages: total_pages,
          loading: true,
          isFiltered,
        };
      })
      .addCase(thunkFilterMoviesReducer.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(thunkFilterMoviesReducer.rejected, () => {
        return {
          ...initialState,
        };
      });
  },
});

export default movieSlice.reducer;
