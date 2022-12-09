import React from "react";
import { ReactComponent as SearchIcon } from "@/assets/svg/search.svg";
import Input from "../../components/styledComponents/elements/inputs";
import * as S from "./styles";
import MovieDetailComponent from "../../components/movieDetailComponent";
import GenresChipComponent from "../../components/genresChipComponent";

const HomeScreen = () => {
  return (
    <S.HomeContainer>
      <div className="space-y-8 py-16 rounded-md">
        <div className="grid md:grid-cols-4 sm:grid-cols-1">
          <S.MoviesContainer>
            <S.MoviesTitle>Current Popular Movies</S.MoviesTitle>
            <S.MoviesGrid>
              <MovieDetailComponent />
            </S.MoviesGrid>
          </S.MoviesContainer>
          <div className="row-start-1 md:row-span-2 flex flex-col py-4 px-4 ">
            <div className="flex">
              <div className="mx-4 w-full">
                <Input id="search" name="search" placeholder="Search movie" />
              </div>
              <S.SearchButton>
                <SearchIcon className="h-4 w-4 stroke-2" />
              </S.SearchButton>
            </div>
            <div className="flex flex-col my-6">
              <S.GenresTitle>Genres</S.GenresTitle>
              <div className="grid grid-cols-3  gap-4 mx-4">
                <GenresChipComponent name="Action" />
                <GenresChipComponent name="Action" />
                <GenresChipComponent name="Action" />
                <GenresChipComponent name="Action" />
                <GenresChipComponent name="Action" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.HomeContainer>
  );
};

export default HomeScreen;
