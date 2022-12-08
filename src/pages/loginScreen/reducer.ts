type reducerActions = {
    type: string,
    payload: string
}

type reducerState = {
    email: string,
    password: string
}

type reducerValidActions = {
    type: string,
    payload: {[k: string]: boolean}
}

type reducerValidState = {
    validEmail: {[k: string]: boolean},
    validPassword: {[k: string]: boolean},
}

const loginReducer = (state: reducerState, action: reducerActions) => {
    const { type, payload } = action;

    switch (type) {
        case "email":
            return {
                ...state,
                email: payload
            }
        case "password":
            return {
                ...state,
                password: payload
            }
        default:
            return state;
    }
}

const validationsReducer = (state: reducerValidState, action: reducerValidActions) => {
    const { type, payload } = action;

    switch (type) {
        case "email":
            return {
                ...state,
                validEmail: payload
            }
        case "password":
            return {
                ...state,
                validPassword: payload
            }
        default:
            return state;
    }
}




export {loginReducer,validationsReducer};