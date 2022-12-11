import { createAsyncThunk } from "@reduxjs/toolkit";
import MovieFilters from "utils/types/MovieFilters";
import {
  getFilteredMovies,
  getPopularMovies,
} from "./../../api/entities/Movie";

type PopularMoviesParameter = {
  page: number;
};

const thunkPopularMovieReducer = createAsyncThunk(
  "STORE_POPULAR_MOVIES",
  async (params: PopularMoviesParameter) => {
    const response = await getPopularMovies(params);
    const mutedResponse = {
      ...response,
      results: response.results.map((result) => ({
        ...result,
        poster_path: import.meta.env.VITE_MOVIE_IMAGES_URL + result.poster_path,
        backdrop_path:
          import.meta.env.VITE_MOVIE_IMAGES_URL + result.poster_path,
      })),
      isFiltered: false,
    };
    return mutedResponse;
  }
);

const thunkFilterMoviesReducer = createAsyncThunk(
  "STORE_FILTER_MOVIES",
  async (params: MovieFilters) => {
    const response = await getFilteredMovies(params);
    const mutedResponse = {
      ...response,
      results: response.results.map((result) => ({
        ...result,
        poster_path: import.meta.env.VITE_MOVIE_IMAGES_URL + result.poster_path,
        backdrop_path:
          import.meta.env.VITE_MOVIE_IMAGES_URL + result.poster_path,
      })),
      isFiltered: true,
    };
    return mutedResponse;
  }
);

export { thunkPopularMovieReducer, thunkFilterMoviesReducer };
