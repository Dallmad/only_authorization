import {loading, setError, setIsLoggedIn} from '../../actions/auth'
import {initialState} from '../../../constants/auth'

export type InitialStateType = typeof initialState
export type AuthActionsType =
    ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof loading>
    | ReturnType<typeof setError>