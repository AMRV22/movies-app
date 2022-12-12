import { AxiosError } from "axios";
import MovieFilters from "./../../utils/types/MovieFilters";
import IMovieResponse from "./../../utils/interfaces/apiResponses/IMovieResponse";
import  IMovieDetail  from "./../../utils/interfaces/IMovieDetail";
import { getData } from "./../abstract/MovieService";
import IMovieCast from "./../../utils/interfaces/IMovieCast";

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

const getDetailMovie = async (id: number) => {
  try {
    const response = await getData(`movie/${id}`, {});
    return response as IMovieDetail;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const getMovieCast = async (id: number) => {
  try {
    const response = await getData(`movie/${id}/credits`, {});
    return response as {cast: IMovieCast[]};
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const getRelatedMovies = async (id: number) => {
  try {
    const response = await getData(`movie/${id}/similar`, {});
    return response as IMovieResponse;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};


export { getPopularMovies, getFilteredMovies, getDetailMovie, getMovieCast, getRelatedMovies };
