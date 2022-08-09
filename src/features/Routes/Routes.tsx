import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {PATH} from '../../constants/routes';
import {Error404} from '../ErrorPage/Error404';
import {Profile} from '../Profile/Profile';
import {Authorization} from '../Auth/Authorization';

export const AppRoutes:React.FC = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={PATH.AUTHORIZATION}/>}/>
                <Route path={PATH.AUTHORIZATION} element={<Authorization/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.ERROR404} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={PATH.ERROR404}/>}/>
            </Routes>
        </div>
    )
}