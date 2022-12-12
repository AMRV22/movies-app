import IMovieResponse from "./../../../utils/interfaces/apiResponses/IMovieResponse";

type ReducerState = {
    movies?: IMovieResponse | null;
    loading?: boolean | null;
}

type ReducerActions = {
    type: string,
    payload: ReducerState
}


const relatedMoviesReducer = (state: ReducerState, action: ReducerActions) => {
    const { type, payload: { movies, loading } } = action;


    switch (type) {
        case "LOADING":
            return {
                ...state,
                loading,
            }
        case "MOVIES":
            return {
                ...state,
                movies
            }
        default:
            return state;

    }
}

export default relatedMoviesReducer;