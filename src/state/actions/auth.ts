import {SET_IS_LOGGED_IN, LOADING, SET_ERROR} from '../../constants/auth';

export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: SET_IS_LOGGED_IN, isLoggedIn} as const)
export const loading = (isLoading: boolean) => ({type: LOADING, isLoading} as const)
export const setError = (error: string) => ({type: SET_ERROR, error} as const)