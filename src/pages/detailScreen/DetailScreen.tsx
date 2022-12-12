import React, { useState, useReducer, useEffect, useCallback } from "react";
import { ReactComponent as HeartIcon } from "@/assets/svg/heart.svg";
import RatingComponent from "./../../components/ratingComponent";
import GenresChipComponent from "./../../components/genresChipComponent";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import movieDetailReducer from "./reducers/movieDetailReducer";
import relatedMoviesReducer from "./reducers/relatedMovies";
import movieCastReducer from "./reducers/castReducer";
import { getDetailMovie, getMovieCast, getRelatedMovies } from "../../api/entities/Movie";
import moment from "moment";
import MovieDetailComponent from "./../../components/movieDetailComponent";
import IMovie from "../../utils/interfaces/IMovie";


const movieDetail = { movie: null, loading: false };
const movieCast = { cast: [], loading: false };
const relatedMovies = { movies: null, loading: false };

const DetailScreen = () => {
  const { id } = useParams<{ id: string }>();

  const [movieState, movieDispatch] = useReducer(movieDetailReducer, movieDetail);
  const [relatedMoviesState, relatedMoviesDispatch] = useReducer(relatedMoviesReducer, relatedMovies);
  const [castState, castDispatch] = useReducer(movieCastReducer, movieCast);
  const [favorite, setFavorite] = useState(false);

  const { movie } = movieState;

  const handleFavorite = useCallback(
    () => {
      const movieFav = JSON.parse(localStorage.getItem('favorites') ?? "[]") as IMovie[];
      let auxMovieFav = [...movieFav];
      if (movie) {
        if (!(movieFav?.find((target) => target.id === movie?.id))) {
          auxMovieFav.push(movie);
        } else {
          let index = movieFav?.findIndex((target) => target.id === movie.id);
          auxMovieFav.splice(index, 1);
        }
        setFavorite((prev) => !prev);
      }
      localStorage.setItem('favorites', JSON.stringify(auxMovieFav));
    },
    [movie],
  )


  useEffect(() => {
    if (!id && id?.length === 0 && !Number(id))
      return

    const getMovieDetail = async () => {
      movieDispatch({ type: "LOADING", payload: { loading: true } });
      const response = await getDetailMovie(Number(id));
      const movie = {
        ...response,
        poster_path: import.meta.env.VITE_MOVIE_IMAGES_URL + response.poster_path,
      }
      movieDispatch({ type: "MOVIE", payload: { movie: movie } });
      movieDispatch({ type: "LOADING", payload: { loading: false } });
    }

    const getCast = async () => {
      castDispatch({ type: "LOADING", payload: { loading: true } });
      const { cast } = await getMovieCast(Number(id));
      const auxCast = cast.map((col) => ({
        ...col,
        profile_path: import.meta.env.VITE_MOVIE_IMAGES_URL + col.profile_path
      }))
      castDispatch({ type: "CAST", payload: { cast: auxCast } });
      castDispatch({ type: "LOADING", payload: { loading: false } });
    }

    const getRelated = async () => {
      relatedMoviesDispatch({ type: "LOADING", payload: { loading: true } });
      const response = await getRelatedMovies(Number(id));
      const auxMovies = {
        ...response,
        results: response.results.map((result) => ({
          ...result,
          poster_path: import.meta.env.VITE_MOVIE_IMAGES_URL + result.poster_path,
          backdrop_path:
            import.meta.env.VITE_MOVIE_IMAGES_URL + result.poster_path,
        }))
      }
      relatedMoviesDispatch({ type: "MOVIES", payload: { movies: auxMovies } });
      relatedMoviesDispatch({ type: "LOADING", payload: { loading: false } });
    }
    getMovieDetail();
    getCast();
    getRelated();
  }, [id]);


  useEffect(() => {
    const movieFav = JSON.parse(localStorage.getItem('favorites') ?? "[]") as IMovie[];
    if (id && movieFav && movieFav.length > 0) {
      const selectedMovie = movieFav.find((target) => target.id === Number(id));
      setFavorite(!!selectedMovie);
    }
  }, [id])


  if (!movie || movieState.loading)
    return (
      <div >
        ...Loading
      </div>)

  return (
    <div className='flex flex-col'>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 my-16 mx-8'>
        <div className='flex flex-col col-span-1'>
          <div className='w-full overflow-hidden rounded-lg '>
            <img
              src={movie.poster_path}
              className='h-full w-full object-cover object-center lg:h-full lg:w-full'
            />
          </div>
          <div className='flex content-end justify-center  my-2'>
            <RatingComponent rating={(movie.vote_average / 10) * 5} size={12} />
          </div>
        </div>

        <div className='flex flex-col col-span-2 shadow-lg'>
          <div className='flex justify-between items-center mx-8'>
            <div className='flex flex-col'>
              <S.MovieTitle>{movie.title}</S.MovieTitle>
              <div className='flex '>
                <p className='text-gray-500 mr-4'>{moment(movie.release_date).format("MMM Do YY")}</p>
                <p>
                  IMDB <strong className='text-secondary'> {movie.vote_average}</strong>
                </p>
              </div>
            </div>
            <button onClick={handleFavorite}>
              <HeartIcon className={`stroke-red-bg stroke-2 h-12 w-12 ${favorite ? "fill-red-bg" : ""}`} />
            </button>
          </div>
          <div className='flex justify-between items-center mx-8 my-8'>
            <p className='text-gray-500'>
              {movie.overview}
            </p>
          </div>
          <div className='flex flex-col mx-8 '>
            <p className='text-gray-500 mb-4'>Genres:</p>
            <div className='flex flex-row gap-4 '>
              {
                movie.genres && movie.genres.map((genre) => (
                  <GenresChipComponent name={genre.name} key={genre.id} />
                ))
              }
            </div>
          </div>

          <div className='flex flex-col mx-8 my-8'>
            <p className='text-gray-500 mb-4'>Top Cast:</p>
            <div className='grid grid-cols-6  gap-4 max-h-80 overflow-y-auto'>
              {
                castState.cast && castState.cast.map((cast) => (
                  <div key={cast.id} className='flex flex-col items-center'>
                    <img
                      className='inline-block object-cover object-center h-16 w-16 rounded-full ring-2 ring-white'
                      src={cast.profile_path}
                      alt=''
                    />
                    <p className='text-gray-500 text-center'>{cast.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col mx-8'>
        <p className="text-2xl  font-avenir-bold font-bold tracking-tight text-primary">Related movies</p>
        <div className="d-flex">
          <S.MoviesGrid>
            {
              relatedMoviesState.movies && relatedMoviesState.movies.results.map((movie) => (
                <MovieDetailComponent movie={movie} key={movie.id} />
              ))
            }
          </S.MoviesGrid>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
