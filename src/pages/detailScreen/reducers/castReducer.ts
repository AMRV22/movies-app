import IMovieCast from "utils/interfaces/IMovieCast";

type ReducerState = {
    cast?: IMovieCast[] | null;
    loading?: boolean | null;
}

type ReducerActions = {
    type: string,
    payload: ReducerState
}


const movieCastReducer = (state: ReducerState, action: ReducerActions) => {
    const { type, payload: { cast, loading } } = action;

    switch (type) {
        case "LOADING":
            return {
                ...state,
                loading,
            }
        case "CAST":
            return {
                ...state,
                cast
            }
        default:
            return state;

    }
}

export default movieCastReducer;