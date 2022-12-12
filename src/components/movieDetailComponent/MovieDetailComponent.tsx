import React from "react";
import RatingComponent from "../ratingComponent";
import * as S from "./styles";
import IMovie from "utils/interfaces/IMovie";
import {Link} from "react-router-dom";

type MovieProps = {
  movie: IMovie
}

const MovieDetailComponent = ({movie}: MovieProps) => {
  return (
    <Link to={`/${movie.id}`}>
     <S.MovieCard>
      <S.PosterContainer>
        <img
          src={movie.poster_path}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </S.PosterContainer>
      <div className="my-4 mx-4 flex flex-col">
        <div className="flex justify-between items-center">
          <S.MovieTitle>
           {movie.title}
          </S.MovieTitle>
        </div>
        <div className="flex items-center my-2">
          <S.MovieOverview>
            {movie.overview}
          </S.MovieOverview>
        </div>
        <div className="flex items-center my-2 justify-between">
          <p className="text-base font-avenir  tracking-tight text-gray-500">
            Release date:
          </p>
          <p className="text-base font-avenir  tracking-tight text-primary">
           {movie.release_date}
          </p>
        </div>
        <RatingComponent
          rating={(movie.vote_average / 10) * 5}
          size={8} />
      </div>
    </S.MovieCard>
    </Link>
   
  );
};

export default MovieDetailComponent;
