import {TypedDispatch} from '../store';
import {LoginType} from '../../features/Auth';
import {authAPI} from '../../api/note-api';
import {loading, setError, setIsLoggedIn} from '../actions/auth';

export const login = (data: LoginType) => async (dispatch: TypedDispatch) => {
    dispatch(loading(true))
    try {
        await authAPI.login(data)
        dispatch(setIsLoggedIn(true))
    } catch (error) {
        if (error instanceof Error) {
            dispatch(setError(error.message))
        }
    } finally {
        dispatch(loading(false))
    }
}