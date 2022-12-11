import { AxiosError } from "axios";
import MovieFilters from "./../../utils/types/MovieFilters";
import IMovieResponse from "./../../utils/interfaces/apiResponses/IMovieResponse";
import { getData } from "./../abstract/MovieService";

type RequestParams = {
  page: number;
};

const getPopularMovies = async (params?: RequestParams) => {
  try {
    const response = await getData("movie/popular", params);
    return response as IMovieResponse;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const getFilteredMovies = async (params: MovieFilters) => {
  try {
    const response = await getData("search/movie", params);
    return response as IMovieResponse;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

export { getPopularMovies, getFilteredMovies };
