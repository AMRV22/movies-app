import IMovieDetail from "utils/interfaces/IMovieDetail";

type ReducerState = {
    movie?: IMovieDetail | null;
    loading?: boolean | null;
}

type ReducerActions = {
    type: string,
    payload: ReducerState
}


const movieDetailReducer = (state: ReducerState, action: ReducerActions) => {
    const { type, payload: { loading, movie } } = action;


    switch (type) {
        case "LOADING":
            return {
                ...state,
                loading
            }
        case "MOVIE":
            return {
                ...state,
                movie
            }
        default:
            return state;

    }
}

export default movieDetailReducer;