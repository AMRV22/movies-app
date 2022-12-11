import IMovie from "./../IMovie";

interface IMovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export default IMovieResponse;
