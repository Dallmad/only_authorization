import React from 'react'
import {ProfileWrapper} from './Profile.styles'
import {EXIT, HELLO} from '../../constants/profile'
import {VALID_EMAIL} from '../../constants/validation'
import {AppRootStateType, useTypedDispatch} from '../../state/store'
import {setIsLoggedIn} from '../../state/actions/auth'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

export const Profile: React.FC = () => {

    const dispatch = useTypedDispatch()

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const onClickExit = () => {
        dispatch(setIsLoggedIn(false))
    }

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

    return (
        <ProfileWrapper>
            <div>
                {HELLO}{'\u00A0'}
                <label>
                    {VALID_EMAIL}
                </label>
            </div>

            <button onClick={() => onClickExit()}>
                {EXIT}
            </button>

        </ProfileWrapper>
    )
}