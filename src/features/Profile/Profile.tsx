import React from 'react';
import {ProfileWrapper} from './Profile.styles'
import {EXIT, HELLO} from '../../constants/profile'
import {VALID_EMAIL} from '../../constants/validation'

export const Profile:React.FC = () => {


    return (
        <ProfileWrapper>
            <div>
                {HELLO}{'\u00A0'}
                <label>
                    {VALID_EMAIL}
                </label>
            </div>

            <button>
                {EXIT}
            </button>
        </ProfileWrapper>
    )
}