import {LOADING, SET_ERROR, SET_IS_LOGGED_IN} from '../../constants/auth';
import {loading, setError, setIsLoggedIn} from '../actions/auth';

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    error: '',
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.isLoggedIn}
        case LOADING:
            return {...state, isLoading: action.isLoading}
        case SET_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}

// types
type InitialStateType = typeof initialState
export type AuthActionsType =
    ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof loading>
    | ReturnType<typeof setError>