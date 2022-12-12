import React from "react";
import * as S from "./styles";
import MovieDetailComponent from "./../../components/movieDetailComponent";
import IMovie from "../../utils/interfaces/IMovie";

const FavoriteScreen = () => {

  const favoriteMovies = JSON.parse(localStorage.getItem('favorites') ?? "[]") as IMovie[];
  return (
    <S.MoviesContainer>
      <S.MoviesTitle>
        Favorites movies
      </S.MoviesTitle>
      <S.MoviesGrid>
        {
          favoriteMovies && favoriteMovies.map((movie) => (
            <MovieDetailComponent movie={movie} key={movie.id} />
          ))
        }
      </S.MoviesGrid>
    </S.MoviesContainer>
  );
};

export default FavoriteScreen;
