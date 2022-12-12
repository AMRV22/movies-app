import React, { useCallback, useState, useEffect, KeyboardEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { ReactComponent as SearchIcon } from "@/assets/svg/search.svg";
import Input from "../../components/styledComponents/elements/inputs";
import MovieDetailComponent from "../../components/movieDetailComponent";
import Pagination from "./../../components/pagination/";
import useAppDispatch from "./../../utils/hook/useAppDispatch";
import * as S from "./styles";
import {
  thunkFilterMoviesReducer,
  thunkPopularMovieReducer,
} from "./../../store/reducers/movie.reducer";
import useAppSelector from "./../../utils/hook/useAppSelector";
import debounce from "./../../utils/functions/debounce";

const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [realSearch, setRealSearch] = useState("");
  const { loading, movies, page, totalPages, isFiltered } = useAppSelector(
    (store) => store.movie
  );
  const dispatch = useAppDispatch();
  const debounceDispatch = debounce(dispatch, 100);
  const [queryParams, setQueryParam] = useSearchParams();

  const searchMovie = useCallback(
    (_search?: string | null, _page?: string | null) => {
      const searchParam = _search ?? realSearch;
      if (
        _page &&
        _page.trim().length > 0 &&
        Number(_page) &&
        searchParam &&
        searchParam.trim().length > 0
      ) {
        setRealSearch(searchParam);
        debounceDispatch(
          thunkFilterMoviesReducer({
            page: Number(_page),
            query: searchParam,
          })
        );
      } else if (
        _page &&
        _page.trim().length > 0 &&
        Number(_page) &&
        (!searchParam || searchParam.trim().length === 0)
      ) {
        debounceDispatch(thunkPopularMovieReducer({ page: Number(_page) }));
      }
    },
    [realSearch]
  );

  const handleKeyDown = (event: KeyboardEvent) => {
    const _page = queryParams.get("_page");
    if (event.key.toLowerCase() === "enter") {
      if (_page && _page.trim().length > 0 && Number(_page)) {
        setQueryParam({
          _page,
          _search: search,
        });
      }
    }
  };

  const handleClick = () => {
    const _page = queryParams.get("_page");
    if (_page && _page.trim().length > 0 && Number(_page)) {
      setQueryParam({
        _page,
        _search: search,
      });
    }
  };

  useEffect(() => {
    const _search = queryParams.get("_search");
    const _page = queryParams.get("_page");
    setSearch(_search ?? "");
    searchMovie(_search, _page);
  }, [queryParams]);

  useEffect(() => {
    console.log(movies, isFiltered, totalPages);
  }, [movies]);

  return (
    <S.HomeContainer>
      <div className='space-y-8 py-16 rounded-md'>
        <div className='grid md:grid-cols-4 sm:grid-cols-1'>
          <S.MoviesContainer>
            <S.MoviesTitle>
              {!isFiltered && "Current Popular Movies"}
              {isFiltered && `Search: ${realSearch}`}
            </S.MoviesTitle>
            <S.MoviesGrid>
              {
                movies && movies.map((movie) => (
                  <MovieDetailComponent movie={movie} key={movie.id} />
                ))
              }
            </S.MoviesGrid>
            <Pagination total={totalPages} />
          </S.MoviesContainer>
          <div className='row-start-1 md:row-span-2 flex flex-col py-4 px-4 '>
            <div className='flex'>
              <div className='mx-4 w-full'>
                <Input
                  id='search'
                  name='search'
                  placeholder='Search movie'
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <S.SearchButton onClick={handleClick}>
                <SearchIcon className='h-4 w-4 stroke-2' />
              </S.SearchButton>
            </div>
          </div>
        </div>
      </div>

    </S.HomeContainer>
  );
};

export default HomeScreen;
