import {loading, setError, setIsLoggedIn} from '../../actions/auth'
import {InitialStateType} from './types'
import {initialState} from '../../../constants/auth'
import {authReducer} from './auth'

let startState: InitialStateType =  initialState
beforeEach(() => {
    startState = {
        isLoggedIn: false,
        isLoading: false,
        error: '',
    }
})

test('correct change condition isLoggedIn', () => {
    const action = setIsLoggedIn(true)

    const endState = authReducer(startState, action)

    expect(endState.isLoggedIn).toBe(true)
    expect(endState.isLoading).toBe(false)
    expect(endState.error).toBe('')
})

test('correct change condition isLoading', () => {
    const action = loading(true)

    const endState = authReducer(startState, action)

    expect(endState.isLoggedIn).toBe(false)
    expect(endState.isLoading).toBe(true)
    expect(endState.error).toBe('')
})

test('correct change condition error', () => {
    const action = setError('some error')

    const endState = authReducer(startState, action)

    expect(endState.isLoggedIn).toBe(false)
    expect(endState.isLoading).toBe(false)
    expect(endState.error).toBe('some error')
})