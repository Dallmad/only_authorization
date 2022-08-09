import React from 'react'
import {TITLE} from '../../constants/header';
import {PATH} from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import {HeaderWrapper} from './Header.styles';

export const Header:React.FC = () => {

    return (
        <HeaderWrapper>
            <NavLink
                to={PATH.PROFILE}
                //className={navData => navData.isActive ? 'link_active' : 'link'}
            >{TITLE}</NavLink>
            <NavLink
                to={PATH.AUTHORIZATION}
                //className={navData => navData.isActive ? 'link_active' : 'link'}
            >Auth</NavLink>
            {TITLE}
        </HeaderWrapper>
    )
}