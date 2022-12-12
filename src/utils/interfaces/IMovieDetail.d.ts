import IMovie from "./IMovie";
import IGenre from "./IGenre";
interface IMovieDetail extends IMovie{
    budget: number;
    genres: IGenre[];
    imdb_id: string;
    status: string;
}

export default IMovieDetail;

