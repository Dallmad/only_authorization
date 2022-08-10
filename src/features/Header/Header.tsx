import React from 'react'
import {TITLE} from '../../constants/header'
import {HeaderWrapper} from './Header.styles'

export const Header:React.FC = () => {

    return (
        <HeaderWrapper>
            {TITLE}
        </HeaderWrapper>
    )
}