import {TypedDispatch} from '../store'
import {authAPI} from '../../api/auth-api'
import {loading, setError, setIsLoggedIn} from '../actions/auth'
import {LoginType} from '../../common/types'

export const login = (data: LoginType) => async (dispatch: TypedDispatch) => {
    dispatch(loading(true))
    try {
        const timer = await setTimeout(() => {
            dispatch(setIsLoggedIn(true))
            dispatch(loading(false))
        }, 2500);
        return () => clearTimeout(timer)
        authAPI.login(data)
    } catch (error) {
        if (error instanceof Error) {
            dispatch(loading(false))
            dispatch(setError(error.message))
        }
    }
}